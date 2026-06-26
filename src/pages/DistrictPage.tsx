import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const DISTRICT_META: Record<string, { title: string; description: string; icon: string; color: string }> = {
  registry: {
    title: 'Agent Registry',
    description: 'Catalog of registered AI agents, their capabilities, status, and execution logs. Agents are indexed by type, skill set, and access tier.',
    icon: '◈',
    color: 'text-violet-400',
  },
  skills: {
    title: 'Skills Registry',
    description: 'Active and available skill modules for the OS. Skills extend what agents can do — from code execution to data parsing to web retrieval.',
    icon: '⚡',
    color: 'text-amber-400',
  },
  plugins: {
    title: 'Plugins / MCP',
    description: 'Model Context Protocol plugins and external tool integrations. Connect new data sources, APIs, and capabilities to your agents.',
    icon: '⬡',
    color: 'text-cyan-400',
  },
  playbooks: {
    title: 'Playbooks',
    description: 'Curated multi-step execution playbooks for repeatable operator workflows. Each playbook is a tested sequence of actions for a specific goal.',
    icon: '◎',
    color: 'text-teal-400',
  },
  n8n: {
    title: 'n8n Candidates',
    description: 'Loop templates marked as automation candidates. Export as a draft JSON template for manual import into n8n. Not a live integration.',
    icon: '⟳',
    color: 'text-orange-400',
  },
}

export default function DistrictPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace('/', '')
  const meta = DISTRICT_META[slug] ?? {
    title: 'District',
    description: 'This district is coming soon.',
    icon: '◆',
    color: 'text-text-muted',
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
      >
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-7">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className={`text-4xl ${meta.color} shrink-0`}>{meta.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">{meta.title}</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-violet-500/30 bg-violet-900/20 text-violet-400 uppercase tracking-widest">
                Coming v0.2
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{meta.description}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border-strong bg-bg-elevated/60 p-5 space-y-3">
        <div className="pp-section-title">What's planned</div>
        <ul className="space-y-2 text-sm text-text-secondary font-body">
          <li className="flex items-start gap-2">
            <span className="text-text-muted font-mono mt-0.5">–</span>
            Full district UI with search, filter, and detail views
          </li>
          <li className="flex items-start gap-2">
            <span className="text-text-muted font-mono mt-0.5">–</span>
            TypeScript seed data with live client-side filtering
          </li>
          <li className="flex items-start gap-2">
            <span className="text-text-muted font-mono mt-0.5">–</span>
            Integration with the Loop Engine and PromptPalace districts
          </li>
          <li className="flex items-start gap-2">
            <span className="text-text-muted font-mono mt-0.5">–</span>
            localStorage persistence with the <span className="font-mono text-violet-400">pp_</span> key prefix
          </li>
        </ul>
        <div className="pt-2">
          <Link to="/" className="pp-btn-secondary text-xs">
            ← Return to OS Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
