import { Button } from "./ui/button"
import { BloomingFlower } from "./frame"

export function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between py-16 gap-8">
        <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pink-900">
           Stop DoomScrolling{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">
              Start BloomScrolling
            </span>
          </h1>
          <p className="text-xl text-pink-700/80 mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in stagger-1">
            Transform your social media experience feed into a mindful and purposeful journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in stagger-2">
            <Button 
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white border-none"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center opacity-0 animate-scale-in stagger-2">
          <div className="relative w-72 h-72 flex items-center justify-center animate-float">
            <BloomingFlower />
          </div>
        </div>
      </div>
    </div>
  )
}