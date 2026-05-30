import { useState, useRef, useEffect } from 'react'
import { SKILLS } from '../data/skills'
import { createContextEngine } from '../runtime/contextEngine'
import { createExecutionEngine } from '../runtime/executionEngine'
import { cn } from '../lib/utils'

const contextEngine = createContextEngine()
const execEngine = createExecutionEngine()

type Message = { role: 'user' | 'assistant'; content: string; step?: string }

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content: `▶ STEP 0 — CONTEXT RECOVERY

Project detected: WOLF Protocol
Last step: Metaplex metadata upload (Step 2)
Framework: TypeScript + Vite
Workspace: CryptowolfOS
Mode: BUILD

✓ Last 5 messages locked.
✓ Context recovered.
✓ Ready to resume.

Type your next instruction or select a Step to run.`,
    step: '0',
  },
]

const QUICK_ACTIONS = [
  { label: 'Run Step 0', icon: '⌥', step: '0', action: 'run-step-0' },
  { label: 'Run Step 0.5', icon: '◑', step: '0.5', action: 'run-step-05' },
  { label: 'Run Step 1', icon: '▶', step: '1', action: 'run-step-1' },
  { label: 'Continue Build', icon: '◎', step: '2', action: 'continue' },
]

export default function ProjectBuilderPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [activeSkillIds, setActiveSkillIds] = useState<Set<string>>(
    new Set(SKILLS.filter(s => s.active).map(s => s.id))
  )
  const [execState, setExecState] = useState(execEngine.getState())
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (msg: Message) => setMessages(prev => [...prev, msg])

  const handleQuickAction = async (action: string, step: string, label: string) => {
    addMessage({ role: 'user', content: `/${label}`, step })
    setIsLoading(true)

    await new Promise(r => setTimeout(r, 1200 + Math.random() * 600))

    let response = ''
    if (action === 'run-step-0') {
      response = contextEngine.runStep0([])
      execEngine.advancePhase()
    } else if (action === 'run-step-05') {
      response = contextEngine.runStep05()
      execEngine.advancePhase()
    } else if (action === 'run-step-1') {
      response = contextEngine.runStep1()
      execEngine.advancePhase()
    } else {
      response = `▶ STEP 2 — BUILD / EXECUTE

Resuming WOLF Protocol build.
Context: Metaplex metadata upload pending.

\`\`\`typescript
// Upload metadata to Irys
import Irys from "@irys/sdk";

const irys = new Irys({
  url: "https://node1.irys.xyz",
  token: "solana",
  key: process.env.SOLANA_PRIVATE_KEY!,
});

const metadata = {
  name: "WOLF",
  symbol: "WOLF",
  description: "WOLF Protocol SPL Token",
  image: "https://arweave.net/[IMAGE_TX]",
  attributes: [],
};

const tx = await irys.upload(JSON.stringify(metadata), {
  tags: [{ name: "Content-Type", value: "application/json" }],
});

console.log("Metadata URI:", \`https://arweave.net/\${tx.id}\`);
\`\`\`

✓ Metadata upload script generated.
Next: SPL token initialization with metadata URI.`
    }

    setExecState(execEngine.getState())
    addMessage({ role: 'assistant', content: response, step })
    setIsLoading(false)
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    const userMsg = input.trim()
    setInput('')
    addMessage({ role: 'user', content: userMsg })
    setIsLoading(true)

    await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000))

    const response = `▶ STEP 2 — BUILD / EXECUTE

Processing: "${userMsg}"

Active Skills: ${[...activeSkillIds].map(id => SKILLS.find(s => s.id === id)?.name).filter(Boolean).join(', ')}

Based on your request and the current project context (WOLF Protocol, TypeScript + Vite), here's my response:

The system has analyzed your instruction and mapped it to the current execution context. Your workspace (CryptowolfOS) is active with the Solana Architect skill enabled.

\`\`\`typescript
// Generated output for: "${userMsg}"
// Context: WOLF Protocol | Step 2
// Skill: Solana Architect + KARPATHY Coder
\`\`\`

Next steps will be suggested based on this output.
Type another instruction or use a Quick Action to continue.`

    addMessage({ role: 'assistant', content: response, step: '2' })
    setIsLoading(false)
  }

  const toggleSkill = (id: string) => {
    setActiveSkillIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const stepCls: Record<string, string> = {
    '0': 'step-0',
    '0.5': 'step-05',
    '1': 'step-1',
    '2': 'step-2',
  }

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-4 animate-slide-up">

      {/* Main chat area */}
      <div className="flex-1 flex flex-col bg-bg-surface border border-border rounded-xl overflow-hidden">

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg-elevated">
          <div className="glow-dot" />
          <div className="flex-1">
            <div className="text-xs font-display font-semibold text-text-primary">Project Builder Bot</div>
            <div className="text-[10px] font-mono text-text-muted">WOLF Protocol · BUILD mode · Context active</div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={stepCls[execState.phase.replace('step', '').replace('0', '0')] ?? 'step-0'}>
              {execState.phase.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                'flex gap-3 animate-fade-in',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.role === 'assistant' && (
                <div className="w-6 h-6 shrink-0 rounded-md bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-[10px] font-mono text-violet-400 mt-0.5">
                  PP
                </div>
              )}
              <div
                className={cn(
                  'max-w-[85%] rounded-xl px-4 py-3 text-xs font-mono leading-relaxed',
                  msg.role === 'user'
                    ? 'bg-violet-600/20 border border-violet-500/30 text-violet-200'
                    : 'bg-bg-elevated border border-border text-text-secondary'
                )}
              >
                {msg.step && (
                  <span className={cn('inline-block mb-2', stepCls[msg.step] ?? 'step-1')}>
                    STEP {msg.step}
                  </span>
                )}
                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed">{msg.content}</pre>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-6 h-6 rounded-md bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-[10px] font-mono text-violet-400">
                PP
              </div>
              <div className="bg-bg-elevated border border-border rounded-xl px-4 py-3">
                <div className="flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-text-muted ml-1">Processing...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick actions */}
        <div className="px-4 pt-3 pb-0 flex gap-2 overflow-x-auto">
          {QUICK_ACTIONS.map(qa => (
            <button
              key={qa.action}
              onClick={() => handleQuickAction(qa.action, qa.step, qa.label)}
              disabled={isLoading}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-elevated border border-border hover:border-violet-500/40 text-xs font-mono text-text-muted hover:text-violet-400 transition-all disabled:opacity-50"
            >
              <span>{qa.icon}</span>
              <span>{qa.label}</span>
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Type instruction... (Enter to send)"
            disabled={isLoading}
            className="pp-input font-mono text-xs"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="pp-btn-primary text-xs py-2 px-4 shrink-0"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-64 xl:w-72 space-y-4 flex-shrink-0">

        {/* Execution Checklist */}
        <div className="bg-bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-bg-elevated">
            <div className="flex items-center justify-between">
              <div className="text-xs font-display font-semibold text-text-primary">Execution Checklist</div>
              <span className="text-xs font-mono text-violet-400">{execState.progress}%</span>
            </div>
            <div className="mt-2 h-1 bg-bg-overlay rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-500"
                style={{ width: `${execState.progress}%` }}
              />
            </div>
          </div>
          <div className="p-3 space-y-1.5 max-h-48 overflow-y-auto">
            {execState.checklist.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  execEngine.toggleItem(item.id)
                  setExecState(execEngine.getState())
                }}
                className="flex items-start gap-2 cursor-pointer group"
              >
                <div className={cn(
                  'mt-0.5 w-3.5 h-3.5 shrink-0 rounded border flex items-center justify-center text-[9px] transition-all',
                  item.done
                    ? 'bg-emerald-600/30 border-emerald-500/50 text-emerald-400'
                    : 'border-border group-hover:border-violet-500/50'
                )}>
                  {item.done && '✓'}
                </div>
                <span className={cn(
                  'text-[10px] font-mono leading-relaxed',
                  item.done ? 'text-text-muted line-through' : item.critical ? 'text-text-primary' : 'text-text-secondary'
                )}>
                  {item.label}
                  {item.critical && !item.done && <span className="text-rose-400 ml-1">*</span>}
                </span>
              </div>
            ))}
          </div>
          <div className="px-3 pb-3">
            <button
              onClick={() => { execEngine.resetChecklist(); setExecState(execEngine.getState()) }}
              className="w-full text-[10px] font-mono text-text-muted hover:text-rose-400 transition-colors py-1"
            >
              Reset checklist
            </button>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-bg-elevated">
            <div className="text-xs font-display font-semibold text-text-primary">Active Skills</div>
          </div>
          <div className="p-3 space-y-1.5">
            {SKILLS.map(skill => (
              <div
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={cn(
                  'flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-all border',
                  activeSkillIds.has(skill.id)
                    ? 'bg-violet-900/20 border-violet-500/30 '
                    : 'border-transparent hover:border-border hover:bg-bg-elevated'
                )}
              >
                <span className="text-sm w-5 text-center">{skill.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-body font-medium text-text-primary truncate">{skill.name}</div>
                </div>
                <div className={cn(
                  'w-2 h-2 rounded-full shrink-0',
                  activeSkillIds.has(skill.id) ? 'bg-emerald-400' : 'bg-bg-overlay border border-border'
                )} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
