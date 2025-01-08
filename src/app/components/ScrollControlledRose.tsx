"use client"

import { motion, MotionValue, useTransform } from "framer-motion"

interface ScrollControlledRoseProps {
  scrollProgress: MotionValue<number>
}

// Add these new animations and effects
const petalHoverAnimation = {
  scale: 1.05,
  filter: "drop-shadow(0px 0px 4px rgba(236, 72, 153, 0.5))",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20
  }
}

export function ScrollControlledRose({ scrollProgress }: ScrollControlledRoseProps) {

  const corePetalOpacities = [
    useTransform(scrollProgress, [0.1, 0.13], [0, 1]),
    useTransform(scrollProgress, [0.13, 0.16], [0, 1]),
    useTransform(scrollProgress, [0.16, 0.19], [0, 1]),
    useTransform(scrollProgress, [0.19, 0.22], [0, 1]),
    useTransform(scrollProgress, [0.22, 0.25], [0, 1]),
    useTransform(scrollProgress, [0.25, 0.28], [0, 1]),
    useTransform(scrollProgress, [0.28, 0.31], [0, 1]),
    useTransform(scrollProgress, [0.31, 0.34], [0, 1]),
  ]

  const innerPetalOpacities = [
    useTransform(scrollProgress, [0.34, 0.37], [0, 1]),
    useTransform(scrollProgress, [0.37, 0.40], [0, 1]),
    useTransform(scrollProgress, [0.40, 0.43], [0, 1]),
    useTransform(scrollProgress, [0.43, 0.46], [0, 1]),
    useTransform(scrollProgress, [0.46, 0.49], [0, 1]),
    useTransform(scrollProgress, [0.49, 0.52], [0, 1]),
    useTransform(scrollProgress, [0.52, 0.55], [0, 1]),
    useTransform(scrollProgress, [0.55, 0.58], [0, 1]),
  ]

  // Middle petals opacity
  const middlePetalOpacities = [
    useTransform(scrollProgress, [0.58, 0.61], [0, 1]),
    useTransform(scrollProgress, [0.61, 0.64], [0, 1]),
    useTransform(scrollProgress, [0.64, 0.67], [0, 1]),
    useTransform(scrollProgress, [0.67, 0.70], [0, 1]),
    useTransform(scrollProgress, [0.70, 0.73], [0, 1]),
    useTransform(scrollProgress, [0.73, 0.76], [0, 1]),
    useTransform(scrollProgress, [0.76, 0.79], [0, 1]),
    useTransform(scrollProgress, [0.79, 0.82], [0, 1]),
  ]

  // Outer petals opacity
  const outerPetalOpacities = [
    useTransform(scrollProgress, [0.82, 0.85], [0, 1]),
    useTransform(scrollProgress, [0.85, 0.88], [0, 1]),
    useTransform(scrollProgress, [0.88, 0.91], [0, 1]),
    useTransform(scrollProgress, [0.91, 0.94], [0, 1]),
    useTransform(scrollProgress, [0.94, 0.97], [0, 1]),
    useTransform(scrollProgress, [0.97, 1.0], [0, 1]),
    useTransform(scrollProgress, [0.97, 1.0], [0, 1]),
    useTransform(scrollProgress, [0.97, 1.0], [0, 1]),
  ]


  const stamenOpacity = useTransform(scrollProgress, [0.25, 0.28], [0, 1])

  const rotationProgress = useTransform(scrollProgress, [0, 1], [0, 15])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg 
        viewBox="0 0 200 200" 
        className="w-full h-full"
        style={{ 
          maxWidth: '400px', 
          maxHeight: '400px',
          filter: "drop-shadow(0px 0px 10px rgba(236, 72, 153, 0.2))",
          rotate: rotationProgress
        }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
          <motion.path
            key={`core-${rotation}`}
            d="M100,100 C100,85 95,70 100,65 C105,70 100,85 100,100 C100,115 105,130 100,135 C95,130 100,115 100,100"
            fill="url(#coreGradient)"
            fillOpacity={0.95}
            transform={`rotate(${rotation}, 100, 100)`}
            style={{ opacity: corePetalOpacities[index] }}
            whileHover={petalHoverAnimation}
          />
        ))}

        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rotation, index) => (
          <motion.path
            key={`inner-${rotation}`}
            d="M100,100 C100,80 90,60 100,50 C110,60 100,80 100,100 C100,120 110,140 100,150 C90,140 100,120 100,100"
            fill="url(#innerGradient)"
            fillOpacity={0.9}
            transform={`rotate(${rotation}, 100, 100)`}
            style={{ opacity: innerPetalOpacities[index] }}
            whileHover={petalHoverAnimation}
          />
        ))}

        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
          <motion.path
            key={`middle-${rotation}`}
            d="M100,100 C100,75 85,45 100,35 C115,45 100,75 100,100 C100,125 115,155 100,165 C85,155 100,125 100,100"
            fill="url(#middleGradient)"
            fillOpacity={0.85}
            transform={`rotate(${rotation}, 100, 100)`}
            style={{ opacity: middlePetalOpacities[index] }}
            whileHover={petalHoverAnimation}
          />
        ))}

        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rotation, index) => (
          <motion.path
            key={`outer-${rotation}`}
            d="M100,100 C100,70 80,35 100,25 C120,35 100,70 100,100 C100,130 120,165 100,175 C80,165 100,130 100,100"
            fill="url(#outerGradient)"
            fillOpacity={0.8}
            transform={`rotate(${rotation}, 100, 100)`}
            style={{ opacity: outerPetalOpacities[index] }}
            whileHover={petalHoverAnimation}
          />
        ))}

        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF3B9A" />
            <stop offset="100%" stopColor="#EC4899" />
          </radialGradient>
          
          <radialGradient id="innerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#E879F9" />
          </radialGradient>
          
          <radialGradient id="middleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#C026D3" />
          </radialGradient>
          
          <radialGradient id="outerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#9333EA" />
          </radialGradient>
        </defs>

        <motion.g 
          style={{ opacity: stamenOpacity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.circle 
            cx="100" 
            cy="100" 
            r="6" 
            fill="#A855F7"
            style={{
              filter: "drop-shadow(0px 0px 3px rgba(168, 85, 247, 0.5))"
            }}
          />
          
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((rotation) => (
            <motion.path
              key={`stamen-${rotation}`}
              d="M100,100 L105,92 A1.5,1.5 0 1,1 105,92"
              stroke="#A855F7"
              strokeWidth="1.5"
              fill="#D946EF"
              transform={`rotate(${rotation}, 100, 100)`}
              whileHover={{
                scale: 1.2,
                filter: "drop-shadow(0px 0px 2px rgba(217, 70, 239, 0.5))"
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  )
} 