import { useLocalStorage } from '@mantine/hooks';
import { Record } from 'state/services/product';

const useWishList = () => {
  const [wishlist, setWishlist] = useLocalStorage<Record[]>({
    key: 'wishlists',
    defaultValue: [],
  });
  return { setWishlist, wishlist };
};

export default useWishList;
