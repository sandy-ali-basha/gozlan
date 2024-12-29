import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const OfferSection = ({banners}) => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={3}>
        {banners.map((banner) => (
          <Grid item xs={12} md={banner.id === 1 ? 7 : 5} key={banner.id}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "250px",
                backgroundImage: `url(${banner.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                color: "white",
                "&:hover": {
                  backgroundBlendMode: "darken",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box sx={{ maxWidth: "70%" }}>
                <Typography
                  variant="overline"
                  sx={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {banner.saleText}
                </Typography>
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
                  {banner.subtitle}
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
                  {banner.buttonText}
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
