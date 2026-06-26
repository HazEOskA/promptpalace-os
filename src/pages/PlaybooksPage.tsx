import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'

type PlaybookStatus = 'Active' | 'Draft'

const STATUS_CLS: Record<PlaybookStatus, string> = {
  'Active': 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30',
  'Draft':  'bg-amber-900/30 text-amber-400 border-amber-500/30',
}

const PLAYBOOKS: Array<{
  title: string
  status: PlaybookStatus
  whenToUse: string
  steps: string[]
  output: string
  validation: string
  next: string
}> = [
  {
    title: 'How to run a project with Agentic City OS',
    status: 'Active',
    whenToUse: 'Starting a new build, sprint, or feature from scratch.',
    steps: [
      'Define scope in one sentence — no scope, no start',
      'Run Context Recovery (Step 0) to lock project name and workspace',
      'Select a Loop or Workflow template that fits the goal',
      'Run Architect Agent to produce a phased implementation plan',
      'Execute plan with Builder Agent, phase by phase',
      'Run QA Agent after each major change',
      'Commit after QA passes — deploy Vercel preview only',
    ],
    output: 'Working Vercel preview · committed diff · QA pass report',
    validation: 'Human reviews the full diff. No merge to main without approval.',
    next: 'Open Loop Engine and select the matching loop template',
  },
  {
    title: 'How to use Claude safely in an agentic context',
    status: 'Active',
    whenToUse: 'Before starting any agentic session where Claude will edit files, call tools, or generate output for external use.',
    steps: [
      'Define what Claude is allowed to do — read, write, run, send, or deploy',
      'Set explicit boundaries: which files, which repos, which services',
      'Never give Claude access to production credentials in the same session',
      'Use the Reviewer Agent or human review before any commit is merged',
      'Never auto-send emails, auto-post, or auto-deploy from Claude output',
      'Log every agent action. Use the Context Recovery page to track state.',
      'When in doubt: stop, review, confirm — then resume',
    ],
    output: 'Clear agent permission boundary · audit trail · no unintended external actions',
    validation: 'Operator spot-checks a sample of Claude outputs before they leave the session.',
    next: 'Review Plugins / MCP page to confirm which integrations are active',
  },
  {
    title: 'How to validate a Vercel preview',
    status: 'Active',
    whenToUse: 'After every push to the preview branch before approving a PR.',
    steps: [
      'Open Vercel preview URL in both desktop and mobile viewport (390px)',
      'Check page title and browser tab — must say Agentic City OS',
      'Navigate: Dashboard → Trending → Categories → Loop Engine → Districts',
      'Confirm all nav links click and produce a visible page',
      'Check for mojibake: scan for ? â€" or garbled text in headers and cards',
      'Screenshot at least Dashboard, Trending, and one District page',
      'If any page fails: note the URL and error, do not approve the PR',
    ],
    output: 'Screenshot set · pass/fail verdict per page · mojibake count',
    validation: 'QA Agent or operator confirms 0 mojibake, all routes load, mobile viewport intact.',
    next: 'If all pass: approve PR. If any fail: file issue and revert deploy.',
  },
  {
    title: 'How to prepare a launch pack',
    status: 'Draft',
    whenToUse: 'When preparing to publicly launch a product, feature, or district module.',
    steps: [
      'Write a one-paragraph positioning statement (what / for whom / why now)',
      'Define the ICP (Ideal Customer Profile) in 3 bullet points',
      'Generate 5 hero headline variants using the Content Repurpose workflow',
      'Draft CTA copy and value proposition bullets (3-5 lines max)',
      'Prepare social announcement (Twitter thread + LinkedIn post)',
      'Record a 60-second screen walk through the core flow',
      'Stage all assets in a /launch folder before publishing anything',
    ],
    output: 'Positioning doc · headline variants · social drafts · staged asset folder',
    validation: 'Human reviews all assets. Nothing published until full kit is approved.',
    next: 'Trigger Content Repurpose Workflow in the Workflow Registry',
  },
  {
    title: 'How to document decisions and maintain a changelog',
    status: 'Draft',
    whenToUse: 'After every significant build decision, architecture change, or feature launch.',
    steps: [
      'Write the decision in one sentence: what was changed and why',
      'Note the alternatives considered and why they were rejected',
      'Record the date, author, and affected modules',
      'Add a rollback instruction: how to undo this change if needed',
      'Append to CHANGELOG.md with semver or date prefix',
      'If the change affects visible UI or behavior: add a QA validation note',
    ],
    output: 'CHANGELOG.md entry · decision record · rollback path documented',
    validation: 'Second operator confirms the rollback instruction is accurate.',
    next: 'Commit CHANGELOG.md in the same PR as the feature or fix',
  },
]

export default function PlaybooksPage() {
  const activeCounts = PLAYBOOKS.filter(p => p.status === 'Active').length
  const draftCount = PLAYBOOKS.filter(p => p.status === 'Draft').length

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-slide-up">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="text-3xl text-teal-400 shrink-0 mt-0.5">◎</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">Playbooks</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-teal-500/30 bg-teal-900/20 text-teal-400 uppercase tracking-widest">
                v0.1 Partial
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Curated operator guides for repeatable Agentic City OS workflows. Each playbook is a step-by-step sequence for a specific goal with built-in validation.
            </p>
            <div className="mt-3 flex gap-3 text-[10px] font-mono">
              <span className="text-emerald-400">{activeCounts} Active</span>
              <span className="text-text-muted">/</span>
              <span className="text-amber-400">{draftCount} Draft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Playbook cards */}
      <div className="space-y-4">
        {PLAYBOOKS.map(pb => (
          <div key={pb.title} className="pp-card-hover space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-display font-semibold text-text-primary">{pb.title}</div>
                <div className="mt-1 text-[10px] font-mono text-text-muted">
                  WHEN TO USE — {pb.whenToUse}
                </div>
              </div>
              <span className={cn('text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0', STATUS_CLS[pb.status])}>
                {pb.status}
              </span>
            </div>

            {/* Steps */}
            <div className="rounded-lg bg-bg-elevated/80 px-3 py-2.5 space-y-1.5">
              <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-2">STEPS</div>
              {pb.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[10px] font-mono text-violet-400 shrink-0 mt-0.5">{i + 1}.</span>
                  <span className="text-[11px] font-body text-text-secondary leading-relaxed">{step}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {([
                { label: 'OUTPUT', value: pb.output },
                { label: 'VALIDATION', value: pb.validation },
                { label: 'NEXT ACTION', value: pb.next },
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
        Playbooks marked <span className="text-emerald-400 font-mono">Active</span> are tested and operator-approved. Playbooks marked <span className="text-amber-400 font-mono">Draft</span> are structured but not yet validated in a live session. All playbooks require human judgment — they are guides, not autonomous scripts.
      </div>
    </div>
  )
}
