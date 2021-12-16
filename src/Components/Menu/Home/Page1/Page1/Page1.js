import React from "react";
import "./body.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Typography, Container } from "@mui/material";
import Register from "./registrate";

function Main() {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className="containerbody"
      style={{ width: "100%", height: "100vh", padding: "20px" }}
    >
      {/* <Container sx={{ padding: "15px 30px 40px 10px" }}> */}
      {/* <div className="containerbody"> */}
      <Typography
        sx={{ fontWeight: "600" }}
        variant="h5"
        color="white"
        noWrap
        component="div"
      >
        <span
          style={{
            background: "#135D00",
            color: "black",
            padding: "10px 8px",
            fontWeight: "700",
          }}
        >
          IN
        </span>
        LAB
      </Typography>
      <Typography
        style={{
          // background: '#135D00',
          color: "white",
          padding: "10px 0",
          fontWeight: "600",
        }}
        variant="h4"
      >
        Design week
      </Typography>

      <PlayCircleIcon
        style={{
          fontSize: "50px",
          position: "relative",
          left: "40px",
          top: "15px",
          color: " #ff60ce",
          backgroundColor: "black",
          borderRadius: "50%",
          border: "2px solid #ff60ce",
        }}
      />
      <Typography sx={{ mt: "10%", textAlign: "end" }}>
        <h1 style={{ color: "#ff60ce", fontWeight: "800" }}>12 Dec 2021</h1>
        <Typography variant="subtitle2" sx={{}}>
          5342 Carson Street , Namangan, CA 92101
        </Typography>
        {show ? <Register /> : null}

        <button onClick={() => setShow(!show)} className="btn">
          Registration
        </button>
      </Typography>
      {/* </div> */}
      {/* </Container> */}
    </div>
  );
}

export default Main;
