import { useState } from 'react'
import { WORKFLOW_TEMPLATES, createCustomWorkflow, type Workflow, type WorkflowStep } from '../data/workflows'
import { createWorkflowRunner } from '../workflows/workflowEngine'
import { exportWorkflow } from '../lib/export'
import { cn, formatNumber } from '../lib/utils'

const STEP_TYPE_ICONS: Record<string, string> = {
  context: '⌥',
  research: '🔍',
  generate: '◎',
  review: '✓',
  export: '↓',
  deploy: '🚀',
  validate: '◈',
}

const STEP_TYPE_COLORS: Record<string, string> = {
  context: 'text-rose-400 border-rose-500/30 bg-rose-900/20',
  research: 'text-cyan-400 border-cyan-500/30 bg-cyan-900/20',
  generate: 'text-violet-400 border-violet-500/30 bg-violet-900/20',
  review: 'text-amber-400 border-amber-500/30 bg-amber-900/20',
  export: 'text-emerald-400 border-emerald-500/30 bg-emerald-900/20',
  deploy: 'text-cyan-400 border-cyan-500/30 bg-cyan-900/20',
  validate: 'text-emerald-400 border-emerald-500/30 bg-emerald-900/20',
}

const STATUS_ICONS: Record<string, string> = {
  idle: '○',
  running: '◌',
  done: '◉',
  error: '✕',
  skipped: '—',
}

const STATUS_COLORS: Record<string, string> = {
  idle: 'text-text-muted',
  running: 'text-amber-400',
  done: 'text-emerald-400',
  error: 'text-rose-400',
  skipped: 'text-text-muted opacity-50',
}

function StepCard({ step, index, isCurrent }: { step: WorkflowStep; index: number; isCurrent: boolean }) {
  return (
    <div className={cn(
      'relative flex gap-3 p-3 rounded-xl border transition-all duration-300',
      isCurrent ? 'border-violet-500/60 bg-violet-900/10 shadow-violet' :
      step.status === 'done' ? 'border-emerald-500/20 bg-emerald-900/5' :
      step.status === 'error' ? 'border-rose-500/30 bg-rose-900/10' :
      'border-border bg-bg-elevated'
    )}>
      {/* Connector line */}
      {index > 0 && (
        <div className="absolute -top-3 left-5 w-px h-3 bg-border" />
      )}

      {/* Step number */}
      <div className={cn(
        'shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-mono font-bold',
        isCurrent ? 'bg-violet-600/30 border-violet-500/50 text-violet-300' :
        step.status === 'done' ? 'bg-emerald-900/30 border-emerald-500/30 text-emerald-400' :
        'bg-bg-overlay border-border text-text-muted'
      )}>
        {step.status === 'running' ? (
          <span className="animate-spin text-amber-400">◌</span>
        ) : step.status === 'done' ? '✓' : index + 1}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={cn('text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border', STEP_TYPE_COLORS[step.type])}>
            {STEP_TYPE_ICONS[step.type]} {step.type}
          </span>
          <span className={cn('text-xs font-mono ml-auto', STATUS_COLORS[step.status])}>
            {STATUS_ICONS[step.status]}
            {step.status === 'running' && (
              <span className="ml-1 animate-pulse">running</span>
            )}
          </span>
        </div>
        <div className="text-xs font-display font-semibold text-text-primary">{step.label}</div>
        <p className="text-[11px] text-text-secondary font-body mt-0.5 leading-relaxed">{step.description}</p>

        {step.output && step.status === 'done' && (
          <div className="mt-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-900/20 border border-emerald-500/20 rounded px-2 py-1">
            {step.output}
          </div>
        )}

        {step.duration && (
          <div className="mt-1 text-[10px] font-mono text-text-muted">~{step.duration}s estimated</div>
        )}
      </div>
    </div>
  )
}

