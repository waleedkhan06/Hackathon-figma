import { getCarBySlugQuery } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import type { Car } from "../../../../types/car"
import CarDetailClient from "../../components/CarDetail"

async function getCarBySlug(slug: string): Promise<Car | null> {
  return client.fetch(getCarBySlugQuery, { slug })
}

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CarDetailPage({ params }: PageProps) {
  const car = await getCarBySlug(params.slug)

  if (!car) {
    notFound()
  }

  return <CarDetailClient car={car} />
}

