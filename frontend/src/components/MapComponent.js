import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 54.595, lng: -5.876 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 54.5946667, lng: -5.8755626 }} />}
  </GoogleMap>
))

