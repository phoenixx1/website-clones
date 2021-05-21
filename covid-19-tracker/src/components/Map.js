import React from "react";
import styled from "styled-components";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";

function Map({ countries, casesType, center, zoom }) {
  console.log("Map: ", casesType);
  return (
    <MapContainer>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          // Just copy this stuff it is from openstreetmap public url to load map
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </MapContainer>
  );
}

export default Map;

const MapContainer = styled.div`
  height: 500px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  .leaflet-container {
    height: 100%;
    border-radius: 12px;
  }
`;
