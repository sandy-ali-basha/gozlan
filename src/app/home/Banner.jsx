import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
const Banner = (data) => {
  const {t} = useTranslation("index")
  return (
    <Box id="banner" sx={{ py: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {data?.data?.map((collection, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ position: "relative" }}>
              <Box>
                <img
                  src={collection?.image}
                  alt="img"
                  style={{
                    height: "60vh",
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  {collection.title}
                </Typography>
                <Button
                  href={collection.cta_link}
                  variant="outlined"
                  sx={{
                    mt: 2,
                    textTransform: "capitalize",
                    position: "relative",
                  }}
                >
                  {t("Shop Now")}
                  <svg
                    className="arrow-right"
                    width="18"
                    height="20"
                    style={{ position: "absolute", marginLeft: "8px" }}
                  >
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
