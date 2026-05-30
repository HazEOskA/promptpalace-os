export type ChecklistItem = {
  id: string
  label: string
  category: 'context' | 'code' | 'deploy' | 'test' | 'review'
  done: boolean
  critical: boolean
}

export type ExecutionPhase = 'step0' | 'step05' | 'step1' | 'step2' | 'complete'

export interface ExecutionState {
  phase: ExecutionPhase
  checklist: ChecklistItem[]
  startedAt: Date | null
  completedAt: Date | null
  progress: number // 0-100
}

const DEFAULT_CHECKLIST: ChecklistItem[] = [
  { id: 'c01', label: 'Context recovered from last session', category: 'context', done: true, critical: true },
  { id: 'c02', label: 'Last 5 messages locked', category: 'context', done: true, critical: true },
  { id: 'c03', label: 'Active workspace detected', category: 'context', done: true, critical: false },
  { id: 'c04', label: 'Execution mode confirmed (BUILD)', category: 'context', done: true, critical: false },
  { id: 'c05', label: 'Step 0: Context recovery run', category: 'context', done: false, critical: true },
  { id: 'c06', label: 'Step 0.5: Workspace detection run', category: 'context', done: false, critical: false },
  { id: 'c07', label: 'Step 1: Continuity check passed', category: 'context', done: false, critical: true },
  { id: 'c08', label: 'TypeScript types defined', category: 'code', done: false, critical: false },
  { id: 'c09', label: 'Core logic implemented', category: 'code', done: false, critical: true },
  { id: 'c10', label: 'Error handling added', category: 'code', done: false, critical: false },
  { id: 'c11', label: 'Mobile-friendly layout verified', category: 'review', done: false, critical: false },
  { id: 'c12', label: 'Build passes (npm run build)', category: 'deploy', done: false, critical: true },
  { id: 'c13', label: 'vercel.json configured', category: 'deploy', done: false, critical: false },
  { id: 'c14', label: 'README.md updated', category: 'deploy', done: false, critical: false },
]

export function createExecutionEngine() {
  let state: ExecutionState = {
    phase: 'step0',
    checklist: DEFAULT_CHECKLIST.map(i => ({ ...i })),
    startedAt: null,
    completedAt: null,
    progress: 28,
  }

  function getState(): ExecutionState {
    return {
      ...state,
      checklist: state.checklist.map(i => ({ ...i })),
    }
  }

  function toggleItem(id: string): void {
    state = {
      ...state,
      checklist: state.checklist.map(i =>
        i.id === id ? { ...i, done: !i.done } : i
      ),
    }
    recalcProgress()
  }

  function recalcProgress(): void {
    const total = state.checklist.length
    const done = state.checklist.filter(i => i.done).length
    state = { ...state, progress: Math.round((done / total) * 100) }
  }

  function advancePhase(): void {
    const phases: ExecutionPhase[] = ['step0', 'step05', 'step1', 'step2', 'complete']
    const currentIdx = phases.indexOf(state.phase)
    if (currentIdx < phases.length - 1) {
      const nextPhase = phases[currentIdx + 1]
      state = { ...state, phase: nextPhase }

      // Auto-check related items
      if (nextPhase === 'step05') {
        markDone('c05')
      } else if (nextPhase === 'step1') {
        markDone('c06')
      } else if (nextPhase === 'step2') {
        markDone('c07')
      } else if (nextPhase === 'complete') {
        state = { ...state, completedAt: new Date() }
      }
    }
  }

  function markDone(id: string): void {
    state = {
      ...state,
      checklist: state.checklist.map(i =>
        i.id === id ? { ...i, done: true } : i
      ),
    }
    recalcProgress()
  }

  function startExecution(): void {
    state = { ...state, startedAt: new Date() }
  }

  function resetChecklist(): void {
    state = {
      ...state,
      checklist: DEFAULT_CHECKLIST.map(i => ({ ...i })),
      phase: 'step0',
      startedAt: null,
      completedAt: null,
      progress: 28,
    }
  }

  return {
    getState,
    toggleItem,
    advancePhase,
    startExecution,
    resetChecklist,
  }
}

export type ExecutionEngineInstance = ReturnType<typeof createExecutionEngine>
