import React from "react";
import GoogleMapReact from "google-map-react";

// simple custom marker (you can swap for an <img/> if you prefer)
const Marker = () => (
  <div
    style={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "#e53935",
      border: "2px solid white",
      boxShadow: "0 0 0 2px rgba(229,57,53,.3)",
    }}
    title="Clinic"
  />
);

export default function MapComponent({ isMarkerShown = true, height = 400, width = "100%" }) {
  const defaultCenter = { lat: 54.594, lng: -5.805 };
  const markerPos = { lat: 54.594882, lng: -5.80523 };

  return (
    <div style={{ height, width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_YJ_rcIISPfHxSj4HdujX1JzonnCwjA4" }} // or a hardcoded key (not recommended)
        defaultCenter={defaultCenter}
        defaultZoom={12}
      >
        {isMarkerShown && <Marker lat={markerPos.lat} lng={markerPos.lng} />}
      </GoogleMapReact>
    </div>
  );
}
