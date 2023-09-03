/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-useless-return */
import { useEffect, useState } from 'react';
import { Box, Container, useMantineColorScheme } from '@mantine/core';
import { Layout } from 'components/Layout/Layout';
// import Cards from 'components/MerchCollection/Cards';
// import Products from 'components/MerchCollection/Products';
// import MerchHeroSection from 'components/MerchCollection/MerchHeroSection';
import { featured } from 'components/MerchCollection/staticData';
import { CategoriesType } from 'types/merchSection';
// import Wilderness from 'components/MerchCollection/Wilderness';
// import Accessories from 'components/MerchCollection/Accessories';
// import MerchCollectionBlog from 'components/MerchCollection/MerchCollectionBlog';

const allCategories = [...new Set(featured.map((item) => item.categories))];

const MerchCollectionPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const [allProducts, setAllProducts] = useState<CategoriesType[]>(featured);
  const [categories, setCategories] = useState<string[]>(allCategories);
  useEffect(() => {
    const products = featured.filter((item) => item.categories === 'featured');
    setAllProducts(products);
    return;
  }, []);

  const filterItems = (categories: string) => {
    const otherCategories = featured.filter(
      (item) => item.categories === categories
    );
    setAllProducts(otherCategories);
  };
  return (
    <Layout pageTitle="Merch Collections">
      {/* <MerchHeroSection />
      <Box sx={{ background: colorScheme === 'dark' ? '#232324' : '#ffff' }}>
        <Container size="xl">
          <Cards />
          <Products
            categories={categories}
            filterItems={filterItems}
            product={allProducts}
          />
        </Container>
      </Box>
      <Wilderness />
      <Accessories />
      <MerchCollectionBlog /> */}
      <Box component="h1" py={90} ta={'center'}>
        Coming Soon!
      </Box>
    </Layout>
  );
};

export default MerchCollectionPage;
