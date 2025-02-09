import { getCarBySlugQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import type { Car } from "../../../../types/car";
import PaymentPageClient from "../../components/PaymentPage";

async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    if (!slug) {
      throw new Error("Slug is undefined");
    }

    const car = await client.fetch<Car | null>(getCarBySlugQuery, { slug });
    return car;
  } catch (error) {
    console.error("Error fetching car by slug:", error);
    return null;
  }
}

interface PageProps {
  params: { slug: string }; // Ensure params contains slug as a string
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function PaymentPage({ params }: PageProps) {
  if (!params?.slug || typeof params.slug !== "string") {
    console.error("Invalid slug:", params?.slug);
    notFound();
  }

  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return <PaymentPageClient car={car} />;
}
