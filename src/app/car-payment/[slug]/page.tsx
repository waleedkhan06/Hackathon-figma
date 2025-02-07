import { getCarBySlugQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Car } from "../../../../types/car";
import PaymentPage from "../../components/PaymentPage";
import { notFound } from "next/navigation";

// Fetch car data by slug
async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    return await client.fetch(getCarBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching car by slug:", error);
    return null;
  }
}

// Define the type for the params prop
interface CarPaymentPageProps {
  params: { slug: string };
}

// Main component
export default async function CarPaymentPage({ params }: CarPaymentPageProps) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound(); // Render the 404 page if the car is not found
  }

  return <PaymentPage car={car} />;
}