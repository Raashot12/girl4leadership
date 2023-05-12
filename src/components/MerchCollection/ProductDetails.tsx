import { Carousel } from '@mantine/carousel';
import { Box, Container, Grid, Rating } from '@mantine/core';
import React from 'react';
// import { createClient } from 'next-sanity';

const ProductDetails = () => {
  return (
    <Box mt={77}>
      <Container size={'xl'}>
        <Grid>
          <Grid.Col md={6}>
            <Carousel>
              <Carousel.Slide>1</Carousel.Slide>
              <Carousel.Slide>2</Carousel.Slide>
              <Carousel.Slide>3</Carousel.Slide>
              <Carousel.Slide>4</Carousel.Slide>
              <Carousel.Slide>5</Carousel.Slide>
            </Carousel>
          </Grid.Col>
          <Grid.Col md={6}>
            <Rating value={2} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetails;
