"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { 
  Sparkles, 
  Flower2, 
  Globe2, 
  Heart, 
  Orbit, 
  Waves, 
  Pause, 
  Battery, 
} from "lucide-react"
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
    icon: <Sparkles className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Resonance",
    description: "Experience content aligned with your emotional state through mood check-ins and vibrational curation.",
    icon: <Heart className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Growth Journeys",
    description: "Explore custom feeds based on your interests and personal growth goals.",
    icon: <Flower2 className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Bloomscore",
    description: "Track your positive engagement and real-world connections with our unique scoring system.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Sparks",
    description: "Receive personalized prompts about your goals and inspirations.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Orbits",
    description: "Explore your connections in a visual, dimensional space.",
    icon: <Orbit className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Ripple Effects",
    description: "Track positive chain reactions and collaborative achievements.",
    icon: <Waves className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Mindful Pause",
    description: "Smart limits and nudges that encourage balanced platform usage.",
    icon: <Pause className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Empowerments",
    description: "Measure your content's meaningful impact on others.",
    icon: <Battery className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
  {
    title: "Bloomsphere Impact Map",
    description: "Visualize the platform's collective impact across different journeys and regions.",
    icon: <Globe2 className="w-6 h-6 text-white" />,
    gradient: "from-[#EC4899] to-[#A855F7]",
  },
];

export function Feat() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative bg-[#0a0118] py-24 -mt-1 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
            opacity: [0.1, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Transform Your Social Experience
          </h2>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Discover a more mindful way to engage with social media through our innovative features
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(236, 72, 153, 0.03)"
              }}
              className="p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 
                transition-colors duration-300 group cursor-pointer"
            >
              <motion.div 
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} 
                  p-2 flex items-center justify-center mb-4 text-white`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-500 
                transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-purple-200/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0.65, 0.7], [0, 1])
        }}
      >
      </motion.div>
    </section>
  )
}