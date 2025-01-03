import { Hero } from "./components/Hero"
import { Features } from "./components/features"
import { CTA } from "./components/cta"

export default function Home() {
  return (
    <main className="bg-[#0a0118]">
      <Hero />
      <Features />
      <CTA />
    </main>
  )
}