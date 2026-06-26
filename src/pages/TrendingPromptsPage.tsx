import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PROMPTS, type Prompt, type PromptCategory } from '../data/prompts'
import { formatNumber, cn } from '../lib/utils'

// ─── Filter categories ────────────────────────────────────────────────────────

const FILTER_CATEGORIES = [
  { id: 'all',       label: 'All' },
  { id: 'coding',    label: 'Coding' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'business',  label: 'Business' },
  { id: 'ai-agent',  label: 'Agents' },
  { id: 'design',    label: 'Design' },
  { id: 'content',   label: 'Content' },
  { id: 'solana',    label: 'Web3' },
  { id: 'research',  label: 'Research' },
] as const

type FilterId = typeof FILTER_CATEGORIES[number]['id']

const sorted = [...PROMPTS].sort((a, b) => b.trendingScore - a.trendingScore)

// ─── TrendBadge ───────────────────────────────────────────────────────────────

function TrendBadge({ score }: { score: number }) {
  if (score >= 95)
    return <span className="pp-badge bg-rose-500/15 text-rose-400 border border-rose-500/25">🔥 VIRAL</span>
  if (score >= 85)
    return <span className="pp-badge bg-orange-500/15 text-orange-400 border border-orange-500/25">↑ HOT</span>
  if (score >= 70)
    return <span className="pp-badge bg-amber-500/15 text-amber-400 border border-amber-500/25">↗ RISING</span>
  return <span className="pp-badge bg-bg-elevated text-text-muted border border-border">— STEADY</span>
}

// ─── DifficultyBadge ──────────────────────────────────────────────────────────

function DifficultyBadge({ level }: { level: Prompt['difficulty'] }) {
  const map = {
    beginner:     { label: '◉ Beginner',     cls: 'bg-emerald-900/30 text-emerald-400 border-emerald-500/20' },
    intermediate: { label: '◈ Intermediate', cls: 'bg-amber-900/30 text-amber-400 border-amber-500/20' },
    advanced:     { label: '◆ Advanced',     cls: 'bg-rose-900/30 text-rose-400 border-rose-500/20' },
  }
  const { label, cls } = map[level]
  return <span className={cn('pp-badge border', cls)}>{label}</span>
}

// ─── CategoryBadge ────────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: PromptCategory }) {
  const map: Record<PromptCategory, { label: string; cls: string }> = {
    coding:       { label: 'Coding',       cls: 'bg-cyan-900/30 text-cyan-400 border-cyan-500/20' },
    writing:      { label: 'Content',      cls: 'bg-amber-900/30 text-amber-400 border-amber-500/20' },
    content:      { label: 'Content',      cls: 'bg-orange-900/30 text-orange-400 border-orange-500/20' },
    business:     { label: 'Business',     cls: 'bg-amber-900/30 text-amber-400 border-amber-500/20' },
    research:     { label: 'Research',     cls: 'bg-violet-900/40 text-violet-400 border-violet-500/20' },
    design:       { label: 'Design',       cls: 'bg-pink-900/30 text-pink-400 border-pink-500/20' },
    marketing:    { label: 'Marketing',    cls: 'bg-rose-900/30 text-rose-400 border-rose-500/20' },
    solana:       { label: 'Web3',         cls: 'bg-violet-900/40 text-violet-300 border-violet-500/25' },
    'ai-agent':   { label: 'Agents',       cls: 'bg-cyan-900/40 text-cyan-300 border-cyan-500/25' },
    automation:   { label: 'Automation',   cls: 'bg-emerald-900/30 text-emerald-400 border-emerald-500/20' },
    productivity: { label: 'Productivity', cls: 'bg-teal-900/30 text-teal-400 border-teal-500/20' },
    sales:        { label: 'Sales',        cls: 'bg-emerald-900/40 text-emerald-300 border-emerald-500/25' },
    seo:          { label: 'SEO',          cls: 'bg-amber-900/40 text-amber-300 border-amber-500/25' },
    'social-media': { label: 'Social',     cls: 'bg-rose-900/40 text-rose-300 border-rose-500/25' },
    startups:     { label: 'Startups',     cls: 'bg-orange-900/30 text-orange-300 border-orange-500/25' },
    career:       { label: 'Career',       cls: 'bg-amber-900/40 text-amber-400 border-amber-500/30' },
    analysis:     { label: 'Analysis',     cls: 'bg-blue-900/40 text-blue-400 border-blue-500/30' },
    learning:     { label: 'Learning',     cls: 'bg-teal-900/40 text-teal-300 border-teal-500/25' },
    creative:     { label: 'Creative',     cls: 'bg-orange-900/40 text-orange-300 border-orange-500/25' },
    'ai-personas': { label: 'Personas',   cls: 'bg-violet-900/40 text-violet-300 border-violet-500/25' },
  }
  const { label, cls } = map[category]
  return <span className={cn('pp-badge border', cls)}>{label}</span>
}

