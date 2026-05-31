import { useLocation } from 'react-router-dom'

interface HeaderProps {
  onMenuToggle: () => void
}

const PAGE_META: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Dashboard', subtitle: 'AI OS â€” Execution Workspace' },
  '/prompts': { title: 'Prompt Library', subtitle: 'Browse & deploy production prompts' },
  '/trending': { title: 'Trending Prompts', subtitle: 'Top performers ranked by usage & saves' },
  '/builder': { title: 'Project Builder Bot', subtitle: 'Turn an idea into a ready-to-use AI prompt pack' },
  '/workflows': { title: 'Workflow Generator', subtitle: 'Assemble multi-step AI workflows' },
  '/context': { title: 'Context Recovery', subtitle: 'Step 0 â€” Last 5 Message Lock & Continuity' },
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { pathname } = useLocation()
  const meta = PAGE_META[pathname] ?? { title: 'PromptPalace OS', subtitle: '' }
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <header className="h-14 flex items-center gap-4 px-4 md:px-6 bg-bg-surface/80 backdrop-blur-sm border-b border-border sticky top-0 z-20">
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
        aria-label="Toggle menu"
      >
        <span className="w-5 h-px bg-text-secondary group-hover:bg-text-primary transition-colors" />
        <span className="w-4 h-px bg-text-secondary group-hover:bg-text-primary transition-colors" />
        <span className="w-5 h-px bg-text-secondary group-hover:bg-text-primary transition-colors" />
      </button>

      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h1 className="text-sm font-display font-semibold text-text-primary leading-none">{meta.title}</h1>
        <p className="text-[11px] font-mono text-text-muted mt-0.5 truncate">{meta.subtitle}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* System clock */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
          <span className="font-mono text-xs text-text-muted">
            {dateStr} {timeStr}
          </span>
        </div>

        {/* Execution step indicator */}
        <div className="hidden sm:flex items-center gap-1.5 bg-bg-elevated border border-border rounded-lg px-3 py-1.5">
          <span className="step-0">FIND</span>
          <span className="text-text-muted text-xs">â†’</span>
          <span className="step-05">COPY</span>
          <span className="text-text-muted text-xs">â†’</span>
          <span className="step-1">ADAPT</span>
          <span className="text-text-muted text-xs">â†’</span>
          <span className="step-2">RUN</span>
        </div>

        {/* Quick action */}
        <button className="pp-btn-primary text-xs py-1.5 px-3 hidden sm:flex">
          <span>âŸ³</span>
          <span>Start Flow</span>
        </button>
      </div>
    </header>
  )
}


