import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";

export default function Hero() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 5,
        [theme.breakpoints.down(500)]: {
          //   backgroundColor: "red",
        },
      }}
    >
      <Grid container spacing={10}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bolder",
              color: "gray",
            }}
          >
            Your Trusted Development Partner
          </Typography>

          <Typography
            sx={{
              fontWeight: "bolder",
              color: "gray",
              mt: 3,
            }}
          >
            We deliver web and mobile app development services to global
            businesses since 2019, with 100% project delivery success. Hire the
            best programmers at affordable prices. Our design-focused approach
            and project execution processes help you to deliver the right
            solutions.
          </Typography>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <img
            src="/hero.jpg"
            style={{
              maxWidth: "100%",
              // marginLeft: 36,
              marginBottom: 20,
              //   borderRadius: 500,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
