export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex justify-between">
        <span>© {new Date().getFullYear()} Mario Padilla</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
