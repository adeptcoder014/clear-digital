import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
//======================================

const testimonials = [
  {
    icon: <Image src="/company.png" width={90} height={90} />,
    review:
      "ClearDigital always ensured that our success is their priority. As we know digital marketing has become the most important unit of every business, and skillstride is more than happy with Digital Marketing services provided by ClearDigital.",
  },
  {
    icon: <Image src="/company.png" width={90} height={90} />,
    review:
      "ClearDigital always ensured that our success is their priority. As we know digital marketing has become the most important unit of every business, and skillstride is more than happy with Digital Marketing services provided by ClearDigital.",
  },
  {
    icon: <Image src="/company.png" width={90} height={90} />,
    review:
      "ClearDigital always ensured that our success is their priority. As we know digital marketing has become the most important unit of every business, and skillstride is more than happy with Digital Marketing services provided by ClearDigital.",
  },
];

export default function Testimonials() {
  const theme = useTheme();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          backgroundColor: "#212121",
          p: 5,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={1}
          sm={12}
          xs={12}
          sx={{
            backgroundColor: "#212121",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography sx={{ color: "#C75C6F", fontWeight: "bolder", mb: 2 }}>
            Testimonials
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#D3D3D4",
              mb: 5,
              // width: "38%",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            Most of our clients love our work.
          </Typography>
        </Grid>

        {testimonials.map((x) => (
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                // backgroundColor: "#27272e",
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                p: 5,
                // mr: 2,
                width: "100%",
                [theme.breakpoints.down("sm")]: {
                  width: "90%",
                  ml: -3,
                  mb: 2,
                },
              }}
            >
              {/* <Image src="/digital.png" width={90} height={90} /> */}
              {x.icon}
              <Typography
                variant="h7"
                sx={{ color: "#D3D3D4", fontFamily: "poppins", mt: 5, mb: 3 }}
              >
                {"'' "}
                {x.review}
                {" '' "}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
