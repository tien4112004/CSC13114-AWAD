import { Link } from "react-router-dom";
import { Photo } from "../types/photo";
import { getThumbnailUrl } from "../services/photoService";

interface PhotoCardProps {
  photo: Photo;
}

/**
 * PhotoCard component displays a thumbnail of a photo with author info
 */
export const PhotoCard = ({ photo }: PhotoCardProps) => {
  const thumbnailUrl = getThumbnailUrl(photo);

  return (
    <Link
      to={`/photos/${photo.id}`}
      className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
    >
      <div className="aspect-[3/2] overflow-hidden bg-gray-200">
        <img
          src={thumbnailUrl}
          alt={`Author: ${photo.author}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-gray-900 truncate">
          Photo by {photo.author}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          ID: {photo.id} • {photo.width} × {photo.height}
        </p>
      </div>
    </Link>
  );
};
