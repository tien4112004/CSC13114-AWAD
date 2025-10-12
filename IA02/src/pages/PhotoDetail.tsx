import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Photo } from "../types/photo";
import { fetchPhotoById, getFullImageUrl } from "../services/photoService";
import { LoadingSpinner } from "../components/LoadingSpinner";

/**
 * PhotoDetail page component - displays detailed view of a single photo
 */
export const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhoto = async () => {
      if (!id) {
        setError("Invalid photo ID");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await fetchPhotoById(id);
        setPhoto(data);
      } catch (err) {
        setError("Failed to load photo details. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPhoto();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !photo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-4 inline-block">
            {error || "Photo not found"}
          </div>
          <div>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Gallery
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const fullImageUrl = getFullImageUrl(photo);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Gallery
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Photo Image */}
          <div className="relative aspect-[16/9] bg-gray-200">
            <img
              src={fullImageUrl}
              alt={`Author: ${photo.author}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Photo Details */}
          <div className="p-6 sm:p-8">
            <div className="space-y-4">
              {/* Title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Photo {photo.id}
                </h1>
                <p className="text-gray-500 mt-1">
                  High-quality photography from Lorem Picsum
                </p>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Author
                </h2>
                <p className="text-lg text-gray-900">{photo.author}</p>
              </div>

              {/* Description */}
              <div className="border-t pt-4">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This beautiful photograph showcases the artistic talent of{" "}
                  {photo.author}. The image captures a unique perspective and
                  demonstrates excellent composition and lighting techniques.
                  Perfect for use in creative projects, presentations, or as
                  inspirational content.
                </p>
              </div>

              {/* Technical Details */}
              <div className="border-t pt-4">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Technical Details
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">Photo ID</p>
                    <p className="text-lg font-medium text-gray-900">
                      {photo.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Dimensions</p>
                    <p className="text-lg font-medium text-gray-900">
                      {photo.width} × {photo.height}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Aspect Ratio</p>
                    <p className="text-lg font-medium text-gray-900">
                      {(photo.width / photo.height).toFixed(2)}:1
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Source</p>
                    <a
                      href={photo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-blue-600 hover:text-blue-700"
                    >
                      View Original
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="border-t pt-4">
                <a
                  href={photo.download_url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Photo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
