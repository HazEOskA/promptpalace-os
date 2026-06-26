# Agentic City OS — Registry Schema v0.1

**Status:** Spec (not yet implemented)  
**Date:** 2026-06-26

The Registry is the unified index of all executable units in Agentic City OS. In MVP it exists as TypeScript seed files. In future versions it becomes a queryable database.

---

## Registry Item Types

Agentic City OS has four registerable item types:

| Type | Description | Current location |
|---|---|---|
| `Prompt` | A single AI prompt with metadata | `src/data/prompt-library-*.ts` |
| `Loop` | A multi-phase execution template | `src/data/loops.ts` (planned) |
| `Stack` | A curated collection of Prompts | `src/data/stacks.ts` |
| `Skill` | A capability module that can be activated | `src/data/skills.ts` |

---

## Schema: Prompt

```typescript
// Fully implemented. Source: src/data/prompts.ts

interface Prompt {
  // Required
  id: string                    // "lib-cod-001"
  title: string
  description: string
  content: string               // prompt body with [BRACKETED] variables
  category: PromptCategory      // 20 values
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  uses: number                  // illustrative seed value
  saves: number                 // illustrative seed value
  trending: boolean
  trendingScore: number         // 0–100
  author: string
  createdAt: string             // ISO date
  estimatedTokens: number
  model: string                 // "GPT-4o" | "Claude 3.5" | "Claude Opus"

  // Optional extended fields
  slug?: string
  useCase?: string
  authorUsername?: string
  likes?: number
  copies?: number
  views?: number
  trendScore?: number           // computed: likes*2 + saves*3 + copies + views*0.2
  featured?: boolean
  agentReady?: boolean
  builderTool?: boolean
  modelCompatibility?: string[]
  estimatedTime?: string
  outputType?: string
  updatedAt?: string
  whyTrending?: string
  bestFor?: string[]
}
```

**PromptCategory values (20):**
```
coding | writing | business | research | design | marketing | solana |
ai-agent | content | automation | productivity | sales | seo |
social-media | startups | career | analysis | learning | creative | ai-personas
```

---

## Schema: Loop

```typescript
// Planned. To be created at: src/data/loops.ts

type LoopPhaseType =
  | 'input'     // user enters goal/problem
  | 'context'   // user fills in variables
  | 'generate'  // prompt is applied, output is generated
  | 'audit'     // truth/quality check step
  | 'output'    // final deliverable presented
  | 'next'      // suggested follow-up loop or action

interface LoopPhase {
  id: string                // "phase-01"
  label: string             // "Set Your Goal"
  type: LoopPhaseType
  instruction: string       // what the user does or reads in this phase
  outputLabel: string       // label for the result pane: "Your Context Summary"
  promptId?: string         // optional: references a Prompt from PromptPalace by id
  placeholder?: string      // input placeholder text for 'input' and 'context' phases
  auditChecklist?: string[] // for 'audit' phases: list of things to verify
}

interface Loop {
  id: string                // "loop-saas-gtm-001"
  title: string             // "SaaS GTM Sprint"
  description: string       // one-liner
  category: PromptCategory  // primary category alignment
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string     // "20–30 min"
  tags: string[]
  phases: LoopPhase[]       // ordered, min 3, max 8
  featured: boolean
  n8nDraftAvailable: boolean // true if an export template exists in /exports/n8n/
  relatedLoopIds?: string[] // for "Next Action" suggestions
  outputFormat: string      // "Markdown doc" | "JSON" | "Bullet list" | "Code block"
  createdAt: string
}
```

**ID convention:** `loop-[category-slug]-[nnn]`  
Examples: `loop-saas-gtm-001`, `loop-content-repurpose-001`, `loop-code-review-001`

---

## Schema: Stack

```typescript
// Implemented. Source: src/data/stacks.ts

interface PromptStack {
  id: string                // "stack-001"
  title: string
  description: string
  category: PromptCategory
  color: string             // tailwind color name
  promptIds: string[]       // ordered list of Prompt IDs
  authorUsername: string
  uses: number
  saves: number
  featured: boolean
  createdAt: string
  tags: string[]
}
```

---

## Schema: Skill

```typescript
// Implemented. Source: src/data/skills.ts

interface Skill {
  id: string
  name: string
  description: string
  icon: string
  active: boolean
  powerLevel: number        // 1–5
  capabilities: string[]
  category: string
}
```

---

## Registry Resolution Rules

When the Loop Engine references a `promptId` in a `LoopPhase`:

```
1. Look up Prompt by id in ALL_PROMPTS (from src/data/index.ts)
2. If found: inject prompt.content into the phase output panel
3. If not found: render instruction text only — no error thrown
4. promptId is always optional — phases work without it
```

This ensures Loop Engine does not hard-depend on PromptPalace library state. Loops are self-contained; prompt cross-references are enhancement only.

---

## n8n Export Schema

For loops where `n8nDraftAvailable: true`, an export template is available. This is a **static JSON draft**, not a live integration.

```json
{
  "meta": {
    "loop_id": "loop-saas-gtm-001",
    "loop_title": "SaaS GTM Sprint",
    "export_type": "n8n_draft_template",
    "warning": "DRAFT ONLY — This is a workflow template. It is not connected to any live n8n instance.",
    "generated_at": "ISO_DATE"
  },
  "n8n_workflow": {
    "name": "{{loop_title}} — Agentic City OS Export",
    "nodes": [
      {
        "type": "n8n-nodes-base.set",
        "name": "Phase: {{phase_label}}",
        "parameters": {
          "instruction": "{{phase_instruction}}",
          "prompt_content": "{{prompt_content_or_empty}}"
        }
      }
    ],
    "connections": {}
  }
}
```

**Labeling requirement:** Any UI that exposes n8n export must display:
> "Export Draft — This is a template for manual import into n8n. It is not a live automation."

---

## Registry Constraints (MVP)

| Constraint | Value |
|---|---|
| Max prompts per category | 15 (current) |
| Max phases per Loop | 8 |
| Min phases per Loop | 3 |
| Max loops in seed data | 8 |
| Max stacks in seed data | 10 (current) |
| Backend | None — TypeScript files only |
| Persistence | localStorage with `pp_` key prefix |
| Search | Client-side filter on title/description/tags |

---

## ID Conventions

| Type | Pattern | Example |
|---|---|---|
| Prompt (library) | `lib-[cat3]-[nnn]` | `lib-cod-001` |
| Prompt (core) | `p[nnn]` | `p001` |
| Loop | `loop-[slug]-[nnn]` | `loop-gtm-001` |
| Stack | `stack-[nnn]` | `stack-001` |
| Skill | `skill-[slug]` | `skill-codewriter` |
| Category | plain slug | `coding`, `ai-personas` |

---

## What the Registry Does NOT Include (MVP)

- User-generated content
- Version history per item
- Access control or tier gates
- Analytics events
- Real-time trend computation (scores are seed values)
- Cross-user saved/liked state (localStorage is per-browser only)
