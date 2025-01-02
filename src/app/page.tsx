import { Hero } from "./components/Hero"
import { Features } from "./components/features"
import { CTA } from "./components/cta"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}