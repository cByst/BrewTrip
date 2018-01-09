import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";

export default class Directions extends React.Component {

    render() {
        const routes = this.props.directions.routes.map((route, index) => {
        //    // console.log(`route: ${JSON.stringify(route)}`);
        //     console.log(`route Leg: ${JSON.stringify(route.legs[0])}`);
            return (<div className={"directionsItem"} key={index} ><span id={"routeSummary"}>{route.summary}</span><span id={"routeDuration"}>{`${route.legs[0].duration.text} (${route.legs[0].distance.text})`}</span></div>);
        });
        console.log(routes);
        return (
            <div id={"directionsbar"} >
                {routes}
            </div>
        );
    }
}