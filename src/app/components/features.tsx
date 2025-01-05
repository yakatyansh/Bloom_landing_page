"use client"

import { motion } from "framer-motion"
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

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const features: Feature[] = [
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

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="relative bg-[#0a0118] py-24 -mt-1">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.1)"
              }}
              className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 
                hover:border-purple-500/30 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} 
                  p-2.5 mb-4 flex items-center justify-center relative group`}
              >
                {feature.icon}
                <motion.div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#EC4899]/20 
                    to-[#A855F7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-purple-100 mb-2"
                whileHover={{ scale: 1.02 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-purple-200/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}