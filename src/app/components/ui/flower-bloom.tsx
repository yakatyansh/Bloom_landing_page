"use client"

const PETAL_COLORS = [
  "rgb(144, 205, 244)", // Light blue
  "rgb(179, 220, 255)", // Lighter blue
  "rgb(191, 228, 255)", // Sky blue
  "rgb(144, 205, 244)", // Light blue
  "rgb(179, 220, 255)", // Lighter blue
  "rgb(191, 228, 255)", // Sky blue
]

export function FlowerBloom() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-32 h-32 animate-bloom"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Petals */}
      <g className="animate-petals">
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <path
            key={i}
            d="M50 30C55 20 60 15 50 0C40 15 45 20 50 30Z"
            fill={PETAL_COLORS[i]}
            className="origin-center"
            transform={`rotate(${rotation}, 50, 50)`}
            style={{
              animationDelay: `${i * 0.1}s`,
              filter: "drop-shadow(0 0 2px rgba(144, 205, 244, 0.3))",
            }}
          />
        ))}
      </g>
      {/* Center */}
      <circle
        cx="50"
        cy="50"
        r="8"
        className="animate-center"
        fill="rgb(163, 213, 255)"
        style={{
          filter: "drop-shadow(0 0 3px rgba(144, 205, 244, 0.5))",
        }}
      />
    </svg>
  )
} 