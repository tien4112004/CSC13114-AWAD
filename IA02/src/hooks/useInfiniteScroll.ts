import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for implementing infinite scroll functionality
 * Uses IntersectionObserver API properly to prevent double triggers
 * @param callback - Function to call when user scrolls to bottom
 * @param isFetching - Whether data is currently being fetched
 */
export const useInfiniteScroll = (
  callback: () => void,
  isFetching: boolean
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const callbackRef = useRef(callback);

  // Keep callback ref up to date
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Create a callback ref for the sentinel element
  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      // Disconnect previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Don't create observer while fetching or if no node
      if (isFetching || !node) return;

      // Create new observer with proper configuration
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Only trigger when sentinel becomes visible and we're not already fetching
          const entry = entries[0];
          if (entry.isIntersecting) {
            // Use the ref to avoid recreating observer when callback changes
            callbackRef.current();
          }
        },
        {
          // Only trigger when 100% of sentinel is visible to be more conservative
          threshold: 1.0,
          // No root margin initially - load only when truly at bottom
          rootMargin: "0px",
        }
      );

      // Observe the sentinel element
      observerRef.current.observe(node);
    },
    [isFetching] // Only recreate when isFetching changes
  );

  useEffect(() => {
    return () => {
      // Cleanup observer on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return sentinelRef;
};
