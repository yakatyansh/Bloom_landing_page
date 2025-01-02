import { Button } from "./ui/button"

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-pink-400 px-6 py-20 shadow-xl opacity-0 animate-scale-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-3xl font-bold text-white md:text-4xl opacity-0 animate-fade-in stagger-1">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-pink-50 opacity-0 animate-fade-in stagger-2">
              Join thousands of users who are already transforming their digital experience with Bloom.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row opacity-0 animate-fade-in stagger-3">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 border-2 border-transparent"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Optional: Add decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-20" />
      </div>
    </section>
  )
} 