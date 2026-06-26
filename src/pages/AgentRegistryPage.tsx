import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'

type AgentStatus = 'Active' | 'Candidate' | 'Coming v0.2'

const STATUS_CLS: Record<AgentStatus, string> = {
  'Active':      'bg-emerald-900/30 text-emerald-400 border-emerald-500/30',
  'Candidate':   'bg-amber-900/30 text-amber-400 border-amber-500/30',
  'Coming v0.2': 'bg-violet-900/20 text-violet-400 border-violet-500/30',
}

const AGENTS: Array<{
  name: string
  role: string
  status: AgentStatus
  input: string
  output: string
  safety: string
  next: string
}> = [
  {
    name: 'Architect Agent',
    role: 'Planning and structure design',
    status: 'Active',
    input: 'Task brief · tech stack · codebase context',
    output: 'Implementation plan · file map · phased execution steps',
    safety: 'Read-only. Does not write or modify files.',
    next: 'Export plan to Loop Engine',
  },
  {
    name: 'Builder Agent',
    role: 'Code generation and file editing',
    status: 'Active',
    input: 'Implementation plan · target file paths',
    output: 'Generated code · edited files · diff summary',
    safety: 'Scoped to specified paths only. Review before commit.',
    next: 'Send diff to QA Agent or Reviewer Agent',
  },
  {
    name: 'QA / Playwright Agent',
    role: 'Automated visual and functional testing',
    status: 'Candidate',
    input: 'Built code · test scenarios · URL endpoints',
    output: 'Test results · screenshots · regression report',
    safety: 'Headless browser only. No production write access.',
    next: 'Flag issues to Reviewer Agent',
  },
  {
    name: 'Reviewer Agent',
    role: 'Code review and approval decision',
    status: 'Candidate',
    input: 'Diff · test results · Builder context',
    output: 'Inline comments · approve / reject · suggested fixes',
    safety: 'Advisory only. Cannot merge without human approval.',
    next: 'Post review to PR or return to Builder',
  },
  {
    name: 'Deploy Agent',
    role: 'Preview and production deploy orchestration',
    status: 'Coming v0.2',
    input: 'Approved PR · environment config · deploy target',
    output: 'Deploy command · build logs · preview URL',
    safety: 'Preview only by default. Production requires explicit human trigger.',
    next: 'Open Vercel preview link',
  },
]

export default function AgentRegistryPage() {
  const counts = {
    active: AGENTS.filter(a => a.status === 'Active').length,
    candidate: AGENTS.filter(a => a.status === 'Candidate').length,
    coming: AGENTS.filter(a => a.status === 'Coming v0.2').length,
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-slide-up">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="text-3xl text-violet-400 shrink-0 mt-0.5">◈</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">Agent Registry</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30 bg-amber-900/20 text-amber-400 uppercase tracking-widest">
                v0.1 Partial
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Catalog of AI agents in the Agentic City OS execution stack. Each agent has a defined role, input contract, output schema, and safety boundary.
            </p>
            <div className="mt-3 flex gap-3 text-[10px] font-mono">
              <span className="text-emerald-400">{counts.active} Active</span>
              <span className="text-text-muted">/</span>
              <span className="text-amber-400">{counts.candidate} Candidate</span>
              <span className="text-text-muted">/</span>
              <span className="text-violet-400">{counts.coming} Coming v0.2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Agent cards */}
      <div className="space-y-3">
        {AGENTS.map(agent => (
          <div key={agent.name} className="pp-card-hover space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-display font-semibold text-text-primary">{agent.name}</div>
                <div className="text-xs text-text-secondary font-body mt-0.5">{agent.role}</div>
              </div>
              <span className={cn('text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0', STATUS_CLS[agent.status])}>
                {agent.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {([
                { label: 'INPUT', value: agent.input },
                { label: 'OUTPUT', value: agent.output },
                { label: 'SAFETY', value: agent.safety },
              ] as const).map(field => (
                <div key={field.label} className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">{field.label}</div>
                  <div className="text-[11px] font-body text-text-secondary leading-relaxed">{field.value}</div>
                </div>
              ))}
            </div>

            <div className="text-[10px] font-mono text-violet-400">
              NEXT ACTION — {agent.next}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="rounded-xl border border-border-strong bg-bg-elevated/60 p-4 text-xs font-body text-text-muted leading-relaxed">
        Agents marked <span className="text-amber-400 font-mono">Candidate</span> are defined and scoped but require manual invocation. Agents marked <span className="text-violet-400 font-mono">Coming v0.2</span> are designed but not yet wired into the execution stack. No agent runs autonomously without operator trigger.
      </div>
    </div>
  )
}
