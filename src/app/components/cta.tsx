"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"
import { ScrollControlledRose } from "./ScrollControlledRose"

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transform values for initial title timing
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const titleY = useTransform(scrollYProgress, [0, 0.2], [20, 0])
  
  // Transform values for rose timing
  const roseOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
  
  // Transform values for CTA content timing
  const contentOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.8, 0.9], [20, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#0a0118] min-h-[150vh] py-24"
    >
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Initial Title */}
        <motion.div 
          className="text-center mb-12"
          style={{
            opacity: titleOpacity,
            y: titleY
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the{" "}
            <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-purple-200/80">
            Watch as your journey unfolds
          </p>
        </motion.div>

        {/* Rose Animation */}
        <motion.div 
          className="w-[500px] h-[500px] mb-8"
          style={{
            opacity: roseOpacity
          }}
        >
          <ScrollControlledRose scrollProgress={scrollYProgress} />
        </motion.div>

        {/* CTA Content - appears after rose blooms */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{
            opacity: contentOpacity,
            y: contentY
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
              Social Media Experience?
            </span>
          </h2>
          
          <p className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered a more mindful way to engage with social media.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] hover:to-[#9333EA] text-white px-8 py-6 text-lg rounded-xl"
            >
              Get Started Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-400/30 text-purple-200 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}