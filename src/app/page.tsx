'use client'

import { Hero } from "@/app/components/Hero"
import { CTA } from "./components/cta"
import { GlowingCursor } from "./components/GlowingCursor"
import { motion, useScroll } from 'framer-motion'
import { ParticleBackground } from './components/ParticleBackground'

const ScrollProgress = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left z-50"
      style={{ scaleX: useScroll().scrollYProgress }}
    />
  )
}

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <GlowingCursor />
      <ScrollProgress />
      <main>
        <Hero />
        <CTA />
      </main>
    </>
  )
}