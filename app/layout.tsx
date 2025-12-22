import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <body className="bg-black text-white">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
