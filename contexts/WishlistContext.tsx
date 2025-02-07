"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface WishlistContextType {
  favorites: string[]
  addToWishlist: (carId: string) => void
  removeFromWishlist: (carId: string) => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const addToWishlist = (carId: string) => {
    setFavorites((prev) => {
      const newFavorites = [...prev, carId]
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const removeFromWishlist = (carId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((id) => id !== carId)
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  return (
    <WishlistContext.Provider value={{ favorites, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

