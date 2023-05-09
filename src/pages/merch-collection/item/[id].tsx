import { useRouter } from 'next/router';
import { featured } from 'components/MerchCollection/staticData';
import ProductDetails from 'components/MerchCollection/ProductDetails';
import { Layout } from 'components/Layout/Layout';

const SingleItem = (): JSX.Element => {
  const router = useRouter();
  const { id: itemId } = router.query;

  const items = featured.find((item) => item.id === Number(itemId));

  if (!items) {
    return <div>Product not found</div>;
  }
  return (
    <Layout pageTitle={`Merch collection | ${items.name}`}>
      <ProductDetails />
    </Layout>
  );
};

export default SingleItem;
