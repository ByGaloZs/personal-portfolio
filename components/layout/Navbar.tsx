import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left */}
        <div>
          <Link href="/" className="text-sm font-semibold text-white/90">
            Mario Padilla
          </Link>
          <p className="text-xs text-white/55">
            Robotics &amp; Software Engineer
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="glass-pill hidden items-center gap-2 rounded-full px-3 py-1 sm:flex">
            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.55)]" />
            <span className="text-xs text-white/75">Available for work</span>
          </div>

          <a
            href="https://github.com/ByGaloZs"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass-icon grid h-10 w-10 place-items-center rounded-full text-white/80 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass-icon grid h-10 w-10 place-items-center rounded-full text-white/80 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="mailto:mariopadillafranco97@outlook.com"
            aria-label="Email"
            className="glass-icon grid h-10 w-10 place-items-center rounded-full text-white/80 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
