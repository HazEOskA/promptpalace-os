import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Copy, GitBranch, Sparkles, Zap } from 'lucide-react'
import { PROMPTS } from '../data/prompts'
import { ALL_PROMPTS } from '../data/index'
import { WORKFLOW_TEMPLATES } from '../data/workflows'
import { SKILLS } from '../data/skills'
import { formatNumber, cn } from '../lib/utils'

const STATS = [
  { label: 'Total Prompts', value: ALL_PROMPTS.length.toString(), delta: 'Production-ready', color: 'violet', icon: '◈' },
  { label: 'Categories', value: '20', delta: 'All domains', color: 'cyan', icon: '⬟' },
  { label: 'Active Skills', value: '4', delta: 'of 8 loaded', color: 'amber', icon: '⚡' },
  { label: 'Workflow Templates', value: '3', delta: 'Ready to use', color: 'emerald', icon: '⟳' },
]

const QUICK_CATEGORIES = [
  { id: 'coding',      label: 'Coding',      icon: '{ }', color: 'text-cyan-400',   border: 'hover:border-cyan-500/40' },
  { id: 'writing',     label: 'Writing',     icon: '✍',  color: 'text-pink-400',   border: 'hover:border-pink-500/40' },
  { id: 'marketing',   label: 'Marketing',   icon: '↗',  color: 'text-rose-400',   border: 'hover:border-rose-500/40' },
  { id: 'ai-personas', label: 'AI Personas', icon: '⬡',  color: 'text-violet-400', border: 'hover:border-violet-500/40' },
  { id: 'creative',    label: 'Creative',    icon: '✦',  color: 'text-orange-400', border: 'hover:border-orange-500/40' },
  { id: 'analysis',    label: 'Analysis',    icon: '⊟',  color: 'text-blue-400',   border: 'hover:border-blue-500/40' },
  { id: 'business',    label: 'Business',    icon: '◆',  color: 'text-amber-400',  border: 'hover:border-amber-500/40' },
  { id: 'learning',    label: 'Learning',    icon: '◎',  color: 'text-teal-400',   border: 'hover:border-teal-500/40' },
]

const STEP_CARDS = [
  {
    step: 'STEP 0',
    label: 'Context Recovery',
    desc: 'Scan last 5 messages. Identify active project, last step, blockers, and execution mode.',
    status: 'DONE',
    statusColor: 'text-emerald-400',
    cls: 'step-0',
    link: '/context',
  },
  {
    step: 'STEP 0.5',
    label: 'Workspace Detection',
    desc: 'Detect active workspace, framework, open files, and build system.',
    status: 'DONE',
    statusColor: 'text-emerald-400',
    cls: 'step-05',
    link: '/context',
  },
  {
    step: 'STEP 1',
    label: 'Execution Continuity',
    desc: 'Resume from last checkpoint. Initialize new scaffold if none found.',
    status: 'READY',
    statusColor: 'text-amber-400',
    cls: 'step-1',
    link: '/builder',
  },
  {
    step: 'STEP 2',
    label: 'Build / Execute',
    desc: 'Execute current task with context-aware generation and skill routing.',
    status: 'WAITING',
    statusColor: 'text-text-muted',
    cls: 'step-2',
    link: '/builder',
  },
]

