import React from 'react';

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useLayoutEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

export default useViewport;