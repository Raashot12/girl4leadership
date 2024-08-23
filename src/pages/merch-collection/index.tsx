/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-useless-return */
import { useEffect, useState } from 'react';
import { Box, Container, useMantineColorScheme } from '@mantine/core';
import { Layout } from 'components/Layout/Layout';
import Products from 'components/MerchCollection/Products';
import { featured } from 'components/MerchCollection/staticData';
import { CategoriesType } from 'types/merchSection';
import MerchHeroSection from 'components/MerchCollection/MerchHeroSection';
import Cards from 'components/MerchCollection/Cards';
import Wilderness from 'components/MerchCollection/Wilderness';
import Accessories from 'components/MerchCollection/Accessories';
import MerchCollectionBlog from 'components/MerchCollection/MerchCollectionBlog';
import {
  Record,
  useApiServicesAppProductListApiQuery,
} from 'state/services/product';
import axios from 'axios';

const allCategories = [...new Set(featured.map((item) => item.categories))];

const MerchCollectionPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const { data, isLoading, isError } = useApiServicesAppProductListApiQuery({});
  console.log(data?.records);

  const [allProducts, setAllProducts] = useState<Record[]>(data?.records);
  const [categories, setCategories] = useState<string[]>(allCategories);
  useEffect(() => {
    if (!isError && !isLoading) {
      const products = data?.records.filter(
        (item) => item?.fields?.Categories === 'featured'
      );
      setAllProducts(products);
      return;
    }
  }, [isError, isLoading]);

  const filterItems = (categories: string) => {
    const otherCategories = data?.records?.filter(
      (item) => item?.fields?.Categories === categories
    );
    console.log(data?.records);
    setAllProducts(otherCategories);
  };
  console.log(allProducts);
  return (
    <Layout pageTitle="Merch Collections">
      <MerchHeroSection />
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
      <MerchCollectionBlog />
    </Layout>
  );
};

export default MerchCollectionPage;
