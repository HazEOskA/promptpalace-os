# PromptPalace OS

> **AI execution workspace where prompts become workflows, workflows become project builders, and every action has context recovery and execution continuity.**

![Version](https://img.shields.io/badge/version-0.1.0--beta-violet)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20Vite%20%2B%20TypeScript%20%2B%20Tailwind-blue)
![Deploy](https://img.shields.io/badge/deploy-Vercel%20ready-black)

---

## What is PromptPalace OS?

PromptPalace OS is not a prompt marketplace. It is an **AI execution workspace** with:

- A curated **Prompt Library** (10 production prompts, Solana/Web3 focus)
- **Trending Prompts** ranked by live usage score
- An **AI Project Builder Bot** with full Step 0 → Step 2 execution protocol
- A **Workflow Generator** that assembles multi-step AI pipelines
- A **Context Recovery Panel** (Step 0 — Last 5 Message Lock)
- **Skill/Agent Selector** (8 specialized AI skills)
- **Export** prompts and workflows to Markdown

---

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/promptpalace-os.git
cd promptpalace-os
npm install
npm run dev
```

Open: `http://localhost:5173`

### Build for production

```bash
npm run build
npm run preview
```

---

## Architecture

```
promptpalace-os/
├── src/
│   ├── app/
│   │   └── App.tsx               # Route definitions
│   ├── components/
│   │   └── layout/
│   │       ├── Layout.tsx        # Root layout wrapper
│   │       ├── Sidebar.tsx       # Navigation sidebar
│   │       └── Header.tsx        # Top bar with step indicator
│   ├── data/
│   │   ├── prompts.ts            # 10 production prompts (static)
│   │   ├── workflows.ts          # 3 workflow templates
│   │   └── skills.ts             # 8 AI skill definitions
│   ├── lib/
│   │   ├── utils.ts              # Pure utility functions
│   │   └── export.ts             # Markdown export + download
│   ├── runtime/
│   │   ├── contextEngine.ts      # Step 0 context recovery logic
│   │   └── executionEngine.ts    # Execution checklist engine
│   ├── skills/
│   │   └── skillRegistry.ts      # Skill activation & routing
│   ├── workflows/
│   │   └── workflowEngine.ts     # Async workflow runner
│   └── pages/
│       ├── Dashboard.tsx         # Overview & stats
│       ├── PromptLibraryPage.tsx # Browse/search/copy prompts
│       ├── TrendingPromptsPage.tsx # Ranked leaderboard
│       ├── ProjectBuilderPage.tsx  # AI bot chat interface
│       ├── WorkflowGeneratorPage.tsx # Visual workflow runner
│       └── ContextRecoveryPage.tsx   # Step 0 panel
├── public/
│   └── icon.svg
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## AI OS Execution Protocol

PromptPalace OS implements a 4-step AI execution protocol:

| Step | Name | Purpose |
|------|------|---------|
| **STEP 0** | Context Recovery | Scan last 5 messages. Identify project, last step, blockers, mode. |
| **STEP 0.5** | Workspace Detection | Detect framework, open files, build system. |
| **STEP 1** | Execution Continuity | Resume from last checkpoint or init new scaffold. |
| **STEP 2** | Build / Answer / Execute | Execute current task with skill routing. |

---

## Pages

### Dashboard `/`
- Session stats grid (prompts, workflows, skills, sessions)
- AI OS step status cards (Step 0 → Step 2)
- Trending prompts preview
- Active skills panel
- Quick workflow links

### Prompt Library `/prompts`
- Search by title, description, tags
- Filter by 8 categories
- Expand to view full prompt content
- Copy to clipboard
- Export as Markdown

### Trending Prompts `/trending`
- Full leaderboard sorted by trending score (0–100)
- Top 3 podium with visual highlight
- Score bar visualization
- Save / Copy / Export actions

### Project Builder `/builder`
- Terminal-style chat interface
- Quick action buttons (Run Step 0, 0.5, 1, Continue Build)
- Skill selector (toggle 8 skills on/off)
- Execution checklist with progress bar
- Simulated AI OS responses with code output

### Workflow Generator `/workflows`
- 3 built-in templates (Solana Token Launch, SaaS MVP Builder, Competitor Intel)
- Visual step-by-step runner with animated state transitions
- Create custom workflows via modal
- Export workflow as Markdown

### Context Recovery `/context`
- Run Step 0, 0.5, 1 individually or all at once
- Last 5 Messages Lock display (with lock icons)
- Execution checklist
- Session state summary (project, mode, framework, blockers)
- Export context snapshot

---

## Design System

**Aesthetic:** Neural Terminal — deep black + violet + cyan  
**Fonts:** Outfit (display) · DM Sans (body) · JetBrains Mono (code/data)

| Token | Value |
|-------|-------|
| `bg-base` | `#050508` |
| `bg-surface` | `#0d0d16` |
| `bg-elevated` | `#13131f` |
| `violet-500` | `#8b5cf6` |
| `cyan-500` | `#06b6d4` |

---

## Deployment

### Vercel (recommended)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: GitHub integration
# Push to GitHub → import repo at vercel.com
# Build Command: npm run build
# Output Directory: dist
```

`vercel.json` is pre-configured with SPA rewrites, security headers, and asset caching.

---

## GitHub Setup

```bash
git init
git add .
git commit -m "feat: PromptPalace OS v0.1 MVP"
git remote add origin https://github.com/HazEOskA/promptpalace-os.git
git push -u origin main
```

---

## Roadmap (v0.2)

- [ ] Persistent storage (localStorage / Supabase)
- [ ] Real Claude API integration in Project Builder
- [ ] User authentication (Privy / Web3 wallet)
- [ ] Community prompt submissions
- [ ] Workflow sharing via URL
- [ ] Solana wallet connect for token-gated prompts
- [ ] Mobile PWA with offline support

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Build | Vite 5 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 6 |
| Icons | Lucide React |
| Deploy | Vercel |

---

*Built by HazEOskA · PromptPalace OS · 2024*
