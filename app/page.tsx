import BentoGrid from "@/components/bento/BentoGrid";
import BentoCard from "@/components/bento/BentoCard";
import Link from "next/link";

export default function Home() {
  return (
    <BentoGrid>
      {/* Hero */}
      <BentoCard className="glow-card md:col-span-4 md:row-span-2">
        {/* Purple highlight (controlled, premium) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 right-0 left-0 h-72 bg-gradient-to-b from-purple-500/40 via-purple-500/14 to-transparent blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="mb-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hi, I&apos;m <span className="text-purple-200">Mario</span>
          </h1>

          <p className="mb-5 text-sm text-white/55">
            Robotics &amp; Software Engineer
          </p>

          <p className="max-w-[62ch] leading-relaxed text-white/75">
            I design and build robotic systems, industrial automation solutions
            and modern software products.
          </p>

          {/* Long glass button (full width) */}
          <div className="mt-7">
            <Link
              href="/about"
              className="group relative flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] py-3 text-sm font-medium text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-xl transition-all duration-300 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
            >
              <span className="flex items-center gap-2">
                More about me
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              {/* micro glow */}
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl" />
              </span>
            </Link>
          </div>

          {/* Tags (below button) */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Robotics",
              "Industrial Automation",
              "PLC",
              "Vision",
              "Full-Stack",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </BentoCard>

      {/* About (right column) */}
      <BentoCard
        className="md:col-span-2"
        title="About"
        description="Background"
      >
        <p className="text-sm text-white/70">
          Mechatronics engineer with experience in robotics, vision, PLC
          integration and full-stack development.
        </p>
      </BentoCard>

      {/* Skills (right column) */}
      <BentoCard
        className="md:col-span-2"
        title="Skills"
        description="Core areas"
      >
        <ul className="space-y-1 text-sm text-white/70">
          <li>Robotics &amp; Palletizing</li>
          <li>Industrial Automation &amp; PLC</li>
          <li>HMI &amp; Frontend Development</li>
          <li>Backend &amp; DevOps fundamentals</li>
        </ul>
      </BentoCard>

      {/* Featured Projects */}
      <Link href="/projects" className="h-full md:col-span-4">
        <BentoCard
          className="glow-card h-full cursor-pointer"
          title="Featured Projects"
          description="Selected work"
        >
          <p className="text-sm text-white/70">
            Automated palletizing systems, HMI interfaces and vision-based
            solutions.
          </p>
        </BentoCard>
      </Link>

      {/* CTA */}
      <a
        href="mailto:mariopadillafranco97@outlook.com"
        className="h-full md:col-span-2"
      >
        <BentoCard
          className="glow-card h-full cursor-pointer"
          title="Let's Connect"
          description="Get in touch"
        >
          <p className="text-sm text-white/70">
            Interested in working together?
          </p>
          <p className="mt-1 text-sm font-medium text-white/80">
            Let&apos;s talk.
          </p>
        </BentoCard>
      </a>
    </BentoGrid>
  );
}
