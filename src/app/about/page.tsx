import { Sparkles, Users, Globe2, Heart,  Target, Shield, Coffee } from "lucide-react"
import { Button } from "../components/ui/button"

const teamMembers = [
  {
    name: "Jack Jay",
    role: "Founder & CEO",
    image: "/team/jack.jpeg",
    bio: "Former Product Lead at Meta, passionate about digital wellness"
  },
  {
    name: "Grace Kay Matelich",
    role: "Co-Founder",
    image: "/team/gracw.jpeg",
    bio: "AI researcher with focus on human-centered technology"
  },
  {
    name: "Steven Han",
    role: "Head of R&D",
    image: "/team/gracw.jpeg",
    bio: "Award-winning UX designer specializing in mindful interfaces"
  },
  {
    name: "De Kai",
    role: "Advisor",
    image: "/team/images.png",
    bio: "Psychology PhD with expertise in digital behavior"
  }
]

const values = [
  {
    icon: <Heart className="w-6 h-6 text-[#EC4899]" />,
    title: "Mindful Engagement",
    description: "We believe in quality over quantity, fostering meaningful digital interactions."
  },
  {
    icon: <Target className="w-6 h-6 text-[#EC4899]" />,
    title: "Purposeful Innovation",
    description: "Every feature we build serves a clear purpose in enhancing digital wellbeing."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#EC4899]" />,
    title: "User Privacy",
    description: "We prioritize user privacy and data protection in everything we do."
  },
  {
    icon: <Coffee className="w-6 h-6 text-[#EC4899]" />,
    title: "Community First",
    description: "Our community's growth and wellbeing drive our decisions."
  }
]

export default function AboutPage() {
  return (
    <main className="bg-[#0a0118]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              About{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
                BloomScroll
              </span>
            </h1>
            <p className="text-xl text-purple-200/80 mb-8">
              We're on a mission to transform social media into a force for personal growth and meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, number: "1M+", label: "Active Users" },
              { icon: <Heart />, number: "50M+", label: "Mindful Moments" },
              { icon: <Globe2 />, number: "190+", label: "Countries" },
              { icon: <Sparkles />, number: "4.9/5", label: "User Rating" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#EC4899] to-[#A855F7] p-2.5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-purple-100 mb-2">{value.title}</h3>
                <p className="text-purple-200/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent opacity-60" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-100 mb-1">{member.name}</h3>
                <p className="text-[#EC4899] font-medium mb-2">{member.role}</p>
                <p className="text-purple-200/60">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 border-t border-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Our Journey
            </h2>
            <p className="text-xl text-purple-200/80 mb-8">
              Be part of the movement to transform social media into a more mindful space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] hover:to-[#9333EA] text-white"
              >
                Join BloomScroll
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-400/30 text-purple-200 hover:bg-purple-500/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}