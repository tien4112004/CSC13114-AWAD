import { useState, useCallback } from "react";
import { Photo } from "../types/photo";
import { fetchPhotos, NetworkError } from "../services/photoService";
import { PhotoCard } from "../components/PhotoCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Load photos function - removed loading from dependencies to prevent recreation
  const loadPhotos = useCallback(async () => {
    // Use functional check instead of closure over loading state
    setLoading((currentLoading) => {
      if (currentLoading) return true; // Already loading, do nothing
      return true; // Start loading
    });

    setError(null);
    setIsNetworkError(false);

    try {
      const newPhotos = await fetchPhotos(page);

      if (newPhotos.length === 0) {
        setHasMore(false);
      } else {
        setPhotos((prev) => {
          // Prevent duplicates by filtering out already existing IDs
          const existingIds = new Set(prev.map((p) => p.id));
          const uniqueNewPhotos = newPhotos.filter(
            (p) => !existingIds.has(p.id)
          );
          return [...prev, ...uniqueNewPhotos];
        });
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      if (err instanceof NetworkError) {
        setError(err.message);
        setIsNetworkError(true);
        setHasMore(false); // Stop infinite scroll on network error
      } else {
        setError("Failed to load photos. Please try again.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page]); // Only depend on page

  // Trigger fetch when user scrolls - simplified, no guards here
  const handleLoadMore = useCallback(() => {
    loadPhotos();
  }, [loadPhotos]);

  // Retry loading photos after network error
  const handleRetry = () => {
    setIsNetworkError(false);
    setHasMore(true);
    loadPhotos();
  };

  // Infinite scroll sentinel ref
  const sentinelRef = useInfiniteScroll(handleLoadMore, loading);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="text-gray-600 mt-1">API by Lorem Picsum.</p>
          <p className="text-gray-600 mt-1">22120368 - Phan Thanh Tiến</p>
        </div>
      </header>{" "}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
              {isNetworkError && (
                <button
                  onClick={handleRetry}
                  className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium"
                >
                  Retry
                </button>
              )}
            </div>
          </div>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>

        {loading && <LoadingSpinner />}

        {hasMore && !loading && !isNetworkError && (
          <div ref={sentinelRef} className="h-10" />
        )}

        {!hasMore && photos.length > 0 && (
          <div className="text-center py-8 text-gray-500">
            No more photos to load
          </div>
        )}

        {!loading && photos.length === 0 && !error && (
          <div className="text-center py-12 text-gray-500">No photos found</div>
        )}
      </main>
    </div>
  );
};
