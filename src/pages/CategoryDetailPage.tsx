import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ALL_PROMPTS, CATEGORIES } from '../data/index'
import type { Prompt } from '../data/prompts'
import { formatNumber, cn } from '../lib/utils'
import { isPromptSaved, savePrompt, unsavePrompt } from '../lib/storage'

// ─── Color maps ───────────────────────────────────────────────────────────────

const COLOR_MAP: Record<string, string> = {
  violet:  'text-violet-400 bg-violet-500/10 border-violet-500/30',
  cyan:    'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  rose:    'text-rose-400 bg-rose-500/10 border-rose-500/30',
  amber:   'text-amber-400 bg-amber-500/10 border-amber-500/30',
  pink:    'text-pink-400 bg-pink-500/10 border-pink-500/30',
  blue:    'text-blue-400 bg-blue-500/10 border-blue-500/30',
  orange:  'text-orange-400 bg-orange-500/10 border-orange-500/30',
  teal:    'text-teal-400 bg-teal-500/10 border-teal-500/30',
}

// ─── Difficulty badge ─────────────────────────────────────────────────────────

function DifficultyBadge({ level }: { level: Prompt['difficulty'] }) {
  const map = {
    beginner:     { label: '◉ Beginner',     cls: 'bg-emerald-900/30 text-emerald-400 border-emerald-500/20' },
    intermediate: { label: '◈ Intermediate', cls: 'bg-amber-900/30 text-amber-400 border-amber-500/20' },
    advanced:     { label: '◆ Advanced',     cls: 'bg-rose-900/30 text-rose-400 border-rose-500/20' },
  }
  const { label, cls } = map[level] ?? map.beginner
  return <span className={cn('pp-badge border', cls)}>{label}</span>
}

// ─── Prompt mini card ─────────────────────────────────────────────────────────

interface PromptCardProps {
  prompt: Prompt
  colorCls: string
  onCopy: (p: Prompt) => void
  copiedId: string | null
}

function PromptMiniCard({ prompt: p, colorCls, onCopy, copiedId }: PromptCardProps) {
  const [saved, setSaved] = useState(() => isPromptSaved(p.id))

  const handleSave = () => {
    if (saved) {
      unsavePrompt(p.id)
      setSaved(false)
    } else {
      savePrompt(p.id)
      setSaved(true)
    }
  }

  return (
    <article className="group relative bg-bg-surface border border-border rounded-xl p-5 hover:border-border-strong transition-all duration-200 flex flex-col gap-3">
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(139,92,246,0.05) 0%, transparent 60%)' }}
      />

      {/* Badges row */}
      <div className="relative flex flex-wrap items-center gap-2">
        <DifficultyBadge level={p.difficulty} />
        {p.trendingScore >= 85 && (
          <span className="pp-badge bg-rose-500/10 text-rose-400 border border-rose-500/20">↑ HOT</span>
        )}
      </div>

      {/* Title + description */}
      <div className="relative">
        <Link to={`/prompt/${p.id}`} className="group/title">
          <h3 className="text-sm font-display font-semibold text-text-primary leading-snug mb-1 group-hover/title:text-violet-300 transition-colors">
            {p.title}
          </h3>
        </Link>
        <p className="text-xs font-body text-text-secondary leading-relaxed line-clamp-2">
          {p.description}
        </p>
      </div>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-1">
        {p.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] font-mono text-text-muted/70 bg-bg-elevated px-1.5 py-0.5 rounded border border-border/50">
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="relative text-[11px] font-mono text-text-muted flex gap-3">
        <span>↑ {formatNumber(p.uses)} uses</span>
        {p.saves > 0 && <span>★ {formatNumber(p.saves)}</span>}
      </div>

      {/* Actions */}
      <div className="relative flex items-center gap-2 pt-2 border-t border-border/50">
        <Link
          to={`/prompt/${p.id}`}
          className="flex-1 min-h-[38px] flex items-center justify-center text-xs font-mono rounded-lg border border-border hover:border-border-strong bg-bg-elevated hover:bg-bg-overlay text-text-secondary hover:text-text-primary transition-all duration-150"
        >
          View Detail
        </Link>
        <button
          onClick={() => onCopy(p)}
          className={cn(
            'flex-1 min-h-[38px] text-xs font-mono rounded-lg border transition-all duration-150 active:scale-[0.98]',
            copiedId === p.id
              ? 'border-emerald-500/40 bg-emerald-900/20 text-emerald-400'
              : 'border-violet-500/30 bg-violet-900/10 text-violet-400 hover:bg-violet-900/20 hover:border-violet-500/50'
          )}
        >
          {copiedId === p.id ? '✓ Copied!' : '⎘ Copy'}
        </button>
        <button
          onClick={handleSave}
          className={cn(
            'min-h-[38px] min-w-[38px] rounded-lg border text-sm transition-all duration-150 active:scale-[0.98]',
            saved
              ? 'border-amber-500/40 bg-amber-900/20 text-amber-400'
              : 'border-border hover:border-border-strong bg-bg-elevated text-text-muted hover:text-amber-400'
          )}
          aria-label={saved ? 'Unsave' : 'Save'}
        >
          {saved ? '★' : '☆'}
        </button>
      </div>
    </article>
  )
}

