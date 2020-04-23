import React from 'react';

const dimensions = {
    width: 920,
    height: 290,
};

const CENTER_X = 460;

const SCALING_FACTOR = 50;
const scaleToPixel   = distance => distance * SCALING_FACTOR;

const renderCircles = () => {
    return (circleProperties, index) => {
        const circleProps = {
            cx: circleProperties.cx,
            cy: circleProperties.cy,
            r: circleProperties.r,
            fill: circleProperties.fill,
            key: index,
        };

        return <circle {...circleProps} />;
    };
};

const getScaledInitialSeparation = (initDist, currDist) => {
    let initialSeparation = initDist / 2;
    let currWidth = 17.228377773099474;
    let maxWidth = currDist > currWidth ? currDist : currWidth;
    initialSeparation = (initialSeparation / maxWidth) * 860;
    initialSeparation = initialSeparation > 0.5 ? initialSeparation : 0.5;
    return initialSeparation;
};

export default (props) => {
    let distanceFromCenter = scaleToPixel(props.distanceBetweenBodies / 2);

    let sizeShift = 10;
    let galaxySizeShift = 25;
    let xPositionEarth;
    let xPositionGalaxy;

    let initialEarthX = CENTER_X + getScaledInitialSeparation(props.params.initialSeparationDistance, props.distanceBetweenBodies);
    let initialGalaxyX = CENTER_X - getScaledInitialSeparation(props.params.initialSeparationDistance, props.distanceBetweenBodies);

    let initialSeparation = props.params.initialSeparationDistance.toFixed(2);
    let currentSeparation = props.distanceBetweenBodies.toFixed(2);


    if (!(distanceFromCenter > CENTER_X - 40)) {
        xPositionEarth = CENTER_X + distanceFromCenter - sizeShift;
        xPositionGalaxy = CENTER_X - distanceFromCenter - galaxySizeShift;
    } else {
        xPositionEarth = 868.2624688305211;
        xPositionGalaxy = 16.737531169478814;
    }

    let initialLightLine = initialGalaxyX;
    let finalLightLine = xPositionEarth - scaleToPixel(props.distanceTravelledLight) + 10;
    if (!props.simulationStarted) finalLightLine = initialLightLine;

    // The + 2 is there for making sure light isn't completely invisible after shrinking down
    finalLightLine = (initialLightLine - finalLightLine) > 0 ? initialLightLine + 2 : finalLightLine;
    let lightColor = props.lightWavelengthColor;
    console.log(`light wav length color: ${lightColor} aand type: ${typeof lightColor}`);

    return (
        <svg width={dimensions.width} height={dimensions.height}>
            {/*Black background*/}
            <rect width="100%" height="100%" fill="black"/>

            {/*The stars in the background*/}
            <g>{ props.backgroundStars.map(renderCircles()) }</g>

            {/*SVG images for Earth and Galaxy*/}
            <image x={xPositionEarth} y={135 - 10} href="./assets/Earth.svg" height="20" width="20"/>
            <image x={xPositionGalaxy} y={120 - 10} href="./assets/GalaxySVG.svg" height="50" width="50"/>

            <rect x={xPositionEarth - 14} y={103 - 25} width="45" height="16" fill="black"/>
            <rect x={xPositionGalaxy - 5} y={103 - 25} width="63" height="19" fill="black"/>

            {/*Text that hovers above Earth and Galaxy*/}
            <text x={xPositionEarth - 15} y={103 - 10} fontSize={"1.3em"} fill={"darkgoldenrod"}>Earth</text>
            <text x={xPositionGalaxy - 5} y={103 - 10} fontSize={"1.3em"} fill={"darkgoldenrod"}>Galaxy</text>

            {/*Lines above Earth and Galaxy but below "Earth" and "Galaxy" text*/}
            <line x1={xPositionEarth + 10} y1={130 - 10} x2={xPositionEarth + 10} y2={110 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>
            <line x1={xPositionGalaxy + 25} y1={127 - 10} x2={xPositionGalaxy + 25} y2={110 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

            {/* SVG images for Earth and Galaxy
            <image x={xPositionEarth - 8} y={95} href="./assets/earth.svg" height="35" width="35"/>
            <image x={xPositionGalaxy - 25} y={60} href="./assets/GalaxySVG.svg" height="100" width="100"/>

            {/*Black boxes under the text that make them clear*/}
            {/* <rect x={xPositionEarth - 14} y={35} width="45" height="16" fill="black"/> */}
            {/* <rect x={xPositionGalaxy - 5} y={35} width="63" height="19" fill="black"/> */}

            {/*Text that hovers above Earth and Galaxy*/}
            {/* <text x={xPositionEarth - 15} y={50} fontSize={"1.3em"} fill={"darkgoldenrod"}>Earth</text> */}
            {/* <text x={xPositionGalaxy - 5} y={50} fontSize={"1.3em"} fill={"darkgoldenrod"}>Galaxy</text> */}

            {/*Lines above Earth and Galaxy but below "Earth" and "Galaxy" text*/}
            {/* <line x1={xPositionEarth + 10} y1={60} x2={xPositionEarth + 10} y2={80} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/> */}
            {/* <line x1={xPositionGalaxy + 25} y1={60} x2={xPositionGalaxy + 25} y2={80} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/> */} */}


            <g visibility={"visible"}>

                {/*Lines below Earth and Galaxy*/}
                <line x1={initialEarthX + 1} y1={165 - 10} x2={initialEarthX + 1} y2={185 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>
                <line x1={initialGalaxyX - 1} y1={165 - 10} x2={initialGalaxyX - 1} y2={185 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

                {/*Line connecting initial separation distance*/}
                <line x1={initialEarthX + 2} y1={185 - 10} x2={initialGalaxyX - 2} y2={185 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

                {/*Line tip at middle of initial separation distance*/}
                <line x1={(initialGalaxyX + initialEarthX) / 2} y1={185 - 10} x2={(initialGalaxyX + initialEarthX) / 2} y2={195 - 10} style={{stroke: "cornflowerblue", strokeWidth:"2"}}/>

                {/*Text values for initial separation distance*/}
                <rect x={((initialGalaxyX + initialEarthX) / 2) - 80} y={210 - 22} width="178" height="15" fill="black"/>
                <rect x={((initialGalaxyX + initialEarthX) / 2) - 60} y={230 - 27} width="143" height="17" fill="black"/>

                <text x={((initialGalaxyX + initialEarthX) / 2) - 80} y={210 - 10} fontSize={"1.0em"} fill={"lightcoral"}>Initial Separation Distance</text>
                <text x={((initialGalaxyX + initialEarthX) / 2) - 60} y={230 - 13} fontSize={"1.0em"} fill={"lightcoral"}>{initialSeparation} billions of years</text>

                {/*-----------------------------------------------*/}

                {/*Current Lines below Earth and Galaxy*/}
                <line x1={xPositionEarth + 10} y1={230 - 10} x2={xPositionEarth + 10} y2={251 - 10} style={{stroke: "green", strokeWidth:"2"}}/>
                <line x1={xPositionGalaxy + 25} y1={230 - 10} x2={xPositionGalaxy + 25} y2={251 - 10} style={{stroke: "green", strokeWidth:"2"}}/>

                {/*Line connecting current separation distance*/}
                <line x1={xPositionEarth + 10} y1={250 - 10} x2={xPositionGalaxy + 25} y2={250 - 10} style={{stroke: "green", strokeWidth:"2"}}/>

                {/*Line tip at middle of initial current distance*/}
                <line x1={(initialGalaxyX + initialEarthX) / 2} y1={251 - 10} x2={(initialGalaxyX + initialEarthX) / 2} y2={260 - 10} style={{stroke: "green", strokeWidth:"2"}}/>

                <rect x={((initialGalaxyX + initialEarthX) / 2) - 80} y={275 - 22} width="193" height="15" fill="black"/>
                <rect x={((initialGalaxyX + initialEarthX) / 2) - 60} y={290 - 22} width="143" height="15" fill="black"/>

                {/*Text values for current separation distance*/}
                <text x={((initialGalaxyX + initialEarthX) / 2) - 80} y={275 - 10} fontSize={"1.0em"} fill={"lightcoral"}>Current Separation Distance</text>
                <text x={((initialGalaxyX + initialEarthX) / 2) - 60} y={290 - 10} fontSize={"1.0em"} fill={"lightcoral"}>{currentSeparation} billions of years</text>
            </g>

            {/* Light line */}
            <line x1={initialLightLine} y1={135} x2={finalLightLine} y2={135} style={{stroke: lightColor, strokeWidth:"2"}}/>
            {/*<line x1={initialLightLine} y1={135} x2={finalLightLine} y2={135} style={{stroke: "#ff9000", strokeWidth:"2"}}/>*/}
            {/* <line x1={initialLightLine} y1={112} x2={finalLightLine} y2={112} style={{stroke: "yellow", strokeWidth:"2"}}/> */}
        </svg>
    );
}


// Remember to credit:
// <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
// <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>