export function ImpactMetrics() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">Our Collective Impact</h2>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-300/10 rounded-2xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="text-center p-6">
            <div className="text-4xl font-bold mb-2 text-pink-600">1M+</div>
            <div className="text-gray-600">Meaningful Connections</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold mb-2 text-pink-600">500K+</div>
            <div className="text-gray-600">Personal Goals Achieved</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold mb-2 text-pink-600">2M+</div>
            <div className="text-gray-600">Positive Ripple Effects</div>
          </div>
        </div>
      </div>
    </section>
  )
} 