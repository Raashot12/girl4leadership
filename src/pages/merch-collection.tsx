import { Layout } from 'components/Layout/Layout';
import Cards from 'components/MerchCollection/Cards';
import Categories from 'components/MerchCollection/Categories';
import MerchHeroSection from 'components/MerchCollection/MerchHeroSection';
import Products from 'components/MerchCollection/Products';
import { featured } from 'components/MerchCollection/staticData';
import { useEffect, useState } from 'react';

const allCategories = [...new Set(featured.map((item) => item.categories))];

const MerchCollectionPage = () => {
  useEffect(() => {
    const featu = featured.filter((a) => a.categories === 'featured');
    setAllItems(featu);
    return;
  }, []);

  const [allItems, setAllItems] = useState(featured);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categories) => {
    const newItems = featured.filter(
      (feature) => feature.categories === categories
    );
    setAllItems(newItems);
  };
  return (
    <Layout pageTitle="Merch Collections">
      <MerchHeroSection />
      <Cards />
      <Categories categories={categories} filterItems={filterItems} />
      <Products products={allItems} />
    </Layout>
  );
};

export default MerchCollectionPage;
