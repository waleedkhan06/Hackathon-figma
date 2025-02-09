import { getCarBySlugQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import type { Car } from "../../../../types/car";
import PaymentPageClient from "../../components/PaymentPage";

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

// ✅ Make `params` optional in PageProps
interface PageProps {
  params?: { slug: string }; // <-- Make `params` optional
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function PaymentPage({ params }: PageProps) {
  if (!params?.slug || typeof params.slug !== "string") {
    console.error("Invalid slug:", params?.slug);
    notFound();
    return null;
  }

  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
    return null;
  }

  return <PaymentPageClient car={car} />;
}

// ✅ Define `generateStaticParams` (Prevents TypeScript errors in Next.js)
export async function generateStaticParams() {
  return [];
}
