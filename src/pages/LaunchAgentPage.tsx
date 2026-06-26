import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Bot, Wrench, Search, CheckCircle2,
  PenLine, Briefcase, Copy, Download, AlertTriangle, RefreshCw,
} from 'lucide-react'
import { downloadFile } from '../lib/export'
import { cn } from '../lib/utils'

// ─── Data ────────────────────────────────────────────────────────────────────

const AGENT_TYPES = [
  {
    id: 'builder',
    name: 'Builder Agent',
    icon: Wrench,
    role: 'Code generation and file editing',
    desc: 'Generates code, edits files, and executes implementation plans phase by phase.',
    n8n: false,
  },
  {
    id: 'research',
    name: 'Research Agent',
    icon: Search,
    role: 'Information gathering and synthesis',
    desc: 'Searches, reads, and synthesizes information from multiple sources into structured reports.',
    n8n: true,
  },
  {
    id: 'qa',
    name: 'QA Agent',
    icon: CheckCircle2,
    role: 'Testing and visual validation',
    desc: 'Runs Playwright-based visual QA, E2E tests, and generates screenshot regression reports.',
    n8n: true,
  },
  {
    id: 'content',
    name: 'Content Agent',
    icon: PenLine,
    role: 'Content generation and distribution drafting',
    desc: 'Generates copy, repurposes content, and drafts multi-platform distribution packages.',
    n8n: true,
  },
  {
    id: 'sales',
    name: 'Sales Agent',
    icon: Briefcase,
    role: 'Outreach drafting and pipeline staging',
    desc: 'Drafts personalized outreach sequences and stages follow-up workflows for review.',
    n8n: true,
  },
] as const

type AgentId = typeof AGENT_TYPES[number]['id']

const AVAILABLE_TOOLS = [
  'GitHub MCP', 'Vercel MCP', 'Playwright / Browser-use',
  'Gmail MCP', 'Google Calendar MCP', 'Supabase MCP',
  'Repo Discovery Skill', 'Code Review Skill', 'MCP Setup Skill',
  'Launch Pack Skill', 'Remotion Video Skill',
]

const DEFAULT_TOOLS: Record<AgentId, string[]> = {
  builder:  ['GitHub MCP', 'Repo Discovery Skill', 'Code Review Skill'],
  research: ['Repo Discovery Skill'],
  qa:       ['Playwright / Browser-use', 'GitHub MCP'],
  content:  ['Launch Pack Skill'],
  sales:    ['Gmail MCP', 'Google Calendar MCP'],
}

const WORKFLOW_STEPS: Record<AgentId, string[]> = {
  builder: [
    'Load repository context with Repo Discovery Skill',
    'Review implementation plan — confirm scope before any edits',
    'Execute changes file by file — read before write',
    'Generate diff summary after each file change',
    'Run QA Agent on changed files',
    'Submit diff for human review',
    'Deploy Vercel preview only — no production',
  ],
  research: [
    'Define research scope and key questions',
    'Search primary sources — flag source quality per result',
    'Read and extract key facts from each source',
    'Cross-reference claims across sources',
    'Flag uncertain or unverified information explicitly',
    'Compile structured report with citations',
    'Submit for human review before acting on findings',
  ],
  qa: [
    'Receive target URL list and test scope',
    'Launch Playwright headless browser',
    'Navigate each URL and capture screenshots',
    'Test at desktop (1280px) and mobile (390px) viewports',
    'Compare against expected state or previous screenshots',
    'Generate regression report with pass/fail per page',
    'Return verdict to operator — no action without human review',
  ],
  content: [
    'Receive source content and platform targets',
    'Analyze content structure and extract key messages',
    'Generate platform-native version for each target',
    'Apply brand voice and tone guidelines',
    'Stage all outputs as drafts — no auto-publish',
    'Present drafts for human review and approval',
    'Publish only after explicit operator confirmation per platform',
  ],
  sales: [
    'Confirm ICP definition and outreach goal',
    'Receive or build prospect list with context notes',
    'Research each prospect for personalization signals',
    'Draft personalized outreach message per contact',
    'Stage all messages — no auto-send under any condition',
    'Present message drafts for human approval',
    'Send only after explicit confirmation per message',
  ],
}

