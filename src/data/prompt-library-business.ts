import type { Prompt } from './prompts'

export const BUSINESS_PROMPTS: Prompt[] = [
  {
    id: 'lib-biz-001',
    title: 'OKR Framework Builder for Startup Teams',
    slug: 'okr-framework-builder-startup-teams',
    description: 'Builds a quarterly OKR framework with measurable key results, cascaded team objectives, and check-in cadence.',
    content: `You are a strategic planning consultant who has implemented OKRs at 20+ startups. Design a complete OKR framework for the following organization.

## Organization Context
- Company name: [COMPANY_NAME]
- Stage: [SEED / SERIES_A / SERIES_B / GROWTH]
- Team size: [SIZE]
- Quarter: [Q1/Q2/Q3/Q4 YEAR]
- Company mission: [MISSION_STATEMENT]
- Top challenge this quarter: [MAIN_CHALLENGE]

## OKR Framework Design

### Company-Level OKRs (3 max)

For each Objective:
**Objective [N]**: [ASPIRATIONAL_OUTCOME_STATEMENT]
*(Qualitative, inspiring, time-bound, achievable)*

Key Results (3-5 per objective):
- KR1: [Metric] from [current] to [target] by [date]
- KR2: ...
*(Quantitative, measurable, binary or continuous)*

### Team-Level OKR Cascade
For each department (Engineering / Marketing / Sales / Product / Customer Success):
- Which company OKR does this team primarily serve?
- 1-2 team-level objectives supporting company OKRs
- 3-4 key results per team objective

### OKR Quality Checklist
Review each KR against:
- [ ] Is it measurable? (Has a number)
- [ ] Is it ambitious but achievable? (70% success = good)
- [ ] Is it an outcome, not an output? ("Revenue" not "Launch feature")
- [ ] Is there a clear owner?
- [ ] Can we track it weekly?

### Check-In Cadence Design
- Weekly: 5-minute status update format (traffic light + blocker)
- Monthly: Progress review template
- End-of-quarter: Scoring and retrospective format

### Common OKR Anti-Patterns to Avoid
List 5 specific anti-patterns relevant to this stage and how to detect them early.`,
    category: 'business',
    tags: ['okrs', 'strategy', 'planning', 'goals', 'operations'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of each quarter to set and align objectives across the organization.',
    authorUsername: 'osa',
    likes: 312,
    saves: 201,
    copies: 734,
    views: 3800,
    trendScore: 312*2 + 201*3 + 734 + 3800*0.2,
    trendingScore: 312*2 + 201*3 + 734 + 3800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Poorly written OKRs waste entire quarters. This generates a cascaded OKR system from company to team level with anti-pattern warnings.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 734,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-01',
  },
  {
    id: 'lib-biz-002',
    title: 'Business Model Canvas Designer',
    slug: 'business-model-canvas-designer',
    description: 'Completes all 9 Business Model Canvas blocks with insights, risks, and revenue validation questions.',
    content: `You are a business model strategist trained in the Business Model Canvas methodology. Complete a thorough Business Model Canvas analysis for the following business idea or company.

## Business Context
- Business idea: [DESCRIBE_THE_BUSINESS]
- Stage: [IDEA / MVP / PRODUCT_MARKET_FIT / SCALE]
- Industry: [INDUSTRY]
- Target geography: [GEOGRAPHY]

## Business Model Canvas — All 9 Blocks

### 1. Customer Segments
- Primary segment (who are the most important customers?)
- Secondary segments
- Customer archetypes (describe 2-3 real personas)
- Segment size estimate

### 2. Value Propositions
- What problem are you solving?
- What job are customers hiring you to do?
- What pain relievers do you offer?
- What gain creators do you offer?
- Rank value props by customer importance

### 3. Channels
- Awareness channels (how customers find you)
- Purchase channels (where they buy)
- Delivery channels (how product reaches them)
- Post-sale support channels

### 4. Customer Relationships
- Type of relationship (self-service / dedicated / community)
- Acquisition vs. retention mechanisms
- Lock-in strategy

### 5. Revenue Streams
- Primary revenue model
- Secondary revenue opportunities
- Pricing model rationale
- Revenue mix at scale (%)

### 6. Key Resources
- Physical / intellectual / human / financial resources
- Which are hardest to replicate?

### 7. Key Activities
- Production / problem-solving / platform activities
- What you must be world-class at

### 8. Key Partnerships
- Strategic partners and their role
- Supplier dependencies
- Which partnerships are existence-critical?

### 9. Cost Structure
- Fixed vs. variable costs
- Largest cost drivers
- Break-even analysis (rough)

## Assessment
- Riskiest assumption in the model
- Top 3 business model risks
- 3 adjacent business models worth considering`,
    category: 'business',
    tags: ['business-model', 'strategy', 'canvas', 'planning', 'startup'],
    difficulty: 'beginner',
    useCase: 'Use when evaluating a new business idea or stress-testing an existing business model.',
    authorUsername: 'osa',
    likes: 267,
    saves: 178,
    copies: 623,
    views: 3200,
    trendScore: 267*2 + 178*3 + 623 + 3200*0.2,
    trendingScore: 267*2 + 178*3 + 623 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Business Model Canvas is the standard strategic tool. This prompt fills all 9 blocks with genuine insight rather than generic placeholders.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 623,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-28',
  },
  {
    id: 'lib-biz-003',
    title: 'Financial Model and Unit Economics Builder',
    slug: 'financial-model-unit-economics-builder',
    description: 'Builds a SaaS or product financial model with unit economics, CAC/LTV analysis, and break-even projections.',
    content: `You are a startup CFO and financial modeling expert. Build a comprehensive unit economics and financial model for the following business.

## Business Details
- Business type: [SAAS / MARKETPLACE / ECOMMERCE / SERVICE]
- Revenue model: [SUBSCRIPTION / TRANSACTIONAL / USAGE / HYBRID]
- Current MRR/Revenue: [AMOUNT]
- Monthly new customers: [COUNT]
- Churn rate: [%]
- Average contract value: [ACV]
- Key costs: [LIST_MAIN_COSTS]

## Financial Analysis

### 1. Unit Economics
Calculate and interpret:
- **CAC** (Customer Acquisition Cost)
  - Blended CAC formula
  - CAC by channel (paid / organic / referral)
  - Payback period
- **LTV** (Customer Lifetime Value)
  - Simple LTV = ARPU × (1/Churn rate)
  - Gross margin-adjusted LTV
- **LTV:CAC Ratio** (target: >3x)
- **Magic Number** (sales efficiency metric)

### 2. SaaS Metrics Dashboard
- MRR breakdown (new + expansion - contraction - churned)
- NDR (Net Dollar Retention) — target: >100%
- Gross margin calculation
- Rule of 40 score (growth rate + profit margin)

### 3. 18-Month Projection Model
Build a monthly model with:
- Revenue growth assumptions (conservative / base / optimistic)
- Headcount plan and cost
- Key inflection points (when does the business turn cash-flow positive?)
- Burn rate and runway

### 4. Scenario Analysis
| Metric | Bear (-30%) | Base | Bull (+30%) |
|--------|-------------|------|-------------|
| MRR at Month 18 | | | |
| Customers | | | |
| Burn | | | |

### 5. Investor Narrative
Translate the model into 5 bullet points a VC would care about.

### 6. Key Assumptions to Monitor
Which 3 assumptions, if wrong, would break the model?`,
    category: 'business',
    tags: ['finance', 'unit-economics', 'saas', 'ltv', 'modeling'],
    difficulty: 'advanced',
    useCase: 'Use when fundraising, planning headcount, or stress-testing the business model with different growth scenarios.',
    authorUsername: 'osa',
    likes: 298,
    saves: 212,
    copies: 678,
    views: 3500,
    trendScore: 298*2 + 212*3 + 678 + 3500*0.2,
    trendingScore: 298*2 + 212*3 + 678 + 3500*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Analysis',
    whyTrending: 'Unit economics separate fundable startups from unfundable ones. This builds the complete financial picture VCs want to see.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 678,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-24',
  },
  {
    id: 'lib-biz-004',
    title: 'Decision Framework for Hard Business Choices',
    slug: 'decision-framework-hard-business-choices',
    description: 'Applies structured decision frameworks to complex business decisions with tradeoff analysis and risk scoring.',
    content: `You are a strategic advisor and decision architect. Help analyze and structure the following difficult business decision.

## Decision Context
- Decision to make: [DESCRIBE_THE_DECISION]
- Decision maker(s): [WHO_IS_DECIDING]
- Timeline: [WHEN_MUST_THIS_BE_DECIDED]
- Stakes: [WHAT_HAPPENS_IF_WRONG]
- Options on the table: [LIST_ALL_OPTIONS_INCLUDING_DO_NOTHING]

## Structured Decision Analysis

### 1. Clarify the Real Decision
Often the stated decision is not the actual decision. Reframe:
- What would you need to believe to choose each option?
- What is the reversibility of each option (easy to undo vs. one-way door)?
- Are you deciding "what" or "when"?

### 2. Options Analysis
For each option:
- **Expected upside** (best case, probability-weighted)
- **Downside scenario** (what goes wrong, probability-weighted)
- **Resource requirements** (money, time, team, focus)
- **Opportunity cost** (what can't you do if you pick this?)
- **Regret test**: Will you regret NOT doing this in 5 years?

### 3. Decision Matrix
Build a weighted criteria matrix:
| Criteria | Weight | Option A | Option B | Option C |
|----------|--------|----------|----------|----------|
| Revenue impact | 30% | | | |
| Speed | 20% | | | |
| Risk | 25% | | | |
| Team morale | 15% | | | |
| Strategic fit | 10% | | | |
| **Weighted Score** | | | | |

### 4. Pre-Mortem
For the leading option: imagine it's 12 months later and it failed. What went wrong? Now, how do you prevent those failure modes?

### 5. Recommendation
Clear recommendation with: primary rationale, key assumptions, first 3 action steps if you choose it, tripwires to monitor.`,
    category: 'business',
    tags: ['decision-making', 'strategy', 'frameworks', 'leadership', 'planning'],
    difficulty: 'intermediate',
    useCase: 'Use when facing a consequential business decision with multiple viable options and competing priorities.',
    authorUsername: 'osa',
    likes: 234,
    saves: 167,
    copies: 534,
    views: 2800,
    trendScore: 234*2 + 167*3 + 534 + 2800*0.2,
    trendingScore: 234*2 + 167*3 + 534 + 2800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Analysis',
    whyTrending: 'Founders make too many decisions by gut feel. This framework externalizes the decision process and surfaces hidden assumptions.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 534,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-20',
  },
  {
    id: 'lib-biz-005',
    title: 'Investor Update Email Writer',
    slug: 'investor-update-email-writer',
    description: 'Writes a compelling monthly investor update with metrics, narrative, asks, and relationship-building elements.',
    content: `You are a startup founder communication coach. Write a monthly investor update email for the following company.

## Update Context
- Company: [COMPANY_NAME]
- Stage: [SEED / SERIES_A / etc.]
- Month: [MONTH_YEAR]
- Metrics this month: [PASTE_KEY_METRICS]
- Biggest win: [WIN]
- Biggest challenge: [CHALLENGE]
- What you need from investors: [SPECIFIC_ASKS]

## Investor Update Structure

### Subject Line
Format: "[Company] [Month] Update — [One compelling metric or milestone]"
Provide 3 subject line variants.

### Email Structure

**Opening Hook (2-3 sentences)**
Lead with the most compelling number or story from the month. Don't bury the lede.

**Key Metrics Dashboard**
| Metric | This Month | Last Month | MoM Change |
|--------|-----------|------------|------------|
| [MRR/Revenue] | | | |
| [Users/Customers] | | | |
| [Key Product Metric] | | | |
| [Burn/Runway] | | | |

**Wins (3-5 bullet points)**
Specific, quantified wins. "Signed [COMPANY] for $[X]" not "Great sales progress."

**Challenges (1-2 paragraphs)**
Honest description of what's hard. Investors respect candor. Include: what you've tried, what you're doing next.

**Team Update**
New hires, departures, role changes.

**The Ask (Specific)**
- Looking for intros to: [SPECIFIC_ROLES/COMPANIES]
- Need advice on: [SPECIFIC_QUESTION]
- Seeking: [WARM_INTRO_TO_INVESTOR/CUSTOMER]

**Closing**
Short, warm. Invite replies.

## Tone Guidelines
- Be specific (numbers, names, dates)
- Show self-awareness (challenges + how you're handling them)
- Never spin bad news — explain and show learning
- Keep it under 400 words total`,
    category: 'business',
    tags: ['investor-relations', 'fundraising', 'startup', 'communication', 'reporting'],
    difficulty: 'beginner',
    useCase: 'Use monthly to keep investors engaged, build trust, and generate warm referrals.',
    authorUsername: 'osa',
    likes: 223,
    saves: 156,
    copies: 512,
    views: 2700,
    trendScore: 223*2 + 156*3 + 512 + 2700*0.2,
    trendingScore: 223*2 + 156*3 + 512 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Template',
    whyTrending: 'Founders who send consistent, honest updates raise their next rounds faster. This template removes the blank-page problem.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 512,
    estimatedTokens: 700,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-18',
  },
  {
    id: 'lib-biz-006',
    title: 'SOP Documentation Builder for Teams',
    slug: 'sop-documentation-builder-teams',
    description: 'Creates detailed standard operating procedures with step-by-step instructions, decision trees, and exception handling.',
    content: `You are a business operations consultant specializing in process documentation. Write a complete Standard Operating Procedure (SOP) for the following process.

## Process Context
- Process name: [PROCESS_NAME]
- Department: [DEPARTMENT]
- Process owner: [ROLE_TITLE]
- Trigger (what starts this process): [TRIGGER]
- End state (what done looks like): [COMPLETION_CRITERIA]
- Frequency: [DAILY / WEEKLY / AD-HOC]
- Tools involved: [LIST_TOOLS]

## SOP Document Structure

### Header
- SOP Title, ID, Version, Date, Owner, Reviewers, Next review date

### Purpose and Scope
- Why this process exists
- What it covers and what it explicitly does NOT cover
- Who this applies to (roles)

### Prerequisites
- Required access/permissions
- Required knowledge or training
- Required tools and accounts

### Step-by-Step Instructions
For each step:
**Step [N]: [ACTION_TITLE]**
- Who does it: [ROLE]
- How long it takes: [TIME]
- Detailed instructions (specific enough that a new hire can follow without asking questions)
- Screenshot/screen recording suggestion where visual would help
- Common mistakes at this step

### Decision Trees
For any step with conditional logic:
If [condition A] → do [X]
If [condition B] → do [Y]
If neither → escalate to [PERSON/ROLE]

### Exception Handling
List the 5 most common things that go wrong and what to do.

### Quality Checks
What to verify before considering the process complete.

### Escalation Path
Who to contact and when (not just "contact your manager").

### Change Log
Template for tracking future revisions.`,
    category: 'business',
    tags: ['operations', 'sop', 'documentation', 'processes', 'scaling'],
    difficulty: 'beginner',
    useCase: 'Use when documenting a repeatable process for the first time or when a process is causing errors due to inconsistent execution.',
    authorUsername: 'osa',
    likes: 156,
    saves: 112,
    copies: 378,
    views: 1900,
    trendScore: 156*2 + 112*3 + 378 + 1900*0.2,
    trendingScore: 156*2 + 112*3 + 378 + 1900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Template',
    whyTrending: 'SOPs are the infrastructure of a scalable business. This creates the full document — not just a template with gaps to fill.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 378,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-15',
  },
  {
    id: 'lib-biz-007',
    title: 'Board Meeting Deck Narrative Builder',
    slug: 'board-meeting-deck-narrative-builder',
    description: 'Structures a board meeting presentation with slide-by-slide narrative, talking points, and anticipated questions.',
    content: `You are a board communication advisor who has helped CEOs at Series A through pre-IPO companies. Structure a board meeting presentation for the following company.

## Meeting Context
- Company: [COMPANY_NAME]
- Board composition: [INVESTOR_LED / MIXED / INDEPENDENT_HEAVY]
- Stage: [STAGE]
- Meeting date: [DATE]
- Key topics to cover: [LIST]
- Decisions needed from board: [DECISIONS]

## Board Deck Structure (slide-by-slide)

**Slide 1: Executive Summary**
- State of the company in 3 bullets
- One headline metric
- Key decision to make today

**Slide 2-3: Metrics Dashboard**
- KPI performance vs. targets (traffic light format)
- Narrative explaining any misses
- Forward guidance for next quarter

**Slide 4-5: Key Wins**
- 3-5 wins with evidence
- Customer logos if shareable
- Product milestones shipped

**Slide 6-7: Key Challenges**
- Honest assessment (boards hate spin)
- Root cause analysis
- Mitigation plan with timeline

**Slide 8-9: [STRATEGIC_TOPIC]**
- Deep dive on one strategic topic per meeting
- Options analysis
- Recommendation

**Slide 10: Team**
- Headcount changes
- Key open roles
- Culture/morale temperature

**Slide 11: Finance**
- P&L summary
- Burn and runway
- Forecast vs. actuals

**Slide 12: Asks**
- Specific intros needed
- Advice topics
- Vote items (if any)

## Talking Points
For each slide: opening line + 3 key points + anticipated board question + your answer.

## Pre-Meeting Prep
- What to send 48h before
- What to pre-read vs. present live
- How to handle a surprise question`,
    category: 'business',
    tags: ['board', 'fundraising', 'governance', 'leadership', 'presentation'],
    difficulty: 'advanced',
    useCase: 'Use 1 week before a board meeting to structure the narrative and prepare talking points.',
    authorUsername: 'osa',
    likes: 189,
    saves: 134,
    copies: 445,
    views: 2300,
    trendScore: 189*2 + 134*3 + 445 + 2300*0.2,
    trendingScore: 189*2 + 134*3 + 445 + 2300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Template',
    whyTrending: 'Board meetings set the tone for investor relationships. This structures the narrative to build confidence while maintaining candor.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 445,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-12',
  },
  {
    id: 'lib-biz-008',
    title: 'Partnership Deal Structure Advisor',
    slug: 'partnership-deal-structure-advisor',
    description: 'Designs the terms, roles, and governance for a strategic business partnership or co-founder agreement.',
    content: `You are a business development attorney and deal strategist. Structure a partnership agreement for the following situation.

## Partnership Context
- Party A: [COMPANY_OR_PERSON_A]
- Party B: [COMPANY_OR_PERSON_B]
- Type of partnership: [CO-FOUNDER / STRATEGIC_PARTNER / REVENUE_SHARE / JV]
- What each brings: [PARTY_A_BRINGS] + [PARTY_B_BRINGS]
- Goal of the partnership: [JOINT_OUTCOME]
- Duration: [TIMEFRAME]

## Partnership Structure

### 1. Scope Definition
- What is explicitly IN scope (together)
- What is explicitly OUT of scope (each party keeps)
- How the partnership is positioned publicly

### 2. Roles and Responsibilities
RACI matrix for all key activities:
| Activity | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|---------|

### 3. Revenue and Economics
- Revenue split model (%)
- Who invoices the customer
- Payment timing (when does each party get paid)
- Cost allocation (who pays for what)
- Minimum guarantees (if any)

### 4. Intellectual Property
- Who owns what was created before the partnership
- Who owns what is created during the partnership
- What happens to jointly created IP if partnership ends

### 5. Exclusivity and Non-Competes
- Exclusivity terms (if any)
- Non-solicitation clauses
- Geographic or market restrictions

### 6. Governance
- Decision-making process (who decides what)
- Escalation path for disagreements
- Meeting cadence and reporting

### 7. Exit and Dissolution
- Termination triggers
- Notice periods
- Wind-down responsibilities
- Asset allocation on exit

## Red Flags to Watch For
List 5 common partnership deal-killers and how to avoid them in this specific context.`,
    category: 'business',
    tags: ['partnerships', 'legal', 'business-development', 'strategy', 'deals'],
    difficulty: 'advanced',
    useCase: 'Use before entering a strategic partnership, co-founder agreement, or revenue-share deal.',
    authorUsername: 'osa',
    likes: 167,
    saves: 123,
    copies: 389,
    views: 2000,
    trendScore: 167*2 + 123*3 + 389 + 2000*0.2,
    trendingScore: 167*2 + 123*3 + 389 + 2000*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Poorly structured partnerships destroy businesses. This surfaces the uncomfortable questions before you shake hands.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 389,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-08',
  },
  {
    id: 'lib-biz-009',
    title: 'Hiring Process and Job Description Builder',
    slug: 'hiring-process-job-description-builder',
    description: 'Writes a compelling job description and complete hiring process with scorecard and interview questions.',
    content: `You are a talent acquisition specialist and organizational psychologist. Design the complete hiring process for the following role.

## Role Context
- Role title: [JOB_TITLE]
- Team/department: [DEPARTMENT]
- Reporting to: [MANAGER_TITLE]
- Remote/on-site/hybrid: [WORK_TYPE]
- Key outcomes this person must achieve in 90 days: [OUTCOMES]
- Biggest failure mode for this role: [WHAT_GOES_WRONG_IF_WRONG_HIRE]

## Job Description

### Opening Hook (NOT "We're looking for a...")
Lead with why this role matters and what the person will build/own.

### About the Role
- What you'll own (outcomes, not tasks)
- What makes this role unique
- Who you'll work with

### What You'll Do (5-7 bullets in outcome format)
"Drive X to achieve Y" not "Responsible for X"

### What You'll Bring
Must-haves: (3-5 non-negotiable requirements)
Nice-to-haves: (3-5 preferred but not required)
You probably won't need: (pre-empt over-qualified candidates)

### What We Offer
Specific benefits (not "competitive salary")

## Interview Process (4-5 stages)

### Stage 1: Recruiter Screen (30 min)
Screening questions + scoring rubric (1-5 scale)

### Stage 2: Hiring Manager Interview (45 min)
Focus: Culture + motivation
10 specific interview questions with what you're listening for

### Stage 3: Skills Assessment
Describe a realistic take-home task (2-3 hours max) or technical interview format

### Stage 4: Team Interviews
Topics each interviewer covers (no redundancy)

## Scorecard
| Competency | Weight | Rating 1-5 | Notes |
|-----------|--------|-----------|-------|

## Offer Negotiation Prep
Salary bands, equity range, counter-offer strategy.`,
    category: 'business',
    tags: ['hiring', 'recruiting', 'hr', 'team-building', 'operations'],
    difficulty: 'intermediate',
    useCase: 'Use when opening a new role to write the JD, design the process, and create evaluation criteria from scratch.',
    authorUsername: 'osa',
    likes: 198,
    saves: 145,
    copies: 456,
    views: 2400,
    trendScore: 198*2 + 145*3 + 456 + 2400*0.2,
    trendingScore: 198*2 + 145*3 + 456 + 2400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Template',
    whyTrending: 'Bad hires cost 3x salary. This designs the full hiring funnel — from job description to scorecard — to reduce that risk.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 456,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-05',
  },
  {
    id: 'lib-biz-010',
    title: 'Market Entry Strategy for New Verticals',
    slug: 'market-entry-strategy-new-verticals',
    description: 'Designs a full market entry strategy for expanding into a new industry or geography with sequenced actions.',
    content: `You are a market expansion strategist. Design a market entry strategy for the following expansion initiative.

## Expansion Context
- Company: [COMPANY_NAME]
- Current market: [EXISTING_MARKET]
- Target market: [NEW_MARKET_OR_VERTICAL]
- Motivation: [WHY_EXPAND_NOW]
- Resources available: [BUDGET_AND_TEAM_FOR_EXPANSION]
- Timeline: [EXPECTED_TIMELINE]

## Market Entry Analysis

### 1. Market Assessment
- Total Addressable Market (TAM): [SIZE_ESTIMATE]
- Serviceable Addressable Market (SAM): [REALISTIC_SIZE]
- Serviceable Obtainable Market (SOM): [3-YEAR_TARGET]
- Growth rate of this market
- Market maturity stage (emerging / growing / mature / declining)

### 2. Competitive Landscape
- Incumbents and their market share
- New entrants and their approach
- Your competitive advantage in this market (be honest — what transfers from your current market?)

### 3. Entry Strategy Options
Evaluate 3 modes of entry:
- **Organic build**: Slower, more control, higher resource cost
- **Acquisition**: Faster, expensive, integration risk
- **Partnership/distribution**: Fastest, less control, lower margin

Recommend one with justification.

### 4. Go-to-Market Sequence
Phase 1 (0-3 months): [BEACHHEAD_STRATEGY]
Phase 2 (3-9 months): [EXPANSION_STEPS]
Phase 3 (9-18 months): [SCALE_STRATEGY]

### 5. Localization Requirements
- Product adaptations needed
- Regulatory/compliance requirements
- Pricing adjustments
- Support language/time zone needs

### 6. Success Metrics
- Leading indicators (early signals you're winning)
- Lagging indicators (actual market success)
- Decision trigger: at what point do you double down vs. exit?`,
    category: 'business',
    tags: ['market-entry', 'expansion', 'strategy', 'gtm', 'planning'],
    difficulty: 'advanced',
    useCase: 'Use when evaluating or planning expansion into a new market, vertical, or geography.',
    authorUsername: 'osa',
    likes: 178,
    saves: 123,
    copies: 412,
    views: 2100,
    trendScore: 178*2 + 123*3 + 412 + 2100*0.2,
    trendingScore: 178*2 + 123*3 + 412 + 2100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Market expansions often fail from under-planning. This structures the decision and execution before committing resources.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 412,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-02',
  },
  {
    id: 'lib-biz-011',
    title: 'Customer Churn Analysis and Recovery Plan',
    slug: 'customer-churn-analysis-recovery-plan',
    description: 'Analyzes churn root causes and builds a systematic win-back and prevention playbook.',
    content: `You are a customer success strategist specializing in churn reduction. Analyze the following churn data and build a recovery plan.

## Churn Context
- Product: [PRODUCT_NAME]
- Current churn rate: [%_MONTHLY]
- Customer segment with highest churn: [SEGMENT]
- Common cancellation reasons from surveys: [REASONS]
- Time to churn: [AVERAGE_DAYS_TO_CANCELLATION]
- Available data: [WHAT_YOU_KNOW_ABOUT_CHURNED_CUSTOMERS]

## Churn Analysis Framework

### 1. Root Cause Taxonomy
Categorize all churn into:
- **Value realization failure**: Never got to the "aha moment"
- **Fit mismatch**: Wrong customer acquired
- **Competitive displacement**: Switched to a competitor
- **Budget/economic**: Pure cost cut
- **Product gap**: Missing feature they needed

### 2. Leading Indicators of Churn
What behaviors predict churn 30-60 days before cancellation?
- Login frequency drop
- Feature usage decline
- Support ticket increase
- Pricing page visits
- Key user departure

### 3. Intervention Playbook
For each churn trigger, define the response:

| Trigger | Timeline | Intervention | Owner |
|---------|----------|-------------|-------|
| No login 7+ days | Day 7 | Automated re-engagement email | Marketing |
| Support ticket unresolved >48h | 48h | CSM personal reach-out | CS |

### 4. Win-Back Campaign
For recently churned customers (< 90 days):
- Segmentation (by churn reason)
- Message sequence (3-touch)
- Incentive strategy (if applicable)
- Expected win-back rate by segment

### 5. Prevention Investment Priority
Rank initiatives by: (Churn reduction potential × Customers affected) / Cost

### 6. Metrics to Track
Monthly churn dashboard KPIs and frequency of review.`,
    category: 'business',
    tags: ['churn', 'retention', 'customer-success', 'saas', 'revenue'],
    difficulty: 'intermediate',
    useCase: 'Use when churn rate is increasing or when building a proactive customer success program.',
    authorUsername: 'osa',
    likes: 201,
    saves: 145,
    copies: 478,
    views: 2500,
    trendScore: 201*2 + 145*3 + 478 + 2500*0.2,
    trendingScore: 201*2 + 145*3 + 478 + 2500*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'Fixing churn is more valuable than acquiring customers. This builds the intervention playbook that systematically recovers revenue.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 478,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-28',
  },
  {
    id: 'lib-biz-012',
    title: 'Meeting Facilitation and Agenda Designer',
    slug: 'meeting-facilitation-agenda-designer',
    description: 'Designs a structured meeting agenda with time blocks, facilitation techniques, and decision protocols.',
    content: `You are an organizational effectiveness consultant specializing in meeting design. Create a structured agenda for the following meeting.

## Meeting Context
- Meeting type: [STRATEGY / RETROSPECTIVE / PLANNING / DECISION / KICKOFF]
- Duration: [LENGTH]
- Attendees: [ROLES_AND_COUNT]
- Desired outcomes: [WHAT_DECISIONS_OR_OUTPUTS_ARE_NEEDED]
- Pre-existing tensions: [ANY_CONFLICTS_OR_SENSITIVITIES]

## Meeting Design

### Pre-Meeting (sent 48h before)
- Pre-read materials list with time estimates
- Pre-work: what should each attendee prepare?
- Question to reflect on before attending

### Agenda (minute-by-minute)

[00:00-00:05] **Opening ritual**
- Check-in question (not "how is everyone?" — something specific)
- Review desired outcomes

[00:05-00:XX] **Context setting**
- Who presents, what format (slides / whiteboard / discussion)
- What questions are off-scope for this meeting

[00:XX-00:XX] **Main work block**
- Facilitation technique (diverge-converge / working backwards / pre-mortem / etc.)
- Breakout structure if applicable

[00:XX-00:XX] **Decision protocol**
- Decision method: Consensus / Consent / Decider-decides / Vote
- How to handle deadlock

[00:XX-00:XX] **Actions and close**
- Action item format: Owner + Outcome + Deadline
- What gets communicated to who after this meeting

### Facilitation Tips
5 specific tips for keeping this particular meeting on track.

### Anti-Patterns to Avoid
3 ways this meeting typically goes wrong and how to prevent each.

### Follow-Up Template
Meeting notes format to send within 24 hours.`,
    category: 'business',
    tags: ['meetings', 'facilitation', 'operations', 'productivity', 'leadership'],
    difficulty: 'beginner',
    useCase: 'Use before any important meeting to design the agenda and facilitation approach rather than improvising.',
    authorUsername: 'osa',
    likes: 145,
    saves: 98,
    copies: 334,
    views: 1700,
    trendScore: 145*2 + 98*3 + 334 + 1700*0.2,
    trendingScore: 145*2 + 98*3 + 334 + 1700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '5 min',
    outputType: 'Template',
    whyTrending: 'Bad meetings are one of the biggest productivity drains. This designs meetings that actually produce decisions and clear actions.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 334,
    estimatedTokens: 700,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-25',
  },
  {
    id: 'lib-biz-013',
    title: '90-Day New Leader Onboarding Plan',
    slug: '90-day-new-leader-onboarding-plan',
    description: 'Creates a structured 30-60-90 day plan for a new executive or team leader joining an organization.',
    content: `You are an executive coach specializing in leadership transitions. Create a 90-day onboarding plan for the following new leader.

## Leader Context
- Role: [TITLE]
- Organization type: [STARTUP / SCALEUP / ENTERPRISE]
- Team size: [COUNT]
- Main challenges inherited: [CHALLENGES]
- What success looks like at 90 days: [SUCCESS_CRITERIA]

## 90-Day Plan

### Days 1-30: Listen and Learn
**Goal**: Understand before acting

Priority activities:
1. **Stakeholder listening tour** — 1:1s with every direct report, key peers, 2-3 customers
   - Questions to ask in each: [5 SPECIFIC QUESTIONS]
2. **Process audit** — understand what's working and what isn't
3. **Team health assessment** — who are the A/B/C players? Who is at flight risk?
4. **Cultural observation** — how are decisions made? Where is politics?

**Deliverable by Day 30**: Written synthesis memo shared with manager/board

**What NOT to do in first 30 days**: [SPECIFIC_TO_CONTEXT]

### Days 31-60: Diagnose and Plan
**Goal**: Form hypotheses and validate them

Priority activities:
1. Build your team operating model
2. Identify top 3 highest-leverage bets
3. Establish meeting cadence and communication norms
4. Begin fixing the 1-2 most urgent issues (quick wins)

**Deliverable by Day 60**: Team operating plan + 90-day initiative roadmap

### Days 61-90: Execute and Establish
**Goal**: Demonstrate progress and set long-term foundation

Priority activities:
1. Launch first major initiative
2. Make any necessary team changes
3. Establish reporting rhythms upward and downward
4. Define your leadership charter with the team

**Deliverable by Day 90**: Retrospective + next quarter plan

## Relationship Map
Who are the 5 most critical relationships to build in 90 days and how?`,
    category: 'business',
    tags: ['leadership', 'onboarding', 'management', 'planning', 'career'],
    difficulty: 'intermediate',
    useCase: 'Use when starting a new leadership role or onboarding a new executive to your team.',
    authorUsername: 'osa',
    likes: 167,
    saves: 121,
    copies: 389,
    views: 2000,
    trendScore: 167*2 + 121*3 + 389 + 2000*0.2,
    trendingScore: 167*2 + 121*3 + 389 + 2000*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'The first 90 days set the trajectory for a leader\'s tenure. This structures the listen-learn-execute approach that builds credibility fast.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 389,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-22',
  },
  {
    id: 'lib-biz-014',
    title: 'Competitive Moat Analysis and Defense Plan',
    slug: 'competitive-moat-analysis-defense-plan',
    description: 'Evaluates competitive moats across 7 dimensions and builds a concrete defense strategy against new entrants.',
    content: `You are a competitive strategy analyst. Evaluate the competitive moats and defensibility of the following business.

## Business Context
- Company: [COMPANY_NAME]
- Product: [PRODUCT_DESCRIPTION]
- Revenue: [MRR/ARR]
- Biggest threat: [DESCRIBE_MAIN_COMPETITIVE_THREAT]

## Moat Analysis (7 Dimensions)

### 1. Network Effects
- Does the product get more valuable as more people use it?
- Type: Direct (more users → more value for each user) or Indirect (more users → more suppliers)
- Current network effect strength: 1-10
- How to strengthen it: [specific actions]

### 2. Switching Costs
- What would a customer lose by switching?
- Data portability threat (how easy to export data)
- Integration depth (how embedded in customer workflows)
- Switching cost estimate: [$ or hours]

### 3. Proprietary Data
- What data do you accumulate that competitors cannot easily replicate?
- How does it compound (does it get more valuable over time)?

### 4. Scale Economics
- At what scale do unit economics dramatically improve?
- Are you at or past that scale?

### 5. Brand
- Category awareness percentage
- Trust premium (willing to pay more vs. competitors?)
- Community/following size

### 6. Regulatory/Legal
- IP: patents, trade secrets, copyrights
- Licenses or certifications that are hard to obtain
- Regulatory approvals

### 7. Speed Advantage
- How fast can you ship vs. competitors?
- Learning loop speed (how fast you incorporate customer feedback)

## Overall Moat Score: [/10]

## Defense Strategies (next 12 months)
Top 5 actions to strengthen moats, with investment estimates and expected impact.`,
    category: 'business',
    tags: ['competitive', 'moat', 'strategy', 'defensibility', 'analysis'],
    difficulty: 'advanced',
    useCase: 'Use when a new well-funded competitor enters the market or when preparing a fundraise deck.',
    authorUsername: 'osa',
    likes: 212,
    saves: 156,
    copies: 512,
    views: 2700,
    trendScore: 212*2 + 156*3 + 512 + 2700*0.2,
    trendingScore: 212*2 + 156*3 + 512 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Analysis',
    whyTrending: 'Founders often can\'t clearly articulate their moat to investors. This framework forces rigorous moat thinking before the meeting.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 512,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-18',
  },
  {
    id: 'lib-biz-015',
    title: 'Annual Strategic Planning Workshop Facilitator',
    slug: 'annual-strategic-planning-workshop-facilitator',
    description: 'Designs and facilitates a complete annual strategy session with company review, vision setting, and initiative prioritization.',
    content: `You are a strategic planning facilitator. Design and facilitate a full-day annual strategy session for the following company.

## Company Context
- Company: [COMPANY_NAME]
- Stage: [STAGE]
- Team: [SIZE_AND_ROLES]
- Previous year highlight: [BIGGEST_WIN]
- Previous year challenge: [BIGGEST_MISS]
- Entering the new year with: [KEY_CONTEXT: funding / product / market changes]

## Full-Day Workshop Agenda

### Morning: Review and Reset (3 hours)

**9:00-9:30: Opening ritual**
- Individual reflection exercise: "What made you most proud this year? What would you do differently?"
- Share round-robin (2 min each)

**9:30-11:00: Year in review**
- Metrics review (pre-prepared by leadership)
- Strategic bets that paid off
- Bets that didn't work (honest retrospective, no blame)
- Market/competitive landscape changes

**11:00-12:00: Customer voice**
- Play 3 customer interview clips or read 3 verbatim quotes
- Small group exercise: "What patterns do we see?"

### Afternoon: Vision and Planning (4 hours)

**13:00-14:30: 3-Year vision**
- "Working backwards": Describe the company 3 years from now as if writing a press release
- Debate and align on the vision
- Write the "3-year headline"

**14:30-16:00: Annual priorities**
- Brainstorm: all possible initiatives (25-30 min)
- Prioritization: effort vs. impact 2x2
- Select 3-5 company-level priorities

**16:00-17:00: OKR drafting**
- Break into functional teams (30 min)
- Draft Q1 OKRs aligned to priorities
- Share-back and align

**17:00-17:30: Closing**
- Each person: "My one commitment for Q1"
- Team ritual / celebration

## Pre-Work for All Attendees
What to prepare before arriving (2-hour pre-read packet).

## Facilitator Notes
Tips for handling: dominant voices, disagreement, time overruns.`,
    category: 'business',
    tags: ['strategy', 'planning', 'facilitation', 'okrs', 'leadership'],
    difficulty: 'intermediate',
    useCase: 'Use before the annual planning season to design a structured strategy session that produces real alignment.',
    authorUsername: 'osa',
    likes: 245,
    saves: 178,
    copies: 567,
    views: 2900,
    trendScore: 245*2 + 178*3 + 567 + 2900*0.2,
    trendingScore: 245*2 + 178*3 + 567 + 2900*0.2,
    trending: false,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Most annual planning sessions produce beautiful slides and zero alignment. This runs the meeting that actually changes behavior.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 567,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-15',
  },
]
