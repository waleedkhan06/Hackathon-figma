import { Suspense } from "react"
import { client, getCarBySlugQuery } from "@/sanity/lib/sanity"
import type { Car } from "../../../../types/car"
import CarDetailsClient from "../../components/CarDetail"
import LoadingSpinner from "../../components/Loadingspinner"

export const dynamicParams = true

export async function generateStaticParams() {
  const cars = await client.fetch(`*[_type == "car"]{ "slug": slug.current }`)
  return cars.map((car: { slug: string }) => ({
    slug: car.slug,
  }))
}

async function getCarData(slug: string): Promise<Car | null> {
  try {
    const car = await client.fetch<Car | null>(getCarBySlugQuery, { slug })
    return car
  } catch (error) {
    console.error("Error fetching car data:", error)
    return null
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CarPage({ params }: PageProps) {
  const resolvedParams = await params
  const car = await getCarData(resolvedParams.slug)

  if (!car) {
    return null // If car not found, return nothing
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CarDetailsClient car={car} />
    </Suspense>
  )
}
