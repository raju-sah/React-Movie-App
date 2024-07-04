import { useState, useEffect } from 'react';

let callCount = 0;

export const useLoader = (initialLoadingTime = 1000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    callCount++;
    const loadingTime = callCount > 1 ? 100 : initialLoadingTime;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => {
      clearTimeout(timer);
      callCount--;
    };
  }, [initialLoadingTime]);

  return isLoading;
};