import React, { Component } from 'react';
import { render } from 'react-dom';
import { compose, withProps, lifecycle } from "recompose";
const {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MyMapComponent = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  let DirectionsRend = [];
  if (props.directions) {
    console.log(props.directions.routes.length);
    for(var i = 0; i < props.directions.routes.length; i++) {
      console.log(props.route === i);
      (props.route === i) ? 
      DirectionsRend.push(<DirectionsRenderer key={i+1} hideRouteList={true} directions={props.directions} routeIndex={i} options={{polylineOptions: {strokeColor: 'grey',strokeOpacity: 0.6, strokeWeight: 5}}}/>) 
      : DirectionsRend.push(<DirectionsRenderer key={i+1} hideRouteList={true} directions={props.directions} routeIndex={i} options={{polylineOptions: {strokeColor: 'green',strokeOpacity: 0.6, strokeWeight: 5}}}/>);
    };
    console.log(DirectionsRend);
  }
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
    {DirectionsRend.length > 0 && DirectionsRend}
    </GoogleMap>
    );
  }
)

export default class MapContainer extends React.Component {

  render() {
    return (
      <MyMapComponent 
        directions={this.props.directions} route={this.props.route} />
    );
  }
}