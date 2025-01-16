'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Modal from 'react-modal'

const portfolioItems = {
  all: [
    // Japan
    {
      id: 1,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1626.JPG',
      alt: 'Street scene in Japan',
      category: 'Japan',
      type: 'Street'
    },
    {
      id: 2,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1643.JPG',
      alt: 'Urban landscape in Japan',
      category: 'Japan',
      type: 'Street'
    },
    {
      id: 3,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1613.JPG',
      alt: 'Japanese architecture',
      category: 'Japan',
      type: 'Architecture'
    },
    {
      id: 4,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF1774.RAF.jpg',
      alt: 'Night scene in Japan',
      category: 'Japan',
      type: 'Street'
    },
    {
      id: 5,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSCF2005.RAF.jpg',
      alt: 'Japanese landscape',
      category: 'Japan',
      type: 'Landscape'
    },
    // Taiwan
    {
      id: 6,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4600.JPG',
      alt: 'Street life in Taiwan',
      category: 'Taiwan',
      type: 'Street'
    },
    {
      id: 7,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4739.JPG',
      alt: 'Urban scene in Taiwan',
      category: 'Taiwan',
      type: 'Street'
    },
    {
      id: 8,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4864.JPG',
      alt: 'Taiwan cityscape',
      category: 'Taiwan',
      type: 'Street'
    },
    {
      id: 9,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC4914.JPG',
      alt: 'Taiwan street market',
      category: 'Taiwan',
      type: 'Street'
    },
    // British Columbia
    {
      id: 10,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC1583-2.jpg',
      alt: 'BC mountain landscape',
      category: 'BC',
      type: 'Landscape'
    },
    {
      id: 11,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/_DSC2959.jpg',
      alt: 'British Columbia wilderness',
      category: 'BC',
      type: 'Landscape'
    },
    {
      id: 12,
      src: 'https://raw.githubusercontent.com/bryanesong/bryan-song-photography-website/main/DSC02530.jpg',
      alt: 'BC natural scenery',
      category: 'BC',
      type: 'Landscape'
    }
  ]
}

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = selectedCategory === 'all'
    ? portfolioItems.all
    : portfolioItems.all.filter(item => item.category === selectedCategory)

  const openModal = (image) => {
    setSelectedImage(image)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedImage(null)
  }

  // Set the app element when the component mounts
  useEffect(() => {
    Modal.setAppElement('#__next')
  }, [])

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Collections</h1>
          <p className="text-gray-400">A glimpse into another life.</p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="flex justify-center space-x-4 bg-transparent">
            <TabsTrigger
              value="all"
              onClick={() => setSelectedCategory('all')}
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="Japan"
              onClick={() => setSelectedCategory('Japan')}
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Japan
            </TabsTrigger>
            <TabsTrigger
              value="Taiwan"
              onClick={() => setSelectedCategory('Taiwan')}
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Taiwan
            </TabsTrigger>
            <TabsTrigger
              value="BC"
              onClick={() => setSelectedCategory('BC')}
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              British Columbia
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center text-white p-4">
                  <p className="text-lg font-medium mb-2 text-center">{item.alt}</p>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{item.type}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400">No images found for this category.</p>
          </motion.div>
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}