export default function WorkflowGeneratorPage() {
  const [selectedWf, setSelectedWf] = useState<Workflow>(WORKFLOW_TEMPLATES[0])
  const [runState, setRunState] = useState(() => createWorkflowRunner(WORKFLOW_TEMPLATES[0]).getState())
  const [runner, setRunner] = useState(() => createWorkflowRunner(WORKFLOW_TEMPLATES[0]))
  const [isRunning, setIsRunning] = useState(false)
  const [showNewModal, setShowNewModal] = useState(false)
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')

  const selectWorkflow = (wf: Workflow) => {
    const r = createWorkflowRunner(wf)
    setSelectedWf(wf)
    setRunner(r)
    setRunState(r.getState())
    setIsRunning(false)
  }

  const handleRun = async () => {
    if (isRunning) return
    setIsRunning(true)
    await runner.runAll(state => setRunState({ ...state }), 1000)
    setIsRunning(false)
  }

  const handleReset = () => {
    runner.reset()
    setRunState(runner.getState())
    setIsRunning(false)
  }

  const handleCreateNew = () => {
    if (!newName.trim()) return
    const wf = createCustomWorkflow(newName.trim(), newDesc.trim() || 'Custom workflow')
    selectWorkflow(wf)
    setShowNewModal(false)
    setNewName('')
    setNewDesc('')
  }

  const doneCount = runState.steps.filter(s => s.status === 'done').length
  const progress = runState.steps.length ? Math.round((doneCount / runState.steps.length) * 100) : 0
  const isComplete = doneCount === runState.steps.length && runState.steps.length > 0

  return (
    <div className="max-w-7xl mx-auto space-y-5 animate-slide-up">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <h2 className="pp-section-title text-xl">Workflow Generator</h2>
          <p className="text-xs font-mono text-text-muted mt-0.5">Assemble multi-step AI execution pipelines</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowNewModal(true)}
            className="pp-btn-secondary text-xs"
          >
            + New Workflow
          </button>
          <button
            onClick={() => exportWorkflow(selectedWf)}
            className="pp-btn-secondary text-xs"
          >
            ↓ Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Template selector */}
        <div className="lg:col-span-1 space-y-3">
          <div className="pp-label">WORKFLOW TEMPLATES</div>
          {WORKFLOW_TEMPLATES.map(wf => (
            <button
              key={wf.id}
              onClick={() => selectWorkflow(wf)}
              className={cn(
                'w-full text-left p-4 rounded-xl border transition-all duration-150',
                selectedWf.id === wf.id
                  ? 'border-violet-500/50 bg-violet-900/10 shadow-violet'
                  : 'border-border bg-bg-surface hover:border-border-strong'
              )}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-amber-400 text-base">⟳</span>
                <span className="pp-badge-amber">{wf.category}</span>
                <span className="text-[10px] font-mono text-text-muted ml-auto">
                  {formatNumber(wf.uses)} runs
                </span>
              </div>
              <div className="text-sm font-display font-semibold text-text-primary">{wf.name}</div>
              <p className="text-xs text-text-secondary mt-1 font-body line-clamp-2 leading-relaxed">{wf.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] font-mono text-text-muted">{wf.steps.length} steps</span>
                <div className="flex gap-1 flex-wrap">
                  {wf.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-bg-elevated border border-border px-1.5 py-0.5 rounded text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Workflow runner */}
        <div className="lg:col-span-2 space-y-4">

          {/* Run controls */}
          <div className="pp-card flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="text-sm font-display font-semibold text-text-primary">{selectedWf.name}</div>
              <div className="text-xs text-text-secondary font-body mt-0.5">{selectedWf.description}</div>

              {/* Progress */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-text-muted mb-1">
                  <span>{doneCount}/{runState.steps.length} steps</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 bg-bg-overlay rounded-full overflow-hidden">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-500',
                      isComplete ? 'bg-emerald-500' : 'bg-gradient-to-r from-violet-600 to-cyan-500'
                    )}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              {isComplete ? (
                <button onClick={handleReset} className="pp-btn-secondary text-xs py-2">
                  ⟳ Reset
                </button>
              ) : (
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="pp-btn-cyan text-xs py-2 px-5"
                >
                  {isRunning ? (
                    <><span className="animate-spin">◌</span><span>Running...</span></>
                  ) : (
                    <><span>▶</span><span>Run Workflow</span></>
                  )}
                </button>
              )}
              <button onClick={handleReset} className="pp-btn-secondary text-xs py-2 px-3">
                ↺
              </button>
            </div>
          </div>

          {/* Complete banner */}
          {isComplete && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-900/10 animate-fade-in">
              <span className="text-emerald-400 text-lg">◉</span>
              <div className="flex-1">
                <div className="text-sm font-display font-semibold text-emerald-400">Workflow Complete</div>
                <div className="text-xs font-mono text-text-muted">
                  All {runState.steps.length} steps executed successfully.
                </div>
              </div>
              <button
                onClick={() => exportWorkflow(selectedWf)}
                className="pp-btn-secondary text-xs py-1.5"
              >
                ↓ Export
              </button>
            </div>
          )}

          {/* Step list */}
          <div className="space-y-2 relative">
            <div className="pp-label mb-3">EXECUTION STEPS</div>
            {runState.steps.map((step, i) => (
              <StepCard
                key={step.id}
                step={step}
                index={i}
                isCurrent={runState.currentStepIdx === i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* New Workflow Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-bg-surface border border-border rounded-2xl overflow-hidden shadow-violet animate-slide-up">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <div className="text-sm font-display font-semibold text-text-primary">Create New Workflow</div>
              <button onClick={() => setShowNewModal(false)} className="text-text-muted hover:text-text-primary text-lg">✕</button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="pp-label mb-1.5 block">WORKFLOW NAME</label>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  placeholder="e.g. My Solana Launch Pipeline"
                  className="pp-input"
                  autoFocus
                />
              </div>
              <div>
                <label className="pp-label mb-1.5 block">DESCRIPTION</label>
                <textarea
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="What does this workflow do?"
                  className="pp-input resize-none"
                  rows={3}
                />
              </div>
              <div className="text-xs font-mono text-text-muted bg-bg-elevated border border-border rounded-lg px-3 py-2">
                ℹ A default Context Recovery step will be added. Add more steps manually.
              </div>
            </div>
            <div className="px-5 pb-5 flex gap-2">
              <button onClick={() => setShowNewModal(false)} className="pp-btn-secondary flex-1 justify-center text-xs">
                Cancel
              </button>
              <button onClick={handleCreateNew} disabled={!newName.trim()} className="pp-btn-primary flex-1 justify-center text-xs">
                Create Workflow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
