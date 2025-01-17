"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Heart, Waves } from "lucide-react";
import { useRef } from "react";

interface Feat {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const features: Feat[] = [
  {
    title: "AI-Powered Content Creation",
    description: "Create engaging video and static content with advanced AI assistance.",
    icon: <Sparkles className="w-20 h-20 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Resonance",
    description: "Experience content aligned with your emotional state through mood check-ins and vibrational curation.",
    icon: <Heart className="w-20 h-20 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Ripple Effects",
    description: "Track positive chain reactions and collaborative achievements.",
    icon: <Waves className="w-20 h-20 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "And Many More",
    description: "Explore a variety of other features designed to enhance your social media experience.",
    icon: <Sparkles className="w-20 h-20 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
];

export function Feat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create transforms for each feature at the component level
  const animations = features.map((_, index) => {
    const offsetStart = index / features.length;
    const offsetEnd = (index + 1) / features.length;
    
    return {
      y: useTransform(scrollYProgress, [offsetStart, offsetEnd], [100, 0]),
      opacity: useTransform(scrollYProgress, [offsetStart, offsetEnd], [0, 1])
    };
  });

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
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
              y: animations[index].y,
              opacity: animations[index].opacity,
            }}
          >
            <motion.div
              className={`w-36 h-36 rounded-full bg-gradient-to-r ${feature.gradient} 
                p-8 flex items-center justify-center mb-12 text-white`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {feature.icon}
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