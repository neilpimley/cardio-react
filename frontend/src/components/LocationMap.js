import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class LocationMap extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
        };
      }

    
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDjMFx7zoewGpC4RrwEJ0swH-BUpobGyFg')
})(LocationMap)
