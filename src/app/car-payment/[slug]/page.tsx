import { Suspense } from "react";
import { getCarBySlugQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Car } from "../../../../types/car";
import PaymentPageClient from "../../components/PaymentPage";
import LoadingSpinner from "../../components/Loadingspinner"; 

async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    if (!slug || typeof slug !== "string") {
      throw new Error("Invalid slug provided");
    }

    const car = await client.fetch<Car | null>(getCarBySlugQuery, { slug });
    return car;
  } catch (error) {
    console.error("Error fetching car by slug:", error);
    return null;
  }
}


interface PageProps {
  params: Promise<{ slug: string }>;
  
}

export default async function PaymentPage({ params }: PageProps) {
  const resolvedParams = await params; 
  const car = await getCarBySlug(resolvedParams.slug);

  if (!car) {
    return null; 
  }

  return (
    <Suspense fallback={<LoadingSpinner />}> 
      <PaymentPageClient car={car} />
    </Suspense>
  );
}


export async function generateStaticParams() {
  return [];
}
