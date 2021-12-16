import style from "./Page2.scss";
import * as React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

function Page2() {
  return (
    <div className="page2">
      <Container>
        <Grid container container rowSpacing={5} columnSpacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                color: "#ffbd00",
                fontSize: "16px",
                fontWeight: "800",
                pb: "10px",
              }}
              variant="h1"
            >
              ABOUT DESIGN WEEK
            </Typography>
            <div className="page2_text">
              <Typography
                sx={{
                  color: "#9b9eac",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  mb: 2,
                }}
                variant="body2"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, vel omnis repellendus mollitia, explicabo, maiores
                quisquam numquam quia reiciendis sit, accusantium atque ex animi
                perspiciatis ab odit earum assumenda aliquid.
              </Typography>
              <Typography
                sx={{
                  color: "#9b9eac",
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
                variant="body2"
              >
                Dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis
                repellendus mollitia, explicabo, maiores quisquam numquam quia
                reiciendis sit, accusantium atque ex animi perspiciatis ab odit
                earum assumenda aliquid.
              </Typography>
            </div>

            {/* <button className="btn2" tytle>
				<Typography
					sx={{
						fontSize: '12px',
						fontWeight: '700',
					}}
					variant="h1"
				>
					CONFIRM YOUR SEAT
				</Typography>
				<NavigateNextIcon />
			</button> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex">
              <div className="counter">
                <Typography
                  sx={{
                    mt: "22px",
                    color: "#ff60ce",
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: 1.5,
                  }}
                  variant="subtitle1"
                  className="count"
                >
                  0<span style={{ fontSize: "20px", color: "#ff60ce" }}>3</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#9b9eac",
                    fontWeight: "700",
                  }}
                  className="count_text"
                >
                  DAY EVENT
                </Typography>
              </div>

              <div className="counter">
                <Typography
                  sx={{
                    mt: "20px",
                    color: "#ff60ce",
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: 1.6,
                  }}
                  variant="subtitle1"
                  className="count"
                >
                  10+
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#9b9eac",
                    fontWeight: "700",
                  }}
                  className="count_text"
                >
                  DAY EVENT
                </Typography>
              </div>
              <div className="counter">
                <Typography
                  sx={{
                    mt: "20px",
                    color: "#ff60ce",
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: 1.6,
                  }}
                  variant="subtitle1"
                  className="count"
                >
                  23+
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#9b9eac",
                    fontWeight: "700",
                  }}
                  className="count_text"
                >
                  SPONSORS
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Page2;
