export type WorkflowStepType =
  | 'context'
  | 'research'
  | 'generate'
  | 'review'
  | 'export'
  | 'deploy'
  | 'validate'

export type WorkflowStatus = 'idle' | 'running' | 'done' | 'error' | 'skipped'

export interface WorkflowStep {
  id: string
  label: string
  type: WorkflowStepType
  description: string
  promptId?: string
  status: WorkflowStatus
  output?: string
  duration?: number // seconds estimate
}

export interface Workflow {
  id: string
  name: string
  description: string
  category: string
  steps: WorkflowStep[]
  tags: string[]
  uses: number
  isPublic: boolean
}

export const WORKFLOW_TEMPLATES: Workflow[] = [
  {
    id: 'wf001',
    name: 'Solana Token Full Launch',
    description: 'End-to-end token deployment: keypair → metadata → SPL init → Raydium LP → social blast.',
    category: 'solana',
    tags: ['solana', 'token', 'launch', 'DeFi'],
    uses: 1234,
    isPublic: true,
    steps: [
      {
        id: 'wf001-s1',
        label: 'Context Recovery',
        type: 'context',
        description: 'Scan last session. Load wallet context and existing deployment state.',
        status: 'idle',
        duration: 5,
      },
      {
        id: 'wf001-s2',
        label: 'Token Architecture',
        type: 'generate',
        description: 'Generate SPL token parameters: supply, decimals, freeze authority, mint authority.',
        promptId: 'p001',
        status: 'idle',
        duration: 30,
      },
      {
        id: 'wf001-s3',
        label: 'Metadata Upload',
        type: 'generate',
        description: 'Upload token metadata JSON to Irys/Arweave. Generate Metaplex-compatible URI.',
        status: 'idle',
        duration: 60,
      },
      {
        id: 'wf001-s4',
        label: 'SPL Init Script',
        type: 'generate',
        description: 'Generate TypeScript deployment script with @solana/web3.js and ATA setup.',
        status: 'idle',
        duration: 45,
      },
      {
        id: 'wf001-s5',
        label: 'Jito MEV Bundle',
        type: 'generate',
        description: 'Build Jito bundle for atomic launch transaction to prevent snipers.',
        status: 'idle',
        duration: 30,
      },
      {
        id: 'wf001-s6',
        label: 'Validate Deployment',
        type: 'validate',
        description: 'Check on-chain state: mint account, ATA, metadata PDA.',
        status: 'idle',
        duration: 20,
      },
      {
        id: 'wf001-s7',
        label: 'Social Blast',
        type: 'generate',
        description: 'Generate launch posts for X and Farcaster with viral hooks.',
        status: 'idle',
        duration: 15,
      },
      {
        id: 'wf001-s8',
        label: 'Export Report',
        type: 'export',
        description: 'Export deployment report: addresses, tx hashes, social posts.',
        status: 'idle',
        duration: 5,
      },
    ],
  },
  {
    id: 'wf002',
    name: 'AI SaaS MVP Builder',
    description: 'From idea to deployable MVP: PRD → architecture → scaffold → Vercel deploy.',
    category: 'business',
    tags: ['saas', 'MVP', 'startup', 'product'],
    uses: 987,
    isPublic: true,
    steps: [
      {
        id: 'wf002-s1',
        label: 'Context Recovery',
        type: 'context',
        description: 'Load previous session context and active project state.',
        status: 'idle',
        duration: 5,
      },
      {
        id: 'wf002-s2',
        label: 'PRD Generation',
        type: 'generate',
        description: 'Generate Product Requirements Document with user stories and success metrics.',
        promptId: 'p008',
        status: 'idle',
        duration: 45,
      },
      {
        id: 'wf002-s3',
        label: 'Tech Architecture',
        type: 'generate',
        description: 'Design system architecture: stack, APIs, database schema, deployment.',
        status: 'idle',
        duration: 30,
      },
      {
        id: 'wf002-s4',
        label: 'Component Architecture',
        type: 'generate',
        description: 'Plan React component hierarchy with TypeScript interfaces.',
        promptId: 'p004',
        status: 'idle',
        duration: 30,
      },
      {
        id: 'wf002-s5',
        label: 'Code Scaffold',
        type: 'generate',
        description: 'Generate all boilerplate files, config, and directory structure.',
        status: 'idle',
        duration: 60,
      },
      {
        id: 'wf002-s6',
        label: 'Review Checklist',
        type: 'review',
        description: 'Verify: auth, routing, data layer, error handling, responsive design.',
        status: 'idle',
        duration: 15,
      },
      {
        id: 'wf002-s7',
        label: 'Deploy to Vercel',
        type: 'deploy',
        description: 'Generate vercel.json config and deployment checklist.',
        status: 'idle',
        duration: 10,
      },
    ],
  },
  {
    id: 'wf003',
    name: 'Competitor Intelligence Sprint',
    description: 'Full competitive analysis: research → positioning map → gap analysis → action plan.',
    category: 'research',
    tags: ['research', 'competitive', 'strategy', 'market'],
    uses: 654,
    isPublic: true,
    steps: [
      {
        id: 'wf003-s1',
        label: 'Context Recovery',
        type: 'context',
        description: 'Load target competitors and research scope from last session.',
        status: 'idle',
        duration: 5,
      },
      {
        id: 'wf003-s2',
        label: 'Primary Research',
        type: 'research',
        description: 'Analyze competitor websites, pricing pages, docs, and changelogs.',
        promptId: 'p010',
        status: 'idle',
        duration: 45,
      },
      {
        id: 'wf003-s3',
        label: 'Signal Analysis',
        type: 'generate',
        description: 'Analyze growth signals: funding, hiring, SEO velocity, community.',
        status: 'idle',
        duration: 30,
      },
      {
        id: 'wf003-s4',
        label: 'Positioning Matrix',
        type: 'generate',
        description: 'Generate 2x2 positioning map and differentiation opportunities.',
        status: 'idle',
        duration: 20,
      },
      {
        id: 'wf003-s5',
        label: 'Export Report',
        type: 'export',
        description: 'Export formatted intelligence report as Markdown/PDF.',
        status: 'idle',
        duration: 5,
      },
    ],
  },
]

export function createCustomWorkflow(name: string, description: string): Workflow {
  return {
    id: `wf-custom-${Date.now()}`,
    name,
    description,
    category: 'custom',
    tags: [],
    uses: 0,
    isPublic: false,
    steps: [
      {
        id: `step-${Date.now()}-1`,
        label: 'Context Recovery',
        type: 'context',
        description: 'Initialize context and recover from last session.',
        status: 'idle',
        duration: 5,
      },
    ],
  }
}
