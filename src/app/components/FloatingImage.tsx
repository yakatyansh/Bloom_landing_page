'use client'
import { motion } from 'framer-motion'
import { MotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingImageProps {
  scrollProgress: MotionValue<number>
}

export function FloatingImage({ scrollProgress }: FloatingImageProps) {
  const [isChillGuy, setIsChillGuy] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollProgress.onChange(latest => {
      setIsChillGuy(latest > 0.15)
    })
    return () => unsubscribe()
  }, [scrollProgress])

  return (
    <motion.div
      className="absolute right-[20%] top-1/2 transform -translate-y-1/2"
    >
      <motion.img
        key={isChillGuy ? 'chill' : 'not-chill'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.8,          
          ease: "easeInOut"       
        }}
        src={isChillGuy ? '/assets/chill-guy.png' : '/assets/not-chill-guy.png'}
        alt={isChillGuy ? "Chill character" : "Not chill character"}
        className="w-48 h-48 md:w-64 md:h-64 object-contain"
      />
    </motion.div>
  )
}