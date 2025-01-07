"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const TOTAL_FRAMES = 50

export function BloomingFlower() {
  const [currentFrame, setCurrentFrame] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => prev === TOTAL_FRAMES ? 1 : prev + 1)
    }, 40) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      <Image
        src={`/assets/frames/frame-${currentFrame.toString().padStart(3, '0')}.png`}
        alt="Blooming flower animation frame"
        fill
        className="object-contain"
        priority={currentFrame <= 10}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
} 