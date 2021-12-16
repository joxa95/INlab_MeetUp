import React from "react";
import { Typography } from "@mui/material";
import img from "../../../../../img/recentPost.jpg";

function Post() {
  return (
    <div style={{ margin: "10.5px 0" }}>
      <div style={{ display: "flex" }}>
        <img src={img} />
        <div style={{ display: "flex" }}>
          <Typography variant="reimary" sx={{ fontSize: "14px", p: "10px " }}>
            <a className="comments" href="">
              From life was you fish...{" "}
            </a>
            <Typography
              variant="body2"
              sx={{ color: "gray", fontSize: "11px" }}
            >
              January 12, 2019
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Post;
