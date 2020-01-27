import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 54.354, lng: -5.482 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 54.35418, lng: -5.48192 }} />}
  </GoogleMap>
))
