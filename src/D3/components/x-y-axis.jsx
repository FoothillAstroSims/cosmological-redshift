import React  from 'react';
import Axis   from './Axis';

export default (props) => {
    const settings = {
        translate: `translate(0, ${props.height - props.padding})`,
        xScale: props.xScale,
        yScale: props.yScale,
        height: 200,
        offSet: 0,
        padding: 30,
        paddingLeft: 45
    };

    return <g className="xy-axis">
        <Axis {...settings}/>
    </g>
}