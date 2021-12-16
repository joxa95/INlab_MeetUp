import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../Page4/nextpage.scss";

function Info() {
  return (
    <div
      style={{ background: "#0f001b", height: "100%", padding: "50px 10px" }}
    >
      <Container>
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid item xs={0} sm={0.5} md={0.5}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" color="white" noWrap component="div">
              <span
                style={{
                  background: "#135D00",
                  color: "black",
                  padding: "10px 8px",
                  fontWeight: "600",
                }}
              >
                IN
              </span>
              LAB
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{
                fontSize: ".8rem",
                color: "#9b9eac",
                fontSize: "12px",
                lineHeight: 1.6,
                mb: 1,
              }}
            >
              Duis aute irure dolor inasfa reprehenderit in voluptate velit esse
              cillum. Explicabo, maiores quisquam numquam quia reiciendis sit,
              accus antium atque ex animi perspiciatis ab odit earum assumenda
              aliquid santium.
            </Typography>
            <Typography>
              <FacebookIcon
                className="icons"
                style={{ padding: "5px", fontSize: "45px", color: "#283593" }}
              />
              <YouTubeIcon
                className="icons"
                style={{ padding: "5px", fontSize: "45px", color: "#dd2c00" }}
              />
              <InstagramIcon
                className="icons"
                style={{ padding: "5px", fontSize: "45px", color: "#ff4081" }}
              />
              <LinkedInIcon
                className="icons"
                style={{ padding: "5px", fontSize: "45px", color: "#283593" }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="#fff"
              sx={{
                color: "#fff",
                fontWeight: "700",
                lineHeight: 1.6,
                mt: 2,
              }}
            >
              Contact Us
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{
                fontSize: ".8rem",
                color: "#9b9eac",
                fontSize: "12px",
                lineHeight: 1.6,
                mt: -1,
              }}
            >
              <div className="email">
                3968 Carson Street, San Diego, CA 92101
              </div>
              <div className="email">info@evento.com</div>
            </Typography>{" "}
            <br />
            <Typography
              className="number"
              variant="h6"
              color="#ffc107"
              sx={{ mt: -2 }}
            >
              10 (85) 980 3673
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" color="#fff">
              Subscribe Newsletter
            </Typography>
            <Typography
              variant="body2"
              color=""
              sx={{
                fontSize: ".8rem",
                color: "#9b9eac",
                fontSize: "12px",
                lineHeight: 1.6,
                mt: 1,
              }}
            >
              raising a heavy fur muff that covered the whole of her lower arm
              towards the viewer.
            </Typography>
            <br />
            <input
              style={{ marginTop: "-10px" }}
              type="email"
              placeholder="Enter your email"
            />
            <button className="button">SUBSCRIBE</button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Info;
