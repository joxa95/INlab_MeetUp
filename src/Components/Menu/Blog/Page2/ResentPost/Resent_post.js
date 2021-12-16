import React from "react";
import { Typography, Container } from "@mui/material";
import Post from "./Post";

function Resent_post() {
  return (
    <div>
      <Container sx={{ padding: "18px", backgroundColor: "#fff" }}>
        <div style={{ width: "100%" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "800" }}>
            Recent Post
            <hr />
          </Typography>
          <Post />
          <Post />
          <Post />
        </div>
      </Container>
    </div>
  );
}

export default Resent_post;
