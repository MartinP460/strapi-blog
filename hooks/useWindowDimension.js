import { useState, useEffect } from 'react';

function useWindowDimension() {
  const width = undefined;
  const height = undefined;

  const [windowDimensions, setWindowDimensions] = useState({ width, height });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimension;
