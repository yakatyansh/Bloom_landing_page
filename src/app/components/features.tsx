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
  return (
    <section className="relative bg-[#0a0118] py-24 -mt-1">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Transform Your Social Experience
          </h2>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Discover a more mindful way to engage with social media through our innovative features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2.5 mb-4 flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-100 mb-2">{feature.title}</h3>
              <p className="text-purple-200/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}