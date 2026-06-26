import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { USERS, ALL_PROMPTS } from '../data/index'
import type { Prompt } from '../data/prompts'
import { isPromptSaved, savePrompt, unsavePrompt } from '../lib/storage'
import { formatNumber, cn } from '../lib/utils'

const COLOR_MAP: Record<string, string> = {
  violet:  'text-violet-400 bg-violet-500/10 border-violet-500/30',
  cyan:    'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  rose:    'text-rose-400 bg-rose-500/10 border-rose-500/30',
  amber:   'text-amber-400 bg-amber-500/10 border-amber-500/30',
}

const CATEGORY_COLORS: Record<string, string> = {
  coding:       'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  marketing:    'text-rose-400 bg-rose-500/10 border-rose-500/30',
  business:     'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'ai-agent':   'text-violet-400 bg-violet-500/10 border-violet-500/30',
  design:       'text-pink-400 bg-pink-500/10 border-pink-500/30',
  content:      'text-orange-400 bg-orange-500/10 border-orange-500/30',
  automation:   'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  solana:       'text-violet-400 bg-violet-500/10 border-violet-500/30',
  research:     'text-blue-400 bg-blue-500/10 border-blue-500/30',
  productivity: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
  sales:        'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  seo:          'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'social-media': 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  startups:     'text-orange-400 bg-orange-500/10 border-orange-500/30',
  career:       'text-amber-400 bg-amber-500/10 border-amber-500/30',
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-bg-elevated border border-border rounded-xl px-3 py-2.5 text-center min-w-[70px]">
      <div className="text-base font-display font-bold text-text-primary">
        {typeof value === 'number' ? formatNumber(value) : value}
      </div>
      <div className="text-[10px] font-mono text-text-muted mt-0.5">{label}</div>
    </div>
  )
}

// ─── Prompt mini card ─────────────────────────────────────────────────────────

function PromptMiniCard({ prompt: p, copiedId, onCopy }: { prompt: Prompt; copiedId: string | null; onCopy: (p: Prompt) => void }) {
  const [saved, setSaved] = useState(() => isPromptSaved(p.id))
  const catColor = CATEGORY_COLORS[p.category] ?? 'text-text-muted bg-bg-elevated border-border'

  const handleSave = () => {
    if (saved) { unsavePrompt(p.id); setSaved(false) }
    else       { savePrompt(p.id);   setSaved(true) }
  }

  return (
    <article className="group bg-bg-surface border border-border rounded-xl p-4 hover:border-border-strong transition-all duration-200 flex flex-col gap-2.5">
      <div className="flex flex-wrap items-center gap-2">
        <span className={cn('text-[11px] font-mono px-2 py-0.5 rounded-full border capitalize', catColor)}>
          {p.category}
        </span>
        {p.trendingScore >= 85 && (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border bg-rose-500/10 text-rose-400 border-rose-500/20">
            ↑ HOT
          </span>
        )}
      </div>
      <Link to={`/prompt/${p.id}`} className="group/title">
        <h3 className="text-sm font-display font-semibold text-text-primary leading-snug group-hover/title:text-violet-300 transition-colors line-clamp-2">
          {p.title}
        </h3>
      </Link>
      <p className="text-xs font-body text-text-secondary leading-relaxed line-clamp-2">
        {p.description}
      </p>
      <div className="flex items-center gap-2 pt-1.5 border-t border-border/50">
        <Link
          to={`/prompt/${p.id}`}
          className="flex-1 min-h-[34px] flex items-center justify-center text-xs font-mono rounded-lg border border-border hover:border-border-strong bg-bg-elevated hover:bg-bg-overlay text-text-secondary hover:text-text-primary transition-all"
        >
          View
        </Link>
        <button
          onClick={() => onCopy(p)}
          className={cn(
            'flex-1 min-h-[34px] text-xs font-mono rounded-lg border transition-all active:scale-[0.98]',
            copiedId === p.id
              ? 'border-emerald-500/40 bg-emerald-900/20 text-emerald-400'
              : 'border-violet-500/30 bg-violet-900/10 text-violet-400 hover:bg-violet-900/20'
          )}
        >
          {copiedId === p.id ? '✓' : '⎘'}
        </button>
        <button
          onClick={handleSave}
          className={cn(
            'min-h-[34px] min-w-[34px] rounded-lg border text-xs transition-all active:scale-[0.98]',
            saved
              ? 'border-amber-500/40 bg-amber-900/20 text-amber-400'
              : 'border-border bg-bg-elevated text-text-muted hover:text-amber-400'
          )}
        >
          {saved ? '★' : '☆'}
        </button>
      </div>
    </article>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>()
  const user = USERS.find(u => u.username === username)
  const userPrompts = (ALL_PROMPTS ?? []).filter(
    p => p.authorUsername === username || p.author === username
  )

  const [copiedId, setCopiedId] = useState<string | null>(null)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-2">User not found</h2>
          <p className="text-text-secondary font-body text-sm mb-6">
            @{username} doesn't exist in the PromptPalace directory.
          </p>
          <Link to="/trending" className="pp-btn-primary text-sm min-h-[40px]">
            ← Browse Prompts
          </Link>
        </div>
      </div>
    )
  }

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    setCopiedId(p.id)
    copyTimeoutRef.current = setTimeout(() => setCopiedId(null), 1800)
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">

      {/* Profile header */}
      <section className="relative overflow-hidden rounded-2xl mb-7 p-7 sm:p-9 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.09) 0%, transparent 55%)' }}
        />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">

          {/* Avatar */}
          <div className="w-16 h-16 rounded-2xl bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-3xl shrink-0">
            {user.avatar}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-xl font-display font-black text-text-primary">{user.displayName}</h1>
              {user.verified && (
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/25">
                  ✓ VERIFIED
                </span>
              )}
              {user.featured && (
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-400 border border-violet-500/25">
                  FEATURED
                </span>
              )}
            </div>
            <p className="text-xs font-mono text-text-muted mb-2">@{user.username} · {user.role}</p>
            <p className="text-sm font-body text-text-secondary leading-relaxed max-w-lg">
              {user.bio}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative flex flex-wrap gap-2.5 mt-5">
          <StatCard label="Prompts" value={userPrompts.length || user.promptCount} />
          <StatCard label="Followers" value={user.followers} />
          <StatCard label="Following" value={user.following} />
          <StatCard label="Total Likes" value={user.totalLikes} />
          <StatCard label="Total Saves" value={user.totalSaves} />
        </div>

        {/* Top categories */}
        {user.topCategories.length > 0 && (
          <div className="relative flex flex-wrap gap-2 mt-4">
            {user.topCategories.map(cat => {
              const cls = CATEGORY_COLORS[cat] ?? 'text-text-muted bg-bg-elevated border-border'
              return (
                <Link
                  key={cat}
                  to={`/category/${cat}`}
                  className={cn('text-xs font-mono px-2.5 py-1 rounded-full border capitalize hover:opacity-80 transition-opacity', cls)}
                >
                  {cat}
                </Link>
              )
            })}
          </div>
        )}
      </section>

      {/* Prompts grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="pp-label">PROMPTS</span>
            <span className="text-[10px] font-mono text-text-muted bg-bg-elevated border border-border px-1.5 py-0.5 rounded">
              {userPrompts.length}
            </span>
          </div>
        </div>

        {userPrompts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-4xl mb-4 opacity-20 select-none">⊘</div>
            <p className="text-text-secondary font-body text-sm">No prompts found for this user.</p>
          </div>
        )}

        {userPrompts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {userPrompts.map(p => (
              <PromptMiniCard
                key={p.id}
                prompt={p}
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
