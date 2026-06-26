# Agentic City OS — Module Map v0.1

**Status:** MVP planning  
**Date:** 2026-06-26

---

## Module Hierarchy

```
Agentic City OS
├── [DISTRICT] PromptPalace         /prompts, /trending, /categories, /prompt/:id
├── [DISTRICT] Loop Engine          /loop, /loop/:loopId
├── [SHELL]    Dashboard            /
├── [SHELL]    Sidebar Navigation   (layout wrapper)
└── [FUTURE]   Districts below — NOT in MVP
    ├── Stacks                      /stacks, /stack/:id
    ├── Assistant                   /assistant
    ├── Project Builder             /builder
    ├── Context Recovery            /context
    ├── Workflow Generator          /workflows
    ├── Submit / Community          /submit
    ├── Profile                     /profile/:username
    └── Saved                       /saved
```

---

## District: PromptPalace

**Type:** Discovery & Library  
**Status:** Done (MVP complete)  
**Slug:** `/prompts`

### What it does
Curated library of production-ready prompts. Users browse, filter, copy, and export prompts to use in any AI tool. Feeds the Loop Engine with prompt payloads.

### Routes
| Path | Component | Description |
|---|---|---|
| `/prompts` | PromptLibraryPage | All prompts, search, filter by category/difficulty |
| `/trending` | TrendingPromptsPage | Leaderboard sorted by trend score |
| `/categories` | CategoriesPage | Category grid |
| `/category/:id` | CategoryDetailPage | Prompts within one category |
| `/prompt/:id` | PromptDetailPage | Full prompt, copy, export, metadata |

### Data
- `src/data/prompt-library-*.ts` — 20 category files, 285+ prompts
- `src/data/index.ts` — ALL_PROMPTS barrel + search/filter helpers
- `src/data/categories.ts` — 20 Category objects

### Interfaces
```typescript
Prompt          // src/data/prompts.ts
PromptCategory  // 20 values: coding | writing | business | ...
PromptDifficulty // beginner | intermediate | advanced
Category        // src/data/categories.ts
```

---

## District: Loop Engine

**Type:** Execution & Workflow  
**Status:** Planned (MVP next)  
**Slug:** `/loop`

### What it does
Structured phase-by-phase execution environment. Users select a loop, fill in context variables, advance through phases, receive a real copyable output, and optionally export an n8n workflow draft.

### Routes
| Path | Component | Description |
|---|---|---|
| `/loop` | LoopEnginePage | Pick a loop, enter input, configure context |
| `/loop/:loopId` | LoopRunnerPage | Step-by-step phase runner |

### Phase sequence
```
[INPUT] → [PICK LOOP] → [SET CONTEXT] → [GENERATE] → [TRUTH AUDIT] → [REAL OUTPUT] → [NEXT ACTION]
```

### Data
- `src/data/loops.ts` — Loop type + 6–8 seed Loop objects  
- `src/workflows/workflowEngine.ts` — Existing async step runner (reused as-is)

### Interfaces
```typescript
// src/data/loops.ts (to be created)
export interface LoopPhase {
  id: string
  label: string
  type: 'input' | 'context' | 'generate' | 'audit' | 'output' | 'next'
  promptId?: string       // optional: pull from PromptPalace
  instruction: string     // what the user does in this phase
  outputLabel: string     // label for the result pane
}

export interface Loop {
  id: string
  title: string
  description: string
  category: PromptCategory
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  phases: LoopPhase[]
  estimatedTime: string   // "15–20 min"
  tags: string[]
  n8nDraftAvailable: boolean  // whether an export template exists
  featured: boolean
}
```

### What Loop Engine is NOT
- Not a live automation runner
- Not connected to any external API
- Not saving state server-side
- n8n export is a JSON draft template only — clearly labeled

---

## Shell: Dashboard

**Type:** OS entrypoint  
**Status:** Partially updated, pending Loop Engine pivot  
**Slug:** `/`

### Planned changes
- Hero headline: update to Loop Engine + OS framing
- Primary CTA: "Start a Loop" → `/loop`
- Secondary CTA: "Browse Library" → `/prompts`
- STEP_CARDS: replace with Loop Engine phase preview
- Stats: update to reflect Loop templates + total prompts

### What stays
- Mission Control Banner structure
- Quick category grid
- Trending prompts section
- Active Skills panel
- Quick Workflows panel

---

## Shell: Sidebar Navigation

**Current PRIMARY_NAV (8 items):**
```
Dashboard  /
Trending   /trending    [HOT]
Categories /categories
Stacks     /stacks      [10]
Workflows  /workflows
Assistant  /assistant   [AI]
Submit     /submit
Saved      /saved
```

**Planned PRIMARY_NAV after Loop Engine addition (9 items):**
```
Dashboard      /            [position 0]
Loop Engine    /loop        [NEW] ← add here
Trending       /trending    [HOT]
Categories     /categories
Stacks         /stacks      [10]
Workflows      /workflows
Assistant      /assistant   [AI]
Submit         /submit
Saved          /saved
```

**TOOLS_NAV (unchanged):**
```
Full Library    /prompts
Project Builder /builder
Context Recovery /context
```

---

## Future Districts (Post-MVP)

These are named and reserved but not built in v0.1:

| District | Slug | Purpose |
|---|---|---|
| Stacks | `/stacks` | Curated prompt bundles (exists, not yet OS-framed) |
| Assistant | `/assistant` | AI conversation interface |
| Submission Hub | `/submit` | Community prompt submissions |
| Profile | `/profile/:username` | User presence and saved history |
| Analytics | TBD | Loop performance, prompt trending engine |
| Integrations | TBD | Live n8n / Zapier / Make (post-auth) |
| Marketplace | TBD | Paid/premium loops and prompt packs |

---

## Dependency Map

```
Dashboard
  └── imports: ALL_PROMPTS, WORKFLOW_TEMPLATES, SKILLS, PROMPTS

LoopEnginePage (planned)
  └── imports: loops.ts (new), ALL_PROMPTS (optional cross-reference)

LoopRunnerPage (planned)
  └── imports: loops.ts (new), workflowEngine.ts (existing, reused)

PromptLibraryPage
  └── imports: ALL_PROMPTS, CATEGORIES

All prompt-library-*.ts
  └── feeds: ALL_PROMPTS via index.ts
  └── feeds: Loop Engine via promptId references in LoopPhase
```

No circular dependencies. All new imports are one-directional.
