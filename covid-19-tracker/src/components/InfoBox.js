import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function InfoBox({ title, cases, total }) {
  return (
    <InfoBoxCard>
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className="infoBox__cases">{cases}</h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </InfoBoxCard>
  );
}

export default InfoBox;

const InfoBoxCard = styled(Card)``;
