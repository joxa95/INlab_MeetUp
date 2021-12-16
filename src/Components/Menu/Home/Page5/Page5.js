import React from "react";
import Rasm1 from "../../../../Images/Rasm1.jpg";
import Rasm2 from "../../../../Images/Rasm2.jpg";
import Rasm3 from "../../../../Images/Rasm3.jpg";
import Grid from "@mui/material/Grid";

import Cardpage from "../Page4/card";

function Page5() {
  return (
    <div>
      <Grid container columnSpacing={3}>
        <Grid xs={12} sm={4} md={4}>
          <Cardpage pic={Rasm1} />
        </Grid>
        <Grid xs={12} sm={4} md={4}>
          <Cardpage pic={Rasm2} />
        </Grid>
        <Grid xs={12} sm={4} md={4}>
          <Cardpage pic={Rasm3} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Page5;
