"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from "./ui/button"
import { BloomingFlower } from "./BloomingFlower"
import { ParticleBackground } from "./ParticleBackground"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative overflow-hidden bg-[#0a0118]" ref={containerRef}>
      <ParticleBackground />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-800/10 to-transparent" />
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
            opacity: [0.2, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </motion.div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-24 gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mb-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full 
                  bg-purple-500/10 text-purple-300 border border-purple-500/20 
                  hover:bg-purple-500/20 transition-all cursor-pointer"
                >
                  Mindful Social Media
                </span>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100 
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Transform your{" "}
              <motion.span 
                className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%'],
                  opacity: [0.8, 1] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                social experience
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Turn mindless scrolling into mindful moments. Experience social media with purpose and intention.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] 
                    hover:to-[#9333EA] text-white px-8 py-6 text-lg rounded-xl"
                >
                  Start BloomScrolling
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-purple-400/30 text-purple-200 hover:bg-purple-500/10 
                    px-8 py-6 text-lg rounded-xl"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-96 h-96 flex items-center justify-center">
              <motion.div 
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-full h-full bg-gradient-to-r from-purple-500/30 
                  to-pink-500/30 blur-3xl rounded-full"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <BloomingFlower />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}