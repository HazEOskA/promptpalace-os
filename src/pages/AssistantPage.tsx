import { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const QUICK_SUGGESTIONS = [
  'Find prompts for React development',
  'Show me trending AI agent prompts',
  'Help me write a better prompt',
  "What's the best prompt for SEO?",
]

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: `Welcome to PromptPalace Assistant! I can help you discover, improve, and navigate the prompt library.

You can ask me things like:
• "Find prompts for writing blog posts"
• "What's trending in AI agents?"
• "Help me improve this prompt"
• "Show me beginner-friendly coding prompts"

How can I help you today?`,
  timestamp: new Date(),
}

// ─── Mock response generator ──────────────────────────────────────────────────

function generateMockResponse(userMessage: string): string {
  const q = userMessage.toLowerCase()

  if (q.includes('react') || q.includes('coding') || q.includes('typescript') || q.includes('developer')) {
    return `Great question! For React and coding workflows, here are some top picks from the library:

**Full-Stack Architecture Advisor** — Helps you design scalable system architectures with clear trade-off analysis. Trending right now with a score of 94.

**TypeScript Type System Architect** — Generates airtight TypeScript interfaces, generics, and utility types for production codebases.

You can find the full Coding category at /categories → Coding, or check the **Full-Stack Dev Toolkit** stack for a curated set.

Want me to narrow it down further — like testing, API design, or debugging?`
  }

  if (q.includes('agent') || q.includes('ai agent') || q.includes('autonomous')) {
    return `AI agent prompts are some of the hottest in the library right now! Here are the standouts:

**Autonomous Agent System Prompt Framework** — A complete template for building production-ready agents with memory, tool use, and safety guardrails. Score: 97 (VIRAL).

**Multi-Agent Orchestration Blueprint** — Designs hierarchical agent systems with clear role boundaries and communication protocols.

The **AI Agent Builder Kit** stack bundles 5 of the best together — perfect if you're building from scratch.

Shall I explain what makes a great agent system prompt?`
  }

  if (q.includes('seo') || q.includes('search engine') || q.includes('keyword')) {
    return `SEO prompts are extremely popular for content teams. My top recommendations:

**Semantic SEO Content Architect** — Maps topical authority clusters and generates content briefs that actually rank. One of the most-saved prompts in the library.

**Technical SEO Audit Framework** — Comprehensive on-page and technical SEO analysis with actionable fixes.

For a complete workflow, check the **SEO Domination System** stack — it bundles keyword research, content strategy, and link building prompts together.

What's your main SEO goal — ranking new pages, improving existing content, or technical fixes?`
  }

  if (q.includes('write') || q.includes('better prompt') || q.includes('improve') || q.includes('prompt engineer')) {
    return `Prompt engineering is a craft! Here are the key principles to write better prompts:

1. **Be specific about role and context** — Start with "You are a [role] helping a [audience]…"
2. **Define the output format** — Specify structure, length, and format upfront
3. **Include examples** — Even one example dramatically improves consistency
4. **Add constraints** — Tell the model what NOT to do as much as what to do
5. **Chain of thought** — For complex tasks, ask the model to "think step by step"

The **Prompt Architecture** category has meta-prompts specifically for improving other prompts.

Want me to help you refine a specific prompt you're working on?`
  }

  if (q.includes('marketing') || q.includes('copy') || q.includes('campaign') || q.includes('growth')) {
    return `The marketing prompts in PromptPalace are battle-tested by growth teams. Top picks:

**Conversion Copywriting Framework** — AIDA and PAS frameworks combined into one high-converting copy generator. 2.1k saves.

**B2B Cold Outreach Personalization Engine** — Generates hyper-personalized outreach at scale using company data. Score: 91.

The **B2B SaaS GTM Kit** and **Growth Hacker Playbook** stacks are perfect if you're launching or scaling.

Are you focused on a specific channel — email, ads, landing pages, or social?`
  }

  if (q.includes('trending') || q.includes('popular') || q.includes('hot') || q.includes('best')) {
    return `Here's what's trending most on PromptPalace right now:

🔥 **VIRAL** (score 95+):
• Autonomous Agent System Prompt Framework
• Full-Stack Architecture Advisor

↑ **HOT** (score 85-94):
• B2B Cold Outreach Personalization Engine
• Semantic SEO Content Architect
• React Component Design System Generator

You can see the full live rankings at /trending — they update in real-time based on saves, copies, and usage.

Want me to filter by a specific category or use case?`
  }

  if (q.includes('beginner') || q.includes('start') || q.includes('new') || q.includes('easy')) {
    return `Great place to start! Here are beginner-friendly prompts that consistently get great results:

**Blog Post Outline Generator** — Just describe your topic and get a full SEO-optimized structure. Perfect for content beginners.

**Code Review Checklist** — Paste any code snippet and get structured feedback. No setup required.

**Meeting Notes Summarizer** — Turn messy meeting notes into clear action items and summaries.

I'd suggest starting with the **Content Marketing Engine** stack — it has prompts for every skill level and walks you through a complete workflow.

What area are you most interested in starting with?`
  }

  // Default fallback
  return `That's an interesting question! Let me search the PromptPalace library for you.

Based on what you're asking, I'd recommend exploring the **Trending** section at /trending — it shows the highest-performing prompts across all categories ranked by real usage data.

You can also browse by **Categories** at /categories to find the exact niche you need, or try one of our curated **Stacks** at /stacks for bundled workflows.

If you can tell me more about what you're trying to accomplish — the tool you're using, the task at hand, or your skill level — I can point you to the most relevant prompts. What are you building or working on?`
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || isTyping) return

    const userMsg: Message = { role: 'user', content, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    const delay = 800 + Math.random() * 700
    setTimeout(() => {
      const reply: Message = {
        role: 'assistant',
        content: generateMockResponse(content),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, reply])
      setIsTyping(false)
    }, delay)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="max-w-3xl mx-auto animate-fade-in flex flex-col" style={{ height: 'calc(100vh - 64px - 2rem)' }}>

      {/* Header */}
      <div className="mb-4 shrink-0">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg font-mono">
            ◉
          </div>
          <div>
            <h1 className="text-lg font-display font-bold text-text-primary leading-none">
              PromptPalace Assistant
            </h1>
            <p className="text-[11px] font-mono text-text-muted mt-0.5">Powered by curated library data</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="glow-dot" />
            <span className="text-xs font-mono text-emerald-400">Online</span>
          </div>
        </div>

        {/* Beta banner */}
        <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/8 border border-amber-500/20">
          <span className="text-amber-400 text-xs shrink-0">⚠</span>
          <p className="text-xs font-mono text-amber-300/80">
            Assistant is in beta — responses are illustrative, not AI-generated
          </p>
        </div>
      </div>

      {/* Quick suggestions */}
      <div className="flex flex-wrap gap-2 mb-4 shrink-0">
        {QUICK_SUGGESTIONS.map(sug => (
          <button
            key={sug}
            onClick={() => handleSend(sug)}
            disabled={isTyping}
            className="text-xs font-mono px-3 py-1.5 rounded-full bg-bg-elevated border border-border text-text-secondary hover:text-text-primary hover:border-border-strong transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 scrollbar-thin">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              'flex gap-3',
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Avatar */}
            <div className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono shrink-0 mt-0.5',
              msg.role === 'assistant'
                ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-400'
                : 'bg-violet-500/15 border border-violet-500/30 text-violet-400'
            )}>
              {msg.role === 'assistant' ? '◉' : 'U'}
            </div>

            {/* Bubble */}
            <div className={cn(
              'max-w-[85%] flex flex-col gap-1',
              msg.role === 'user' ? 'items-end' : 'items-start'
            )}>
              <div className={cn(
                'rounded-2xl px-4 py-3 text-sm font-body leading-relaxed whitespace-pre-wrap',
                msg.role === 'assistant'
                  ? 'bg-bg-surface border border-border text-text-primary rounded-tl-sm'
                  : 'bg-violet-600/25 border border-violet-500/30 text-violet-100 rounded-tr-sm'
              )}>
                {msg.content}
              </div>
              <span className="text-[10px] font-mono text-text-muted px-1">
                {formatTime(msg.timestamp)}
              </span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
              ◉
            </div>
            <div className="bg-bg-surface border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="shrink-0 bg-bg-surface border border-border rounded-2xl p-3 focus-within:border-violet-500/40 transition-colors">
        <textarea
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about prompts, categories, or how to improve your workflow…"
          rows={2}
          disabled={isTyping}
          className="w-full bg-transparent text-sm font-body text-text-primary placeholder:text-text-muted resize-none outline-none leading-relaxed disabled:opacity-50"
        />
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
          <span className="text-[10px] font-mono text-text-muted">
            Enter to send · Shift+Enter for new line
          </span>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className={cn(
              'min-h-[34px] px-4 text-xs font-mono rounded-lg border transition-all duration-150',
              input.trim() && !isTyping
                ? 'bg-violet-600 border-violet-600 text-white hover:bg-violet-700'
                : 'bg-bg-elevated border-border text-text-muted cursor-not-allowed opacity-50'
            )}
          >
            Send →
          </button>
        </div>
      </div>
    </div>
  )
}
