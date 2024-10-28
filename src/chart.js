import * as d3 from 'd3';

// Sample dataset with Median and Average employment incomes
const data = [
    { field: "Education", medianIncome: 52000, averageIncome: 53000 },
    { field: "Visual and Performing Arts", medianIncome: 48000, averageIncome: 49000 },
    { field: "Humanities", medianIncome: 51000, averageIncome: 52000 },
    { field: "Social and Behavioral Sciences", medianIncome: 56000, averageIncome: 57000 },
    { field: "Business and Management", medianIncome: 65000, averageIncome: 66000 },
    { field: "Physical and Life Sciences", medianIncome: 62000, averageIncome: 63000 },
    { field: "Mathematics and Computer Science", medianIncome: 85000, averageIncome: 86000 },
    { field: "Architecture and Engineering", medianIncome: 80000, averageIncome: 81000 }
];

let currentYMetric = 'medianIncome';
let isSorted = false;

const margin = { top: 20, right: 30, bottom: 40, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create tooltip div
const tooltip = d3.select("#chart")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "1px solid #ddd")
    .style("border-radius", "4px")
    .style("padding", "10px")
    .style("box-shadow", "2px 2px 6px rgba(0, 0, 0, 0.1)")
    .style("pointer-events", "none");

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create scales
const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);

const y = d3.scaleLinear()
    .range([height, 0]);

// Function to update domain based on sort state
function updateDomains() {
    let sortedData = [...data];
    if (isSorted) {
        sortedData.sort((a, b) => b[currentYMetric] - a[currentYMetric]);
    } else {
        // Reset to original order
        sortedData = [...data];
    }
    
    x.domain(sortedData.map(d => d.field));
    y.domain([0, d3.max(sortedData, d => d[currentYMetric])]).nice();
    
    return sortedData;
}

// Initial domain setup
updateDomains();

// Add X axis
const xAxis = svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
const yAxisGroup = svg.append("g")
    .call(d3.axisLeft(y));

// Add Y axis label
const yAxisLabel = svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left)
    .attr("x", -(height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Median Employment Income ($)");

// Function to format currency
const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

// Function to show tooltip
function showTooltip(event, d) {
    const tooltipWidth = 200;  // Approximate width of tooltip
    const tooltipHeight = 100;  // Approximate height of tooltip
    
    // Calculate position relative to viewport
    let left = event.pageX + 10;
    let top = event.pageY - 10;
    
    // Adjust if tooltip would go off right edge of window
    if (left + tooltipWidth > window.innerWidth) {
        left = event.pageX - tooltipWidth - 10;
    }
    
    // Adjust if tooltip would go off bottom edge of window
    if (top + tooltipHeight > window.innerHeight) {
        top = event.pageY - tooltipHeight - 10;
    }

    tooltip.style("opacity", 1)
        .html(`
            <div style="font-weight: bold; margin-bottom: 5px;">${d.field}</div>
            <div style="color: #666;">Median Income: ${formatCurrency.format(d.medianIncome)}</div>
            <div style="color: #666;">Average Income: ${formatCurrency.format(d.averageIncome)}</div>
        `)
        .style("left", left + "px")
        .style("top", top + "px");
}

// Function to hide tooltip
function hideTooltip() {
    tooltip.style("opacity", 0);
}

// Function to handle mouse move
function moveTooltip(event) {
    const tooltipWidth = 200;  // Approximate width of tooltip
    
    let left = event.pageX + 10;
    if (left + tooltipWidth > window.innerWidth) {
        left = event.pageX - tooltipWidth - 10;
    }
    
    tooltip.style("left", left + "px")
        .style("top", (event.pageY - 10) + "px");
}

// Add bars with interactive features
const barsGroup = svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.field))
    .attr("y", d => y(d[currentYMetric]))
    .attr("height", d => height - y(d[currentYMetric]))
    .attr("width", x.bandwidth())
    .style("fill", "#69b3a2")
    .style("transition", "fill 0.2s")
    .on("mouseover", function(event, d) {
        d3.select(this)
            .style("fill", "#4a8c76")
            .style("cursor", "pointer");
        showTooltip(event, d);
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", function() {
        d3.select(this)
            .style("fill", "#69b3a2")
            .style("cursor", "default");
        hideTooltip();
    });

