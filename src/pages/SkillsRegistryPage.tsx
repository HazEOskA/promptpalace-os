import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'

type SkillStatus = 'Active' | 'Candidate' | 'Manual'

const STATUS_CLS: Record<SkillStatus, string> = {
  'Active':    'bg-emerald-900/30 text-emerald-400 border-emerald-500/30',
  'Candidate': 'bg-amber-900/30 text-amber-400 border-amber-500/30',
  'Manual':    'bg-cyan-900/30 text-cyan-400 border-cyan-500/30',
}

const SKILLS: Array<{
  name: string
  description: string
  status: SkillStatus
  enabledBy: string
  output: string
  activate: string
}> = [
  {
    name: 'Repo Discovery Skill',
    description: 'Scans repository structure, maps file relationships, and identifies entry points and key dependencies.',
    status: 'Active',
    enabledBy: 'Agent with file read access + Glob / Grep tools',
    output: 'Repo map · dependency graph · key files list · entry points',
    activate: 'Automatically available when Builder or Architect Agent is running.',
  },
  {
    name: 'Code Review Skill',
    description: 'Analyzes diffs for correctness bugs, security issues, and efficiency improvements with severity ratings.',
    status: 'Active',
    enabledBy: 'Diff output · context files · target language',
    output: 'Annotated review · severity ratings · inline fix suggestions',
    activate: 'Trigger via Reviewer Agent or /code-review slash command.',
  },
  {
    name: 'Remotion Video Skill',
    description: 'Generates Remotion-based animated video components from a script, data, or prompt. Requires Remotion project scaffold.',
    status: 'Candidate',
    enabledBy: 'Remotion project scaffolded in repo · video script or data input',
    output: 'Remotion component files · MP4 export · animation timeline',
    activate: 'Scaffold Remotion project first, then invoke from Builder Agent.',
  },
  {
    name: 'MCP Setup Skill',
    description: 'Configures Model Context Protocol server connections and makes tools available in the session.',
    status: 'Manual',
    enabledBy: 'MCP config file (settings.json) · server list · auth tokens',
    output: 'Connected MCP tools available in session · tool schema loaded',
    activate: 'Configure via /update-config or settings.json. Restart session after change.',
  },
  {
    name: 'Launch Pack Skill',
    description: 'Generates a complete product launch content kit: landing page, email sequence, and social content.',
    status: 'Candidate',
    enabledBy: 'Product brief · ICP definition · positioning doc',
    output: '7-piece launch kit: hero copy · 3 emails · 3 social posts · CTA variants',
    activate: 'Trigger from Loop Engine using the SaaS GTM loop template.',
  },
]

export default function SkillsRegistryPage() {
  const counts = {
    active: SKILLS.filter(s => s.status === 'Active').length,
    candidate: SKILLS.filter(s => s.status === 'Candidate').length,
    manual: SKILLS.filter(s => s.status === 'Manual').length,
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-slide-up">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="text-3xl text-amber-400 shrink-0 mt-0.5">⚡</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">Skills Registry</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30 bg-amber-900/20 text-amber-400 uppercase tracking-widest">
                v0.1 Partial
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Active and available skill modules for Agentic City OS. Skills extend what agents can do — from code review to launch content generation.
            </p>
            <div className="mt-3 flex gap-3 text-[10px] font-mono">
              <span className="text-emerald-400">{counts.active} Active</span>
              <span className="text-text-muted">/</span>
              <span className="text-amber-400">{counts.candidate} Candidate</span>
              <span className="text-text-muted">/</span>
              <span className="text-cyan-400">{counts.manual} Manual Setup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skill cards */}
      <div className="space-y-3">
        {SKILLS.map(skill => (
          <div key={skill.name} className="pp-card-hover space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-display font-semibold text-text-primary">{skill.name}</div>
                <div className="text-xs text-text-secondary font-body mt-0.5 leading-relaxed">{skill.description}</div>
              </div>
              <span className={cn('text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0', STATUS_CLS[skill.status])}>
                {skill.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {([
                { label: 'ENABLED BY', value: skill.enabledBy },
                { label: 'OUTPUT', value: skill.output },
              ] as const).map(field => (
                <div key={field.label} className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">{field.label}</div>
                  <div className="text-[11px] font-body text-text-secondary leading-relaxed">{field.value}</div>
                </div>
              ))}
            </div>

            <div className="text-[10px] font-mono text-amber-400">
              HOW TO ACTIVATE — {skill.activate}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="rounded-xl border border-border-strong bg-bg-elevated/60 p-4 text-xs font-body text-text-muted leading-relaxed">
        Skills marked <span className="text-emerald-400 font-mono">Active</span> are available in the current session. Skills marked <span className="text-cyan-400 font-mono">Manual</span> require one-time setup. Skills marked <span className="text-amber-400 font-mono">Candidate</span> are designed and scoped but not yet wired into the execution stack.
      </div>
    </div>
  )
}
