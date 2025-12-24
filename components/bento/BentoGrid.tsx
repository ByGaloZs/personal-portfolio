import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-6">
      {children}
    </section>
  );
}
