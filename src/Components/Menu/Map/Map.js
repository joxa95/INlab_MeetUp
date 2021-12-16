import React from "react";
import Grid from "@mui/material/Grid";

function Map() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <div sx={{ p: "20px 10px", backgroundColor: "#0f001b" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12046.090472292184!2d71.67526452889176!3d40.99193305463738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4fd849f18b0b%3A0xfb218a1d91c9c81c!2z0KPRh9C10LHQvdGL0Lkg0YbQtdC90YLRgCBMU0w!5e0!3m2!1sru!2s!4v1635945190660!5m2!1sru!2s"
            style={{ width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Grid>
    </Grid>
  );
}

export default Map;
