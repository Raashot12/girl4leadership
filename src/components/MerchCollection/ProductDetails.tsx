import { Box, Container, Grid } from '@mantine/core';
import React from 'react';
// import { createClient } from 'next-sanity';

const ProductDetails = () => {
  return (
    <Box mt={77}>
      <Container size={'xl'}>
        <Grid>
          <Grid.Col md={6}></Grid.Col>
          <Grid.Col md={6}></Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetails;
