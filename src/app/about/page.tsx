'use client'

import { motion, useScroll, useTransform, MotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Sparkles, 
  Users, 
  Globe2, 
  Heart, 
  Target, 
  Shield, 
  Coffee 
} from "lucide-react"
import { CTA } from '../components/cta'
import { ParticleBackground } from '../components/ParticleBackground'
import { GlowingCursor } from '../components/GlowingCursor'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

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

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toLocaleString('en-US')
      },
      ease: 'easeOut'
    })

    return () => controls.stop()
  }, [from, to, duration])

  return <span ref={nodeRef} />
}

function MagneticCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (e.clientX - centerX) * 0.1
    const distanceY = (e.clientY - centerY) * 0.1
    setPosition({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}

const Synergies = [
  {
    name: "Relational Empowerment",
    image: "/assets/relation.jpg",
    bio: "Features like Orbits and Ripple Effects emphasize human connection, forming a relational foundation essential for a liquid democracy."
  },
  {
    name: "Transparency and Collective Impact",
    image: "/assets/bloomsphere.jpg",
    bio: "The Bloomsphere visualizes collective outcomes, akin to tracking how policies and decisions ripple through a liquid democracy system."
  },
  {
    name: "Incentive Alignment",
    image: "/assets/incentive.jpg",
    bio: "Bloomscore motivates positive contributions, mirroring how liquid democracy rewards participation and thoughtful delegation."
  },
  {
    name: "Decentralized Communities",
    image: "/assets/decentralised.jpg",
    bio: "Orbits act as dynamic hubs where users collaborate, debate, and co-create solutions, similar to local nodes in a liquid democracy framework."
  }
]

const values = [
  {
    icon: <Heart className="w-6 h-6 text-[#EC4899]" />,
    title: "Mindful Engagement",
    description: "We believe in quality over quantity, fostering meaningful digital interactions."
  },
  {
    icon: <Target className="w-6 h-6 text-[#EC4899]" />,
    title: "Purposeful Innovation",
    description: "Every feature we build serves a clear purpose in enhancing digital wellbeing."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#EC4899]" />,
    title: "User Privacy",
    description: "We prioritize user privacy and data protection in everything we do."
  },
  {
    icon: <Coffee className="w-6 h-6 text-[#EC4899]" />,
    title: "Community First",
    description: "Our community's growth and wellbeing drive our decisions."
  }
]

const subtleFloat = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const ScrollProgress = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left z-50"
      style={{ scaleX: useScroll().scrollYProgress }}
    />
  )
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -45])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const perspective = useTransform(scrollYProgress, [0, 1], [1000, 2000])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const { x, y } = useMousePosition()

  const synergiesTransforms = Synergies.map((_, index) => ({
    yOffset: useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? 50 : -50)]),
    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.6])
  }))

  return (
    <>
      <ParticleBackground />
      <GlowingCursor />
      <ScrollProgress />
      <motion.main 
        className="bg-[#0a0118] perspective-1000"
        ref={containerRef}
        style={{
          perspective
        }}
      >
        <motion.section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']), opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
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

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4"
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
              About{" "}
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
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-xl md:text-2xl text-purple-200/80 mb-8"
            >
              We are on a mission to transform social media into a force for personal growth 
              and meaningful connections.
            </motion.p>
          </div>
        </motion.section>

        <motion.section 
          className="relative py-32 border-t border-purple-500/10"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)"
          }}
        >
          <motion.div 
            className="container mx-auto px-4"
            style={{
              rotateX: useParallax(scrollYProgress, 15),
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { icon: <Users />, number: 1000000, label: "Active Users", suffix: "+" },
                { icon: <Heart />, number: 50000000, label: "Mindful Moments", suffix: "+" },
                { icon: <Globe2 />, number: 190, label: "Countries", suffix: "+" },
                { icon: <Sparkles />, number: 4.9, label: "User Rating", suffix: "/5" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(236, 72, 153, 0.05)",
                  }}
                  className="text-center p-6 rounded-xl cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      variants={subtleFloat}
                      initial="initial"
                      animate="animate"
                      className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                        p-2.5 flex items-center justify-center"
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <motion.div className="text-3xl font-bold text-white mb-2">
                    <Counter from={0} to={stat.number} />
                    {stat.suffix}
                  </motion.div>
                  <div className="text-purple-200/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="relative py-32 border-t border-purple-500/10"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)"
          }}
        >
          <motion.div 
            className="container mx-auto px-4"
            initial={{ rotateY: -10 }}
            whileInView={{ rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <motion.h2 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center text-white"
            >
              Our Values
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <MagneticCard key={value.title}>
                  <motion.div 
                    variants={fadeInUp}
                    className="p-8 rounded-2xl bg-purple-500/5 border border-purple-500/10 
                      hover:border-purple-500/30 transition-all duration-300"
                  >
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-purple-100 mb-2">{value.title}</h3>
                    <p className="text-purple-200/60">{value.description}</p>
                  </motion.div>
                </MagneticCard>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="relative py-32 border-t border-purple-500/10"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)"
          }}
        >
          <motion.div 
            className="container mx-auto px-4"
            style={{
              rotateX: useParallax(scrollYProgress, -10),
              transformStyle: "preserve-3d"
            }}
          >
            <motion.h2 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center text-white"
            >
              Core Synergies
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Synergies.map((synergy, i) => (
                <motion.div 
                  key={synergy.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative perspective-1000"
                >
                  <motion.div 
                    className="relative mb-4 rounded-xl overflow-hidden"
                    style={{
                      y: synergiesTransforms[i].yOffset
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent"
                      style={{
                        opacity: synergiesTransforms[i].opacity
                      }}
                    />
                    <img
                      src={synergy.image}
                      alt={synergy.name}
                      className="w-full aspect-square object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-purple-100 mb-2">{synergy.name}</h3>
                  <p className="text-purple-200/60 leading-relaxed">{synergy.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="relative py-32 border-t border-purple-500/10"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)"
          }}
        >
          <CTA />
        </motion.section>
      </motion.main>
    </>
  )
}

