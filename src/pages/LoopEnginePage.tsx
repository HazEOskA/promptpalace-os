import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react'
import { LOOPS } from '../data/loops'
import type { Loop } from '../data/loops'
import { cn } from '../lib/utils'

const DIFFICULTY_COLOR: Record<string, string> = {
  beginner: 'text-emerald-400 bg-emerald-900/30 border-emerald-500/20',
  intermediate: 'text-amber-400 bg-amber-900/30 border-amber-500/20',
  advanced: 'text-rose-400 bg-rose-900/30 border-rose-500/20',
}

const PHASE_COLOR: Record<string, string> = {
  input: 'text-cyan-400',
  context: 'text-violet-400',
  generate: 'text-amber-400',
  audit: 'text-rose-400',
  output: 'text-emerald-400',
  next: 'text-blue-400',
}

export default function LoopEnginePage() {
  const [selected, setSelected] = useState<Loop | null>(null)
  const [activePhase, setActivePhase] = useState(0)
  const [phaseInput, setPhaseInput] = useState('')
  const [completedPhases, setCompletedPhases] = useState<Set<number>>(new Set())
  const [copied, setCopied] = useState(false)

  const currentPhase = selected ? selected.phases[activePhase] : null

  const handleSelect = (loop: Loop) => {
    setSelected(loop)
    setActivePhase(0)
    setPhaseInput('')
    setCompletedPhases(new Set())
  }

  const handleAdvance = () => {
    if (!selected) return
    setCompletedPhases(prev => new Set([...prev, activePhase]))
    if (activePhase < selected.phases.length - 1) {
      setActivePhase(i => i + 1)
      setPhaseInput('')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(phaseInput).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-slide-up">
      {/* Header */}
      <section className="relative overflow-hidden rounded-xl border border-violet-500/25 bg-bg-surface p-5 md:p-7">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-900/30 px-3 py-1 text-xs font-mono uppercase tracking-widest text-violet-400">
              <Zap className="h-3 w-3" />
              Loop Engine — Agentic City OS
            </div>
            <h1 className="text-2xl font-display font-bold text-text-primary sm:text-3xl">
              Execute Structured AI Loops
            </h1>
            <p className="mt-2 text-sm text-text-secondary max-w-xl">
              Pick a loop template. Fill in context. Advance through each phase. Get a real, copyable output at the end. No fake automation — every step is operator-driven.
            </p>
          </div>
          <Link to="/" className="shrink-0 pp-btn-secondary text-xs hidden sm:flex">
            ← Dashboard
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        {/* Loop list */}
        <div>
          <div className="pp-section-title mb-3">
            Available Loops ({LOOPS.length})
          </div>
          <div className="space-y-2">
            {LOOPS.map(loop => (
              <button
                key={loop.id}
                onClick={() => handleSelect(loop)}
                className={cn(
                  'w-full text-left rounded-lg border bg-bg-elevated p-3 transition-all group',
                  selected?.id === loop.id
                    ? 'border-violet-500/50 bg-violet-600/10'
                    : 'border-border hover:border-border-strong'
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-display font-semibold text-text-primary group-hover:text-violet-300 transition-colors">
                    {loop.title}
                  </div>
                  {loop.featured && (
                    <span className="pp-badge-violet shrink-0">Featured</span>
                  )}
                </div>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed line-clamp-2">
                  {loop.description}
                </p>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className={cn('text-[10px] font-mono px-1.5 py-0.5 rounded border', DIFFICULTY_COLOR[loop.difficulty])}>
                    {loop.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-text-muted">
                    <Clock className="h-3 w-3" />
                    {loop.estimatedTime}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    {loop.phases.length} phases
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Phase runner */}
        {selected && currentPhase ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-bg-surface p-5">
              {/* Phase nav */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-base font-display font-bold text-text-primary">{selected.title}</div>
                  <div className="text-xs font-mono text-text-muted mt-0.5">
                    {selected.estimatedTime} · {selected.phases.length} phases · {selected.outputFormat}
                  </div>
                </div>
                <div className="flex gap-1">
                  {selected.phases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className={cn(
                        'w-7 h-7 rounded-full text-[10px] font-mono border transition-all',
                        i === activePhase
                          ? 'bg-violet-600 border-violet-500 text-white'
                          : completedPhases.has(i)
                          ? 'bg-emerald-900/40 border-emerald-500/40 text-emerald-400'
                          : 'bg-bg-elevated border-border text-text-muted hover:border-border-strong'
                      )}
                    >
                      {completedPhases.has(i) ? '✓' : i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active phase */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className={cn('text-xs font-mono uppercase font-semibold', PHASE_COLOR[currentPhase.type])}>
                    [{currentPhase.type}]
                  </span>
                  <span className="text-sm font-display font-semibold text-text-primary">
                    {currentPhase.label}
                  </span>
                </div>

                <div className="rounded-lg bg-bg-elevated border border-border p-3 text-xs text-text-secondary leading-relaxed">
                  {currentPhase.instruction}
                </div>

                <div>
                  <div className="pp-label mb-1.5">{currentPhase.outputLabel}</div>
                  <textarea
                    value={phaseInput}
                    onChange={e => setPhaseInput(e.target.value)}
                    placeholder={currentPhase.placeholder ?? 'Enter your output for this phase...'}
                    rows={6}
                    className="pp-input w-full resize-none font-mono text-xs"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button onClick={handleCopy} className="pp-btn-secondary text-xs">
                    {copied ? '✓ Copied' : 'Copy Output'}
                  </button>
                  {activePhase < selected.phases.length - 1 ? (
                    <button onClick={handleAdvance} className="pp-btn-primary text-xs flex items-center gap-1.5">
                      Next Phase <ArrowRight className="h-3 w-3" />
                    </button>
                  ) : (
                    <button onClick={handleAdvance} className="pp-btn-primary text-xs flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3" /> Complete Loop
                    </button>
                  )}
                </div>

                {selected.n8nDraftAvailable && activePhase === selected.phases.length - 1 && (
                  <div className="rounded-lg border border-border bg-bg-elevated/60 px-3 py-2 text-[10px] font-mono text-text-muted">
                    Export Draft — This loop has an n8n template available. It is a draft for manual import only. Not a live automation.
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 rounded-xl border border-dashed border-border text-center p-6">
            <div className="text-2xl text-text-muted mb-3">↺</div>
            <div className="text-sm font-display font-semibold text-text-secondary mb-1">
              Select a loop to begin
            </div>
            <p className="text-xs text-text-muted max-w-xs">
              Pick a template from the left panel. The phase runner will load here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
