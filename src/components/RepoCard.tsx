import React from "react";

interface RepoCardProps {
  name: string;
  description: string;
  stackLine: string;
  primaryLanguage?: string;
  status: "Live" | "Completed";
  year: string;
  liveUrl?: string;
  codeUrl: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  description,
  stackLine,
  primaryLanguage = "Python",
  status,
  year,
  liveUrl,
  codeUrl,
}) => {
  const isLive = status === "Live";

  return (
    <div className="flex h-full flex-col justify-between rounded-md border border-[var(--bg-overlay)] bg-[var(--bg-surface)] p-4 text-left shadow-sm transition-colors duration-200 hover:border-[var(--accent-primary)] hover:shadow-[0_0_40px_var(--accent-glow)]">
      <div>
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base">📁</span>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--syntax-string)] underline-offset-2 hover:underline"
            >
              {name}
            </a>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs">
            <span
              className={`inline-flex rounded-[2px] px-2 py-0.5 ${
                isLive
                  ? "bg-[var(--accent-dim)] text-[var(--text-accent)]"
                  : "bg-[var(--bg-overlay)] text-[var(--text-secondary)]"
              }`}
            >
              [{status}]
            </span>
            <span className="text-[var(--syntax-comment)]">// {year}</span>
          </div>
        </div>

        <div className="my-3 h-px w-full bg-[var(--bg-overlay)]" />

        <p className="mb-2 text-sm text-[var(--text-primary)]">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
          <span className="text-[#3572A5]">⬤</span>
          <span>
            {primaryLanguage} · {stackLine}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[2px] border border-[var(--accent-primary)] px-3 py-1 text-xs font-medium text-[var(--accent-primary)] transition-colors duration-200 hover:bg-[var(--accent-glow)]"
          >
            $ live demo ↗
          </a>
        )}
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-[2px] border border-[var(--accent-primary)] px-3 py-1 text-xs font-medium text-[var(--accent-primary)] transition-colors duration-200 hover:bg-[var(--accent-glow)]"
        >
          $ view code {"</>"}
        </a>
      </div>
    </div>
  );
};

export default RepoCard;

