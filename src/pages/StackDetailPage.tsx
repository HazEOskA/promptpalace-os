import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { STACKS, getPromptById } from '../data/index'
import { isPromptSaved, savePrompt, unsavePrompt } from '../lib/storage'
import { formatNumber, cn } from '../lib/utils'
import type { Prompt } from '../data/prompts'

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

// ─── Prompt item in stack ─────────────────────────────────────────────────────

interface StackPromptItemProps {
  prompt: Prompt
  index: number
  copiedId: string | null
  onCopy: (p: Prompt) => void
}

function StackPromptItem({ prompt: p, index, copiedId, onCopy }: StackPromptItemProps) {
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
    <article className="group relative bg-bg-surface border border-border rounded-xl p-5 hover:border-border-strong transition-all duration-200">
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(139,92,246,0.05) 0%, transparent 60%)' }}
      />

      {/* Step number + title row */}
      <div className="relative flex items-start gap-3 mb-2">
        <div className="shrink-0 w-7 h-7 rounded-lg bg-bg-elevated border border-border flex items-center justify-center text-xs font-mono text-text-muted mt-0.5">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <Link to={`/prompt/${p.id}`} className="group/title">
            <h3 className="text-sm font-display font-semibold text-text-primary leading-snug group-hover/title:text-violet-300 transition-colors">
              {p.title}
            </h3>
          </Link>
          <p className="text-xs font-body text-text-secondary leading-relaxed mt-1 line-clamp-2">
            {p.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      {p.tags.length > 0 && (
        <div className="relative flex flex-wrap gap-1 mb-3 pl-10">
          {p.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-mono text-text-muted/60 bg-bg-elevated px-1.5 py-0.5 rounded border border-border/50">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="relative flex items-center gap-2 pl-10 pt-2 border-t border-border/50">
        <Link
          to={`/prompt/${p.id}`}
          className="flex-1 min-h-[36px] flex items-center justify-center text-xs font-mono rounded-lg border border-border hover:border-border-strong bg-bg-elevated hover:bg-bg-overlay text-text-secondary hover:text-text-primary transition-all duration-150"
        >
          View →
        </Link>
        <button
          onClick={() => onCopy(p)}
          className={cn(
            'flex-1 min-h-[36px] text-xs font-mono rounded-lg border transition-all duration-150 active:scale-[0.98]',
            copiedId === p.id
              ? 'border-emerald-500/40 bg-emerald-900/20 text-emerald-400'
              : 'border-violet-500/30 bg-violet-900/10 text-violet-400 hover:bg-violet-900/20'
          )}
        >
          {copiedId === p.id ? '✓ Copied!' : '⎘ Copy'}
        </button>
        <button
          onClick={handleSave}
          className={cn(
            'min-h-[36px] min-w-[36px] rounded-lg border text-sm transition-all duration-150 active:scale-[0.98]',
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

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function StackDetailPage() {
  const { id } = useParams<{ id: string }>()
  const stack = STACKS.find(s => s.id === id)

  const [copiedId, setCopiedId] = useState<string | null>(null)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  if (!stack) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-2">Stack not found</h2>
          <p className="text-text-secondary font-body text-sm mb-6">
            That stack doesn't exist. Browse all stacks below.
          </p>
          <Link to="/stacks" className="pp-btn-primary text-sm min-h-[40px]">
            ← Browse Stacks
          </Link>
        </div>
      </div>
    )
  }

  const colorCls = COLOR_MAP[stack.color] ?? COLOR_MAP.violet
  const prompts = stack.promptIds
    .map(pid => getPromptById(pid))
    .filter((p): p is Prompt => p != null)

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    setCopiedId(p.id)
    copyTimeoutRef.current = setTimeout(() => setCopiedId(null), 1800)
  }

  const handleCopyAll = () => {
    const combined = prompts
      .map((p, i) => `# Prompt ${i + 1}: ${p.title}\n\n${p.content}`)
      .join('\n\n---\n\n')
    navigator.clipboard.writeText(combined).catch(() => {})
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">

      {/* Back link */}
      <div className="mb-5">
        <Link to="/stacks" className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1.5">
          ← Stacks
        </Link>
      </div>

      {/* Stack header */}
      <section className="relative overflow-hidden rounded-2xl mb-7 p-7 sm:p-9 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, transparent 55%)' }}
        />
        <div className="relative flex items-start gap-5">
          <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border shrink-0', colorCls)}>
            {stack.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={cn('text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border capitalize', colorCls)}>
                {stack.category}
              </span>
              {stack.featured && (
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-400 border border-violet-500/25">
                  FEATURED
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-text-primary leading-tight mb-2">
              {stack.title}
            </h1>
            <p className="text-sm text-text-secondary font-body leading-relaxed mb-4 max-w-xl">
              {stack.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
              <span>@{stack.curator}</span>
              <span>♥ {formatNumber(stack.likes)}</span>
              <span>★ {formatNumber(stack.saves)}</span>
              <span>◎ {formatNumber(stack.views)} views</span>
              <span>{prompts.length} prompts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      {stack.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-bg-elevated border border-border text-text-secondary">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs font-mono text-text-muted">
          <span className="text-text-secondary">{prompts.length}</span> prompt{prompts.length !== 1 ? 's' : ''} in this stack
        </p>
        <button
          onClick={handleCopyAll}
          className="pp-btn-secondary min-h-[38px] text-xs"
        >
          ⎘ Copy All Prompts
        </button>
      </div>

      {/* Empty state */}
      {prompts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-5 opacity-20 select-none">⊘</div>
          <p className="text-text-secondary font-body text-sm">No prompts found in this stack.</p>
        </div>
      )}

      {/* Prompts list */}
      {prompts.length > 0 && (
        <div className="flex flex-col gap-3">
          {prompts.map((p, i) => (
            <StackPromptItem
              key={p.id}
              prompt={p}
              index={i}
              copiedId={copiedId}
              onCopy={handleCopy}
            />
          ))}
        </div>
      )}
    </div>
  )
}
