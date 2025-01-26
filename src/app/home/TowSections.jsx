import { Box, Button, Grid, Typography } from "@mui/material";

const TwoSections = (data) => {
  return (
    <Grid container sx={{ p: 4 }} spacing={4}>
      {data?.data?.map((item) => (
        <Grid item md="6">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "80vh",
              backgroundImage: `url(${item?.image})`,
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
                {item?.title}
              </Typography>

              <Button
                variant="text"
                href={item?.cta_link}
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
      ))}
    </Grid>
  );
};
export default TwoSections;
