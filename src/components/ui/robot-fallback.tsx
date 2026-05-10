import { cn } from "@/lib/utils";

export function RobotFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <div className="absolute h-1/2 w-1/2 max-h-[420px] max-w-[420px] animate-pulse rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/40 blur-3xl" />
      <div className="relative h-1/3 w-1/3 max-h-[240px] max-w-[240px] rounded-full border border-white/20 bg-gradient-to-br from-cyan-400/50 to-violet-500/60 backdrop-blur-md" />
    </div>
  );
}
