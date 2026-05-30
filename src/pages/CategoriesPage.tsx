import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/index'
import { cn } from '../lib/utils'

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

export default function CategoriesPage() {
  const total = CATEGORIES.reduce((sum, c) => sum + c.promptCount, 0)

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
            <span className="text-violet-400 text-lg">◈</span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Prompt Categories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-text-primary leading-tight mb-3">
            Browse by <span className="text-gradient-violet">Category</span>
          </h1>
          <p className="text-base text-text-secondary font-body max-w-xl leading-relaxed">
            {total}+ prompts across {CATEGORIES.length} categories — from coding to growth hacking, AI agents to SEO.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map(cat => {
          const colorCls = COLOR_MAP[cat.color] ?? COLOR_MAP.violet
          const hoverBorder = HOVER_BORDER_MAP[cat.color] ?? 'hover:border-violet-500/40'
          const glowColor = GLOW_MAP[cat.color] ?? GLOW_MAP.violet

          return (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={cn(
                'group relative bg-bg-surface border border-border rounded-xl p-5 flex flex-col gap-3 transition-all duration-200',
                hoverBorder
              )}
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 20% 0%, ${glowColor} 0%, transparent 65%)` }}
              />

              {/* Icon + arrow row */}
              <div className="relative flex items-start justify-between">
                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center text-xl border font-display font-black', colorCls)}>
                  {cat.icon}
                </div>
                <span className="text-text-muted group-hover:text-text-secondary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lg select-none">
                  →
                </span>
              </div>

              {/* Label + description */}
              <div className="relative">
                <h3 className="text-base font-display font-semibold text-text-primary mb-1 leading-snug">
                  {cat.label}
                </h3>
                <p className="text-xs font-body text-text-secondary leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              {/* Count badge */}
              <div className="relative flex items-center gap-2 flex-wrap">
                <span className={cn('text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border', colorCls)}>
                  {cat.promptCount} prompts
                </span>
              </div>

              {/* Top tags */}
              <div className="relative flex flex-wrap gap-1.5 pt-0.5 border-t border-border/50">
                {cat.topTags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-text-muted/70 bg-bg-elevated px-1.5 py-0.5 rounded border border-border/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
