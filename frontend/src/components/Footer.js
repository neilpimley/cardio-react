
import React, { Component } from 'react';
import { MapComponent } from './MapComponent';

export default class Footer extends Component {
    render() {
      return (
        <footer className="py-5 bg-dark">
          <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <address className="text-white">
                <strong>Dundonald Consulting Rooms</strong>
                <br /> 1 St Johns Wood Park
                <br /> Belfast
                <br /> BT16 1RS
            </address>
            <p className="text-white">
                <strong>Phone: </strong>
                <a href="tel:+2890484840" className="text-white">028 9048 4840</a>
            </p>
            <p className="text-white">
                <strong>Email: </strong>
                <a href="mailto:info@dundonaldconsulting.com" className="text-white">info@dundonaldconsulting.com</a>
            </p>
        </div>
        <div className="col-lg-6">
            <MapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_YJ_rcIISPfHxSj4HdujX1JzonnCwjA4&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
          </div>
          </div>
      </footer>
      )
    }
}
