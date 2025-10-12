import { Photo } from "../types/photo";

const API_BASE_URL = "https://picsum.photos";
const PHOTOS_PER_PAGE = 12;

/**
 * Custom error class for network-related errors
 */
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

/**
 * Fetches a paginated list of photos from Lorem Picsum API
 * @param page - The page number to fetch (starts from 1)
 * @param limit - Number of photos per page
 * @returns Promise containing array of photos
 */
export const fetchPhotos = async (
  page: number,
  limit: number = PHOTOS_PER_PAGE
): Promise<Photo[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v2/list?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Photo[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);

    // Check if it's a network error (no internet connection)
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new NetworkError(
        "No internet connection. Please check your network and try again."
      );
    }

    throw error;
  }
};

/**
 * Fetches a single photo by ID
 * @param id - The photo ID
 * @returns Promise containing photo details
 */
export const fetchPhotoById = async (id: string): Promise<Photo> => {
  try {
    const response = await fetch(`${API_BASE_URL}/id/${id}/info`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Photo = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching photo with id ${id}:`, error);

    // Check if it's a network error (no internet connection)
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new NetworkError(
        "No internet connection. Please check your network and try again."
      );
    }

    throw error;
  }
};

/**
 * Generates a thumbnail URL for a photo
 * @param photo - The photo object
 * @param width - Thumbnail width
 * @param height - Thumbnail height
 * @returns Thumbnail URL
 */
export const getThumbnailUrl = (
  photo: Photo,
  width: number = 300,
  height: number = 200
): string => {
  return `${API_BASE_URL}/id/${photo.id}/${width}/${height}`;
};

/**
 * Generates a full-size image URL
 * @param photo - The photo object
 * @returns Full-size image URL
 */
export const getFullImageUrl = (photo: Photo): string => {
  return `${API_BASE_URL}/id/${photo.id}/${photo.width}/${photo.height}`;
};
