import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlowProvider from "@/components/bento/GlowProvider";

export const metadata: Metadata = {
  title: "Mario Padilla | Robotics & Software Engineer",
  description:
    "Personal portfolio focused on software engineering, robotics and industrial automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-black text-white">
        <GlowProvider>
          {/* Purple outer background (atmosphere) */}
          <div
            className="pointer-events-none fixed inset-0 -z-20"
            style={{
              background: `
                linear-gradient(180deg, rgba(88,28,135,0.85) 0%, rgba(20,10,30,0.95) 45%, rgba(0,0,0,1) 100%),
                radial-gradient(70% 55% at 50% 0%, rgba(168,85,247,0.55), rgba(0,0,0,0) 60%),
                radial-gradient(70% 55% at 50% 110%, rgba(168,85,247,0.35), rgba(0,0,0,0) 70%),
                radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)
              `,
            }}
          />

          {/* Main shell (SOLID BLACK like reference) */}
          <div className="relative z-10 mx-auto mt-8 mb-8 max-w-7xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050008] shadow-[0_0_80px_-20px_rgba(168,85,247,0.45)]">
              {/* Neutral top sheen (NOT purple) */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/[0.04] to-transparent" />

              <div className="relative z-10">
                <Navbar />
                <main className="px-6 py-12">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </GlowProvider>
      </body>
    </html>
  );
}
