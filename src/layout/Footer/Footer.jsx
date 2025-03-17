import {
  Grid,
  Typography,
  IconButton,
  Button,
  Container,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import logo from "assets/images/logo.png";
import DownloadApp from "components/customs/DownloadApp";
import { _terms } from "api/terms/terms";
import { useQuery } from "react-query";

function Footer() {
  const { t } = useTranslation("index");
  const MenuItems = [
    { href: "/", title: t("Home") },
    { href: "/about", title: t("About") },
    { href: "/contact-us", title: t("Contact") },
    { href: "/Products", title: t("Products") },
    { href: "/login", title: t("Log In") },
  ];
  const { data: termsData, isLoading: isLoadingTerms } = useQuery(
    ["terms"],
    () => _terms.getTerms().then((res) => res?.data)
  );
  return (
    <footer>
      <Container sx={{ py: 4, mt: 5 }}>
        <Divider></Divider>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ width: {md:"10vw",xs:"50vw"}, mb: 3 }}>
              <img alt="logo" src={logo} style={{ width: "100%" }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              {t(
                "© 2025 Gozlan Jewelry. Exquisite craftsmanship, timeless elegance. Explore our collections and embrace the luxury of fine jewelry."
              )}
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton href="https://web.facebook.com/gozlanjewelry" aria-label="facebook">
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/gozlanjewelry"
                aria-label="instagram"
              >
                <Instagram />
              </IconButton>

              <IconButton
                href="https://wa.me/+905538080000"
                aria-label="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body1" color="initial">
              {t("USEFUL LINKS")}
            </Typography>

            {MenuItems.map((item, index) => (
              <Button
                size="small"
                href={item.href}
                variant={"text"}
                key={index}
              >
                {item.title}
              </Button>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography href={"/contact-us"} variant="body1" color="initial">
              {t("LET US HELP YOU")}
            </Typography>
            <Button href={"/profile/orders"} variant={"text"} size="small">
              {t("Your Orders")}
            </Button>
            <Button href={"/store/offers"} variant={"text"} size="small">
              {t("All Offers")}
            </Button>
            <Button href={"/blog"} variant={"text"} size="small">
              {t("Blogs")}
            </Button>
            {termsData?.terms?.map((item, index) => (
              <Button
                size="small"
                variant={"text"}
                key={index}
                href={`/terms/${item.id}`}
              >
                {item.name}
              </Button>
            ))}
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={3}
            item
            sx={{
              mb: 2,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body1" color="initial">
              {t("DOWNLOAD OUR APPS")}
            </Typography>
            <DownloadApp />
          </Grid>
          <Grid
            item
            xs="12"
            md={12}
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Divider></Divider>
            <Typography sx={{ fontWeight: "300" }} variant="body3">
              {t("© 2025 Gozolan. All rights reserved.")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
