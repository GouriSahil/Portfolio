import React from "react";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-[var(--bg-overlay)] bg-[var(--bg-surface)] shadow-[0_0_60px_var(--accent-glow)] ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--bg-overlay)] bg-[var(--bg-base)]">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {title && (
          <span className="ml-3 text-xs text-[var(--text-secondary)] truncate">
            {title}
          </span>
        )}
      </div>
      <div className="px-4 py-6 text-left text-sm text-[var(--text-primary)] md:px-6 md:py-8">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;

