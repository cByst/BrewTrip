import React, { Component } from 'react';
import { render } from 'react-dom';
import { setRoute } from "../actions/directionsActions"
import { connect } from "react-redux";

@connect((store) => {
    return {
      directions: store.map.directions,
      route: store.directions.route,
    };
  })
export default class Directions extends React.Component {

    render() {
        const routes = this.props.directions.routes.map((route, index) => {
        //    // console.log(`route: ${JSON.stringify(route)}`);
        //     console.log(`route Leg: ${JSON.stringify(route.legs[0])}`);
            return (<div className={(this.props.route === index) ? "directionsItem directionsSelected" : "directionsItem"} key={index} onClick={() => this.props.dispatch(setRoute(index))} ><span id={"routeSummary"}>{route.summary}</span><span id={"routeDuration"}>{`${route.legs[0].duration.text} (${route.legs[0].distance.text})`}</span></div>);
        });
        console.log(routes);
        return (
            <div id={"directionsbar"} >
                {routes}
            </div>
        );
    }
}