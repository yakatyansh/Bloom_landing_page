'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Sparkles, 
  Users, 
  Globe2, 
  Heart, 
  Target, 
  Shield, 
  Coffee 
} from "lucide-react"
import { Button } from "../components/ui/button"

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

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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

  return (
    <main className="bg-[#0a0118]" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
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

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
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
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="relative py-32 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <Users />, number: "1M+", label: "Active Users" },
              { icon: <Heart />, number: "50M+", label: "Mindful Moments" },
              { icon: <Globe2 />, number: "190+", label: "Countries" },
              { icon: <Sparkles />, number: "4.9/5", label: "User Rating" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                      p-2.5 flex items-center justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-purple-200/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section with Hover Effects */}
      <section className="relative py-32 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
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
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.1)"
                }}
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="relative py-32 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
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
            {Synergies.map((synergy, index) => (
              <motion.div 
                key={synergy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative mb-4 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent opacity-60" />
                  <img
                    src={synergy.image}
                    alt={synergy.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-purple-100 mb-2">{synergy.name}</h3>
                <p className="text-purple-200/60 leading-relaxed">{synergy.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 border-t border-purple-500/10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              Join Our Journey
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xl text-purple-200/80 mb-8"
            >
              Be part of the movement to transform social media into a more mindful space.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] 
                  hover:to-[#9333EA] text-white transform transition-all duration-300
                  hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Join BloomScroll
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-400/30 text-purple-200 hover:bg-purple-500/10
                  transform transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

