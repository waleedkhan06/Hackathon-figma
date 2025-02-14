import { NextResponse } from "next/server"
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      userName,
      userEmail,
      userPhone,
      carId,
      pickupLocation,
      dropOffLocation,
      rentalDays,
      totalPrice,
      status,
      createdAt,
    } = body

    const order = await client.create({
      _type: "order",
      userName,
      userEmail,
      userPhone,
      car: {
        _type: "reference",
        _ref: carId,
      },
      pickupLocation,
      dropOffLocation,
      rentalDays,
      totalPrice,
      status,
      createdAt,
    })

    return NextResponse.json({ message: "Order created successfully", order })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ message: "Error creating order" }, { status: 500 })
  }
}

