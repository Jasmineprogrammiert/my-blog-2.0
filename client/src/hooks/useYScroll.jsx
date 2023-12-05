import { useState, useEffect } from 'react';

const useYScroll = () => {
  const [isHidden, setIsHidden] = useState(true);
  const showNav = () => {
    const loc = window.scrollY;
    loc > 20 ? setIsHidden(false) : setIsHidden(true);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', showNav, { passive: true });
    return () => {
      window.removeEventListener('scroll', showNav);
    };
  }, []);
  
  let hideBar = isHidden ? 'hideBar' : '';

  return { hideBar };
}

export default useYScroll;