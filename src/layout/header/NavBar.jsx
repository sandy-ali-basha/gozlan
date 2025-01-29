import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Tooltip,
  Badge,
  Divider,
} from "@mui/material";
// import logo from "assets/images/logo.svg";
import {
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useNavBar } from "./useNavBar";
import MenuButton from "components/modules/NavBar/MenuButton";
import LanguageSelector from "components/LanguageSelector";
import MenuIcon from "@mui/icons-material/Menu";
import { _AuthApi } from "api/auth";
import logo from "assets/images/logo.png";

function NavBar() {
  const { settings, pages, navigate, t, nav } = useNavBar();

  // Get the cart count from local storage
  const cartCount = parseInt(localStorage.getItem("cart_count")) || 0;
  const lang = localStorage.getItem("i18nextLng");
  return (
    <AppBar
      position="relative"
      background="transparent"
      sx={{
        zIndex: "99",
        width: "100%",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          background: "#e92b2d",
          color: "#212529",
          textAlign: "center",
          p: 2,
          minHeight: "50px",
          gap: 3,
          justifyContent: "center",
          display: { md: "flex", xs: "none" },
        }}
        disableGutters
      >
        {nav &&
          nav?.data?.navbar?.map((item, idx) => {
            return (
              <>
                <Typography
                  variant="div"
                  component="a"
                  href={item?.link}
                  sx={{
                    color: "#212529",
                    fontSize: "11px",
                    letterSpacing: "-0.10px",
                  }}
                >
                  {lang === "en" ? item?.text : item?.text_ar}
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    bordercolor: "#212529",
                    display: idx < 2 ? "flex" : "none",
                  }}
                ></Divider>
              </>
            );
          })}
      </Toolbar>
      <Toolbar
        sx={{
          display: { md: "flex", xs: "none" },
          background: "#212529",
          color: "text.white",
          minHeight: "50px",
          justifyContent: "space-between",
          px: 3,
        }}
        disableGutters
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            variant="div"
            component="a"
            href="/"
            sx={{
              color: "text.white",
              fontSize: "11px",
              letterSpacing: "-0.10px",
            }}
          >
            {t("My Orders")}
          </Typography>
          <Typography
            variant="div"
            component="a"
            href="/profile/account"
            sx={{
              color: "text.white",
              fontSize: "11px",
              letterSpacing: "-0.10px",
            }}
          >
            {t("Account")}
          </Typography>
          <Typography
            variant="div"
            component="a"
            href="/profile/addresses"
            sx={{
              color: "text.white",
              fontSize: "11px",
              letterSpacing: "-0.10px",
            }}
          >
            {t("Addresses")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "text.white",
              fontSize: "12px",
              letterSpacing: "-0.10px",
            }}
          >
            {t("Get Support From An Expert")} -
            <Typography
              variant="div"
              component="a"
              href="/"
              sx={{
                color: "text.white",
                fontSize: "12px",
                letterSpacing: "-0.10px",
                fontWeight: "bold",
              }}
            >
              (+90 553 808 0000)
            </Typography>
          </Typography>
          <LanguageSelector />
        </Box>
      </Toolbar>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              width: { md: "6vw", xs: "20vw" },
            }}
          >
            <img alt="logo" src={logo} style={{ width: "inherit" }} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuButton
              badgeNumber={0}
              icon={<MenuIcon sx={{ color: "#212529" }} />}
              menuItems={pages.map((item) => ({
                ...item,
                key: item.id,
              }))}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: { md: "10vw", xs: "25vw" },
            }}
          >
            <img alt="logo" style={{ width: "inherit" }} src={logo} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages?.map((page) => (
              <Button
                key={page.id}
                onClick={page.onClick}
                sx={{ my: 2, color: "#212529", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ mx: "10px" }}>
            <Tooltip title={t("Show Cart")}>
              <IconButton
                id="basic-button"
                onClick={() => navigate("/store/checkout")}
                badgeNumber={2}
              >
                <Badge badgeContent={cartCount} color="primary" size="small">
                  <ShoppingCartOutlined sx={{ color: "#212529" }} />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ mx: "10px" }}>
            {_AuthApi.getToken() ? (
              <MenuButton
                icon={<PersonOutlineOutlined sx={{ color: "#212529" }} />}
                menuItems={settings.map((item) => ({
                  ...item,
                  key: item.id,
                }))}
              />
            ) : (
              <Button
                onClick={() => navigate("/login")}
                sx={{ my: 2, color: "#212529", display: "block" }}
              >
                {t("sign in")}
              </Button>
            )}
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <LanguageSelector />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
