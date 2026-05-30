import { useState } from 'react'
import { PROMPTS, type Prompt } from '../data/prompts'
import { formatNumber, cn } from '../lib/utils'
import { exportPrompt } from '../lib/export'

const sorted = [...PROMPTS].sort((a, b) => b.trendingScore - a.trendingScore)

function TrendBadge({ score }: { score: number }) {
  if (score >= 95) return <span className="pp-badge bg-rose-500/20 text-rose-400 border-rose-500/30">🔥 VIRAL</span>
  if (score >= 85) return <span className="pp-badge bg-orange-500/20 text-orange-400 border-orange-500/30">↑ HOT</span>
  if (score >= 70) return <span className="pp-badge bg-amber-500/20 text-amber-400 border-amber-500/30">↗ RISING</span>
  return <span className="pp-badge bg-bg-elevated text-text-muted border-border">— STEADY</span>
}

function ScoreBar({ score }: { score: number }) {
  const color = score >= 90 ? 'bg-rose-500' : score >= 75 ? 'bg-amber-500' : 'bg-violet-500'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 bg-bg-overlay rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs font-mono text-text-secondary w-8 text-right">{score}</span>
    </div>
  )
}

export default function TrendingPromptsPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set(['p002', 'p001']))
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    setCopiedId(p.id)
    setTimeout(() => setCopiedId(null), 1800)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-5 animate-slide-up">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-3">
        <div className="flex-1">
          <h2 className="pp-section-title text-xl">Trending Prompts</h2>
          <p className="text-xs font-mono text-text-muted mt-0.5">Ranked by trending score — updated in real-time</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
          <div className="glow-dot" />
          <span>Live · {sorted.length} prompts ranked</span>
        </div>
      </div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {sorted.slice(0, 3).map((p, i) => {
          const rank = i + 1
          const rankColors = ['text-amber-400', 'text-slate-300', 'text-orange-600']
          const rankBg = ['border-amber-500/30 bg-amber-900/10', 'border-slate-500/30 bg-slate-900/10', 'border-orange-700/30 bg-orange-900/10']
          return (
            <div key={p.id} className={cn('pp-card border relative overflow-hidden', rankBg[i])}>
              <div className="absolute top-3 right-3 text-3xl font-display font-black opacity-10">{rank}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className={cn('text-2xl font-display font-black', rankColors[i])}>#{rank}</span>
                <TrendBadge score={p.trendingScore} />
              </div>
              <div className="text-sm font-display font-semibold text-text-primary mb-1 line-clamp-2">{p.title}</div>
              <ScoreBar score={p.trendingScore} />
              <div className="flex items-center gap-2 mt-2 text-xs font-mono text-text-muted">
                <span>↑ {formatNumber(p.uses)}</span>
                <span>★ {formatNumber(p.saves)}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Full leaderboard */}
      <div>
        <div className="pp-label mb-3">FULL RANKING</div>
        <div className="space-y-2">
          {sorted.map((p, i) => (
            <div
              key={p.id}
              className="pp-card-hover flex items-start gap-4"
            >
              {/* Rank */}
              <div className="shrink-0 w-8 text-center">
                <span className={cn(
                  'text-lg font-display font-bold',
                  i === 0 ? 'text-amber-400' :
                  i === 1 ? 'text-slate-300' :
                  i === 2 ? 'text-orange-600' :
                  'text-text-muted'
                )}>
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <TrendBadge score={p.trendingScore} />
                  <span className="pp-badge-violet">{p.category}</span>
                  <span className="pp-badge-cyan">{p.model}</span>
                </div>
                <div className="text-sm font-display font-semibold text-text-primary">{p.title}</div>
                <p className="text-xs text-text-secondary mt-0.5 line-clamp-1 font-body">{p.description}</p>

                {/* Score bar */}
                <div className="mt-2 max-w-xs">
                  <ScoreBar score={p.trendingScore} />
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[11px] font-mono text-text-muted">
                  <span>↑ {formatNumber(p.uses)} uses</span>
                  <span>★ {formatNumber(p.saves)} saves</span>
                  <span>~{p.estimatedTokens} tokens</span>
                  <span>@{p.author}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="shrink-0 flex flex-col gap-1.5">
                <button
                  onClick={() => handleSave(p.id)}
                  className={cn(
                    'text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-150',
                    savedIds.has(p.id)
                      ? 'border-violet-500/50 text-violet-400 bg-violet-900/20'
                      : 'border-border hover:border-violet-500/30 text-text-muted hover:text-violet-400'
                  )}
                >
                  {savedIds.has(p.id) ? '★ Saved' : '☆ Save'}
                </button>
                <button
                  onClick={() => handleCopy(p)}
                  className={cn(
                    'text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-150',
                    copiedId === p.id
                      ? 'border-emerald-500/50 text-emerald-400'
                      : 'border-border hover:border-border-strong text-text-muted hover:text-text-primary'
                  )}
                >
                  {copiedId === p.id ? '✓' : '⎘'}
                </button>
                <button
                  onClick={() => exportPrompt(p)}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg border border-border hover:border-cyan-500/30 text-text-muted hover:text-cyan-400 transition-all"
                >
                  ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
