// LanguageSelector.js
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { settingsStore } from "store/settingsStore";
import axios from "axios";
import { Language } from "@mui/icons-material";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [direction, setDirection] = settingsStore((state) => [
    state.direction,
    state.setDirection,
  ]);

  const handleLanguageChange = async (lang) => {
    const newDirection = lang === "ar" || lang === "kr" ? "rtl" : "ltr";

    // Set localStorage before changing language to avoid revert
    localStorage.setItem("i18nextLng", lang);

    // Change language and direction
    await i18n.changeLanguage(lang);
    setDirection(newDirection);

    // Set Axios locale header
    axios.defaults.headers.common["locale"] = lang;

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mx: "10px" }}>
      <Tooltip title={t("Change Language")}>
        <IconButton onClick={handleClick} sx={{ p: 0 }}>
          <Typography
            sx={{ color: "white", display: { xs: "none", md: "block" } }}
          >
            English
          </Typography>
          <Language
            sx={{ display: { xs: "block", md: "none" }, color: "#212529" }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("ar")}>عربي</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("tr")}>Türkçe</MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
