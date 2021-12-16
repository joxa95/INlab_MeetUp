import React from "react";
import { Typography, Container } from "@mui/material";
import "./style.scss";
import ResentPost from "./ResentPost/Resent_post";
import Grid from "@mui/material/Grid";

function Page2() {
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <div>
            <Container sx={{ mb: 3, padding: "18px", backgroundColor: "#fff" }}>
              <div style={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", fontWeight: "800" }}
                >
                  Category
                  <hr />
                </Typography>
                <Typography
                  className="category"
                  variant="body2"
                  sx={{ color: "#545454", fontSize: "11px" }}
                >
                  <span className="span">
                    Restaurant food <hr />
                  </span>
                  <span className="span">
                    Travel news <hr />
                  </span>
                  <span className="span">
                    Modern technology <hr />
                  </span>
                  <span className="span">
                    Product <hr />
                  </span>
                  <span className="span">
                    Inspiration
                    <hr />
                  </span>
                  <span className="span">Health Care</span>
                </Typography>
              </div>
            </Container>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ResentPost />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page2;
