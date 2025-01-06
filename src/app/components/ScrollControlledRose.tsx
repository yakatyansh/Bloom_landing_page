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
  // Create frame numbers array
  const frames = useMemo(() => 
    Array.from({ length: totalFrames }, (_, i) => i + 1),
    [totalFrames]
  )

  // Create a single transform for the current frame number
  const currentFrameNumber = useTransform(
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
                currentFrameNumber,
                [frameNumber - 0.5, frameNumber, frameNumber + 0.5],
                [0, 1, 0]
              ),
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            draggable="false"
            loading="eager"
          />
        )
      })}
    </div>
  )
} 