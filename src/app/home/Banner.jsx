import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import banner1 from 'assets/images/banner-1.webp'
import banner2 from 'assets/images/banner-02.webp'
import banner3 from 'assets/images/category-bracelets-01.webp'
const Banner = () => {
  const collections = [
    {
      image: banner1,
      title: 'Modern Collection',
      link: 'about-us.html',
    },
    {
      image: banner2,
      title: 'Classic Collection',
      link: 'about-us.html',
    },
    {
      image: banner3,
      title: 'Timeless Collection',
      link: 'about-us.html',
    },
  ];

  return (
    <Box id="banner" sx={{ py: 4}}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {collections.map((collection, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ position: 'relative' }}>
              <Box>
                <img
                  src={collection.image}
                  alt="img"
                  style={{ width: '100%', display: 'block' ,height:'100%',objectFit:'cover'}}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <Typography variant="h2" component="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {collection.title}
                </Typography>
                <Button
                  href={collection.link}
                  variant="outlined"
                  sx={{ mt: 2, textTransform: 'capitalize', position: 'relative' }}
                >
                  Shop Now
                  <svg
                    className="arrow-right"
                    width="18"
                    height="20"
                    style={{ position: 'absolute', marginLeft: '8px' }}
                  >
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
