import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
//======================================

const footerDevelopment = [
  "Product Development",
  "Web Developement",
  "App Development",
  "SAAS Developement",
  "UI/UX Designing Services",
];
const footerMarketing = [
  "Social Media Marketing",
  "SEO Services",
  "Digital Marketing Services",
];
const footerCompany = ["About Us", "Portfolio", "Blogs", "Contact"];

export default function Footer() {
  const theme = useTheme();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          backgroundColor: "#27272e",
          p: 10,
          display: "flex",
          justifyContent: "space-around",
          backgroundImage: `url("/bg.jpg")`,
        }}
      >
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ mr: 20 }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: "#D3D3D4",
                fontWeight: "bolder",
              }}
            >
              Get in touch!
            </Typography>
            <Typography
              sx={{
                color: "#D3D3D4",
                mt: 2,
              }}
            >
              Are you ready to partner with a team of experts dedicated to
              turning your dreams into reality?
            </Typography>

            <div class="subscribe-box">
              <form action="#">
                <div class="input-group">
                  <span class="input-group-addon">
                    <EmailIcon />
                  </span>
                  <input type="email" placeholder="Enter your email address" />
                </div>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </Box>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid container sx={{ display: "flex" }}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#D3D3D4",
                    fontWeight: "bolder",
                    lineHeight: 5,
                  }}
                >
                  Development Services
                </Typography>
                {footerDevelopment.map((x) => (
                  <Typography
                    sx={{
                      color: "#D3D3D4",
                      fontWeight: "bold",
                      lineHeight: 2,
                    }}
                  >
                    {x}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{
                    color: "#D3D3D4",
                    fontWeight: "bolder",
                    lineHeight: 5,
                  }}
                >
                  Development Services
                </Typography>
                {footerMarketing.map((x) => (
                  <Typography
                    sx={{
                      color: "#D3D3D4",
                      fontWeight: "bold",
                      lineHeight: 2,
                    }}
                  >
                    {x}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{
                    color: "#D3D3D4",
                    fontWeight: "bolder",
                    lineHeight: 5,
                  }}
                >
                  Development Services
                </Typography>
                {footerCompany.map((x) => (
                  <Typography
                    sx={{
                      color: "#D3D3D4",
                      fontWeight: "bold",
                      lineHeight: 2,
                    }}
                  >
                    {x}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid gray",
            color: "#D3D3D4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            width: "90vw",
            fontFamily: "poppins",
            mt: 8,
            mb: -5,
          }}
        >
          <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
            © 2023. All rights reserved by ClearDigital Technologies Private
            Limited.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "space-around",
              width: "30vw",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
              Sitemap |
            </Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
              Privacy Policy |
            </Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
              Term of use |
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
