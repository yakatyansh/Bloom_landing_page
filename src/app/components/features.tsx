import { 
  Sparkles, 
  Flower2, 
  Globe2, 
  Heart, 
  Orbit, 
  Waves, 
  Pause, 
  Battery, 
  Map 
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
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-purple-400 to-pink-400",
  },
  {
    title: "Resonance",
    description: "Experience content aligned with your emotional state through mood check-ins and vibrational curation.",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-red-400 to-pink-400",
  },
  {
    title: "Growth Journeys",
    description: "Explore custom feeds based on your interests and personal growth goals.",
    icon: <Flower2 className="w-6 h-6" />,
    gradient: "from-green-400 to-emerald-400",
  },
  {
    title: "Bloomscore",
    description: "Track your positive engagement and real-world connections with our unique scoring system.",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    title: "Sparks",
    description: "Receive personalized prompts about your goals and inspirations.",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    title: "Orbits",
    description: "Explore your connections in a visual, dimensional space.",
    icon: <Orbit className="w-6 h-6" />,
    gradient: "from-indigo-400 to-purple-400",
  },
  {
    title: "Ripple Effects",
    description: "Track positive chain reactions and collaborative achievements.",
    icon: <Waves className="w-6 h-6" />,
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    title: "Mindful Pause",
    description: "Smart limits and nudges that encourage balanced platform usage.",
    icon: <Pause className="w-6 h-6" />,
    gradient: "from-slate-400 to-gray-400",
  },
  {
    title: "Empowerments",
    description: "Measure your content's meaningful impact on others.",
    icon: <Battery className="w-6 h-6" />,
    gradient: "from-emerald-400 to-green-400",
  },
  {
    title: "Bloomsphere Impact Map",
    description: "Visualize the platform's collective impact across different journeys and regions.",
    icon: <Globe2 className="w-6 h-6" />,
    gradient: "from-blue-400 to-cyan-400",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-900">
          Transform Your Social Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg w-12 h-12 flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pink-900">{feature.title}</h3>
              <p className="text-pink-700/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 