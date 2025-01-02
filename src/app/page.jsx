import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import
import { Autoplay } from "swiper/modules"; // Import Lazy module
import sliderImg from "assets/images/slide (1).jpg";
import Banner from "./home/Banner";
import ProductCard from "components/modules/ProductCard";
import productImg4 from "assets/images/products/product (1).jpg";
import productImg3 from "assets/images/products/product (2).jpg";
import productImg2 from "assets/images/products/product (3).jpg";
import productImg1 from "assets/images/products/product (4).jpg";
import productImg0 from "assets/images/products/product (6).jpg";
import Categories from "./home/Categories";
import OfferSection from "./home/OfferSection";
import diamond from "assets/images/banner-07.webp";
import craftedBuety from "assets/images/banner-09.webp";

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
      backgroundImage: diamond, // Replace with your image path
      saleText: "CYBER MONDAY SALE",
    },
    {
      id: 2,
      title: "Crafted Beauty",
      subtitle: "Beautiful pieces to pass down for generations...",
      buttonText: "SHOP COLLECTION",
      backgroundImage: craftedBuety, // Replace with your image path
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
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
                  width: { md: "80%", xs: "100%" },
                }}
              >
                <Typography variant="h4" color="white">
                  Discover the timeless beauty of Gozlan Jewelry—where artistry
                  meets sophistication.
                </Typography>
                <Typography variant="p" color="white">
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
      <Box sx={{ py: 4, px: 4 }}>
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
      <OfferSection banners={banners}/>
    </Box>
  );
}
