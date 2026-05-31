import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ALL_PROMPTS, CATEGORIES, type Prompt } from '../data/index'
import { formatNumber, cn } from '../lib/utils'

const DIFFICULTY_BADGE: Record<string, string> = {
  beginner: 'pp-badge-emerald',
  intermediate: 'pp-badge-amber',
  advanced: 'pp-badge-rose',
}

const FEATURED_CATEGORIES = [
  { id: 'coding',      icon: '{ }',  label: 'Coding',       color: 'text-cyan-400',    bg: 'bg-cyan-900/20',    border: 'border-cyan-500/30' },
  { id: 'writing',     icon: '✍',   label: 'Writing',      color: 'text-pink-400',    bg: 'bg-pink-900/20',    border: 'border-pink-500/30' },
  { id: 'business',    icon: '◆',   label: 'Business',     color: 'text-amber-400',   bg: 'bg-amber-900/20',   border: 'border-amber-500/30' },
  { id: 'marketing',   icon: '↗',   label: 'Marketing',    color: 'text-rose-400',    bg: 'bg-rose-900/20',    border: 'border-rose-500/30' },
  { id: 'analysis',    icon: '⊟',   label: 'Analysis',     color: 'text-blue-400',    bg: 'bg-blue-900/20',    border: 'border-blue-500/30' },
  { id: 'learning',    icon: '◎',   label: 'Learning',     color: 'text-teal-400',    bg: 'bg-teal-900/20',    border: 'border-teal-500/30' },
  { id: 'creative',    icon: '✦',   label: 'Creative',     color: 'text-orange-400',  bg: 'bg-orange-900/20',  border: 'border-orange-500/30' },
  { id: 'ai-personas', icon: '⬡',   label: 'AI Personas',  color: 'text-violet-400',  bg: 'bg-violet-900/20',  border: 'border-violet-500/30' },
]

