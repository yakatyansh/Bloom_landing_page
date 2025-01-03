interface Feature {
  id: string
  name: string
  icon: string
  description: string
}

export function CoreFeatures() {
  const features: Feature[] = [
    {
      id: "resonance",
      name: "Resonance",
      icon: "🎭",
      description: "Dynamic content curation based on emotional states and vibrational alignment"
    },
    {
      id: "journeys",
      name: "Growth Journeys",
      icon: "🌱",
      description: "Personalized paths for exploration and development in specific areas"
    },
    {
      id: "bloomscore",
      name: "Bloomscore",
      icon: "🎖",
      description: "Meaningful metrics tracking positive engagement and real-world connections"
    },
    {
      id: "sparks",
      name: "Sparks",
      icon: "⚡️",
      description: "AI-powered prompts for reflection and inspiration"
    },
    {
      id: "orbits",
      name: "Orbits",
      icon: "💫",
      description: "Dimensional community spaces for deeper connection"
    },
    {
      id: "ripples",
      name: "Ripple Effects",
      icon: "🌊",
      description: "Tracking and celebrating positive chain reactions of impact"
    }
  ]

  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">Our Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} 
                 className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-700">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 