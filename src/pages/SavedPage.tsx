import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ALL_PROMPTS } from '../data/index'
import type { Prompt } from '../data/prompts'
import { getSavedIds, unsavePrompt } from '../lib/storage'
import { formatNumber, cn } from '../lib/utils'

const CATEGORY_COLORS: Record<string, string> = {
  coding:         'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  marketing:      'text-rose-400 bg-rose-500/10 border-rose-500/30',
  business:       'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'ai-agent':     'text-violet-400 bg-violet-500/10 border-violet-500/30',
  design:         'text-pink-400 bg-pink-500/10 border-pink-500/30',
  content:        'text-orange-400 bg-orange-500/10 border-orange-500/30',
  automation:     'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  solana:         'text-violet-400 bg-violet-500/10 border-violet-500/30',
  research:       'text-blue-400 bg-blue-500/10 border-blue-500/30',
  productivity:   'text-teal-400 bg-teal-500/10 border-teal-500/30',
  sales:          'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  seo:            'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'social-media': 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  startups:       'text-orange-400 bg-orange-500/10 border-orange-500/30',
  career:         'text-amber-400 bg-amber-500/10 border-amber-500/30',
  writing:        'text-amber-400 bg-amber-500/10 border-amber-500/30',
}

// ─── Saved prompt card ────────────────────────────────────────────────────────

interface SavedCardProps {
  prompt: Prompt
  copiedId: string | null
  onCopy: (p: Prompt) => void
  onUnsave: (id: string) => void
}

function SavedCard({ prompt: p, copiedId, onCopy, onUnsave }: SavedCardProps) {
  const catColor = CATEGORY_COLORS[p.category] ?? 'text-text-muted bg-bg-elevated border-border'

  return (
    <article className="group relative bg-bg-surface border border-border rounded-xl p-5 hover:border-border-strong transition-all duration-200 flex flex-col gap-3">
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(139,92,246,0.05) 0%, transparent 60%)' }}
      />

      {/* Badges */}
      <div className="relative flex flex-wrap items-center gap-2">
        <span className={cn('text-[11px] font-mono px-2 py-0.5 rounded-full border capitalize', catColor)}>
          {p.category}
        </span>
        {p.trendingScore >= 85 && (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border bg-rose-500/10 text-rose-400 border-rose-500/20">
            ↑ HOT
          </span>
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
      {p.tags.length > 0 && (
        <div className="relative flex flex-wrap gap-1">
          {p.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-mono text-text-muted/60 bg-bg-elevated px-1.5 py-0.5 rounded border border-border/50">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="relative flex items-center gap-3 text-[11px] font-mono text-text-muted">
        <span>@{p.authorUsername ?? p.author}</span>
        <span>↑ {formatNumber(p.uses)} uses</span>
      </div>

      {/* Actions */}
      <div className="relative flex items-center gap-2 pt-2 border-t border-border/50">
        <Link
          to={`/prompt/${p.id}`}
          className="flex-1 min-h-[38px] flex items-center justify-center text-xs font-mono rounded-lg border border-border hover:border-border-strong bg-bg-elevated hover:bg-bg-overlay text-text-secondary hover:text-text-primary transition-all"
        >
          View
        </Link>
        <button
          onClick={() => onCopy(p)}
          className={cn(
            'flex-1 min-h-[38px] text-xs font-mono rounded-lg border transition-all active:scale-[0.98]',
            copiedId === p.id
              ? 'border-emerald-500/40 bg-emerald-900/20 text-emerald-400'
              : 'border-violet-500/30 bg-violet-900/10 text-violet-400 hover:bg-violet-900/20'
          )}
        >
          {copiedId === p.id ? '✓ Copied!' : '⎘ Copy'}
        </button>
        <button
          onClick={() => onUnsave(p.id)}
          className="min-h-[38px] min-w-[38px] rounded-lg border border-amber-500/40 bg-amber-900/20 text-amber-400 hover:bg-rose-900/20 hover:text-rose-400 hover:border-rose-500/40 text-sm transition-all active:scale-[0.98]"
          aria-label="Unsave"
          title="Remove from saved"
        >
          ★
        </button>
      </div>
    </article>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState<string[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setSavedIds(getSavedIds())
  }, [])

  const savedPrompts = (ALL_PROMPTS ?? []).filter(p => savedIds.includes(p.id))

  const handleUnsave = (id: string) => {
    unsavePrompt(id)
    setSavedIds(prev => prev.filter(sid => sid !== id))
  }

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    setCopiedId(p.id)
    copyTimeoutRef.current = setTimeout(() => setCopiedId(null), 1800)
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">

      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl mb-7 p-7 sm:p-8 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, transparent 55%)' }}
        />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-400 text-lg">★</span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Your Collection</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-text-primary leading-tight">
              Saved Prompts
            </h1>
            {savedPrompts.length > 0 && (
              <p className="text-sm font-body text-text-secondary mt-1">
                {savedPrompts.length} prompt{savedPrompts.length !== 1 ? 's' : ''} saved to your library
              </p>
            )}
          </div>
          {savedPrompts.length > 0 && (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-3xl font-display font-black" style={{ color: 'rgba(245,158,11,0.25)' }}>
                {savedPrompts.length}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Empty state */}
      {savedPrompts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-28 text-center">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-border bg-bg-elevated select-none">
            ☆
          </div>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-2">No saved prompts yet</h2>
          <p className="text-sm font-body text-text-secondary leading-relaxed max-w-sm mb-6">
            Save prompts by clicking the ★ button on any prompt card. They'll appear here for quick access.
          </p>
          <Link to="/trending" className="pp-btn-primary min-h-[42px] text-sm">
            Browse Trending Prompts →
          </Link>
        </div>
      )}

      {/* Saved prompts grid */}
      {savedPrompts.length > 0 && (
        <>
          <p className="text-xs font-mono text-text-muted mb-4">
            <span className="text-text-secondary">{savedPrompts.length}</span> saved prompt{savedPrompts.length !== 1 ? 's' : ''}
            {' '}· click ★ to remove
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {savedPrompts.map(p => (
              <SavedCard
                key={p.id}
                prompt={p}
                copiedId={copiedId}
                onCopy={handleCopy}
                onUnsave={handleUnsave}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
