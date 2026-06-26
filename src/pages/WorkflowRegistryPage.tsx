import { Link } from 'react-router-dom'
import { ArrowLeft, Settings } from 'lucide-react'
import { cn } from '../lib/utils'

type WorkflowStatus = 'Ready' | 'Manual' | 'Candidate' | 'Coming next'

const STATUS_CLS: Record<WorkflowStatus, string> = {
  'Ready':       'bg-emerald-900/30 text-emerald-400 border-emerald-500/30',
  'Manual':      'bg-cyan-900/30 text-cyan-400 border-cyan-500/30',
  'Candidate':   'bg-amber-900/30 text-amber-400 border-amber-500/30',
  'Coming next': 'bg-violet-900/20 text-violet-400 border-violet-500/30',
}

const WORKFLOWS: Array<{
  name: string
  purpose: string
  status: WorkflowStatus
  input: string
  output: string
  validation: string
  rollback: string
}> = [
  {
    name: 'Project Intake → Architecture → Build → QA → Deploy',
    purpose: 'Full project execution lifecycle from brief to production preview.',
    status: 'Manual',
    input: 'Project brief · tech stack · scope definition · target framework',
    output: 'Deployed Vercel preview · QA report · PR ready for human review',
    validation: 'QA Agent runs Playwright tests. Reviewer Agent approves diff. Human confirms before merge.',
    rollback: 'Revert commit via git. Re-run from Build phase. No auto-deploy to production.',
  },
  {
    name: 'AI Workflow Audit',
    purpose: 'Assess an existing AI workflow for gaps, hallucination risks, and missing safety steps.',
    status: 'Ready',
    input: 'Workflow description · steps list · current output samples · known failure points',
    output: 'Gap analysis · risk rating per step · improved workflow draft · checklist of missing steps',
    validation: 'Human reviews the audit output before applying any changes to the workflow.',
    rollback: 'Audit is read-only. No changes applied without operator confirmation.',
  },
  {
    name: 'Content Repurpose Workflow',
    purpose: 'Transform one source piece into a multi-platform distribution suite.',
    status: 'Ready',
    input: 'Original content (blog, transcript, thread) · target platforms · brand voice notes',
    output: 'Twitter thread · LinkedIn post · email teaser · short-form video script · headline variants',
    validation: 'Operator reviews each output before publishing. No auto-post to any platform.',
    rollback: 'All outputs are drafts. Nothing published without explicit human approval per platform.',
  },
  {
    name: 'Voice Agent MVP Workflow',
    purpose: 'Build a minimal voice agent — script, prompt stack, intent map, and session handling.',
    status: 'Candidate',
    input: 'Agent persona · use case · key conversation flows · escalation conditions',
    output: 'Voice script · system prompt stack · intent map · session recovery logic · handoff protocol',
    validation: 'Test full prompt stack manually in Claude/GPT before connecting to any voice API.',
    rollback: 'No live voice connection until prompt stack is manually validated and approved.',
  },
  {
    name: 'Post-Deploy Validation Workflow',
    purpose: 'Validate a Vercel preview after deploy: visual QA, link check, and mobile viewport test.',
    status: 'Manual',
    input: 'Preview URL · pages to check · viewport sizes (desktop / mobile) · known regressions list',
    output: 'Screenshot set per page · regression notes · pass/fail verdict per page and viewport',
    validation: 'QA Agent captures screenshots. Operator reviews all before approving PR merge.',
    rollback: 'If any page fails: flag to Reviewer Agent. Revert deploy. Do not merge to main.',
  },
]

export default function WorkflowRegistryPage() {
  const counts = {
    ready: WORKFLOWS.filter(w => w.status === 'Ready').length,
    manual: WORKFLOWS.filter(w => w.status === 'Manual').length,
    candidate: WORKFLOWS.filter(w => w.status === 'Candidate').length,
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-slide-up">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeft className="h-3 w-3" /> Back to Dashboard
        </Link>
        <Link
          to="/workflows/generator"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors"
        >
          <Settings className="h-3 w-3" />
          Open Generator
        </Link>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="text-3xl text-orange-400 shrink-0 mt-0.5">⟳</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">Workflow Registry</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-orange-500/30 bg-orange-900/20 text-orange-400 uppercase tracking-widest">
                v0.1 Partial
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Catalog of multi-step AI execution workflows. Each workflow defines a complete input-to-output chain with validation gates and rollback steps.
            </p>
            <div className="mt-3 flex gap-3 text-[10px] font-mono">
              <span className="text-emerald-400">{counts.ready} Ready</span>
              <span className="text-text-muted">/</span>
              <span className="text-cyan-400">{counts.manual} Manual</span>
              <span className="text-text-muted">/</span>
              <span className="text-amber-400">{counts.candidate} Candidate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow cards */}
      <div className="space-y-3">
        {WORKFLOWS.map(wf => (
          <div key={wf.name} className="pp-card-hover space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-display font-semibold text-text-primary">{wf.name}</div>
                <div className="text-xs text-text-secondary font-body mt-0.5">{wf.purpose}</div>
              </div>
              <span className={cn('text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0', STATUS_CLS[wf.status])}>
                {wf.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {([
                { label: 'INPUT', value: wf.input },
                { label: 'OUTPUT', value: wf.output },
                { label: 'VALIDATION', value: wf.validation },
                { label: 'ROLLBACK / SAFETY', value: wf.rollback },
              ] as const).map(field => (
                <div key={field.label} className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">{field.label}</div>
                  <div className="text-[11px] font-body text-text-secondary leading-relaxed">{field.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="rounded-xl border border-border-strong bg-bg-elevated/60 p-4 text-xs font-body text-text-muted leading-relaxed">
        Workflows marked <span className="text-emerald-400 font-mono">Ready</span> can be run now using the Loop Engine or Project Builder. Workflows marked <span className="text-cyan-400 font-mono">Manual</span> require operator-guided execution. <span className="text-amber-400 font-mono">Candidate</span> workflows are designed but not yet fully templated. No workflow runs autonomously — every step requires operator trigger or explicit confirmation.
      </div>
    </div>
  )
}
