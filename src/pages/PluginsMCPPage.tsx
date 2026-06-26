import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'

type PluginStatus = 'Active' | 'Manual' | 'Candidate' | 'Coming v0.2'
type PluginType = 'MCP' | 'Local' | 'Export / Manual'

const STATUS_CLS: Record<PluginStatus, string> = {
  'Active':        'bg-emerald-900/30 text-emerald-400 border-emerald-500/30',
  'Manual':        'bg-cyan-900/30 text-cyan-400 border-cyan-500/30',
  'Candidate':     'bg-amber-900/30 text-amber-400 border-amber-500/30',
  'Coming v0.2':   'bg-violet-900/20 text-violet-400 border-violet-500/30',
}

const TYPE_CLS: Record<PluginType, string> = {
  'MCP':             'bg-violet-900/20 text-violet-400',
  'Local':           'bg-emerald-900/20 text-emerald-400',
  'Export / Manual': 'bg-orange-900/20 text-orange-400',
}

const PLUGINS: Array<{
  name: string
  type: PluginType
  status: PluginStatus
  connectVia: string
  capabilities: string
  safety: string
}> = [
  {
    name: 'GitHub',
    type: 'MCP',
    status: 'Active',
    connectVia: 'GitHub MCP server — pre-configured in this session',
    capabilities: 'Read repos · create PRs · add comments · list branches · search code',
    safety: 'Repository-scoped. No force push. No secret access.',
  },
  {
    name: 'Vercel',
    type: 'MCP',
    status: 'Active',
    connectVia: 'Vercel MCP server — pre-configured in this session',
    capabilities: 'List deployments · get build logs · deploy preview · get runtime errors',
    safety: 'Preview deploy only. Production trigger requires explicit human confirmation.',
  },
  {
    name: 'Playwright / Browser-use',
    type: 'Local',
    status: 'Active',
    connectVia: 'Pre-installed Chromium at /opt/pw-browsers — no setup required',
    capabilities: 'Screenshot UI · interact with elements · E2E test · visual QA · scrape DOM',
    safety: 'Headless only. No stored credentials. No session persistence across runs.',
  },
  {
    name: 'Gmail',
    type: 'MCP',
    status: 'Manual',
    connectVia: 'Gmail MCP server — OAuth required (configure in settings.json)',
    capabilities: 'Search threads · draft messages · label management · get thread content',
    safety: 'Draft-only mode by default. Send requires explicit operator confirmation.',
  },
  {
    name: 'Google Calendar',
    type: 'MCP',
    status: 'Manual',
    connectVia: 'Google Calendar MCP server — OAuth required (configure in settings.json)',
    capabilities: 'List events · create events · respond to invites · suggest meeting times',
    safety: 'Read-only by default. Write actions require explicit trigger per action.',
  },
  {
    name: 'Supabase',
    type: 'MCP',
    status: 'Candidate',
    connectVia: 'Supabase MCP server — API key required (not yet configured)',
    capabilities: 'DB queries · table reads · auth user management · edge function calls',
    safety: 'Read queries only without explicit operator approval per write operation.',
  },
  {
    name: 'n8n',
    type: 'Export / Manual',
    status: 'Candidate',
    connectVia: 'Export Loop as n8n JSON draft — import manually into your n8n instance',
    capabilities: 'Automation trigger · webhook routing · API call chains · multi-step flows',
    safety: 'No live connection. Export draft only. Not a real-time integration.',
  },
]

export default function PluginsMCPPage() {
  const counts = {
    active: PLUGINS.filter(p => p.status === 'Active').length,
    manual: PLUGINS.filter(p => p.status === 'Manual').length,
    candidate: PLUGINS.filter(p => p.status === 'Candidate').length,
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-slide-up">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="text-3xl text-cyan-400 shrink-0 mt-0.5">⬡</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1 className="text-xl font-display font-bold text-text-primary">Plugins / MCP</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 uppercase tracking-widest">
                v0.1 Partial
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Model Context Protocol plugins and external tool integrations. Connect new data sources, APIs, and services to your agents and sessions.
            </p>
            <div className="mt-3 flex gap-3 text-[10px] font-mono">
              <span className="text-emerald-400">{counts.active} Active</span>
              <span className="text-text-muted">/</span>
              <span className="text-cyan-400">{counts.manual} Manual Setup</span>
              <span className="text-text-muted">/</span>
              <span className="text-amber-400">{counts.candidate} Candidate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Plugin cards */}
      <div className="space-y-3">
        {PLUGINS.map(plugin => (
          <div key={plugin.name} className="pp-card-hover space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="text-sm font-display font-semibold text-text-primary">{plugin.name}</div>
                  <span className={cn('text-[9px] font-mono px-1.5 py-0.5 rounded', TYPE_CLS[plugin.type])}>
                    {plugin.type}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-text-muted mt-1">{plugin.connectVia}</div>
              </div>
              <span className={cn('text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0', STATUS_CLS[plugin.status])}>
                {plugin.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {([
                { label: 'CAPABILITIES', value: plugin.capabilities },
                { label: 'SAFETY', value: plugin.safety },
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

      {/* Footer note */}
      <div className="rounded-xl border border-border-strong bg-bg-elevated/60 p-4 text-xs font-body text-text-muted leading-relaxed">
        Plugins marked <span className="text-emerald-400 font-mono">Active</span> are connected in this session. Plugins marked <span className="text-cyan-400 font-mono">Manual</span> require one-time OAuth or API key setup. Plugins marked <span className="text-amber-400 font-mono">Candidate</span> are planned integrations not yet configured. No live automation runs without operator trigger.
      </div>
    </div>
  )
}
