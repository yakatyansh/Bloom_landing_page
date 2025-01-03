interface BloomingFlowerProps {
  className?: string;
}

export function BloomingFlower({ className }: BloomingFlowerProps) {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {/* Background glow */}
      <circle 
        cx="200" 
        cy="200" 
        r="120" 
        fill="url(#glowGradient)" 
        className="animate-pulse-slow"
        opacity="0.3" 
      />

      {/* Back petals layer */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
        <g key={`back-${index}`} className="animate-spin-slower origin-center">
          <path
            d="M200 200 
               C 220 160, 220 120, 200 80 
               C 180 120, 180 160, 200 200"
            fill="url(#gradientPetalBack)"
            transform={`rotate(${rotation} 200 200)`}
            opacity="0.7"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M200 200 C 220 160, 220 120, 200 80 C 180 120, 180 160, 200 200;
                M200 200 C 225 165, 225 125, 200 75 C 175 125, 175 165, 200 200;
                M200 200 C 220 160, 220 120, 200 80 C 180 120, 180 160, 200 200
              "
            />
          </path>
        </g>
      ))}

      {/* Main petals layer */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
        <g key={`main-${index}`} className="animate-spin-slow origin-center">
          <path
            d="M200 190 
               C 230 150, 230 110, 200 70 
               C 170 110, 170 150, 200 190"
            fill="url(#gradientPetalMain)"
            transform={`rotate(${rotation} 200 200)`}
          >
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
                M200 190 C 230 150, 230 110, 200 70 C 170 110, 170 150, 200 190;
                M200 190 C 235 155, 235 115, 200 65 C 165 115, 165 155, 200 190;
                M200 190 C 230 150, 230 110, 200 70 C 170 110, 170 150, 200 190
              "
            />
          </path>
        </g>
      ))}

      {/* Inner petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
        <g key={`inner-${index}`}>
          <path
            d="M200 180 
               C 220 160, 220 140, 200 120 
               C 180 140, 180 160, 200 180"
            fill="url(#gradientPetalInner)"
            transform={`rotate(${rotation} 200 200)`}
            opacity="0.9"
          />
        </g>
      ))}

      {/* Center of the flower */}
      <circle 
        cx="200" 
        cy="200" 
        r="35" 
        fill="url(#gradientCenter)"
        className="animate-pulse"
      >
        <animate
          attributeName="r"
          values="33;37;33"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Sparkles */}
      {[0, 72, 144, 216, 288].map((rotation, index) => (
        <circle
          key={`sparkle-${index}`}
          cx="200"
          cy="130"
          r="2"
          fill="#fff"
          opacity="0.6"
          transform={`rotate(${rotation} 200 200)`}
          className="animate-twinkle"
        />
      ))}

      <defs>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4" />
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
    </svg>
  )
} 

