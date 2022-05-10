import { useState, useRef } from 'react';

const useLoadingStatusDelay = (delay = 800) => {
  const [isLoading, setIsLoading] = useState(false);
  const startLoadingTimestamp = useRef();
  const timer = useRef();

  const changeLoading = (status) => {
    if (status) {
      setIsLoading(true);
      clearTimeout(timer.current);
      startLoadingTimestamp.current = new Date().getTime();
    } else {
      const endLoadingTimestamp = new Date().getTime();
      const loadTime = endLoadingTimestamp - startLoadingTimestamp.current;

      if (loadTime < delay) {
        timer.current = setTimeout(() => setIsLoading(false), delay - loadTime);
      } else {
        setIsLoading(false);
      }
    }
  };

  return [isLoading, changeLoading];
};

export default useLoadingStatusDelay;
