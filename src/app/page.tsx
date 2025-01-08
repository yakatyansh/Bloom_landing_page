import { Hero } from "@/app/components/Hero"
import { CTA } from "./components/cta"
import { GlowingCursor } from "./components/GlowingCursor"

export default function Home() {
  return (
    <>
      <GlowingCursor />
      <main>
        <Hero />
        <CTA />
      </main>
    </>
  )
}