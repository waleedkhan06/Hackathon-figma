import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client"; // Import your Sanity client

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source: any) {
  return builder.image(source);
}

// Define the Sanity image type
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// Car Interface with correct image handling
export interface Car {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice?: string;
  tags: string[];
  image: SanityImage; // Corrected image type
  description: string;
}
