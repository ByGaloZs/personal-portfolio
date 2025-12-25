"use client";

import { ReactNode } from "react";

interface GlowProviderProps {
  children: ReactNode;
}

export default function GlowProvider({ children }: GlowProviderProps) {
  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty("--x", `${x}px`);
        target.style.setProperty("--y", `${y}px`);
      }}
    >
      {children}
    </div>
  );
}