const VALIDATION_ITEMS: Record<AgentId, string[]> = {
  builder:  ['Diff reviewed by human before commit', 'TypeScript build passes (tsc + vite)', 'QA Agent screenshot confirms no regressions', 'Vercel preview URL shared before merge'],
  research: ['All claims have source citations', 'Uncertain information is clearly flagged', 'Report reviewed by human before use', 'No fabricated stats or quotes'],
  qa:       ['All target pages captured at both viewports', 'Zero mojibake in rendered DOM', 'Regression count is 0 or all regressions are documented', 'Pass/fail verdict recorded'],
  content:  ['All outputs are in draft stage', 'Brand voice guidelines applied', 'Human reviewed each piece before scheduling', 'No platform posts without explicit confirmation'],
  sales:    ['All messages reviewed by human', 'No message sent without per-message confirmation', 'Prospect list verified — no cold contacts without permission', 'Follow-up schedule approved'],
}

const SAFETY_RULES_ALL = [
  { id: 'no-prod', label: 'No production deploy without explicit human trigger', default: true },
  { id: 'no-send', label: 'No auto-send emails or messages', default: true },
  { id: 'no-publish', label: 'No auto-publish to social or external platforms', default: true },
  { id: 'review-before-commit', label: 'Human reviews every diff before commit', default: true },
  { id: 'preview-only', label: 'Deploy to preview only — not main branch', default: true },
  { id: 'scope-lock', label: 'Agent stays within defined scope — no scope creep', default: true },
  { id: 'approval-gate', label: 'Human approval required before any external action', default: true },
  { id: 'log-actions', label: 'All agent actions are logged and reviewable', default: false },
]

const APPROVAL_GATE: Record<AgentId, string> = {
  builder:  'Human reviews the full diff and approves before merge. QA must pass first.',
  research: 'Human reviews the research report before it informs any decision or action.',
  qa:       'Human reviews the regression report and confirms pass/fail before PR approval.',
  content:  'Human approves each content piece individually before scheduling or publishing.',
  sales:    'Human approves each outreach message individually before it is sent.',
}