function HowItWorksSection() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-bg-surface p-6 md:p-8">
      <div className="absolute inset-0 bg-violet-glow opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="pp-badge-violet text-[10px]">WHAT IS PROMPTPALACE?</span>
        </div>
        <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-2">
          Your <span className="text-gradient-violet">AI Prompt Intelligence</span> Platform
        </h2>
        <p className="text-sm text-text-secondary font-body leading-relaxed max-w-2xl mb-6">
          PromptPalace is a curated library of production-ready AI prompts — each one crafted for a specific
          use case, tested for quality, and organized for instant discovery. Stop writing prompts from scratch.
          Start shipping faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg bg-bg-elevated border border-border p-4">
            <div className="text-2xl mb-2">1.</div>
            <div className="text-sm font-display font-semibold text-text-primary mb-1">Browse or Search</div>
            <p className="text-xs text-text-secondary font-body leading-relaxed">
              Filter by category (Coding, Writing, Marketing…) or search by keyword to find the right prompt for your task.
            </p>
          </div>
          <div className="rounded-lg bg-bg-elevated border border-border p-4">
            <div className="text-2xl mb-2">2.</div>
            <div className="text-sm font-display font-semibold text-text-primary mb-1">Expand &amp; Copy</div>
            <p className="text-xs text-text-secondary font-body leading-relaxed">
              Click a prompt card to see the full prompt. Copy it with one click, then paste into ChatGPT, Claude, or any AI tool.
            </p>
          </div>
          <div className="rounded-lg bg-bg-elevated border border-border p-4">
            <div className="text-2xl mb-2">3.</div>
            <div className="text-sm font-display font-semibold text-text-primary mb-1">Fill the Blanks</div>
            <p className="text-xs text-text-secondary font-body leading-relaxed">
              Replace the <span className="text-violet-400 font-mono">[BRACKETED]</span> placeholders with your specific context, then run. Done.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-mono text-text-muted">Works with:</span>
          {['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Mistral', 'Any LLM'].map(m => (
            <span key={m} className="text-[10px] font-mono bg-bg-overlay border border-border px-2 py-0.5 rounded text-text-muted">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CategoryGrid({ onSelectCategory, activeCategory }: {
  onSelectCategory: (id: string) => void
  activeCategory: string
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {FEATURED_CATEGORIES.map(cat => {
        const count = ALL_PROMPTS.filter(p => p.category === cat.id).length
        const isActive = activeCategory === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(isActive ? 'all' : cat.id)}
            className={cn(
              'rounded-lg border p-3 text-left transition-all duration-200',
              isActive
                ? `${cat.bg} ${cat.border} ${cat.color}`
                : 'bg-bg-elevated border-border hover:border-border-strong text-text-muted hover:text-text-secondary'
            )}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-base">{cat.icon}</span>
              {count > 0 && (
                <span className={cn('text-[10px] font-mono', isActive ? cat.color : 'text-text-muted')}>
                  {count}
                </span>
              )}
            </div>
            <div className={cn('text-xs font-display font-semibold', isActive ? cat.color : 'text-text-secondary')}>
              {cat.label}
            </div>
          </button>
        )
      })}
    </div>
  )
}

function PromptCard({ p, copiedId, onCopy, expandedId, onToggle }: {
  p: Prompt
  copiedId: string | null
  onCopy: (p: Prompt) => void
  expandedId: string | null
  onToggle: (id: string) => void
}) {
  const isCopied = copiedId === p.id
  const isExpanded = expandedId === p.id

  return (
    <div className="pp-card border border-border hover:border-border-strong transition-all duration-200">
      <div
        className="flex items-start gap-4 cursor-pointer"
        onClick={() => onToggle(p.id)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="pp-badge-violet">{p.category}</span>
            <span className={DIFFICULTY_BADGE[p.difficulty] ?? 'pp-badge'}>{p.difficulty}</span>
            {p.trending && <span className="pp-badge-rose">🔥 trending</span>}
            {p.featured && <span className="pp-badge-amber">⭐ featured</span>}
          </div>
          <h3 className="text-sm font-display font-semibold text-text-primary leading-tight">{p.title}</h3>
          <p className="text-xs text-text-secondary mt-1 font-body leading-relaxed line-clamp-2">{p.description}</p>
          {p.useCase && (
            <p className="text-[11px] text-cyan-400/80 font-mono mt-1 line-clamp-1">→ {p.useCase}</p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] font-mono text-text-muted">
            <span>↑ {formatNumber(p.uses)}</span>
            <span>★ {formatNumber(p.saves)}</span>
            <span className="pp-badge-cyan">{p.model}</span>
            <span>~{p.estimatedTokens} tokens</span>
          </div>
        </div>
        <span className="shrink-0 text-text-muted text-xs font-mono mt-1">{isExpanded ? '▲' : '▼'}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {p.tags.map(tag => (
          <span
            key={tag}
            className="text-[10px] font-mono bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted"
          >
            #{tag}
          </span>
        ))}
      </div>

      {isExpanded && (
        <div className="mt-4 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="pp-label">PROMPT CONTENT</span>
            <button
              onClick={() => onCopy(p)}
              className={cn(
                'text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-150',
                isCopied
                  ? 'border-emerald-500/50 text-emerald-400 bg-emerald-900/20'
                  : 'border-border hover:border-violet-500/50 text-text-muted hover:text-violet-400'
              )}
            >
              {isCopied ? '✓ Copied!' : '⎘ Copy'}
            </button>
          </div>
          <pre className="bg-bg-base border border-border rounded-lg p-4 text-[11px] font-mono text-text-secondary leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {p.content}
          </pre>
          {p.bestFor && p.bestFor.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] font-mono text-text-muted">Best for:</span>
              {p.bestFor.map(b => (
                <span key={b} className="text-[10px] font-mono bg-bg-elevated border border-cyan-500/20 px-2 py-0.5 rounded text-cyan-400/80">
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2 mt-4 pt-3 border-t border-border">
        <button
          onClick={() => onCopy(p)}
          className={cn(
            'flex-1 sm:flex-none pp-btn-primary text-xs py-2',
            isCopied && 'bg-emerald-600 hover:bg-emerald-600'
          )}
        >
          {isCopied ? '✓ Copied!' : '⎘ Copy Prompt'}
        </button>
        <Link
          to={`/prompt/${p.id}`}
          className="pp-btn-secondary text-xs py-2"
        >
          Details →
        </Link>
        <button
          onClick={() => onToggle(p.id)}
          className="pp-btn-secondary text-xs py-2"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
    </div>
  )
}

export default function PromptLibraryPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeDifficulty, setActiveDifficulty] = useState<string>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => {
    return ALL_PROMPTS.filter(p => {
      const q = search.toLowerCase()
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        (p.useCase?.toLowerCase().includes(q) ?? false)
      const matchesCat = activeCategory === 'all' || p.category === activeCategory
      const matchesDiff = activeDifficulty === 'all' || p.difficulty === activeDifficulty
      return matchesSearch && matchesCat && matchesDiff
    })
  }, [search, activeCategory, activeDifficulty])

  const displayed = showAll ? filtered : filtered.slice(0, 30)

  const copyTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    const prev = copyTimeouts.get(p.id)
    if (prev) clearTimeout(prev)
    setCopiedId(p.id)
    const t = setTimeout(() => setCopiedId(null), 1800)
    copyTimeouts.set(p.id, t)
  }

  const allCategoryIds = [...new Set(ALL_PROMPTS.map(p => p.category))]

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-slide-up">

      <HowItWorksSection />

      {/* Category quick-picks */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="pp-section-title">Browse by Category</div>
          <Link to="/categories" className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors">
            All categories →
          </Link>
        </div>
        <CategoryGrid onSelectCategory={setActiveCategory} activeCategory={activeCategory} />
      </div>

      {/* Header + search */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <h2 className="pp-section-title text-lg">
              {activeCategory === 'all' ? 'All Prompts' : CATEGORIES.find(c => c.id === activeCategory)?.label ?? activeCategory}
            </h2>
            <p className="text-xs font-mono text-text-muted mt-0.5">
              {ALL_PROMPTS.length} production-ready prompts · {filtered.length} matching
            </p>
          </div>
          <div className="flex gap-2">
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(d => (
              <button
                key={d}
                onClick={() => setActiveDifficulty(d)}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all',
                  activeDifficulty === d
                    ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                    : 'bg-bg-elevated border border-border text-text-muted hover:text-text-secondary'
                )}
              >
                {d === 'all' ? 'All' : d}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Search prompts, tags, use cases..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="pp-input"
        />

        {/* Category filter pills */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeCategory === 'all'
                ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                : 'bg-bg-elevated border border-border text-text-muted hover:text-text-secondary'
            )}
          >
            All ({ALL_PROMPTS.length})
          </button>
          {allCategoryIds.map(catId => {
            const count = ALL_PROMPTS.filter(p => p.category === catId).length
            const catLabel = CATEGORIES.find(c => c.id === catId)?.label ?? catId
            return (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                  activeCategory === catId
                    ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                    : 'bg-bg-elevated border border-border text-text-muted hover:text-text-secondary'
                )}
              >
                {catLabel} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Prompt list */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted font-mono text-sm">
            No prompts found — try a different search or category.
          </div>
        )}
        {displayed.map(p => (
          <PromptCard
            key={p.id}
            p={p}
            copiedId={copiedId}
            onCopy={handleCopy}
            expandedId={expandedId}
            onToggle={id => setExpandedId(expandedId === id ? null : id)}
          />
        ))}
        {!showAll && filtered.length > 30 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(true)}
              className="pp-btn-secondary text-sm"
            >
              Show all {filtered.length} prompts
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
