import React from "react";
import { Container, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import AccountIcon from "@mui/icons-material/AccountBalanceOutlined";
import "./Page2_style.scss";
import PhoneIcon from "@mui/icons-material/PhoneAndroidRounded";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import Page3 from "../Home/Page6/Page6";


function page2() {
  return (
    <div>
      <Container sx={{ p: "10px 10px", backgroundColor: "#0f001b" }}>
        <Typography
          sx={{
            backgroundColor: "#0f001b",
            color: "#fff",
            // fontSize: '25px',
            fontWeight: "800",
            p: "0px 10px 15px 0",
          }}
          variant="h6"
        >
          Get in touch
        </Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={7}
          placeholder="Enter Message"
          style={{
            outline: "none",
            fontWeight: "100",
            width: "100%",
            backgroundColor: "transparent",
            padding: "5px 10px",
            color: "white",
            border: "1px solid white",
            fontSize: "12px",
          }}
        />

        <FormControl
          sx={{
            width: "100%",
            border: "1px solid white",
            borderRadius: "none !important",
            m: "5px 0",
          }}
        >
          <OutlinedInput
            sx={{
              color: "white !important",
              fontSize: "11px",
              height: "35px",
            }}
            placeholder="Enter your name"
          />
        </FormControl>

        <FormControl
          sx={{
            width: "100%",
            border: "1px solid white",
            borderRadius: "none !important",
            m: "5px 0",
          }}
        >
          <OutlinedInput
            sx={{
              color: "white !important",
              fontSize: "11px",
              fontWeight: "100",
              height: "35px",
            }}
            placeholder="Email"
          />
        </FormControl>

        <FormControl
          sx={{
            width: "100%",
            border: "1px solid white",
            borderRadius: "none !important",
            m: "5px 0",
          }}
        >
          <OutlinedInput
            sx={{
              color: "white !important",
              fontSize: "11px",
              height: "35px",
            }}
            placeholder="Enter subject"
          />
        </FormControl>

        <button className="send_btn" tytle>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "700",
            }}
            variant="h1"
          >
            SEND
          </Typography>
        </button>

        <div style={{ display: "flex", alignItems: "center" }}>
          <AccountIcon sx={{ fontSize: "2rem", color: "white" }} />
          <div style={{ display: "flex" }}>
            <Typography variant="reimary" sx={{ fontSize: "13px", p: "10px " }}>
              <a className="contacts" href="">
                Buttonwood, California.
              </a>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "11px" }}
              >
                Rosemead, CA 91770
              </Typography>
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ fontSize: "2rem", color: "white" }} />
          <div style={{ display: "flex" }}>
            <Typography variant="reimary" sx={{ fontSize: "13px", p: "10px " }}>
              <a className="contacts" href="">
                +1 253 565 2365
              </a>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "11px" }}
              >
                Mon to Fri 9am to 6pm
              </Typography>
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <EmailIcon sx={{ fontSize: "2rem", color: "white" }} />
          <div style={{ display: "flex" }}>
            <Typography variant="reimary" sx={{ fontSize: "13px", p: "10px " }}>
              <a className="contacts" href="">
                support@colorlib.com
              </a>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "11px" }}
              >
                Send us your query anytime!
              </Typography>
            </Typography>
          </div>
        </div>
      </Container>
      <Page3 />
    </div>
  );
}

export default page2;
