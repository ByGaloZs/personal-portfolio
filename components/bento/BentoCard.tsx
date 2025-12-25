import { ReactNode } from 'react';

interface BentoCardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export default function BentoCard({ title, description, className = '', children }: BentoCardProps) {
  return (
    <div
      className={`
      rounded-xl
      border border-white/10
      bg-white/5
      p-6
      transition-all
      transition-transform
      duration-300
      hover:border-white/20
      hover:bg-white/10
      hover:-translate-y-0.5
      hover:shadow-lg
      ${className}
    `}
    >
      {title && <h2 className="text-lg font-medium mb-2 tracking-tight">{title}</h2>}

      {description && <p className="text-sm text-white/60 mb-4">{description}</p>}

      {children}
    </div>
  );
}
