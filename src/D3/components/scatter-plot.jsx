import React from 'react';
import DataCircles  from './data-circles';
import Line  from './line';
import XYAxis       from './x-y-axis';
import * as d3 from "d3/dist/d3";

// Returns the largest X coordinate from the data set
const xMax   = (data)  => data.length;

// Returns the largest Y coordinate from the data set
const yMax   = (data)  => d3.max(data);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
    return d3.scaleLinear()
        .domain([0, xMax(props.data)])
        .range([props.padding, props.width - props.padding]);
        // .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
    return d3.scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

const lineGenerator = (xScaleLine, yScaleLine) => {
    return d3.line()
        .x((d, i) => xScaleLine(i))
        .y(d => yScaleLine(d.y));
};

export default (props) => {
    const scales = { xScale: xScale(props), yScale: yScale(props) };
    const lineData = props.data.map(d => {return {"y": d}; });
    const lineGen = lineGenerator(scales.xScale, scales.yScale);
    return <svg width={props.width} height={props.height}>
        <DataCircles {...props} {...scales} />
        <g>
            <Line
                data={lineData}
                lineGenerator={lineGen}
                width={props.width}
                height={props.height}
            />
        </g>
        <XYAxis {...props} {...scales} />
    </svg>
}
