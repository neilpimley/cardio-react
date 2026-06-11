
import React, { Component } from 'react';
import MapComponent from './MapComponent';

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-6">
                            <div className="footer-details">
                            <address>
                                <strong>Dundonald Consulting Rooms</strong>
                                <br /> 1 St Johns Wood Park
                                <br /> Belfast
                                <br /> BT16 1RS
                            </address>
                            <p>
                                <strong>Phone: </strong>
                                <a href="tel:+442890484840">028 9048 4840</a>
                            </p>
                            <p>
                                <strong>Email: </strong>
                                <a href="mailto:belfastcardiologist@gmail.com">belfastcardiologist@gmail.com</a>
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="map-frame">
                                <MapComponent
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMPuBoyQgFnwdpvjpTqxkMolVMoywTae0&v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `360px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
