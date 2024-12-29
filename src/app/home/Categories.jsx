import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import category01 from "assets/images/category-bracelets-01.webp";
import category02 from "assets/images/category-earrings-01.jpg";
import category03 from "assets/images/category-gold-set-01.webp";
import category04 from "assets/images/category-neclaces-01.webp";
import category05 from "assets/images/category-rings-01.jpg";
import category06 from "assets/images/category-silver-set-01.webp";

const Categories = () => {
  const data = [
    { id: 1, title: "Bracelets", products: 16, image: category01 },
    { id: 2, title: "Earrings", products: 16, image: category02 },
    { id: 3, title: "Gold Set", products: 4, image: category03 },
    { id: 4, title: "Necklaces", products: 12, image: category04 },
    { id: 5, title: "Rings", products: 13, image: category05 },
    { id: 6, title: "Silver Set", products: 3, image: category06 },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={2}>
        {data.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={category.id}>
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
                src={category.image}
                alt={category.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
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
                  {category.title}
                </Typography>
                <Typography color="white" variant="body2">
                  {category.products} PRODUCTS
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
