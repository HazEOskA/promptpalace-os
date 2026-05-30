export interface UserProfile {
  username: string
  displayName: string
  bio: string
  avatar: string  // emoji string
  role: string
  promptCount: number
  followers: number
  following: number
  totalLikes: number
  totalSaves: number
  joinedAt: string
  topCategories: string[]
  featured: boolean
  verified: boolean
}

export const USERS: UserProfile[] = [
  {
    username: 'promptarchitect',
    displayName: 'Prompt Architect',
    bio: 'Building the definitive library of production-ready AI prompts. Ships systems, not ideas.',
    avatar: '🏗️',
    role: 'Prompt Engineer',
    promptCount: 42,
    followers: 2840,
    following: 180,
    totalLikes: 18600,
    totalSaves: 9400,
    joinedAt: '2024-09-01',
    topCategories: ['coding', 'ai-agent', 'automation'],
    featured: true,
    verified: true,
  },
  {
    username: 'marketinglab',
    displayName: 'Marketing Lab',
    bio: 'Growth marketer obsessed with conversion copy and demand gen. Every prompt tested in production.',
    avatar: '📈',
    role: 'Growth Marketer',
    promptCount: 31,
    followers: 1920,
    following: 240,
    totalLikes: 12400,
    totalSaves: 6100,
    joinedAt: '2024-10-12',
    topCategories: ['marketing', 'seo', 'social-media'],
    featured: true,
    verified: true,
  },
  {
    username: 'builderai',
    displayName: 'Builder AI',
    bio: 'Indie hacker + AI toolmaker. Turning Claude into a 10x team. Sharing everything I learn.',
    avatar: '⚡',
    role: 'Indie Hacker',
    promptCount: 27,
    followers: 1540,
    following: 310,
    totalLikes: 9800,
    totalSaves: 5200,
    joinedAt: '2024-11-05',
    topCategories: ['startups', 'business', 'productivity'],
    featured: false,
    verified: true,
  },
  {
    username: 'devdna',
    displayName: 'Dev DNA',
    bio: 'Full-stack engineer sharing prompts that actually save time. TypeScript, architecture, and systems design.',
    avatar: '🧬',
    role: 'Software Engineer',
    promptCount: 24,
    followers: 1280,
    following: 195,
    totalLikes: 8200,
    totalSaves: 4100,
    joinedAt: '2024-11-20',
    topCategories: ['coding', 'automation', 'research'],
    featured: false,
    verified: false,
  },
  {
    username: 'contentpro',
    displayName: 'Content Pro',
    bio: 'Content strategist and writer. Building content engines for B2B SaaS. Prompts for every stage of the funnel.',
    avatar: '✍️',
    role: 'Content Strategist',
    promptCount: 22,
    followers: 1050,
    following: 170,
    totalLikes: 6900,
    totalSaves: 3500,
    joinedAt: '2024-12-01',
    topCategories: ['content', 'marketing', 'career'],
    featured: false,
    verified: false,
  },
]
