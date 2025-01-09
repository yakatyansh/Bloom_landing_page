'use client'
import { motion } from 'framer-motion'
import { MotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Howl } from 'howler'

interface FloatingImageProps {
  scrollProgress: MotionValue<number>
}

export function FloatingImage({ scrollProgress }: FloatingImageProps) {
  const [isChillGuy, setIsChillGuy] = useState(false)
  const [audio, setAudio] = useState<Howl | null>(null)

  useEffect(() => {
    const newAudio = new Howl({
      src: ["/assets/music.mp3"],
      html5: true
    })
    setAudio(newAudio)
    console.log("Audio object created:", newAudio)
    return () => {
      newAudio.unload()
    }
  }, [])

  useEffect(() => {
    const unsubscribe = scrollProgress.onChange(latest => {
      setIsChillGuy(latest > 0.15)
    })
    return () => unsubscribe()
  }, [scrollProgress])

  const handleMouseEnter = () => {
    if (audio) {
      console.log('play')
      audio.play()
    }
  }

  const handleMouseLeave = () => {
    if (audio) {
      console.log('pause')
      audio.pause()
    }
  }

  return (
    <motion.div
      className="absolute right-[20%] top-1/2 transform -translate-y-1/2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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