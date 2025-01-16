'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MasonryGallery from './components/MasonryGallery'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF2005.RAF.jpg"
          alt="Hero image from Japan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light mb-6 text-center"
          >
            Capturing Moments in Time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl text-center font-light"
          >
            Street & Landscape Photography
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-2 bg-white rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Featured Locations Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Locations</h2>
            <p className="text-gray-400">Exploring Japan, Taiwan, and British Columbia</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] group"
            >
              <Image
                src="https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1774.RAF.jpg"
                alt="Japan"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <h3 className="text-white text-2xl font-light">Japan</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] group"
            >
              <Image
                src="https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4864.JPG"
                alt="Taiwan"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <h3 className="text-white text-2xl font-light">Taiwan</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative h-[400px] group"
            >
              <Image
                src="https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC2959.jpg"
                alt="British Columbia"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <h3 className="text-white text-2xl font-light">British Columbia</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Latest Works</h2>
            <p className="text-gray-400">A selection of recent photography</p>
          </motion.div>
          <MasonryGallery />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-8"
            >
              The Art of Photography
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Through the lens, we capture not just images, but emotions, stories, and moments frozen in time. 
              Each photograph is a unique perspective, a fragment of reality preserved forever.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-8"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-8"
            >
              Have a project in mind? Let's create something beautiful together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/services-contact"
                className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

