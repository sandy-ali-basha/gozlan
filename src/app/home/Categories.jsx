import React from "react";
import { Box, Grid, Typography, Skeleton } from "@mui/material";

const Categories = ({ data, isLoading }) => {
  const items = isLoading ? Array.from({ length: 6 }) : data || [];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={2}>
        {items.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={category?.id || index}>
            <a href={!isLoading ? category?.cta_link : "/"}>
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
                {/* Image or Skeleton Placeholder */}
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{ aspectRatio: 1 }}
                  />
                ) : (
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
                )}

                {/* Overlay Text or Skeleton Placeholder */}
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
                    alignItems: "center",
                    background: isLoading ? "rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  {isLoading ? (
                    <>
                      <Skeleton width="60%" height={30} />
                      <Skeleton width="80%" height={20} />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
