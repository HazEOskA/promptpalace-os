import type { Prompt } from './prompts'

export const STARTUPS_PROMPTS: Prompt[] = [
  {
    id: 'lib-str-001',
    title: 'Startup Idea Validation Framework',
    slug: 'startup-idea-validation-framework',
    description: 'Systematically validate a startup idea across 6 dimensions with a scored assessment, top risks, and 30-day validation experiments.',
    content: `You are a venture investor and startup operator who has evaluated thousands of startup ideas. Apply a rigorous validation framework to [STARTUP_IDEA] and produce a scored validation report.

## Validation Framework — 6 Dimensions

### Dimension 1: Problem Validation
Is the problem real, frequent, and painful enough to motivate behavior change?
- Articulate the problem in the customer's exact language (not founder language)
- Frequency: how often does this problem occur for the target customer?
- Intensity: how much does it hurt on a 1–10 scale and what evidence supports that rating?
- Current behavior: what are people doing today to solve or cope with this problem?
- Willingness to switch: what switching cost does an existing behavior represent?
Score 1–5 with evidence required for any score above 3.

### Dimension 2: Solution Validation
Is the proposed solution the right approach to this problem?
- Solution description: what exactly does [STARTUP_IDEA] do?
- Solution-problem fit: does the solution address the root cause or only a symptom?
- Minimum viable version: what is the least the solution needs to do to create meaningful value?
- Technical feasibility: what are the 3 most difficult technical challenges?
- Regulatory or compliance risk: identify any obvious legal or regulatory barriers
Score 1–5.

### Dimension 3: Market Validation
Is the market large enough to build a venture-scale business?
- TAM (Total Addressable Market): define and calculate top-down
- SAM (Serviceable Addressable Market): realistically accessible segment
- SOM (Serviceable Obtainable Market): realistic 3-year capture given resources
- Market growth rate and direction (expanding vs contracting)
- Market timing: is the market ready now, too early, or already consolidating?
Score 1–5.

### Dimension 4: Team Validation
Does the founding team have the right to win in this market?
- Domain expertise: does the team have direct experience with this problem or customer?
- Technical capability: can the team build the product, or do they need to hire before building?
- Network advantage: does the team have unfair access to early customers, capital, or partners?
- Missing critical roles: what is the most important hire the team needs to make first?
Score 1–5.

### Dimension 5: Business Model Validation
Is there a credible path to a profitable business?
- Revenue model: how does [STARTUP_IDEA] make money? (SaaS / transactional / marketplace / usage-based / other)
- Pricing hypothesis: what would customers pay and why?
- Unit economics sketch: estimated CAC, LTV, and payback period at steady state
- Revenue concentration risk: does the model depend on a small number of large customers?
Score 1–5.

### Dimension 6: Moat Assessment
Can the business build defensibility before it gets copied?
- Identify the most likely moat type: network effects, switching costs, proprietary data, brand, regulatory, or scale
- Timeline to meaningful defensibility (months): realistic estimate
- Incumbent response: how would established players respond to early traction?
- Copycat risk: how quickly could a well-funded competitor replicate the core value?
Score 1–5.

## Validation Scorecard
Summary table: Dimension | Score | Key Evidence | Critical Assumption to Test

Total score interpretation:
- 26–30: Strong signal — proceed to customer discovery sprint
- 20–25: Mixed signal — address 2 lowest-scoring dimensions before building
- 14–19: Weak signal — consider pivoting hypothesis before investing significant capital
- Below 14: Significant issues — do not build until core assumptions are validated

## Top 3 Risks
The three most dangerous assumptions in [STARTUP_IDEA], ranked by: (probability of being wrong × cost of being wrong). For each: describe the risk, explain why it matters, and note the cheapest way to test it.

## 30-Day Validation Experiments
5 specific experiments to run in the next 30 days, each under $500:
For each: hypothesis being tested, experiment design, success criterion, cost estimate, and time required.

## Output
Validation scorecard with all 6 dimension scores and evidence, top 3 ranked risks, and 5 prioritized 30-day experiments.`,
    category: 'startups',
    tags: ['validation', 'idea-validation', 'startup', 'market-research', 'mvp'],
    difficulty: 'intermediate',
    useCase: 'Use before building anything to stress-test the core assumptions behind a startup idea and prioritize what to validate first.',
    authorUsername: 'builderai',
    likes: 385,
    saves: 248,
    copies: 985,
    views: 5900,
    trendScore: 385*2 + 248*3 + 985 + 5900*0.2,
    trendingScore: 385*2 + 248*3 + 985 + 5900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Assessment',
    whyTrending: 'Most startups fail due to poor problem-solution fit validated too late; this framework surfaces fatal flaws before significant capital is invested.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 985,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-04',
  },
  {
    id: 'lib-str-002',
    title: 'Investor Pitch Deck Outline',
    slug: 'investor-pitch-deck-outline',
    description: '12-slide pitch deck blueprint for any startup raising a round: key message per slide, data needed, investor questions preemptively answered.',
    content: `You are a pitch coach and former VC analyst who has reviewed thousands of decks. Build a complete 12-slide pitch deck blueprint for [STARTUP] raising [ROUND].

## Pitch Deck Philosophy
A pitch deck has one job: earn the next meeting. It does not close deals — it opens conversations. Every slide must answer one implicit investor question: "Why should I keep reading?" Slides that add information without advancing the narrative are cut.

## Slide-by-Slide Blueprint

For each of the 12 slides provide:
- **Key message**: the single sentence the investor should take away from this slide
- **Data and visuals needed**: specific assets to gather before designing this slide
- **Three things to include**: the non-negotiable elements
- **Investor question this slide must preemptively answer**: what an experienced investor is thinking when they see this slide

### Slide 1: Cover
First impressions are set before a word is read. What should the cover communicate in 3 seconds?

### Slide 2: Problem
The most underrated slide in any deck. Most founders describe the problem as they experience it — not as the customer experiences it. How to present the problem with visceral, customer-felt authenticity.

### Slide 3: Solution
Do not lead with features. Lead with transformation. What does the world look like for the customer after [STARTUP]'s solution exists in their life or workflow?

### Slide 4: Market
The two most common mistakes on the market slide: markets too large to be credible, or too small to be interesting. How to size TAM/SAM/SOM in a way that is both accurate and compelling.

### Slide 5: Product (Demo Narrative)
Most investors review decks asynchronously without a founder present. How to make the product demo slide work without a live demo — the narrative arc that replaces the live walkthrough.

### Slide 6: Traction
Traction is the single most de-risking slide in the deck. What counts as traction at [ROUND] stage, how to present early signals honestly, and how to contextualize growth rate rather than absolute numbers.

### Slide 7: Business Model
Investors want to understand unit economics before they want to understand revenue model. What to show on this slide beyond the pricing page.

### Slide 8: Go-to-Market
The GTM slide should answer: who is the first customer, how do you reach them, and what does it cost to acquire them? Not a channel list — a sequenced acquisition strategy.

### Slide 9: Competition
The "we have no competition" statement kills credibility immediately. How to map the competitive landscape honestly and use it to sharpen the positioning rather than apologize for it.

### Slide 10: Team
Investors back people. What credentials, experiences, and stories belong on this slide — and what is conspicuously absent (the missing skill set that must be acknowledged proactively).

### Slide 11: Financials
At [ROUND] stage, what financial projections are appropriate and what level of detail is expected? The 3-year model that shows you understand your business without overpromising.

### Slide 12: Ask
The most common mistake: failing to make a specific ask. What to include — the raise amount, the use of funds (broken into 3–4 buckets), the timeline to the next milestone, and what that milestone unlocks.

## Appendix Slides
5 recommended appendix slides and when investors ask for each:
- Detailed unit economics
- Customer case studies
- Technical architecture diagram
- Expanded market research methodology
- Founding team extended bios

## Narrative Flow Review
After building all 12 slides, evaluate the deck on this rubric: Does each slide logically necessitate the next? Is there a clear problem → solution → evidence → opportunity arc? What is the emotional peak of the deck?

## Common [ROUND]-Stage Deck Mistakes
5 specific mistakes founders make at [ROUND] stage that kill credibility with investors, with corrections for each.

## Output
Complete 12-slide blueprint with key message, required data, three elements, and preemptive investor question for every slide, plus appendix recommendations and narrative flow evaluation.`,
    category: 'startups',
    tags: ['pitch-deck', 'fundraising', 'investor', 'presentation', 'startup'],
    difficulty: 'intermediate',
    useCase: 'Use when preparing a fundraising pitch deck to ensure every slide earns its place and preemptively addresses investor skepticism.',
    authorUsername: 'promptarchitect',
    likes: 425,
    saves: 275,
    copies: 1100,
    views: 6500,
    trendScore: 425*2 + 275*3 + 1100 + 6500*0.2,
    trendingScore: 425*2 + 275*3 + 1100 + 6500*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Blueprint',
    whyTrending: 'Fundraising remains one of the highest-stakes activities a founder undertakes; structured deck frameworks reduce the cognitive load dramatically.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 1100,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-20',
  },
  {
    id: 'lib-str-003',
    title: 'MVP Scoping Workshop',
    slug: 'mvp-scoping-workshop',
    description: 'Scope the tightest possible MVP for a startup idea that validates the core hypothesis, with a feature priority matrix and scope creep traps.',
    content: `You are a product leader who has scoped MVPs at multiple venture-backed startups. Run a complete MVP scoping workshop for [STARTUP_IDEA] designed to validate [CORE_HYPOTHESIS].

## Workshop Foundation

### The Core Hypothesis Statement
Restate [CORE_HYPOTHESIS] in testable, falsifiable form:
"We believe [specific customer] will [specific behavior] because [specific reason]. We will know this is true when [specific, measurable signal]."

If [CORE_HYPOTHESIS] cannot be restated in this form, the hypothesis itself is the first problem to solve.

### Riskiest Assumption Identification
List all assumptions embedded in [STARTUP_IDEA]. Rank them by: (probability of being wrong × cost of discovering this late). The top 3 riskiest assumptions must be the primary validation targets for the MVP.

## Minimum Feature Set

### User Journey Map
Map the end-to-end journey of the primary user from problem awareness through value delivered:
Problem trigger → discovery of solution → onboarding → first value moment → sustained engagement

Identify the single most critical step in this journey. The MVP must deliver this step perfectly; all others can be rough.

### Feature Evaluation Matrix
For each proposed feature:
- Does it directly test [CORE_HYPOTHESIS]? (Yes/No — if No, it does not belong in the MVP)
- Is it technically necessary to deliver the core value moment? (Yes/No)
- Can it be faked, manualized, or deferred to Phase 2? (Yes/No)

Result: a feature list reduced to only what is genuinely necessary.

### The "Concierge MVP" Test
Before building anything: could you deliver the core value to 5–10 users manually without technology? If yes, do this first. The learnings from manual delivery shape what to build, not the other way around.

## Success Metrics
Define the exact metrics that would constitute a validated MVP:
- **Primary metric**: the single number that proves or disproves [CORE_HYPOTHESIS]
- **Secondary metric**: one supporting signal that adds confidence
- **Failure threshold**: the result below which the hypothesis is considered falsified
- **Success threshold**: the result above which you move to Phase 2 build
- **Timeline**: how many weeks and how many users are needed to reach statistical confidence?

## Build vs Buy vs Fake Analysis
For each technical component of the MVP, evaluate:
- Build from scratch (when and why)
- Buy or use an existing tool (Bubble, Webflow, Zapier, APIs — specific recommendations for [STARTUP_IDEA])
- Fake it manually (Wizard of Oz approach — automate later)

Goal: get to the first testable version in the least calendar time, not the least financial cost.

## Timeline Estimate
A realistic week-by-week build schedule assuming [AVAILABLE RESOURCES]:
- Week 1: What is defined, designed, and scoped
- Weeks 2–4: Core build
- Week 5: Internal testing and bug fixing
- Week 6: First user sessions

Buffer calculation: what is the most likely delay and how many days should be built in?

## Scope Creep Traps
The 5 most common scope creep patterns that kill MVPs and how to defend against each:
1. "While we're building this, we might as well add…"
2. "Users are going to ask for X on day one"
3. "We need [feature] to be enterprise-ready"
4. "The tech debt from the quick version will slow us down later"
5. "We can't launch without [authentication/admin panel/analytics dashboard]"

## Output
Testable hypothesis statement, riskiest assumption ranking, minimum feature set with evaluation matrix, success/failure metric thresholds, build/buy/fake recommendation, 6-week timeline, and scope creep defense guide.`,
    category: 'startups',
    tags: ['mvp', 'product', 'scoping', 'lean-startup', 'validation'],
    difficulty: 'intermediate',
    useCase: 'Use when a founding team needs to cut a product vision down to a testable MVP that validates the riskiest assumptions first.',
    authorUsername: 'builderai',
    likes: 312,
    saves: 205,
    copies: 870,
    views: 5200,
    trendScore: 312*2 + 205*3 + 870 + 5200*0.2,
    trendingScore: 312*2 + 205*3 + 870 + 5200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Workshop',
    whyTrending: 'Founders consistently over-build their first version; a structured scoping framework saves months of wasted development time.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 870,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-06',
  },
  {
    id: 'lib-str-004',
    title: 'Fundraising Strategy & Investor Targeting',
    slug: 'fundraising-strategy-investor-targeting',
    description: 'Complete fundraising playbook: round sizing, use of funds, investor targeting, data room contents, SAFE vs priced round, timeline, and negotiation leverage.',
    content: `You are a startup fundraising advisor who has helped founders raise capital from pre-seed through Series B. Build a complete fundraising playbook for [STARTUP] raising [ROUND].

## Round Sizing Analysis
Do not raise the maximum you think investors will give you. Raise the minimum needed to hit the next fundable milestone with a 20% buffer:
- Identify the 3–4 milestones that would de-risk the company enough for the next round
- Calculate the burn required to reach each milestone
- Recommended raise amount with rationale
- Target post-money valuation range (not a single number) and how you arrived at it
- Anti-dilution guidance: what ownership percentage to protect at [ROUND]

## Use of Funds Breakdown
Investors scrutinize use of funds for signs of discipline and focus. Provide a recommended breakdown:
- Headcount (which roles, in what sequence, and the rationale for each)
- Product development
- Go-to-market
- Infrastructure and operations
- Reserve buffer (percentage and rationale)

Present as a simple allocation table and a narrative explanation of the strategic priorities it reflects.

## Investor Targeting Criteria
Not all capital is the same. Define the ideal investor profile for [STARTUP]:
- Stage fit: which investors lead at [ROUND] stage?
- Sector fit: who has deep knowledge and portfolio context in [STARTUP]'s space?
- Value-add profile: what non-capital help is most valuable right now? (Customers, hiring, regulatory, technical)
- Portfolio conflict check: how to screen for competitors in a firm's portfolio
- Geography preferences and limitations

Build a tiered target list framework:
- Tier 1: ideal lead investors (3–5 names with specific rationale)
- Tier 2: strong follow-on investors (10–15 names)
- Tier 3: angels and strategic investors for specific value (5–10 names)

## Warm Intro Mapping
Cold outreach to VCs has a sub-2% meeting rate. Warm intro strategy:
- Map your existing network to target investors using LinkedIn second-degree connections
- Identify portfolio founders at target firms who can make peer introductions
- Advisor and angel network leveraging strategy
- Conference and event strategy for natural meeting creation
- Forwardable email template for requesting intros (the intro you make easy to forward gets sent)

## Data Room Contents
Build a data room before the first meeting so you can share it the moment investors ask:
- Tier 1 (always available): pitch deck, executive summary, financial model
- Tier 2 (shared after first meeting): cap table, incorporation docs, key contracts, customer data room
- Tier 3 (shared in due diligence): detailed financials, legal agreements, technical documentation

Data room structure and tool recommendation (Notion vs Docsend vs Drive — tradeoffs for [ROUND]).

## SAFE vs Priced Round Analysis
For [ROUND], evaluate which instrument is appropriate:
- SAFE (Simple Agreement for Future Equity): advantages, disadvantages, MFN clause, pro-rata rights
- Convertible note: advantages, disadvantages, interest rate and maturity date considerations
- Priced equity round: when it makes sense, legal costs, valuation negotiation complexity
- Recommendation for [STARTUP] with rationale

## Fundraising Timeline
A realistic 16-week fundraising timeline from prep through close:
- Weeks 1–2: materials preparation and data room assembly
- Weeks 3–4: warm intro outreach begins, first meetings scheduled
- Weeks 5–10: active meeting cycle, follow-ups, due diligence begins
- Weeks 11–13: term sheet negotiation, selection of lead
- Weeks 14–16: legal docs, close, wire

Creating urgency without lying: legitimate tactics for compressing the timeline.

## Negotiation Leverage & Common Terms
Key terms to understand before receiving a term sheet:
- Valuation cap and discount rate (for SAFEs and notes)
- Pro-rata rights: why you want to give them to the right investors
- Information rights: what you must disclose post-investment
- Board composition: what to protect at early stages
- Liquidation preference and participation: the implications for founders

## Output
Complete fundraising playbook with recommended raise amount and rationale, use of funds table, investor targeting criteria, tiered target list framework, data room structure, instrument recommendation, 16-week timeline, and term negotiation guide.`,
    category: 'startups',
    tags: ['fundraising', 'investors', 'venture-capital', 'term-sheet', 'pitch'],
    difficulty: 'advanced',
    useCase: 'Use when preparing for a fundraising round to ensure strategy, targeting, and materials are optimized before the first investor meeting.',
    authorUsername: 'devdna',
    likes: 295,
    saves: 210,
    copies: 880,
    views: 5400,
    trendScore: 295*2 + 210*3 + 880 + 5400*0.2,
    trendingScore: 295*2 + 210*3 + 880 + 5400*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'Founders with structured fundraising strategies close rounds 40% faster; most first-time founders waste months on avoidable process mistakes.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 880,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-09',
  },
  {
    id: 'lib-str-005',
    title: 'Product-Market Fit Assessment',
    slug: 'product-market-fit-assessment',
    description: 'Comprehensive PMF assessment: Sean Ellis survey, retention analysis, NPS cohort analysis, qualitative signals, and pivot hypothesis generation if PMF is weak.',
    content: `You are a growth advisor who has helped dozens of startups find and measure product-market fit. Conduct a complete PMF assessment for [PRODUCT] with [USER_BASE].

## PMF Definition (Operationalized)
PMF is not a feeling. It is a measurable state where a defined customer segment values your product so much that its loss would be genuinely painful. The goal of this assessment is to locate [PRODUCT] on the PMF spectrum with evidence, not intuition.

## Assessment Framework — 5 Methods

### Method 1: Sean Ellis PMF Survey
The gold-standard qualitative measure. Deploy to active users who have experienced core value:
- The question: "How would you feel if you could no longer use [PRODUCT]?" (Very disappointed / Somewhat disappointed / Not disappointed / N/A — I no longer use it)
- Benchmark: 40%+ "very disappointed" indicates PMF for most B2B and consumer products
- Segmentation: break results by cohort (acquisition channel, role, company size, use case) — PMF often exists in a subset before it exists across the whole user base
- Follow-up questions: "What would you use instead?", "What is the main benefit you get from [PRODUCT]?", "What type of person do you think would benefit most?"
- Minimum sample size and how to recruit respondents without biasing the results

### Method 2: Retention Curve Analysis
Retention curves are the most honest signal of PMF. A product without PMF has a retention curve that approaches zero — users try and abandon. A product with PMF has a curve that flattens.
- How to pull cohort retention data from [PRODUCT]'s analytics
- The retention benchmark that signals PMF by product category (B2B SaaS / consumer app / marketplace)
- Reading the retention curve: what a flattening curve means, what a declining curve means
- D1, D7, D30 benchmarks for [PRODUCT]'s category

### Method 3: NPS Cohort Analysis
Net Promoter Score correlated with cohort behavior reveals which users love the product enough to evangelize:
- How to run a simple in-app NPS survey without disrupting the product experience
- NPS benchmark by B2B vs consumer category
- Cohort overlay: do NPS promoters have a different retention curve than passives and detractors?
- The most important NPS question beyond the score: "What is the main reason for your score?" — how to analyze open-text responses at scale

### Method 4: Qualitative PMF Signals
The leading indicators of PMF that appear before the quantitative data is statistically significant:
- Unsolicited referrals: users bringing in other users without any prompting
- Organic PR requests: journalists and podcasters reaching out rather than being pitched
- Feature request patterns: users asking for more of the same rather than different
- "Zombie users": users who churned but returned without re-marketing
- Sales cycle compression: early customers taking longer to convert; PMF customers deciding faster

### Method 5: Anti-Patterns (Signs PMF is Absent)
The 10 most common false positives that founders mistake for PMF:
- High signups but low activation
- Active use only when prompted (email reminder dependency)
- Customers who love the product but would not pay for it
- Positive qualitative feedback that does not translate to retention
- Growth driven entirely by founder-assisted selling

## PMF Score Interpretation
Combine all 5 methods into a summary PMF score (0–100 scale with breakpoints defined). Where does [PRODUCT] sit?

## Weak PMF: Pivot Hypothesis Generation
If PMF assessment indicates weak signal, generate 3 pivot hypotheses using the ICP Pivot Matrix:
- **Customer segment pivot**: same product, different customer (who else has this pain?)
- **Problem pivot**: same customer, different pain (what else hurts them that you could solve?)
- **Solution pivot**: same customer and problem, different solution approach (is there a better way to solve it?)

For each pivot hypothesis: evidence from the existing user base that points toward this direction, validation experiment to run in 30 days.

## PMF Maintenance Plan
PMF is not permanent. It can be lost as the market, competition, or customer expectations evolve. Build a quarterly PMF monitoring routine:
- Which metrics to track continuously
- When to re-run the Sean Ellis survey
- How to detect PMF erosion before churn spikes

## Output
Complete PMF assessment with results across all 5 methods, PMF score summary, leading/lagging indicator dashboard, and (if weak PMF) 3 prioritized pivot hypotheses with validation experiments.`,
    category: 'startups',
    tags: ['product-market-fit', 'retention', 'nps', 'growth', 'product'],
    difficulty: 'advanced',
    useCase: 'Use when a startup has initial users and needs to rigorously assess whether they have achieved product-market fit before scaling.',
    authorUsername: 'marketinglab',
    likes: 268,
    saves: 185,
    copies: 760,
    views: 4800,
    trendScore: 268*2 + 185*3 + 760 + 4800*0.2,
    trendingScore: 268*2 + 185*3 + 760 + 4800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '13 min',
    outputType: 'Assessment',
    whyTrending: 'Premature scaling before PMF is the #1 startup killer; rigorous assessment frameworks help founders make the go/no-go decision with data.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 760,
    estimatedTokens: 830,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-14',
  },
  {
    id: 'lib-str-006',
    title: 'Go-to-Market Launch Playbook',
    slug: 'go-to-market-launch-playbook',
    description: 'A 90-day GTM playbook from pre-launch positioning through post-launch optimization, with specific tactics, owners, and metrics.',
    content: `You are a GTM strategist who has led product launches at high-growth startups. Create a complete 90-day go-to-market playbook for [PRODUCT] targeting [ICP].

## GTM Foundation

### ICP Definition (Granular)
[ICP] should be a specific person, not a category. Define:
- Job title, seniority level, company size, and industry vertical
- Day-in-the-life description: what does [ICP] spend their day doing?
- Problem context: exactly when and how does [ICP] encounter the problem [PRODUCT] solves?
- Current solution: what is [ICP] doing today to address this?
- Buying context: does [ICP] have budget authority? Who else is in the buying decision?

### Positioning Statement
Geoffrey Moore formula: "For [ICP] who [has this specific problem], [PRODUCT] is a [product category] that [key benefit]. Unlike [primary alternative], our product [key differentiator]."

Provide 3 positioning variations: one for each core message angle (pain relief / outcome achievement / unique capability).

### Messaging Hierarchy
- Headline message (the single claim that opens every conversation)
- 3 supporting proof points (specific, not vague)
- Objection handling: top 3 objections and the preemptive response to each
- One-liner (for social bios, email signatures, intros): 15 words maximum

## Phase 1: Pre-Launch (Days 1–30)

### Waitlist & Community Building
- Landing page must-haves: headline (outcome-focused, not feature-focused), 3 proof points, social proof, email capture, and a reason to refer
- Waitlist incentive design: early access, founder tier pricing, or exclusive content
- Referral mechanics to make the waitlist self-propagating
- Seeding early community: where does [ICP] already congregate? (Subreddits, Slack communities, LinkedIn groups, newsletters)
- Content warm-up sequence: 3 pieces of content published before launch to establish authority

### Distribution Channel Selection
For [ICP], rank the top 3 acquisition channels by potential CPL and CAC:
- Content SEO
- Community (Reddit, Slack, Discord, forums)
- Direct outbound (email, LinkedIn)
- Partner / integration channel
- Press and earned media
- Product Hunt / launch platform

Provide specific targeting criteria and initial budget recommendation for each selected channel.

## Phase 2: Launch Week (Days 31–37)
A day-by-day launch week plan:
- Day 1: Email waitlist + Product Hunt submission + founder social posts
- Day 2: Community seeding across 5 target communities (post templates provided)
- Day 3: Press outreach to 3 tier-2 publications and 5 newsletters
- Day 4: Partner activation (co-promotion, integration announcement)
- Day 5: Retrospective metrics review + optimization decisions
- Days 6–7: Follow-up content based on launch feedback

Launch week KPIs: signups, activation rate, organic social mentions, press placements, and CAC by channel.

## Phase 3: Post-Launch — Feedback Loops & Optimization (Days 38–90)

### Feedback Collection System
- Week 1 post-launch: direct founder calls with every paying customer (script provided)
- Week 2: activation survey (3-question in-app survey triggered at first value moment)
- Week 4: NPS pulse survey
- Ongoing: structured sales call debrief template to capture objections and buying triggers

### CAC Measurement Setup
How to set up proper attribution for [PRODUCT]'s acquisition channels:
- UTM parameter structure
- Self-reported attribution survey
- 30-day CAC calculation by channel at first meaningful sample size

### Channel Optimization Decisions
For each channel, define the specific metrics and timeframes that trigger these decisions:
- Continue and scale: what does success look like at day 60?
- Optimize and retest: what partial success warrants iteration?
- Cut: what failure threshold triggers cutting investment in this channel?

## Metrics Dashboard
Weekly GTM metrics to track through the first 90 days:
- Acquisition: visits, signups, CAC by channel
- Activation: % of signups reaching first value moment within 7 days
- Revenue: MRR, ACV, conversion rate from signup to paid
- Retention: 30-day and 60-day retention by cohort
- NPS: score and trend

## Output
Complete 90-day GTM playbook with ICP definition, positioning statement and messaging hierarchy, waitlist landing page brief, pre-launch content plan, day-by-day launch week schedule, post-launch feedback system, and metrics dashboard.`,
    category: 'startups',
    tags: ['gtm', 'go-to-market', 'launch', 'acquisition', 'product-launch'],
    difficulty: 'advanced',
    useCase: 'Use when preparing to launch a new product or entering a new market segment with a structured, metrics-driven approach.',
    authorUsername: 'devdna',
    likes: 320,
    saves: 225,
    copies: 920,
    views: 5600,
    trendScore: 320*2 + 225*3 + 920 + 5600*0.2,
    trendingScore: 320*2 + 225*3 + 920 + 5600*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'Most product launches fail from poor execution rather than bad products; a structured 90-day playbook prevents the most common launch mistakes.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 920,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-01',
  },
  {
    id: 'lib-str-007',
    title: 'Startup Financial Model Builder',
    slug: 'startup-financial-model-builder',
    description: 'Financial model structure for startups: revenue assumptions, COGS, gross margin benchmarks, opex build-up, burn rate, unit economics, and three scenarios.',
    content: `You are a startup CFO and financial modeling expert who has built models for pre-seed through Series B companies. Build a comprehensive financial model structure and narrative for [STARTUP_TYPE].

## Model Philosophy
A startup financial model is not a prediction — it is a structured set of assumptions that forces clarity about how the business works. The goal is not accuracy (which is impossible at early stage) but logical consistency between assumptions and outputs.

## Revenue Model Architecture
Define the revenue engine appropriate for [STARTUP_TYPE]:

### For SaaS:
- ARR/MRR build: new ARR from new customers + expansion ARR − churned ARR
- Pricing tier assumptions (by plan, by segment)
- Net Revenue Retention target and how you will achieve it
- Expansion revenue mechanics (seat-based / usage-based / upsell)

### For Marketplace:
- GMV build: number of transactions × average order value
- Take rate assumption and trajectory
- Supply and demand growth independence

### For Transactional/Usage:
- Volume assumptions and growth drivers
- Revenue per unit and margin by product line

Provide the specific formula structure for [STARTUP_TYPE]'s revenue model.

## COGS Structure
Identify every cost that is directly attributable to delivering the product:
- Hosting and infrastructure (% of revenue target at scale)
- Customer support cost per customer
- Payment processing fees
- Third-party API and data costs
- Professional services or implementation (if applicable)

Gross margin benchmark for [STARTUP_TYPE] at early stage, growth stage, and at scale.

## Operating Expense Build-Up
Build the opex model from first principles — not as a percentage of revenue but as a hiring and program plan:

### Headcount Model
- Roles to hire in Year 1, Year 2, Year 3 (sequenced by strategic priority)
- Fully loaded cost per role (salary + benefits + equity + recruiting cost)
- Headcount as a driver of capacity: what does each hire unlock?

### Non-Headcount Opex
- Sales and marketing spend (tied to CAC model)
- R&D tooling and infrastructure
- G&A (office, legal, accounting, insurance — rule of thumb by stage)

## Unit Economics Model

### CAC Calculation
- Blended CAC: total sales and marketing spend ÷ new customers acquired
- CAC by channel (essential for channel mix optimization decisions)
- Sales efficiency ratio: new ARR ÷ sales and marketing spend

### LTV Calculation
- LTV = ARPU × gross margin % ÷ monthly churn rate
- LTV by customer segment (enterprise vs SMB vs self-serve)
- LTV:CAC benchmark: what is healthy for [STARTUP_TYPE] at this stage?

### CAC Payback Period
- CAC payback = CAC ÷ (ARPU × gross margin %)
- Industry benchmarks and what your payback period implies about capital efficiency

## Burn Rate & Runway
- Monthly gross burn (all cash out)
- Monthly net burn (gross burn − revenue)
- Runway at current burn rate
- Burn multiple: net burn ÷ net new ARR — the capital efficiency metric investors focus on post-2022

## Three Scenarios
Build base, bull, and bear scenarios by adjusting 3 key assumptions:
- **Base case**: management's operating plan (conservative but credible)
- **Bull case**: top-quartile execution on all 3 key assumptions
- **Bear case**: a year where 2 of 3 key assumptions are missed

For each scenario: Month 12 and Month 24 ARR, monthly burn, and runway at current cash level.

## Model Assumptions Dashboard
A single page summarizing every material assumption in the model with the evidence or benchmark behind each:
- Revenue assumptions: growth rate, churn, expansion rate
- CAC assumptions: blended CAC, payback period
- Headcount plan: roles and timing
- Gross margin targets
- Burn rate progression

## Investor-Ready Presentation Format
How to present the model to investors:
- Lead with unit economics (not the 3-year revenue projection)
- Show the ARR bridge (where growth comes from: new customers vs expansion vs churn reduction)
- Contextualize burn against the milestones it funds
- Explain the assumptions, not just the numbers

## Output
Complete financial model structure for [STARTUP_TYPE] with revenue formula, COGS breakdown, opex build, unit economics model, three scenarios, and assumptions dashboard.`,
    category: 'startups',
    tags: ['financial-model', 'unit-economics', 'saas-metrics', 'fundraising', 'cfo'],
    difficulty: 'advanced',
    useCase: 'Use when building the first financial model for a startup or preparing financial materials for an investor meeting.',
    authorUsername: 'contentpro',
    likes: 235,
    saves: 172,
    copies: 720,
    views: 4400,
    trendScore: 235*2 + 172*3 + 720 + 4400*0.2,
    trendingScore: 235*2 + 172*3 + 720 + 4400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Investors scrutinize financial models more carefully in the current climate; founders who understand their unit economics at a deep level close rounds faster.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 720,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-17',
  },
  {
    id: 'lib-str-008',
    title: 'Founding Team Equity Split Framework',
    slug: 'founding-team-equity-split-framework',
    description: 'Structured framework for equitable equity splits: contribution-based methodologies, risk weighting, vesting schedules, advisor equity norms, and option pool sizing.',
    content: `You are a startup attorney and founder coach who has helped hundreds of founding teams navigate equity splits. Guide a structured equity split conversation for [STARTUP_TEAM].

## Why Equity Splits Are Hard
Most founding teams make the single most impactful financial decision of their company's life in a 30-minute conversation based on gut feel and a desire to avoid conflict. This framework forces the right conversation to happen before resentment does.

## Contribution-Based Methodology: The Grunt Fund / Slicing Pie Approach

### Phase 1: Inventory All Contributions
Before splitting anything, document every contribution each founder has already made:
- **Time**: hours × fair market rate for the role (research current rates for each role)
- **Cash**: money invested in the company, at 2× risk multiplier
- **Idea**: the originating concept carries some weight, but less than execution
- **Relationships**: specific customer introductions, investor intros, key hires that have materialized
- **IP**: code written, designs created, patents or proprietary methodologies brought in

For each category, each founder rates themselves and the group agrees. Disagreements reveal the real conversation.

### Phase 2: Weight Future Contributions
The most common mistake: splitting based on past contributions when most of the value will be created in the future. Build a forward-looking contribution model:
- How many hours per week will each founder commit for the next 12 months?
- What is each founder's fair market rate for their role?
- What is each founder's risk exposure? (Full-time with no salary vs moonlighting significantly affects their contribution risk weighting)

### Phase 3: Risk Weighting Factors
Adjust the raw contribution calculation for risk factors:
- Opportunity cost: what is each founder giving up? (High-paying job, significant career momentum)
- Financial risk: is anyone contributing significant personal capital?
- Commitment risk: is there a founder who is not yet full-time? (Consider deferred equity for deferred commitment)
- Domain risk: whose skills are most critical and most difficult to replace at this stage?

## Dynamic Equity Split vs Fixed Split
The Grunt Fund approach creates a dynamic split that adjusts as contributions change. This is ideal for teams that have not yet fully committed or where contribution levels are uncertain.

Fixed split (the traditional approach) is appropriate when:
- All founders are full-time from day one
- Contributions are roughly equal and predictable
- The team has worked together before and trust is established

Recommendation for [STARTUP_TEAM] based on their situation.

## Vesting Schedule
Vesting protects all founders from a co-founder departure that would otherwise leave a cliff of unvested equity sitting in the departed founder's pocket:
- Standard: 4-year vesting with a 1-year cliff (after 1 year: 25% vests, then monthly for 3 more years)
- Why the 1-year cliff matters: it provides 12 months to discover a misalignment before equity is permanently awarded
- Acceleration provisions: single trigger (acquisition) vs double trigger (acquisition + termination) — recommendation for each founder's scenario
- Clawback provisions for cause termination

## Advisor Equity Norms
As [STARTUP] adds advisors, how much equity is appropriate?
- Advisor equity ranges by stage: pre-seed / seed / Series A
- FAST (Founder Advisor Standard Template) vesting: 1-year monthly vesting, no cliff
- Categorize advisors by engagement level: operational (highest equity), strategic (mid), intro/network (lowest)
- Advisor contribution documentation: what should be expected in exchange for equity

## Employee Option Pool Sizing
Investors will ask about the option pool before setting a term sheet. This affects founder dilution:
- Standard option pool size by stage: pre-seed (10%), seed (10–15%), Series A (10%)
- Option pool shuffle: how investors use the option pool to achieve higher effective valuation
- How to negotiate the option pool size and timing

## The Equity Conversation: Facilitated Discussion Guide
10 questions to answer as a founding team before deciding on the split:
1. What are each of our fair market salaries and how much are we each giving up?
2. Who came up with the initial idea and how important is that going forward?
3. How are we weighting time vs money vs relationships vs domain expertise?
4. What happens to someone's equity if they leave before vesting is complete?
5. What happens to equity if a founder is asked to leave?
6. If we bring in outside capital, how do we feel about dilution?
7. Are any of us planning to go part-time in the next 12 months?
8. Who is the CEO, and should the CEO get more equity for that role?
9. What is the tie-breaker process for decisions where the team is split?
10. Have we each run this by a startup attorney before signing?

## Output
Contribution inventory template, risk weighting framework, dynamic vs fixed split recommendation, standard vesting schedule with acceleration provisions, advisor equity table by stage, option pool sizing guide, and facilitated discussion question set.`,
    category: 'startups',
    tags: ['equity', 'co-founders', 'cap-table', 'vesting', 'startup-legal'],
    difficulty: 'intermediate',
    useCase: 'Use when a founding team is about to divide equity for the first time, or when an equity dispute has surfaced and needs a structured resolution framework.',
    authorUsername: 'promptarchitect',
    likes: 195,
    saves: 148,
    copies: 620,
    views: 3900,
    trendScore: 195*2 + 148*3 + 620 + 3900*0.2,
    trendingScore: 195*2 + 148*3 + 620 + 3900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '13 min',
    outputType: 'Framework',
    whyTrending: 'Co-founder equity disputes are the second leading cause of early startup failure; structured frameworks prevent them before they become existential.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 620,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-19',
  },
  {
    id: 'lib-str-009',
    title: 'Startup Hiring: First 10 Employees',
    slug: 'startup-hiring-first-10-employees',
    description: 'Hiring roadmap for the first 10 employees: role prioritization, founder vs hire decision, JD templates, compensation benchmarking, and 30-60-90 onboarding.',
    content: `You are a startup talent advisor who has helped founding teams build their first teams. Create a complete hiring roadmap for [STARTUP] for the next 12 months covering the first 10 employees.

## Hiring Philosophy for Early-Stage Startups
The first 10 hires set the culture, capability, and velocity of everything that follows. Two rules that override all others:
1. Do not hire to solve a problem you have not yet understood — hire once the problem is clear and the role is definite
2. Founders must be able to evaluate candidates in their first 3 hires in each function — you cannot hire well for a role you cannot do at a basic level yourself

## Role Prioritization Framework

### Founder vs Hire Decision Matrix
Before creating a job description, run each candidate role through these questions:
- Is this a founder-core skill that an investor or customer will hold the founding team accountable for? (If yes, founders must maintain ownership of the strategy even if they hire execution)
- Is this role blocking product delivery or revenue generation today? (If no, it can wait)
- Could this be done by a contractor or part-time advisor for the next 6 months? (If yes, do not hire full-time yet)
- Is this a role where hire quality dramatically outperforms hire speed? (Senior engineering, design, sales leadership)

### Recommended Hiring Sequence for [STARTUP]
Based on [STARTUP]'s stage and GTM motion, provide a recommended sequence of the first 10 roles with the rationale for the order:
- Roles 1–3: The critical foundation (technical, revenue, or operational — depends on [STARTUP]'s primary bottleneck)
- Roles 4–6: Scaling the core (the hires that let founders step back from day-to-day execution)
- Roles 7–10: Building the team team (functional depth and specialized expertise)

## Job Description Templates (3 Roles)
For the 3 highest-priority roles in [STARTUP]'s sequence, provide full JD templates:

For each JD:
- Job title (not inflated — "Engineer" not "Rockstar Engineer")
- About [STARTUP] (2 sentences — compelling, not corporate)
- The role in plain language (what will they actually do day-to-day?)
- What success looks like at 30, 60, and 90 days (make this specific and measurable)
- Required experience (the minimum, not the wish list)
- Preferred experience (nice to have, clearly labeled)
- Why this role is exceptional (what makes this opportunity genuinely worth considering?)
- Compensation range (display it — top candidates filter out roles without comp transparency)

## Screening & Interview Process
A lightweight but rigorous process for early-stage hiring:
- Application screen: the 3 filters that predict fit at this stage
- Phone screen: 30-minute script with 5 questions that surface communication quality and self-awareness
- Work sample / take-home: how to design a work sample that is respectful of the candidate's time (2–3 hours maximum) and genuinely predictive
- Panel interview: 60-minute structure with defined question ownership per interviewer
- Reference check: 5 questions that get past the scripted response

## Compensation Benchmarking
How to set competitive compensation for [STARTUP]'s stage and location:
- Benchmark sources: Levels.fyi, Radford, Carta's compensation data, role-specific surveys
- Cash vs equity tradeoff framework by candidate stage and risk appetite
- Equity grant guidelines: percentages by role and seniority at [STARTUP]'s funding stage
- Refresh grant schedule to maintain retention incentive

## Culture Interview Guide
A set of 8 behavioral interview questions designed specifically to assess fit with [STARTUP]'s stage and culture:
- Operating in ambiguity
- Defaulting to action without complete information
- Giving and receiving blunt feedback
- Prioritization under resource constraints
- Comfort with role evolution (early employees do things outside their job description constantly)

## 30-60-90 Onboarding Framework
A structured onboarding plan that works for a startup without an HR team:

- **Days 1–10**: Context immersion — product, customers, strategy, team, communication norms
- **Days 11–30**: First contribution — a defined deliverable that creates immediate value and builds confidence
- **Days 31–60**: Independent execution — the new hire is operating with minimal founder oversight on their core responsibilities
- **Day 90 check-in**: Structured conversation covering what is going well, what needs adjustment, and the next 90-day goals

## Output
12-month hiring roadmap with role sequence and rationale, founder vs hire decision matrix, 3 complete JD templates, screening and interview process, compensation benchmarking guide, culture interview questions, and 30-60-90 onboarding framework.`,
    category: 'startups',
    tags: ['hiring', 'talent', 'team-building', 'onboarding', 'startup-operations'],
    difficulty: 'intermediate',
    useCase: 'Use when a startup is preparing to make its first hires and needs a systematic approach to role prioritization, sourcing, and onboarding.',
    authorUsername: 'builderai',
    likes: 215,
    saves: 158,
    copies: 680,
    views: 4100,
    trendScore: 215*2 + 158*3 + 680 + 4100*0.2,
    trendingScore: 215*2 + 158*3 + 680 + 4100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Roadmap',
    whyTrending: 'The first 10 hires define the company trajectory; structured hiring frameworks reduce costly mis-hires that derail early-stage momentum.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 680,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-21',
  },
  {
    id: 'lib-str-010',
    title: 'Competitive Moat & Defensibility Analysis',
    slug: 'competitive-moat-defensibility-analysis',
    description: 'Score the defensibility of a startup across 7 moat types, sequence the moat-building roadmap, and identify the most dangerous incumbent responses.',
    content: `You are a competitive strategy advisor and former VC who has analyzed defensibility for hundreds of startups. Conduct a complete moat analysis for [STARTUP_IDEA].

## Defensibility Philosophy
A startup without a moat is a feature, not a company. The question is not whether a moat exists today (it almost never does at founding) but whether there is a credible path to building meaningful defensibility before a well-resourced competitor decides to copy the model.

## Moat Analysis — 7 Types

For each moat type, provide:
- **Definition**: what this moat actually means in practice
- **Score for [STARTUP_IDEA]**: 0 (absent) to 5 (strong), with evidence required for any score above 2
- **Time horizon**: how many months/years before this moat becomes meaningful if the team executes well
- **Investment required**: what specifically needs to happen to build this moat (resources, product decisions, partnership strategy)

### Moat Type 1: Network Effects
The product becomes more valuable as more users join. There are 5 sub-types:
- Direct network effects (same-side): each user makes the product better for all users
- Indirect network effects (cross-side): marketplace dynamics, platform effects
- Data network effects: more usage generates better data that improves the product
- Social network effects: user identity or reputation is embedded in the product
- Physical network effects: geographic density creates local advantages

Evaluate which sub-types are achievable for [STARTUP_IDEA] and the critical density threshold required.

### Moat Type 2: Switching Costs
How painful is it for a customer to leave? Switching costs can be:
- Data portability: customer data locked in proprietary format or hard to export
- Integration depth: the product is woven into the customer's workflow or tech stack
- Workflow change cost: team retraining and process change required to switch
- Contract lock-in: multi-year agreements with exit penalties

Score [STARTUP_IDEA] on each switching cost sub-type.

### Moat Type 3: Proprietary Technology
Technical advantages that cannot be easily replicated:
- Patents (often overrated for software startups — explain why)
- Proprietary algorithms or models that improve with scale
- Engineering complexity that creates a meaningful time-to-copy advantage
- Infrastructure that took years to build and cannot be easily contracted out

### Moat Type 4: Scale Economies
The cost per unit of value delivered decreases as the business scales:
- Fixed cost leverage (R&D, infrastructure)
- Purchasing power advantages
- Unit economics that only work at scale (excludes competitors who cannot reach that scale)

### Moat Type 5: Brand
For a startup brand to be a real moat it must meet 3 criteria:
- Customers pay a premium specifically because of the brand (not just awareness)
- The brand is associated with a specific outcome or identity that competitors cannot easily copy
- The brand has been built through consistent, differentiated customer experience

At [STARTUP_IDEA]'s stage, is brand a real moat or an aspiration?

### Moat Type 6: Regulatory & Compliance
Licenses, certifications, and regulatory relationships that create legal barriers:
- Industry-specific licenses and how difficult they are to obtain
- First-mover advantage with regulatory relationships
- Compliance infrastructure that becomes a cost of entry for competitors

### Moat Type 7: Unique Proprietary Data
Data advantages that improve over time and cannot be purchased or scraped:
- Proprietary training data for AI/ML models
- Unique behavioral data from existing users
- Data partnerships or integrations that are exclusive

## Composite Moat Assessment
Weighted moat score across all 7 types. Identify:
- The strongest moat available to [STARTUP_IDEA] (the primary bet)
- The secondary moat to develop in parallel
- The moats that are not achievable or not worth pursuing (focus is more valuable than breadth)

## Build Order & Moat Roadmap
A phased moat development plan:
- Phase 1 (0–18 months): Establish the initial switching cost through product depth and integration
- Phase 2 (18–36 months): Begin building the primary moat
- Phase 3 (36+ months): Reinforce with secondary moat and brand

## Incumbent Response Analysis
What would [STARTUP_IDEA]'s top 3 most dangerous incumbent or well-funded competitor responses look like?
- The "build it themselves" response: how quickly could they replicate the core product?
- The "acquire a competitor" response: which existing company would they buy instead?
- The "price to zero" response: could they afford to give away a competing solution to protect their core business?

For each response: likelihood (High/Medium/Low), timeline, and [STARTUP_IDEA]'s optimal counter-strategy.

## Output
Moat analysis scorecard (all 7 types with scores and evidence), primary and secondary moat recommendations, 3-phase moat development roadmap, and incumbent response analysis with counter-strategies.`,
    category: 'startups',
    tags: ['competitive-advantage', 'moat', 'strategy', 'defensibility', 'startup-strategy'],
    difficulty: 'advanced',
    useCase: 'Use when investors ask about defensibility, when entering a competitive market, or when doing annual strategic planning.',
    authorUsername: 'marketinglab',
    likes: 178,
    saves: 128,
    copies: 570,
    views: 3600,
    trendScore: 178*2 + 128*3 + 570 + 3600*0.2,
    trendingScore: 178*2 + 128*3 + 570 + 3600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Analysis',
    whyTrending: 'Investors in every stage are emphasizing defensibility over growth; founders who articulate a clear moat roadmap stand out in competitive fundraising processes.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 570,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-23',
  },
  {
    id: 'lib-str-011',
    title: 'Customer Discovery Interview Guide',
    slug: 'customer-discovery-interview-guide',
    description: 'A complete customer discovery system: 20-question interview guide, problem ranking methodology, WTP probing, synthesis template, and pivot vs persevere signals.',
    content: `You are a customer discovery expert trained in the Lean Startup and Mom Test methodologies. Build a complete customer discovery guide for [STARTUP] targeting [CUSTOMER].

## Discovery Philosophy
Customer discovery interviews done poorly generate false confidence. Most founders ask leading questions, pitch their solution during the interview, and leave with confirmation rather than truth. This guide follows two inviolable rules: (1) never ask what people would do — only ask what they have done, and (2) never mention your solution until the end, if at all.

## Interview Recruitment

### Who to Talk To
Not every [CUSTOMER] is equally valuable for discovery. Prioritize:
- People who have tried to solve this problem (evidence the pain is real enough to motivate action)
- People who have failed to solve it (reveals the gap in current solutions)
- People who have successfully solved it (reveals what the best alternative looks like)
- People who have the problem but have never looked for a solution (the most underserved segment)

Avoid: friends, family, colleagues who want to be supportive. Their feedback will be kind and useless.

### Recruitment Methods
For [CUSTOMER], the 5 most effective ways to recruit 10–15 discovery interviewees in under 2 weeks:
- LinkedIn direct outreach template (personalized, no pitch in the first message)
- Reddit and online community outreach script
- Personal network activation (how to ask without biasing the conversation)
- Customer of a complementary but non-competing product
- Conference and event intercepts

## The 20-Question Interview Guide
Organized in 4 sections. Never ask all 20 in a single interview — select 10–12 based on the conversation.

### Section 1: Context Setting (Questions 1–4)
Build rapport and understand the customer's world before asking about the problem:
1. Tell me about your role / day — what does a typical week look like for you?
2. In [the domain related to [STARTUP]'s problem], what are you responsible for?
3. How do you measure success in that area?
4. Who else on your team or in your life is involved in [domain]?

### Section 2: Problem Exploration (Questions 5–10)
Do not name the problem. Let them name it.
5. What are the biggest headaches or frustrations in [domain] right now?
6. Walk me through the last time you dealt with [problem area]. What happened?
7. How did you handle it?
8. What did you try first? What happened when that didn't work?
9. What does it cost you when this problem occurs? (Time, money, stress, missed opportunities)
10. How often does this happen? Walk me through a recent specific example.

### Section 3: Existing Behavior (Questions 11–15)
Understand what they do today — this is the baseline any solution must beat.
11. What tools or processes do you currently use to address this?
12. How did you find those tools/solutions?
13. What do you like best about your current approach?
14. What frustrates you about it?
15. If you could change one thing about how you currently handle this, what would it be?

### Section 4: Depth Probes (Questions 16–20)
Use these when a signal is strong and you want to go deeper.
16. How long have you been dealing with this?
17. Have you looked for a better solution? What stopped you?
18. What would a perfect solution look like? (Ask this only after they've described the problem in their own words)
19. Who else in your organization has this problem? How do they handle it?
20. Is there anything I didn't ask about that you think I should understand?

## Problem Ranking Exercise
After the open-ended exploration, present the top 3 problems you've heard across interviews and ask the interviewee to rank them:
- "I've heard a few themes across my conversations. I'd love to understand which of these is most painful for you."
- Present 3 problems as brief statements (not your solutions — just the problems)
- Ask them to rank 1–3 by frequency and by intensity separately
- The rank by intensity is the more valuable signal

## Willingness-to-Pay Probe
The Van Westendorp Price Sensitivity Meter is the most reliable WTP signal you can gather without a live product:
- "At what price would this solution be so expensive that you wouldn't consider it?"
- "At what price would it start to feel expensive but you'd still consider it?"
- "At what price would it feel like a good deal?"
- "At what price would it be so cheap that you'd question the quality?"

Record the range. The "range of acceptable prices" is between the second and third thresholds.

## Interview Synthesis Template
After each interview, complete this 5-minute synthesis immediately:
- Top 3 quotes (verbatim — these are gold)
- Primary problem identified (their words, not your interpretation)
- Current solution (what they use today)
- Emotional intensity (1–10) and evidence for the rating
- Surprise finding (what you did not expect)
- One thing you will test differently in the next interview

## Pattern Analysis (After 10+ Interviews)
When to stop: you have reached saturation when 3 consecutive interviews produce no new insights. Typically 12–15 interviews for a focused ICP.

Aggregation method: affinity mapping of all quotes across 5 dimensions:
- Problem frequency
- Problem intensity
- Current solution satisfaction
- Willingness to try something new
- Willingness to pay for a better solution

## Pivot vs Persevere Signals
**Persevere signals** (keep on current path):
- 70%+ of interviewees describe the same problem in similar language unprompted
- Interviewees describe workarounds they built themselves (DIY solutions = confirmed pain)
- At least 3 interviewees ask "When can I try it?" before you mention there is a product
- Intensity ratings of 7+ from more than half the interviewees

**Pivot signals** (reconsider the hypothesis):
- Interviewees struggle to identify the problem you're solving as a real pain
- Current solutions are rated 7+ in satisfaction despite their limitations
- WTP is consistently below your minimum viable unit economics
- The people who have the problem are not the people who would buy the solution

## Output
Complete customer discovery guide with recruitment templates, 20-question interview guide with usage notes, problem ranking exercise, WTP probe script, post-interview synthesis template, and pivot vs persevere signal checklist.`,
    category: 'startups',
    tags: ['customer-discovery', 'user-research', 'interviews', 'lean-startup', 'problem-validation'],
    difficulty: 'intermediate',
    useCase: 'Use before building a product or when existing traction is weaker than expected and the team needs to return to first-principles customer research.',
    authorUsername: 'devdna',
    likes: 242,
    saves: 175,
    copies: 730,
    views: 4500,
    trendScore: 242*2 + 175*3 + 730 + 4500*0.2,
    trendingScore: 242*2 + 175*3 + 730 + 4500*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Guide',
    whyTrending: 'The Mom Test and Lean Startup methodologies are now standard startup education but most founders still conduct discovery interviews poorly; structured guides close that gap.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 730,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-11',
  },
  {
    id: 'lib-str-012',
    title: 'Startup Brand & Positioning Workshop',
    slug: 'startup-brand-positioning-workshop',
    description: 'Brand foundation for startups: positioning statement, brand personality, tone guide, naming strategy, taglines, messaging hierarchy, and brand story.',
    content: `You are a brand strategist who has built brand foundations for over 50 early-stage startups. Run a complete brand and positioning workshop for [STARTUP].

## Why Brand Matters Early
Most founders believe brand is a Series B problem. They are wrong. Brand positioning determines which customers self-select, which investors pattern-match positively, and which potential hires get excited. Bad positioning is expensive to fix — it accumulates in every sales call, pitch deck, and press mention.

## Positioning Statement — Geoffrey Moore Template
The most useful positioning framework for early-stage startups:

"For [specific target customer] who [has this specific, named problem], [STARTUP] is a [product category] that [provides this specific benefit]. Unlike [primary alternative that customers currently use], [STARTUP] [key differentiator stated as a capability or outcome, not a feature]."

Build 3 positioning variations, each emphasizing a different angle:
1. Pain relief positioning (leads with the problem)
2. Outcome achievement positioning (leads with the transformation)
3. Unique capability positioning (leads with the mechanism)

Test each variation against this rubric: Does it make a competitor who reads it uncomfortable? If not, it is not differentiated enough.

## Brand Personality Definition
A brand with no defined personality defaults to corporate blandness. Define [STARTUP]'s personality along 5 dimensions:

5 personality traits [STARTUP] owns (with a description of what each means in practice):
Examples: Direct, Not Clever. Warm, Not Formal. Ambitious, Not Arrogant. Specific, Not General. Human, Not Corporate.

2 anti-traits (the personality [STARTUP] explicitly rejects):
These are as important as the positive traits. They prevent drift toward industry defaults.

A brand personality is not useful unless it creates writing decisions. For each trait, provide:
- What this sounds like in a headline
- What this sounds like in an error message
- What this sounds like in a sales email

## Tone of Voice Guide
3 writing principles that define [STARTUP]'s voice across all touchpoints:
- Principle 1: [e.g., "Say it in half the words. Then cut half again."]
- Principle 2: [e.g., "Always write to a specific person, never to 'users' or 'customers'."]
- Principle 3: [e.g., "Show the outcome first. Lead the feature second, if at all."]

For each principle: a before/after example showing the difference.

## Naming & Domain Strategy
If [STARTUP] is still naming or considering a rename:
- Naming criteria: memorable (1–3 syllables optimal), available on .com and major social handles, no negative connotations in primary markets, search indexable (not a common dictionary word used in a completely different sense)
- 5 naming approaches: invented word, modified real word, founder name, metaphor, acronym — when each is appropriate
- Domain strategy: when to use .io vs .com vs .ai
- Brand protection baseline: trademark search process and priority

## Tagline Options (5)
Provide 5 tagline candidates for [STARTUP], each taking a different angle:
1. Outcome-focused (what does the customer achieve?)
2. Mechanism-focused (what makes [STARTUP] work?)
3. Contrast-focused (what do you NOT have to do anymore?)
4. Identity-focused (who is the customer when they use [STARTUP]?)
5. Aspiration-focused (what world does [STARTUP] help build?)

For each: explain the positioning angle it reinforces and the audience it resonates with most.

## Messaging Hierarchy
A 4-level messaging pyramid:
- **Level 1 — Core claim** (the single sentence): [STARTUP] exists to [core value proposition]
- **Level 2 — Proof points** (3 supporting statements): each one must be specific and verifiable
- **Level 3 — Feature-benefit pairs** (for product pages): feature name → what it does → why it matters
- **Level 4 — Social proof statements**: customer quotes that validate the core claim

## Brand Story (The Origin Narrative)
Every brand that builds a community has a founding story that people can retell. Build [STARTUP]'s brand story in 3 versions:
- **Tweet version** (240 characters): the story compressed to its essence
- **Intro version** (2 sentences): for conference introductions and podcast bios
- **Long version** (300 words): for the About page, investor materials, and press kits

Story arc: the founder or founding team saw [specific problem] → tried the existing solutions → found them inadequate → realized the gap was [specific insight] → built [STARTUP] to [mission].

## Visual Direction Brief
A 1-page visual brand brief for the design team or first designer:
- Overall aesthetic: 5 descriptors (e.g., "clean, technical, warm, precise, human")
- Color direction: primary tone (cool/warm/neutral) and emotional association
- Typography direction: serif vs sans-serif and the personality implication
- Photography style: what the brand would and would not show in imagery
- Brands to reference (from any industry, not necessarily direct competitors)

## Output
3 positioning statement variations with rubric evaluation, brand personality with writing examples, tone guide with before/after samples, 5 taglines with rationale, messaging hierarchy, brand story in 3 lengths, and visual direction brief.`,
    category: 'startups',
    tags: ['brand', 'positioning', 'messaging', 'brand-strategy', 'startup-marketing'],
    difficulty: 'intermediate',
    useCase: 'Use when a startup is preparing its first go-to-market push, raising its first round, or realizing its current positioning is not resonating.',
    authorUsername: 'contentpro',
    likes: 188,
    saves: 132,
    copies: 595,
    views: 3750,
    trendScore: 188*2 + 132*3 + 595 + 3750*0.2,
    trendingScore: 188*2 + 132*3 + 595 + 3750*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '13 min',
    outputType: 'Workshop',
    whyTrending: 'Strong positioning is a force multiplier for every marketing dollar spent; startups that nail it early outgrow those with superior products but muddy messaging.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 595,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-26',
  },
  {
    id: 'lib-str-013',
    title: 'Unit Economics Deep Dive',
    slug: 'unit-economics-deep-dive',
    description: 'Complete unit economics model: CAC by channel, LTV by segment, payback period, gross margin per customer, break-even, and improvement levers.',
    content: `You are a growth finance advisor who specializes in unit economics for early-stage and growth-stage startups. Build a comprehensive unit economics model and diagnostic framework for [STARTUP].

## Why Unit Economics Are the Core Metric
Revenue growth is noise. Unit economics are signal. A startup with great unit economics and slow growth is a valuable company. A startup with terrible unit economics and fast growth is a house of cards. Investors in the post-2022 environment scrutinize unit economics before everything else.

## Customer Acquisition Cost (CAC)

### CAC Calculation Methodology
CAC = Total sales and marketing spend ÷ new customers acquired in the same period

Common mistakes:
- Including customer success costs in CAC (it belongs in cost to serve)
- Lagging the spend (sales and marketing spend creates customers 30–90 days later)
- Using marketing-qualified leads instead of closed customers as the denominator

### CAC by Channel
Blended CAC hides which channels are actually efficient. Break down for [STARTUP]:
- Organic search: content cost + SEO tooling ÷ customers acquired through organic
- Paid search: ad spend + management cost ÷ customers acquired
- Outbound sales: SDR + AE fully loaded cost ÷ customers from outbound
- Events and conferences: total event cost ÷ customers traceable to event within 90 days
- Partner and referral: commission + program management ÷ partner-sourced customers

Identify the lowest-CAC channel and analyze why it is efficient (and whether it is scalable).

### Sales Efficiency Metrics
- Magic Number: (new ARR current quarter) ÷ (S&M spend previous quarter) — benchmark: > 0.75 is healthy
- CAC Ratio: CAC ÷ ACV — benchmark: < 1.0 for self-serve, < 1.5 for inside sales, < 2.0 for field sales

## Customer Lifetime Value (LTV)

### LTV Calculation (Three Methods)
**Simple LTV**: ARPU × (1 ÷ monthly churn rate)
**Gross Margin LTV**: ARPU × gross margin % × (1 ÷ monthly churn rate)
**Cohort LTV**: most accurate — tracks actual revenue from a defined cohort over their full customer life

Provide the formula and a worked example for [STARTUP]'s business model.

### LTV by Customer Segment
LTV is almost always much higher for some segments than others:
- Enterprise vs SMB vs self-serve segments: LTV distribution
- High-expansion vs low-expansion customers: identify the behavioral signals that predict expansion
- Channel LTV: are customers from referrals worth more than customers from paid ads?

### LTV:CAC Ratio — Benchmarks and Interpretation
- < 1:1: the business is destroying value with every customer acquired
- 1:1 to 2:1: marginal — the business might work at large scale but is fragile
- 3:1: healthy for most B2B SaaS businesses
- 5:1+: either a great business or you are underinvesting in growth

Context matters: a 2:1 LTV:CAC for a business growing 300% YoY is often fine; a 2:1 for a business growing 20% YoY is a problem.

## CAC Payback Period
Payback period = CAC ÷ (monthly ARPU × gross margin %)

Benchmarks by business type:
- Self-serve SaaS: 6–12 months
- Inside sales SaaS: 12–18 months
- Enterprise SaaS: 18–30 months

Why payback period matters more than LTV:CAC in a constrained capital environment: shorter payback = less working capital required to grow.

## Gross Margin Per Customer
Beyond blended gross margin, calculate at the individual customer level:
- Revenue from customer
- COGS directly attributable to this customer (support, infrastructure, COGS per seat)
- Gross margin per customer
- Trend: are customers getting more or less profitable over time?

## Contribution Margin Analysis
Contribution margin = gross profit − variable sales and marketing cost per customer
This is the most accurate picture of per-unit profitability once variable acquisition costs are included.

## Break-Even Analysis
At what monthly revenue does [STARTUP] break even on a contribution margin basis?
- Fixed cost baseline (all costs that do not scale with customer count)
- Variable cost per customer (COGS + variable S&M)
- Break-even = fixed costs ÷ contribution margin per customer

## Churn Impact Modeling
Model the compounding impact of churn on LTV:
- At 2% monthly churn: LTV = 50 months of ARPU × gross margin
- At 3% monthly churn: LTV = 33 months
- At 5% monthly churn: LTV = 20 months

A 1 percentage point reduction in monthly churn is often more valuable than a 20% increase in new customer acquisition. Show this mathematically for [STARTUP].

## Expansion Revenue Impact
Net Revenue Retention > 100% is the single most powerful unit economic signal:
- What is [STARTUP]'s current NRR?
- What drives expansion: seat growth, usage growth, tier upgrades, add-ons?
- Expansion motion: is it product-led or sales-led?
- 1 percentage point improvement in NRR = how much additional enterprise value (use ARR multiple)?

## Improvement Levers — Prioritized
Rank the top 5 improvement levers for [STARTUP]'s specific unit economics situation:
1. Reduce CAC by optimizing channel mix
2. Improve activation rate (more paying customers per lead)
3. Reduce early churn (D30 and D90 retention)
4. Increase expansion revenue from existing customers
5. Improve gross margin through infrastructure optimization or pricing architecture

For each lever: estimated impact, timeline to see results, required investment, and difficulty.

## Output
Complete unit economics model structure with formulas, worked examples for [STARTUP]'s business model, CAC breakdown by channel, LTV calculation by segment, payback period benchmarks, break-even analysis, churn impact model, NRR improvement analysis, and prioritized improvement lever guide.`,
    category: 'startups',
    tags: ['unit-economics', 'ltv', 'cac', 'saas-metrics', 'financial-modeling'],
    difficulty: 'advanced',
    useCase: 'Use when preparing investor materials, diagnosing slow growth, or identifying the highest-leverage financial improvement opportunities.',
    authorUsername: 'promptarchitect',
    likes: 205,
    saves: 152,
    copies: 660,
    views: 4050,
    trendScore: 205*2 + 152*3 + 660 + 4050*0.2,
    trendingScore: 205*2 + 152*3 + 660 + 4050*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Model',
    whyTrending: 'Post-2022 investors demand strong unit economics before leading rounds; startups that understand their numbers deeply raise faster and on better terms.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 660,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-24',
  },
  {
    id: 'lib-str-014',
    title: 'Investor Update Template',
    slug: 'investor-update-template',
    description: 'Monthly investor update template with all key sections, guidance on writing about bad news, making effective asks, and building long-term investor relationships.',
    content: `You are a founder coach who has helped hundreds of startups build strong investor relationships through consistent, effective communications. Create a complete monthly investor update template for [STARTUP].

## Why Investor Updates Matter
Most founders send investor updates only when things are going well — which means investors become anxious or disengaged during hard stretches. The best founders send updates consistently regardless of performance. Investors who are well-informed become advocates; investors who are kept in the dark become problems.

## Update Structure — 7 Sections

### Section 1: Headline KPI (3 sentences maximum)
Open every update with the single most important metric for [STARTUP]'s current stage. State the number, the trend, and what drives it:
"MRR is [AMOUNT], up [X%] from last month. New customer adds were [NUMBER], offset by [churn description]. The primary driver was [specific activity or channel]."

Never lead with an excuse. If the headline KPI missed the target, state the number first, context second.

### Section 2: Key Wins (3 wins, 2–3 sentences each)
Three specific things [STARTUP] executed well this month. Rules:
- Must be specific (not "strong sales momentum" — instead: "closed [COMPANY] at $[ACV], our largest deal to date")
- Must be recent (this month, not a re-announcement of last month's win)
- At least one win from each major function: product, go-to-market, team

### Section 3: Key Challenges (3 challenges, with asks)
This is the most important section in the update. Investors cannot help with problems they do not know about. For each challenge:
- State the challenge directly ("We missed our activation rate target by 12 points")
- Share your current hypothesis about the cause
- Share what you are doing about it
- Make a specific ask if an investor can help

**How to write about bad news**: never soften, never spin, never minimize. Investors have seen every version of a bad quarter. What they respect is founders who face problems directly and have a plan. What makes them nervous is founders who sugarcoat or go quiet.

### Section 4: Metrics Dashboard
A consistent table updated every month with the same metrics in the same order:
- MRR / ARR (with month-over-month change)
- New customers added
- Churned customers
- Net Revenue Retention
- Active users (defined)
- Gross margin % (trailing 3 months)
- Monthly burn
- Runway (in months at current burn)
- Headcount

Format: a simple table with the current month, prior month, and 3-month average.

### Section 5: Product Update (6–8 sentences)
What shipped this month, what is in progress, and what is next. Focus on:
- What customer problem each shipped feature addresses
- Early signal on customer adoption or impact
- One thing product learned this month from customer feedback

### Section 6: Team Update (4–6 sentences)
- New hires (role + why this hire now)
- Open roles and the current timeline to fill them
- Any notable team events: promotions, departures (handled honestly), offsites, culture initiatives

### Section 7: Specific Investor Asks (1–3 asks, numbered)
The single most underused element in investor updates. Be specific about what you need:
- Customer introductions: "We are trying to reach [specific role] at [specific company or company profile]. Do you have a path in?"
- Candidate referrals: "We are hiring a [role]. Any senior [role] you'd recommend we speak with?"
- Advice requests: "We are weighing [specific decision]. I'd value 20 minutes with [investor name] if they have thoughts."
- Warm intros to investors: "We will start conversations for our [NEXT ROUND] in [MONTH]. Any fund you'd suggest we meet early?"

**How to make asks effectively**: investors respond to specific asks. "Any help appreciated" generates no response. "Can you introduce me to the CFO at [Company] — I know you backed their Series B" gets a response.

## What to Omit
Things that inflate update length without adding value:
- Detailed product changelogs (link to the product newsletter instead)
- Industry news that is not directly related to your business
- Background context investors already know
- Congratulatory language about your own team ("Our incredible team…")

## Cadence Guidance
- Monthly updates: the gold standard for seed through Series A
- Quarterly updates: acceptable for companies at Series B+ with a board that meets quarterly
- Timing: send the first week of the month for the prior month — consistency matters more than timing
- Format: plain text email outperforms designed HTML newsletters for investor updates (higher open rates, feels more personal)

## Building Long-Term Investor Relationships
Monthly updates are the floor, not the ceiling:
- Ad-hoc updates for major events: big wins, significant setbacks, key hires — do not wait for the monthly update
- 1:1 conversations: request a 30-minute call with your most engaged investors once per quarter
- Board meeting prep: the update is a preview, not a substitute
- Annual letter: a 1,000-word annual reflection on what you learned — this builds exceptional trust

## Output
Complete monthly investor update template with all 7 sections filled out with example language for [STARTUP], guidance on writing about bad news, effective ask formulas, what to omit, cadence recommendations, and long-term relationship building guide.`,
    category: 'startups',
    tags: ['investor-relations', 'investor-updates', 'fundraising', 'communication', 'board-management'],
    difficulty: 'beginner',
    useCase: 'Use when setting up a consistent investor communication cadence or when preparing the first investor update after closing a round.',
    authorUsername: 'marketinglab',
    likes: 228,
    saves: 168,
    copies: 720,
    views: 4300,
    trendScore: 228*2 + 168*3 + 720 + 4300*0.2,
    trendingScore: 228*2 + 168*3 + 720 + 4300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Template',
    whyTrending: 'Strong investor relationships are built in the months between fundraising rounds; consistent updates transform investors from passive capital into active network resources.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'marketinglab',
    uses: 720,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-07',
  },
  {
    id: 'lib-str-015',
    title: 'Startup Legal & Compliance Checklist',
    slug: 'startup-legal-compliance-checklist',
    description: 'Comprehensive legal checklist for startups by stage: entity formation, founder agreements, IP assignment, cap table, employee docs, data privacy, and regulatory flags.',
    content: `You are a startup attorney who has advised hundreds of early-stage companies. Build a comprehensive legal and compliance checklist for [STARTUP_STAGE].

## Legal Disclaimer
This checklist is for educational and organizational purposes. It does not constitute legal advice. Startups should retain qualified legal counsel for all substantive legal decisions. The cost of avoiding legal work early in a startup's life is almost always higher than the cost of doing it right.

## Phase 1: Entity Formation

### Delaware C-Corp vs Alternatives
**Why Delaware C-Corp is the default for VC-backed startups**:
- Investor familiarity: most VCs have standard documents built for Delaware C-Corps
- Legal infrastructure: the largest body of corporate case law in the US provides predictability
- Flexibility: various classes of stock, board structures, and protective provisions are well-established

**When Delaware C-Corp is NOT the right choice**:
- Bootstrapped businesses with no plans for institutional equity (LLC may be simpler)
- Businesses owned entirely by non-US persons (different structuring needed)
- Certain regulated industries (consult counsel before forming)

**Formation checklist**:
- File Certificate of Incorporation with the Delaware Secretary of State
- Obtain Federal EIN from the IRS
- Register as a foreign corporation in the state where you operate
- Set up a registered agent in Delaware
- Hold organizational board meeting (minutes template required)
- Issue initial founder shares (at early-stage: low par value, Section 83(b) election required within 30 days)

### Section 83(b) Election — Critical Deadline
Every founder receiving stock subject to vesting must file an 83(b) election with the IRS within 30 days of the grant. Missing this deadline can result in ordinary income tax on the full value of the shares at vesting — potentially a multi-million dollar tax event for a successful startup. Provide the 30-day action checklist.

## Phase 2: Founder Agreements

### Founder Agreement Checklist
- **Roles and responsibilities**: who is CEO, CTO, CPO — in writing, not assumed
- **Equity split**: documented in the cap table and stock purchase agreement
- **Vesting schedule**: 4-year vesting with 1-year cliff for all founders (no exceptions without strong rationale)
- **IP Assignment**: every founder must sign an IP assignment agreement before incorporation or immediately after — all IP created in connection with the company belongs to the company
- **Non-compete and non-solicit**: know your state's enforceability rules (California is almost entirely unenforceable; Delaware is more flexible)
- **Decision-making framework**: how are major decisions made? What requires board vs CEO vs unanimous founder approval?

### IP Assignment Checklist (Critical)
Failure to properly assign IP is the most common legal landmine in early-stage startups and frequently causes problems in due diligence:
- All founders sign an IP assignment agreement covering past work related to the company
- All employees and contractors sign IP assignment agreements before starting work
- Any code, design, or IP created before incorporation that is used in the company must be formally assigned — a verbal agreement is not sufficient

## Phase 3: Cap Table Management

### Cap Table Essentials
- Use a proper cap table tool from day one: Carta, Pulley, or Cap Table Coalition (free for early stage)
- Document every equity grant at the time of grant — reconstructing cap tables from memory is painful and error-prone
- Understand fully diluted vs basic shares: always discuss ownership on a fully diluted basis with investors
- Option pool: establish the employee option pool before the first institutional raise to control the dilution mechanics

### SAFE and Convertible Note Management
- Record every SAFE and convertible note issued
- Track conversion terms: valuation cap, discount rate, MFN clause
- Model the cap table at conversion to understand dilution implications before issuing more SAFEs

## Phase 4: Commercial Documents

### Website and Customer Agreements
- **Terms of Service**: required before any public user acquisition
- **Privacy Policy**: required by law in most jurisdictions and expected by users — must accurately describe data collection and usage
- **Data Processing Agreement**: required for B2B customers in GDPR jurisdictions
- **Cookie Consent**: required for users in EU/EEA under GDPR and UK GDPR

### Customer Contracts
- Master Service Agreement or subscription agreement template
- SLA (Service Level Agreement) terms and remedies — do not over-promise uptime in early stage
- Limitation of liability clauses — cap at 12 months of fees paid, minimum
- Intellectual property ownership and license grant language

## Phase 5: Employee and Contractor Documents

### Employee Documentation Checklist
- Offer letter with at-will employment language (in at-will states)
- Confidential Information and Invention Assignment Agreement (CIIAA) — every employee, no exceptions
- Employee handbook (minimum viable version for early stage)
- Background check policy (if applicable to your industry)
- Benefits enrollment documentation

### Contractor vs Employee Classification
Misclassification of employees as contractors is a significant legal and financial risk:
- The IRS ABC test and state-level tests (California's AB5 is the most strict)
- Red flags that suggest a contractor is actually an employee
- How to structure contractor agreements to reduce reclassification risk

## Phase 6: Data Privacy & Compliance

### GDPR Checklist (If EU Users)
- Lawful basis for each type of data processing (consent, legitimate interest, contract performance)
- Privacy notice updated to GDPR standard
- Data subject rights procedures (access, deletion, portability)
- Data breach notification procedure (72-hour notification window)
- Data Processing Agreements with all vendors who process personal data

### CCPA/CPRA Checklist (If California Users)
- Privacy policy updated with CCPA-required disclosures
- "Do Not Sell My Personal Information" option if applicable
- Data subject request procedure

## Phase 7: Trademark & Intellectual Property

### Trademark Filing Priority
- File trademark applications in the US before public launch if possible (use-in-commerce basis or intent-to-use)
- Search the USPTO database and common law trademarks before finalizing the brand name
- International trademark strategy: file in your top 2–3 markets within 6 months of US filing

## Phase 8: Regulatory Red Flags by Industry
- Fintech: money transmission licenses, SEC registration, CFPB oversight
- Healthcare: HIPAA compliance, FDA classification, state licensing
- Consumer products: FTC regulations, product liability
- Marketplace / gig economy: contractor classification, consumer protection
- Education (children): COPPA compliance, FERPA if applicable

## Priority Legal Spending Guide
For a startup with limited legal budget, rank legal spend by risk-adjusted impact:
1. Founder IP assignment (highest risk if missed — free with attorney templates)
2. Section 83(b) elections (irreversible if missed — file within 30 days)
3. Employee CIIAA agreements (ongoing risk with every new hire)
4. Privacy policy and ToS (public-facing legal risk)
5. Customer contract template (commercial risk mitigation)

## Output
Complete legal checklist organized by phase with action items, deadlines, and risk flags for [STARTUP_STAGE]. Priority spending guide for limited legal budget. Regulatory red flag assessment for [STARTUP]'s industry.`,
    category: 'startups',
    tags: ['legal', 'compliance', 'incorporation', 'ip', 'startup-legal'],
    difficulty: 'intermediate',
    useCase: 'Use when founding a startup, closing a round, or preparing for due diligence to identify and close legal gaps before they become problems.',
    authorUsername: 'devdna',
    likes: 98,
    saves: 62,
    copies: 370,
    views: 2750,
    trendScore: 98*2 + 62*3 + 370 + 2750*0.2,
    trendingScore: 98*2 + 62*3 + 370 + 2750*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Checklist',
    whyTrending: 'Legal issues discovered in Series A due diligence derail deals; proactive legal housekeeping in the early days protects the raise years later.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 370,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-29',
  },
]
