import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <InfoBoxCard
      className={`${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}
      onClick={props.onClick}
    >
      <CardContent>
        <InfoBoxTitle color="textSecondary">{title}</InfoBoxTitle>

        <InfoBoxCases className={`${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </InfoBoxCases>

        <InfoBoxTotal color="textSecondary">{total} Total</InfoBoxTotal>
      </CardContent>
    </InfoBoxCard>
  );
}

export default InfoBox;

const InfoBoxCard = styled(Card)`
  flex: 1;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }
  &.infoBox--selected {
    border-top: 10px solid greenyellow;
  }
  &.infoBox--red {
    border-color: red;
  }
`;

const InfoBoxTitle = styled(Typography)``;

const InfoBoxCases = styled.h2`
  color: #cc1034;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;

  &.infoBox__cases--green {
    color: lightgreen !important;
  }
`;

const InfoBoxTotal = styled(Typography)`
  color: #6c757d;
  font-weight: 700 !important;
  font-size: 0.8rem !important;
  margin-top: 15px !important;
`;
