'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Street Photography',
    description: 'Capture the essence of urban life and culture.',
    features: ['City walks', 'Candid moments', 'Urban landscapes'],
    price: 'Starting at $200',
  },
  {
    title: 'Landscape Photography',
    description: 'Showcase the beauty of nature in stunning detail.',
    features: ['Sunrise/sunset shoots', 'Long exposure techniques', 'Panoramic views'],
    price: 'Starting at $250',
  },
  {
    title: 'Custom Packages',
    description: 'Tailored photography sessions to meet your specific needs.',
    features: ['Personalized planning', 'Multiple locations', 'High-resolution digital files'],
    price: 'Custom quote',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Contact</h1>
          <p className="text-gray-400">Let's get in touch!</p>
        </motion.div>

        <div className="content-center">
          <section>
            <h2 className="text-3xl font-light mb-8">Contact Us</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300">
                  Send Message
                </button>
              </form>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}

