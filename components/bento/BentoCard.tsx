import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
};

export default function BentoCard({
  children,
  className = "",
  title,
  description,
}: BentoCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[28px]",
        "border border-white/10 bg-black/90 backdrop-blur-xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),_0_30px_90px_-45px_rgba(0,0,0,0.9)]",
        "transition-all duration-300 ease-out",
        "hover:border-purple-400/50 hover:ring-2 hover:ring-purple-400/25",
        "hover:shadow-[0_0_0_1px_rgba(168,85,247,0.35),_0_20px_60px_-35px_rgba(168,85,247,0.18),_0_30px_90px_-45px_rgba(0,0,0,0.9)]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 h-full p-8">
        {(title || description) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-white/55">{description}</p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
