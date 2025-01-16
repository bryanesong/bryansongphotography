'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  // Japan
  {
    src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1626.JPG',
    alt: 'Street scene in Japan',
    location: 'Japan',
    width: 800,
    height: 600
  },
  {
    src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1643.JPG',
    alt: 'Urban landscape in Japan',
    location: 'Japan',
    width: 800,
    height: 600
  },
  {
    src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1613.JPG',
    alt: 'Japanese architecture',
    location: 'Japan',
    width: 800,
    height: 600
  },
  // Taiwan
  {
    src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4600.JPG',
    alt: 'Street life in Taiwan',
    location: 'Taiwan',
    width: 800,
    height: 600
  },
  {
    src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4739.JPG',
    alt: 'Urban scene in Taiwan',
    location: 'Taiwan',
    width: 800,
    height: 600
  },
  // BC, Canada
  {
    src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC1583-2.jpg',
    alt: 'Landscape in British Columbia',
    location: 'BC, Canada',
    width: 800,
    height: 600
  }
]

export default function MasonryGallery() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative break-inside-avoid group"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center text-white">
            <p className="text-lg font-medium mb-2">{image.alt}</p>
            <p className="text-sm text-gray-300">{image.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

