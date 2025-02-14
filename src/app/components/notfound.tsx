"use client"

import { notFound } from "next/navigation"
import { useEffect } from "react"

export default function NotFoundComponent() {
  useEffect(() => {
    notFound()
  }, [])

  return null
}
