import { useState } from 'react'
import { createContextEngine, type ContextMessage } from '../runtime/contextEngine'
import { createExecutionEngine } from '../runtime/executionEngine'
import { exportContextSnapshot } from '../lib/export'
import { cn } from '../lib/utils'

const ctxEngine = createContextEngine()
const execEngine = createExecutionEngine()

type RunPhase = 'idle' | 'step0' | 'step05' | 'step1' | 'ready'

const PHASE_META: Record<RunPhase, { label: string; color: string; desc: string }> = {
  idle: { label: 'IDLE', color: 'text-text-muted', desc: 'Click Run Step 0 to begin context recovery.' },
  step0: { label: 'STEP 0 DONE', color: 'text-rose-400', desc: 'Context recovered from last session.' },
  step05: { label: 'STEP 0.5 DONE', color: 'text-amber-400', desc: 'Active workspace detected.' },
  step1: { label: 'STEP 1 DONE', color: 'text-violet-400', desc: 'Execution continuity confirmed.' },
  ready: { label: 'READY ▶', color: 'text-emerald-400', desc: 'All steps complete. System ready to build.' },
}

const STEP_OUTPUTS: Record<string, string> = {
  step0: `▶ STEP 0 — CONTEXT RECOVERY

Scanning last 5 messages...

Project Name:    GTM Launch Build
Last Step:       2 (Landing page headlines)
Active Workspace: AgenticOS Workspace
Framework:       TypeScript + Vite
Execution Mode:  BUILD
Blockers:        None

✓ Last 5 messages locked.
✓ Session context loaded.
✓ Ready for Step 0.5.`,
  step05: `▶ STEP 0.5 — ACTIVE WORKSPACE DETECTION

Scanning for active workspace signals...

Workspace:       AgenticOS Workspace
Framework:       TypeScript + Vite
Build System:    Vite 5.0
Language:        TypeScript (strict)
Runtime:         Node.js 20 / Bun
Open Context:    src/loops/gtm-launch-sequence.ts

✓ Workspace detected.
✓ Framework identified.
✓ Ready for Step 1.`,
  step1: `▶ STEP 1 — EXECUTION CONTINUITY CHECK

Loading last checkpoint...

Last completed:  Keypair HD derivation
Current target:  Metaplex metadata upload
Next action:     SPL token init script
Resume point:    tokenLaunch.ts:47

✓ Checkpoint found.
✓ Context loaded.
✓ Ready to resume from Step 2.`,
}

