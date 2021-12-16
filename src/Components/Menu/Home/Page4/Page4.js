import { Container, Typography } from "@mui/material";
import React from "react";
import "./nextpage.scss";
import TabsFor from "./schedule";
import Grid from "@mui/material/Grid";

function Nextpage() {
  return (
    <div style={{ padding: "0px 10px", backgroundColor: "#0f001b" }}>
      <Container>
        <Typography
          sx={{
            color: "#ffbd00",
            fontSize: "16px",
            fontWeight: "800",
            lineHeight: 1.5,
            pt: 3,
            mb: 3,
          }}
          variant="h1"
        >
          SCHEDULE
        </Typography>
        <div
          className="tablar"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TabsFor />
          <div
            className="tablar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <card className="card">
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#fff ",
                  lineHeight: 2,
                  p: "10px 0",
                }}
              >
                <span>Registration and Breakfast</span>
                <span>8:30 am</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#9B9EAC ",
                }}
              >
                -Mal Practise{" "}
              </Typography>
            </card>
            <card className="card">
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#fff ",
                  lineHeight: 2,
                  p: "10px 0",
                }}
              >
                <span>Opening remarks and keynote</span>
                <span>8:30 am</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#9B9EAC ",
                }}
              >
                -Mal Practise{" "}
              </Typography>
            </card>
            <card className="card">
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#fff ",
                  lineHeight: 2,
                  p: "10px 0",
                }}
              >
                <span>Web Accessible Design</span>
                <span>8:30 am</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#9B9EAC ",
                }}
              >
                -Mal Practise{" "}
              </Typography>
            </card>
            <card className="card">
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#fff ",
                  lineHeight: 2,
                  p: "10px 0",
                }}
              >
                <span>Building Communities</span>
                <span>8:30 am</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#9B9EAC ",
                }}
              >
                -Mal Practise{" "}
              </Typography>
            </card>
          </div>
        </div>
      </Container>
      <br /> <br />
    </div>
  );
}
export default Nextpage;
