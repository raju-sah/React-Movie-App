import { useEffect, useState, useCallback, useRef } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8
};

export const useVisible = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  const callback = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      if (observerRef.current) {
        observerRef.current.disconnect(); // Stop observing once visible
      }
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, options);
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [targetRef, callback]);

  return isVisible;
};