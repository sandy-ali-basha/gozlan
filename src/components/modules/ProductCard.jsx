import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardShimmer from "components/customs/loaders/CardShimmer";
import defaultImg from "assets/images/defaultImg.jpg";
import { useTranslation } from "react-i18next";
import { useAddToCart } from "hooks/cart/useAddToCart";
export default function ProductCard({
  productName,
  Price,
  productImage,
  offer,
  link,
  loading,
  id,
  purchasable,
  category,
}) {
  const { handleAddToCart, loadingCart } = useAddToCart();
  const { t } = useTranslation("index");
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        boxShadow: 0,
        height: "70vh",
        borderRadius: "0px",
        "&:hover .price": {
          transform: "translateY(100%)",
        },
        "&:hover .add-to-cart": {
          transform: "translateY(0)",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {" "}
      <Link
        disabled={!loading}
        to={link}
        component="a"
        style={{ textDecoration: "none" }}
      >
        {loading ? (
          <CardShimmer
            style={{
              width: "100%",
              height: { xs: "30vh", md: "40vh" },
              borderRadius: "0px",
            }}
          />
        ) : (
          <>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden", // Keeps the image confined within the frame
                width: "100%",
                height: { xs: "30vh", md: "40vh" },
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease-in-out", // Smooth scaling transition
                  "&:hover": {
                    transform: "scale(1.3)", // Zoom in effect
                  },
                }}
                image={productImage || defaultImg}
                title={productName}
              />
            </Box>
          </>
        )}
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          {loading ? (
            <CardShimmer
              style={{
                width: "100%",
                height: "20px",
                borderRadius: "0px",
              }}
            />
          ) : (
            category
          )}
        </Typography>
        <Typography variant="body1" color="initial" sx={{ py: 2 }}>
          {loading ? (
            <CardShimmer
              style={{
                width: "100%",
                height: "20px",
                borderRadius: "0px",
              }}
            />
          ) : (
            productName?.split(" ").slice(0, 7).join(" ") + ' ...'
          )}
        </Typography>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Price Display */}
          <Box
            className="price"
            sx={{
              transition: "transform 0.3s ease-in-out",
              transform: hovered ? "translateY(100%)" : "translateY(0)",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textDecoration: offer ? "line-through" : "none",
                fontSize: offer ? "small" : "inherit",
                fontWeight: "bold",
              }}
              color={offer ? "text.secondary" : "primary.red"}
            >
              {loading ? (
                <Box
                  sx={{
                    width: "100%",
                    height: "20px",
                    borderRadius: "0px",
                    backgroundColor: "#e0e0e0",
                  }}
                />
              ) : (
                <>
                  {offer > 0 ? offer.toLocaleString() : Price.toLocaleString()}{" "}
                  {t("currency")}
                </>
              )}
            </Typography>
            {offer > 0 && (
              <Typography variant="body1" color="primary.red">
                {Price.toLocaleString()} {t("currency")}
              </Typography>
            )}
          </Box>

          {/* Add to Cart Button */}
          {purchasable && !loading && (
            <Box
              className="add-to-cart"
              sx={{
                position: "absolute",
                bottom: "0",
                transform: "translate(-50%, 100%)",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onClick={() => handleAddToCart(id)}
            >
              {loadingCart ? (
                <CircularProgress size={20} />
              ) : (
                <Typography sx={{ color: "primary.red", fontWeight: "bold" }}>
                  Add To Cart{" "}
                </Typography>
              )}
            </Box>
          )}
        </Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: "bold", py: 2, color: "success.main" }}
        >
          IN STOCK
        </Typography>
      </CardContent>
    </Card>
  );
}
