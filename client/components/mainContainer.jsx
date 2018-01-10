import React, { Component } from 'react';
import { render } from 'react-dom';
import MapContainer from './mapContainer.jsx';
import DirectionsInput from './directionsInput.jsx';
import Breweries from './breweries.jsx';
import Directions from './directions.jsx';
import { connect } from "react-redux";

@connect((store) => {
    return {
      directions: store.map.directions,
      fetching: store.map.fetching,
      fetched: store.map.fetched,
      error: store.map.error,
      focus: store.directions.focus,
      route: store.directions.route,
    };
  })
export default class MainContainer extends React.Component {
    render() {
        return (
            <div id={"maincontainer"}>
                <div id={"sidebar"} className={"w3-card"}>
                    <DirectionsInput />
                    {(this.props.directions)
                    ? (<div><Directions />
                      <Breweries /></div>)
                    : (this.props.fetching) ? (<div className={"dots-loader"}></div>) : (<div></div>)}
                </div>
                <div id={"maincontainer"}>
                    <MapContainer directions={this.props.directions} dispatch={this.props.dispatch} route={this.props.route} />
                </div>
            </div>
        );
    }
}