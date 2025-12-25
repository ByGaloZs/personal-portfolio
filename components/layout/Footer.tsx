export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-white/55">
        <span>© {new Date().getFullYear()} Mario Padilla</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
