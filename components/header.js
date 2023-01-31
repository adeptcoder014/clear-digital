import { Button, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./sidebar";

//=======================================
function Header() {
  const theme = useTheme();

  const [showDev, setShowDev] = useState(false);
  const [showMark, setShowMark] = useState(false);
  const [showRes, setShowRes] = useState(false);

  const links = [
    {
      name: "Home",
    },
    {
      name: "About us",
    },
    {
      name: "Development",
      menuItems: [
        "Custom Web App Development",
        "Mobile app development",
        "API development",
      ],
      link: true,
    },
    {
      name: "Marketing",
    },
    {
      name: "Resources",
    },
  ];

  const devItem = [
    "Custom Web App Development",
    "Mobile app development",
    "API development",
  ];

  const markItem = [
    "Social media marketing",
    "SEO & SOO marketing",
    "Youtube marketing",
  ];

  const resItem = ["Blogs", "Portfolio"];

  //====================
  return (
    <>
      <header style={{marginBottom:65}}>
        <Box sx={{ display: "flex" }}>
          <Image src={"/cd.svg"} height={50} width={50} />
          <Box>
            <Typography
              sx={{
                color: "black",
                fontWeight: "bolder",
                fontFamily: "poppins",
              }}
            >
              Clear Digital
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                mt: -0.5,
                fontFamily: "poppins",
                fontWeight: "bolder",
                color: "gray",
              }}
            >
              Technologies
            </Typography>
          </Box>
        </Box>{" "}
        <nav>
          {/* //==================================================== */}
          {/* //==================================================== */}

          <ul>
            <li>
              <a href="#home">About</a>
            </li>
            <li
              onMouseEnter={() => setShowDev(true)}
              onMouseLeave={() => setShowDev(false)}
            >
              <a href="#home">Development</a>
            </li>
            <li
              onMouseEnter={() => setShowMark(true)}
              onMouseLeave={() => setShowMark(false)}
            >
              <a href="#home">Marketing</a>
            </li>
            <li
              onMouseEnter={() => setShowRes(true)}
              onMouseLeave={() => setShowRes(false)}
            >
              <a href="#home">Resources</a>
            </li>
          </ul>

          {/* //==================================================== */}

          {/* //==================================================== */}
        </nav>
        <Box
          sx={{
            cursor: "pointer",
            // width: 100,
            backgroundColor: "white",
            border: "2px solid #1f79fd",
            p: "12px 28px",
            borderRadius: 5,
            fontWeight: "bolder",
            color: "#1f79fd",
            "&:hover": {
              backgroundColor: "#1f79fd",
              color: "white",
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Let's Talk
          </Typography>
        </Box>
      </header>

      <Box
        sx={{
          position: "absolute",
          ml: 58,
        }}
      >
        <div
          onMouseEnter={() => setShowDev(true)}
          onMouseLeave={() => setShowDev(false)}
          className={`menu ${showDev ? "show-menu" : ""}`}
        >
          {devItem.map((x) => (
            <li className="list-item">{x}</li>
          ))}
        </div>
      </Box>

      <Box
        sx={{
          position: "absolute",
          ml: 85,
        }}
      >
        <div
          onMouseEnter={() => setShowMark(true)}
          onMouseLeave={() => setShowMark(false)}
          className={`markMenu ${showMark ? "show-markMenu" : ""}`}
        >
          {markItem.map((x) => (
            <li className="list-item">{x}</li>
          ))}
        </div>
      </Box>

      <Box
        sx={{
          position: "absolute",
          ml: 100,

          [theme.breakpoints.down(1200)]: {
            ml: 22,
          },
        }}
      >
        <div
          onMouseEnter={() => setShowRes(true)}
          onMouseLeave={() => setShowRes(false)}
          className={`menuRes ${showRes ? "show-resMenu" : ""}`}
        >
          {resItem.map((x) => (
            <li className="list-item">{x}</li>
          ))}{" "}
        </div>
      </Box>

      <Sidebar />
    </>
  );
}

export default Header;
