import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Your dataset (e.g., 'production')
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03", // API version
  useCdn: false, // Set to false when using a token to always fetch fresh data
  token: process.env.SANITY_API_TOKEN, // Add your token here (DO NOT hardcode)
});
