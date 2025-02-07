import { getCarBySlugQuery } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import type { Car } from "../../../../types/car"
import PaymentPage from "../../components/PaymentPage"
import { notFound } from "next/navigation"

async function getCarBySlug(slug: string): Promise<Car | null> {
  return client.fetch(getCarBySlugQuery, { slug })
}

export default async function CarPaymentPage({ params }: { params: { slug: string } }) {
  const car = await getCarBySlug(params.slug)

  if (!car) {
    notFound()
  }

  return <PaymentPage car={car} />
}

