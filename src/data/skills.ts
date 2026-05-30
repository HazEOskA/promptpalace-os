export type SkillCategory = 'coding' | 'research' | 'creative' | 'analytics' | 'blockchain' | 'product'

export interface Skill {
  id: string
  name: string
  description: string
  category: SkillCategory
  model: string
  capabilities: string[]
  icon: string
  active: boolean
  powerLevel: number // 1-5
}

export const SKILLS: Skill[] = [
  {
    id: 'sk001',
    name: 'KARPATHY Coder',
    description: 'Production-grade code generation with architecture planning, TypeScript-first, test coverage.',
    category: 'coding',
    model: 'claude-3-5-sonnet',
    capabilities: ['TypeScript', 'React', 'Node.js', 'Rust', 'Architecture', 'Testing'],
    icon: '⚡',
    active: true,
    powerLevel: 5,
  },
  {
    id: 'sk002',
    name: 'Solana Architect',
    description: 'SPL tokens, Anchor programs, Jito MEV, Metaplex, Raydium/Jupiter integrations.',
    category: 'blockchain',
    model: 'claude-3-5-sonnet',
    capabilities: ['SPL Token', 'Anchor', 'Jito MEV', 'Metaplex', 'DeFi', 'PDAs'],
    icon: '◎',
    active: true,
    powerLevel: 5,
  },
  {
    id: 'sk003',
    name: 'Research Intel',
    description: 'Deep competitive analysis, market mapping, signal detection, intelligence reports.',
    category: 'research',
    model: 'gpt-4o',
    capabilities: ['Competitor Analysis', 'Market Research', 'Signal Detection', 'Reports'],
    icon: '🔍',
    active: false,
    powerLevel: 4,
  },
  {
    id: 'sk004',
    name: 'Growth Engine',
    description: 'GTM playbooks, viral loop design, retention mechanics, growth experiments.',
    category: 'product',
    model: 'gpt-4o',
    capabilities: ['GTM', 'Viral Loops', 'A/B Testing', 'Retention', 'Monetization'],
    icon: '📈',
    active: false,
    powerLevel: 4,
  },
  {
    id: 'sk005',
    name: 'UI/UX Forge',
    description: 'Mobile-first component generation, design systems, accessibility, dark UI patterns.',
    category: 'creative',
    model: 'claude-3-5-sonnet',
    capabilities: ['React', 'Tailwind', 'Mobile-first', 'Accessibility', 'Dark UI'],
    icon: '🎨',
    active: true,
    powerLevel: 4,
  },
  {
    id: 'sk006',
    name: 'On-chain Analyst',
    description: 'Wallet behavior analysis, alpha signal detection, copy-trade intelligence.',
    category: 'analytics',
    model: 'gpt-4o',
    capabilities: ['Wallet Analysis', 'Alpha Signals', 'Helius API', 'DeFi Analytics'],
    icon: '📊',
    active: false,
    powerLevel: 4,
  },
  {
    id: 'sk007',
    name: 'Content Alchemist',
    description: 'Crypto-native content for Farcaster, X, newsletters. KOL-grade writing.',
    category: 'creative',
    model: 'claude-3-5-sonnet',
    capabilities: ['Farcaster', 'X/Twitter', 'Newsletter', 'KOL Outreach', 'Threads'],
    icon: '✍️',
    active: false,
    powerLevel: 3,
  },
  {
    id: 'sk008',
    name: 'Product Architect',
    description: 'PRD generation, user story mapping, MVP scoping, technical specification.',
    category: 'product',
    model: 'claude-3-5-sonnet',
    capabilities: ['PRD', 'User Stories', 'MVP Scope', 'Tech Spec', 'Roadmapping'],
    icon: '🏗️',
    active: true,
    powerLevel: 4,
  },
]

export const POWER_LABELS: Record<number, string> = {
  1: 'Basic',
  2: 'Standard',
  3: 'Enhanced',
  4: 'Advanced',
  5: 'Elite',
}
