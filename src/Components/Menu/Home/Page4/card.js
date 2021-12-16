import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";

import "./nextpage.scss";

export default function AreaCard(prop) {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "#0f001b",
        borderRadius: "0",
        p: "0 0",
      }}
    >
      <Container>
        <div>
          <Container className="media">
            <CardMedia component="img" src={prop.pic} alt="img1" />
          </Container>
        </div>

        <CardContent className="cardlar">
          <Typography
            sx={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              pb: 2,
            }}
            variant="h1"
            component="div"
          >
            WHEN CORNERS COLLIDE: DECODING THE CONTRASTING AESTHETICS <br />
            <br />
            <Typography variant="body2" sx={{ color: "#9B9EAC" }}>
              - Justin Case
            </Typography>
          </Typography>
        </CardContent>
      </Container>
    </Card>
  );
}
