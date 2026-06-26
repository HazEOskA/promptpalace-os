import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight, CheckCircle2, Copy, GitBranch, Sparkles, Zap,
  FileText, LayoutGrid, Code2, PenLine, Megaphone, Bot, Palette,
  BarChart2, Briefcase, GraduationCap, RefreshCw, Wrench,
} from 'lucide-react'
import { PROMPTS } from '../data/prompts'
import { ALL_PROMPTS } from '../data/index'
import { WORKFLOW_TEMPLATES } from '../data/workflows'
import { SKILLS } from '../data/skills'
import { formatNumber, cn } from '../lib/utils'

const DISTRICTS = [
  { slug: 'registry',  label: 'Agent Registry', icon: '◈', color: 'text-violet-400', border: 'hover:border-violet-500/40', to: '/registry' },
  { slug: 'skills',    label: 'Skills Registry', icon: '⚡', color: 'text-amber-400',  border: 'hover:border-amber-500/40',  to: '/skills' },
  { slug: 'plugins',   label: 'Plugins / MCP',   icon: '⬡', color: 'text-cyan-400',   border: 'hover:border-cyan-500/40',   to: '/plugins' },
  { slug: 'workflows', label: 'Workflows',        icon: '⟳', color: 'text-orange-400', border: 'hover:border-orange-500/40', to: '/workflows' },
  { slug: 'loop',      label: 'Loop Engine',      icon: '↺', color: 'text-rose-400',   border: 'hover:border-rose-500/40',   to: '/loop' },
  { slug: 'prompts',   label: 'PromptPalace',     icon: '≡', color: 'text-blue-400',   border: 'hover:border-blue-500/40',   to: '/prompts' },
  { slug: 'playbooks', label: 'Playbooks',        icon: '◎', color: 'text-teal-400',   border: 'hover:border-teal-500/40',   to: '/playbooks' },
  { slug: 'n8n',       label: 'n8n Candidates',   icon: '⊹', color: 'text-pink-400',   border: 'hover:border-pink-500/40',   to: '/n8n' },
]

const STATS: Array<{ label: string; value: string; delta: string; color: string; icon: LucideIcon }> = [
  { label: 'Total Prompts', value: ALL_PROMPTS.length.toString(), delta: 'Production-ready', color: 'violet', icon: FileText },
  { label: 'Categories', value: '20', delta: 'All domains', color: 'cyan', icon: LayoutGrid },
  { label: 'Active Skills', value: '4', delta: 'of 8 loaded', color: 'amber', icon: Zap },
  { label: 'Workflow Templates', value: '3', delta: 'Ready to use', color: 'emerald', icon: GitBranch },
]

const QUICK_CATEGORIES: Array<{ id: string; label: string; icon: LucideIcon; color: string; border: string }> = [
  { id: 'coding',      label: 'Coding',      icon: Code2,         color: 'text-cyan-400',   border: 'hover:border-cyan-500/40' },
  { id: 'writing',     label: 'Writing',     icon: PenLine,       color: 'text-pink-400',   border: 'hover:border-pink-500/40' },
  { id: 'marketing',   label: 'Marketing',   icon: Megaphone,     color: 'text-rose-400',   border: 'hover:border-rose-500/40' },
  { id: 'ai-personas', label: 'AI Personas', icon: Bot,           color: 'text-violet-400', border: 'hover:border-violet-500/40' },
  { id: 'creative',    label: 'Creative',    icon: Palette,       color: 'text-orange-400', border: 'hover:border-orange-500/40' },
  { id: 'analysis',    label: 'Analysis',    icon: BarChart2,     color: 'text-blue-400',   border: 'hover:border-blue-500/40' },
  { id: 'business',    label: 'Business',    icon: Briefcase,     color: 'text-amber-400',  border: 'hover:border-amber-500/40' },
  { id: 'learning',    label: 'Learning',    icon: GraduationCap, color: 'text-teal-400',   border: 'hover:border-teal-500/40' },
]

