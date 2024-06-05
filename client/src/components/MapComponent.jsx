import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MapComponent = () => {
  return (
    <div style={{ height: "100%", width: "100%",marginTop:"70px" }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[6.7, 3.2]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.7, 3.2]} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
