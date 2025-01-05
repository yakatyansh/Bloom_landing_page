"use client"

import { motion, MotionValue, useTransform } from "framer-motion"
import { useMemo } from "react"

interface ScrollControlledRoseProps {
  scrollProgress: MotionValue<number>
  totalFrames?: number
}

export function ScrollControlledRose({ 
  scrollProgress, 
  totalFrames = 50 
}: ScrollControlledRoseProps) {
  const frames = useMemo(() => 
    Array.from({ length: totalFrames }, (_, i) => i + 1), 
    [totalFrames]
  )

  // Single transform for frame calculation
  const currentFrame = useTransform(
    scrollProgress,
    [0.2, 0.7],
    [1, totalFrames]
  )

  // Create all frame opacity transforms up front
  const frameOpacities = useMemo(() => 
    frames.map(frameNumber => 
      useTransform(
        currentFrame,
        [frameNumber - 1, frameNumber, frameNumber + 1],
        [0, 1, 0]
      )
    ),
    [frames, currentFrame]
  )

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {frames.map((frameNumber, index) => {
        const imagePath = `/assets/frames/frame-${frameNumber.toString().padStart(3, '0')}.png`
        
        return (
          <motion.img
            key={frameNumber}
            src={imagePath}
            alt={`Rose frame ${frameNumber}`}
            className="absolute w-full h-full object-contain pointer-events-none select-none"
            style={{
              opacity: frameOpacities[index],
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            draggable="false"
          />
        )
      })}
    </div>
  )
} 