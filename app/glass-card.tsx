export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 border-t-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${className}`}
      style={{ background: "rgba(205,214,244,0.06)" }}
    >
      {children}
    </div>
  );
}
