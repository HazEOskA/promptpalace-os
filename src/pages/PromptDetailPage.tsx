import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPromptById, CATEGORIES } from '../data/index'
import { getTrendLabel, getTrendColor } from '../lib/scoring'
import { isPromptSaved, savePrompt, unsavePrompt, isPromptLiked, likePrompt, unlikePrompt } from '../lib/storage'
import { formatNumber, cn } from '../lib/utils'
import type { Prompt } from '../data/prompts'

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

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ icon, value, label }: { icon: string; value: number | string; label: string }) {
  return (
    <div className="bg-bg-elevated border border-border rounded-xl px-4 py-3 flex flex-col items-center gap-1 text-center min-w-[80px]">
      <span className="text-lg">{icon}</span>
      <span className="text-base font-display font-bold text-text-primary">
        {typeof value === 'number' ? formatNumber(value) : value}
      </span>
      <span className="text-[10px] font-mono text-text-muted">{label}</span>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PromptDetailPage() {
  const { id } = useParams<{ id: string }>()
  const prompt = getPromptById(id ?? '')

  const [saved, setSaved] = useState(() => (id ? isPromptSaved(id) : false))
  const [liked, setLiked] = useState(() => (id ? isPromptLiked(id) : false))
  const [copied, setCopied] = useState(false)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current) }, [])

  if (!prompt) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-2">Prompt not found</h2>
          <p className="text-text-secondary font-body text-sm mb-6">
            This prompt doesn't exist or may have been removed.
          </p>
          <Link to="/trending" className="pp-btn-primary text-sm min-h-[40px]">
            ← Browse Trending
          </Link>
        </div>
      </div>
    )
  }

  const category = CATEGORIES.find(c => c.id === prompt.category)
  const colorCls = category ? (COLOR_MAP[category.color] ?? COLOR_MAP.violet) : COLOR_MAP.violet
  const trendScore = prompt.trendScore ?? prompt.trendingScore ?? 0
  const trendLabel = getTrendLabel(trendScore)
  const trendColor = getTrendColor(trendLabel)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content).catch(() => {})
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    setCopied(true)
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 1800)
  }

  const handleSave = () => {
    if (saved) {
      unsavePrompt(prompt.id)
      setSaved(false)
    } else {
      savePrompt(prompt.id)
      setSaved(true)
    }
  }

  const handleLike = () => {
    if (liked) {
      unlikePrompt(prompt.id)
      setLiked(false)
    } else {
      likePrompt(prompt.id)
      setLiked(true)
    }
  }

  const models = prompt.modelCompatibility ?? (prompt.model ? [prompt.model] : [])
  const bestFor = prompt.bestFor ?? models

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-5 text-xs font-mono text-text-muted">
        <Link to="/trending" className="hover:text-text-secondary transition-colors">Trending</Link>
        <span>›</span>
        {category && (
          <>
            <Link to={`/category/${category.id}`} className="hover:text-text-secondary transition-colors">
              {category.label}
            </Link>
            <span>›</span>
          </>
        )}
        <span className="text-text-secondary line-clamp-1">{prompt.title}</span>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl mb-6 p-7 sm:p-9 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, transparent 55%, rgba(6,182,212,0.05) 100%)' }}
        />
        <div className="relative">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={cn('pp-badge border text-xs font-mono', trendColor)}>
              {trendLabel === 'VIRAL' ? '🔥' : trendLabel === 'HOT' ? '↑' : trendLabel === 'RISING' ? '↗' : '—'} {trendLabel}
            </span>
            <DifficultyBadge level={prompt.difficulty} />
            {category && (
              <span className={cn('pp-badge border text-xs font-mono', colorCls)}>
                {category.icon} {category.label}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-display font-black text-text-primary leading-tight mb-3">
            {prompt.title}
          </h1>
          <p className="text-sm sm:text-base text-text-secondary font-body leading-relaxed max-w-2xl mb-6">
            {prompt.description}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3">
            <StatCard icon="↑" value={prompt.likes ?? 0} label="Likes" />
            <StatCard icon="★" value={prompt.saves ?? 0} label="Saves" />
            <StatCard icon="⎘" value={prompt.copies ?? prompt.uses ?? 0} label="Copies" />
            {prompt.views != null && <StatCard icon="◎" value={prompt.views} label="Views" />}
          </div>
        </div>
      </section>

      {/* Metadata row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-bg-surface border border-border rounded-xl p-3">
          <div className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-wider">Author</div>
          <div className="text-sm font-body font-medium text-text-primary">
            @{prompt.authorUsername ?? prompt.author}
          </div>
        </div>
        {models.length > 0 && (
          <div className="bg-bg-surface border border-border rounded-xl p-3">
            <div className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-wider">Models</div>
            <div className="text-xs font-mono text-text-secondary line-clamp-1">{models.slice(0, 2).join(', ')}</div>
          </div>
        )}
        {prompt.estimatedTime && (
          <div className="bg-bg-surface border border-border rounded-xl p-3">
            <div className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-wider">Est. Time</div>
            <div className="text-xs font-mono text-text-secondary">{prompt.estimatedTime}</div>
          </div>
        )}
        {prompt.outputType && (
          <div className="bg-bg-surface border border-border rounded-xl p-3">
            <div className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-wider">Output</div>
            <div className="text-xs font-mono text-text-secondary">{prompt.outputType}</div>
          </div>
        )}
        {!prompt.estimatedTime && !prompt.outputType && (
          <div className="bg-bg-surface border border-border rounded-xl p-3">
            <div className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-wider">Tokens</div>
            <div className="text-xs font-mono text-text-secondary">~{prompt.estimatedTokens}</div>
          </div>
        )}
      </div>

      {/* Why Trending section */}
      {prompt.whyTrending && (
        <div
          className="flex items-start gap-3 rounded-xl px-4 py-3.5 border mb-6"
          style={{ background: 'rgba(139,92,246,0.06)', borderColor: 'rgba(139,92,246,0.20)' }}
        >
          <span className="text-violet-400 text-sm mt-0.5 shrink-0">✦</span>
          <div>
            <div className="text-xs font-mono font-semibold text-violet-300 mb-1">Why Trending</div>
            <p className="text-sm font-body leading-relaxed text-violet-200/80">{prompt.whyTrending}</p>
          </div>
        </div>
      )}

      {/* Prompt content */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-sm font-mono font-semibold text-text-secondary uppercase tracking-wider">Prompt</h2>
          <span className="text-[11px] font-mono text-text-muted">~{prompt.estimatedTokens} tokens</span>
        </div>
        <div className="relative rounded-xl bg-bg-elevated border border-border overflow-hidden">
          {/* Code header bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-overlay/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-[10px] font-mono text-text-muted">prompt.txt</span>
          </div>
          <pre className="text-xs font-mono text-text-secondary whitespace-pre-wrap leading-relaxed p-5 max-h-96 overflow-y-auto">
            {prompt.content}
          </pre>
        </div>
      </div>

      {/* Tags */}
      {prompt.tags.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2.5">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {prompt.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-bg-elevated border border-border text-text-secondary hover:text-text-primary transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Best For / Use Case */}
      {(bestFor.length > 0 || prompt.useCase) && (
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {bestFor.length > 0 && (
            <div className="bg-bg-surface border border-border rounded-xl p-4">
              <h2 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">Best For</h2>
              <div className="flex flex-wrap gap-2">
                {bestFor.map(item => (
                  <span key={item} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-bg-elevated border border-border text-text-secondary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {prompt.useCase && (
            <div className="bg-bg-surface border border-border rounded-xl p-4">
              <h2 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">Use Case</h2>
              <p className="text-sm font-body text-text-secondary leading-relaxed">{prompt.useCase}</p>
            </div>
          )}
        </div>
      )}

      {/* Action buttons */}
      <div className="sticky bottom-0 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 bg-bg-base/95 backdrop-blur-md border-t border-border flex items-center gap-3">
        <button
          onClick={handleCopy}
          className={cn(
            'flex-1 pp-btn-primary min-h-[46px] text-sm sm:text-base transition-all duration-150',
            copied && 'bg-emerald-600 hover:bg-emerald-600 border-emerald-600'
          )}
        >
          {copied ? '✓ Copied!' : '⎘ Copy Prompt'}
        </button>
        <button
          onClick={handleSave}
          className={cn(
            'min-h-[46px] px-5 rounded-xl border text-sm font-mono font-medium transition-all duration-150 active:scale-[0.97]',
            saved
              ? 'border-amber-500/40 bg-amber-900/20 text-amber-400'
              : 'pp-btn-secondary'
          )}
        >
          {saved ? '★ Saved' : '☆ Save'}
        </button>
        <button
          onClick={handleLike}
          className={cn(
            'min-h-[46px] min-w-[46px] rounded-xl border text-sm transition-all duration-150 active:scale-[0.97]',
            liked
              ? 'border-rose-500/40 bg-rose-900/20 text-rose-400'
              : 'border-border hover:border-border-strong bg-bg-elevated text-text-muted hover:text-rose-400'
          )}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? '♥' : '♡'}
        </button>
      </div>
    </div>
  )
}
