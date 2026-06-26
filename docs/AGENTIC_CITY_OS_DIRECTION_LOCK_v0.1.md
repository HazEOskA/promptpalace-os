# Agentic City OS — Direction Lock v0.1

**Status:** LOCKED FOR MVP SCOPE  
**Date:** 2026-06-26  
**Previous codename:** CTOS (discarded as public name, retained only as internal reference)

---

## 1. Product Name & Positioning

**Public name:** Agentic City OS  
**Slug:** `agentic-city-os`  
**Tagline:** The operating system for people who run on AI.

Agentic City OS is a modular AI execution environment. Each module is a "district" — a self-contained tool for a specific AI workflow domain. Users move between districts, compose workflows across them, and output real deliverables rather than just prompts.

This is NOT a prompt marketplace. It is NOT a chatbot wrapper. It is a structured environment for running repeatable, auditable AI workflows at the operator level.

---

## 2. Core Product Principles

1. **Real output over interface theater.** Every interaction must produce a tangible deliverable: copy, code, plan, JSON, audit result.
2. **Structured loops, not one-shot prompts.** Every task runs through an explicit phase sequence: Input → Context → Generate → Audit → Output → Next.
3. **Honest automation.** No fake "running AI" spinners. No fake API calls. No claims of live integrations unless they exist.
4. **Modular districts.** Features are isolated, independently navigable, and composable.
5. **No scope creep in MVP.** Build the Loop Engine and PromptPalace district first. Everything else is post-MVP.

---

## 3. What PromptPalace Becomes

**District name:** PromptPalace  
**District slug:** `/prompts`  
**Role inside Agentic City OS:** The discovery and library district.

PromptPalace is the curated knowledge layer of the OS — a structured library of production prompts organized by category, difficulty, and use case. It feeds the Loop Engine with pre-vetted prompt payloads.

PromptPalace does NOT execute. It discovers, curates, and supplies.

**What stays:**
- All 20+ prompt library files (285+ prompts)
- Trending leaderboard
- Category browser
- Prompt detail pages
- Saved / copy / export

**What changes:**
- Reframed as one district among several, not the whole product
- Hero copy updated to reflect OS context
- Prompt cards gain a "Use in Loop →" CTA linking to Loop Engine

---

## 4. What Loop Engine Becomes

**District name:** Loop Engine  
**District slug:** `/loop`  
**Role inside Agentic City OS:** The execution and workflow district.

The Loop Engine is where work actually happens. Users pick a loop template, fill in context variables, run each phase, pass through a truth audit, and receive a real output. Loops can optionally be exported as n8n workflow JSON drafts (clearly marked as export templates, not live integrations).

**Loop phase sequence:**
```
Input → Pick Loop → Set Context → Generate → Truth Audit → Real Output → Next Action
```

**What it is in MVP:**
- Client-side, TypeScript seed data only
- Step-by-step UI with explicit phase state
- Copy-to-clipboard output at each phase
- n8n JSON export labeled "DRAFT TEMPLATE — not a live integration"
- No real API calls

**What it is NOT in MVP:**
- Not connected to any LLM API
- Not saving loop state to a backend
- Not triggering real automation

---

## 5. MVP Scope

### In scope (v0.1 MVP)

| Feature | District | Status |
|---|---|---|
| PromptPalace library | PromptPalace | Done |
| Trending leaderboard | PromptPalace | Done |
| Category browse + detail | PromptPalace | Done |
| Prompt detail + copy | PromptPalace | Done |
| Loop Engine page (pick + configure) | Loop Engine | Planned |
| Loop Runner page (step-by-step) | Loop Engine | Planned |
| Loop seed data (6–8 templates) | Loop Engine | Planned |
| Dashboard pivot to OS framing | Dashboard | Planned |
| Sidebar Loop Engine nav entry | Nav | Planned |

### Not in scope for v0.1

- User authentication or accounts
- Backend persistence (database, API)
- Real LLM API calls
- Community prompt submission review queue
- Paid tiers or token gates
- Mobile native app
- Analytics pipeline
- Live n8n / Zapier / Make integrations
- Additional districts beyond PromptPalace + Loop Engine

---

## 6. Safety & Validation Layer

All content generated or displayed in Agentic City OS must follow:

1. **No fake claims.** Automation described as "candidate" or "draft template" only.
2. **No live integration claims.** n8n, Zapier, Make integrations are UI exports only until a real integration exists.
3. **No simulated AI output.** Placeholder outputs are clearly labeled `[EXAMPLE OUTPUT]` or `[FILL IN YOUR RESULT]`.
4. **No invented stats.** Trend scores, usage counts, and saves are seed data clearly generated as illustrative values.
5. **Build must pass before any commit.** `npm run build` (tsc + vite) required to pass with zero TypeScript errors.
6. **No package.json changes without explicit approval.** Zero new runtime dependencies in MVP.

---

## 7. Rollback / Revert Boundary

All MVP work is additive:
- New files can be deleted
- Nav item is a single array entry
- Route additions are 2 lines in App.tsx
- Hero copy is 3 strings in Dashboard.tsx

Single `git revert HEAD` restores any single-commit change. No migrations, no schema changes, no destructive operations.

---

## 8. Internal Codename Note

`CTOS` (City Temporal OS / Creative Thinking OS) was an early internal codename. It is retired as a public name. It may appear in internal notes or early commits. It does not appear in any UI, URL, or public documentation.
