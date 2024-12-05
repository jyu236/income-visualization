'use client';

import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { MajorCategory, RawData, simplifyMajorCategory, SubSubCategory } from "../data";
import { useState, useMemo } from "react";
import { defaultStyles, useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { Grid } from "@visx/grid";
import { Group } from "@visx/group";
import { Color, PrimaryColor } from "../color";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Bar } from "@visx/shape";
import { localPoint } from "@visx/event";

let tooltipTimeout: number;

const getMajorCategory = <T extends {name: string}, K extends T['name']>(data: T): K => data.name as K;

const defaultMargin = { top: 20, right: 0, bottom: 30, left: 95 };

// Legend component
const Legend = ({ 
    items, 
    onItemClick 
}: { 
    items: { name: string; color: string }[];
    onItemClick?: (name: string) => void;
}) => (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-4 px-4">
        {items.map((item) => (
            <div 
                key={item.name}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => onItemClick?.(item.name)}
            >
                <div 
                    className="w-4 h-4" 
                    style={{ backgroundColor: item.color }}
                />
                <span className="text-sm">{item.name}</span>
            </div>
        ))}
    </div>
);

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
    const [incomeType, setIncomeType] = useState<'median' | 'average'>('median');
    const [isSort, setIsSort] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<MajorCategory | null>(null);

    const sortedData = useMemo(() => 
        [...data].sort((a, b) => {
            if (!isSort) return 0;
            
            const getValue = (d: RawData) => {
                return incomeType === 'median' 
                    ? d.data.medianIncome 
                    : d.data.averageIncome;
            };

            return getValue(b) - getValue(a);
        }),
        [data, isSort, incomeType]
    );

    const xDomain = useMemo(() => {
        if (expandedCategory) {
            const expandedData = sortedData.find(d => getMajorCategory(d) === expandedCategory);
            return expandedData ? expandedData.subSubCategories.map(s => s.name) : [];
        }
        return sortedData.map(d => simplifyMajorCategory(getMajorCategory(d)));
    }, [sortedData, expandedCategory]);

    // Generate legend items based on current view
    const legendItems = useMemo(() => {
        if (expandedCategory) {
            const expandedData = sortedData.find(d => getMajorCategory(d) === expandedCategory);
            const baseColor = Color[expandedCategory];
            return expandedData?.subSubCategories.map((subCat, index, array) => ({
                name: subCat.name,
                color: `${baseColor}${Math.round((1 - (index / (array.length + 1))) * 255).toString(16).padStart(2, '0')}`
            })) || [];
        }
        return sortedData.map(d => ({
            name: simplifyMajorCategory(getMajorCategory(d)),
            color: Color[getMajorCategory(d)]
        }));
    }, [sortedData, expandedCategory]);

    const majorCategoryScale = scaleBand<string>({
        domain: xDomain,
        padding: 0.1,
    });

    const colorScale = scaleOrdinal<MajorCategory, string>({
        domain: sortedData.map(getMajorCategory<RawData, MajorCategory>),
        range: sortedData.map(getMajorCategory<RawData, MajorCategory>).map(c => Color[c]),
    });

    const medianIncome = data.map(d => d.data.medianIncome);
    const averageIncome = data.map(d => d.data.averageIncome);
    const medianIncomeScale = scaleLinear<number>({
        domain: [0, Math.max(
            ...medianIncome,
            ...data.flatMap(d => d.subSubCategories.map(s => s.data.medianIncome))
        )],
        nice: true,
    });
    const averageIncomeScale = scaleLinear<number>({
        domain: [0, Math.max(
            ...averageIncome,
            ...data.flatMap(d => d.subSubCategories.map(s => s.data.averageIncome))
        )],
        nice: true,
    });

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    majorCategoryScale.rangeRound([0, xMax]);
    medianIncomeScale.range([yMax, 0]);
    averageIncomeScale.range([yMax, 0]);

    const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } =
        useTooltip<{
            bar: SubSubCategory | RawData;
            key: string;
            index: number;
            isSubCategory?: boolean;
        }>();

    const { containerRef, TooltipInPortal } = useTooltipInPortal({
        scroll: true,
    });

    const tooltipStyles = {
        ...defaultStyles,
        minWidth: 60,
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: 'white',
    };

    const handleLegendClick = (name: string) => {
        if (!expandedCategory) {
            const category = sortedData.find(d => 
                simplifyMajorCategory(getMajorCategory(d)) === name
            );
            if (category) {
                setExpandedCategory(getMajorCategory(category));
            }
        } else {
            setExpandedCategory(null);
        }
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
            {expandedCategory && (
                <button
                    className="btn btn-primary btn-xs"
                    onClick={() => setExpandedCategory(null)}
                >
                    Back to Categories
                </button>
            )}
        </div>
        <div className="relative flex flex-col items-center justify-center gap-3">
            <svg ref={containerRef} width={width} height={height}>
                <Grid
                    top={margin.top}
                    left={margin.left}
                    xScale={majorCategoryScale}
                    yScale={incomeType === 'median' ? medianIncomeScale : averageIncomeScale}
                    width={width}
                    height={height}
                    stroke={PrimaryColor}
                    strokeOpacity={0.1}
                    xOffset={majorCategoryScale.bandwidth() / 2}
                />
                <Group top={margin.top} left={margin.left}>
                    {expandedCategory ? (
                        sortedData
                            .find(d => getMajorCategory(d) === expandedCategory)
                            ?.subSubCategories.map((subCat, subIndex, array) => {
                                const baseColor = colorScale(expandedCategory);
                                const barWidth = majorCategoryScale.bandwidth();
                                const barHeight = yMax - (incomeType === 'median'
                                    ? medianIncomeScale(subCat.data.medianIncome)
                                    : averageIncomeScale(subCat.data.averageIncome));
                                const barX = majorCategoryScale(subCat.name);
                                const barY = yMax - barHeight;

                                return (
                                    <Bar
                                        key={`bar-${subCat.name}`}
                                        x={barX}
                                        y={barY}
                                        width={barWidth}
                                        height={barHeight}
                                        fill={`${baseColor}${Math.round((1 - (subIndex / (array.length + 1))*0.7) * 255).toString(16).padStart(2, '0')}`}
                                        onClick={() => setExpandedCategory(null)}
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
                                                    bar: subCat,
                                                    key: expandedCategory,
                                                    index: subIndex,
                                                    isSubCategory: true
                                                },
                                                tooltipTop: eventSvgCoords?.y,
                                                tooltipLeft: eventSvgCoords?.x,
                                            });
                                        }}
                                    />
                                );
                            })
                    ) : (
                        sortedData.map((d, index) => {
                            const baseColor = colorScale(getMajorCategory(d));
                            const majorCat = simplifyMajorCategory(getMajorCategory(d));
                            const barWidth = majorCategoryScale.bandwidth();
                            const barHeight = yMax - (incomeType === 'median' 
                                ? medianIncomeScale(d.data.medianIncome) 
                                : averageIncomeScale(d.data.averageIncome));
                            const barX = majorCategoryScale(majorCat);
                            const barY = yMax - barHeight;
                            
                            return (
                                <Bar
                                    key={`bar-${getMajorCategory(d)}`}
                                    x={barX}
                                    y={barY}
                                    width={barWidth}
                                    height={barHeight}
                                    fill={baseColor}
                                    onClick={() => setExpandedCategory(getMajorCategory(d))}
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
                                                isSubCategory: false
                                            },
                                            tooltipTop: eventSvgCoords?.y,
                                            tooltipLeft: eventSvgCoords?.x,
                                        });
                                    }}
                                />
                            );
                        })
                    )}
                </Group>
                <AxisBottom
                    top={yMax + margin.top}
                    left={margin.left}
                    scale={majorCategoryScale}
                    tickFormat={(d) => d}
                    stroke={PrimaryColor}
                    tickStroke={PrimaryColor}
                    tickLabelProps={{
                        fill: PrimaryColor,
                        fontSize: 14,
                        textAnchor: 'middle',
                        angle: 45,
                        dy: 10
                    }}
                />
                <AxisLeft
                    left={margin.left}
                    top={margin.top}
                    scale={incomeType === 'median' ? medianIncomeScale : averageIncomeScale}
                    stroke={PrimaryColor}
                    tickStroke={PrimaryColor}
                    tickLabelProps={{
                        fill: PrimaryColor,
                        fontSize: 14,
                        textAnchor: 'end',
                        dx: -4
                    }}
                    label={incomeType === 'median' ? 'Median Income ($)' : 'Average Income ($)'}
                    labelProps={{
                        fill: PrimaryColor,
                        fontSize: 14,
                        textAnchor: 'middle',
                        dy: -40,
                        dx: -35
                    }}
                />
            </svg>
            {tooltipOpen && tooltipData && (
                <TooltipInPortal
                    top={tooltipTop}
                    left={tooltipLeft}
                    style={tooltipStyles}
                >
                    <div>
                        <strong>{tooltipData.isSubCategory 
                            ? (tooltipData.bar as SubSubCategory).name 
                            : getMajorCategory(tooltipData.bar as RawData)}</strong>
                    </div>
                    <div>
                        $ {incomeType === 'median' 
                            ? tooltipData.bar.data.medianIncome 
                            : tooltipData.bar.data.averageIncome}
                    </div>
                </TooltipInPortal>
            )}
        </div>
        <Legend 
            items={legendItems}
            onItemClick={handleLegendClick}
        />
    </div>;
}