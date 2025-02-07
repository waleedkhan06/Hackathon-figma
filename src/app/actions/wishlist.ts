"use server"

import { revalidatePath } from "next/cache"
import { client } from "@/sanity/lib/client"

export async function addToWishlist(carId: string) {
  // In a real application, you would get the user ID from the session
  const userId = "current-user-id"

  const existingWishlist = await client.fetch(`*[_type == "wishlist" && user._ref == $userId][0]`, { userId })

  if (existingWishlist) {
    await client
      .patch(existingWishlist._id)
      .setIfMissing({ cars: [] })
      .append("cars", [{ _type: "reference", _ref: carId }])
      .commit()
  } else {
    await client.create({
      _type: "wishlist",
      user: { _type: "reference", _ref: userId },
      cars: [{ _type: "reference", _ref: carId }],
    })
  }

  revalidatePath("/wishlist")
  revalidatePath("/")
}

export async function removeFromWishlist(carId: string) {
  // In a real application, you would get the user ID from the session
  const userId = "current-user-id"

  const existingWishlist = await client.fetch(`*[_type == "wishlist" && user._ref == $userId][0]`, { userId })

  if (existingWishlist) {
    await client
      .patch(existingWishlist._id)
      .unset([`cars[_ref=="${carId}"]`])
      .commit()
  }

  revalidatePath("/wishlist")
  revalidatePath("/")
}

export async function getWishlistCount() {
  // In a real application, you would get the user ID from the session
  const userId = "current-user-id"

  const wishlist = await client.fetch(
    `
    *[_type == "wishlist" && user._ref == $userId][0] {
      "count": count(cars)
    }
  `,
    { userId },
  )

  return wishlist?.count || 0
}

export async function getWishlistItems() {
  // In a real application, you would get the user ID from the session
  const userId = "current-user-id"

  const wishlistItems = await client.fetch(
    `
    *[_type == "wishlist" && user._ref == $userId][0] {
      cars[]->
    }
  `,
    { userId },
  )

  return wishlistItems?.cars || []
}

