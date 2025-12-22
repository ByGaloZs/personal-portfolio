import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left */}
        <div>
          <Link href="/" className="text-sm font-semibold">
            Mario Padilla
          </Link>
          <p className="text-xs text-white/60">
            Robotics & Software Engineer
          </p>
        </div>

        {/* Right */}
        <div className="flex gap-6 text-sm text-white/80">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-white">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