const NEXT_ACTION: Record<AgentId, string> = {
  builder:  'Open Project Builder, paste this system prompt, and activate the Repo Discovery + Code Review skills.',
  research: 'Paste this system prompt into your AI session and provide the source list or search scope.',
  qa:       'Run the QA Playbook from the Playbooks district, using this agent config as the validation scope.',
  content:  'Use the Content Repurpose workflow in the Workflow Registry with this agent config.',
  sales:    'Paste this system prompt into your AI session with the prospect list as context.',
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface WizardState {
  step: number
  agentId: AgentId | null
  goal: string
  context: string
  tools: string[]
  outputType: string
  outputFormat: string
  activeRules: Set<string>
  copied: boolean
}

interface AgentPacket {
  agentName: string
  role: string
  goal: string
  systemPrompt: string
  requiredInputs: string
  requiredTools: string[]
  workflowSteps: string[]
  validationChecklist: string[]
  safetyRules: string[]
  humanApprovalGate: string
  nextAction: string
  n8nCandidateFlag: boolean
}

// ─── Packet generation ────────────────────────────────────────────────────────

function buildPacket(state: WizardState): AgentPacket | null {
  if (!state.agentId) return null
  const agent = AGENT_TYPES.find(a => a.id === state.agentId)!
  const safetyLabels = SAFETY_RULES_ALL
    .filter(r => state.activeRules.has(r.id))
    .map(r => r.label)

  const systemPrompt = `You are a ${agent.name} operating within Agentic City OS.

ROLE: ${agent.role}

GOAL: ${state.goal}${state.context ? `\n\nCONTEXT: ${state.context}` : ''}

TOOLS AVAILABLE: ${state.tools.length > 0 ? state.tools.join(', ') : 'None specified'}

OUTPUT: ${state.outputType || 'Structured report'}${state.outputFormat ? ` — format: ${state.outputFormat}` : ''}

SAFETY RULES:
${safetyLabels.map(r => `- ${r}`).join('\n')}

You do not run autonomously. Every step requires operator trigger or explicit confirmation.
All external actions (send, publish, deploy, commit) require human approval before execution.

Begin by confirming your understanding of the goal and listing the first 3 steps you will take.`

  return {
    agentName: `${agent.name} — ${state.goal.slice(0, 50)}${state.goal.length > 50 ? '...' : ''}`,
    role: agent.role,
    goal: state.goal,
    systemPrompt,
    requiredInputs: state.context || 'Goal definition, scope boundaries, relevant codebase or data context',
    requiredTools: state.tools,
    workflowSteps: WORKFLOW_STEPS[state.agentId],
    validationChecklist: VALIDATION_ITEMS[state.agentId],
    safetyRules: safetyLabels,
    humanApprovalGate: APPROVAL_GATE[state.agentId],
    nextAction: NEXT_ACTION[state.agentId],
    n8nCandidateFlag: agent.n8n,
  }
}

function packetToMarkdown(p: AgentPacket): string {
  return `# Agent Deployment Packet: ${p.agentName}

## Role
${p.role}

## Goal
${p.goal}

## System Prompt
\`\`\`
${p.systemPrompt}
\`\`\`

## Required Inputs
${p.requiredInputs}

## Required Tools / Plugins
${p.requiredTools.map(t => `- ${t}`).join('\n') || '- None specified'}

## Workflow Steps
${p.workflowSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## Validation Checklist
${p.validationChecklist.map(v => `- [ ] ${v}`).join('\n')}

## Safety Rules
${p.safetyRules.map(r => `- ${r}`).join('\n')}

## Human Approval Gate
${p.humanApprovalGate}

## Next Action
${p.nextAction}

## n8n Candidate
${p.n8nCandidateFlag ? 'Yes — this agent workflow is a candidate for n8n automation (draft export only).' : 'No — manual execution only.'}

---
*Generated by Agentic City OS — ${new Date().toLocaleDateString()}*
`
}

// ─── Component ────────────────────────────────────────────────────────────────

const STEPS = ['Agent Type', 'Goal', 'Tools', 'Output', 'Safety', 'Packet']

export default function LaunchAgentPage() {
  const [state, setState] = useState<WizardState>({
    step: 1,
    agentId: null,
    goal: '',
    context: '',
    tools: [],
    outputType: '',
    outputFormat: '',
    activeRules: new Set(SAFETY_RULES_ALL.filter(r => r.default).map(r => r.id)),
    copied: false,
  })

  const set = (patch: Partial<WizardState>) => setState(prev => ({ ...prev, ...patch }))
  const agent = AGENT_TYPES.find(a => a.id === state.agentId) ?? null
  const packet = state.step === 6 ? buildPacket(state) : null

  const canAdvance =
    (state.step === 1 && state.agentId !== null) ||
    (state.step === 2 && state.goal.trim().length >= 10) ||
    state.step >= 3

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {})
    set({ copied: true })
    setTimeout(() => set({ copied: false }), 1800)
  }

  const handleExport = () => {
    if (!packet) return
    downloadFile(packetToMarkdown(packet), `agent-packet-${state.agentId}-${Date.now()}.md`)
  }

  const advance = () => {
    if (state.step === 1 && agent) {
      set({ step: 2, tools: [...DEFAULT_TOOLS[state.agentId!]] })
    } else if (state.step < 6) {
      set({ step: state.step + 1 })
    }
  }

  const toggleTool = (tool: string) => {
    set({ tools: state.tools.includes(tool) ? state.tools.filter(t => t !== tool) : [...state.tools, tool] })
  }

  const toggleRule = (id: string) => {
    const next = new Set(state.activeRules)
    next.has(id) ? next.delete(id) : next.add(id)
    set({ activeRules: next })
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5 animate-slide-up">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="relative overflow-hidden rounded-xl border border-violet-500/25 bg-bg-surface p-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bot className="h-4 w-4 text-violet-400" />
              <h1 className="text-lg font-display font-bold text-text-primary">Launch Agent</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30 bg-amber-900/20 text-amber-400">
                Generates Deployment Packet — Not Live Agent
              </span>
            </div>
            <p className="text-xs text-text-secondary font-body">Configure your agent and generate a ready-to-use deployment packet.</p>
          </div>
          {agent && (
            <span className="text-xs font-mono text-violet-400 bg-violet-900/20 border border-violet-500/30 px-2 py-1 rounded">
              {agent.name}
            </span>
          )}
        </div>
      </div>

      {/* Step progress */}
      <div className="flex items-center gap-1">
        {STEPS.map((label, i) => {
          const n = i + 1
          const done = n < state.step
          const active = n === state.step
          return (
            <div key={label} className="flex items-center gap-1 flex-1 min-w-0">
              <div className={cn(
                'flex items-center gap-1.5 text-[10px] font-mono shrink-0',
                done ? 'text-emerald-400' : active ? 'text-violet-400' : 'text-text-muted'
              )}>
                <div className={cn(
                  'w-5 h-5 rounded-full flex items-center justify-center text-[9px] border',
                  done ? 'bg-emerald-900/40 border-emerald-500/50 text-emerald-400' :
                  active ? 'bg-violet-900/40 border-violet-500/50 text-violet-400' :
                  'border-border text-text-muted'
                )}>
                  {done ? '✓' : n}
                </div>
                <span className="hidden sm:inline truncate">{label}</span>
              </div>
              {i < STEPS.length - 1 && <div className="h-px flex-1 bg-border mx-1" />}
            </div>
          )
        })}
      </div>

      {/* Step content */}
      <div className="bg-bg-surface border border-border rounded-xl p-5 min-h-[320px]">

        {/* Step 1: Agent Type */}
        {state.step === 1 && (
          <div className="space-y-3">
            <div className="pp-section-title mb-3">Choose Agent Type</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AGENT_TYPES.map(a => {
                const Icon = a.icon
                const selected = state.agentId === a.id
                return (
                  <button
                    key={a.id}
                    onClick={() => set({ agentId: a.id })}
                    className={cn(
                      'flex items-start gap-3 p-3 rounded-lg border text-left transition-all',
                      selected
                        ? 'border-violet-500/50 bg-violet-900/20 text-violet-300'
                        : 'border-border hover:border-border-strong hover:bg-bg-elevated'
                    )}
                  >
                    <Icon className={cn('h-4 w-4 shrink-0 mt-0.5', selected ? 'text-violet-400' : 'text-text-muted')} />
                    <div className="min-w-0">
                      <div className="text-sm font-display font-semibold text-text-primary">{a.name}</div>
                      <div className="text-[10px] font-mono text-text-muted mt-0.5">{a.role}</div>
                      <div className="text-xs text-text-secondary mt-1 leading-relaxed">{a.desc}</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 2: Goal */}
        {state.step === 2 && (
          <div className="space-y-4">
            <div className="pp-section-title">Define the Goal</div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Goal (required, min 10 chars)</label>
              <textarea
                value={state.goal}
                onChange={e => set({ goal: e.target.value })}
                placeholder={`What should the ${agent?.name} accomplish?`}
                rows={3}
                className="pp-input font-body text-sm resize-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Additional Context (optional)</label>
              <textarea
                value={state.context}
                onChange={e => set({ context: e.target.value })}
                placeholder="Tech stack, codebase details, constraints, audience, or any other relevant context…"
                rows={3}
                className="pp-input font-body text-sm resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 3: Tools */}
        {state.step === 3 && (
          <div className="space-y-3">
            <div className="pp-section-title">Select Tools / Plugins</div>
            <p className="text-xs text-text-muted font-body">Pre-selected based on agent type. Toggle to customize.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AVAILABLE_TOOLS.map(tool => {
                const on = state.tools.includes(tool)
                return (
                  <button
                    key={tool}
                    onClick={() => toggleTool(tool)}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-lg border text-left text-xs font-body transition-all',
                      on ? 'border-cyan-500/40 bg-cyan-900/20 text-cyan-300' : 'border-border hover:border-border-strong text-text-secondary'
                    )}
                  >
                    <div className={cn('w-2 h-2 rounded-full shrink-0', on ? 'bg-cyan-400' : 'bg-bg-overlay border border-border')} />
                    {tool}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 4: Output */}
        {state.step === 4 && (
          <div className="space-y-4">
            <div className="pp-section-title">Define Expected Output</div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Output Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Code / Diff', 'Research Report', 'Content Package', 'QA Report', 'Outreach Drafts', 'Mixed'].map(type => (
                  <button
                    key={type}
                    onClick={() => set({ outputType: type })}
                    className={cn(
                      'px-3 py-2 rounded-lg border text-xs font-mono transition-all',
                      state.outputType === type
                        ? 'border-violet-500/50 bg-violet-900/20 text-violet-400'
                        : 'border-border hover:border-border-strong text-text-muted'
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Output Format (optional)</label>
              <input
                type="text"
                value={state.outputFormat}
                onChange={e => set({ outputFormat: e.target.value })}
                placeholder="e.g. Markdown, TypeScript, JSON, HTML…"
                className="pp-input font-mono text-sm"
              />
            </div>
          </div>
        )}

        {/* Step 5: Safety */}
        {state.step === 5 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <div className="pp-section-title">Safety and Approval Rules</div>
            </div>
            <p className="text-xs text-text-secondary font-body">All rules marked as default are strongly recommended. Uncheck only if you have an explicit reason.</p>
            <div className="space-y-2">
              {SAFETY_RULES_ALL.map(rule => {
                const on = state.activeRules.has(rule.id)
                return (
                  <button
                    key={rule.id}
                    onClick={() => toggleRule(rule.id)}
                    className="flex items-start gap-3 w-full text-left p-3 rounded-lg border border-border hover:border-border-strong transition-colors"
                  >
                    <div className={cn(
                      'w-4 h-4 shrink-0 rounded border flex items-center justify-center text-[9px] mt-0.5 transition-all',
                      on ? 'bg-emerald-600/30 border-emerald-500/50 text-emerald-400' : 'border-border'
                    )}>
                      {on && '✓'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-body text-text-secondary">{rule.label}</span>
                      {rule.default && <span className="ml-2 text-[9px] font-mono text-emerald-400">recommended</span>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 6: Packet */}
        {state.step === 6 && packet && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="pp-section-title">Agent Deployment Packet</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopy(packet.systemPrompt)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-border hover:border-violet-500/50 text-text-muted hover:text-violet-400 transition-all"
                >
                  <Copy className="h-3 w-3" />
                  {state.copied ? 'Copied!' : 'Copy Prompt'}
                </button>
                <button
                  onClick={handleExport}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-border hover:border-cyan-500/50 text-text-muted hover:text-cyan-400 transition-all"
                >
                  <Download className="h-3 w-3" />
                  Export .md
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label: 'AGENT NAME', value: packet.agentName },
                { label: 'ROLE', value: packet.role },
                { label: 'GOAL', value: packet.goal },
              ].map(f => (
                <div key={f.label} className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">{f.label}</div>
                  <div className="text-xs font-body text-text-secondary">{f.value}</div>
                </div>
              ))}

              <div className="rounded-lg bg-bg-base/80 border border-border p-3">
                <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-2">SYSTEM PROMPT</div>
                <pre className="text-[11px] font-mono text-text-secondary leading-relaxed whitespace-pre-wrap">{packet.systemPrompt}</pre>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">REQUIRED TOOLS</div>
                  <div className="text-[11px] font-body text-text-secondary">{packet.requiredTools.join(', ') || 'None specified'}</div>
                </div>
                <div className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">REQUIRED INPUTS</div>
                  <div className="text-[11px] font-body text-text-secondary">{packet.requiredInputs}</div>
                </div>
              </div>

              <div className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-2">WORKFLOW STEPS</div>
                <div className="space-y-1">
                  {packet.workflowSteps.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] font-body text-text-secondary">
                      <span className="text-violet-400 font-mono shrink-0">{i + 1}.</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-2">VALIDATION CHECKLIST</div>
                  <div className="space-y-1">
                    {packet.validationChecklist.map((v, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] font-body text-text-secondary">
                        <span className="text-text-muted shrink-0">-</span><span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-2">SAFETY RULES</div>
                  <div className="space-y-1">
                    {packet.safetyRules.map((r, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] font-body text-text-secondary">
                        <span className="text-emerald-400 shrink-0">✓</span><span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-amber-500/20 bg-amber-900/10 px-3 py-2">
                <div className="text-[9px] font-mono text-amber-400 uppercase tracking-widest mb-1">HUMAN APPROVAL GATE</div>
                <div className="text-[11px] font-body text-text-secondary">{packet.humanApprovalGate}</div>
              </div>

              <div className="rounded-lg bg-bg-elevated/80 px-3 py-2">
                <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-1">NEXT ACTION</div>
                <div className="text-[11px] font-body text-violet-400">{packet.nextAction}</div>
              </div>

              {packet.n8nCandidateFlag && (
                <div className="rounded-lg border border-pink-500/20 bg-pink-900/10 px-3 py-2 text-[10px] font-mono text-pink-400">
                  n8n CANDIDATE — This agent workflow is eligible for n8n automation draft export. Manual setup required.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => state.step > 1 && set({ step: state.step - 1 })}
          disabled={state.step === 1}
          className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-border hover:border-border-strong text-text-muted hover:text-text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>

        <div className="text-[10px] font-mono text-text-muted">
          Step {state.step} of {STEPS.length}
        </div>

        {state.step < 6 ? (
          <button
            onClick={advance}
            disabled={!canAdvance}
            className="inline-flex items-center gap-2 text-xs font-mono pp-btn-primary py-2 px-4 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {state.step === 5 ? (
              <>
                <RefreshCw className="h-3.5 w-3.5" />
                Generate Packet
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        ) : (
          <button
            onClick={() => setState({
              step: 1, agentId: null, goal: '', context: '', tools: [],
              outputType: '', outputFormat: '',
              activeRules: new Set(SAFETY_RULES_ALL.filter(r => r.default).map(r => r.id)),
              copied: false,
            })}
            className="pp-btn-secondary text-xs py-2 px-4"
          >
            Start New
          </button>
        )}
      </div>
    </div>
  )
}
