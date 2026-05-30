import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROMPTS } from '../data/prompts'
import { WORKFLOW_TEMPLATES } from '../data/workflows'
import { SKILLS } from '../data/skills'
import { formatNumber } from '../lib/utils'

const STATS = [
  { label: 'Total Prompts', value: '10', delta: '+3 this week', color: 'violet', icon: '◈' },
  { label: 'Workflow Templates', value: '3', delta: 'Active', color: 'cyan', icon: '⟳' },
  { label: 'Active Skills', value: '4', delta: 'of 8 loaded', color: 'amber', icon: '⚡' },
  { label: 'Sessions Today', value: '7', delta: '2h 14m active', color: 'emerald', icon: '◉' },
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

      {/* Hero bar */}
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
