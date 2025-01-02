interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Mindful Connections",
    description: "Build meaningful relationships through purposeful interactions",
    icon: "🌱"
  },
  {
    title: "Personal Growth",
    description: "Access tools and content that inspire your journey of self-development",
    icon: "✨"
  },
  {
    title: "Digital Wellbeing",
    description: "Experience technology that respects your time and mental space",
    icon: "🧘"
  }
]

export function Features() {
  return (
    <section className="container px-4 md:px-6 py-12 bg-pink-50/50">
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-900 opacity-0 animate-fade-in">
        Why Choose Bloom
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={feature.title} 
            className={`p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in`}
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-pink-800">{feature.title}</h3>
            <p className="text-pink-600/90">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 