export default function Dashboard() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const trendingPrompts = PROMPTS.filter(p => p.trending).slice(0, 4)
  const activeSkills = SKILLS.filter(s => s.active)

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content).catch(() => {})
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-slide-up">

      {/* Mission Control Banner */}
      <section className="relative overflow-hidden rounded-xl border border-violet-500/25 bg-bg-surface p-5 shadow-card md:p-7 lg:p-8">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(6,182,212,0.14),transparent_28%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent" />

        <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:items-center">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-900/30 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              Mission Control
            </div>

            <h1 className="max-w-3xl text-3xl font-display font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              Your AI Prompt Command Center.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">
              Stop guessing prompts. Deploy battle-tested AI workflows, ready-to-use prompt packs, and curated automation frameworks designed for builders, creators, and scale.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/trending" className="pp-btn-primary w-full justify-center sm:w-auto">
                <Zap className="h-4 w-4" />
                <span>Explore Trending Packs</span>
              </Link>
              <Link to="/prompts" className="pp-btn-secondary w-full justify-center sm:w-auto">
                <GitBranch className="h-4 w-4" />
                <span>Browse Library</span>
              </Link>
            </div>

            <p className="mt-3 text-xs font-mono text-text-muted">
              No setup required. Copy, adjust, and dominate your AI workflows.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ['01', 'Browse & Search', 'Filter by category, difficulty, or keyword to find the right prompt.'],
                ['02', 'Expand & Copy', 'Click any prompt to reveal the full text. Copy with one click.'],
                ['03', 'Fill & Execute', 'Replace [BRACKETED] variables with your context and paste into any AI.'],
              ].map(([step, title, desc]) => (
                <div key={step} className="rounded-lg border border-border bg-bg-elevated/80 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-cyan-400">[{step}]</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <div className="text-sm font-display font-semibold text-text-primary">{title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="rounded-xl border border-border-strong bg-bg-elevated/90 p-3 shadow-violet">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-text-muted">Workflow Chain</div>
                  <div className="text-sm font-display font-semibold text-text-primary">Launch Sequence</div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-900/40 px-2 py-1 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  READY
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="rounded-lg border border-violet-500/25 bg-bg-surface p-3">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="text-sm font-display font-semibold text-text-primary">Category Pack</div>
                    <span className="pp-badge-violet">Trending</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['SaaS', 'Growth', 'Coding'].map(tag => (
                      <span key={tag} className="rounded-md border border-cyan-500/20 bg-cyan-900/30 px-2 py-1 text-[10px] font-mono text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center text-text-muted">
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </div>

                <div className="rounded-lg border border-cyan-500/20 bg-bg-surface p-3">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="text-sm font-display font-semibold text-text-primary">Prompt Payload</div>
                    <div className="inline-flex items-center gap-1 rounded-md border border-border bg-bg-elevated px-2 py-1 text-[10px] font-mono text-text-secondary">
                      <Copy className="h-3 w-3" />
                      Copy
                    </div>
                  </div>
                  <div className="rounded-md bg-bg-base/80 p-2 font-mono text-[11px] leading-relaxed text-text-secondary">
                    Build a launch plan for <span className="text-violet-400">{'{{target_audience}}'}</span> using <span className="text-cyan-400">{'{{product_core}}'}</span> as the conversion engine.
                  </div>
                </div>

                <div className="flex justify-center text-text-muted">
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </div>

                <div className="rounded-lg border border-emerald-500/20 bg-emerald-900/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="glow-dot" />
                    <div className="text-sm font-display font-semibold text-emerald-400">Output Ready</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-emerald-400/60" />
                    <div className="h-2 w-5/6 rounded-full bg-cyan-400/30" />
                    <div className="h-2 w-2/3 rounded-full bg-violet-400/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick category browse */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="pp-section-title">Browse by Category</div>
          <Link to="/prompts" className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors">
            Full library ({ALL_PROMPTS.length} prompts) →
          </Link>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {QUICK_CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to="/prompts"
              className={cn(
                'flex flex-col items-center gap-1.5 p-3 rounded-lg bg-bg-elevated border border-border transition-all group text-center',
                cat.border
              )}
            >
              <span className={`text-lg ${cat.color} group-hover:scale-110 transition-transform`}>{cat.icon}</span>
              <span className="text-[10px] font-body font-medium text-text-secondary group-hover:text-text-primary transition-colors leading-tight">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Previous session bar */}
      <div className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-bg-surface p-5 md:p-6">
        <div className="absolute inset-0 bg-violet-glow opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="step-0">STEP 0</span>
              <span className="text-text-muted text-xs font-mono">→ CONTEXT RECOVERED</span>
              <div className="glow-dot" />
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary">
              Welcome back to <span className="text-gradient-violet">WOLF Protocol</span>
            </h2>
            <p className="text-sm text-text-secondary mt-1 font-body">
              Last session: Metaplex metadata upload — Step 2 in progress.
              Framework: <span className="text-violet-400 font-mono">TypeScript + Vite</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/builder" className="pp-btn-primary text-sm">
              <span>◎</span>
              <span>Resume Build</span>
            </Link>
            <Link to="/context" className="pp-btn-secondary text-sm">
              <span>⌥</span>
              <span>Context</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STATS.map(stat => (
          <div key={stat.label} className="pp-card-hover">
            <div className="flex items-start justify-between mb-3">
              <span className="text-lg text-text-muted">{stat.icon}</span>
              <span className={`text-xs font-mono text-${stat.color}-400 bg-${stat.color}-900/30 px-1.5 py-0.5 rounded`}>
                {stat.delta}
              </span>
            </div>
            <div className={`text-2xl font-display font-bold text-${stat.color}-400`}>{stat.value}</div>
            <div className="text-xs font-body text-text-muted mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* AI OS Steps */}
      <div>
        <div className="pp-label mb-3">AI OS EXECUTION PROTOCOL</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STEP_CARDS.map(card => (
            <Link
              key={card.step}
              to={card.link}
              className="pp-card-hover group flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className={card.cls}>{card.step}</span>
                <span className={`text-xs font-mono ${card.statusColor}`}>{card.status}</span>
              </div>
              <div className="text-sm font-display font-semibold text-text-primary group-hover:text-violet-300 transition-colors">
                {card.label}
              </div>
              <p className="text-xs text-text-secondary font-body leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Two-col layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Trending prompts */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div className="pp-section-title">Trending Prompts</div>
            <Link to="/trending" className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-2">
            {trendingPrompts.map(p => (
              <div key={p.id} className="pp-card-hover flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="pp-badge-violet">{p.category}</span>
                    <span className="text-xs font-mono text-rose-400">🔥 {p.trendingScore}</span>
                  </div>
                  <div className="text-sm font-display font-semibold text-text-primary line-clamp-1">{p.title}</div>
                  <p className="text-xs text-text-secondary mt-0.5 line-clamp-2 font-body">{p.description}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono text-text-muted">
                    <span>↑ {formatNumber(p.uses)} uses</span>
                    <span>★ {formatNumber(p.saves)} saves</span>
                    <span className="pp-badge-cyan">{p.model}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(p.id, p.content)}
                  className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-150 border-border hover:border-violet-500/50 text-text-muted hover:text-violet-400"
                >
                  {copiedId === p.id ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right col */}
        <div className="space-y-4">

          {/* Active Skills */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="pp-section-title">Active Skills</div>
              <Link to="/builder" className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
                Manage →
              </Link>
            </div>
            <div className="space-y-2">
              {activeSkills.map(skill => (
                <div key={skill.id} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-bg-elevated border border-border">
                  <span className="text-lg w-6 text-center">{skill.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-body font-medium text-text-primary">{skill.name}</div>
                    <div className="text-[10px] font-mono text-text-muted truncate">{skill.capabilities.slice(0, 3).join(' · ')}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-3 rounded-sm ${i < skill.powerLevel ? 'bg-violet-500' : 'bg-bg-overlay'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow preview */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="pp-section-title">Quick Workflows</div>
              <Link to="/workflows" className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors">
                All →
              </Link>
            </div>
            <div className="space-y-2">
              {WORKFLOW_TEMPLATES.slice(0, 2).map(wf => (
                <Link
                  key={wf.id}
                  to="/workflows"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-bg-elevated border border-border hover:border-border-strong hover:bg-bg-elevated/80 transition-all group"
                >
                  <span className="text-amber-400 text-lg">⟳</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-body font-medium text-text-primary group-hover:text-amber-300 transition-colors line-clamp-1">{wf.name}</div>
                    <div className="text-[10px] font-mono text-text-muted">{wf.steps.length} steps · {formatNumber(wf.uses)} uses</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