// ─── Preview Modal ────────────────────────────────────────────────────────────

function PreviewModal({ prompt: p, onClose }: { prompt: Prompt; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const handleCopy = () => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative w-full sm:max-w-2xl bg-bg-surface border border-border-strong rounded-t-2xl sm:rounded-2xl shadow-2xl animate-slide-up overflow-hidden max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-5 border-b border-border shrink-0">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-2">
              <CategoryBadge category={p.category} />
              <TrendBadge score={p.trendingScore} />
              <DifficultyBadge level={p.difficulty} />
            </div>
            <h3 className="text-base font-display font-semibold text-text-primary leading-snug">{p.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-border-strong text-text-muted hover:text-text-primary transition-all"
            aria-label="Close preview"
          >
            ✕
          </button>
        </div>

        {/* Prompt content */}
        <div className="flex-1 overflow-y-auto p-5">
          <pre className="text-xs font-mono text-text-secondary whitespace-pre-wrap leading-relaxed bg-bg-elevated rounded-xl p-4 border border-border">
            {p.content}
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 p-4 border-t border-border bg-bg-base/60 shrink-0">
          <span className="flex-1 text-xs font-mono text-text-muted">
            ~{p.estimatedTokens} tokens · @{p.author}
          </span>
          <button
            onClick={handleCopy}
            className={cn(
              'pp-btn-primary min-h-[40px] text-sm',
              copied && 'bg-emerald-600 hover:bg-emerald-600'
            )}
          >
            {copied ? '✓ Copied!' : '⎘ Copy Prompt'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Skeleton card ────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="bg-bg-surface border border-border rounded-xl p-5 flex flex-col gap-4 animate-pulse">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-bg-elevated rounded-md" />
          <div className="h-5 w-12 bg-bg-elevated rounded-md" />
        </div>
        <div className="h-7 w-8 bg-bg-elevated rounded" />
      </div>
      <div>
        <div className="h-5 w-3/4 bg-bg-elevated rounded mb-2" />
        <div className="h-4 w-full bg-bg-elevated rounded mb-1" />
        <div className="h-4 w-5/6 bg-bg-elevated rounded" />
      </div>
      <div className="h-14 bg-bg-elevated/60 rounded-lg" />
      <div className="flex gap-2">
        <div className="h-10 flex-1 bg-bg-elevated rounded-lg" />
        <div className="h-10 flex-1 bg-bg-elevated rounded-lg" />
        <div className="h-10 w-10 bg-bg-elevated rounded-lg" />
      </div>
    </div>
  )
}

// ─── Prompt Card ──────────────────────────────────────────────────────────────

interface PromptCardProps {
  prompt: Prompt
  isSaved: boolean
  isCopied: boolean
  onSave: (id: string) => void
  onCopy: (p: Prompt) => void
  onPreview: (p: Prompt) => void
}

function PromptCard({ prompt: p, isSaved, isCopied, onSave, onCopy, onPreview }: PromptCardProps) {
  const bestFor = p.bestFor ?? (p.model.includes('claude') ? ['Claude'] : ['ChatGPT'])

  return (
    <article className="group relative bg-bg-surface border border-border rounded-xl p-5 hover:border-violet-500/30 transition-all duration-200 flex flex-col gap-4">
      {/* Ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(139,92,246,0.07) 0%, transparent 60%)' }}
      />

      {/* Header: category + trend badge, score watermark */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={p.category} />
          <TrendBadge score={p.trendingScore} />
        </div>
        <div className="shrink-0 text-right select-none">
          <div
            className="text-3xl font-display font-black leading-none"
            style={{ color: 'rgba(139,92,246,0.20)' }}
          >
            {p.trendingScore}
          </div>
          <div className="text-[10px] font-mono text-text-muted/40 -mt-0.5">score</div>
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-base font-display font-semibold text-text-primary leading-snug mb-1.5">
          {p.title}
        </h3>
        <p className="text-sm text-text-secondary font-body leading-relaxed line-clamp-2">
          {p.description}
        </p>
      </div>

      {/* Why it's trending */}
      {p.whyTrending && (
        <div
          className="flex items-start gap-2 rounded-lg px-3 py-2.5 border"
          style={{
            background: 'rgba(139,92,246,0.06)',
            borderColor: 'rgba(139,92,246,0.15)',
          }}
        >
          <span className="text-violet-400 text-xs mt-px shrink-0">✦</span>
          <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(167,139,250,0.85)' }}>
            <span className="font-semibold text-violet-300">Why trending: </span>
            {p.whyTrending}
          </p>
        </div>
      )}

      {/* Best for */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-text-muted">Best for:</span>
        {bestFor.map(model => (
          <span
            key={model}
            className="text-xs font-mono px-2 py-0.5 rounded-md border border-border bg-bg-elevated text-text-secondary"
          >
            {model}
          </span>
        ))}
      </div>

      {/* Meta: difficulty · uses · tags */}
      <div className="flex items-center gap-3 flex-wrap">
        <DifficultyBadge level={p.difficulty} />
        <span className="text-xs font-mono text-text-muted">↑ {formatNumber(p.uses)} uses</span>
        <div className="flex gap-1 flex-wrap">
          {p.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-[11px] font-mono text-text-muted/70 bg-bg-elevated px-1.5 py-0.5 rounded border border-border/50"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
        <button
          onClick={() => onPreview(p)}
          className="flex-1 min-h-[42px] text-xs font-mono rounded-lg border border-border hover:border-border-strong bg-bg-elevated hover:bg-bg-overlay text-text-secondary hover:text-text-primary transition-all duration-150 active:scale-[0.98]"
        >
          Preview
        </button>
        <button
          onClick={() => onCopy(p)}
          className={cn(
            'flex-1 min-h-[42px] text-xs font-mono rounded-lg border transition-all duration-150 active:scale-[0.98]',
            isCopied
              ? 'border-emerald-500/40 bg-emerald-900/20 text-emerald-400'
              : 'border-violet-500/30 bg-violet-900/10 text-violet-400 hover:bg-violet-900/20 hover:border-violet-500/50'
          )}
        >
          {isCopied ? '✓ Copied!' : '⎘ Copy Prompt'}
        </button>
        <button
          onClick={() => onSave(p.id)}
          className={cn(
            'min-h-[42px] min-w-[42px] rounded-lg border text-sm transition-all duration-150 active:scale-[0.98]',
            isSaved
              ? 'border-amber-500/40 bg-amber-900/20 text-amber-400'
              : 'border-border hover:border-border-strong bg-bg-elevated text-text-muted hover:text-amber-400'
          )}
          aria-label={isSaved ? 'Unsave prompt' : 'Save prompt'}
        >
          {isSaved ? '★' : '☆'}
        </button>
      </div>
    </article>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TrendingPromptsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterId>('all')
  const [searchQuery, setSearchQuery]       = useState('')
  const [savedIds, setSavedIds]             = useState<Set<string>>(new Set(['p002', 'p001']))
  const [copiedId, setCopiedId]             = useState<string | null>(null)
  const [previewPrompt, setPreviewPrompt]   = useState<Prompt | null>(null)
  const [isLoading, setIsLoading]           = useState(true)
  const copyTimeoutRef                      = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  const filtered = sorted.filter(p => {
    const q = searchQuery.toLowerCase().trim()
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  const handleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    setCopiedId(p.id)
    copyTimeoutRef.current = setTimeout(() => setCopiedId(null), 1800)
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl mb-8 p-8 sm:p-12 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, transparent 50%, rgba(6,182,212,0.06) 100%)' }}
        />
        <div
          className="absolute -top-24 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'rgba(139,92,246,0.06)', filter: 'blur(60px)' }}
        />

        <div className="relative">
          <div className="flex items-center gap-2 mb-5">
            <div className="glow-dot" />
            <span className="text-xs font-mono text-emerald-400">Live Rankings · Updated in real-time</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-text-primary leading-tight mb-4">
            Trending AI Prompts,{' '}
            <span className="text-gradient-violet">Ranked by Real Usefulness</span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-body max-w-2xl leading-relaxed mb-8">
            Discover, copy, save, and test the highest-performing AI prompts — curated by real
            usage data from builders, marketers, developers, and AI operators worldwide.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#prompt-grid"
              className="pp-btn-primary min-h-[44px] text-sm sm:text-base px-6"
            >
              ↓ Explore Trending
            </a>
            <Link to="/submit" className="pp-btn-secondary min-h-[44px] text-sm sm:text-base px-6">
              + Submit Prompt
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sticky search + filters ──────────────────────────────────── */}
      <div className="sticky top-0 z-20 -mx-4 px-4 md:-mx-6 md:px-6 pt-1 pb-4 bg-bg-base/95 backdrop-blur-md">
        {/* Search bar */}
        <div className="relative mb-3">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted select-none pointer-events-none text-base">
            ⌕
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search prompts, workflows, categories…"
            className="pp-input pl-10 min-h-[44px]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-sm transition-colors"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category filter pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-0.5">
          {FILTER_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'shrink-0 min-h-[36px] px-4 py-1.5 rounded-full text-sm font-mono border transition-all duration-150 whitespace-nowrap active:scale-[0.97]',
                activeCategory === cat.id
                  ? 'bg-violet-500 border-violet-500 text-white'
                  : 'bg-bg-elevated border-border text-text-secondary hover:border-border-strong hover:text-text-primary'
              )}
              style={
                activeCategory === cat.id
                  ? { boxShadow: '0 0 16px rgba(139,92,246,0.35)' }
                  : undefined
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Stats row ────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-6" id="prompt-grid">
        <p className="text-xs font-mono text-text-muted">
          {isLoading ? (
            <span className="animate-pulse">Ranking fresh AI workflows…</span>
          ) : (
            <>
              <span className="text-text-secondary">{filtered.length}</span>
              {' '}prompt{filtered.length !== 1 ? 's' : ''} · ranked by trend score
            </>
          )}
        </p>
        <div className="flex items-center gap-2">
          <div className="glow-dot" />
          <span className="text-xs font-mono text-text-muted">Live</span>
        </div>
      </div>

      {/* ── Loading state ────────────────────────────────────────────── */}
      {isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[0, 1, 2, 3].map(i => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* ── Empty state ──────────────────────────────────────────────── */}
      {!isLoading && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <p className="text-text-secondary font-body mb-1.5">No prompts found.</p>
          <p className="text-text-muted text-sm font-body">
            Try another category or submit your own.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
            className="mt-6 pp-btn-secondary text-sm min-h-[40px]"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* ── Prompt cards grid ────────────────────────────────────────── */}
      {!isLoading && filtered.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map(p => (
            <PromptCard
              key={p.id}
              prompt={p}
              isSaved={savedIds.has(p.id)}
              isCopied={copiedId === p.id}
              onSave={handleSave}
              onCopy={handleCopy}
              onPreview={setPreviewPrompt}
            />
          ))}
        </div>
      )}

      {/* ── Preview modal ────────────────────────────────────────────── */}
      {previewPrompt && (
        <PreviewModal prompt={previewPrompt} onClose={() => setPreviewPrompt(null)} />
      )}
    </div>
  )
}
