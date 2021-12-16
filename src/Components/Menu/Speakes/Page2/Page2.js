import React from "react";
import { Typography, Container } from "@mui/material";
import img2 from "../../../../img/Speacers/img2.jpeg";
import Grid from "@mui/material/Grid";

function Page2() {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#0f001b",
        padding: "0 10px 10px",
      }}
    >
      <Container>
        <Grid container rpowSpacing={3} columnSpacing={4}>
          <Grid item xs={12} sm={12} md={5}>
            <img
              src={img2}
              style={{
                margin: "0 0 20px",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: "800",
                lineHeight: 1.5,
              }}
              variant="h1"
            >
              A CITYWIDE
            </Typography>
            <Typography
              sx={{
                color: "#ffbd00",
                fontSize: "16px",
                fontWeight: "800",
                mb: 2,
              }}
              variant="h1"
            >
              CELEBRATION OF DESIGN
            </Typography>
            <Typography
              sx={{
                color: "#9b9eac",
                fontSize: "14px",
                lineHeight: 1.55,
                mb: 2,
              }}
              variant="body2"
            >
              Dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis
              repellendus mollitia, explicabo, maiores quisquam numquam quia
              reiciendis sit, accusantium atque ex animi perspiciatis ab odit
              earum assumenda aliquid santium atque ex animi.
              <br />
              <br />
              Dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis
              repellendus mollitia, explicabo, maiores quisquam numquam quia
              reiciendis sit, accusantium atque ex animi perspiciatis ab odit
              earum assumenda aliquid santium atque ex animi.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Page2;