// ─── Sort options ─────────────────────────────────────────────────────────────

type SortOption = 'trending' | 'newest' | 'most-saved'

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'trending',   label: 'Trending' },
  { id: 'newest',     label: 'Newest' },
  { id: 'most-saved', label: 'Most Saved' },
]

function sortPrompts(prompts: Prompt[], sort: SortOption): Prompt[] {
  switch (sort) {
    case 'trending':   return [...prompts].sort((a, b) => (b.trendingScore ?? 0) - (a.trendingScore ?? 0))
    case 'newest':     return [...prompts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    case 'most-saved': return [...prompts].sort((a, b) => (b.saves ?? 0) - (a.saves ?? 0))
  }
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CategoryDetailPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = CATEGORIES.find(c => c.id === categoryId)
  const rawPrompts = (ALL_PROMPTS ?? []).filter(p => p.category === categoryId)

  const [sort, setSort] = useState<SortOption>('trending')
  const [search, setSearch] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  if (!category) {
    return (
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-2">Category not found</h2>
          <p className="text-text-secondary font-body text-sm mb-6">
            That category doesn't exist. Browse all categories below.
          </p>
          <Link to="/categories" className="pp-btn-primary text-sm min-h-[40px]">
            ← Browse Categories
          </Link>
        </div>
      </div>
    )
  }

  const colorCls = COLOR_MAP[category.color] ?? COLOR_MAP.violet

  const filtered = sortPrompts(
    rawPrompts.filter(p => {
      const q = search.toLowerCase().trim()
      if (!q) return true
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      )
    }),
    sort
  )

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    setCopiedId(p.id)
    setTimeout(() => setCopiedId(null), 1800)
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">

      {/* Back link */}
      <div className="mb-5">
        <Link to="/categories" className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1.5">
          ← Categories
        </Link>
      </div>

      {/* Category header */}
      <section className="relative overflow-hidden rounded-2xl mb-7 p-7 sm:p-9 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative flex items-start gap-5">
          <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center text-2xl border shrink-0 font-display font-black', colorCls)}>
            {category.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-display font-black text-text-primary mb-1.5 leading-tight">
              {category.label}
            </h1>
            <p className="text-sm text-text-secondary font-body leading-relaxed mb-3 max-w-lg">
              {category.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn('text-xs font-mono font-semibold px-2.5 py-1 rounded-full border', colorCls)}>
                {rawPrompts.length} prompts
              </span>
              {category.topTags.slice(0, 4).map(tag => (
                <span key={tag} className="text-[11px] font-mono text-text-muted/70 bg-bg-elevated px-1.5 py-0.5 rounded border border-border/50">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search + sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">⌕</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={`Search ${category.label} prompts…`}
            className="pp-input pl-9 min-h-[42px] w-full"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-sm transition-colors"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex gap-1.5 shrink-0">
          {SORT_OPTIONS.map(opt => (
            <button
              key={opt.id}
              onClick={() => setSort(opt.id)}
              className={cn(
                'min-h-[42px] px-3.5 text-xs font-mono rounded-lg border transition-all duration-150',
                sort === opt.id
                  ? 'bg-violet-600 border-violet-600 text-white'
                  : 'bg-bg-elevated border-border text-text-secondary hover:border-border-strong hover:text-text-primary'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Count row */}
      <p className="text-xs font-mono text-text-muted mb-4">
        <span className="text-text-secondary">{filtered.length}</span> prompt{filtered.length !== 1 ? 's' : ''}
        {search && <> matching "<span className="text-text-primary">{search}</span>"</>}
      </p>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <p className="text-text-secondary font-body mb-1.5">No prompts found.</p>
          <button
            onClick={() => setSearch('')}
            className="mt-4 pp-btn-secondary text-sm min-h-[40px]"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Prompt grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map(p => (
            <PromptMiniCard
              key={p.id}
              prompt={p}
              colorCls={colorCls}
              onCopy={handleCopy}
              copiedId={copiedId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
