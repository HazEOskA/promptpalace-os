export interface Category {
  id: string
  label: string
  description: string
  icon: string
  color: string // tailwind color name: violet, cyan, emerald, rose, amber, pink, blue, orange, teal
  promptCount: number
  topTags: string[]
  featuredPromptId?: string
}

export const CATEGORIES: Category[] = [
  { id: 'coding', label: 'Coding', description: 'Code generation, debugging, architecture, and developer workflows', icon: '{ }', color: 'cyan', promptCount: 18, topTags: ['typescript', 'react', 'api', 'testing', 'architecture'] },
  { id: 'marketing', label: 'Marketing', description: 'Campaigns, copy, funnels, growth, and brand strategy', icon: '↗', color: 'rose', promptCount: 16, topTags: ['copywriting', 'campaigns', 'funnels', 'growth', 'brand'] },
  { id: 'business', label: 'Business', description: 'Strategy, operations, planning, and decision frameworks', icon: '◆', color: 'amber', promptCount: 16, topTags: ['strategy', 'OKRs', 'operations', 'planning', 'finance'] },
  { id: 'ai-agent', label: 'Agents', description: 'AI agent design, orchestration, memory, and tool use', icon: '◉', color: 'violet', promptCount: 16, topTags: ['system-prompt', 'orchestration', 'memory', 'tools', 'autonomous'] },
  { id: 'design', label: 'Design', description: 'UI/UX, design systems, brand, and visual direction', icon: '⬟', color: 'pink', promptCount: 15, topTags: ['ui', 'ux', 'design-system', 'mobile', 'brand'] },
  { id: 'content', label: 'Content', description: 'Blog posts, newsletters, scripts, and content frameworks', icon: '≡', color: 'orange', promptCount: 15, topTags: ['blog', 'newsletter', 'script', 'repurposing', 'storytelling'] },
  { id: 'automation', label: 'Automation', description: 'Zapier, Make, APIs, pipelines, and workflow automation', icon: '⟳', color: 'emerald', promptCount: 15, topTags: ['zapier', 'make', 'api', 'pipeline', 'triggers'] },
  { id: 'solana', label: 'Web3', description: 'Solana, smart contracts, DeFi, NFTs, and on-chain analysis', icon: '◎', color: 'violet', promptCount: 15, topTags: ['solana', 'defi', 'nft', 'smart-contract', 'tokenomics'] },
  { id: 'research', label: 'Research', description: 'Market research, user interviews, competitive intel, and analysis', icon: '⊹', color: 'blue', promptCount: 15, topTags: ['market', 'competitive', 'user-research', 'data', 'analysis'] },
  { id: 'productivity', label: 'Productivity', description: 'Focus systems, goal frameworks, time management, and habits', icon: '⊞', color: 'teal', promptCount: 15, topTags: ['goals', 'focus', 'habits', 'time', 'systems'] },
  { id: 'sales', label: 'Sales', description: 'Outreach, discovery, objections, proposals, and closing', icon: '⬆', color: 'emerald', promptCount: 15, topTags: ['outreach', 'objections', 'discovery', 'proposal', 'closing'] },
  { id: 'seo', label: 'SEO', description: 'Keywords, content strategy, on-page, and technical SEO', icon: '⌖', color: 'amber', promptCount: 15, topTags: ['keywords', 'content', 'technical', 'backlinks', 'local'] },
  { id: 'social-media', label: 'Social Media', description: 'LinkedIn, Twitter, TikTok, Instagram, and community building', icon: '◈', color: 'rose', promptCount: 15, topTags: ['linkedin', 'twitter', 'hooks', 'threads', 'engagement'] },
  { id: 'startups', label: 'Startups', description: 'Validation, pitching, fundraising, MVP, and early growth', icon: '↑', color: 'orange', promptCount: 15, topTags: ['mvp', 'pitch', 'fundraising', 'validation', 'growth'] },
  { id: 'career', label: 'Career', description: 'Resume, interviews, negotiation, career pivots, and personal brand', icon: '★', color: 'amber', promptCount: 15, topTags: ['resume', 'interview', 'negotiation', 'linkedin', 'brand'] },
  { id: 'writing', label: 'Writing', description: 'Long-form articles, essays, fiction, copywriting, and creative writing', icon: '✍', color: 'pink', promptCount: 15, topTags: ['essay', 'fiction', 'copywriting', 'storytelling', 'style'] },
  { id: 'analysis', label: 'Analysis', description: 'Data analysis, critical thinking, competitive intelligence, and structured frameworks', icon: '⊟', color: 'blue', promptCount: 15, topTags: ['data', 'frameworks', 'critical-thinking', 'competitive', 'reports'] },
  { id: 'learning', label: 'Learning', description: 'Study techniques, skill acquisition, course creation, and knowledge synthesis', icon: '◎', color: 'teal', promptCount: 15, topTags: ['study', 'skills', 'courses', 'synthesis', 'tutoring'] },
  { id: 'creative', label: 'Creative', description: 'Brainstorming, ideation, storytelling, art direction, and creative strategy', icon: '✦', color: 'orange', promptCount: 15, topTags: ['brainstorm', 'ideation', 'storytelling', 'art', 'concepts'] },
  { id: 'ai-personas', label: 'AI Personas', description: 'Custom AI characters, role-play setups, expert personas, and conversational agents', icon: '⬡', color: 'violet', promptCount: 15, topTags: ['persona', 'roleplay', 'character', 'expert', 'assistant'] },
]
