import { Layout } from 'components/Layout/Layout';
import Cards from 'components/MerchCollection/Cards';
import MerchHeroSection from 'components/MerchCollection/MerchHeroSection';

const MerchCollectionPage = () => {
  return (
    <Layout pageTitle="Merch Collections">
      <MerchHeroSection />
      <Cards />
    </Layout>
  );
};

export default MerchCollectionPage;
