'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
}

export default function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <div ref={ref} className="relative h-[600px] overflow-hidden rounded-2xl">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}

