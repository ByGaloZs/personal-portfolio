import BentoGrid from "@/components/bento/BentoGrid";
import BentoCard from "@/components/bento/BentoCard";

export default function Home() {
  return (
    <BentoGrid>
      {/* Hero */}
      <BentoCard
        className="md:col-span-4"
        title="Hi, I'm Mario"
        description="Robotics & Software Engineer"
      >
        <p className="text-white/70">
          I design and build robotic systems, industrial automation
          solutions and modern software products.
        </p>
      </BentoCard>

      {/* Availability */}
      <BentoCard
        className="md:col-span-2"
        title="Status"
        description="Available for work"
      >
        <span className="text-sm text-green-400">
          Open to new opportunities
        </span>
      </BentoCard>

      {/* About */}
      <BentoCard
        className="md:col-span-3"
        title="About"
        description="Background"
      >
        <p className="text-sm text-white/70">
          Mechatronics engineer with experience in robotics, vision,
          PLC integration and full-stack development.
        </p>
      </BentoCard>

      {/* Skills */}
      <BentoCard
        className="md:col-span-3"
        title="Skills"
        description="Core areas"
      >
        <ul className="text-sm text-white/70 space-y-1">
          <li>Robotics & Palletizing</li>
          <li>Industrial Automation & PLC</li>
          <li>HMI & Frontend Development</li>
          <li>Backend & DevOps fundamentals</li>
        </ul>
      </BentoCard>

      {/* Featured Projects */}
      <BentoCard
        className="md:col-span-4"
        title="Featured Projects"
        description="Selected work"
      >
        <p className="text-sm text-white/70">
          Automated palletizing systems, HMI interfaces and
          vision-based solutions.
        </p>
      </BentoCard>

      {/* CTA */}
      <BentoCard
        className="md:col-span-2"
        title="Let's Connect"
        description="Get in touch"
      >
        <p className="text-sm text-white/70">
          Interested in working together? Let’s talk.
        </p>
      </BentoCard>
    </BentoGrid>
  );
}
