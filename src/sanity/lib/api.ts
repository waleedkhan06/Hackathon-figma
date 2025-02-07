import type { Car } from "../../..//types/car"
import { client, allCarsQuery, getCarBySlugQuery } from "./sanity"

// Function to fetch all cars
export async function getCars(): Promise<Car[]> {
  try {
    const cars = await client.fetch(allCarsQuery)
    return cars
  } catch (error) {
    console.error("Error fetching cars:", error)
    throw error
  }
}

// Function to fetch a car by its slug
export async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    const car = await client.fetch(getCarBySlugQuery, { slug })
    return car
  } catch (error) {
    console.error("Error fetching car by slug:", error)
    throw error
  }
}
