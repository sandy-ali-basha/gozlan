import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import
import { Autoplay } from "swiper/modules"; // Import Lazy module
import sliderImg from "assets/images/slide (1).jpg";
import sliderImg2 from "assets/images/products/IMG_0707 copy.jpg";
import Banner from "./home/Banner";
import ProductCard from "components/modules/ProductCard";
import image2 from "assets/images/products/earrings.jpg";
import image3 from "assets/images/products/banner.jpg";
import productImg4 from "assets/images/products/product (1).jpg";
import productImg3 from "assets/images/products/product (2).jpg";
import productImg2 from "assets/images/products/product (3).jpg";
import productImg1 from "assets/images/products/product (4).jpg";
import productImg0 from "assets/images/products/product (6).jpg";
import Categories from "./home/Categories";
import OfferSection from "./home/OfferSection";
import banner2 from "assets/images/products/banner5.jpg";
import banner1 from "assets/images/products/earrings.jpg";

export default function Home() {
  const { t } = useTranslation("index");
  const products = [
    {
      id: 1,
      image: productImg4,
      name: "18ct White Gold 0.50ct Diamond Curved Wedding Ring",
      price: { value: 715.99 },
      compare_price: 775.99,
      purchasable: "always",
      category: "Cocktail",
      discount: "8%",
    },
    {
      id: 2,
      image: productImg3,
      name: "Platinum 0.10ctw Diamond Eternity Ring",
      price: { value: 468.99 },
      compare_price: 568.99,
      purchasable: "always",
      category: "Eternity",
      discount: "18%",
    },
    {
      id: 3,
      image: productImg2,
      name: "18ct White Gold 2ctw Line Bracelet",
      price: { value: 697.88 },
      compare_price: 897.88,
      purchasable: "always",
      category: "Bracelets",
      discount: "23%",
    },
    {
      id: 4,
      image: productImg1,
      name: "18ct White Gold 0.50ct Diamond Mixed Cut Pendant",
      price: { value: 888.5 },
      compare_price: 989.5,
      purchasable: "always",
      category: "Bracelets",
      discount: "11%",
    },
    {
      id: 5,
      image: productImg0,
      name: "Sterling Silver Offspring Open Earhoops",
      price: { value: 86.77 },
      compare_price: 123.55,
      purchasable: "always",
      category: "Drop and Dangle",
      discount: "30%",
    },
    {
      id: 1,
      image: productImg4,
      name: "18ct White Gold 0.50ct Diamond Curved Wedding Ring",
      price: { value: 755.99 },
      compare_price: 875.99,
      purchasable: "always",
      category: "Cocktail",
      discount: "8%",
    },
  ];
  const banners = [
    {
      id: 1,
      title: "Diamonds are forever—and so are you",
      subtitle: "Embrace the Unseen Magic of Uniqueness...",
      buttonText: "SHOP COLLECTION",
      saleText: "CYBER MONDAY SALE",
      backgroundImage: banner2,
    },
    {
      id: 2,
      title: "Crafted Beauty",
      subtitle: "Beautiful pieces to pass down for generations...",
      buttonText: "SHOP COLLECTION",
      backgroundImage: banner1,
      saleText: "CYBER MONDAY SALE",
    },
  ];
  return (
    <Box sx={{ marginTop: "-100px" }}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        lazy={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Link to={"/"}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "16/9",
              }}
            >
              <img
                src={sliderImg}
                alt={`Slide`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                lazy
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  background: "#ffffff39",
                  px: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  color="text.primary"
                  sx={{ width: { xs: "100%", md: "70%" } }}
                >
                  Discover the timeless beauty of Gozlan Jewelry—where artistry
                  meets sophistication.
                </Typography>
                <Typography
                  variant="p"
                  color="text.primary"
                  sx={{ width: { xs: "100%", md: "70%" } }}
                >
                  Explore our exclusive collection, crafted to celebrate your
                  unique style and elevate every moment with unparalleled
                  brilliance.
                </Typography>
                <br />
                <Link sx={{ mt: 4 }} href={"/"}>
                  {t("Shop collection")}
                </Link>
              </Box>
            </Box>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "16/9",
              }}
            >
              <img
                src={sliderImg2}
                alt={`Slide`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                lazy
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  background: "#ffffff39",
                  px: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  color="text.primary"
                  sx={{ width: { xs: "100%", md: "70%" } }}
                >
                  Discover the timeless beauty of Gozlan Jewelry—where artistry
                  meets sophistication.
                </Typography>
                <Typography
                  variant="p"
                  color="text.primary"
                  sx={{ width: { xs: "100%", md: "70%" } }}
                >
                  Explore our exclusive collection, crafted to celebrate your
                  unique style and elevate every moment with unparalleled
                  brilliance.
                </Typography>
                <br />
                <Link sx={{ mt: 4 }} href={"/"}>
                  {t("Shop collection")}
                </Link>
              </Box>
            </Box>
          </Link>
        </SwiperSlide>
      </Swiper>
      <Banner />
      <Divider></Divider>
      <Categories />
      <Divider></Divider>
      <Grid container sx={{ p: 4 }} spacing={4}>
        <Grid item md="6">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "80vh",
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              padding: "1.5rem",
              color: "white",
              "&:hover": {
                backgroundBlendMode: "lighten",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Box sx={{ maxWidth: "70%" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginTop: "0.5rem" }}
              >
                STYLE AND TREND JEWELRY OF MEN'S FASHION
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
                Discover
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md="6">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "80vh",
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              padding: "1.5rem",
              color: "white",
              "&:hover": {
                backgroundBlendMode: "lighten",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Box sx={{ maxWidth: "70%" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginTop: "0.5rem" }}
              >
                STYLE AND TREND JEWELRY OF MEN'S FASHION
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
                Discover
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ pb: 2 }}>
          Our Best Sellers
        </Typography>

        <Grid container spacing={1}>
          {products?.map((item, idx) => (
            <Grid item xs="12" lg="2" md="3" sm="6" spacing={4}>
              <ProductCard
                productImage={item?.image}
                productName={item?.name}
                Price={item?.price?.value}
                link={`/store/product/${item?.id}/${item.name}`}
                purchasable={item?.purchasable === "always"}
                offer={item?.compare_price}
                category={item?.category}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider></Divider>
      <OfferSection banners={banners} />
    </Box>
  );
}
