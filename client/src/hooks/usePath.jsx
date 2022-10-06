import { useLocation } from 'react-router';

const usePath = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; // pathname: '/blogs/blog.id', result: blog.id

  return { path };
}

export default usePath;