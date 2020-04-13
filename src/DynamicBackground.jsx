import React from 'react';

const dimensions = {
    width: 920,
    height: 290,
};

const CENTER_X = 460;
const CENTER_Y = 145;

const SCALING_FACTOR = 50;
const scaleToPixel   = distance => distance * SCALING_FACTOR;

const renderCircles = (props) => {
    return (circleProperties, index) => {
        // console.log(typeof(props.backgroundStars.fill));
        const circleProps = {
            cx: circleProperties.cx,
            cy: circleProperties.cy,
            r: circleProperties.r,
            // fill: props.backgroundStars.fill,
            fill: circleProperties.fill,
            // fill: "#a8a8a8",
            key: index,
        };

        return <circle {...circleProps} />;
    };
};

export default (props) => {
    let distanceFromCenter = scaleToPixel(props.distanceBetweenBodies / 2);

    let sizeShift = 10;
    let galaxySizeShift = 25;
    let xPositionEarth;
    let xPositionGalaxy;

    let initialEarthX = CENTER_X + scaleToPixel(props.params.initialSeparationDistance / 2);
    let initialGalaxyX = CENTER_X - scaleToPixel(props.params.initialSeparationDistance / 2);

    let initialSeparation = props.params.initialSeparationDistance.toFixed(2);
    let currentSeparation = props.distanceBetweenBodies.toFixed(2);

    if (!(distanceFromCenter > CENTER_X - 30)) {
        xPositionEarth = CENTER_X + distanceFromCenter - sizeShift;
        xPositionGalaxy = CENTER_X - distanceFromCenter - galaxySizeShift;
    } else {
        xPositionEarth = 2 * CENTER_X - 40;
        xPositionGalaxy = 30;
    }

    return (
        <svg width={dimensions.width} height={dimensions.height}>
            {/*Black background*/}
            <rect width="100%" height="100%" fill="black"/>

            {/*The stars in the background*/}
            <g>{ props.backgroundStars.map(renderCircles(props)) }</g>


            {/*SVG images for Earth and Galaxy*/}
            <image x={xPositionEarth} y={135 - 10} href="../assets/earth.svg" height="20" width="20"/>
            <image x={xPositionGalaxy} y={120 - 10} href="../assets/GalaxySVG.svg" height="50" width="50"/>

            {/*Text that hovers above Earth and Galaxy*/}
            <text x={xPositionEarth - 15} y={103 - 10} fontSize={"1.3em"} fill={"darkgoldenrod"}>Earth</text>
            <text x={xPositionGalaxy - 5} y={103 - 10} fontSize={"1.3em"} fill={"darkgoldenrod"}>Galaxy</text>

            {/*Lines above Earth and Galaxy but below "Earth" and "Galaxy" text*/}
            <line x1={xPositionEarth + 10} y1={130 - 10} x2={xPositionEarth + 10} y2={110 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>
            <line x1={xPositionGalaxy + 25} y1={127 - 10} x2={xPositionGalaxy + 25} y2={110 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

            <g visibility={"visible"}>

                {/*Lines below Earth and Galaxy*/}
                <line x1={initialEarthX + 1} y1={165 - 10} x2={initialEarthX + 1} y2={185 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>
                <line x1={initialGalaxyX - 1} y1={165 - 10} x2={initialGalaxyX - 1} y2={185 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

                {/*Line connecting initial separation distance*/}
                <line x1={initialEarthX + 2} y1={185 - 10} x2={initialGalaxyX - 2} y2={185 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

                {/*Line tip at middle of initial separation distance*/}
                <line x1={(initialGalaxyX + initialEarthX) / 2} y1={185 - 10} x2={(initialGalaxyX + initialEarthX) / 2} y2={195 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

                {/*Text values for initial separation distance*/}
                <text x={((initialGalaxyX + initialEarthX) / 2) - 80} y={210 - 10} fontSize={"1.0em"} fill={"lightcoral"}>Initial Separation Distance</text>
                <text x={((initialGalaxyX + initialEarthX) / 2) - 60} y={230 - 10} fontSize={"1.0em"} fill={"lightcoral"}>{initialSeparation} billions of years</text>

                {/*-----------------------------------------------*/}

                {/*Current Lines below Earth and Galaxy*/}
                <line x1={xPositionEarth + 10} y1={230 - 10} x2={xPositionEarth + 10} y2={251 - 10} style={{stroke: "green", strokeWidth:"2"}}/>
                <line x1={xPositionGalaxy + 25} y1={230 - 10} x2={xPositionGalaxy + 25} y2={251 - 10} style={{stroke: "green", strokeWidth:"2"}}/>

                {/*Line connecting current separation distance*/}
                <line x1={xPositionEarth + 10} y1={250 - 10} x2={xPositionGalaxy + 25} y2={250 - 10} style={{stroke: "green", strokeWidth:"2"}}/>

                {/*Line tip at middle of initial current distance*/}
                <line x1={(initialGalaxyX + initialEarthX) / 2} y1={251 - 10} x2={(initialGalaxyX + initialEarthX) / 2} y2={260 - 10} style={{stroke: "green", strokeWidth:"2"}}/>

                {/*Text values for current separation distance*/}
                <text x={((initialGalaxyX + initialEarthX) / 2) - 80} y={275 - 10} fontSize={"1.0em"} fill={"lightcoral"}>Current Separation Distance</text>
                <text x={((initialGalaxyX + initialEarthX) / 2) - 60} y={290 - 10} fontSize={"1.0em"} fill={"lightcoral"}>{currentSeparation} billions of years</text>
            </g>
        </svg>
    );
}


// Remember to credit:
// <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
// <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>