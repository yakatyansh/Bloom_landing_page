"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CTA } from '../components/cta'
import { 
  Shield,
  Orbit,
  Flower2,
  Gauge,
  Lightbulb,
  Fingerprint,
  Puzzle,
  Zap
} from "lucide-react"
import { ParticleBackground } from '../components/ParticleBackground'

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

const features = [
  {
    icon: <Orbit className="w-8 h-8" />,
    title: "Social Orbits",
    description: "Create and join dynamic spaces where like-minded individuals connect and share experiences."
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "BloomSphere",
    description: "Visualize your digital wellbeing journey through an interactive, growing ecosystem."
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Mindful Metrics",
    description: "Track and understand your online engagement patterns with intuitive analytics."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Inspiration Feed",
    description: "Curated content that sparks creativity and promotes personal growth."
  },
  {
    icon: <Fingerprint className="w-8 h-8" />,
    title: "Digital Identity",
    description: "Express your authentic self through customizable profiles and achievements."
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "Community Challenges",
    description: "Engage in collaborative activities that foster connection and personal development."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy First",
    description: "Advanced privacy controls that put you in charge of your digital presence."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Engagement",
    description: "Meaningful interactions that happen in the moment, fostering genuine connections."
  }
]

const ScrollProgress = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left z-50"
      style={{ scaleX: useScroll().scrollYProgress }}
    />
  )
}

export default function FeaturesPage() {
  const { x, y } = useMousePosition()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <>
      <ParticleBackground />
      <ScrollProgress />
      <motion.main 
        className="bg-[#0a0118]"
        ref={containerRef}
      >
        <motion.section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']), 
              opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) 
            }}
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

          <div 
            className="relative z-10 max-w-4xl mx-auto text-center px-4"
            style={{
              transform: `translate(${x ? (x - window.innerWidth / 2) * 0.01 : 0}px, ${y ? (y - window.innerHeight / 2) * 0.01 : 0}px)`
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 70,
                damping: 20
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Features of{" "}
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
                BloomScroll
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-purple-200/80 mb-8"
            >
              Discover how our innovative features enhance your digital wellbeing
              and foster meaningful connections.
            </motion.p>
          </div>
        </motion.section>

        <motion.section 
          className="relative py-32 px-4 border-t border-purple-500/10"
        >
          <motion.div 
            className="container mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(236, 72, 153, 0.03)"
                  }}
                  className="p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 
                    transition-colors duration-300 group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                      p-2 flex items-center justify-center mb-4 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-500 
                    transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="relative py-32 border-t border-purple-500/10"
        >
          <CTA />
        </motion.section>
      </motion.main>
    </>
  )
}