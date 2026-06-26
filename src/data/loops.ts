import type { PromptCategory } from './prompts'

export type LoopPhaseType = 'input' | 'context' | 'generate' | 'audit' | 'output' | 'next'

export interface LoopPhase {
  id: string
  label: string
  type: LoopPhaseType
  instruction: string
  outputLabel: string
  placeholder?: string
  promptId?: string
}

export interface Loop {
  id: string
  title: string
  description: string
  category: PromptCategory
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  tags: string[]
  phases: LoopPhase[]
  featured: boolean
  n8nDraftAvailable: boolean
  outputFormat: string
  relatedLoopIds?: string[]
}

export const LOOPS: Loop[] = [
  {
    id: 'loop-saas-gtm-001',
    title: 'SaaS GTM Sprint',
    description: 'Go-to-market strategy for a new SaaS product in 5 structured phases.',
    category: 'startups',
    difficulty: 'intermediate',
    estimatedTime: '20–30 min',
    tags: ['gtm', 'saas', 'strategy', 'launch'],
    featured: true,
    n8nDraftAvailable: true,
    outputFormat: 'Markdown doc',
    phases: [
      {
        id: 'phase-01',
        label: 'Define Your Product',
        type: 'input',
        instruction: 'Describe your SaaS product in 1–3 sentences. What problem does it solve, and for whom?',
        outputLabel: 'Product Brief',
        placeholder: 'e.g. A project management tool for freelance designers that auto-generates client invoices...',
      },
      {
        id: 'phase-02',
        label: 'Set Context Variables',
        type: 'context',
        instruction: 'Fill in your target market, pricing model, and primary acquisition channel.',
        outputLabel: 'Context Block',
        placeholder: 'Target: B2B SMBs / Pricing: $49/mo / Channel: LinkedIn outbound',
      },
      {
        id: 'phase-03',
        label: 'Generate GTM Plan',
        type: 'generate',
        instruction: 'Paste the output above into your AI tool with the prompt: "Create a 90-day GTM plan for [PRODUCT] targeting [MARKET] at [PRICE] via [CHANNEL]. Format: week-by-week milestones."',
        outputLabel: 'GTM Draft',
        promptId: 'lib-sta-001',
      },
      {
        id: 'phase-04',
        label: 'Truth Audit',
        type: 'audit',
        instruction: 'Review the GTM plan. Check: Is the ICP specific? Are milestones realistic? Is channel-market fit sound?',
        outputLabel: 'Audit Notes',
      },
      {
        id: 'phase-05',
        label: 'Final Output',
        type: 'output',
        instruction: 'Copy your validated GTM plan below. This is your deliverable.',
        outputLabel: 'GTM Plan — Ready to Execute',
      },
    ],
  },
  {
    id: 'loop-content-repurpose-001',
    title: 'Content Repurpose Engine',
    description: 'Transform one long-form piece into 5 distribution formats.',
    category: 'content',
    difficulty: 'beginner',
    estimatedTime: '10–15 min',
    tags: ['content', 'repurpose', 'social', 'seo'],
    featured: true,
    n8nDraftAvailable: true,
    outputFormat: 'Bullet list',
    phases: [
      {
        id: 'phase-01',
        label: 'Input Source Content',
        type: 'input',
        instruction: 'Paste your long-form content (blog post, transcript, essay) here.',
        outputLabel: 'Source Content',
        placeholder: 'Paste your article, thread, or transcript here...',
      },
      {
        id: 'phase-02',
        label: 'Set Target Channels',
        type: 'context',
        instruction: 'Which 5 channels do you want output for? (e.g. X thread, LinkedIn post, newsletter, YouTube description, SEO meta)',
        outputLabel: 'Target Channels',
        placeholder: 'X thread, LinkedIn, newsletter blurb, YT description, meta description',
      },
      {
        id: 'phase-03',
        label: 'Generate Formats',
        type: 'generate',
        instruction: "Prompt your AI: \"Repurpose the following content for [CHANNELS]. Match each format's native style. Source: [PASTE CONTENT]\"",
        outputLabel: 'Repurposed Formats',
      },
      {
        id: 'phase-04',
        label: 'Output & Copy',
        type: 'output',
        instruction: 'Review each format and copy the ones ready to publish.',
        outputLabel: 'Distribution-Ready Content',
      },
    ],
  },
  {
    id: 'loop-code-review-001',
    title: 'AI Code Review Loop',
    description: 'Structured code review: explain, audit, suggest, and document.',
    category: 'coding',
    difficulty: 'intermediate',
    estimatedTime: '15–20 min',
    tags: ['code', 'review', 'debugging', 'documentation'],
    featured: false,
    n8nDraftAvailable: false,
    outputFormat: 'Code block',
    phases: [
      {
        id: 'phase-01',
        label: 'Paste Code',
        type: 'input',
        instruction: 'Paste the code block you want reviewed. Include the file name and language.',
        outputLabel: 'Code Input',
        placeholder: '// filename.ts\n// Paste code here...',
      },
      {
        id: 'phase-02',
        label: 'Set Review Scope',
        type: 'context',
        instruction: 'What should the review focus on? (e.g. security, performance, readability, edge cases)',
        outputLabel: 'Review Scope',
        placeholder: 'Focus: security vulnerabilities + edge case handling',
      },
      {
        id: 'phase-03',
        label: 'Generate Review',
        type: 'generate',
        instruction: 'Prompt your AI: "Review this [LANGUAGE] code for [SCOPE]. Format: issues found, severity (P0/P1/P2), suggested fix per issue."',
        outputLabel: 'Review Output',
        promptId: 'lib-cod-001',
      },
      {
        id: 'phase-04',
        label: 'Audit Findings',
        type: 'audit',
        instruction: 'Verify each finding: Is it a real issue? Does the fix make sense? Mark each as Accept / Reject / Modify.',
        outputLabel: 'Verified Findings',
      },
      {
        id: 'phase-05',
        label: 'Final Output',
        type: 'output',
        instruction: 'Copy the accepted review comments and action items.',
        outputLabel: 'Code Review — Action Items',
      },
    ],
  },
  {
    id: 'loop-seo-sprint-001',
    title: 'SEO Content Sprint',
    description: 'Keyword to published-ready article outline in 5 phases.',
    category: 'seo',
    difficulty: 'beginner',
    estimatedTime: '15–25 min',
    tags: ['seo', 'content', 'writing', 'keywords'],
    featured: false,
    n8nDraftAvailable: true,
    outputFormat: 'Markdown doc',
    phases: [
      {
        id: 'phase-01',
        label: 'Target Keyword',
        type: 'input',
        instruction: 'Enter your primary keyword or topic and the search intent (informational, commercial, navigational).',
        outputLabel: 'Keyword Brief',
        placeholder: 'Keyword: "best AI tools for marketers" / Intent: Commercial',
      },
      {
        id: 'phase-02',
        label: 'Audience & Tone',
        type: 'context',
        instruction: 'Define your target reader, content length, and brand tone.',
        outputLabel: 'Content Context',
        placeholder: 'Reader: growth marketers / Length: 1500 words / Tone: expert but approachable',
      },
      {
        id: 'phase-03',
        label: 'Generate Outline',
        type: 'generate',
        instruction: 'Prompt: "Create an SEO-optimized outline for [KEYWORD] targeting [AUDIENCE]. Include H2s, H3s, semantic keywords, and a meta description."',
        outputLabel: 'Article Outline',
        promptId: 'lib-seo-001',
      },
      {
        id: 'phase-04',
        label: 'Truth Audit',
        type: 'audit',
        instruction: 'Check: Does the outline match search intent? Are headers keyword-rich? Is the structure logical?',
        outputLabel: 'Outline Audit',
      },
      {
        id: 'phase-05',
        label: 'Final Article',
        type: 'output',
        instruction: 'Generate the full article from the audited outline, then copy here.',
        outputLabel: 'SEO Article — Ready to Publish',
      },
    ],
  },
  {
    id: 'loop-agent-design-001',
    title: 'AI Agent Design Loop',
    description: 'Define, prompt, and test a custom AI agent persona from scratch.',
    category: 'ai-agent',
    difficulty: 'advanced',
    estimatedTime: '25–35 min',
    tags: ['agent', 'persona', 'system-prompt', 'ai-design'],
    featured: true,
    n8nDraftAvailable: false,
    outputFormat: 'Code block',
    phases: [
      {
        id: 'phase-01',
        label: 'Define Agent Purpose',
        type: 'input',
        instruction: "What does this agent do? Who is it for? What is it NOT allowed to do?",
        outputLabel: 'Agent Definition',
        placeholder: 'Agent: Customer onboarding bot / For: SaaS trial users / Not allowed: pricing decisions, refunds',
      },
      {
        id: 'phase-02',
        label: 'Set Constraints & Tone',
        type: 'context',
        instruction: "Set the agent's persona, knowledge scope, response length limits, and escalation conditions.",
        outputLabel: 'Agent Constraints',
        placeholder: 'Persona: Friendly expert / Scope: product docs only / Max: 3 paragraphs / Escalate: billing questions',
      },
      {
        id: 'phase-03',
        label: 'Generate System Prompt',
        type: 'generate',
        instruction: 'Prompt: "Write a production-ready system prompt for an AI agent with the following spec: [PASTE DEFINITION + CONSTRAINTS]"',
        outputLabel: 'System Prompt Draft',
        promptId: 'lib-age-001',
      },
      {
        id: 'phase-04',
        label: 'Audit the Prompt',
        type: 'audit',
        instruction: 'Test the system prompt with 3 edge-case inputs. Does it stay in scope? Does it escalate correctly? Is tone consistent?',
        outputLabel: 'Audit Results',
      },
      {
        id: 'phase-05',
        label: 'Final System Prompt',
        type: 'output',
        instruction: 'Copy the validated system prompt. Ready to deploy.',
        outputLabel: 'Agent System Prompt — Production Ready',
      },
    ],
  },
  {
    id: 'loop-product-launch-001',
    title: 'Product Launch Playbook',
    description: 'End-to-end launch checklist: positioning, copy, channels, and Day 1 plan.',
    category: 'startups',
    difficulty: 'advanced',
    estimatedTime: '30–45 min',
    tags: ['launch', 'product', 'positioning', 'marketing'],
    featured: false,
    n8nDraftAvailable: true,
    outputFormat: 'Markdown doc',
    relatedLoopIds: ['loop-saas-gtm-001', 'loop-content-repurpose-001'],
    phases: [
      {
        id: 'phase-01',
        label: 'Product & Positioning',
        type: 'input',
        instruction: 'Describe your product, its primary differentiator, and the one job it does better than any alternative.',
        outputLabel: 'Product Positioning',
        placeholder: 'Product: [NAME] / USP: [DIFFERENTIATOR] / Job: [ONE THING IT DOES BEST]',
      },
      {
        id: 'phase-02',
        label: 'Audience & Channels',
        type: 'context',
        instruction: 'Who is buying on Day 1? Where do they hang out? What does success look like in week 1?',
        outputLabel: 'Launch Context',
        placeholder: 'Buyer: early adopters / Channels: Product Hunt, X, Indie Hackers / Success: 100 signups',
      },
      {
        id: 'phase-03',
        label: 'Generate Launch Copy',
        type: 'generate',
        instruction: 'Prompt: "Write a Product Hunt headline, tagline, 3-bullet value prop, and 280-char launch tweet for: [PRODUCT POSITIONING]"',
        outputLabel: 'Launch Copy',
        promptId: 'lib-mkt-001',
      },
      {
        id: 'phase-04',
        label: 'Audit Copy',
        type: 'audit',
        instruction: "Is the headline specific enough to stand out? Does the value prop address the buyer's real pain? Is the tweet shareable?",
        outputLabel: 'Copy Audit',
      },
      {
        id: 'phase-05',
        label: 'Day 1 Action Plan',
        type: 'output',
        instruction: 'Combine validated copy + channel plan into your Day 1 launch checklist.',
        outputLabel: 'Launch Plan — Day 1 Ready',
      },
    ],
  },
]
