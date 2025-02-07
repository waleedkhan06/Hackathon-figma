import { getCarBySlugQuery } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import type { Car } from "../../../../types/car"
import CarDetail from "../../components/CarDetail"
import { notFound } from "next/navigation"

async function getCarBySlug(slug: string): Promise<Car | null> {
  return client.fetch(getCarBySlugQuery, { slug })
}

export default async function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = await getCarBySlug(params.slug)

  if (!car) {
    notFound()
  }

  return <CarDetail car={car} />
}

