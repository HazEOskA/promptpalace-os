export interface ContextMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  projectName?: string
  step?: string
  locked: boolean
}

export interface ContextState {
  projectName: string | null
  lastStep: string | null
  activeWorkspace: string | null
  detectedFramework: string | null
  executionMode: 'BUILD' | 'DEBUG' | 'DESIGN' | 'IDLE'
  blockers: string[]
  messages: ContextMessage[]
  sessionStart: Date
}

const INITIAL_MESSAGES: ContextMessage[] = [
  {
    id: 'msg-001',
    role: 'user',
    content: 'Build me a Solana token launcher with Jito MEV bundle support.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    projectName: 'WOLF Protocol',
    step: '0',
    locked: true,
  },
  {
    id: 'msg-002',
    role: 'assistant',
    content: '▶ STEP 0 — CONTEXT RECOVERY\n\nNo previous session found. Initializing new workspace.\n\nDetected: TypeScript + @solana/web3.js + Jito SDK\nExecutionMode: BUILD',
    timestamp: new Date(Date.now() - 1000 * 60 * 28),
    projectName: 'WOLF Protocol',
    step: '0',
    locked: true,
  },
  {
    id: 'msg-003',
    role: 'user',
    content: 'Start with the token mint initialization. Use BIP44 HD derivation for keypair.',
    timestamp: new Date(Date.now() - 1000 * 60 * 20),
    projectName: 'WOLF Protocol',
    step: '1',
    locked: true,
  },
  {
    id: 'msg-004',
    role: 'assistant',
    content: '▶ STEP 1 — EXECUTION CONTINUITY CHECK\n\nResuming: Token Mint Initialization\nGenerated HD keypair derivation path: m/44\'/501\'/0\'/0\'\n\n```typescript\nimport { Keypair } from "@solana/web3.js";\nimport { derivePath } from "ed25519-hd-key";\n...\n```\n\nStatus: ✓ Keypair generated\nNext: Metaplex metadata upload',
    timestamp: new Date(Date.now() - 1000 * 60 * 18),
    projectName: 'WOLF Protocol',
    step: '1',
    locked: true,
  },
  {
    id: 'msg-005',
    role: 'user',
    content: 'Now generate the Metaplex metadata JSON and upload to Irys.',
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    projectName: 'WOLF Protocol',
    step: '2',
    locked: true,
  },
]

export function createContextEngine() {
  let state: ContextState = {
    projectName: 'WOLF Protocol',
    lastStep: '2',
    activeWorkspace: 'CryptowolfOS',
    detectedFramework: 'TypeScript + Vite',
    executionMode: 'BUILD',
    blockers: [],
    messages: INITIAL_MESSAGES,
    sessionStart: new Date(Date.now() - 1000 * 60 * 35),
  }

  function getState(): ContextState {
    return { ...state }
  }

  function getLast5Messages(): ContextMessage[] {
    return state.messages.slice(-5).map(m => ({ ...m, locked: true }))
  }

  function addMessage(msg: Omit<ContextMessage, 'id' | 'locked'>): ContextMessage {
    const newMsg: ContextMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      locked: false,
    }
    state = {
      ...state,
      messages: [...state.messages, newMsg],
    }
    return newMsg
  }

  function detectWorkspace(content: string): string | null {
    const frameworks = [
      { pattern: /vite|react/i, name: 'React + Vite' },
      { pattern: /anchor|solana/i, name: 'Anchor / Solana' },
      { pattern: /next\.?js/i, name: 'Next.js' },
      { pattern: /node|express/i, name: 'Node.js / Express' },
      { pattern: /rust|cargo/i, name: 'Rust / Cargo' },
    ]
    for (const fw of frameworks) {
      if (fw.pattern.test(content)) return fw.name
    }
    return null
  }

  function runStep0(recentMessages: string[]): string {
    const combined = recentMessages.join('\n')
    const detected = detectWorkspace(combined)
    if (detected) {
      state = { ...state, detectedFramework: detected }
    }

    return `▶ STEP 0 — CONTEXT RECOVERY

Project: ${state.projectName ?? 'Unknown'}
Last Step: ${state.lastStep ?? 'N/A'}
Workspace: ${state.activeWorkspace ?? 'None'}
Framework: ${state.detectedFramework ?? 'Undetected'}
Mode: ${state.executionMode}
Blockers: ${state.blockers.length === 0 ? 'None' : state.blockers.join(', ')}

✓ Last 5 messages locked.
✓ Context recovered.`
  }

  function runStep05(): string {
    return `▶ STEP 0.5 — ACTIVE WORKSPACE DETECTION

Workspace: ${state.activeWorkspace}
Framework: ${state.detectedFramework}
Files: [estimated from context]
Build System: Vite / TypeScript
Mode: ${state.executionMode}

✓ Workspace detected. Ready to resume.`
  }

  function runStep1(): string {
    return `▶ STEP 1 — EXECUTION CONTINUITY CHECK

Last Step: ${state.lastStep}
Project: ${state.projectName}
Status: RESUMING

Checkpoint loaded. Continuing from last known state.`
  }

  return {
    getState,
    getLast5Messages,
    addMessage,
    runStep0,
    runStep05,
    runStep1,
  }
}

export type ContextEngine = ReturnType<typeof createContextEngine>
