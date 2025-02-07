import { groq } from "next-sanity";

// Car fields
const carFields = `
  _id,
  name,
  "slug": slug.current,
  brand,
  type,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  "image": image.asset->url,
  description
`;

// Order fields (including referenced car)
const orderFields = `
  _id,
  userName,
  status,
  pickupLocation,
  dropOffLocation,
  "car": car -> {
    _id,
    name,
    "slug": slug.current,
    "image": image.asset->url
  }
`;

// Fetch all cars
export const allCarsQuery = groq`*[_type == "car"] {
  ${carFields}
}`;

// Fetch a single car by slug
export const getCarBySlugQuery = groq`*[_type == "car" && slug.current == $slug][0] {
  ${carFields}
}`;

// Fetch all orders with car details
export const allOrdersQuery = groq`*[_type == "order"] {
  ${orderFields}
}`;