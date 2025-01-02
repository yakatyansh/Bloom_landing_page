"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "../../lib/utils"

const TOTAL_FRAMES = 50
const FRAME_RATE = 40 // 25fps

export function BloomingFlower() {
  const [currentFrame, setCurrentFrame] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => prev === TOTAL_FRAMES ? 1 : prev + 1)
    }, FRAME_RATE)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      <Image
        src={`/assets/frames/frame-${currentFrame.toString().padStart(3, '0')}.png`}
        alt="Blooming flower animation"
        fill
        className={cn(
          "object-contain transition-opacity duration-200",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        priority={currentFrame <= 10}
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 56vw, 35vw"
      />
    </div>
  )
} 