import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import styled from "styled-components";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800 / 5,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200 / 5,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000 / 5,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  // sortedData.sort((a, b) => {
  //   if (a.cases > b.cases) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // });
  // return sortedData;
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

// To draw circles on the map with intereactive tooltip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <InfoContainer>
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </InfoContainer>
      </Popup>
    </Circle>
  ));

const InfoContainer = styled.div`
  width: 150px;

  .info-flag {
    height: 80px;
    width: 100%;
    background-size: cover;
    border-radius: 8px;

    img {
      width: 100px;
      border-radius: 5px;
    }
  }
  .info-name {
    font-size: 20px;
    font-weight: bold;
    color: #555;
  }
  .info-confirmed,
  .info-recovered,
  .info-deaths {
    font-size: 16px;
    margin-top: 5px;
  }
`;
