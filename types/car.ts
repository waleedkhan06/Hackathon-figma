import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

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
  image: SanityImage; // No longer using SanityImageSource
  description: string;
}

