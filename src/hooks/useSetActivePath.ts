import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setActivePath } from 'state/features/nav/navSlice';
import { useAppDispatch } from 'state/hooks';

const useSetActivePath = () => {
  const router = useRouter();
  const activePath = router.asPath;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePath(activePath));
  });
};

export default useSetActivePath;
