"use client"

import { Button } from "./ui/button"
import { BloomingFlower } from "./BloomingFlower"
import { ParticleBackground } from "./ParticleBackground"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#0a0118]">
      <ParticleBackground />
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />
      
      {/* Animated grid background - similar to Superpower */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-24 gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-4 mb-6">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Mindful Social Media
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Transform your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                social experience
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn mindless scrolling into mindful moments. Experience social media with purpose and intention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none px-8 py-6 text-lg rounded-xl"
              >
                Start BloomScrolling
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-700 text-purple-300 hover:bg-purple-950/50 px-8 py-6 text-lg rounded-xl"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Glow effect behind the flower */}
              <div className="absolute w-full h-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
              <div className="relative animate-float">
                <BloomingFlower />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}