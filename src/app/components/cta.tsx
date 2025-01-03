import { Button } from "./ui/button"

export function CTA() {
  return (
    <section className="relative bg-[#0a0118] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
              Social Media Experience?
            </span>
          </h2>
          
          <p className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered a more mindful way to engage with social media.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] hover:to-[#9333EA] text-white px-8 py-6 text-lg rounded-xl"
            >
              Get Started Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-400/30 text-purple-200 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}