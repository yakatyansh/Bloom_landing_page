"use client"

import { motion, MotionValue, useTransform } from "framer-motion"
import { useMemo, useState } from "react"

interface ScrollControlledRoseProps {
  scrollProgress: MotionValue<number>
  totalFrames?: number
}

export function ScrollControlledRose({ 
  scrollProgress, 
  totalFrames = 50 
}: ScrollControlledRoseProps) {
  const [loadedFrames, setLoadedFrames] = useState<number[]>([])
  
  const frames = useMemo(() => 
    Array.from({ length: totalFrames }, (_, i) => i + 1), 
    [totalFrames]
  )

  const currentFrame = useTransform(
    scrollProgress,
    [0.2, 0.7],
    [1, totalFrames]
  )

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {frames.map((frameNumber) => {
        const imagePath = `/assets/frames/frame-${frameNumber.toString().padStart(3, '0')}.png`
        
        return (
          <motion.img
            key={frameNumber}
            src={imagePath}
            alt={`Rose frame ${frameNumber}`}
            className="absolute w-full h-full object-contain pointer-events-none select-none"
            style={{
              opacity: useTransform(
                currentFrame,
                [frameNumber - 1, frameNumber, frameNumber + 1],
                [0, 1, 0]
              ),
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            onLoad={() => {
              setLoadedFrames(prev => [...prev, frameNumber])
            }}
            draggable="false"
          />
        )
      })}
    </div>
  )
} 