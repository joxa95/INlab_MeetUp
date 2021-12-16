import * as React from "react";
import { Typography, Container } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "./S_cards";
// import img2 from '../../../img/Speacers/img2.jpeg';
import bg from "../../../../Images/background.jpg";
import Grid from "@mui/material/Grid";

import "./menu.scss";

function menuSpeakers() {
  return (
    <div className="Speakers">
      <Container>
        <Typography
          sx={{
            color: "#ffbd00",
            fontSize: "1.6rem",
            fontWeight: "800",
          }}
          variant="h1"
        >
          SPEAKERS
        </Typography>
        <Grid container rowSpacing={3} columnSpacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default menuSpeakers;
