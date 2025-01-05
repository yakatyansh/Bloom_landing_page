"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { BloomingFlower } from "./BloomingFlower"
import { Feat } from "./Feat"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const textX = useTransform(scrollYProgress, [0.1, 0.3], [-100, 0])
  const flowerX = useTransform(scrollYProgress, [0.1, 0.3], [0, 50])
  const flowerY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const flowerScale = useTransform(scrollYProgress, [0.1, 0.3], [1.2, 1])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <>
      <div ref={containerRef} className="relative bg-[#0a0118] h-[150vh]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
          <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
              opacity: [0.1, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </motion.div>

        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col items-center">
              <motion.div 
                className="w-full max-w-md"
                style={{ 
                  x: flowerX,
                  y: flowerY,
                  scale: flowerScale
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <BloomingFlower scrollProgress={scrollYProgress} />
              </motion.div>

              <motion.div 
                style={{ opacity: textOpacity, x: textX }}
                className="w-full text-center lg:text-left mt-8"
                initial={{ opacity: 0 }}
              >
                <motion.div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-200 
                    border border-purple-500/20 text-sm">
                    Welcome to BloomScroll
                  </span>
                </motion.div>

                <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                    bg-clip-text text-transparent">
                    Social Experience
                  </span>
                </motion.h1>

                <motion.p className="text-xl text-purple-200/80 mb-6 max-w-2xl">
                  Experience a more mindful way to engage with social media through our 
                  innovative features and thoughtful design.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                      hover:from-[#D946EF] hover:to-[#9333EA] text-white px-8 py-6"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-purple-400/30 text-purple-200 
                      hover:bg-purple-500/10 px-8 py-6"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                  style={{ opacity: scrollIndicatorOpacity }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.p 
                    className="text-purple-200/80 text-sm font-medium tracking-wider"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    SCROLL DOWN
                  </motion.p>
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                  >
                    <path
                      d="M12 4L12 20M12 20L18 14M12 20L6 14"
                      stroke="rgb(233 213 255 / 0.8)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <Feat />
    </>
  )
}