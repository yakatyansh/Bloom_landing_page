import Link from 'next/link'
import { 
  Brain, 
  Heart, 
  Users, 
  Sparkles, 
  Leaf, 
  Network,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Network,
    title: "Empowerment Algorithm",
    description: "Unlike traditional engagement algorithms that drain us, Bloom's core technology is designed to elevate consciousness and foster meaningful connections that serve our highest potential."
  },
  {
    icon: Leaf,
    title: "Rhizomatic Growth",
    description: "Experience an organic, interconnected space where inspiring ideas spread naturally through communities, creating resilient networks of shared wisdom and collective growth."
  },
  {
    icon: Sparkles,
    title: "Sacred Technology",
    description: "Every interaction is designed to nourish rather than drain, transforming scrolling into an act of personal and collective expansion. Technology that honors our highest values."
  },
  {
    icon: Brain,
    title: "Collective Intelligence",
    description: "Join humanity's superorganism potential through AI-assisted connections that amplify our collective wisdom and creativity, preparing us for the age of AGI."
  },
  {
    icon: Heart,
    title: "Resonance Matching",
    description: "Connect with others based on authentic resonance and shared values. Move beyond superficial engagement to find meaningful relationships that inspire growth."
  },
  {
    icon: Users,
    title: "Co-Creative Community",
    description: "Be part of a movement of conscious individuals working together to transform technology from a source of distraction into a force for collective flourishing."
  }
]

export default function FeaturePage() {
  return (
    <div className="relative bg-[#0a0118] min-h-screen">
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          A New Vision for Connection
        </h1>
        <p className="text-xl text-purple-200/80 max-w-3xl mx-auto px-4 leading-relaxed">
          Bloom is more than a platform—it's a movement transforming digital interaction into a catalyst 
          for collective growth. Discover how we're building sacred technology that serves humanity's 
          highest potential.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group p-8 bg-purple-900/10 rounded-xl border border-purple-500/20 
                hover:border-purple-500/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-7 w-7 text-purple-400 stroke-[1.5]" />
                <h3 className="ml-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-purple-200/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-12 text-center">
        <Link
          href="/"
          className="group inline-flex items-center px-8 py-3 border border-purple-500 text-base font-medium 
            rounded-md text-purple-100 hover:bg-purple-500/10 transition-colors duration-300"
        >
          Begin Your Journey
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Features | Bloom',
  description: 'Discover how Bloom transforms digital interaction into sacred technology, fostering collective growth and meaningful connections through our empowerment algorithm.',
}