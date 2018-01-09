import React, { Component } from 'react';
import { render } from 'react-dom';
import MapContainer from './mapContainer.jsx';
import { connect } from "react-redux";

@connect((store) => {
    return {
      directions: store.map.directions,
      fetching: store.map.fetching,
      fetched: store.map.fetched,
      error: store.map.error,
    };
  })
export default class MainContainer extends React.Component {
    render() {
        return (
            <div id={"fullheight"}>
                <div id={"sidebar"}>
                    <ul>
                        <li>bob</li>
                    </ul>
                </div>
                <div id={"fullheight"}>
                    <MapContainer directions={this.props.directions} dispatch={this.props.dispatch} />
                </div>
            </div>
        );
    }
}