import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const OfferSection = ({ banners }) => {
    const { t } = useTranslation("index");
  
  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={3}>
        {banners.map((banner,index) => (
          <Grid item xs={12} md={index === 0 ? 7 : 5} key={banner.id}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "250px",
                backgroundImage: `url(${banner?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                color: "white",
                "&:hover": {
                  backgroundBlendMode: "darken",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box sx={{ maxWidth: "70%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginTop: "0.5rem" }}
                >
                  {banner.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "0.5rem", marginBottom: "1rem" }}
                >
                  {banner.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "primary.main",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  {t("Shop Now")}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OfferSection;
