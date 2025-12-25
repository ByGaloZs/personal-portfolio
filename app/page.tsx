import BentoGrid from '@/components/bento/BentoGrid';
import BentoCard from '@/components/bento/BentoCard';
import Link from 'next/link';

export default function Home() {
  return (
    <BentoGrid>
      {/* Hero */}
      <BentoCard className="md:col-span-4">
        <h1 className="text-3xl font-semibold mb-2">Hi, I&apos;m Mario</h1>
        <p className="text-sm text-white/60 mb-4">Robotics & Software Engineer</p>
        <p className="text-white/80 leading-relaxed">
          I design and build robotic systems, industrial automation solutions and modern software products.
        </p>
      </BentoCard>

      {/* Availability */}
      <BentoCard className="md:col-span-2" title="Status" description="Available for work">
        <span className="text-sm text-green-400">Open to new opportunities</span>
      </BentoCard>

      {/* About */}
      <BentoCard className="md:col-span-3" title="About" description="Background">
        <p className="text-sm text-white/70">
          Mechatronics engineer with experience in robotics, vision, PLC integration and full-stack development.
        </p>
      </BentoCard>

      {/* Skills */}
      <BentoCard className="md:col-span-3" title="Skills" description="Core areas">
        <ul className="text-sm text-white/70 space-y-1">
          <li>Robotics & Palletizing</li>
          <li>Industrial Automation & PLC</li>
          <li>HMI & Frontend Development</li>
          <li>Backend & DevOps fundamentals</li>
        </ul>
      </BentoCard>

      {/* Featured Projects */}
      <Link href="/projects" className="md:col-span-4">
        <div className="h-full">
          <BentoCard className="h-full cursor-pointer" title="Featured Projects" description="Selected work">
            <p className="text-sm text-white/70">
              Automated palletizing systems, HMI interfaces and vision-based solutions.
            </p>
          </BentoCard>
        </div>
      </Link>

      {/* CTA */}
      <a href="mailto:mariopadillafranco97@outlook.com" className="md:col-span-2">
        <div className="h-full">
          <BentoCard className="h-full cursor-pointer" title="Let's Connect" description="Get in touch">
            <p className="text-sm text-white/70">Interested in working together?</p>
            <p className="text-sm text-white/80 font-medium mt-1">Let&apos;s talk.</p>
          </BentoCard>
        </div>
      </a>
    </BentoGrid>
  );
}