const STEP_CARDS = [
  {
    step: 'START',
    label: 'Pick a District',
    desc: 'Navigate to the module that fits your task — agents, skills, loops, or workflows.',
    status: 'READY',
    statusColor: 'text-emerald-400',
    cls: 'step-0',
    link: '/registry',
  },
  {
    step: 'PLAN',
    label: 'Build a Loop',
    desc: 'Select a loop template or design a custom phase-by-phase execution sequence.',
    status: 'READY',
    statusColor: 'text-emerald-400',
    cls: 'step-05',
    link: '/loop',
  },
  {
    step: 'BUILD',
    label: 'Execute with Builder',
    desc: 'Load your context, activate skills, and run the Builder Agent phase by phase.',
    status: 'ACTIVE',
    statusColor: 'text-amber-400',
    cls: 'step-1',
    link: '/builder',
  },
  {
    step: 'SHIP',
    label: 'Deploy and Validate',
    desc: 'Preview-deploy, run the QA Playbook, and confirm before merge.',
    status: 'WAITING',
    statusColor: 'text-text-muted',
    cls: 'step-2',
    link: '/playbooks',
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

        <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:items-center">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-900/30 px-3 py-1 text-xs font-mono uppercase tracking-widest text-violet-400">
              <Sparkles className="h-3.5 w-3.5" />
              Agentic City OS
            </div>

            <h1 className="max-w-3xl text-3xl font-display font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              Run the city of your <span className="text-gradient-violet">AI work.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">
              Organize agents, skills, plugins, workflows, loops, prompts and playbooks into one execution workspace.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/builder" className="pp-btn-primary w-full justify-center sm:w-auto">
                <Wrench className="h-4 w-4" />
                <span>Open Builder</span>
              </Link>
              <Link to="/loop" className="pp-btn-secondary w-full justify-center sm:w-auto">
                <RefreshCw className="h-4 w-4" />
                <span>Start a Loop</span>
              </Link>
            </div>

            <div className="mt-3 flex items-center gap-3 text-xs font-mono text-text-muted">
              <Link to="/registry" className="hover:text-violet-400 transition-colors">Explore Districts</Link>
              <span>/</span>
              <Link to="/playbooks" className="hover:text-teal-400 transition-colors">Read Playbooks</Link>
              <span>/</span>
              <Link to="/workflows" className="hover:text-orange-400 transition-colors">View Workflows</Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ['01', 'Pick a District', 'Navigate to agents, skills, loops, workflows, or playbooks.'],
                ['02', 'Load Your Tools', 'Activate skills, connect plugins, and prepare your prompt stack.'],
                ['03', 'Execute the Loop', 'Run the Loop Engine or deploy with the Builder phase by phase.'],
              ].map(([step, title, desc]) => (
                <div key={step} className="rounded-lg border border-border bg-bg-elevated/80 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-violet-400">[{step}]</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <div className="text-sm font-display font-semibold text-text-primary">{title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* District OS Status panel */}
          <div className="relative min-w-0">
            <div className="rounded-xl border border-border-strong bg-bg-elevated/90 p-4 shadow-violet">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-text-muted">City OS</div>
                  <div className="text-sm font-display font-semibold text-text-primary">District Status</div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-900/40 px-2 py-1 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  8 ONLINE
                </div>
              </div>

              <div className="space-y-1.5">
                {DISTRICTS.map(d => (
                  <Link
                    key={d.slug}
                    to={d.to}
                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 hover:bg-bg-overlay transition-colors group"
                  >
                    <span className={`text-sm shrink-0 ${d.color}`}>{d.icon}</span>
                    <span className="flex-1 text-xs font-body font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">{d.label}</span>
                    <ArrowRight className="h-3 w-3 text-text-muted group-hover:text-violet-400 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-muted">8 districts active</span>
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                  ))}
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
            Full library ({ALL_PROMPTS.length} prompts)
          </Link>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {QUICK_CATEGORIES.map(cat => {
            const CatIcon = cat.icon
            return (
              <Link
                key={cat.id}
                to="/prompts"
                className={cn(
                  'flex flex-col items-center gap-1.5 p-3 rounded-lg bg-bg-elevated border border-border transition-all group text-center',
                  cat.border
                )}
              >
                <CatIcon className={`h-5 w-5 ${cat.color} group-hover:scale-110 transition-transform`} />
                <span className="text-[10px] font-body font-medium text-text-secondary group-hover:text-text-primary transition-colors leading-tight">{cat.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* District Modules */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="pp-section-title">Districts</div>
          <span className="text-xs font-mono text-text-muted">8 active modules</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {DISTRICTS.map(d => (
            <Link
              key={d.slug}
              to={d.to}
              className={cn(
                'flex flex-col items-center gap-1.5 p-3 rounded-lg bg-bg-elevated border border-border transition-all group text-center',
                d.border
              )}
            >
              <span className={`text-lg ${d.color} group-hover:scale-110 transition-transform`}>{d.icon}</span>
              <span className="text-[10px] font-body font-medium text-text-secondary group-hover:text-text-primary transition-colors leading-tight">{d.label}</span>
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
              <span className="text-text-muted text-xs font-mono">CONTEXT RECOVERED</span>
              <div className="glow-dot" />
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary">
              <span className="text-gradient-violet">Agentic City OS</span> — Your AI Execution Workspace
            </h2>
            <p className="text-sm text-text-secondary mt-1 font-body">
              8 districts active. Loop Engine ready. PromptPalace online.
              Runs with <span className="text-violet-400 font-mono">ChatGPT, Claude, Gemini, Perplexity</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/builder" className="pp-btn-primary text-sm">
              Open Builder
            </Link>
            <Link to="/context" className="pp-btn-secondary text-sm">
              How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STATS.map(stat => {
          const StatIcon = stat.icon
          return (
            <div key={stat.label} className="pp-card-hover">
              <div className="flex items-start justify-between mb-3">
                <StatIcon className="h-5 w-5 text-text-muted" />
                <span className={`text-xs font-mono text-${stat.color}-400 bg-${stat.color}-900/30 px-1.5 py-0.5 rounded`}>
                  {stat.delta}
                </span>
              </div>
              <div className={`text-2xl font-display font-bold text-${stat.color}-400`}>{stat.value}</div>
              <div className="text-xs font-body text-text-muted mt-0.5">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* AI OS Steps */}
      <div>
        <div className="pp-label mb-3">AGENTIC CITY OS — EXECUTION FLOW</div>
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
              View all
            </Link>
          </div>
          <div className="space-y-2">
            {trendingPrompts.map(p => (
              <div key={p.id} className="pp-card-hover flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="pp-badge-violet">{p.category}</span>
                    <span className="text-xs font-mono text-rose-400">HOT {p.trendingScore}</span>
                  </div>
                  <div className="text-sm font-display font-semibold text-text-primary line-clamp-1">{p.title}</div>
                  <p className="text-xs text-text-secondary mt-0.5 line-clamp-2 font-body">{p.description}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono text-text-muted">
                    <span>^ {formatNumber(p.uses)} uses</span>
                    <span>* {formatNumber(p.saves)} saves</span>
                    <span className="pp-badge-cyan">{p.model}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(p.id, p.content)}
                  className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-150 border-border hover:border-violet-500/50 text-text-muted hover:text-violet-400"
                >
                  {copiedId === p.id ? 'OK Copied' : 'Copy'}
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
                Manage
              </Link>
            </div>
            <div className="space-y-2">
              {activeSkills.map(skill => (
                <div key={skill.id} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-bg-elevated border border-border">
                  <span className="text-lg w-6 text-center">{skill.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-body font-medium text-text-primary">{skill.name}</div>
                    <div className="text-[10px] font-mono text-text-muted truncate">{skill.capabilities.slice(0, 3).join(' / ')}</div>
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
                All
              </Link>
            </div>
            <div className="space-y-2">
              {WORKFLOW_TEMPLATES.slice(0, 2).map(wf => (
                <Link
                  key={wf.id}
                  to="/workflows"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-bg-elevated border border-border hover:border-border-strong hover:bg-bg-elevated/80 transition-all group"
                >
                  <span className="text-amber-400 text-xs font-mono">[WF]</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-body font-medium text-text-primary group-hover:text-amber-300 transition-colors line-clamp-1">{wf.name}</div>
                    <div className="text-[10px] font-mono text-text-muted">{wf.steps.length} steps / {formatNumber(wf.uses)} uses</div>
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