export default function ContextRecoveryPage() {
  const [phase, setPhase] = useState<RunPhase>('idle')
  const [outputs, setOutputs] = useState<Record<string, string>>({})
  const [isRunning, setIsRunning] = useState(false)
  const [execState, setExecState] = useState(execEngine.getState())
  const messages = ctxEngine.getLast5Messages()

  const runStep = async (stepKey: RunPhase, outputKey: string, delay = 1400) => {
    if (isRunning) return
    setIsRunning(true)
    await new Promise(r => setTimeout(r, delay + Math.random() * 400))
    setOutputs(prev => ({ ...prev, [outputKey]: STEP_OUTPUTS[outputKey] }))
    setPhase(stepKey)
    execEngine.advancePhase()
    setExecState(execEngine.getState())
    setIsRunning(false)
  }

  const handleRunAll = async () => {
    if (isRunning) return
    setIsRunning(true)
    setOutputs({})
    setPhase('idle')

    for (const [stepKey, outputKey, delay] of [
      ['step0' as RunPhase, 'step0', 1200],
      ['step05' as RunPhase, 'step05', 1000],
      ['step1' as RunPhase, 'step1', 900],
    ] as [RunPhase, string, number][]) {
      await new Promise(r => setTimeout(r, delay + Math.random() * 300))
      setOutputs(prev => ({ ...prev, [outputKey]: STEP_OUTPUTS[outputKey] }))
      setPhase(stepKey)
    }

    await new Promise(r => setTimeout(r, 500))
    setPhase('ready')
    setIsRunning(false)
  }

  const handleReset = () => {
    setPhase('idle')
    setOutputs({})
    execEngine.resetChecklist()
    setExecState(execEngine.getState())
  }

  const handleExport = () => {
    exportContextSnapshot(messages.map(m => `[${m.role.toUpperCase()}] ${m.content}`))
  }

  const phaseMeta = PHASE_META[phase]

  const stepDefs = [
    {
      key: 'step0' as const,
      phase: 'step0' as RunPhase,
      cls: 'step-0',
      label: 'STEP 0',
      name: 'Context Recovery',
      desc: 'Scan last 5 messages. Identify project, last step, blockers, execution mode.',
      action: () => runStep('step0', 'step0'),
      critical: true,
    },
    {
      key: 'step05' as const,
      phase: 'step05' as RunPhase,
      cls: 'step-05',
      label: 'STEP 0.5',
      name: 'Workspace Detection',
      desc: 'Detect active workspace, framework, open files, build system, and runtime.',
      action: () => runStep('step05', 'step05'),
      critical: false,
    },
    {
      key: 'step1' as const,
      phase: 'step1' as RunPhase,
      cls: 'step-1',
      label: 'STEP 1',
      name: 'Execution Continuity',
      desc: 'Resume from last checkpoint. If none found, initialize new project scaffold.',
      action: () => runStep('step1', 'step1'),
      critical: true,
    },
  ]

  const phaseOrder: RunPhase[] = ['idle', 'step0', 'step05', 'step1', 'ready']
  const phaseIdx = phaseOrder.indexOf(phase)

  return (
    <div className="max-w-6xl mx-auto space-y-5 animate-slide-up">

      {/* Header + status */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="pp-section-title text-xl">Context Recovery Panel</h2>
          <p className="text-xs font-mono text-text-muted mt-0.5">AI OS Step 0 — Last 5 Message Lock & Execution Continuity</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={cn('flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-bg-elevated', phase === 'ready' ? 'border-emerald-500/30' : 'border-border')}>
            {phase !== 'idle' && <div className={cn('w-1.5 h-1.5 rounded-full', phase === 'ready' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse')} />}
            <span className={cn('text-xs font-mono font-semibold', phaseMeta.color)}>{phaseMeta.label}</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Steps column */}
        <div className="lg:col-span-2 space-y-4">

          {/* Global controls */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleRunAll}
              disabled={isRunning}
              className="pp-btn-primary text-xs"
            >
              {isRunning ? <><span className="animate-spin">◌</span><span>Running...</span></> : <><span>▶</span><span>Run All Steps (0 → 1)</span></>}
            </button>
            <button onClick={handleReset} disabled={isRunning} className="pp-btn-secondary text-xs">
              ↺ Reset
            </button>
            <button onClick={handleExport} className="pp-btn-secondary text-xs">
              ↓ Export Snapshot
            </button>
          </div>

          {/* Step cards */}
          {stepDefs.map((stepDef, i) => {
            const isDone = phaseIdx > i
            const isActive = phaseIdx === i + 1
            const outputText = outputs[stepDef.key]

            return (
              <div
                key={stepDef.key}
                className={cn(
                  'rounded-xl border overflow-hidden transition-all duration-300',
                  isDone ? 'border-emerald-500/20' :
                  isActive ? 'border-violet-500/40 shadow-violet' :
                  'border-border'
                )}
              >
                {/* Step header */}
                <div className={cn(
                  'px-4 py-3 flex items-center gap-3',
                  isDone ? 'bg-emerald-900/10' :
                  isActive ? 'bg-violet-900/10' :
                  'bg-bg-elevated'
                )}>
                  <div className={cn(
                    'w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-mono font-bold shrink-0',
                    isDone ? 'bg-emerald-900/30 border-emerald-500/30 text-emerald-400' :
                    isActive ? 'bg-violet-900/30 border-violet-500/40 text-violet-300' :
                    'bg-bg-overlay border-border text-text-muted'
                  )}>
                    {isDone ? '✓' : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={stepDef.cls}>{stepDef.label}</span>
                      {stepDef.critical && <span className="text-[10px] font-mono text-rose-400">CRITICAL</span>}
                      {isDone && <span className="text-[10px] font-mono text-emerald-400 ml-auto">COMPLETE</span>}
                    </div>
                    <div className="text-sm font-display font-semibold text-text-primary mt-0.5">{stepDef.name}</div>
                  </div>
                  <button
                    onClick={stepDef.action}
                    disabled={isRunning || isDone}
                    className={cn(
                      'shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg border transition-all',
                      isDone
                        ? 'border-emerald-500/20 text-emerald-400 cursor-default'
                        : 'border-border hover:border-violet-500/50 text-text-muted hover:text-violet-400 disabled:opacity-40'
                    )}
                  >
                    {isDone ? '✓ Done' : isRunning ? '◌' : '▶ Run'}
                  </button>
                </div>

                {/* Step description */}
                <div className="px-4 py-3 bg-bg-surface">
                  <p className="text-xs text-text-secondary font-body leading-relaxed">{stepDef.desc}</p>

                  {/* Output */}
                  {outputText && (
                    <pre className="mt-3 bg-bg-base border border-border rounded-lg p-3 text-[10px] font-mono text-text-secondary leading-relaxed whitespace-pre-wrap overflow-x-auto animate-fade-in">
                      {outputText}
                    </pre>
                  )}
                </div>
              </div>
            )
          })}

          {/* Ready state */}
          {phase === 'ready' && (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-900/10 px-5 py-4 flex items-start gap-4 animate-slide-up">
              <div className="text-2xl">◉</div>
              <div>
                <div className="text-sm font-display font-bold text-emerald-400">System Ready — Step 2 Unlocked</div>
                <p className="text-xs text-text-secondary mt-1 font-body">
                  Context recovered. Workspace detected. Continuity confirmed. The Project Builder Bot is ready to execute Step 2.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="/builder" className="pp-btn-primary text-xs py-1.5">
                    ◎ Open Builder →
                  </a>
                  <button onClick={handleExport} className="pp-btn-secondary text-xs py-1.5">
                    ↓ Export Snapshot
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-4">

          {/* Last 5 Messages Lock */}
          <div className="bg-bg-surface border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-bg-elevated flex items-center gap-2">
              <span className="text-rose-400 text-sm">⌥</span>
              <div className="text-xs font-display font-semibold text-text-primary">Last 5 Messages Lock</div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="text-[10px] font-mono text-rose-400">LOCKED</span>
              </div>
            </div>
            <div className="p-3 space-y-2 max-h-80 overflow-y-auto">
              {messages.map((msg: ContextMessage, i: number) => (
                <div key={msg.id} className="flex gap-2">
                  <div className={cn(
                    'shrink-0 w-5 h-5 rounded text-[9px] font-mono font-bold flex items-center justify-center mt-0.5',
                    msg.role === 'user'
                      ? 'bg-violet-900/50 text-violet-300 border border-violet-500/30'
                      : 'bg-bg-overlay text-text-muted border border-border'
                  )}>
                    {msg.role === 'user' ? 'U' : 'A'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[9px] font-mono text-text-muted">#{i + 1}</span>
                      {msg.step && <span className={cn('text-[9px] font-mono', msg.step === '0' ? 'text-rose-400' : msg.step === '1' ? 'text-violet-400' : 'text-cyan-400')}>S{msg.step}</span>}
                      <span className="text-[9px] font-mono text-rose-400 ml-auto">🔒</span>
                    </div>
                    <p className="text-[10px] font-mono text-text-secondary leading-relaxed line-clamp-3 whitespace-pre-line">
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Execution checklist */}
          <div className="bg-bg-surface border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-bg-elevated flex items-center justify-between">
              <div className="text-xs font-display font-semibold text-text-primary">Checklist</div>
              <span className="text-xs font-mono text-violet-400">{execState.progress}%</span>
            </div>
            <div className="p-3">
              <div className="h-1 bg-bg-overlay rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${execState.progress}%` }}
                />
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {execState.checklist.map(item => (
                  <div
                    key={item.id}
                    onClick={() => { execEngine.toggleItem(item.id); setExecState(execEngine.getState()) }}
                    className="flex items-start gap-2 cursor-pointer group"
                  >
                    <div className={cn(
                      'mt-0.5 w-3.5 h-3.5 shrink-0 rounded border flex items-center justify-center text-[9px]',
                      item.done
                        ? 'bg-emerald-600/30 border-emerald-500/40 text-emerald-400'
                        : 'border-border group-hover:border-violet-500/40'
                    )}>
                      {item.done && '✓'}
                    </div>
                    <span className={cn(
                      'text-[10px] font-mono leading-tight',
                      item.done ? 'text-text-muted line-through' : item.critical ? 'text-text-primary' : 'text-text-secondary'
                    )}>
                      {item.label}
                      {item.critical && !item.done && <span className="text-rose-400 ml-1">*</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Context state summary */}
          <div className="bg-bg-surface border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-bg-elevated">
              <div className="text-xs font-display font-semibold text-text-primary">Session State</div>
            </div>
            <div className="p-3 space-y-2">
              {[
                { label: 'PROJECT', value: 'GTM Launch Build', color: 'text-violet-400' },
                { label: 'MODE', value: 'BUILD', color: 'text-cyan-400' },
                { label: 'LAST STEP', value: '2 — Headlines', color: 'text-amber-400' },
                { label: 'WORKSPACE', value: 'AgenticOS Workspace', color: 'text-text-primary' },
                { label: 'FRAMEWORK', value: 'TypeScript + Vite', color: 'text-text-primary' },
                { label: 'BLOCKERS', value: 'None', color: 'text-emerald-400' },
              ].map(row => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-text-muted">{row.label}</span>
                  <span className={cn('text-[10px] font-mono font-medium', row.color)}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
