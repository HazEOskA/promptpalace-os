import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'

type CandidateStatus = 'Candidate' | 'Future'

const STATUS_CLS: Record<CandidateStatus, string> = {
  'Candidate': 'bg-amber-900/30 text-amber-400 border-amber-500/30',
  'Future':    'bg-violet-900/20 text-violet-400 border-violet-500/30',
}

const CANDIDATES: Array<{
  name: string
  status: CandidateStatus
  description: string
  trigger: string
  inputs: string
  outputs: string
  approval: string
  exportAvailable: boolean
}> = [
  {
    name: 'Daily Operator Report',
    status: 'Candidate',
    description: 'Summarize daily Agentic City OS session activity into a digest email.',
    trigger: 'Daily cron — 09:00 UTC (manually triggered until automation is wired)',
    inputs: 'Session logs · completed loops · deploy count · open PRs',
    outputs: 'Email digest draft (HTML) · summary stats · list of pending actions',
    approval: 'Human reviews digest template before enabling auto-send. No auto-send without God Layer approval.',
    exportAvailable: false,
  },
  {
    name: 'Mentor Outreach Loop',
    status: 'Candidate',
    description: 'Draft and stage personalized outreach emails to mentors based on context and goals.',
    trigger: 'Manual trigger per outreach batch — not automated',
    inputs: 'Target list · context notes · outreach goal · tone guide',
    outputs: 'Draft email per contact · outreach tracker update · follow-up schedule',
    approval: 'Operator reviews and sends each email manually. No auto-send under any condition.',
    exportAvailable: false,
  },
  {
    name: 'Client AI Workflow Audit',
    status: 'Candidate',
    description: 'Run an AI Workflow Audit for a client and compile the results into a structured report.',
    trigger: 'Manual trigger per client engagement — not a scheduled automation',
    inputs: 'Client workflow description · tools in use · known pain points · audit scope',
    outputs: 'Gap analysis report · risk matrix · recommended improvements · summary deck outline',
    approval: 'Human reviews the full audit output before sharing with client. No auto-delivery.',
    exportAvailable: true,
  },
  {
    name: 'Content Repurpose Loop',
    status: 'Candidate',
    description: 'Automatically queue source content for multi-platform repurposing on a weekly cadence.',
    trigger: 'Weekly cron (Friday 17:00 UTC) — not yet wired, manual queue for now',
    inputs: 'Source content queue · platform list · brand voice config',
    outputs: 'Draft post per platform per piece · content calendar update',
    approval: 'All outputs are drafts. Human approves each post before scheduling. No auto-publish.',
    exportAvailable: false,
  },
  {
    name: 'Post-Deploy QA Reminder',
    status: 'Candidate',
    description: 'Send a QA checklist reminder to the operator after a Vercel preview deploy completes.',
    trigger: 'Vercel deploy webhook → n8n → notification (not yet configured)',
    inputs: 'Vercel deploy event · preview URL · branch name',
    outputs: 'Slack/email notification with QA checklist link and preview URL',
    approval: 'Notification only — no automated QA. Human runs the QA Playbook after receiving it.',
    exportAvailable: true,
  },
  {
    name: 'Gmail / Calendar Summary',
    status: 'Future',
    description: 'Daily digest of Gmail threads and Calendar events relevant to active projects.',
    trigger: 'Morning cron (08:00 UTC) — requires Gmail + Calendar MCP setup first',
    inputs: 'Gmail unread threads · Calendar events next 48h · active project labels',
    outputs: 'Prioritized inbox summary · calendar brief · suggested first action of the day',
    approval: 'Read-only digest. No email replies or event changes without explicit operator action.',
    exportAvailable: false,
  },
]

export default function N8nCandidatesPage() {
  const counts = {
    candidate: CANDIDATES.filter(c => c.status === 'Candidate').length,
    future: CANDIDATES.filter(c => c.status === 'Future').length,
    exportReady: CANDIDATES.filter(c => c.exportAvailable).length,
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-slide-up">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="text-3xl text-pink-400 shrink-0 mt-0.5">⊹</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">n8n Candidates</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-orange-500/30 bg-orange-900/20 text-orange-400 uppercase tracking-widest">
                Draft Only — Not Live
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Automation candidates for future n8n integration. These are design drafts only — not live automations. Nothing here runs automatically or sends anything without explicit human approval.
            </p>
            <div className="mt-3 flex gap-3 text-[10px] font-mono">
              <span className="text-amber-400">{counts.candidate} Candidate</span>
              <span className="text-text-muted">/</span>
              <span className="text-violet-400">{counts.future} Future</span>
              <span className="text-text-muted">/</span>
              <span className="text-cyan-400">{counts.exportReady} Export-ready drafts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safety notice */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-900/10 px-4 py-3 text-xs font-mono text-amber-400">
        GOD LAYER RULE — No automation in this registry sends email, posts to social, deploys code, or modifies external services without explicit human trigger and approval. These are design candidates only.
      </div>

      {/* Candidate cards */}
      <div className="space-y-3">
        {CANDIDATES.map(c => (
          <div key={c.name} className="pp-card-hover space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="text-sm font-display font-semibold text-text-primary">{c.name}</div>
                  {c.exportAvailable && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-900/30 text-cyan-400">
                      Export Draft Available
                    </span>
                  )}
                </div>
                <div className="text-xs text-text-secondary font-body mt-0.5">{c.description}</div>
              </div>
              <span className={cn('text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0', STATUS_CLS[c.status])}>
                {c.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {([
                { label: 'TRIGGER', value: c.trigger },
                { label: 'INPUTS', value: c.inputs },
                { label: 'OUTPUTS', value: c.outputs },
                { label: 'APPROVAL REQUIRED', value: c.approval },
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
        To use these as n8n workflows: export a Loop from the Loop Engine page as a draft JSON, then import manually into your n8n instance. This is not a live integration — it is a design-to-export pipeline only. No data is sent to n8n automatically.
      </div>
    </div>
  )
}
