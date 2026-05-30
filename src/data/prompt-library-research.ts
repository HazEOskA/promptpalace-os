import type { Prompt } from './prompts'

export const RESEARCH_PROMPTS: Prompt[] = [
  {
    id: 'lib-res-001',
    title: 'User Interview Question Builder',
    slug: 'user-interview-question-builder',
    description: 'Generates a complete user interview guide with screener, open-ended questions, probing techniques, and analysis framework.',
    content: `You are a UX researcher with 10+ years conducting user interviews for product teams at scale. Create a comprehensive user interview guide for researching [TOPIC/PROBLEM].

## Inputs
- Research goal: [RESEARCH_GOAL]
- User segment: [USER_SEGMENT]

## Interview Guide Components

### 1. Participant Screening Criteria
Define who qualifies for this interview:
- Role / job title requirements
- Behavior requirements (has done X in the last Y months)
- Experience level (novice / intermediate / expert)
- Exclusion criteria (your company employees, researchers, students)

### 2. Screener Survey (5 questions)
Short survey to filter applicants before scheduling:
- Question 1: Role / context qualifier
- Question 2: Behavior qualifier (past-tense action)
- Question 3: Frequency qualifier (how often they do X)
- Question 4: Tool/product context
- Question 5: Availability and consent
Include: disqualifying answer flags for each question.

### 3. Interview Guide Structure

**A. Warm-Up (2 questions) — ~5 minutes**
Build rapport and understand context before diving deep.
- Q1: Tell me about your role and what a typical day looks like for you.
- Q2: [Context-specific warm-up tailored to the topic]

**B. Context Setting (3 questions) — ~10 minutes**
Understand how this problem fits into their world.
Include probing techniques for each: "Can you tell me more?" / "What does that look like?" / "Walk me through a recent time…"

**C. Core Problem Exploration (8 questions) — ~35 minutes**
All open-ended, behavior-focused, past-tense. No leading questions.
Examples of correct framing: "Tell me about the last time you..." / "Walk me through how you currently..." / "What happened when..."
Include: specific probes for each question that dig deeper without leading.

**D. Concept Reaction Section (4 questions, optional) — ~15 minutes**
Use only if testing a specific concept or prototype.
- Show → ask for first reaction (feelings before opinions)
- Ask: what would you do next?
- Ask: what would you change?
- Ask: when in your workflow would this fit?

**E. Wrap-Up (2 questions) — ~5 minutes**
- Is there anything important I haven't asked about?
- Who else should I talk to about this?

### 4. Recording Consent Script
Verbatim consent language to read before recording starts.

### 5. Probing Technique Reference
Quick reference card for the facilitator:
- Silence as a probe (wait 5 seconds after an answer)
- Echo probes ("You mentioned X — tell me more")
- Clarification probes ("What do you mean by X?")
- Example probes ("Can you give me a specific example?")

### 6. What NOT to Ask (Anti-Pattern Guide)
- Leading questions (suggest the answer)
- Double-barreled questions (two questions in one)
- Hypothetical questions ("Would you use…?")
- Opinion questions ("Do you think it's good that…?")

### 7. Analysis Framework
After 5+ interviews, synthesize using:
- Affinity clustering (group observations by theme)
- Frequency + surprise scoring per insight
- Quote selection criteria

## Output
- Ready-to-use interview guide (copy-paste format)
- Screener survey (Google Forms / Typeform ready)
- Analysis spreadsheet column structure`,
    category: 'research',
    tags: ['user-research', 'interviews', 'ux', 'qualitative', 'product'],
    difficulty: 'beginner',
    useCase: 'Use when setting up user interviews to ensure complete coverage of research objectives and avoid leading questions.',
    authorUsername: 'growthoperator',
    likes: 145,
    saves: 98,
    copies: 387,
    views: 2400,
    trendScore: 145*2 + 98*3 + 387 + 2400*0.2,
    trendingScore: 145*2 + 98*3 + 387 + 2400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Document',
    whyTrending: 'Bad interview questions produce useless data. This guide ensures every session yields actionable insights through proven UX research methodology.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 387,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-19',
  },
  {
    id: 'lib-res-002',
    title: 'Market Sizing Framework (TAM/SAM/SOM)',
    slug: 'market-sizing-framework-tam-sam-som',
    description: 'Calculates and defends TAM/SAM/SOM using both top-down and bottom-up approaches with bear/base/bull scenarios.',
    content: `You are a market analyst who has built market sizing models for Series A through IPO investor decks. Calculate and defend the market opportunity for [PRODUCT] serving [CUSTOMER_SEGMENT].

## Inputs
- Product: [PRODUCT]
- Customer segment: [CUSTOMER_SEGMENT]

## Methodology: Dual Approach

### Approach 1: Top-Down Analysis
Starting from industry-level data and working down to the addressable fraction.

Step-by-step:
1. Identify the parent industry (cite data source, note if estimated)
2. Define the relevant sub-segment within that industry
3. Apply addressability filter (% of market that has the problem you solve)
4. Apply willingness-to-pay filter (% who would pay for a solution)
5. Document each step's assumption and confidence level (HIGH / MEDIUM / LOW)

### Approach 2: Bottom-Up Analysis
Starting from unit economics and building up.

Step-by-step:
1. Define the ideal customer profile precisely
2. Estimate total number of potential customers (with source / methodology)
3. Estimate average contract value (annual) — broken down by pricing tier if applicable
4. Calculate: # customers × ACV = bottom-up TAM
5. Cross-check against top-down result — explain any divergence

### Market Size Calculations

**TAM (Total Addressable Market)**
The full market if you had 100% share. Use the larger of top-down and bottom-up, explain why.

**SAM (Serviceable Addressable Market)**
Who you can realistically reach with your current model:
- Geographic constraints
- GTM channel constraints
- Product capability constraints today

**SOM (Serviceable Obtainable Market — 3-year horizon)**
What you can win in 3 years:
- Comparable company growth benchmarks (cite real examples)
- Assumed market share capture rate with reasoning
- Key dependencies (sales capacity, product roadmap)

### Scenario Analysis
| Scenario | Key Assumption | TAM | SAM | SOM |
|---|---|---|---|---|
| Bear case | Market grows at X%, win rate Y% | | | |
| Base case | | | | |
| Bull case | | | | |

### Sensitivity Analysis
What are the top 3 assumptions that most affect the SOM? Show how ±20% change in each assumption moves the number.

### What Would Make This Market Bigger / Smaller
- Expansion triggers (new regulations, technology shifts, demographic changes)
- Compression risks (competition, substitutes, market consolidation)

### Comparable Market Context
Name 2–3 analogous markets (different industries, similar dynamics) and their actual sizes for investor calibration.

## Output
- Sizing model (structured table)
- Investor-ready market slide narrative (200 words, assertion → evidence → conclusion)
- Assumption log (every assumption numbered and documented)`,
    category: 'research',
    tags: ['market-sizing', 'tam', 'investor', 'analysis', 'startup'],
    difficulty: 'intermediate',
    useCase: 'Use when building investor materials or strategic planning documents that require defensible market size claims.',
    authorUsername: 'promptarchitect',
    likes: 312,
    saves: 198,
    copies: 745,
    views: 4100,
    trendScore: 312*2 + 198*3 + 745 + 4100*0.2,
    trendingScore: 312*2 + 198*3 + 745 + 4100*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Report',
    whyTrending: 'Investors dismiss slides that cite top-down market sizes without bottom-up validation. This dual approach builds credibility.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 745,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-27',
  },
  {
    id: 'lib-res-003',
    title: 'Competitive Feature Matrix Builder',
    slug: 'competitive-feature-matrix-builder',
    description: 'Builds a comprehensive competitive analysis with feature matrix, positioning map, honest strength/weakness assessment, and 90-day response plan.',
    content: `You are a product strategist who has built competitive intelligence programs for B2B SaaS and consumer products. Build a comprehensive competitive analysis for [PRODUCT] competing against [COMPETITOR_LIST].

## Analysis Framework

### 1. Competitor Profiles (one section per competitor)
For each competitor:
- Company overview (stage, funding, team size, primary market)
- Core feature set description
- Pricing model and tiers (exact prices if public, estimate if not — note which)
- Primary target customer segment
- Go-to-market approach (PLG / sales-led / channel)
- Key strengths (be honest — what do they genuinely do better?)
- Key weaknesses (honest assessment — not marketing spin)
- Recent product moves (last 6 months: launches, acquisitions, pivots)

### 2. Head-to-Head Feature Matrix
Columns: your product + each competitor
Rows: every feature category that matters to buyers
Rating: ✓ (has it) / ✗ (missing) / ~ (partial/limited) / 🏆 (best in class)

Feature categories to include:
- Core functionality
- Integrations / API
- Pricing flexibility
- Onboarding / ease of use
- Support / SLA
- Security / compliance
- Mobile / web parity
- Analytics / reporting

### 3. Customer Reviews Theme Analysis
Aggregate themes from G2, Capterra, Reddit, App Store (note: you may need to research this):
For each competitor:
- Top 3 praise themes (what customers love)
- Top 3 complaint themes (what frustrates customers)
- Common switching triggers (what made customers leave)

### 4. Synthesis: Where You Win and Lose

**Where You Win (be specific, not generic):**
- Feature X vs Competitor A: your advantage is [specific] because [evidence]

**Where You Lose (honest list):**
- Feature Y: Competitor B has a 2-year head start and [specific capability you lack]

**Blue Ocean Opportunities:**
- What's under-served across all competitors?
- Which customer segments are poorly served?

**Features Worth Building (competitive response):**
- Rank by: competitive importance vs build effort

**Messaging Angles That Work:**
- What can you say that competitors cannot credibly say?

### 5. Positioning Map
ASCII 2x2 map — choose the 2 dimensions that most differentiate you:
\`\`\`
High [Dimension 2]
        |
  B     |    You
        |
--------|--------
  A     |    C
        |
Low [Dimension 2]
  Low [D1] --- High [D1]
\`\`\`

### 6. 90-Day Competitive Response Plan
- Month 1: Quick wins (messaging, battlecard updates, feature flags)
- Month 2: Product gaps to close (highest ROI)
- Month 3: Positioning shift or new segment focus

## Output
- Feature matrix table (markdown)
- Competitor profiles (one page each)
- Positioning map
- 90-day action plan with owner and metric per item`,
    category: 'research',
    tags: ['competitive-analysis', 'product-strategy', 'positioning', 'features', 'market'],
    difficulty: 'intermediate',
    useCase: 'Use when entering a new market, preparing for a product launch, or updating your competitive battlecards.',
    authorUsername: 'growthoperator',
    likes: 198,
    saves: 134,
    copies: 512,
    views: 3100,
    trendScore: 198*2 + 134*3 + 512 + 3100*0.2,
    trendingScore: 198*2 + 134*3 + 512 + 3100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Shallow competitive analyses mislead product teams. This framework forces honest assessment across the dimensions buyers actually care about.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 512,
    estimatedTokens: 880,
    model: 'gpt-4o',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-res-004',
    title: 'Survey Design and Optimization Guide',
    slug: 'survey-design-and-optimization-guide',
    description: 'Designs a high-response, statistically valid survey with question sequencing, skip logic, distribution timing, and analysis plan.',
    content: `You are a survey researcher with expertise in quantitative research design and behavioral psychology. Design a high-response, statistically useful survey for [RESEARCH_GOAL].

## Inputs
- Audience: [AUDIENCE]
- Distribution channel: [DISTRIBUTION_CHANNEL] (email / in-app / social / panel)
- Sample size target: [SAMPLE_SIZE_TARGET]

## Survey Design Components

### 1. Survey Structure and Question Sequence
Optimal flow to minimize dropout:
- Opening: start with an easy, engaging question (never demographics first)
- Body: logical flow from general → specific
- Close: demographics and sensitive questions last
- Final: optional open-ended for unprompted insights

### 2. Question Types by Objective
When to use each type (with examples for your topic):

**Likert Scale (5- or 7-point)**
- Use for: attitude, satisfaction, agreement
- Avoid: scale fatigue beyond 5 consecutive Likert questions

**Net Promoter Score (0–10)**
- Use for: overall satisfaction, recommend-likelihood
- Always follow with: "What is the primary reason for your score?"

**Multiple Choice (single-answer)**
- Use for: categorical behaviors, tool usage, role
- Include: "Other (please specify)" when list may be incomplete

**Ranking**
- Use for: prioritization when all options are plausible
- Limit to: 5 items max (cognitive overload beyond 5)

**Open-Ended**
- Use for: unexpected insights, complaint capture, verbatim
- Placement: after closed questions about the same topic
- Limit to: 1–2 per survey

### 3. Question Wording Guide
Common biases to eliminate:
- Leading questions: remove evaluative language ("How much do you love…" → "How do you feel about…")
- Double-barreled: split into two questions ("fast and easy" → ask separately)
- Loaded assumptions: don't assume behavior ("How often do you use X" assumes they use it)
- Acquiescence bias: balance agree/disagree prompts, include reverse-scored items

### 4. Skip Logic Map
Define branching rules:
- If Q3 = "Never use" → skip to Q8
- If Q5 = "Enterprise" → show Q6a; else show Q6b
- Document all skip paths in a decision tree

### 5. Survey Length Optimization
- Target completion time: 5 minutes maximum (test with a stopwatch)
- Words per question: 20 words max
- Scale: if you must go long, add a progress bar
- Mobile optimization: test on phone (44% of survey responses are mobile)

### 6. Incentive Strategy
- Intrinsic incentives (tell participants what you'll do with the data)
- Extrinsic incentives (when to use gift cards, sweepstakes — tradeoffs for response quality)
- Optimal incentive per distribution channel

### 7. Distribution Timing
- Email: Tuesday–Thursday, 9–11am local time
- In-app: trigger after specific positive action (not on a failure screen)
- Avoid: Monday mornings, Friday afternoons, major holidays

### 8. Response Rate Improvement Tactics
- Subject line optimization for email surveys
- Sender identity (person vs company name)
- Reminder sequence (when and how many)
- Mobile vs desktop landing page

### 9. Statistical Validity Considerations
- Minimum sample size formula for your margin of error (at 95% confidence)
- Response bias assessment (are responders representative?)
- How to handle partial completions

## Output
- Complete survey draft (questions numbered, formatted for copy-paste to tool)
- Analysis plan: which question answers which research objective
- Distribution checklist`,
    category: 'research',
    tags: ['survey', 'quantitative', 'research-design', 'ux', 'product'],
    difficulty: 'beginner',
    useCase: 'Use when designing a survey to ensure statistical validity, high response rates, and actionable data.',
    authorUsername: 'growthoperator',
    likes: 167,
    saves: 112,
    copies: 445,
    views: 2700,
    trendScore: 167*2 + 112*3 + 445 + 2700*0.2,
    trendingScore: 167*2 + 112*3 + 445 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Document',
    whyTrending: 'Most surveys produce junk data due to question bias and poor design. This guide applies behavioral science to get reliable responses.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 445,
    estimatedTokens: 810,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-14',
  },
  {
    id: 'lib-res-005',
    title: 'Jobs-to-be-Done Research Protocol',
    slug: 'jobs-to-be-done-research-protocol',
    description: 'Guides a complete JTBD analysis using switch interviews, job story extraction, and competing solutions mapping to drive product decisions.',
    content: `You are a JTBD (Jobs-to-be-Done) researcher trained in the Christensen and Ulwick methodologies. Conduct a JTBD analysis for [PRODUCT].

## Inputs
- Customer segment: [CUSTOMER_SEGMENT]
- Product category: [PRODUCT_CATEGORY]

## JTBD Research Protocol

### 1. Switch Interview Methodology
The most powerful source of JTBD insight: talk to people who switched FROM something to your product (or from your product to a competitor).

**Recruiting Criteria**
- Interview customers who made a switch in the last 6 months (memory is still fresh)
- Target both directions: new customers who switched to you AND churned customers who switched away

**Switch Interview Guide (8 core questions)**
The goal is to reconstruct the timeline from first struggle → search → switch decision.
1. When did you first realize you needed something different? (the "first thought" moment)
2. What were you using before, and what made it stop being good enough?
3. Walk me through the moment you decided to look for alternatives.
4. How did you find [product]?
5. What was the thing that made you say "yes, this is the one"?
6. Was there anything that almost stopped you from switching?
7. What do you use [product] for most? What job is it really doing for you?
8. Is there anything you still can't get done that you wish you could?

### 2. Job Story Extraction
Extract structured job statements from interview data.

Format: "When [situation], I want to [motivation], so I can [desired outcome]."

Rules for valid job stories:
- Situation must be specific and observable (not generic)
- Motivation must be functional (not a feature request)
- Outcome must be measurable or observable

Example template:
"When [specific context that creates the struggle], I want to [functional job], so I can [outcome that resolves the struggle]."

Target: extract 15–25 distinct job stories from 8–10 interviews.

### 3. Progress Metrics Identification
For each job story, define: how does the customer know the job is "done well"?
These are the actual success criteria you're competing on (not your metrics — theirs).

### 4. Competing Solutions Map
For each major job: what are ALL the ways customers currently get this done?
- Your product
- Direct competitors
- Indirect substitutes (spreadsheets, manual processes, workarounds)
- Non-consumption (they just don't do it at all today)

This map reveals your true competitive set — which is often wider than you assume.

### 5. Job Dimensions
For each core job, analyze all three layers:
- **Functional job**: the practical task they're trying to accomplish
- **Emotional job**: how they want to feel (or avoid feeling) while doing it
- **Social job**: how they want to be perceived by others

### 6. Job Importance vs Satisfaction Analysis (ODI framework)
Rate each job (from customer interviews):
- Importance: how important is it that this job gets done well? (1–10)
- Satisfaction: how satisfied are you with current solutions? (1–10)
- Opportunity score: importance + (importance – satisfaction) → highest scores = biggest unmet needs

## Output
- Job statements library (15–25 statements, organized by theme)
- Hiring / firing decision map: what made customers hire / fire your product
- Competing solutions map (all alternatives per job)
- ODI opportunity score table
- Top 5 product implications with priority rationale`,
    category: 'research',
    tags: ['jtbd', 'user-research', 'product-strategy', 'interviews', 'innovation'],
    difficulty: 'intermediate',
    useCase: 'Use when repositioning a product, entering a new segment, or identifying the true unmet needs in your market.',
    authorUsername: 'promptarchitect',
    likes: 287,
    saves: 189,
    copies: 678,
    views: 3800,
    trendScore: 287*2 + 189*3 + 678 + 3800*0.2,
    trendingScore: 287*2 + 189*3 + 678 + 3800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'JTBD is the framework that replaced persona-based research at top product companies. This protocol makes it actionable for any team.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 678,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-31',
  },
  {
    id: 'lib-res-006',
    title: 'Product-Market Fit Signal Tracker',
    slug: 'product-market-fit-signal-tracker',
    description: 'Evaluates product-market fit signals across retention, PMF score, NPS, and organic growth to produce a composite diagnosis and experiments.',
    content: `You are a startup analyst who has evaluated PMF for 50+ early-stage companies. Evaluate product-market fit signals for [PRODUCT].

## Inputs
- Usage data: [USAGE_DATA]
- Retention cohorts: [RETENTION_COHORTS]
- Survey results: [SURVEY_RESULTS] (if available)

## PMF Signal Framework

### 1. Sean Ellis PMF Score
The "how disappointed would you be if you could no longer use this product?" survey.
- Score: % of respondents who answer "Very disappointed"
- Benchmark: > 40% = strong PMF signal
- Your score: [from SURVEY_RESULTS]
- Analyze: which customer segment gives the highest score? (ICP signal)
- Qualitative: what themes appear in "very disappointed" respondents' reasons?

### 2. Retention Curve Analysis
Upload or describe your D1/D7/D14/D30 retention cohort data.
- Shape diagnosis:
  - Declining to zero → no PMF, product doesn't solve a real recurring need
  - Declining to a flat line (> 20%) → PMF present in a segment
  - Growing over time → strong PMF with compounding habit formation
- Benchmark by category (consumer app, B2B SaaS, marketplace — different baselines)
- Identify: which cohort (month, channel, segment) has best retention?

### 3. NPS and Qualitative Themes
- NPS score and trend
- Promoter verbatim themes (what do they love specifically?)
- Detractor verbatim themes (what is blocking broader love?)
- Passive verbatim (what would tip them to promoter?)

### 4. Organic Growth Signals
- Referral rate: what % of new users came from word of mouth?
- Virality coefficient (K-factor): if > 0.5, strong organic signal
- Unsolicited sharing: are users sharing unprompted? (social posts, Slack screenshots)
- Community formation: are users forming communities around your product?

### 5. Revenue Retention (B2B)
- Net Revenue Retention (NRR): > 100% = expansion PMF signal
- Gross Revenue Retention (GRR): < 90% churn = retention problem
- Expansion revenue sources: upgrades, seats, usage

### 6. Usage Frequency vs Expectation
- How often do users use the product vs how often the product's value proposition requires?
- DAU/MAU ratio benchmark for your category
- Do power users exist? What does their behavior look like?

### 7. ICP Fit Analysis
Are the customers who love you the customers you intended to serve?
- Compare: designed ICP vs actual best customers
- If different: pivot consideration vs ICP redefinition

## PMF Composite Diagnosis

| Signal | Score | Weight | Weighted Score | Interpretation |
|---|---|---|---|---|
| Ellis PMF score | | 25% | | |
| Retention curve shape | | 25% | | |
| Organic growth rate | | 20% | | |
| NPS + qualitative | | 15% | | |
| Revenue retention | | 15% | | |

## Output
- PMF composite score (0–100) with scoring rubric
- Strongest signals (what evidence supports PMF)
- Weakest signals (what is dragging the score down)
- 5 prioritized experiments to improve weakest signals
- ICP refinement recommendation`,
    category: 'research',
    tags: ['pmf', 'product-market-fit', 'retention', 'startup', 'analytics'],
    difficulty: 'intermediate',
    useCase: 'Use when evaluating whether a product has hit PMF or diagnosing why growth is stalling despite apparent usage.',
    authorUsername: 'growthoperator',
    likes: 234,
    saves: 156,
    copies: 589,
    views: 3300,
    trendScore: 234*2 + 156*3 + 589 + 3300*0.2,
    trendingScore: 234*2 + 156*3 + 589 + 3300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Report',
    whyTrending: 'Founders confuse activity metrics with PMF. This multi-signal framework cuts through vanity metrics to find the truth.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 589,
    estimatedTokens: 840,
    model: 'gpt-4o',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-res-007',
    title: 'Focus Group Facilitator Script',
    slug: 'focus-group-facilitator-script',
    description: 'Creates a complete focus group session plan with discussion guide, conflict management, silent participant activation, and debrief protocol.',
    content: `You are a qualitative research facilitator who has run 200+ focus groups for Fortune 500 brands. Create a focus group session plan for researching [TOPIC] with [PARTICIPANT_PROFILE].

## Session Overview
- Duration: 90–120 minutes
- Participants: 6–8 (optimal for discussion balance)
- Format: in-person preferred / remote (Zoom) alternative setup included

## Pre-Session Preparation

### Stimulus Materials Brief
What to prepare before the session:
- Concept cards / prototypes / ad mockups (if testing something specific)
- Warm-up activity materials (Post-it notes, printed prompts)
- Recording consent forms
- Participant name tents
- Note-taker briefing document

### Room / Digital Setup Requirements
In-person: U-shaped seating, recording device placement, observation room setup
Remote: waiting room enabled, co-host designated, breakout room configured, chat moderation plan

### Note-Taker Briefing
Assign roles: primary facilitator / note-taker / observer.
Note-taker instructions: capture verbatim quotes, non-verbal cues, moments of disagreement, body language signals.

## Session Script

### Opening (10 minutes)
Verbatim facilitator intro:
- Welcome and purpose statement
- Ground rules (no right/wrong answers, speak one at a time, confidentiality)
- Recording consent read-aloud
- Introductions round

### Warm-Up Activity (10 minutes)
Get participants talking before the sensitive topic:
- Activity description (e.g., write one word on a card)
- How to debrief the activity into the discussion

### Core Discussion Guide (60–70 minutes)
**Section 1: Open Exploration (20 min)**
3–4 open questions with probing approach

**Section 2: Specific Deep-Dive (25 min)**
5–6 questions on the core research topic
Include: devil's advocate prompt (introduce a contrarian view to surface real opinions)

**Section 3: Concept Reaction (20 min, if applicable)**
- Concept reveal protocol: show simultaneously, silent reaction first, then discuss
- Reaction questions: feelings first → opinions second

### Wrap-Up (10 minutes)
- Final round: one thing I want to add…
- Debrief: what surprised you about this conversation?

## Facilitation Techniques

### Conflict Management
When participants disagree sharply:
- Acknowledge both perspectives: "You two see this differently — that's valuable. [Name], tell us more about why you see it that way."
- Don't resolve the conflict — the tension is data.
- If hostile: redirect with a new question to the group.

### Silent Participant Activation
When someone hasn't spoken in 10+ minutes:
- Direct question technique: "[Name], you've been listening carefully — what's your take on this?"
- Written response option: "Let's take 2 minutes — everyone write their answer before we discuss."
- Pairing: small group discussion before reporting to the full group.

### Group Dynamics Management
- Dominant participant: "I want to make sure we hear from everyone. [Other name], what do you think?"
- Group consensus forming too fast: "Does anyone see it differently? There's no wrong answer here."
- Off-topic drift: "That's interesting — let me park that and bring us back to…"

## Post-Session Debrief Guide
Immediately after the session (15 minutes):
- What surprised us?
- What confirmed existing hypotheses?
- What needs more investigation?
- Top 3 quotes to bring back to the team

## Output
- Complete facilitation script (copy-paste ready)
- Note-taker observation sheet template
- Observation framework for stakeholders watching
- Analysis approach: affinity mapping process for synthesizing multiple groups`,
    category: 'research',
    tags: ['focus-group', 'qualitative', 'facilitation', 'ux-research', 'product'],
    difficulty: 'intermediate',
    useCase: 'Use when planning and running focus groups for product, brand, or marketing research.',
    authorUsername: 'growthoperator',
    likes: 98,
    saves: 67,
    copies: 231,
    views: 1600,
    trendScore: 98*2 + 67*3 + 231 + 1600*0.2,
    trendingScore: 98*2 + 67*3 + 231 + 1600*0.2,
    trending: false,
    featured: false,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Focus groups fail when facilitators lose control of group dynamics. This script handles every scenario with verbatim language.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 231,
    estimatedTokens: 920,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-05',
  },
  {
    id: 'lib-res-008',
    title: 'Industry Trend Analysis Framework',
    slug: 'industry-trend-analysis-framework',
    description: 'Conducts a STEEP trend analysis with signal/noise filtering, adoption curve positioning, and strategic implications for your company type.',
    content: `You are an industry analyst who produces strategic foresight reports for executive teams. Conduct a trend analysis for [INDUSTRY] over the [TIMEFRAME].

## Inputs
- Key players: [KEY_PLAYERS]
- Adjacent industries: [ADJACENT_INDUSTRIES]

## STEEP Framework Analysis

### Social Trends
Demographic, cultural, and behavioral shifts affecting the industry:
- Trend name
- Evidence and data points
- Rate of change (fast / slow)
- Who it affects most in the value chain
- Implication for your company type

### Technological Trends
Emerging and maturing technologies reshaping the industry:
- Trend name
- Current maturity level (Gartner Hype Cycle position)
- Time to mainstream adoption (estimate)
- Cost curve trajectory
- Enabling or threatening?

### Economic Trends
Macro and sector-specific economic forces:
- Trend name
- Leading indicators to watch
- Impact on pricing power, margins, capital availability
- Duration (cyclical vs structural)

### Environmental Trends
Regulatory, climate, and sustainability forces:
- Trend name
- Regulatory timeline (proposed → enacted → enforced)
- Cost impact on operations
- Competitive advantage opportunity

### Political / Regulatory Trends
Government actions, policy shifts, and geopolitical factors:
- Trend name
- Geographic scope
- Probability of enactment (HIGH / MEDIUM / LOW)
- Timeline to impact

## Advanced Analysis

### Signal vs Noise Filtering
For each trend, apply:
- How many independent sources corroborate it?
- Is it driven by a fundamental shift or a temporary disruption?
- Are early adopters ahead of the mainstream by months or years?
- Noise flag: media hype without underlying data

### Adoption Curve Positioning
Where is each trend on the S-curve?
- Innovators (< 2.5% adoption)
- Early adopters (2.5–16%)
- Early majority (inflection point — act now)
- Late majority (too late for first-mover advantage)
- Laggards (defensive play only)

### Trend Impact Assessment
For each major trend: who wins, who loses in the existing value chain?
- Winners: companies positioned ahead of the trend
- Losers: companies whose core advantage is eroded
- New entrants enabled

### Second-Order Effects
For the top 3 trends: what happens next after the first-order effect?
Example: remote work (first order) → suburban real estate boom (second order) → local service economy revival (third order)

### Weak Signals to Watch
5 early indicators that haven't become mainstream trends yet but show consistent signal:
- Signal description
- Where it's appearing (geography, demographic, company type)
- Timeline to potential mainstream breakout

### Convergence Opportunities
Where do 2 or more trends intersect to create a new opportunity?
Map combinations: Trend A + Trend B = [opportunity for which company type]

## Output
- Trend radar (ASCII visualization): 4 quadrants by impact × certainty
- Top 5 trend narratives (200 words each: what, evidence, implication)
- Strategic implications table: trend × your company type → action
- Scenario planning inputs: 3 plausible 5-year scenarios based on trend combinations`,
    category: 'research',
    tags: ['trends', 'industry-analysis', 'strategy', 'foresight', 'steep'],
    difficulty: 'intermediate',
    useCase: 'Use during annual strategy planning or when entering a new market to map forces that will shape the landscape.',
    authorUsername: 'growthoperator',
    likes: 187,
    saves: 124,
    copies: 498,
    views: 2900,
    trendScore: 187*2 + 124*3 + 498 + 2900*0.2,
    trendingScore: 187*2 + 124*3 + 498 + 2900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Strategy decks that cite trends without STEEP rigor get dismissed. This framework produces analysis boards actually trust.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 498,
    estimatedTokens: 870,
    model: 'gpt-4o',
    createdAt: '2024-11-28',
  },
  {
    id: 'lib-res-009',
    title: 'Expert Interview Synthesis Guide',
    slug: 'expert-interview-synthesis-guide',
    description: 'Synthesizes expert interview notes into a structured research report with theme extraction, credibility weighting, and key findings hierarchy.',
    content: `You are a research analyst specializing in turning messy qualitative data into executive-ready insights. You have conducted [NUMBER] expert interviews on [TOPIC]. Synthesize the insights into a research report.

## Inputs
Interview notes or transcripts: [INTERVIEW_NOTES_OR_TRANSCRIPTS]

## Synthesis Methodology

### 1. Transcript Cleaning
Before analysis:
- Standardize format (speaker identification, time stamps removed for analysis)
- Correct misheard words using context
- Flag ambiguous statements for follow-up
- Note non-verbal cues captured by note-taker

### 2. Open Coding
First pass through all material:
- Read without trying to synthesize — just tag observations
- Tag format: [OBSERVATION] → [CODE LABEL]
- Aim for 80–120 individual codes from [NUMBER] interviews
- Don't cluster yet — preserve raw data fidelity

### 3. Theme Clustering (Affinity Mapping)
Group codes into themes:
- Physical or digital affinity map (Post-it or Miro equivalent)
- Merge themes that are 80%+ similar
- Target: 8–15 themes from the raw codes
- Name each theme as an assertion, not a topic: "Procurement bottlenecks slow adoption" not "Procurement"

### 4. Agreement vs Disagreement Mapping
For each theme:
- Consensus finding: 80%+ of experts expressed this
- Majority finding: 60–79% expressed this
- Minority finding: 40–59% expressed this
- Dissenting view: < 40% — still worth noting if from a credible source

### 5. Expert Credibility Weighting
Not all expert opinions are equal:
- Weighting factors: years of direct experience, organizational access, track record of predictions, potential bias (financial interest, employer)
- Note credibility rating per expert (don't name them — use Expert A/B/C anonymization)
- When high-credibility experts dissent from consensus: always flag

### 6. Quote Selection
For each key finding, select the best supporting quote:
- Impact criterion: is this surprising, specific, or memorable?
- Clarity criterion: understandable without context?
- Diversity criterion: represents a range of expert perspectives?
- Avoid: generic statements that could apply to any industry

### 7. Insight Hierarchy
Sort findings into tiers:
- **Non-obvious insights** (top priority): contradict conventional wisdom, explain something previously unexplained, have high action value
- **Confirming insights**: validate existing hypotheses with new evidence
- **Background facts**: contextually useful but not surprising

### 8. Data Triangulation
For each major insight:
- Cross-reference with secondary sources (industry reports, data)
- Flag where expert opinion and data diverge — this divergence is itself an insight
- Confidence level: HIGH (multiple experts + data support) / MEDIUM (experts only) / LOW (single source)

## Output
- Executive summary (300 words, assertion-led, 3–5 key findings only)
- Key findings section (8–12 findings, ranked by non-obviousness + action value)
- Dissenting views section (critical voices — don't bury disagreement)
- Confidence levels per finding
- Implications: what does this mean for the reader's decisions?`,
    category: 'research',
    tags: ['qualitative', 'synthesis', 'expert-interviews', 'analysis', 'research'],
    difficulty: 'intermediate',
    useCase: 'Use after completing a round of expert interviews to convert raw notes into structured, credible findings.',
    authorUsername: 'promptarchitect',
    likes: 145,
    saves: 98,
    copies: 378,
    views: 2300,
    trendScore: 145*2 + 98*3 + 378 + 2300*0.2,
    trendingScore: 145*2 + 98*3 + 378 + 2300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Report',
    whyTrending: 'Interview data loses value without systematic synthesis. This protocol ensures insights are credible, ranked, and decision-ready.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 378,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-12',
  },
  {
    id: 'lib-res-010',
    title: 'Win/Loss Customer Analysis',
    slug: 'win-loss-customer-analysis',
    description: 'Analyzes sales win/loss patterns from multiple data sources to produce a diagnosis, sales playbook updates, and product roadmap inputs.',
    content: `You are a product and sales researcher who has run win/loss programs for B2B companies scaling from $1M to $50M ARR. Analyze win/loss patterns for [PRODUCT].

## Inputs
- Data source: [DATA_SOURCE] (sales call recordings / post-sale surveys / churned customer interviews / CRM notes)
- Recent win examples: [RECENT_WIN_EXAMPLES]
- Recent loss examples: [RECENT_LOSS_EXAMPLES]

## Analysis Framework

### 1. Top 3 Reasons Won (from Customer Perspective)
Critical: this is the customer's stated reason, not the sales rep's interpretation.
For each reason:
- Frequency (how many wins cite this)
- Customer segment where this reason appears most
- Verbatim quote (anonymized)
- How to amplify this in messaging

### 2. Top 3 Reasons Lost (from Customer Perspective)
For each reason:
- Frequency (how many losses cite this)
- Which competitor won (if applicable)
- Was this a fixable product gap or a positioning/messaging gap?
- Immediate mitigation vs long-term fix

### 3. Decision Factors by Customer Segment
Segment your analysis (e.g., SMB vs Enterprise, or by industry vertical):
For each segment:
- Primary decision criteria (what matters most)
- Evaluation process (who's involved, how long)
- Deal breakers (what automatically disqualifies a vendor)
- Which segment has highest win rate and why

### 4. Competitive Differentiators That Mattered
Focus on the moments in the sales process where competition was cited:
- Which competitors appear most in losses? (name and frequency)
- Which features/capabilities are mentioned most in competitor wins?
- Where did customers conduct head-to-head comparisons?
- Battlecard implications: what do reps need to know?

### 5. Price Sensitivity Analysis
- Did price appear in losses? (% of losses where price was cited)
- Was price the real reason or a proxy for value doubt?
- Discount patterns: when discounts were given, did they help win rate?
- Price positioning gap (too expensive vs too cheap / untrustworthy)

### 6. Sales Motion Analysis
- Which sales motions correlated with wins? (demo-first / trial / ROI calculator / exec sponsor)
- Which sales behaviors correlate with losses? (too many demos, no champion identified)
- Cycle length: do faster cycles win more often?
- Deal size: any correlation between deal size and win rate?

### 7. Product Gaps Most Cited in Losses
- Ranked list of missing features that killed deals
- Each gap: frequency, deal value affected, feasibility to close
- Fast mitigation options (positioning reframe vs actual build)

### 8. Relationship and Timing Factors
- Champion quality: did wins have internal champions? Losses lack one?
- Timing triggers: what events created urgency that led to wins?

## Output
- Win/loss analysis report (executive summary + full findings)
- Sales playbook updates (3–5 specific changes to rep behavior)
- Product roadmap inputs (ranked feature gaps by revenue impact)
- Messaging updates (how to reframe losses due to positioning gaps)`,
    category: 'research',
    tags: ['win-loss', 'sales', 'competitive', 'product', 'churn'],
    difficulty: 'intermediate',
    useCase: 'Use quarterly to keep sales playbooks and product roadmaps aligned with real buyer behavior in competitive deals.',
    authorUsername: 'growthoperator',
    likes: 176,
    saves: 118,
    copies: 467,
    views: 2700,
    trendScore: 176*2 + 118*3 + 467 + 2700*0.2,
    trendingScore: 176*2 + 118*3 + 467 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Report',
    whyTrending: 'Win/loss analysis is the highest-ROI research activity for B2B companies. Most do it ad hoc — this makes it systematic.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 467,
    estimatedTokens: 820,
    model: 'gpt-4o',
    createdAt: '2024-12-19',
  },
  {
    id: 'lib-res-011',
    title: 'Secondary Research Synthesis Protocol',
    slug: 'secondary-research-synthesis-protocol',
    description: 'Synthesizes secondary research from multiple source types into a credibility-weighted literature review with gap analysis and primary research recommendations.',
    content: `You are a research analyst who produces rigorous secondary research syntheses for strategy and investment teams. Synthesize secondary research on [TOPIC] from [SOURCE_TYPES] (academic papers / industry reports / news / analyst data).

## Inputs
- Research question: [RESEARCH_QUESTION]
- Source list or summaries: [SOURCE_LIST_OR_SUMMARIES]

## Synthesis Protocol

### 1. Source Credibility Assessment
Rate each source before reading for content:
| Source | Type | Publisher | Date | Methodology Disclosed | Bias Risk | Credibility Score |
|---|---|---|---|---|---|---|
Types: Peer-reviewed / Industry report / Analyst research / Journalism / White paper / Blog
Credibility rating: HIGH (peer-reviewed + methodology) / MEDIUM (disclosed methodology) / LOW (no methodology disclosed)

### 2. Data Currency Check
For each data point you intend to use:
- Publication date vs data collection date (these differ — always check)
- Has this statistic been updated since publication?
- Is the underlying trend still directionally valid even if the number is dated?
- Red flag: viral statistics that get cited without original source

### 3. Conflicting Data Reconciliation
When sources disagree on facts:
- Document the conflict explicitly: Source A says X, Source B says Y
- Possible explanations: different time periods, different geographies, different definitions, one is wrong
- Resolution: weight by methodology quality, look for a third source, or present both with explanation

### 4. Citation Mapping
Track where each key statistic comes from:
- Original source (do not cite secondary citations — go to the primary)
- Quote vs paraphrase — note the difference
- Statistical context (full sentence, not cherry-picked number)

### 5. Bias Identification per Source
- Who funded this research? (industry-funded studies have known bias patterns)
- What was the author's prior position? (confirmation bias risk)
- Is the sample representative? (self-selected samples, small n)
- Publication bias: were negative results published?

### 6. Key Statistics Extraction
For each statistic worth using:
- The statistic (exact number)
- The claim being supported
- Source, date, sample size
- Reliability rating (HIGH / MEDIUM / LOW)
- Caveats and context required to use honestly

### 7. Gap Analysis
What has NOT been studied or measured?
- Geographic gaps (most research covers US/EU)
- Temporal gaps (outdated research on fast-moving topics)
- Demographic gaps (underrepresented segments)
- Methodological gaps (surveys only, no behavioral data)

### 8. Synthesis Narrative Construction
Assembling findings into a coherent narrative:
- Lead with the most important insight, not chronological order
- Use evidence to support assertions (not assertions to introduce evidence)
- Where sources disagree: present the disagreement, not false consensus

## Output
- Literature review summary (500 words, assertion-led)
- Key data table: statistic | source | date | reliability rating
- Research gaps analysis (what primary research would fill the gaps)
- Recommended primary research questions (5 questions worth investigating)`,
    category: 'research',
    tags: ['secondary-research', 'literature-review', 'synthesis', 'analysis', 'strategy'],
    difficulty: 'intermediate',
    useCase: 'Use when compiling market or competitive research from published sources into a credible, cited synthesis.',
    authorUsername: 'promptarchitect',
    likes: 134,
    saves: 89,
    copies: 342,
    views: 2100,
    trendScore: 134*2 + 89*3 + 342 + 2100*0.2,
    trendingScore: 134*2 + 89*3 + 342 + 2100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Report',
    whyTrending: 'Uncritical secondary research synthesis is one of the most common strategy failures. This protocol adds rigor to the desk research process.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 342,
    estimatedTokens: 780,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-28',
  },
  {
    id: 'lib-res-012',
    title: 'Customer Persona Research Builder',
    slug: 'customer-persona-research-builder',
    description: 'Builds research-backed customer personas from available data with day-in-the-life narratives, buying process maps, and anti-persona definition.',
    content: `You are a customer researcher who builds data-backed personas — not demographic stereotypes. Build research-backed personas for [PRODUCT].

## Inputs
Available data: [AVAILABLE_DATA] (analytics / surveys / interviews / sales notes / CRM data)

## Persona Development Framework

### 1. Data Sources Audit
Before building personas:
- What data do you have? (list and quality-rate each source)
- What data is missing? (gaps that could change the persona significantly)
- How recent is each data source?
- Are there segments in your data suggesting more than one persona?

### 2. Segment Identification
Look for natural clusters in behavior, not demographics:
- Usage pattern clusters (power users vs occasional users vs admin-only)
- Job-to-be-done clusters (different core jobs → different personas)
- Acquisition channel clusters (often predicts different intent)
- Retention rate clusters (who stays vs who churns → very different personas)

### 3. Persona Profile (complete one per segment)

**Identity**
- Persona name and tagline (memorable, not generic — "The Overwhelmed Operator" not "Marketing Manager")
- Demographic range (range, not specific point — don't over-index on demographics)
- Role and organizational context

**Day-in-the-Life Narrative (200 words)**
Walk through a typical day from wake-up to end of work. Where does your product appear (or where should it appear)? What friction do they experience?

**Primary Goals**
- Professional goals (what they're measured on, what gets them promoted)
- Personal goals (work-life balance, learning, reputation)
- Goals directly related to the problem your product solves

**Frustrations (Specific, Not Generic)**
Not: "they're busy" — that applies to everyone.
Yes: "They spend 3 hours every Monday manually reconciling reports from 4 different tools."

**Information Sources**
Where do they learn? (publications, podcasts, LinkedIn, Slack communities, peers)
This drives content strategy.

**Buying Process**
- Who initiates the search for a solution?
- Who evaluates? Who approves?
- How long is the decision process?
- What triggers the decision?

**Objections to Purchase**
Top 3 specific objections this persona raises in sales conversations.

**Success Metrics**
How do they measure value from your product? (in their words, not yours)

**Persona Quote**
One sentence this persona might say that captures their worldview.

### 4. Anti-Persona Definition
Who is NOT your customer:
- Who uses your product but gets no value and churns fast?
- Who do you want to avoid selling to? (support cost, poor fit)
- What characteristics disqualify a prospect?

### 5. Persona Validation
How to test if these personas are accurate:
- Data validation: do analytics confirm the usage patterns described?
- Interview validation: show personas to 3 customers — do they recognize themselves?
- Sales validation: do reps agree these match real buyers?

## Output
- 2–3 persona cards (one-page each, ready for team sharing)
- Anti-persona definition (what to filter out of sales pipeline)
- Validation checklist (before presenting personas to stakeholders)
- How to use personas in: product decisions / content / sales / messaging`,
    category: 'research',
    tags: ['personas', 'user-research', 'product', 'segmentation', 'ux'],
    difficulty: 'beginner',
    useCase: 'Use when building or refreshing customer personas to ensure they are data-backed and actionable across product and marketing.',
    authorUsername: 'growthoperator',
    likes: 189,
    saves: 127,
    copies: 534,
    views: 3000,
    trendScore: 189*2 + 127*3 + 534 + 3000*0.2,
    trendingScore: 189*2 + 127*3 + 534 + 3000*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Most personas are demographic fiction. This framework builds them from behavioral data and includes the anti-persona teams always forget.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 534,
    estimatedTokens: 850,
    model: 'gpt-4o',
    createdAt: '2024-11-05',
  },
  {
    id: 'lib-res-013',
    title: 'Usability Testing Protocol Builder',
    slug: 'usability-testing-protocol-builder',
    description: 'Designs a complete usability testing protocol with task scenarios, severity ratings, facilitator guide, and remote vs in-person considerations.',
    content: `You are a UX researcher who has run 500+ usability tests across consumer apps, enterprise software, and physical products. Design a usability testing protocol for [PRODUCT/FEATURE].

## Inputs
- Research questions: [RESEARCH_QUESTIONS]
- User segment: [USER_SEGMENT]
- Moderated or unmoderated: [MODERATED_OR_UNMODERATED]

## Protocol Components

### 1. Participant Screener
5–7 screening questions to find participants who match the target segment:
- Role / behavior qualifier
- Product experience level (should match your target user's experience, not expert testers)
- Technology comfort level
- Availability and compensation agreement

### 2. Consent and Recording Briefing
Verbatim script for the opening:
- Session purpose (learn from them, not test their skills)
- Recording consent (screen, audio, video)
- Think-aloud instruction
- "There are no wrong answers" framing

### 3. Test Environment Setup

**Moderated Setup**
- Screen sharing configuration
- Note-taker briefing
- Observer briefing (watchers must stay muted, no influencing)
- Recording tool (Lookback / UserTesting / Zoom)

**Unmoderated Setup**
- Task phrasing for self-guided completion
- Dead-end handling (what to tell participant if they get truly stuck)
- Tool configuration (Maze / UserTesting / Lyssna)

### 4. Task Scenario Scripts (5–7 tasks)
For each task:
- Task name
- Scenario framing (realistic context, not "click the blue button")
- Starting state (where should the participant begin?)
- Success criteria (what does successful completion look like?)
- Time limit (if applicable)
- Observer checklist (what to watch for during this task)

Example format:
"Imagine you just received an invoice that needs approval. Please show me what you would do."
✓ Success: navigates to approval screen, completes action
✗ Common failure: [anticipated wrong path]

### 5. Think-Aloud Protocol and Prompts
When participants go silent:
- "What are you thinking right now?"
- "What are you looking for?"
- "What would you expect to happen if you clicked that?"

When participants are confused:
- Don't help — document the confusion
- "What would you do next if this was your own computer?"

When participants finish early:
- "Was anything unexpected about that?"
- "How does this compare to how you usually do this?"

### 6. Issue Severity Rating Scale
Rate every usability issue observed:
| Severity | Definition | Action |
|---|---|---|
| Critical (4) | Prevents task completion | Fix before launch |
| Serious (3) | Major difficulty, workaround required | Fix in next release |
| Moderate (2) | Some difficulty, task completed | Fix in backlog |
| Minor (1) | Cosmetic, preference | Nice to have |
| Info (0) | Observation, no friction | Track only |

### 7. Debrief Questions (end of session)
- "What was the most confusing part of that experience?"
- "What would you change if you could change one thing?"
- "Compared to [alternative they use], what would you say about this?"

### 8. Analysis Framework

**Rainbow Spreadsheet (moderated)**
Columns: participant codes (P1, P2, P3…)
Rows: each usability issue
Fill: ✓ where participant experienced this issue
Pattern: issues in 3+ participants = systemic

**Affinity Map (unmoderated)**
Group observations from session recordings into behavioral themes.

### 9. Mid-Session Protocol if Major Issues Emerge
If a critical issue is discovered in Session 3 of 8:
- Stop and fix, or continue and capture the full scope?
- Decision tree for pausing testing mid-study

## Output
- Complete protocol document (facilitator copy + participant-facing copy)
- Task scenarios (5–7, formatted for your product)
- Issue log template (ready to fill during sessions)
- Analysis worksheet`,
    category: 'research',
    tags: ['usability-testing', 'ux-research', 'user-testing', 'product', 'qualitative'],
    difficulty: 'intermediate',
    useCase: 'Use when planning a usability study to ensure systematic issue discovery and reliable severity assessment.',
    authorUsername: 'promptarchitect',
    likes: 167,
    saves: 112,
    copies: 456,
    views: 2700,
    trendScore: 167*2 + 112*3 + 456 + 2700*0.2,
    trendingScore: 167*2 + 112*3 + 456 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Unstructured usability tests miss systemic issues. This protocol ensures every session generates comparable, analyzable data.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 456,
    estimatedTokens: 890,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-08',
  },
  {
    id: 'lib-res-014',
    title: 'Market Research Interview-to-Insight Pipeline',
    slug: 'market-research-interview-to-insight-pipeline',
    description: 'Builds a step-by-step pipeline for converting customer interview notes into ranked, validated insight cards ready for product decisions.',
    content: `You are a market researcher who has built research operations for product teams conducting 50–200 customer interviews per quarter. Create a systematic pipeline for turning [NUMBER] customer interviews into actionable product insights.

## Inputs
Raw interview notes: [RAW_INTERVIEW_NOTES]

## Pipeline Steps

### Step 1: Transcript Cleaning
Before analysis begins:
- Standardize formatting across all transcripts
- Remove interviewer questions, keep only responses (for frequency analysis)
- Mark time stamps where key moments occurred
- Add initial "hotspot" markers (observations that immediately stood out)

### Step 2: Open Coding
First-pass observation tagging:
- Read each transcript and tag every observation with a short code label
- Code is descriptive, not interpretive: "uses spreadsheet to track" not "hates automation"
- Do not cluster at this stage — preserve raw observation fidelity
- Target: 10–15 raw codes per interview = 10 interviews × 12 codes = ~120 raw codes

### Step 3: Theme Clustering (Affinity Diagramming)
Group raw codes into themes:
- Digital: use FigJam / Miro / Notion
- Physical: Post-it notes on a wall
- Step A: sort codes into obvious clusters
- Step B: name clusters as assertions ("Users don't trust automated suggestions")
- Step C: merge clusters that are > 70% similar
- Target: 10–20 themes from 120+ raw codes

### Step 4: Frequency Count + Surprise Factor Weighting
For each theme:
- Frequency: how many participants expressed this? (n= X of Y)
- Expected: did you expect this finding before the interviews?
- Surprise score: unexpected × high frequency = highest priority insight
- Novel: low frequency but highly unexpected = worth flagging as hypothesis

### Step 5: Insight Statement Formulation
Transform themes into structured insight statements:
**Format**: "We learned that [WHO] [DOES/THINKS/FEELS] [WHAT] because [WHY], which means [IMPLICATION for product/business]."

Examples of bad vs good insight statements:
- Bad: "Users want better search" (solution, not insight)
- Good: "We learned that ops managers lose confidence in search results when results take > 3 seconds, because they assume the tool missed something, which means perceived speed matters more than actual accuracy."

Target: 10–15 insight statements with this format.

### Step 6: Confidence Level Rating
For each insight:
- HIGH: 70%+ of participants, consistent with secondary data, multiple unprompted mentions
- MEDIUM: 40–69% of participants, some secondary support
- LOW: < 40%, single strong source, or contradicts other data
- HYPOTHESIS: 1–2 participants, plausible but unverified

### Step 7: Stakeholder-Ready Synthesis

**Executive narrative** (5 minutes to read):
- Lead with the most important, non-obvious insight
- Connect insights to strategic decisions (not just product features)
- Include 1 quote per key insight

**Insight cards** (for design/product sprints):
- One card per insight
- Fields: insight statement | confidence | frequency | top quote | implication | suggested experiment

## Output
- 10–15 insight cards (formatted for sharing in Notion / Figma / slides)
- Executive narrative (500 words)
- Recommended experiments to validate the top 3 insights (each with: hypothesis, test method, success metric, time to run)`,
    category: 'research',
    tags: ['user-research', 'synthesis', 'insights', 'product', 'qualitative'],
    difficulty: 'intermediate',
    useCase: 'Use after completing a batch of customer interviews to systematically extract, rank, and present insights to product and leadership teams.',
    authorUsername: 'growthoperator',
    likes: 212,
    saves: 143,
    copies: 567,
    views: 3200,
    trendScore: 212*2 + 143*3 + 567 + 3200*0.2,
    trendingScore: 212*2 + 143*3 + 567 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Research insights die in decks nobody reads. This pipeline produces insight cards designed for actual use in product sprints.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 567,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-15',
  },
  {
    id: 'lib-res-015',
    title: 'Benchmark Study Design Framework',
    slug: 'benchmark-study-design-framework',
    description: 'Designs a rigorous benchmark study to measure capabilities across an industry peer group, with maturity model, normalization, and thought leadership output.',
    content: `You are a research strategist who has designed industry benchmark reports that became thought leadership assets attracting 50K+ downloads. Design a benchmark study to measure [METRIC/CAPABILITY] across [INDUSTRY/PEER_GROUP].

## Inputs
- What to measure: [WHAT_TO_MEASURE]
- Comparison group: [COMPARISON_GROUP]
- Data collection method: [DATA_COLLECTION_METHOD] (survey / data analysis / observation / mixed)

## Study Design Framework

### 1. Research Questions
Translate the measurement goal into precise, answerable research questions:
- Primary research question (the headline finding)
- 3–5 secondary questions that support the primary
- Exclusion: what questions are out of scope?

### 2. Benchmark Dimensions and Sub-Metrics
Decompose [WHAT_TO_MEASURE] into measurable dimensions:

| Dimension | What it Measures | Metric(s) | Data Source |
|---|---|---|---|
| Dimension 1 | | | |
| Dimension 2 | | | |
| Dimension 3 | | | |

For each metric:
- Definition (exactly how is this measured?)
- Collection method (survey question / data pull / expert assessment)
- Normalization approach (how to adjust for company size, industry, geography)

### 3. Participant Qualification
Who counts as a valid benchmark participant:
- Inclusion criteria (minimum size, industry, geography, role of respondent)
- Exclusion criteria (vendors, consultants, students)
- Minimum sample size per segment (for statistical significance)
- Stratification plan (ensure representation across company sizes, geographies)

### 4. Data Collection Methodology

**Survey-Based**
- Survey length and format
- Response validation (logic checks, attention traps)
- Incentive strategy
- Fieldwork timeline

**Data-Analysis-Based**
- Data sources (public filings, API pulls, partner data)
- Data cleaning methodology
- Normalization approach

**Mixed Method**
- How survey and data are combined
- Conflict resolution when sources disagree

### 5. Normalization Approach
How to make apples-to-apples comparisons:
- Size normalization (revenue band, employee count, or per-unit metrics)
- Industry normalization (index vs industry average)
- Maturity normalization (compare companies at similar maturity stages)
- Documentation: every normalization choice must be disclosed in methodology

### 6. Maturity Model Structure
Design a 4- or 5-level maturity model:
| Level | Label | Description | % of Participants (typical) |
|---|---|---|---|
| 1 | Beginning | | |
| 2 | Developing | | |
| 3 | Established | | |
| 4 | Advanced | | |
| 5 | Leader | | |

For each level: what distinguishing behaviors separate it from the level below?

### 7. Percentile Calculation
- How to calculate percentile rank for each participant
- Handling ties and small sample cells
- Rounding and presentation conventions

### 8. Anonymization Strategy
- Individual company results: never publish without consent
- Aggregate reporting: minimum n required before reporting a segment
- Opt-in preview program (participants see their own results + anonymous peer comparison)

### 9. Report Structure for Thought Leadership
- Executive summary (2 pages, assertion-led)
- Methodology section (full disclosure for credibility)
- Key findings (5–7 with data visualization descriptions)
- Maturity profiles (what each tier looks like in practice)
- How to improve (actionable guidance per level)
- Appendix: full methodology, questions, normalization logic

### 10. Making Findings Actionable
What separates thought leadership from academic research:
- "So what?" section per finding (implication for practitioners)
- Diagnostic tool (let readers self-assess after reading)
- Recommended next steps by maturity level

## Output
- Study design document (ready for research team handoff)
- Survey instrument draft or data collection spec
- Maturity model (draft framework)
- Report outline with word counts per section
- Distribution and marketing plan for the final report`,
    category: 'research',
    tags: ['benchmark', 'research-design', 'thought-leadership', 'maturity-model', 'industry'],
    difficulty: 'advanced',
    useCase: 'Use when designing an industry benchmark study intended to generate thought leadership and inbound demand.',
    authorUsername: 'promptarchitect',
    likes: 156,
    saves: 108,
    copies: 421,
    views: 2500,
    trendScore: 156*2 + 108*3 + 421 + 2500*0.2,
    trendingScore: 156*2 + 108*3 + 421 + 2500*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Benchmark reports are the highest-converting B2B content format. This framework ensures methodological rigor that earns media coverage.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 421,
    estimatedTokens: 940,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-04',
  },
]
