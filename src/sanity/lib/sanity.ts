import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!source) {
    return "/placeholder.svg" // Return a default placeholder image URL
  }
  return builder.image(source)
}

export const allCarsQuery = `*[_type == "car"] {
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
  image
}`

export const getCarBySlugQuery = `*[_type == "car" && slug.current == $slug][0] {
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
  image,
  description
}`

