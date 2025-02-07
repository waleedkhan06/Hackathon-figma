import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "v2021-10-21",
  useCdn: true,
})
const builder = imageUrlBuilder(client);
export const urlFor = (source : string) => builder.image(source);

