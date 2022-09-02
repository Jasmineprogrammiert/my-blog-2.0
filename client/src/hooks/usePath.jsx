import { useLocation } from 'react-router';

const usePath = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  return { path };
}

export default usePath;