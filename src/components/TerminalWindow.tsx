import type { ReactNode } from "react";

export default function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`terminal-window overflow-hidden rounded-xl border border-line bg-surface ${className}`}
    >
      <div className="terminal-window-titlebar flex items-center gap-2 border-b border-line bg-surface-alt px-4 py-2.5">
        <span className="terminal-window-lights h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="terminal-window-lights h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="terminal-window-lights h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-text-muted">
          {title}
        </span>
      </div>
      <div className="terminal-window-content p-5">{children}</div>
    </div>
  );
}
