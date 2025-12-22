import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Padilla | Robotics & Software Engineer",
  description:
    "Personal portfolio focused on software engineering, robotics and industrial automation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
