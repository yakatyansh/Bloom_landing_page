import { Vision } from "../components/about/Vision"
import { CoreFeatures } from "../components/about/CoreFeatures"
import { ImpactMetrics } from "../components/about/ImpactMetrics"
import { JoinMovement } from "../components/about/JoinMovement"

export default function About() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Vision />
      <CoreFeatures />
      <ImpactMetrics />
      <JoinMovement />
    </div>
  )
} 