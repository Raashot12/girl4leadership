import { useRouter } from 'next/router';
import { Box } from '@mantine/core';
import { featured } from 'components/MerchCollection/staticData';

const SingleItem = (): JSX.Element => {
  const router = useRouter();
  const { id: itemId } = router.query;

  const items = featured.find((item) => item.id === Number(itemId));

  if (!items) {
    return <div>Product not found</div>;
  }
  return <Box></Box>;
};

export default SingleItem;
