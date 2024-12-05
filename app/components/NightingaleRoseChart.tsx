'use client';

import { scaleBand, scaleLinear, scaleOrdinal, scaleRadial } from "@visx/scale";
import { MajorCategory, RawData, simplifyMajorCategory, SubSubCategory } from "../data";
import { useState, useMemo } from "react";
import { defaultStyles, useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { Group } from "@visx/group";
import { Color } from "../color";
import { Arc } from "@visx/shape";
import { localPoint } from "@visx/event";

let tooltipTimeout: number;

const getMajorCategory = <T extends {name: string}, K extends T['name']>(data: T): K => data.name as K;

const defaultMargin = { top: 0, right: 0, bottom: 0, left: 0 };

export default function StackBarChart({
    data,
    width,
    height,
    margin = defaultMargin,
}: {
    data: RawData[]
    width: number
    height: number
    events?: boolean
    margin?: {
        top: number
        right: number
        bottom: number
        left: number
    }
}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [rotation, setRotation] = useState(0);
    const [incomeType, setIncomeType] = useState<'median' | 'average'>('median');
    const [isSort, setIsSort] = useState(false);
    const [selectedMajor, setSelectedMajor] = useState<MajorCategory | "all">("all");

    const sortedData = useMemo(() => {
        let filteredData: RawData[] | SubSubCategory[] = [...data];

        // Filter by selected major category
        if (selectedMajor !== "all") {
            const majorCategory = filteredData.find(d => d.name === selectedMajor) as RawData;
            if (majorCategory) {
                filteredData = majorCategory.subSubCategories.map(subCat => ({
                    name: subCat.name,
                    data: subCat.data,
                    subSubCategories: []
                }));
            } else {
                filteredData = [];
            }
        }

        const finalData = filteredData.map(d => ({
            name: d.name,
            employment: d.data.employment,
            income: incomeType === 'median' ? d.data.medianIncome : d.data.averageIncome
        }));

        if (isSort) {
            finalData.sort((a, b) => a.income - b.income);
        }

        return finalData;
    }, [data, incomeType, isSort, selectedMajor]);

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    const radiusMax = Math.min(xMax, yMax) / 2;
    const innerRadius = radiusMax / 3;

    const totalEmployment = useMemo(
        () => sortedData.reduce((sum, d) => sum + d.employment, 0),
        [sortedData]
    );
    const gapAngle = 0.05;
    const totalGaps = sortedData.length * gapAngle;
    const xScale = useMemo(
        () =>
          scaleLinear<number>({
            range: [0 + rotation, 2 * Math.PI + rotation - totalGaps],
            domain: [0, totalEmployment],
          }),
        [rotation, totalEmployment, totalGaps],
    );
    const getAngles = (index: number, startValue: number, employment: number) => {
        return {
            startAngle: xScale(startValue) + (index * gapAngle),
            endAngle: xScale(startValue + employment) + (index * gapAngle)
        };
    };
    const yScale = useMemo(
        () =>
          scaleRadial<number>({
            range: [innerRadius, radiusMax],
            domain: [0, Math.max(...sortedData.map(d => d.income))],
          }),
        [innerRadius, radiusMax, sortedData],
    );

    const majorCategoryScale = scaleBand<string>({
        domain: data.map(getMajorCategory<RawData, MajorCategory>).map(simplifyMajorCategory),
        padding: 0.1,
    });

    const colorScale = scaleOrdinal<string, string>({
        domain: data.map(getMajorCategory<RawData, MajorCategory>).map(simplifyMajorCategory),
        range: data.map(getMajorCategory<RawData, MajorCategory>).map(c => Color[c]),
    });

    majorCategoryScale.rangeRound([0, xMax]);

    const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } =
        useTooltip<{
            bar: {
                name: string;
                income: number; 
                employment: number;
            };
            key: string;
            index: number;
        }>();
    const { containerRef, TooltipInPortal } = useTooltipInPortal({
        // TooltipInPortal is rendered in a separate child of <body /> and positioned
        // with page coordinates which should be updated on scroll. consider using
        // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
        scroll: true,
    });
    const tooltipStyles = {
        ...defaultStyles,
        minWidth: 60,
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: 'white',
    };

    return <div className="flex flex-col p-2 gap-2">
        <div className="w-full flex flex-row gap-2 items-center justify-end">
            <select
                className="select select-primary select-xs max-w-xs"
                value={incomeType}
                onChange={(e) => setIncomeType(e.target.value as 'median' | 'average')}
            >
                <option value="median">Median Income</option>
                <option value="average">Average Income</option>
            </select>
            <label className="label cursor-pointer flex flex-row items-center gap-2">
                <input
                    type="checkbox" 
                    checked={isSort}
                    onChange={(e) => setIsSort(e.target.checked)}
                    className="checkbox checkbox-primary checkbox-xs" 
                />
                <span className="label-text font-bold">Sort</span>
            </label>
        </div>
        <div className="relative flex flex-row items-start justify-center gap-5">
            <svg ref={containerRef} width={width} height={height}>
                <Group top={yMax / 2 + margin.top} left={xMax / 2 + margin.left}>
                    {sortedData.map((d, index) => {
                        const { startAngle, endAngle } = getAngles(index, sortedData.map(d => d.employment).slice(0, index).reduce((sum, d) => sum + d, 0), d.employment);
                        const outerRadius = yScale(d.income) ?? 0;
                        const fillColor = selectedMajor === "all" ? 
                            colorScale(simplifyMajorCategory(d.name as MajorCategory)) : 
                            `${colorScale(simplifyMajorCategory(selectedMajor))}${Math.round((1 - (index / (sortedData.length + 1))) * 255).toString(16).padStart(2, '0')}`;

                        return (
                            <Arc
                                key={`bar-${d.name}`}
                                cornerRadius={4}
                                startAngle={startAngle}
                                endAngle={endAngle}
                                outerRadius={outerRadius}
                                innerRadius={innerRadius}
                                fill={fillColor}
                                onClick={() => {
                                    if (selectedMajor === "all") {
                                        setSelectedMajor(d.name as MajorCategory);
                                    } else {
                                        setSelectedMajor("all");
                                    }
                                }}
                                onMouseLeave={() => {
                                    tooltipTimeout = window.setTimeout(() => {
                                    hideTooltip();
                                    }, 300);
                                }}
                                onMouseMove={(event) => {
                                    if (tooltipTimeout) clearTimeout(tooltipTimeout);
                                    const eventSvgCoords = localPoint(event);
                                    showTooltip({
                                        tooltipData: {
                                            bar: d,
                                            key: getMajorCategory(d),
                                            index: sortedData.indexOf(d),
                                        },
                                        tooltipTop: eventSvgCoords?.y,
                                        tooltipLeft: eventSvgCoords?.x,
                                    });
                                }}
                            />
                        );
                    })}
                </Group>
            </svg>
            {tooltipOpen && tooltipData && (
                <TooltipInPortal
                    top={tooltipTop}
                    left={tooltipLeft}
                    style={tooltipStyles}
                >
                    <div>
                        <strong>{getMajorCategory(tooltipData.bar)}</strong>
                    </div>
                    <div>
                        {tooltipData.bar.employment} employees
                    </div>
                    <div>
                        {incomeType === 'median' ? 'Median Income' : 'Average Income'}: $ {tooltipData.bar.income}
                    </div>
                </TooltipInPortal>
            )}
        </div>
    </div>;
}
