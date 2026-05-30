export type PromptCategory =
  | 'coding'
  | 'writing'
  | 'business'
  | 'research'
  | 'design'
  | 'marketing'
  | 'solana'
  | 'ai-agent'

export type PromptDifficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Prompt {
  id: string
  title: string
  description: string
  content: string
  category: PromptCategory
  tags: string[]
  difficulty: PromptDifficulty
  uses: number
  saves: number
  trending: boolean
  trendingScore: number
  author: string
  createdAt: string
  estimatedTokens: number
  model: string
  whyTrending?: string
  bestFor?: string[]
}

export const PROMPTS: Prompt[] = [
  {
    id: 'p001',
    title: 'Solana Token Launch Architect',
    description: 'Full SPL token deployment strategy with Metaplex metadata, Jito MEV bundles, and viral social signal generation.',
    content: `You are an expert Solana ecosystem architect. I need to launch a production-grade SPL token.

## Context
- Token Name: [NAME]
- Symbol: [SYMBOL]
- Supply: [SUPPLY]
- Decimals: 9
- Target: pump.fun / Raydium launch

## Task
Generate a complete deployment checklist covering:
1. Keypair generation with BIP44 HD derivation
2. Metaplex metadata URI (Irys/Arweave upload)
3. SPL token initialization with ATA setup
4. Jito MEV bundle for launch transaction
5. Raydium liquidity pool initialization strategy
6. Social signal triggers (Farcaster + X posts)

Output as executable TypeScript scaffold with @solana/web3.js.`,
    category: 'solana',
    tags: ['solana', 'SPL', 'Metaplex', 'Jito', 'DeFi'],
    difficulty: 'advanced',
    uses: 2847,
    saves: 891,
    trending: true,
    trendingScore: 97,
    author: 'wolf_dev',
    createdAt: '2024-11-15',
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    whyTrending: '2,800+ builders use this for pump.fun & Raydium launches. Ships full TypeScript scaffolds in one prompt.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'p002',
    title: 'AI Agent OS Execution Loop',
    description: 'Build a self-recovering AI agent with context memory, step continuity, and tool orchestration.',
    content: `You are an AI OS Runtime. Execute in this order:

## STEP 0 — CONTEXT RECOVERY
Scan last 5 messages. Identify:
- Active project name
- Last completed step
- Pending blockers
- Current execution mode (BUILD / DEBUG / DESIGN)

## STEP 0.5 — WORKSPACE DETECTION
Detect active workspace:
- Files open / repos mentioned
- Language/framework detected
- Build system: [Vite/Anchor/Hardhat/Next.js]

## STEP 1 — EXECUTION CONTINUITY CHECK
Resume from last checkpoint. If none found, initialize new project scaffold.

## STEP 2 — BUILD / ANSWER / EXECUTE
[USER_REQUEST]

Output: structured response with progress bar and next action.`,
    category: 'ai-agent',
    tags: ['AI OS', 'agent', 'context', 'execution', 'workflow'],
    difficulty: 'advanced',
    uses: 4211,
    saves: 1544,
    trending: true,
    trendingScore: 99,
    author: 'promptpalace_core',
    createdAt: '2024-11-20',
    estimatedTokens: 600,
    model: 'claude-3-5-sonnet',
    whyTrending: 'The #1 context-recovery protocol. Used daily in AI-assisted builds to eliminate lost progress and broken sessions.',
    bestFor: ['Claude'],
  },
  {
    id: 'p003',
    title: 'SaaS Viral Growth Engine',
    description: 'Generate a complete GTM playbook with growth loops, viral coefficients, and retention mechanics.',
    content: `Act as a growth engineering consultant with experience scaling SaaS products from 0 to $1M ARR.

## Product Context
- Product: [PRODUCT_NAME]
- Target user: [ICP]
- Current MRR: [MRR]
- Biggest drop-off point: [FUNNEL_STAGE]

## Deliverables
1. **Viral Loop Design**: 3 specific loop variants with k-factor estimates
2. **Activation Metrics**: North Star + 3 supporting metrics
3. **Week 1 Retention Hook**: Specific feature/email sequence
4. **Growth Experiments**: 5 A/B tests ranked by ICE score
5. **Channel Strategy**: Organic + paid + product-led ranked by ROI

Format: Notion-ready table + action checklist.`,
    category: 'business',
    tags: ['saas', 'growth', 'GTM', 'retention', 'viral'],
    difficulty: 'intermediate',
    uses: 3102,
    saves: 978,
    trending: true,
    trendingScore: 94,
    author: 'growth_lab',
    createdAt: '2024-11-18',
    estimatedTokens: 700,
    model: 'gpt-4o',
    whyTrending: 'GTM teams run this at the start of every sprint. Outputs Notion-ready growth playbooks with ICE-scored experiments.',
    bestFor: ['ChatGPT', 'Claude', 'Gemini'],
  },
  {
    id: 'p004',
    title: 'React Component Architecture Planner',
    description: 'Design a scalable React component system with TypeScript, clear data flow, and performance patterns.',
    content: `You are a senior frontend architect. Design a production-grade React component system.

## Requirements
- Framework: React 18 + TypeScript + Vite
- State: [zustand/jotai/context]
- Styling: Tailwind CSS
- Feature: [FEATURE_NAME]

## Output Format
\`\`\`
/components
  /[FeatureName]
    index.tsx          — barrel export
    [Feature].tsx      — main component
    [Feature].types.ts — TypeScript interfaces
    [Feature].hooks.ts — custom hooks
    [Feature].utils.ts — pure functions
    [Feature].test.tsx — test stubs
\`\`\`

Include: prop types, state diagram, performance notes (memo/callback/lazy), accessibility notes.`,
    category: 'coding',
    tags: ['react', 'typescript', 'architecture', 'components', 'frontend'],
    difficulty: 'intermediate',
    uses: 1890,
    saves: 642,
    trending: false,
    trendingScore: 71,
    author: 'fe_architect',
    createdAt: '2024-11-10',
    estimatedTokens: 550,
    model: 'claude-3-5-sonnet',
    whyTrending: 'Frontend teams paste this before every new feature. Eliminates architecture debates and ships scalable component systems fast.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'p005',
    title: 'Smart Money Wallet Analyzer',
    description: 'Deep analysis of on-chain wallet behavior to identify alpha signals and copy-trade candidates.',
    content: `You are a Solana on-chain intelligence analyst. Analyze this wallet for alpha signals.

## Wallet Data
- Address: [WALLET_ADDRESS]
- Timeframe: Last 30 days
- Helius API: [API_ENDPOINT]

## Analysis Framework
1. **Trade Pattern**: Entry/exit timing, position sizing, avg hold time
2. **Token Selection**: Category bias (memes/DeFi/NFT), market cap preference
3. **Alpha Score**: 0-100 based on PnL consistency, early entry rate
4. **Copy Trade Risk**: Slippage tolerance, liquidity requirements
5. **Social Correlation**: Does this wallet front-run KOL tweets?

Output: JSON + narrative report + recommended monitoring alerts.`,
    category: 'solana',
    tags: ['onchain', 'alpha', 'copy-trade', 'Helius', 'DeFi'],
    difficulty: 'advanced',
    uses: 2234,
    saves: 756,
    trending: true,
    trendingScore: 89,
    author: 'solradar_dev',
    createdAt: '2024-11-12',
    estimatedTokens: 650,
    model: 'gpt-4o',
    whyTrending: 'Alpha hunters run this on every new wallet they find. 2,200+ on-chain analysts call it essential for finding copy-trade signals.',
    bestFor: ['ChatGPT', 'Gemini'],
  },
  {
    id: 'p006',
    title: 'Farcaster KOL Outreach Script',
    description: 'Generate personalized outreach messages for crypto KOLs on Farcaster with conversion-optimized CTAs.',
    content: `You are a crypto growth marketer specializing in Farcaster ecosystem.

## Campaign Context
- Project: [PROJECT_NAME]
- Token: [TICKER]
- KOL Profile: [FARCASTER_HANDLE]
- Their recent cast: [RECENT_CAST]
- Your ask: [COLLABORATION_TYPE]

## Output
1. **Personalized opener** (reference their content)
2. **Value proposition** (what's in it for them — tokens/equity/exposure)
3. **Social proof hook** (traction/team cred)
4. **Clear CTA** (calendar link or Telegram)
5. **Follow-up sequence**: 3 messages at 48h intervals

Tone: peer-to-peer, crypto-native, no corporate speak.`,
    category: 'marketing',
    tags: ['Farcaster', 'KOL', 'outreach', 'crypto', 'social'],
    difficulty: 'beginner',
    uses: 1567,
    saves: 489,
    trending: false,
    trendingScore: 62,
    author: 'kol_hunter',
    createdAt: '2024-11-08',
    estimatedTokens: 400,
    model: 'claude-3-5-sonnet',
    whyTrending: 'Farcaster community managers swear by this for cold outreach. Peer-to-peer tone converts 3× better than corporate templates.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'p007',
    title: 'Anchor Smart Contract Auditor',
    description: 'Security audit checklist for Solana Anchor programs covering common vulnerabilities and attack vectors.',
    content: `You are a Solana smart contract security auditor. Audit this Anchor program.

## Program Code
\`\`\`rust
[PASTE_PROGRAM_CODE]
\`\`\`

## Audit Checklist
- [ ] Signer validation (missing_signer_check)
- [ ] Account ownership validation
- [ ] Arithmetic overflow (use checked math)
- [ ] Reentrancy patterns
- [ ] PDA derivation correctness
- [ ] Bump seed canonicalization
- [ ] Lamport manipulation
- [ ] CPI privilege escalation

## Output
- Risk level: CRITICAL / HIGH / MEDIUM / LOW per finding
- PoC exploit sketch for each critical
- Recommended fix with code snippet
- Overall security score: /100`,
    category: 'solana',
    tags: ['Anchor', 'security', 'audit', 'rust', 'smart-contract'],
    difficulty: 'advanced',
    uses: 1203,
    saves: 544,
    trending: false,
    trendingScore: 78,
    author: 'sec_auditor',
    createdAt: '2024-11-05',
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    whyTrending: 'Dev teams run this before every mainnet deploy. Catches reentrancy and PDA seed bugs that manual review misses.',
    bestFor: ['Claude'],
  },
  {
    id: 'p008',
    title: 'Workflow-to-Product PRD Generator',
    description: 'Convert a raw idea or workflow description into a production-ready PRD with user stories and tech spec.',
    content: `You are a product manager and technical writer. Convert this workflow/idea into a full PRD.

## Input
Workflow description: [WORKFLOW_OR_IDEA]

## PRD Structure
### 1. Problem Statement
- Who has this problem?
- Current solution (and why it sucks)
- Market size estimate

### 2. Product Vision
- North Star
- Success metrics

### 3. User Stories
- As a [USER], I want to [ACTION] so that [VALUE]
- (Generate 8-12 stories)

### 4. Tech Spec
- Architecture diagram (ASCII)
- Stack recommendation
- API endpoints (REST or tRPC)
- Database schema

### 5. MVP Scope
- Must-have (Week 1)
- Should-have (Month 1)
- Nice-to-have (Quarter 1)

### 6. Monetization
- Pricing model
- Revenue projections (conservative/base/optimistic)`,
    category: 'business',
    tags: ['PRD', 'product', 'planning', 'MVP', 'startup'],
    difficulty: 'intermediate',
    uses: 2891,
    saves: 1102,
    trending: true,
    trendingScore: 92,
    author: 'pm_hub',
    createdAt: '2024-11-14',
    estimatedTokens: 1000,
    model: 'gpt-4o',
    whyTrending: 'Startup founders use this at ideation stage. Replaces 10+ hours of PRD writing with a shipping-ready product spec.',
    bestFor: ['ChatGPT', 'Claude', 'Gemini'],
  },
  {
    id: 'p009',
    title: 'Mobile-First UI Component Generator',
    description: 'Generate accessible, responsive React components with Tailwind CSS optimized for mobile-first design.',
    content: `You are a senior mobile-first UI engineer. Create a React component.

## Spec
- Component: [COMPONENT_NAME]
- Purpose: [WHAT_IT_DOES]
- Mobile breakpoint: 375px
- Theme: [light/dark]
- Accessibility: WCAG AA minimum

## Output
- Fully typed TypeScript React component
- Tailwind CSS classes only (no inline styles)
- Touch-friendly tap targets (min 44px)
- Skeleton loading state
- Error state
- Empty state
- Storybook args template

Include: export type, props interface, JSDoc comment.`,
    category: 'design',
    tags: ['react', 'mobile', 'UI', 'tailwind', 'accessibility'],
    difficulty: 'intermediate',
    uses: 1734,
    saves: 587,
    trending: false,
    trendingScore: 69,
    author: 'ui_forge',
    createdAt: '2024-11-09',
    estimatedTokens: 500,
    model: 'claude-3-5-sonnet',
    whyTrending: 'Design engineers save 2-3 hours per component. Accessibility-first output with skeleton, error, and empty states built in.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'p010',
    title: 'Competitive Research Intelligence Report',
    description: 'Structured competitor analysis with positioning map, feature gaps, and strategic recommendations.',
    content: `You are a competitive intelligence analyst. Research [COMPETITOR_NAME] for [YOUR_PRODUCT].

## Research Dimensions

### Product Analysis
- Core features vs our product
- UX/UI differentiation
- Pricing model (tiers, limits, freemium)
- Technology stack (observable signals)

### Market Position
- Target customer segment
- Messaging/positioning statement
- Key differentiators they claim

### Growth Signals
- Funding history and runway estimate
- Team size (LinkedIn data)
- Content/SEO velocity
- Community size (Discord/Twitter/Farcaster)

### Strategic Gaps
- What they're missing
- Where we can outmaneuver them

## Output
2x2 positioning matrix + action list for next 90 days.`,
    category: 'research',
    tags: ['competitive', 'analysis', 'market', 'strategy', 'intelligence'],
    difficulty: 'intermediate',
    uses: 1445,
    saves: 521,
    trending: false,
    trendingScore: 74,
    author: 'intel_desk',
    createdAt: '2024-11-07',
    estimatedTokens: 750,
    model: 'gpt-4o',
    whyTrending: 'Strategy teams run this quarterly. Outputs a 2×2 positioning matrix plus a 90-day action plan in Notion-ready format.',
    bestFor: ['ChatGPT', 'Gemini'],
  },
]

export const CATEGORIES: { id: PromptCategory; label: string; color: string }[] = [
  { id: 'solana', label: 'Solana/Web3', color: 'violet' },
  { id: 'ai-agent', label: 'AI Agent', color: 'cyan' },
  { id: 'coding', label: 'Coding', color: 'emerald' },
  { id: 'business', label: 'Business', color: 'amber' },
  { id: 'marketing', label: 'Marketing', color: 'rose' },
  { id: 'research', label: 'Research', color: 'violet' },
  { id: 'design', label: 'Design', color: 'cyan' },
  { id: 'writing', label: 'Writing', color: 'amber' },
]
