"use client"

import { motion } from "framer-motion"

interface BloomingFlowerProps {
  className?: string;
}

export function BloomingFlower({ className }: BloomingFlowerProps) {
  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
      initial={{ rotate: -10 }}
      animate={{ 
        rotate: 10,
        scale: [1, 1.02, 1]
      }}
      transition={{
        rotate: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
    >
      {/* Background glow */}
      <motion.circle 
        cx="200" 
        cy="200" 
        r="120" 
        fill="url(#glowGradient)" 
        animate={{
          r: [120, 130, 120],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Back petals layer */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
        <motion.g 
          key={`back-${index}`}
          animate={{ rotate: [rotation, rotation + 5, rotation] }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ originX: "200px", originY: "200px" }}
        >
          <motion.path
            d="M200 200 
               C 220 160, 220 120, 200 80 
               C 180 120, 180 160, 200 200"
            fill="url(#gradientPetalBack)"
            animate={{
              d: [
                "M200 200 C 220 160, 220 120, 200 80 C 180 120, 180 160, 200 200",
                "M200 200 C 225 165, 225 125, 200 75 C 175 125, 175 165, 200 200",
                "M200 200 C 220 160, 220 120, 200 80 C 180 120, 180 160, 200 200"
              ],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.g>
      ))}

      {/* Main petals layer with enhanced animation */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
        <motion.g 
          key={`main-${index}`}
          animate={{ rotate: [rotation, rotation - 5, rotation] }}
          transition={{
            duration: 4,
            delay: index * 0.15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ originX: "200px", originY: "200px" }}
        >
          <motion.path
            d="M200 190 
               C 230 150, 230 110, 200 70 
               C 170 110, 170 150, 200 190"
            fill="url(#gradientPetalMain)"
            animate={{
              d: [
                "M200 190 C 230 150, 230 110, 200 70 C 170 110, 170 150, 200 190",
                "M200 190 C 235 155, 235 115, 200 65 C 165 115, 165 155, 200 190",
                "M200 190 C 230 150, 230 110, 200 70 C 170 110, 170 150, 200 190"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.g>
      ))}

      {/* Inner petals with subtle movement */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
        <motion.g 
          key={`inner-${index}`}
          animate={{ rotate: [rotation, rotation + 3, rotation] }}
          transition={{
            duration: 5,
            delay: index * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ originX: "200px", originY: "200px" }}
        >
          <motion.path
            d="M200 180 
               C 220 160, 220 140, 200 120 
               C 180 140, 180 160, 200 180"
            fill="url(#gradientPetalInner)"
            animate={{
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.g>
      ))}

      {/* Animated center */}
      <motion.circle 
        cx="200" 
        cy="200" 
        r="35" 
        fill="url(#gradientCenter)"
        animate={{
          r: [33, 37, 33],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Enhanced sparkles */}
      {[0, 72, 144, 216, 288].map((rotation, index) => (
        <motion.circle
          key={`sparkle-${index}`}
          cx="200"
          cy="130"
          r="2"
          fill="#fff"
          transform={`rotate(${rotation} 200 200)`}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            r: [1.5, 2.5, 1.5]
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Enhanced gradients */}
      <defs>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4">
            <animate
              attributeName="stop-opacity"
              values="0.4;0.6;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="gradientCenter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F472B6">
            <animate
              attributeName="stop-color"
              values="#F472B6;#EC4899;#F472B6"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#C084FC">
            <animate
              attributeName="stop-color"
              values="#C084FC;#A855F7;#C084FC"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        <linearGradient id="gradientPetalMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        <linearGradient id="gradientPetalBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>

        <linearGradient id="gradientPetalInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
} 

