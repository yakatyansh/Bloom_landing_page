"use client"

/* eslint-disable react-hooks/rules-of-hooks */
import { motion, MotionValue, useTransform } from "framer-motion"
import { useMemo } from "react"

interface ScrollControlledRoseProps {
  scrollProgress: MotionValue<number>
  totalFrames?: number
}

function useFrameTransitions(currentFrame: MotionValue<number>, totalFrames: number) {
  return useMemo(() => {
    const transitions = []
    for (let i = 1; i <= totalFrames; i++) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      transitions.push(
        useTransform(
          currentFrame,
          [i - 1, i, i + 1],
          [0, 1, 0]
        )
      )
    }
    return transitions
  }, [currentFrame, totalFrames])
}

export function ScrollControlledRose({ 
  scrollProgress, 
  totalFrames = 50 
}: ScrollControlledRoseProps) {
  // Create the main frame progress transform
  const currentFrame = useTransform(
    scrollProgress,
    [0.2, 0.7],
    [1, totalFrames]
  )

  // Get opacity transitions for each frame
  const frameOpacities = useFrameTransitions(currentFrame, totalFrames)

  // Create frame numbers array
  const frames = useMemo(() => 
    Array.from({ length: totalFrames }, (_, i) => i + 1),
    [totalFrames]
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
            loading="eager"
          />
        )
      })}
    </div>
  )
} 