'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">About the Photographer</h1>
          <p className="text-gray-400">Photographer, Software Engineer, Motorcycle Enthusiast</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <Image
              src="https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4914.JPG"
              alt="Bryan Song"
              width={600}
              height={800}
              className="rounded-lg object-contain w-full h-[600px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4">Bryan Song</h2>
            <p className="text-gray-300 mb-4">
              With a passion for capturing the essence of urban environments and natural landscapes,
              Bryan has developed a unique perspective in photography. His work spans across
              the bustling streets of Japan and Taiwan to the serene wilderness of British Columbia.
            </p>
            <p className="text-gray-300 mb-4">
              Bryan's journey in photography began during his travels, where he discovered the power
              of visual storytelling. Since then, he has honed his skills to blend technical precision
              with artistic vision, creating images that not only document moments but evoke emotions.
            </p>
            <p className="text-gray-300 mb-4">
              His work has been featured in various galleries and publications, earning recognition
              for its ability to capture the interplay of light, shadow, and human elements in both
              urban and natural settings.
            </p>
            <p className="text-gray-300">
              When not behind the lens, Bryan enjoys exploring new locations, studying different
              cultures, and sharing his knowledge through photography workshops and mentoring
              aspiring photographers.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

