import React from "react";
import styled from "styled-components";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  return (
    <MapContainer>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          // Just copy this stuff it is from openstreetmap public url to load map
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {showDataOnMap(countries, casesType)} */}
      </LeafletMap>
    </MapContainer>
  );
}

export default Map;

const MapContainer = styled.div`
  height: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  .leaflet-container {
    height: 100%;
  }
`;