// Add value labels on top of bars
const valueLabels = svg.selectAll(".value-label")
    .data(data)
    .enter().append("text")
    .attr("class", "value-label")
    .attr("x", d => x(d.field) + x.bandwidth() / 2)
    .attr("y", d => y(d[currentYMetric]) - 5)
    .attr("text-anchor", "middle")
    .text(d => formatCurrency.format(d[currentYMetric]));

// Function to update the chart
function updateChart() {
    const sortedData = updateDomains();
    
    // Update x-axis
    svg.select("g")
        .transition()
        .duration(1000)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");
    
    // Update y-axis
    yAxisGroup.transition()
        .duration(1000)
        .call(d3.axisLeft(y));
    
    // Update bars
    const bars = svg.selectAll(".bar")
        .data(sortedData, d => d.field);
    
    bars.transition()
        .duration(1000)
        .attr("x", d => x(d.field))
        .attr("y", d => y(d[currentYMetric]))
        .attr("height", d => height - y(d[currentYMetric]));
    
    // Update value labels
    const labels = svg.selectAll(".value-label")
        .data(sortedData, d => d.field);
    
    labels.transition()
        .duration(1000)
        .attr("x", d => x(d.field) + x.bandwidth() / 2)
        .attr("y", d => y(d[currentYMetric]) - 5)
        .text(d => formatCurrency.format(d[currentYMetric]));
    
    // Update y-axis label
    yAxisLabel.text(
        currentYMetric === 'medianIncome' 
            ? "Median Employment Income ($)" 
            : "Average Employment Income ($)"
    );
}

// Style for the button container
const buttonContainer = d3.select("#chart")
    .append("div")
    .attr("class", "button-container")
    .style("text-align", "center")
    .style("margin-top", "10px");

// Add metric selection buttons
buttonContainer.append("button")
    .text("Median Employment Income")
    .style("margin", "0 5px")
    .style("padding", "8px 16px")
    .style("cursor", "pointer")
    .classed("active", true)
    .on("click", function() {
        currentYMetric = 'medianIncome';
        updateChart();
        buttonContainer.selectAll(".metric-btn").classed("active", false);
        d3.select(this).classed("active", true);
    })
    .classed("metric-btn", true);

buttonContainer.append("button")
    .text("Average Employment Income")
    .style("margin", "0 5px")
    .style("padding", "8px 16px")
    .style("cursor", "pointer")
    .on("click", function() {
        currentYMetric = 'averageIncome';
        updateChart();
        buttonContainer.selectAll(".metric-btn").classed("active", false);
        d3.select(this).classed("active", true);
    })
    .classed("metric-btn", true);

// Add sort toggle button
buttonContainer.append("button")
    .text("Toggle Sort")
    .style("margin", "0 5px")
    .style("padding", "8px 16px")
    .style("cursor", "pointer")
    .classed("sort-btn", true)
    .on("click", function() {
        isSorted = !isSorted;
        updateChart();
        d3.select(this)
            .text(isSorted ? "Reset Order" : "Toggle Sort")
            .classed("active", isSorted);
    });

// Add CSS styles
const style = document.createElement('style');
style.textContent = `
    .button-container button.active {
        background-color: #69b3a2;
        color: white;
        border: none;
    }
    .button-container button:not(.active) {
        background-color: #f8f9fa;
        border: 1px solid #69b3a2;
        color: #69b3a2;
    }
    .button-container {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .tooltip {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
        background-color: rgba(255, 255, 255, 0.95);
    }
`;
document.head.appendChild(style);