'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function GlowingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
      setIsVisible(true)
      
      setTrail(prevTrail => {
        const newTrail = [
          { x: ev.clientX, y: ev.clientY, opacity: 1 },
          ...prevTrail.slice(0, 5).map(point => ({
            ...point,
            opacity: point.opacity * 0.7
          }))
        ]
        return newTrail
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setTrail([])
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
      animate={{
        opacity: isVisible ? 1 : 0
      }}
    >
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
          initial={{ scale: 1 }}
          animate={{
            x: point.x - 12,
            y: point.y - 12,
            scale: 1 - (index * 0.15),
          }}
          style={{
            opacity: point.opacity * 0.3,
            filter: 'blur(4px)',
          }}
        />
      ))}

      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          scale: {
            duration: 1.5,
            repeat: Infinity,
          }
        }}
        style={{
          filter: 'blur(4px)',
          opacity: 0.6,
          mixBlendMode: 'screen'
        }}
      />

      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      />
    </motion.div>
  )
} 