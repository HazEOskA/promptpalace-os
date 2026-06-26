import type { Prompt } from './prompts'

export const SALES_PROMPTS: Prompt[] = [
  {
    id: 'lib-sal-001',
    title: 'Cold Outreach Sequence Builder',
    slug: 'cold-outreach-sequence-builder',
    description: 'Generates a 5-touch cold outreach sequence with subject lines, body copy, and CTAs personalized to your ICP.',
    content: `You are an expert B2B sales copywriter with 10+ years crafting cold outreach sequences that get replies. Your task is to build a complete 5-touch cold outreach sequence for the following parameters.

## Inputs
- ICP Description: [ICP_DESCRIPTION] (e.g., VP of Engineering at Series B SaaS companies, 50-200 employees)
- Product/Service: [PRODUCT/SERVICE]
- Core Value Proposition: [ONE_SENTENCE_VALUE_PROP]
- Top Pain Point to Address: [PRIMARY_PAIN_POINT]

## Sequence Structure

### Touch 1 — Value-Forward Intro (Day 1)
No pitch. Lead with a genuine insight relevant to their role or industry. Demonstrate you understand their world before asking for anything. Subject line variants (2). Body: 80-100 words. CTA: soft and low-friction (request permission, not a meeting).

### Touch 2 — Case Study Mini (Day 4)
One sentence proof point referencing a recognizable result or customer type. Frame it around their likely goal, not your features. Subject line variants (2). Body: 80-100 words. CTA: single question.

### Touch 3 — Pattern Interrupt (Day 8)
Use an unexpected angle, a counterintuitive question, or a bold statement that makes them stop and think. Break the professional email mold. Subject line variants (2). Body: 80-100 words. CTA: conversation starter question.

### Touch 4 — Breakup Email (Day 14)
Acknowledge they're busy, give them an easy out, and simultaneously re-open by offering one final piece of value. Tone: human, not passive-aggressive. Subject line variants (2). Body: 80-100 words.

### Touch 5 — Final Value Add (Day 21)
Close the loop with a resource, insight, or tool relevant to their role — no ask, just give. Leaves a positive impression whether they reply or not. Subject line variants (2). Body: 80-100 words.

## Requirements
- Embed personalization tokens throughout: {{first_name}}, {{company}}, {{industry_trigger}}, {{recent_news}}
- Avoid spam trigger words (guaranteed, free, urgent)
- Each email should stand alone if they missed prior ones
- Escalating specificity: each touch gets more targeted

## Output
Complete sequence document with all 5 emails, subject line variants, body copy, CTAs, and a brief send-timing rationale.`,
    category: 'sales',
    tags: ['cold-outreach', 'email-sequence', 'prospecting', 'B2B', 'sales-copy'],
    difficulty: 'beginner',
    useCase: 'Use when launching a cold outreach campaign to a new ICP segment and need a repeatable, multi-touch sequence.',
    authorUsername: 'promptarchitect',
    likes: 340,
    saves: 210,
    copies: 850,
    views: 5200,
    trendScore: 340*2 + 210*3 + 850 + 5200*0.2,
    trendingScore: 340*2 + 210*3 + 850 + 5200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '12 min',
    outputType: 'Template',
    whyTrending: 'Cold outreach response rates have plummeted industry-wide. Reps use this to build sequences that stand out with genuine value instead of generic pitches.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 850,
    estimatedTokens: 720,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-10',
  },
  {
    id: 'lib-sal-002',
    title: 'Discovery Call Script & Question Framework',
    slug: 'discovery-call-script-question-framework',
    description: 'Creates a full discovery call framework with layered questions, follow-up probes, and coaching notes for any product or buyer persona.',
    content: `You are a world-class sales coach who has trained hundreds of B2B sales reps at high-growth companies. Your task is to create a comprehensive discovery call framework for the following scenario.

## Inputs
- Product/Service: [PRODUCT/SERVICE]
- Buyer Persona: [BUYER_PERSONA] (e.g., Head of IT at mid-market financial services firms)
- Typical Deal Size: [ACV_RANGE]
- Sales Cycle Length: [TYPICAL_CYCLE]

## Discovery Call Framework

### Agenda-Setting Opener
Script for the first 60 seconds that sets the agenda, confirms time, and establishes mutual next steps.

### Rapport Questions (2)
Non-threatening questions that build connection and reveal context — not generic small talk.

### Current State Questions (3)
Explore how they operate today. What tools, processes, and metrics do they currently use? Uncover the baseline.

### Pain Excavation Questions (5 — Surface → Financial → Emotional)
Layer pain progressively: start with operational symptoms, dig to business impact and revenue consequence, then uncover the personal/political cost if nothing changes.

### Impact Quantification Questions (3)
Help them attach a number to their pain. Ask about frequency, cost, time lost, team affected.

### Future State Questions (3)
Where do they want to be? What does success look like in 12 months? What would change if this problem were solved?

### Buying Process Questions (4)
Decision-making unit, evaluation criteria, timeline, budget owner, and how they've bought similar solutions before.

### Next Step Close
A specific, value-forward close that advances the deal — not a vague "I'll send over some info."

## For Each Question Include
- The exact question (ready to read aloud)
- 2 follow-up probes to go deeper
- What to listen for (signals of fit or red flags)
- Red flags that indicate poor fit or stalled deal

## Output
Complete call script with coaching notes in a format reps can print and use in live calls.`,
    category: 'sales',
    tags: ['discovery', 'sales-call', 'MEDDIC', 'qualification', 'coaching'],
    difficulty: 'intermediate',
    useCase: 'Use when training new sales reps or refreshing a discovery framework for a new product line or buyer persona.',
    authorUsername: 'marketinglab',
    likes: 298,
    saves: 185,
    copies: 780,
    views: 4800,
    trendScore: 298*2 + 185*3 + 780 + 4800*0.2,
    trendingScore: 298*2 + 185*3 + 780 + 4800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Weak discovery is the #1 cause of lost deals. Sales teams use this to systematically uncover pain and build pipeline confidence.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 780,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-12',
  },
  {
    id: 'lib-sal-003',
    title: 'Objection Handling Playbook',
    slug: 'objection-handling-playbook',
    description: 'Builds a comprehensive objection handling playbook covering 12 common objections with acknowledge-reframe-evidence-question scripts.',
    content: `You are a veteran sales trainer who has built objection handling programs for enterprise sales organizations. Your task is to build a comprehensive objection handling playbook for the following context.

## Inputs
- Product Category: [PRODUCT_CATEGORY] (e.g., marketing automation software, cybersecurity platform)
- Market Segment: [MARKET_SEGMENT] (e.g., mid-market B2B, enterprise financial services)
- Typical ACV: [ACV]
- Common Competitor: [MAIN_COMPETITOR]

## The 12 Objections to Cover

1. "It's too expensive" — price objection
2. "We're already using [competitor]" — competitive displacement
3. "It's not the right time" — timing deflection
4. "I need to think about it" — stall tactic
5. "We don't have budget" — budget constraint
6. "I need to involve others" — authority deflection
7. "We can build it ourselves" — DIY objection
8. "What's your ROI?" — value justification
9. "We've had bad experiences with similar tools" — trust objection
10. "It's too complex to implement" — adoption risk
11. "Our team won't adopt it" — change management fear
12. "It's not a priority right now" — urgency objection

## For Each Objection Provide

**Acknowledge**: Exact language to validate their concern without conceding ground.
**Reframe**: How to shift the mental model — change the context, comparison, or timeframe.
**Evidence**: Specific proof point (stat, case study, social proof) to back the reframe.
**Question**: A follow-up question that moves the conversation forward and re-engages curiosity.
**Role-Play Script**: A 150-word dialogue showing the full exchange from objection to advancement.
**What Not to Say**: 2 common mistakes reps make with this objection.

## Output
Complete objection handling playbook organized by objection, with role-play scripts and a quick-reference one-pager at the end reps can keep on their desk during calls.`,
    category: 'sales',
    tags: ['objection-handling', 'sales-training', 'negotiation', 'playbook'],
    difficulty: 'intermediate',
    useCase: 'Use when onboarding new reps, refreshing sales training, or preparing the team for a challenging competitive selling environment.',
    authorUsername: 'builderai',
    likes: 375,
    saves: 245,
    copies: 990,
    views: 5900,
    trendScore: 375*2 + 245*3 + 990 + 5900*0.2,
    trendingScore: 375*2 + 245*3 + 990 + 5900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '18 min',
    outputType: 'Playbook',
    whyTrending: 'Sales reps lose winnable deals on objections they encounter every day. This playbook arms entire teams with consistent, tested responses.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 990,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-14',
  },
  {
    id: 'lib-sal-004',
    title: 'Sales Proposal Generator',
    slug: 'sales-proposal-generator',
    description: 'Creates a client-centric, winning sales proposal with executive summary, ROI model, case study, and clear next steps.',
    content: `You are an expert proposal writer who has helped close enterprise deals worth $50K–$5M. Your task is to create a compelling, client-centric sales proposal for the following opportunity.

## Inputs
- Prospect Name/Company: [PROSPECT_NAME]
- Product/Service Being Proposed: [PRODUCT/SERVICE]
- Key Pain Points Discovered in Discovery: [PAIN_POINTS]
- Proposed Investment: [PRICING_RANGE]
- Key Stakeholders: [STAKEHOLDERS]
- Decision Timeline: [TIMELINE]

## Proposal Structure

### 1. Executive Summary (200 words)
Summarize the prospect's problem, your proposed solution, and the headline ROI — all in language an executive can absorb in 90 seconds. Reference their specific situation.

### 2. Understanding Your Situation
Demonstrate deep empathy with their current state. Mirror back what you learned in discovery. Show you understand consequences of inaction, not just the surface problem.

### 3. Proposed Solution
Describe the solution with an implementation timeline (phased approach if applicable). Use plain language — no jargon. Connect every feature to a business outcome they care about.

### 4. Why Us — Differentiators
Three crisp, evidence-backed differentiators vs. the status quo and key alternatives. Avoid generic claims like "best in class." Be specific.

### 5. Investment Summary
Present pricing clearly. If tiered, frame options to anchor toward the recommended choice. Include what's included and excluded.

### 6. ROI Model
A simple, conservative ROI model with named inputs the prospect can verify. Show time-to-value and payback period. Use their numbers where provided.

### 7. Customer Case Study
One relevant customer story: industry match, similar pain, measurable outcome. Brief — 150 words.

### 8. Our Team
Brief bios of the team they'll work with. Focus on relevant experience, not resume padding.

### 9. Next Steps + Decision Timeline
A specific, dated action plan for the next 14 days. Make it easy for them to say yes.

## Tone
Confident, client-centric, direct. Write for the economic buyer, not the technical evaluator.

## Output
Complete proposal template with all sections filled to production-ready quality.`,
    category: 'sales',
    tags: ['proposal', 'sales-docs', 'enterprise', 'ROI', 'deal-closing'],
    difficulty: 'intermediate',
    useCase: 'Use when preparing a formal written proposal for a mid-market or enterprise prospect after discovery is complete.',
    authorUsername: 'devdna',
    likes: 310,
    saves: 200,
    copies: 820,
    views: 4900,
    trendScore: 310*2 + 200*3 + 820 + 4900*0.2,
    trendingScore: 310*2 + 200*3 + 820 + 4900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'Most proposals are product-centric and lose deals. This prompt forces a buyer-centric narrative that accelerates decisions.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 820,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-16',
  },
  {
    id: 'lib-sal-005',
    title: 'Account Expansion Playbook',
    slug: 'account-expansion-playbook',
    description: 'Designs an end-to-end account expansion strategy covering upsell signals, cross-sell opportunities, multi-threading, and QBR structure.',
    content: `You are a customer success and expansion revenue specialist with experience growing accounts at SaaS companies with NRR > 120%. Your task is to create an account expansion strategy for the following customer.

## Inputs
- Existing Customer: [EXISTING_CUSTOMER]
- Current Plan/Product: [PLAN/PRODUCT]
- Contract Value: [CURRENT_ACV]
- Relationship Health: [CHAMPION_STRENGTH / NPS / USAGE_LEVEL]
- Expansion Target: [TARGET_EXPANSION_ACV]

## Expansion Strategy Components

### 1. Expansion Signals to Watch For
Define 8 behavioral and business signals that indicate readiness to expand: usage thresholds, team growth, new initiatives, executive changes, contract renewal proximity, feature request patterns, support ticket types, and QBR feedback themes.

### 2. Upsell Conversation Triggers
For each signal above: what conversation to initiate, how to frame the upsell as a natural progression, and sample opening language the CSM should use.

### 3. Cross-Sell Opportunities
Map the customer's current product usage to 2-3 adjacent products or features. Build the cross-sell narrative that connects their existing wins to the next logical step.

### 4. Multi-Threading Strategy
Identify new stakeholders to connect with beyond the current champion: economic buyer, end users, IT/legal/procurement contacts. For each: how to get introduced, value proposition specific to their role.

### 5. Executive Sponsor Program
Design a lightweight executive sponsor engagement model: cadence, agenda format, escalation path, and how to use exec relationships to protect and grow the account.

### 6. Usage-Based Expansion Triggers
If usage-based billing or tier limits exist, define the thresholds at which to proactively initiate an upgrade conversation — before the customer hits a wall.

### 7. QBR Structure for Expansion
Build a QBR agenda that naturally surfaces expansion opportunities: ROI review, usage benchmarking vs peers, roadmap alignment, and growth goal discussion. Include the exact question that opens the expansion conversation.

### 8. Renewal + Expansion Negotiation
Approach for combining renewal and expansion in a single negotiation: timing strategy, how to use multi-year deals as expansion levers, discount framing.

## Output
Complete account expansion playbook organized by strategy component, with scripts and templates for each section.`,
    category: 'sales',
    tags: ['account-expansion', 'upsell', 'customer-success', 'NRR', 'renewal'],
    difficulty: 'intermediate',
    useCase: 'Use when a CSM or account executive needs a structured approach to growing revenue within an existing customer account.',
    authorUsername: 'contentpro',
    likes: 270,
    saves: 175,
    copies: 710,
    views: 4500,
    trendScore: 270*2 + 175*3 + 710 + 4500*0.2,
    trendingScore: 270*2 + 175*3 + 710 + 4500*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '16 min',
    outputType: 'Playbook',
    whyTrending: 'With new logo acquisition costs rising, expansion revenue has become the primary growth lever. Teams use this to systematize account growth.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 710,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-sal-006',
    title: 'Sales Battle Card Builder',
    slug: 'sales-battle-card-builder',
    description: 'Produces a competitive battle card for winning against a specific competitor, including trap questions, win themes, and proof points.',
    content: `You are a competitive intelligence specialist who has built battle cards used by enterprise sales teams to win competitive deals at scale. Your task is to build a sales battle card for the following competitive scenario.

## Inputs
- Your Product: [YOUR_PRODUCT]
- Competitor: [COMPETITOR]
- Your Typical Buyer: [BUYER_PERSONA]
- Deals You Most Often Lose to Them: [DEAL_TYPE_WHERE_YOU_LOSE]
- Deals You Most Often Win vs Them: [DEAL_TYPE_WHERE_YOU_WIN]

## Battle Card Contents

### Competitor Overview (30 words)
Their positioning in one crisp paragraph. What story do they tell? Who do they primarily serve?

### Their Pitch
What they say in discovery and demos. Their top 3 selling points as their own reps would deliver them. Know your enemy's best arguments.

### Their Weaknesses (3-5)
Specific, evidence-backed weaknesses — not generic "their support is bad." Include customer complaints, review site data, technical limitations, pricing structures, and implementation challenges.

### Landmines to Plant in Discovery
5 discovery questions that, when answered honestly, reveal the competitor's weaknesses without you mentioning them. Let the prospect disqualify the competitor themselves.

### Your Win Themes (3)
The 3 scenarios where you win almost every time. Define the deal profile and why you win in each.

### Trap Questions
One sharp question per win theme that surfaces your advantage naturally in conversation.

### Proof Points
For each win theme: one specific customer result, one data point, one third-party validation (analyst/review/award).

### Handling "They're Cheaper"
Exact script for the price comparison objection. Reframe value, total cost of ownership, and risk.

### Handling "They Have More Features"
Exact script for the feature gap objection. Reframe around relevant features, adoption rates, and outcome metrics.

### Win/Loss Qualifiers
5 signals during early discovery that tell you whether you'll win or lose this competitive deal.

## Output
A clean, 1-page battle card formatted for fast reference during live calls, plus a deeper reference section with full scripts.`,
    category: 'sales',
    tags: ['competitive-intelligence', 'battle-card', 'win-loss', 'objection-handling'],
    difficulty: 'intermediate',
    useCase: 'Use when building a competitive enablement program or preparing reps for a head-to-head competitive deal cycle.',
    authorUsername: 'promptarchitect',
    likes: 295,
    saves: 190,
    copies: 760,
    views: 4700,
    trendScore: 295*2 + 190*3 + 760 + 4700*0.2,
    trendingScore: 295*2 + 190*3 + 760 + 4700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Document',
    whyTrending: 'Competitive deals are won or lost in discovery. Reps with great battle cards disqualify competitors before pricing is ever discussed.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 760,
    estimatedTokens: 780,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-sal-007',
    title: 'LinkedIn Social Selling Playbook',
    slug: 'linkedin-social-selling-playbook',
    description: 'Creates a complete LinkedIn social selling system with profile optimization, content strategy, prospecting workflow, and outreach templates.',
    content: `You are a social selling strategist who has helped B2B sales teams generate pipeline through LinkedIn at companies with $1M–$50M ARR. Your task is to create a comprehensive LinkedIn social selling system for the following role.

## Inputs
- Sales Role: [SALES_ROLE] (e.g., Account Executive, SDR, VP of Sales)
- Product/Service: [PRODUCT/SERVICE]
- ICP: [ICP] (e.g., CTOs at Series A/B SaaS startups)
- Industry: [INDUSTRY]

## LinkedIn Social Selling System

### 1. Profile Optimization for Buyers
Rewrite the profile as a buyer-centric resource, not a resume. Cover: headline formula (role + value delivered + who you help), about section (hook + credibility + specific outcomes + CTA), featured section strategy (what to highlight to attract inbound), experience bullets (outcome-focused for credibility).

### 2. Content Strategy
Five content pillars aligned to ICP pain points. For each pillar: content types that perform (text/document/poll/video), example topic, posting cadence recommendation. Overall posting frequency: minimum viable vs aggressive growth.

### 3. Engagement Ritual
A daily 20-minute engagement routine: which notifications to respond to, whose content to engage with, how to add value in comments without self-promotion, how to use engagement as a warm-up before outreach.

### 4. Prospecting Workflow
Step-by-step process: LinkedIn Sales Navigator search setup → connection criteria → profile review checklist → warm engagement phase (before connecting) → connection request → message sequence.

### 5. Connection Request Templates (3)
- Mutual connection angle
- Content engagement angle
- Insight/research angle
Each: under 300 characters, no pitch, clear reason to connect.

### 6. InMail / DM Sequence (3 messages)
First message (value-forward, no pitch), follow-up (different angle), final touchpoint (breakup with value add). Each: under 150 words.

### 7. Content-to-Conversation Bridge
How to use your own post engagement to initiate conversations: who to reach out to after they engage with your content, what to say, how to transition to a sales conversation naturally.

### 8. Social Proof Building
How to gather and display LinkedIn recommendations, how to request endorsements strategically, and how to use case study posts to build credibility with your ICP.

## Output
Complete LinkedIn social selling system with all templates ready for immediate use.`,
    category: 'sales',
    tags: ['linkedin', 'social-selling', 'prospecting', 'personal-brand', 'pipeline'],
    difficulty: 'beginner',
    useCase: 'Use when setting up a LinkedIn-based pipeline generation system for an SDR, AE, or sales leader.',
    authorUsername: 'marketinglab',
    likes: 320,
    saves: 205,
    copies: 840,
    views: 5100,
    trendScore: 320*2 + 205*3 + 840 + 5100*0.2,
    trendingScore: 320*2 + 205*3 + 840 + 5100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'LinkedIn remains the highest-ROI prospecting channel for B2B. This system gives reps a repeatable daily process for generating pipeline without cold calling.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'marketinglab',
    uses: 840,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-22',
  },
  {
    id: 'lib-sal-008',
    title: 'Demo Script & Value Demonstration Guide',
    slug: 'demo-script-value-demonstration-guide',
    description: 'Creates a narrative-driven product demo script with feature-benefit-impact framework, objection handling during demo, and proof-of-value close.',
    content: `You are a senior sales engineer and demo expert who has run thousands of B2B product demonstrations. Your task is to create a compelling product demo script for the following scenario.

## Inputs
- Product: [PRODUCT]
- Buyer Persona: [BUYER_PERSONA]
- Primary Pain Point: [PRIMARY_PAIN]
- Secondary Pain Points: [SECONDARY_PAINS]
- Demo Length: [TIME_AVAILABLE] (e.g., 30 or 45 minutes)
- Audience: [AUDIENCE_TYPE] (e.g., technical evaluators, economic buyer, mixed)

## Demo Script Structure

### Pre-Demo Discovery Recap (3 min)
Script for connecting what you learned in discovery to what you're about to show. Confirm the agenda and their priorities. Set the stage: "Based on what you shared, I want to focus on X and Y."

### Agenda Confirmation (1 min)
State what you will and will not cover today. Get explicit agreement. This controls scope creep.

### Situation Setup — Their World Before (3 min)
Paint a vivid picture of the problem they live with daily. Use their exact words from discovery when possible. Make them nod before you show anything.

### Demo Narrative Arc
Structure the demo as a story: Before state (pain) → Trigger event → Your product as hero → After state (relief and value).

For each demo section apply the Feature-Benefit-Impact framework:
- **Feature**: what it does (brief)
- **Benefit**: what that means for their team
- **Impact**: the business outcome they care about (use their numbers)

### Handling "Can It Do X?" Questions
Script for capturing and parking feature requests without derailing the narrative. How to answer honestly when the answer is no.

### Competitor Feature Comparisons
When they mention a competitor capability: acknowledge, pivot to outcome, differentiate on what matters most to this buyer.

### Proof of Value Close (5 min)
At the end: summarize the 3 moments of value they just saw, tie to their stated success metrics, propose the next step that confirms value (pilot, POC, reference call).

### Next Steps
Specific, time-bound next step. Never end with "I'll follow up."

## Output
Complete demo script with facilitation guide, timing markers, and coaching notes for each section.`,
    category: 'sales',
    tags: ['demo', 'sales-engineering', 'product-demo', 'value-selling'],
    difficulty: 'intermediate',
    useCase: 'Use when building a repeatable demo playbook for a new product or retraining sales engineers on a value-focused demo structure.',
    authorUsername: 'builderai',
    likes: 255,
    saves: 165,
    copies: 680,
    views: 4300,
    trendScore: 255*2 + 165*3 + 680 + 4300*0.2,
    trendingScore: 255*2 + 165*3 + 680 + 4300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Script',
    whyTrending: 'Most demos are feature tours that bore buyers. This prompt forces a narrative-driven approach that keeps prospects engaged and closes more pilots.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 680,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-24',
  },
  {
    id: 'lib-sal-009',
    title: 'Pipeline Review & Deal Coaching Framework',
    slug: 'pipeline-review-deal-coaching-framework',
    description: 'Structures a MEDDIC/MEDDPICC-based pipeline review with deal risk assessment, next best actions, and manager coaching talking points.',
    content: `You are a seasoned sales manager and revenue leader who has built pipeline review processes at high-growth B2B companies. Your task is to create a comprehensive deal coaching and pipeline review framework for the following team.

## Inputs
- Rep Name: [REP_NAME]
- Current Pipeline Stage Focus: [STAGE] (e.g., all late-stage deals, discovery-complete, proposals out)
- Company ACV: [ACV_RANGE]
- Sales Methodology: [MEDDIC / MEDDPICC / SPIN / CHALLENGER / OTHER]
- Forecast Period: [QUARTER/MONTH]

## Pipeline Review Framework

### Deal-Level Qualification Scorecard (per deal)
Score each deal 1-5 on each MEDDIC/MEDDPICC dimension:
- **Metrics**: Do we know the quantified business impact?
- **Economic Buyer**: Have we met and qualified the economic buyer?
- **Decision Criteria**: Do we know their formal and informal criteria?
- **Decision Process**: Do we understand the full buying process and timeline?
- **Paper Process**: Do we know legal/procurement requirements and timeline?
- **Identify Pain**: Is the pain sharp enough to justify the investment?
- **Champion**: Do we have a strong, active internal champion?
- **Competition**: Do we know the competitive landscape and our position?

### Risk Assessment Template
For each deal: top 3 risks, probability impact rating, specific mitigation action with owner and due date.

### Next Best Action Framework
Given the qualification score and risk profile, prescribe the single highest-leverage action to advance this deal this week.

### Manager Coaching Talking Points
For each deal type (stuck, at-risk, strong): 3 coaching questions the manager should ask — not tell. Socratic coaching over directive feedback.

### Pipeline Health Scorecard
Aggregate metrics: total pipeline vs target, coverage ratio, stage distribution, average deal velocity, competitive win rate, deals at risk flag.

### Forecast Methodology
How to assign commit/upside/pipeline call with conviction criteria for each category.

## Output
Deal coaching template (per deal), pipeline health scorecard, and manager talking points guide organized for a 60-minute weekly review.`,
    category: 'sales',
    tags: ['pipeline-review', 'deal-coaching', 'MEDDIC', 'forecasting', 'sales-management'],
    difficulty: 'advanced',
    useCase: 'Use when running weekly pipeline reviews or building a deal coaching cadence for a sales team.',
    authorUsername: 'devdna',
    likes: 240,
    saves: 160,
    copies: 650,
    views: 4100,
    trendScore: 240*2 + 160*3 + 650 + 4100*0.2,
    trendingScore: 240*2 + 160*3 + 650 + 4100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Forecast accuracy is a top pain for sales leaders. MEDDIC-based pipeline reviews that surface risk early dramatically improve close rates and predictability.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 650,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-26',
  },
  {
    id: 'lib-sal-010',
    title: 'Sales Email Response Templates',
    slug: 'sales-email-response-templates',
    description: 'Generates a library of 15 situational sales email templates covering every scenario from inbound response to win announcement.',
    content: `You are a sales communication expert who has written email templates used by thousands of B2B reps. Your task is to create a complete library of 15 sales email response templates for the following context.

## Inputs
- Product/Service: [PRODUCT/SERVICE]
- Sales Cycle: [TYPICAL_CYCLE_LENGTH]
- Tone: [FORMAL / SEMI-FORMAL / CASUAL]
- Company Size Selling To: [SMB / MID-MARKET / ENTERPRISE]

## The 15 Templates

1. **Inbound Lead Response (5-Minute Rule)** — Fast, personalized, curiosity-building. Reference their specific inquiry. No wall of text.

2. **Post-Demo Follow-Up** — Summarize the 3 key value moments, confirm next steps, include the one-pager or resource promised.

3. **Sending Pricing** — Frame pricing before attaching it. Anchor value, remind them of ROI discussed, set up the conversation.

4. **"Send Me More Info" Deflection** — Respond with a question instead of a brochure. Qualify before you educate.

5. **Reengaging a Ghost** — Pattern interrupt for a prospect who went dark. New angle, low ask, gives them an easy out.

6. **Referral Request** — Specific, non-awkward referral ask from a happy customer. Makes it easy for them to say who.

7. **Champion Enablement** — Arm your internal champion to sell on your behalf when you're not in the room. Includes the narrative they need.

8. **Legal/Procurement Response** — Professional, patient, and proactive. Anticipates their common questions and accelerates their process.

9. **Multi-Stakeholder Intro Email** — Introduce yourself to a new stakeholder without undermining your champion.

10. **Loss Debrief Request** — Gracious, curious, relationship-preserving email asking why you lost.

11. **Win Announcement to Champion** — Celebrate the deal with your champion. Transition from sales to implementation energy.

12. **Renewal Discussion Opener** — 90 days before renewal: open the conversation proactively with a value-forward message.

13. **Executive Sponsorship Request** — Ask your exec to engage their counterpart. Provides them with everything they need.

14. **Case Study Ask** — Request from a customer to participate in a case study. Makes the value to them explicit.

15. **Warm Intro Request** — Ask a mutual connection for a warm introduction. Makes it easy for them to facilitate.

## For Each Template
Subject line (2 variants) + 80-100 word body + clear single CTA.

## Output
Complete email template library formatted for immediate use, with a situation guide explaining when to use each template.`,
    category: 'sales',
    tags: ['email-templates', 'sales-communication', 'follow-up', 'outreach'],
    difficulty: 'beginner',
    useCase: 'Use when building a sales communication playbook or onboarding new reps who need a full email toolkit.',
    authorUsername: 'contentpro',
    likes: 355,
    saves: 235,
    copies: 960,
    views: 5700,
    trendScore: 355*2 + 235*3 + 960 + 5700*0.2,
    trendingScore: 355*2 + 235*3 + 960 + 5700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '20 min',
    outputType: 'Template',
    whyTrending: 'Reps waste hours writing emails from scratch. A well-structured template library can 3x email output quality while cutting writing time by 80%.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 960,
    estimatedTokens: 980,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-28',
  },
  {
    id: 'lib-sal-011',
    title: 'SaaS Pricing Page Copy & Strategy',
    slug: 'saas-pricing-page-copy-strategy',
    description: 'Designs a 3-tier SaaS pricing strategy with page copy, feature differentiation logic, price anchoring, and FAQ section.',
    content: `You are a pricing and positioning strategist who has designed pricing pages for SaaS companies from seed to Series C. Your task is to design the pricing strategy and write the pricing page copy for the following product.

## Inputs
- SaaS Product: [SAAS_PRODUCT]
- Market: [MARKET] (e.g., SMB HR teams, enterprise DevOps)
- Competitors and Their Pricing: [COMPETITOR_PRICING]
- Current Pricing (if any): [CURRENT_PRICING]
- Business Goal for Pricing Page: [GOAL] (e.g., maximize trial starts, enterprise demo requests)

## Pricing Strategy Design

### Tier Structure (3 Plans)
For each tier:
- **Plan Name**: Evocative, audience-specific (not Starter/Pro/Enterprise if possible)
- **Positioning Statement**: Who this plan is for in one sentence
- **Headline Price + Billing Options**
- **Top 5 Features**: The ones that matter most to the target buyer at this tier
- **Feature Differentiation Logic**: Why certain features are withheld at lower tiers (protect strategic value, not arbitrary gatekeeping)

### Price Anchoring Strategy
Which tier to position as the anchor, how to make the middle tier feel like the obvious choice, how to frame the top tier as aspirational rather than unattainable.

### "Most Popular" Designation
Which tier to badge and why — revenue optimization vs conversion rate optimization rationale.

### Annual vs Monthly Discount Strategy
Recommended discount percentage, how to present the savings, psychological framing.

### FAQ Section (8 Questions)
The 8 questions buyers ask before converting. Answer them directly and confidently. Include: "What happens when I exceed limits?", "Can I change plans?", "Do you offer discounts for nonprofits/startups/education?", "What payment methods?", "Is there a free trial?", and 3 product-specific questions.

### Comparison Table Structure
Columns, row categories, how to handle features where you're behind a competitor.

### Social Proof Placement
Where to place logos, testimonials, and review site badges relative to pricing to maximize conversion.

## Output
Pricing strategy document plus complete pricing page copy ready for a designer to implement.`,
    category: 'sales',
    tags: ['pricing', 'SaaS', 'positioning', 'conversion', 'landing-page'],
    difficulty: 'intermediate',
    useCase: 'Use when designing or redesigning a SaaS pricing page, launching a new pricing tier, or repositioning after competitive pressure.',
    authorUsername: 'promptarchitect',
    likes: 285,
    saves: 180,
    copies: 740,
    views: 4600,
    trendScore: 285*2 + 180*3 + 740 + 4600*0.2,
    trendingScore: 285*2 + 180*3 + 740 + 4600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Document',
    whyTrending: 'Pricing page design directly impacts MRR. Teams use this to build conversion-optimized pages grounded in pricing psychology.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 740,
    estimatedTokens: 830,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-30',
  },
  {
    id: 'lib-sal-012',
    title: 'Sales Territory & Account Planning',
    slug: 'sales-territory-account-planning',
    description: 'Produces a complete territory plan with account tiering, target account list, quarterly milestones, and pipeline targets by segment.',
    content: `You are a strategic account planner and sales operations leader who has built territory plans for field sales teams at enterprise software companies. Your task is to create a comprehensive territory plan for the following assignment.

## Inputs
- Sales Territory/Segment: [SALES_TERRITORY/SEGMENT] (e.g., Northeast Commercial, Financial Services vertical)
- Fiscal Period: [FISCAL_PERIOD] (e.g., FY2025, Q3-Q4 2025)
- Product/Service: [PRODUCT/SERVICE]
- Quota: [QUOTA_TARGET]
- Current Pipeline: [CURRENT_PIPELINE_VALUE]

## Territory Plan Structure

### Territory Analysis
- ICP density in this territory: estimated number of companies that fit ideal profile
- Market size and growth rate in this territory
- Competitive landscape: who owns the territory today, which competitors are strongest here
- Current customer base in territory: logos, NRR trend, expansion opportunities

### Account Tiering (Tier 1/2/3)
Define tiering criteria using: revenue potential, ICP fit score, competitive displacement probability, relationship warmth, strategic value. Assign criteria weights and score examples.

### Top 10 Target Accounts
For each account: company name placeholder, why they're a target (ICP fit evidence), estimated deal size, known pain points, connection map (who do you or your network know?), and prioritized next action.

### Quarterly Milestones
Break the fiscal period into quarters. For each quarter: pipeline generation target, new logo target, expansion target, key activities, and success checkpoints.

### Coverage Model
How to allocate time across Tier 1/2/3 accounts. Prospecting vs expansion vs existing customer time split. Event and travel calendar integration.

### Key Activities Calendar
Monthly activities: outbound campaigns, events to attend, executive outreach, account reviews, partner co-selling activities.

### Resource Requirements
What you need from marketing, SE, leadership, and partners to execute this plan.

### Pipeline Targets by Segment
Breakdown of pipeline target by: new logo vs expansion, industry vertical, company size band, product line.

### Risk Factors and Mitigation
Top 3 territory risks with specific mitigation plans and early warning signals.

## Output
Complete territory plan document in a format suitable for QBR presentation and management review.`,
    category: 'sales',
    tags: ['territory-planning', 'account-planning', 'sales-strategy', 'pipeline'],
    difficulty: 'advanced',
    useCase: 'Use when building or refreshing a sales territory plan for QBR, onboarding a new rep, or restructuring a sales team.',
    authorUsername: 'marketinglab',
    likes: 220,
    saves: 145,
    copies: 590,
    views: 3900,
    trendScore: 220*2 + 145*3 + 590 + 3900*0.2,
    trendingScore: 220*2 + 145*3 + 590 + 3900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Plan',
    whyTrending: 'Reps without territory plans waste time on low-probability accounts. This forces a data-driven prioritization approach that directly improves quota attainment.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 590,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-02',
  },
  {
    id: 'lib-sal-013',
    title: 'Commission Plan & Incentive Design',
    slug: 'commission-plan-incentive-design',
    description: 'Designs a complete sales compensation plan with base/variable split, quota methodology, accelerators, SPIFs, and anti-gaming safeguards.',
    content: `You are a sales compensation strategist who has designed commission plans for early-stage through public-company sales organizations. Your task is to design a sales compensation plan for the following role and context.

## Inputs
- Sales Role: [SALES_ROLE] (e.g., Account Executive, SDR, Sales Manager)
- Company Stage: [STAGE] (pre-seed/seed/Series A/Series B/growth/enterprise)
- ACV Range: [ACV_RANGE]
- Typical Sales Cycle: [SALES_CYCLE]
- Company Gross Margin: [GROSS_MARGIN_%]
- Current Plan Issues (if any): [EXISTING_ISSUES]

## Compensation Plan Design

### Base/Variable Split Recommendation
Based on role, stage, and ACV — what is the right split? Rationale for the split relative to market benchmarks. Include range if uncertainty exists.

### OTE Target
Recommended OTE range with percentile benchmarks (25th/50th/75th) for this role, stage, and geography. Data sources to validate.

### Quota Setting Methodology
Top-down vs bottom-up quota setting. How to derive individual quotas from revenue targets. Common quota-setting mistakes to avoid. Recommended quota-to-OTE ratio for this role.

### Accelerators (Above 100% Attainment)
Accelerator structure: at what thresholds do accelerators kick in, what multipliers at each tier (e.g., 1.25x at 100%, 1.5x at 120%, 2x at 150%). How to prevent accelerator abuse.

### SPIFs Design
When to use SPIFs, what to incentivize (new logos, specific products, Q-end push), payout structure, duration, avoiding SPIF fatigue.

### Multi-Year Deal Handling
How to credit multi-year deals: full TCV vs year-one ACV vs blended. Clawback provisions for early churn.

### Clawback Policy
When clawbacks apply, the clawback window (typically 90-180 days), how to handle rep departure, customer churn clawback design.

### Draw Policy
Recoverable vs non-recoverable draw. When draws are appropriate (new hire ramp, territory restructure). Duration and repayment terms.

### Anti-Gaming Measures
Common gaming behaviors for this plan design and how each is structurally prevented.

### Alignment with Company Margin
How the plan ensures reps are not incentivized to discount below acceptable margin floors.

### Plan Communication Strategy
How to roll out the plan, answer FAQs, and ensure reps understand their earning potential.

## Output
Complete compensation plan design document with a plan summary sheet reps can reference.`,
    category: 'sales',
    tags: ['compensation', 'commission', 'sales-ops', 'incentive-design', 'quota'],
    difficulty: 'advanced',
    useCase: 'Use when designing or redesigning a sales comp plan for a new role, new product line, or new company stage.',
    authorUsername: 'devdna',
    likes: 200,
    saves: 135,
    copies: 560,
    views: 3700,
    trendScore: 200*2 + 135*3 + 560 + 3700*0.2,
    trendingScore: 200*2 + 135*3 + 560 + 3700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'Bad comp plans drive top reps to competitors. Founders and sales ops leaders use this to build plans that motivate performance without creating perverse incentives.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 560,
    estimatedTokens: 890,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-04',
  },
  {
    id: 'lib-sal-014',
    title: 'Win/Loss Analysis Framework',
    slug: 'win-loss-analysis-framework',
    description: 'Designs a complete win/loss analysis program with buyer interview guides, sales rep surveys, competitive insight extraction, and product gap analysis.',
    content: `You are a sales intelligence analyst and product marketing strategist who has run win/loss programs at B2B SaaS companies. Your task is to design a comprehensive win/loss analysis program for the following company.

## Inputs
- Company: [COMPANY]
- Product: [PRODUCT]
- Sales Cycle: [TYPICAL_CYCLE_LENGTH]
- Deal Volume per Month: [DEALS_CLOSED_MONTHLY]
- Current Win Rate: [WIN_RATE_%]

## Win/Loss Program Design

### Buyer Interview Guide (15 Questions)
Questions for interviewing buyers from both won and lost deals. Focus on: decision-making process, evaluation criteria used, how you compared to alternatives, what almost made them choose differently, what they wish they'd known earlier, and how the sales process affected the decision. Write the exact questions — no leading language, designed for candid responses.

### Sales Rep Internal Survey (10 Questions)
Self-assessment survey for the rep on each deal: how they'd characterize the competitive situation, where they felt strongest/weakest, what they'd do differently, and key intel about the customer's decision process. Confidential version vs. management-reviewed version.

### Win/Loss Analysis Framework
Coding themes to tag across interviews: product-related (features, UX, performance), commercial (pricing, terms, ROI), sales process (rep quality, responsiveness, demo quality), relationship (trust, champion strength), and competitive positioning. How to extract statistically meaningful patterns from 20+ interviews.

### Competitive Insights Extraction
Template for documenting competitive intelligence per deal: which competitors appeared, their win themes when they beat you, their loss themes when you beat them, new arguments you hadn't heard before.

### Product Gap Identification
How to translate win/loss findings into a prioritized product roadmap input. Template for: feature gap name, frequency mentioned, deals impacted (won and lost), revenue at risk, competitor that has it.

### Sales Process Failure Points
How to identify systematic process breakdowns vs. rep-level issues. Common process failure points and how to measure them.

### Messaging Effectiveness Scoring
Score each core message from your pitch deck and website for resonance: how often buyers mentioned it positively, negatively, or not at all.

### Program Cadence
Interview volume targets per month, how to select deals to interview, how often to publish findings to stakeholders.

## Output
Win/loss program playbook, interview guides, survey templates, and analysis spreadsheet structure ready for immediate deployment.`,
    category: 'sales',
    tags: ['win-loss', 'competitive-intelligence', 'sales-ops', 'product-feedback'],
    difficulty: 'advanced',
    useCase: 'Use when launching a win/loss program from scratch or professionalizing an informal post-mortem process.',
    authorUsername: 'contentpro',
    likes: 215,
    saves: 140,
    copies: 570,
    views: 3800,
    trendScore: 215*2 + 140*3 + 570 + 3800*0.2,
    trendingScore: 215*2 + 140*3 + 570 + 3800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Framework',
    whyTrending: 'Companies that run structured win/loss programs improve win rates by 15-30% within 2 quarters. This prompt builds the entire program infrastructure.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 570,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-06',
  },
  {
    id: 'lib-sal-015',
    title: 'Sales Enablement Content Library Plan',
    slug: 'sales-enablement-content-library-plan',
    description: 'Designs a comprehensive sales content library with stage-mapped content types, gap analysis, sales plays, and a creation priority matrix.',
    content: `You are a sales enablement manager who has built content libraries for sales teams at B2B SaaS companies with 20-200 reps. Your task is to design a sales enablement content library strategy for the following product and audience.

## Inputs
- Product: [PRODUCT]
- ICP Segments: [ICP_SEGMENTS] (list 2-3, e.g., "enterprise IT directors, mid-market HR managers, SMB founders")
- Current Content State: [EXISTING_CONTENT_DESCRIPTION]
- Primary Sales Motion: [INBOUND / OUTBOUND / PRODUCT-LED / CHANNEL]

## Content Library Design

### Content Mapping by Buyer Stage

**Awareness Stage**
Content types needed (blog posts, thought leadership, social content, educational videos, industry reports). What questions buyers are asking at this stage. Who creates it (marketing vs sales).

**Consideration Stage**
Content types needed (case studies, comparison guides, demo videos, ROI calculators, webinars). How content arms reps for mid-funnel conversations. Personalization by ICP segment.

**Decision Stage**
Content types needed (proposals, security documentation, implementation guides, reference call facilitation, executive briefing decks). How to accelerate legal and procurement stages.

### Existing Content Audit Framework
Scoring rubric to evaluate current content: relevance, accuracy, format quality, ICP specificity, stage alignment, recency. Output: content health score per asset.

### Content Gap Analysis
After auditing existing content: identify the 10 highest-priority gaps by revenue impact × frequency of need.

### Creation Priority Matrix
Plot gaps on: effort to create (low/medium/high) vs. deal impact (low/medium/high). Prioritize high-impact, low-effort items first. Build a 90-day content creation sprint plan.

### Sales Play Templates (3)
- New logo acquisition play (for your primary ICP)
- Competitive displacement play
- Expansion/upsell play
Each play: trigger condition, target audience, content sequence, messaging guide, success metrics.

### Objection Handling One-Pagers (5 Topics)
The 5 objections most likely to kill deals. Each one-pager: the objection, the reframe, 3 proof points, the question that closes it.

### ROI Calculator Design
Inputs (buyer-supplied), assumptions (defensible defaults), output (headline ROI, payback period, 3-year value). How to make it credible without over-promising.

### Content Tagging Taxonomy
Tag structure for: buyer stage, ICP segment, sales play, product area, content type, date created. Makes content searchable and measurable.

## Output
Sales enablement content strategy document plus a 90-day content calendar and enablement launch plan.`,
    category: 'sales',
    tags: ['sales-enablement', 'content-library', 'sales-plays', 'go-to-market'],
    difficulty: 'intermediate',
    useCase: 'Use when building a sales enablement function from scratch or auditing and rebuilding an existing content library.',
    authorUsername: 'builderai',
    likes: 230,
    saves: 155,
    copies: 610,
    views: 4000,
    trendScore: 230*2 + 155*3 + 610 + 4000*0.2,
    trendingScore: 230*2 + 155*3 + 610 + 4000*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Plan',
    whyTrending: 'Reps spend up to 30% of their time searching for or creating content. A well-organized enablement library recovers that time and improves message consistency.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 610,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-08',
  },
]
