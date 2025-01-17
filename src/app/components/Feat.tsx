"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Heart,
  Waves,
  Leaf,
  Medal,
  Zap,
  Timer,
  Battery,
  Map,
  Orbit
} from "lucide-react";
import { useRef } from "react";

interface Feat {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  emoji?: string;
}

const features: Feat[] = [
  {
    title: "AI-Powered Content Creation",
    description: "Create engaging video and static content with advanced AI assistance, designed to foster meaningful connections.",
    icon: <Sparkles className="w-20 h-20 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Resonance",
    description: "Experience content aligned with your emotional state through mood check-ins, vibrational curation, and haptic feedback that keeps you present and engaged.",
    icon: <Heart className="w-20 h-20 text-white" />,
    gradient: "from-[#6366F1] to-[#A855F7]",
  },
  {
    title: "Growth Journeys",
    description: "Explore custom feeds based on your specific interests and growth areas, tailored to your personal development path.",
    icon: <Leaf className="w-20 h-20 text-white" />,
    gradient: "from-[#22C55E] to-[#10B981]",
    emoji: "🌱"
  },
  {
    title: "Bloomscore",
    description: "Track your positive platform engagement, real-world connections, and community contributions through our comprehensive scoring system.",
    icon: <Medal className="w-20 h-20 text-white" />,
    gradient: "from-[#F59E0B] to-[#EAB308]",
    emoji: "🎖"
  },
  {
    title: "Sparks",
    description: "Receive personalized prompts about your goals and inspirations, designed to ignite meaningful action and reflection.",
    icon: <Zap className="w-20 h-20 text-white" />,
    gradient: "from-[#F59E0B] to-[#F43F5E]",
    emoji: "⚡️"
  },
  {
    title: "Orbits",
    description: "Explore your connections in a dimensional, visual space. Filter and navigate through your network like a personal universe.",
    icon: <Orbit className="w-20 h-20 text-white" />,
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    emoji: "💫"
  },
  {
    title: "Ripple Effects",
    description: "Track positive chain reactions as people connect, collaborate, and achieve goals together on the platform.",
    icon: <Waves className="w-20 h-20 text-white" />,
    gradient: "from-[#0EA5E9] to-[#3B82F6]",
    emoji: "🌊"
  },
  {
    title: "Mindful Pause",
    description: "Experience intelligent limits and nudges that encourage healthy platform use and redirect from doomscrolling to bloomscrolling.",
    icon: <Timer className="w-20 h-20 text-white" />,
    gradient: "from-[#64748B] to-[#94A3B8]",
    emoji: "⎯"
  },
  {
    title: "Empowerments",
    description: "Content creators can track their positive impact through meaningful engagement metrics and emotional resonance.",
    icon: <Battery className="w-20 h-20 text-white" />,
    gradient: "from-[#22C55E] to-[#10B981]",
    emoji: "🔋"
  },
  {
    title: "Bloomsphere Impact Map",
    description: "Visualize the platform's collective impact through an interactive map showing stories, contributions, and connections across different journeys and regions.",
    icon: <Map className="w-20 h-20 text-white" />,
    gradient: "from-[#3B82F6] to-[#2563EB]",
    emoji: "🔵"
  }
];

export function Feat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pre-calculate the input ranges for each feature
  const inputRanges = features.map((_, index) => [
    index / features.length,
    (index + 1) / features.length,
  ]);

  // Create transform arrays for x position and opacity
  const xTransforms = features.map((_, index) => 
    useTransform(scrollYProgress, inputRanges[index], [200, 0])
  );

  const opacityTransforms = features.map((_, index) => 
    useTransform(scrollYProgress, inputRanges[index], [0, 1])
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0a0118] min-h-screen overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 px-4 pt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Transform Your Social Experience
          </h2>
          <p className="text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto">
            Discover a more mindful way to engage with social media through our
            innovative features.
          </p>
        </motion.div>

        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center justify-center min-h-screen px-8"
            style={{
              x: xTransforms[index],
              opacity: opacityTransforms[index],
            }}
          >
            <motion.div
              className={`w-36 h-36 rounded-full bg-gradient-to-r ${feature.gradient} 
                p-8 flex items-center justify-center mb-12 text-white relative`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {feature.icon}
              {feature.emoji && (
                <span className="absolute -top-2 -right-2 text-2xl">
                  {feature.emoji}
                </span>
              )}
            </motion.div>
            <div className="max-w-xl text-center">
              <h3 className="text-4xl font-semibold text-white mb-6">
                {feature.title}
              </h3>
              <p className="text-xl text-purple-200/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}