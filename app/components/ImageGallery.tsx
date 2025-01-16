'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  '/placeholder.svg?height=800&width=1200',
  '/placeholder.svg?height=800&width=1200',
  '/placeholder.svg?height=800&width=1200'
]

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

