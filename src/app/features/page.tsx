"use client"

import { motion } from 'framer-motion'
import { 
  Brain, 
  Heart, 
  Users, 
  Sparkles, 
  Leaf, 
  Network,
  Flower2,
  Shield,
} from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0118] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Gradient mesh background */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Technology that elevates humanity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-200/80"
          >
            Bloom transforms digital interaction into a force for collective growth
          </motion.p>
        </div>
      </section>

      {/* Algorithm Section */}
      <section className="relative min-h-screen flex items-center py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                An algorithm that serves consciousness
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-purple-200/80 leading-relaxed"
              >
                Unlike traditional engagement algorithms that drain us, Bloom&apos;s core technology 
                is designed to elevate consciousness and foster meaningful connections that 
                serve our highest potential.
              </motion.p>
            </div>
            <div className="relative aspect-square bg-purple-500/10 rounded-lg overflow-hidden">
              <Network className="absolute inset-0 w-full h-full p-12 text-purple-500/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Rhizomatic Growth Section */}
      <section className="relative min-h-screen flex items-center py-32 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-purple-500/10 rounded-lg overflow-hidden">
              <Leaf className="absolute inset-0 w-full h-full p-12 text-purple-500/40" />
            </div>
            <div className="order-1 lg:order-2">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Organic, interconnected growth
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-purple-200/80 leading-relaxed"
              >
                Experience a space where inspiring ideas spread naturally through communities, 
                creating resilient networks of shared wisdom and collective growth.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Technology Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-16"
          >
            Sacred Technology
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Resonance Matching",
                description: "Connect based on authentic resonance and shared values"
              },
              {
                icon: Shield,
                title: "Digital Sanctuary",
                description: "A protected space designed for genuine connection"
              },
              {
                icon: Flower2,
                title: "Conscious Design",
                description: "Every element crafted to promote mindfulness"
              },
              {
                icon: Brain,
                title: "Collective Intelligence",
                description: "Amplify our shared wisdom and creativity"
              },
              {
                icon: Sparkles,
                title: "Elevated Interaction",
                description: "Transform scrolling into conscious expansion"
              },
              {
                icon: Users,
                title: "Co-Creative Community",
                description: "Build the future of connection together"
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-purple-900/10 rounded-xl border border-purple-500/20 
                  hover:border-purple-500/40 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative min-h-[50vh] flex items-center py-32 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Join the movement
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-200/80 mb-12"
          >
            Be part of creating technology that serves our highest potential
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-8 py-4 bg-purple-500 text-white rounded-lg font-medium 
              hover:bg-purple-600 transition-colors duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  )
}