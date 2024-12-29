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

function Footer() {
  const { t } = useTranslation("index");
  const MenuItems = [
    { href: "/", title: t("Home") },
    { href: "/about", title: t("About") },
    { href: "/contact-us", title: t("Contact") },
    { href: "/Products", title: t("Products") },
    { href: "/login", title: t("Log In") },
  ];

  return (
    <footer>
      <Container sx={{ py: 4, mt: 5 }}>
      <Divider></Divider>
        <Grid container sx={{mt:5}}>
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ width: "10vw", mb: 3 }}>
              <img alt="logo" src={logo} style={{ width: "100%" }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              Thank you to the team at GOZLAN for allowing us to feature their
              beautiful imagery in this demo. Head over to their official store
              to shop their latest collection.z
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton href="https://web.facebook.com" aria-label="facebook">
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                aria-label="instagram"
              >
                <Instagram />
              </IconButton>

              <IconButton href="https://www.linkedin.com" aria-label="linkedin">
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://wa.me/+1080749941"
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
              USEFUL LINKS
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
            <Typography variant="body1" color="initial">
              LET US HELP YOU
            </Typography>
            <Button variant={"text"} size="small">
              Accessibility Statement
            </Button>
            <Button variant={"text"} size="small">
              Your Orders
            </Button>
            <Button variant={"text"} size="small">
              Returns & Replacements
            </Button>
            <Button variant={"text"} size="small">
              Shipping Rates & Policies
            </Button>
            <Button variant={"text"} size="small">
              Privacy Policy
            </Button>
            <Button variant={"text"} size="small">
              Terms and Conditions
            </Button>
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
              DOWNLOAD OUR APPS
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
