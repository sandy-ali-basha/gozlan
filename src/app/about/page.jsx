// Import necessary dependencies
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import image1 from "assets/images/about.jpg";
import image2 from "assets/images/image (2).jpg";
import image3 from "assets/images/image (3).jpg";
import image4 from "assets/images/image (4).jpg";
import image5 from "assets/images/image (5).jpg";

const Page = () => {
  return (
    <Box sx={{ px: 4 }}>
      <img
        src={image1}
        style={{ height: "50vh", width: "100%", objectFit: "cover" }}
        alt=""
      />
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" align="center">
          Pellentesque habitant morbi tristique senectus et netus
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          ABOUT US FOR GOZLAN
        </Typography>
        <Typography variant="h4" gutterBottom>
          Exquisite Quality, Timeless Craftsmanship
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">
              At Gozlan Jewelry, our name stands for unmatched quality and
              masterful craftsmanship. Since 1989, we’ve been crafting luxury
              jewelry that elevates elegance and transcends boundaries.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">
              From the heart of Dubai to the charm of Moscow, the heritage of
              Istanbul, the sophistication of London, and the legacy of Beirut,
              Gozlan Jewelry connects you to the world’s finest luxury hubs
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">
              Each Gozlan creation is a celebration of artistry and enduring
              beauty. Discover the essence of luxury with us, where tradition
              meets innovation in every piece.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", my: 4 }}>
        <Typography variant="h4" sx={{ px: 4 }}>
          01
        </Typography>
        <Typography variant="h4">
          Ullamcorper sit amet lorem sed, tempus eleifend lacus pellentesque.
        </Typography>
        <Typography variant="caption">
          Quisque elementum tortor risus. Suspendisse nibh nisl, dignissim
          pellentesque mi eget, porta rhoncus quam. Curabitur gravida nibh sed
          purus efficitur, at pretium neque vulputate.
        </Typography>
      </Box>
      <Typography variant="body1">
        In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
        lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a,
        pretium lobortis metus. Vivamus consectetur consequat justo. Sed
        interdum nunc ut tristique congue. Quisque maximus mauris et dui
        sagittis scelerisque. Donec laoreet at turpis non molestie. Aenean dui
        leo, rutrum ac nisl ac, accumsan feugiat eros. Curabitur tempor
        vestibulum massa, vitae tincidunt justo congue at. Aliquam ullamcorper
        sem elit, vestibulum cursus dui dictum vitae. Curabitur vestibulum
        semper dolor, quis lacinia urna elementum vitae.
      </Typography>
      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item md="3">
          <Typography variant="caption" sx={{ mb: 3 }}>
            Du Kan Vara Drabbad
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Kagt besk plötslig sportbarnsdöd fastoke ben reamatisk.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Mara. Ambistat proskade tempofiering, reamatisk megaosmos. Memil
            galna chips-sjukan till IVPA. Näringslots fronta varat i
            kameratelefon liksom giganing.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Mara. Ambistat proskade tempofiering, reamatisk megaosmos. Memil
            galna chips-sjukan till IVPA. Näringslots fronta varat i
            kameratelefon liksom giganing.
          </Typography>
        </Grid>
        <Grid item md="6">
          <Box sx={{ width: "100%", height: "80vh" }}>
            <img
              src={image2}
              alt="2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item md="3">
          <Typography variant="caption" sx={{ mb: 3, color: "text.secondary" }}>
            Mara. Ambistat proskade tempofiering, reamatisk megaosmos. Memil
            galna chips-sjukan till IVPA. Näringslots fronta varat i
            kameratelefon liksom giganing.
          </Typography>
          <img
            src={image3}
            alt="2"
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      <Divider />

      <Box sx={{ display: "flex", my: 4 }}>
        <Typography variant="h4" sx={{ px: 4 }}>
          02
        </Typography>
        <Typography variant="h4">
          Ullamcorper sit amet lorem sed, tempus eleifend lacus pellentesque.
        </Typography>
        <Typography variant="caption">
          Quisque elementum tortor risus. Suspendisse nibh nisl, dignissim
          pellentesque mi eget, porta rhoncus quam. Curabitur gravida nibh sed
          purus efficitur, at pretium neque vulputate.
        </Typography>
      </Box>
      <Typography variant="body1">
        In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
        lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a,
        pretium lobortis metus. Vivamus consectetur consequat justo. Sed
        interdum nunc ut tristique congue. Quisque maximus mauris et dui
        sagittis scelerisque. Donec laoreet at turpis non molestie. Aenean dui
        leo, rutrum ac nisl ac, accumsan feugiat eros. Curabitur tempor
        vestibulum massa, vitae tincidunt justo congue at. Aliquam ullamcorper
        sem elit, vestibulum cursus dui dictum vitae. Curabitur vestibulum
        semper dolor, quis lacinia urna elementum vitae.
      </Typography>
      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item md="6">
          <Box sx={{ width: "100%", height: "80vh" }}>
            <img
              src={image5}
              alt="2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item md="3">
          <Typography variant="caption" sx={{ mb: 3 }}>
            Du Kan Vara Drabbad
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Kagt besk plötslig sportbarnsdöd fastoke ben reamatisk.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Mara. Ambistat proskade tempofiering, reamatisk megaosmos. Memil
            galna chips-sjukan till IVPA. Näringslots fronta varat i
            kameratelefon liksom giganing.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Mara. Ambistat proskade tempofiering, reamatisk megaosmos. Memil
            galna chips-sjukan till IVPA. Näringslots fronta varat i
            kameratelefon liksom giganing.
          </Typography>
        </Grid>
        <Grid item md="3">
          <img
            src={image4}
            alt="2"
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
          />
          <Typography variant="caption" sx={{ mt: 3, color: "text.secondary" }}>
            Mara. Ambistat proskade tempofiering, reamatisk megaosmos. Memil
            galna chips-sjukan till IVPA. Näringslots fronta varat i
            kameratelefon liksom giganing.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
