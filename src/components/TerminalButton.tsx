import React from "react";

interface TerminalButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded border border-[var(--accent-primary)] px-4 py-2 text-sm font-medium text-[var(--accent-primary)] bg-transparent transition-colors duration-200 hover:bg-[var(--accent-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)]";

const TerminalButton: React.FC<TerminalButtonProps> = ({
  label,
  href,
  onClick,
  className = "",
}) => {
  const content = <span>./{label}</span>;

  if (href) {
    const isMailto = href.startsWith("mailto:");
    return (
      <a
        href={href}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

export default TerminalButton;

