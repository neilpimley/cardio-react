import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 54.594, lng: -5.805 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 54.594882, lng: -5.805230 }} />}
  </GoogleMap>
))
