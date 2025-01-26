import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Categories = (data) => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={2}>
        {data?.data?.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={category.id}>
            <a href={category?.cta_link}>
              <Box
                sx={{
                  position: "relative",
                  p: 2,
                  overflow: "hidden",
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {/* Background Image */}
                <img
                  src={category?.image}
                  alt={category?.title}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  loading="lazy"
                />
                {/* Overlay Text */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    padding: "1rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItes: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                  >
                    {category?.title}
                  </Typography>
                  <Typography color="white" variant="body2">
                    {category?.description}
                  </Typography>
                </Box>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
