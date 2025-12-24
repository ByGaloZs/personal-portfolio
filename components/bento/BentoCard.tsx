import { ReactNode } from "react";

interface BentoCardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export default function BentoCard({
  title,
  description,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 p-6 ${className}`}
    >
      {title && (
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-white/60 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}
