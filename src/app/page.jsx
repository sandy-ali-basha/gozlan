import {
  Box,
  Button,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import
import { Autoplay } from "swiper/modules"; // Import Lazy module
import sliderImg from "assets/images/slide (1).jpg";
import Banner from "./home/Banner";
import Categories from "./home/Categories";
import OfferSection from "./home/OfferSection";
import TwoSections from "./home/TowSections";
import BestSellers from "components/modules/home/BestSellers";
import { useHome } from "hooks/home/useHome";

export default function Home() {
  const { t } = useTranslation("index");

  const { data, isLoading } = useHome();

  const categories = isLoading
    ? Array.from({ length: 1 })
    : data?.home_sections?.filter((section) => section.type === "categories") ||
      [];

  const TowItems = isLoading
    ? Array.from({ length: 1 })
    : data?.home_sections?.filter((section) => section.type === "TwoItems") ||
      [];

  const banner = isLoading
    ? Array.from({ length: 1 })
    : data?.home_sections?.filter((section) => section.type === "banner") || [];

  return (
    <Box sx={{ marginTop: "-100px" }}>
      {isLoading ? (
        <Skeleton variant="rectangular" width={"100vw"} height={"100vh"} />
      ) : (
        <Swiper
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          lazy={true}
          modules={[Autoplay]}
        >
          {data?.home_sections
            ?.filter((section) => section.type === "slider") // Filter sections of type "banner"
            .map((section, idx) => (
              <Box key={section.id}>
                {section.items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link to={item.cta_link}>
                      <Box
                        sx={{
                          position: "relative",
                          aspectRatio: { md: "16/9", xs: "9/16" },
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
                            px: { md: 4, xs: 0 },
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
                            color="white"
                            sx={{ width: { xs: "90%", md: "70%" } }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="p"
                            color="white"
                            sx={{ width: { xs: "90%", md: "70%" } }}
                          >
                            {item.description}
                          </Typography>
                          <br />
                          <Button
                            variant="text"
                            sx={{ mt: 4, color: "white" }}
                            href={item.cta_link}
                          >
                            {t("Shop collection")}
                          </Button>
                        </Box>
                      </Box>
                    </Link>
                  </SwiperSlide>
                ))}
              </Box>
            ))}
        </Swiper>
      )}

      {isLoading ? (
        <Banner data={false} isLoading={isLoading} />
      ) : (
        data?.home_sections
          ?.filter((section) => section.type === "collections")
          .map((section) => <Banner data={section?.items} />)
      )}

      <Divider></Divider>
      {categories?.map((section) => (
        <Categories data={section?.items} isLoading={isLoading} />
      ))}

      <Divider></Divider>

      {TowItems?.map((section, idx) => (
        <TwoSections key={idx} data={section?.items} isLoading={isLoading} />
      ))}

      <Divider></Divider>
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ pb: 2 }}>
          {t("Our Latest Products")}
        </Typography>
        <BestSellers />
      </Box>
      
      <Divider></Divider>

      {banner.map((section, idx) => (
        <OfferSection
          key={idx}
          banners={section?.items}
          isLoading={isLoading}
        />
      ))}
    </Box>
  );
}
