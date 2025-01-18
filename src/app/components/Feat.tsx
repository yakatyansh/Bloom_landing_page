import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Heart, Leaf, Medal, Zap } from "lucide-react";

const features = [
  {
    title: "AI-Powered Content Creation",
    description:
      "Create engaging video and static content with advanced AI assistance, designed to foster meaningful connections.",
    icon: <Sparkles className="w-20 h-20 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Resonance",
    description:
      "Experience content aligned with your emotional state through mood check-ins, vibrational curation, and haptic feedback that keeps you present and engaged.",
    icon: <Heart className="w-20 h-20 text-white" />,
    gradient: "from-[#6366F1] to-[#A855F7]",
  },
  {
    title: "Growth Journeys",
    description:
      "Explore custom feeds based on your specific interests and growth areas, tailored to your personal development path.",
    icon: <Leaf className="w-20 h-20 text-white" />,
    gradient: "from-[#22C55E] to-[#10B981]",
  },
  {
    title: "Bloomscore",
    description:
      "Track your positive platform engagement, real-world connections, and community contributions through our comprehensive scoring system.",
    icon: <Medal className="w-20 h-20 text-white" />,
    gradient: "from-[#F59E0B] to-[#EAB308]",
  },
  {
    title: "Sparks",
    description:
      "Receive personalized prompts about your goals and inspirations, designed to ignite meaningful action and reflection.",
    icon: <Zap className="w-20 h-20 text-white" />,
    gradient: "from-[#F59E0B] to-[#F43F5E]",
  },
];

export function Feat() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const scrollPerSection = scrollableHeight / features.length;

      if (rect.top <= 0) {
        const scrolledFromTop = Math.abs(rect.top);
        const currentIndex = Math.min(
          Math.floor(scrolledFromTop / scrollPerSection),
          features.length - 1
        );
        setActiveIndex(currentIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#0a0118] relative"
      style={{ height: `${(features.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Header */}
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Our Features
          </h2>
          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto px-4">
            Experience the power of our platform through these innovative
            features
          </p>
        </div>

        {/* Feature Display Area */}
        <div
          className="flex-1 relative flex items-center justify-center"
          style={{ top: "-30vh" }}
        >
          <div className="relative w-full max-w-4xl mx-auto px-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out
                  ${
                    activeIndex === index
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-full scale-90"
                  }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-36 h-36 rounded-full bg-gradient-to-r ${feature.gradient} 
                      p-8 flex items-center justify-center mb-6 text-white 
                      transition-transform duration-500`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-purple-200/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-white scale-150"
                    : "bg-white/20 scale-100"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
