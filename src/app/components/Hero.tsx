"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
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

  // Flower transforms - appear and scale up as we scroll
  const flowerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const flowerScale = useTransform(scrollYProgress, [0, 0.15], [0.8, 1])
  const flowerY = useTransform(scrollYProgress, [0.15, 0.3], [0, -50])

  // Text transforms - start tilted, end straight when flower blooms
  const textRotateX = useTransform(scrollYProgress, [0, 0.15], [-10, 0])
  const textRotateY = useTransform(scrollYProgress, [0, 0.15], [10, 0])
  const textY = useTransform(scrollYProgress, [0.15, 0.3], [0, 20])
  
  // Container transforms - removed unused variables
  const perspective = useTransform(scrollYProgress, [0, 1], [1000, 1500])

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <>
      <div ref={containerRef} className="relative bg-[#0a0118] h-[150vh] perspective-1000">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            perspective
          }}
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
            <motion.div 
              className="relative flex flex-col items-center"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Flower component - starts invisible */}
              <motion.div 
                className="w-full max-w-md"
                style={{ 
                  opacity: flowerOpacity,
                  scale: flowerScale,
                  y: flowerY,
                  transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0 }}
              >
                <BloomingFlower scrollProgress={scrollYProgress} />
              </motion.div>

              {/* Text content - starts tilted, straightens with flower bloom */}
              <motion.div 
                style={{ 
                  y: textY,
                  transformStyle: "preserve-3d",
                  rotateX: textRotateX,
                  rotateY: textRotateY,
                }}
                className="w-full text-center lg:text-left mt-8"
                initial={{ 
                  rotateX: -10,
                  rotateY: 10,
                  opacity: 1 
                }}
              >
                <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight relative">
                  <span className="relative inline-block" style={{ marginLeft: "0.5rem" }}>
                    <motion.span
                      style={{
                        display: "inline-block",
                        position: "absolute",
                        right: "100%",
                        opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
                        x: useTransform(scrollYProgress, [0.15, 0.2], [0, 12])
                      }}
                    >
                      B
                    </motion.span>
                    <motion.span
                      style={{
                        display: "inline-block",
                        opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
                      }}
                    >
                      D
                    </motion.span>
                    <motion.span
                      style={{
                        display: "inline-block",
                        position: "absolute",
                        left: 0,
                        opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
                        x: useTransform(scrollYProgress, [0.15, 0.2], [0, 12])
                      }}
                    >
                        L
                    </motion.span>
                  </span>
                  <span style={{ marginLeft: "0.15rem" }}>OOM</span>
                  {" "}
                  <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                    bg-clip-text text-transparent font-extrabold">
                    Scroll
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

              {/* Scroll indicator */}
              <AnimatePresence>
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                  style={{ 
                    opacity: scrollIndicatorOpacity,
                    transformStyle: "preserve-3d",
                  }}
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
                    SCROLL TO FIX TEXT
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
            </motion.div>
          </div>
        </div>
      </div>
      
      <Feat />
    </>
  )
}