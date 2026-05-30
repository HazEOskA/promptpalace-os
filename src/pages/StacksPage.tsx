import { Link } from 'react-router-dom'
import { STACKS } from '../data/index'
import { formatNumber, cn } from '../lib/utils'

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

const HOVER_BORDER_MAP: Record<string, string> = {
  violet:  'hover:border-violet-500/40',
  cyan:    'hover:border-cyan-500/40',
  emerald: 'hover:border-emerald-500/40',
  rose:    'hover:border-rose-500/40',
  amber:   'hover:border-amber-500/40',
  pink:    'hover:border-pink-500/40',
  blue:    'hover:border-blue-500/40',
  orange:  'hover:border-orange-500/40',
  teal:    'hover:border-teal-500/40',
}

const GLOW_MAP: Record<string, string> = {
  violet:  'rgba(139,92,246,0.08)',
  cyan:    'rgba(6,182,212,0.08)',
  emerald: 'rgba(52,211,153,0.08)',
  rose:    'rgba(244,63,94,0.08)',
  amber:   'rgba(245,158,11,0.08)',
  pink:    'rgba(236,72,153,0.08)',
  blue:    'rgba(59,130,246,0.08)',
  orange:  'rgba(249,115,22,0.08)',
  teal:    'rgba(20,184,166,0.08)',
}

function StackCard({ stack, featured = false }: { stack: typeof STACKS[0]; featured?: boolean }) {
  const colorCls     = COLOR_MAP[stack.color] ?? COLOR_MAP.violet
  const hoverBorder  = HOVER_BORDER_MAP[stack.color] ?? 'hover:border-violet-500/40'
  const glowColor    = GLOW_MAP[stack.color] ?? GLOW_MAP.violet

  return (
    <Link
      to={`/stack/${stack.id}`}
      className={cn(
        'group relative bg-bg-surface border border-border rounded-xl p-5 flex flex-col gap-3 transition-all duration-200',
        hoverBorder,
        featured && 'ring-1 ring-inset ring-border-strong'
      )}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 0%, ${glowColor} 0%, transparent 65%)` }}
      />

      {/* Top row: icon + featured badge + arrow */}
      <div className="relative flex items-start justify-between gap-3">
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center text-2xl border shrink-0', colorCls)}>
          {stack.icon}
        </div>
        <div className="flex items-center gap-2">
          {featured && (
            <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-400 border border-violet-500/25">
              FEATURED
            </span>
          )}
          <span className="text-text-muted group-hover:text-text-secondary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lg select-none">
            →
          </span>
        </div>
      </div>

      {/* Title + description */}
      <div className="relative">
        <h3 className="text-sm font-display font-semibold text-text-primary leading-snug mb-1">
          {stack.title}
        </h3>
        <p className="text-xs font-body text-text-secondary leading-relaxed line-clamp-2">
          {stack.description}
        </p>
      </div>

      {/* Category badge + prompt count */}
      <div className="relative flex items-center gap-2 flex-wrap">
        <span className={cn('text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border capitalize', colorCls)}>
          {stack.category}
        </span>
        <span className="text-[11px] font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded border border-border/50">
          {stack.promptIds.length} prompts
        </span>
      </div>

      {/* Stats + curator */}
      <div className="relative flex items-center gap-3 pt-2.5 border-t border-border/50">
        <span className="text-[11px] font-mono text-text-muted">@{stack.curator}</span>
        <span className="flex-1" />
        <span className="text-[11px] font-mono text-text-muted">♥ {formatNumber(stack.likes)}</span>
        <span className="text-[11px] font-mono text-text-muted">★ {formatNumber(stack.saves)}</span>
      </div>
    </Link>
  )
}

export default function StacksPage() {
  const featured = STACKS.filter(s => s.featured)
  const all = STACKS

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">

      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl mb-8 p-8 sm:p-10 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, transparent 50%, rgba(6,182,212,0.05) 100%)' }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-violet-400 text-lg">⬟</span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Curated Collections</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-text-primary leading-tight mb-3">
            Prompt <span className="text-gradient-violet">Stacks</span>
          </h1>
          <p className="text-base text-text-secondary font-body max-w-xl leading-relaxed">
            Curated prompt collections for every workflow — from full-stack dev to content marketing, AI agents to job hunting.
          </p>
        </div>
      </section>

      {/* Featured stacks */}
      {featured.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="pp-label">FEATURED STACKS</span>
            <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 border border-violet-500/25 px-1.5 py-0.5 rounded">
              {featured.length}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map(stack => (
              <StackCard key={stack.id} stack={stack} featured />
            ))}
          </div>
        </section>
      )}

      {/* All stacks */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="pp-label">ALL STACKS</span>
            <span className="text-[10px] font-mono text-text-muted bg-bg-elevated border border-border px-1.5 py-0.5 rounded">
              {all.length}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {all.map(stack => (
            <StackCard key={stack.id} stack={stack} featured={stack.featured} />
          ))}
        </div>
      </section>
    </div>
  )
}
