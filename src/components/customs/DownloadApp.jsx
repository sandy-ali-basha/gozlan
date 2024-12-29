import React from "react";
import { Button, Box, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const DownloadApp = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      gap={2}
      justifyContent="center"
      alignItems="center"
      mt={4}
    >
      {/* Google Play Button */}
      <Button
        variant="contained"
        startIcon={<AndroidIcon />}
        href="https://play.google.com/store/apps"
        target="_blank"
        sx={{
          width: "100%",
          color: "white",
          textTransform: "none",
          backgroundColor: "#000000",
          ":hover": { backgroundColor: "#313131" },
          py:2
        }}
      >
        Download on Google Play
      </Button>

      {/* App Store Button */}
      <Button
        variant="contained"
        startIcon={<AppleIcon />}
        href="https://www.apple.com/app-store/"
        target="_blank"
        sx={{
          width: "100%",
          color: "white",
          textTransform: "none",
          backgroundColor: "#000000",
          ":hover": { backgroundColor: "#313131" },
          py:2
        }}
      >
        Download on the App Store
      </Button>
    </Box>
  );
};

export default DownloadApp;
