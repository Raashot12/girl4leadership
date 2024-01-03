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
  const d = {
    title: 'title',
    images: [
      'https://res.cloudinary.com/drhgdrlef/image/upload/v1703865327/G4_L_3_Girls_7d89a6c2b9.webp',
    ],
    category: 'category',
    description: 'description',
    rating: 'rating',
    price: '$200',
    discountPercentage: '20%',
  };
  return (
    <Layout pageTitle={`Merch collection | ${items.name}`}>
      <ProductDetails {...d} />
    </Layout>
  );
};

export default SingleItem;
