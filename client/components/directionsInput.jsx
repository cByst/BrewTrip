import React, { Component } from 'react';
import { render } from 'react-dom';
import { setFocus, setFrom, setTo } from "../actions/directionsActions"
import { fetchDirections } from "../actions/mapActions"
import { connect } from "react-redux";

@connect((store) => {
    return {
      directions: store.map.directions,
      fetching: store.map.fetching,
      fetched: store.map.fetched,
      error: store.map.error,
      to: store.directions.to,
      from: store.directions.from,
    };
  })
export default class DirectionsInput extends React.Component {
    componentDidMount() {
        const input = document.getElementById('from');
        const autocomplete = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            this.props.dispatch(setFrom(input.value));
        });
        const input2 = document.getElementById('to');
        const autocomplete2 = new google.maps.places.Autocomplete(input2);
        google.maps.event.addListener(autocomplete2, 'place_changed', () => {
            this.props.dispatch(setTo(input2.value));
        });
    }
    render() {
        return (
            <form className={"w3-container"} onSubmit={() => console.log('submit')}>
                <div id={"directionsInput"}>
                    <div className={"input-field col s6"}>
                        <input id={"from"} type={"text"} placeholder={"Enter a location"} className={"input-field"} onChange={(e) => this.props.dispatch(setFrom(e.target.value))} onBlur={(e) => this.props.dispatch(setFocus(null))} onFocus={() => this.props.dispatch(setFocus('yourlocation'))} />
                        <label for={"from"}>Where are you starting?</label>
                    </div>
                    <div className={"input-field col s12"}>
                        <input id={"to"} type={"text"} placeholder={"Enter a location"} className={"input-field"} onBlur={() => this.props.dispatch(setFocus(null))} onFocus={() => this.props.dispatch(setFocus('tolocation'))} />
                        <label for={"to"}>Where are you going?</label>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}} id={"directionsInputTwo"}>                      
                    <a class="btn-floating btn-medium waves-effect waves-light red" onClick={() => this.props.dispatch(fetchDirections(this.props.from,this.props.to))} ><i class="material-icons">search</i></a>
                </div>
            </form>
        );
    }
}