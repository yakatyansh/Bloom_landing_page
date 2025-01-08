'use client'
import { motion, useTransform } from 'framer-motion'
import { MotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingImageProps {
  scrollProgress: MotionValue<number>
}

export function FloatingImage({ scrollProgress }: FloatingImageProps) {
  const [isChillGuy, setIsChillGuy] = useState(false)
  
  // Smoother position transforms with updated ranges
  const x = useTransform(scrollProgress, [0, 0.15], [0, -200])
  const y = useTransform(scrollProgress, [0, 0.15], [0, -100])

  useEffect(() => {
    const unsubscribe = scrollProgress.onChange(latest => {
      setIsChillGuy(latest > 0.15)
    })
    return () => unsubscribe()
  }, [scrollProgress])

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y
      }}
      animate={{
        x: ['-8vw', '8vw', '-8vw'],  // Reduced range for smoother movement
        y: ['8vh', '24vh', '8vh'],   // Reduced range for smoother movement
        rotate: [-3, 3, -3]          // Reduced rotation for subtler effect
      }}
      transition={{
        x: {
          duration: 25,              // Increased duration
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        y: {
          duration: 20,              // Increased duration
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 15,              // Increased duration
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      initial={{
        x: '60vw',
        y: '20vh'
      }}
    >
      <motion.div
        animate={{
          y: [-15, 15, -15],        // Reduced range for smoother movement
          scale: isChillGuy ? 1 : [0.95, 1.05, 0.95], // Subtler scale animation
          rotate: isChillGuy ? 0 : [-1.5, 1.5, -1.5]  // Reduced rotation
        }}
        transition={{
          y: {
            duration: 6,            // Increased duration
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          scale: {
            duration: 2.5,          // Increased duration
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          rotate: {
            duration: 3,            // Increased duration
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <motion.img
          key={isChillGuy ? 'chill' : 'not-chill'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8,          // Increased duration for smoother state change
            ease: "easeInOut"       // Added easing
          }}
          src={isChillGuy ? '/assets/chill-guy.png' : '/assets/not-chill-guy.png'}
          alt={isChillGuy ? "Chill character" : "Not chill character"}
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
        />
      </motion.div>
    </motion.div>
  )
}