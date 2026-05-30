import type { Workflow, WorkflowStep, WorkflowStatus } from '../data/workflows'

export interface WorkflowRunState {
  workflowId: string
  currentStepIdx: number
  steps: WorkflowStep[]
  startedAt: Date | null
  completedAt: Date | null
  running: boolean
  error: string | null
}

export function createWorkflowRunner(workflow: Workflow) {
  let state: WorkflowRunState = {
    workflowId: workflow.id,
    currentStepIdx: -1,
    steps: workflow.steps.map(s => ({ ...s, status: 'idle' as WorkflowStatus })),
    startedAt: null,
    completedAt: null,
    running: false,
    error: null,
  }

  function getState(): WorkflowRunState {
    return {
      ...state,
      steps: state.steps.map(s => ({ ...s })),
    }
  }

  function setStepStatus(idx: number, status: WorkflowStatus, output?: string): void {
    state = {
      ...state,
      steps: state.steps.map((s, i) =>
        i === idx ? { ...s, status, output: output ?? s.output } : s
      ),
    }
  }

  async function runAll(
    onStepChange: (state: WorkflowRunState) => void,
    delayMs = 1200
  ): Promise<void> {
    if (state.running) return

    state = { ...state, running: true, startedAt: new Date() }
    onStepChange(getState())

    for (let i = 0; i < state.steps.length; i++) {
      state = { ...state, currentStepIdx: i }
      setStepStatus(i, 'running')
      onStepChange(getState())

      await delay(delayMs + Math.random() * 800)

      const step = state.steps[i]
      const output = generateStepOutput(step)
      setStepStatus(i, 'done', output)
      onStepChange(getState())
    }

    state = {
      ...state,
      running: false,
      completedAt: new Date(),
      currentStepIdx: -1,
    }
    onStepChange(getState())
  }

  function reset(): void {
    state = {
      workflowId: workflow.id,
      currentStepIdx: -1,
      steps: workflow.steps.map(s => ({ ...s, status: 'idle' as WorkflowStatus })),
      startedAt: null,
      completedAt: null,
      running: false,
      error: null,
    }
  }

  function skipStep(idx: number): void {
    setStepStatus(idx, 'skipped')
  }

  return { getState, runAll, reset, skipStep }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function generateStepOutput(step: WorkflowStep): string {
  const outputs: Record<string, string> = {
    context: '✓ Context recovered. Session state loaded.',
    research: '✓ Research complete. 12 data points collected.',
    generate: '✓ Output generated. Ready for review.',
    review: '✓ Review passed. No critical issues found.',
    export: '✓ Exported to Markdown. Download ready.',
    deploy: '✓ Deploy config generated. Vercel-ready.',
    validate: '✓ Validation passed. All checks green.',
  }
  return outputs[step.type] ?? '✓ Step complete.'
}

export type WorkflowRunner = ReturnType<typeof createWorkflowRunner>
