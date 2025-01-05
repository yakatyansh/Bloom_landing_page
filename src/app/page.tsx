import { Hero } from "./components/Hero"
import { CTA } from "./components/cta"

export default function Home() {
  return (
    <main className="bg-[#0a0118]">
      <Hero />
      <CTA />
    </main>
  )
}