import { PROMPTS } from './prompts'
import { CODING_PROMPTS } from './prompt-library-coding'
import { MARKETING_PROMPTS } from './prompt-library-marketing'
import { BUSINESS_PROMPTS } from './prompt-library-business'
import { AGENT_PROMPTS } from './prompt-library-agents'
import { DESIGN_PROMPTS } from './prompt-library-design'
import { SOLANA_PROMPTS } from './prompt-library-solana'
import { CONTENT_PROMPTS } from './prompt-library-content'
import { RESEARCH_PROMPTS } from './prompt-library-research'
import { AUTOMATION_PROMPTS } from './prompt-library-automation'
import { PRODUCTIVITY_PROMPTS } from './prompt-library-productivity'
import { SALES_PROMPTS } from './prompt-library-sales'
import { SEO_PROMPTS } from './prompt-library-seo'
import { SOCIAL_MEDIA_PROMPTS } from './prompt-library-social-media'
import { STARTUPS_PROMPTS } from './prompt-library-startups'
import { CAREER_PROMPTS } from './prompt-library-career'
import { WRITING_PROMPTS } from './prompt-library-writing'
import { ANALYSIS_PROMPTS } from './prompt-library-analysis'

export type { Prompt, PromptCategory } from './prompts'
export { PROMPTS } from './prompts'
export { CATEGORIES } from './categories'
export { USERS } from './users'
export { STACKS } from './stacks'

export const ALL_PROMPTS = [
  ...PROMPTS,
  ...CODING_PROMPTS,
  ...MARKETING_PROMPTS,
  ...BUSINESS_PROMPTS,
  ...AGENT_PROMPTS,
  ...DESIGN_PROMPTS,
  ...SOLANA_PROMPTS,
  ...CONTENT_PROMPTS,
  ...RESEARCH_PROMPTS,
  ...AUTOMATION_PROMPTS,
  ...PRODUCTIVITY_PROMPTS,
  ...SALES_PROMPTS,
  ...SEO_PROMPTS,
  ...SOCIAL_MEDIA_PROMPTS,
  ...STARTUPS_PROMPTS,
  ...CAREER_PROMPTS,
  ...WRITING_PROMPTS,
  ...ANALYSIS_PROMPTS,
]

export function getPromptById(id: string) {
  return ALL_PROMPTS.find(p => p.id === id)
}

export function getPromptsByCategory(category: string) {
  return ALL_PROMPTS.filter(p => p.category === category)
}

export function getTrendingPrompts(limit = 20) {
  return [...ALL_PROMPTS]
    .sort((a, b) => (b.trendScore ?? 0) - (a.trendScore ?? 0))
    .slice(0, limit)
}

export function getFeaturedPrompts(limit = 6) {
  return ALL_PROMPTS.filter(p => p.featured).slice(0, limit)
}

export function searchPrompts(query: string) {
  const q = query.toLowerCase()
  return ALL_PROMPTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  )
}
