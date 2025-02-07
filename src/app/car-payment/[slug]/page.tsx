import { getCarBySlugQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Car } from "../../../../types/car";
import PaymentPage from "../../components/PaymentPage";
import { notFound } from "next/navigation";

async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    return await client.fetch(getCarBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching car by slug:", error);
    return null;
  }
}

export default async function CarPaymentPage({ params }: { params: { slug: string } }) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return <PaymentPage car={car} />;
}
