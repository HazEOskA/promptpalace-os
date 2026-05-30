import type { Prompt } from './prompts'

export const MARKETING_PROMPTS: Prompt[] = [
  {
    id: 'lib-mkt-001',
    title: '7-Email Nurture Sequence for Cold Leads',
    slug: '7-email-nurture-sequence-cold-leads',
    description: 'Creates a complete 7-email nurture sequence with subject lines, body copy, and CTAs for cold leads.',
    content: `You are an expert email marketer with a background in behavioral psychology and direct response copywriting. Create a 7-email nurture sequence for the following product.

## Product Context
- Product: [PRODUCT_NAME]
- Target buyer: [IDEAL_CUSTOMER_PROFILE]
- Pain point: [CORE_PROBLEM]
- Transformation: [OUTCOME_AFTER_PURCHASE]
- Price point: [PRICE]
- Sales cycle: [SHORT/MEDIUM/LONG]

## Sequence Structure
Email 1 (Day 0): Curiosity hook — tease the transformation without revealing the product
Email 2 (Day 2): Problem agitation — make the pain visceral and relatable
Email 3 (Day 4): Social proof story — real or synthetic case study
Email 4 (Day 6): Mechanism reveal — how your product solves the problem uniquely
Email 5 (Day 8): Objection handling — address the top 3 reasons people don't buy
Email 6 (Day 10): Scarcity/urgency — time-bound offer or limited availability
Email 7 (Day 14): Last-chance + reframe — try a completely different angle

## For Each Email Provide
- Subject line (primary + A/B variant)
- Preview text
- Opening hook (first 2 lines)
- Full body (150-250 words)
- CTA (specific and action-oriented)
- P.S. line

## Constraints
- No clickbait or manipulative tactics
- Each email must stand alone (not require reading previous ones)
- Mobile-friendly formatting (short paragraphs, white space)
- Avoid spam trigger words`,
    category: 'marketing',
    tags: ['email', 'nurture', 'copywriting', 'sequences', 'conversion'],
    difficulty: 'intermediate',
    useCase: 'Use when building an automated cold lead nurture flow for a SaaS product, course, or service.',
    authorUsername: 'growthoperator',
    likes: 487,
    saves: 312,
    copies: 1340,
    views: 6800,
    trendScore: 487*2 + 312*3 + 1340 + 6800*0.2,
    trendingScore: 487*2 + 312*3 + 1340 + 6800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Copy',
    whyTrending: 'Email sequences are the highest ROI marketing asset. This template outputs a complete 7-touch sequence with A/B variants.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 1340,
    estimatedTokens: 1000,
    model: 'gpt-4o',
    createdAt: '2024-11-01',
  },
  {
    id: 'lib-mkt-002',
    title: 'Landing Page Copy Framework Builder',
    slug: 'landing-page-copy-framework-builder',
    description: 'Generates conversion-optimized landing page copy with headline variants, benefit stack, and objection handlers.',
    content: `You are a direct response copywriter who has written landing pages generating over $10M in revenue. Write full landing page copy for the following offer.

## Offer Details
- Product/service: [PRODUCT_NAME]
- Target customer: [ICP_DESCRIPTION]
- Core promise: [THE_BIG_PROMISE]
- Price: [PRICE]
- Unique mechanism: [WHAT_MAKES_IT_DIFFERENT]
- Best proof: [TESTIMONIAL_OR_CASE_STUDY]

## Landing Page Structure

### Above the Fold
- 3 headline variants (each taking a different angle: outcome / curiosity / fear)
- Subheadline that reinforces the headline
- Hero image/video description
- Primary CTA (button text + color rationale)

### Problem Section
- Agitate the pain the customer currently feels (3-5 bullet points)
- Show you understand their world specifically
- Transition to the solution

### Solution Section
- Introduce the product as the logical answer to the problem above
- The unique mechanism: why this works when other things failed
- 3-5 core benefits (each framed as outcomes, not features)

### Social Proof
- Testimonial display format recommendation
- 3 synthetic testimonial templates with specific metrics

### Objection Breakers
Top 5 objections and how to address each inline (not in FAQ)

### Pricing Section
- Anchor pricing strategy
- Guarantee language
- Risk reversal statement

### Final CTA Section
- Urgency/scarcity element (ethical)
- Closing argument
- CTA button text variants

## Constraints
- Every line must earn its place — cut fluff aggressively
- Benefit bullets use the formula: [FEATURE] so you can [BENEFIT] which means [TRANSFORMATION]
- No superlatives without proof`,
    category: 'marketing',
    tags: ['landing-page', 'copywriting', 'conversion', 'direct-response'],
    difficulty: 'intermediate',
    useCase: 'Use when building a new product landing page or overhauling a page with low conversion rates.',
    authorUsername: 'growthoperator',
    likes: 398,
    saves: 267,
    copies: 1120,
    views: 5900,
    trendScore: 398*2 + 267*3 + 1120 + 5900*0.2,
    trendingScore: 398*2 + 267*3 + 1120 + 5900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Copy',
    whyTrending: 'Good landing page copy can 10x conversion rates. This framework uses proven direct-response patterns adapted for modern SaaS.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 1120,
    estimatedTokens: 950,
    model: 'gpt-4o',
    createdAt: '2024-10-28',
  },
  {
    id: 'lib-mkt-003',
    title: 'ICP Deep Research and Persona Builder',
    slug: 'icp-deep-research-persona-builder',
    description: 'Builds a detailed ideal customer profile with psychographics, buying triggers, and messaging angles.',
    content: `You are a market researcher and positioning strategist. Build a deep ideal customer profile (ICP) for the following business.

## Business Context
- Product/service: [PRODUCT_DESCRIPTION]
- Industry: [INDUSTRY]
- Current customers (if any): [DESCRIBE_EXISTING_CUSTOMERS]
- Suspected ICP: [YOUR_CURRENT_HYPOTHESIS]

## ICP Research Framework

### 1. Demographic Profile
- Job title(s) and seniority level
- Company size and type (startup/enterprise/SMB)
- Industry verticals (primary + secondary)
- Geography considerations
- Budget authority (buyer vs influencer vs end user)

### 2. Psychographic Profile
- Primary professional frustrations (what keeps them up at night)
- Career motivations and success metrics
- Information consumption habits (where they learn, who they follow)
- Tribe affiliation (communities, conferences, subreddits)
- Identity markers ("I'm the kind of person who...")

### 3. Buying Triggers
List the specific events that make them actively search for a solution:
- Trigger 1: [Event] → [Emotional state] → [Search behavior]
- Trigger 2, 3, 4...

### 4. Decision Process
- How long is the buying journey?
- Who else is involved in the decision?
- What does their evaluation look like?
- What would cause them to NOT buy?

### 5. Message-Market Fit
For this ICP, write:
- The headline that would immediately resonate
- The 3 core value propositions in their language (not yours)
- The proof they need to believe before buying
- The objections to pre-empt

### 6. Where to Find Them
- Top 3 acquisition channels
- Content topics they search for
- Communities they're active in
- Influencers/brands they trust`,
    category: 'marketing',
    tags: ['icp', 'persona', 'research', 'positioning', 'gtm'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of a new product launch or when existing marketing is getting low response rates.',
    authorUsername: 'growthoperator',
    likes: 312,
    saves: 198,
    copies: 867,
    views: 4500,
    trendScore: 312*2 + 198*3 + 867 + 4500*0.2,
    trendingScore: 312*2 + 198*3 + 867 + 4500*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Shallow personas lead to generic messaging. This deep ICP framework uncovers psychographic triggers competitors miss.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 867,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-25',
  },
  {
    id: 'lib-mkt-004',
    title: 'Product Launch Announcement Campaign',
    slug: 'product-launch-announcement-campaign',
    description: 'Writes a full product launch campaign including teaser, launch day, and follow-up messaging across channels.',
    content: `You are a product marketing manager with experience launching B2B and B2C products to market. Write a complete launch campaign for the following product.

## Product Details
- Product name: [PRODUCT_NAME]
- What it does: [ONE_SENTENCE_DESCRIPTION]
- Target audience: [AUDIENCE]
- Launch date: [DATE]
- Launch channels: [LIST: email / twitter / linkedin / producthunt / etc.]
- Launch goal: [SIGNUPS / SALES / WAITLIST / AWARENESS]

## Launch Campaign Assets

### Pre-Launch (T-7 days)
1. Teaser tweet/post (curiosity without revealing what it is)
2. "Something is coming" email to existing list
3. Beta user testimonial post (if available)

### Launch Day (T-0)
1. **Launch announcement tweet/post** (the main one — write 3 variants)
2. **Launch email** to full list:
   - Subject line (3 variants)
   - Full email body (200-300 words)
   - CTA button text
3. **Product Hunt description** (tagline + 250-word description)
4. **LinkedIn post** (professional tone, different angle from Twitter)

### Post-Launch (T+1 to T+7)
1. Day 1 recap post (results + gratitude)
2. "In case you missed it" email (Day 3)
3. Feature highlight post #1 (Day 5)
4. Social proof compilation (Day 7)

## Tone Guidelines
- Excited but not hype-y
- Specific over generic ("saves 3 hours/week" not "saves time")
- Include a real use case in every asset

## Constraints
- Twitter posts: under 280 characters for main message
- Email: mobile-first formatting
- All assets must be immediately usable (no placeholders in final output)`,
    category: 'marketing',
    tags: ['launch', 'product-marketing', 'campaign', 'copywriting', 'social'],
    difficulty: 'beginner',
    useCase: 'Use 1-2 weeks before a product launch to create all campaign assets in one session.',
    authorUsername: 'growthoperator',
    likes: 267,
    saves: 178,
    copies: 734,
    views: 3800,
    trendScore: 267*2 + 178*3 + 734 + 3800*0.2,
    trendingScore: 267*2 + 178*3 + 734 + 3800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Copy',
    whyTrending: 'Launch days are chaotic. This prompt creates all copy assets in advance so you can focus on execution.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 734,
    estimatedTokens: 900,
    model: 'gpt-4o',
    createdAt: '2024-10-22',
  },
  {
    id: 'lib-mkt-005',
    title: 'Competitive Positioning Statement Generator',
    slug: 'competitive-positioning-statement-generator',
    description: 'Develops a sharp market positioning statement and messaging hierarchy that differentiates against top competitors.',
    content: `You are a positioning strategist trained in the methodology of April Dunford (author of Obviously Awesome). Develop the competitive positioning for the following product.

## Product and Market Context
- Product: [PRODUCT_NAME]
- What it does (technical): [FUNCTIONAL_DESCRIPTION]
- Top 3 competitors: [COMPETITOR_1], [COMPETITOR_2], [COMPETITOR_3]
- Current tagline/positioning (if any): [CURRENT_POSITIONING]
- Best customers: [DESCRIBE_HAPPIEST_CUSTOMERS]

## Positioning Development Process

### 1. Competitive Alternatives Analysis
For each competitor:
- Who chooses them and why
- Their core positioning claim
- Their biggest weakness
- What switching away from them looks like

### 2. Unique Value Identification
What can you do that competitors structurally cannot?
(Not better — structurally different due to architecture, data, model, or approach)

### 3. Target Customer Segmentation
Which customers will value your unique capabilities most?
Rank market segments by: fit × size × reachability

### 4. Positioning Statement (2 formats)

**Internal (for team alignment):**
"For [target customer] who [has this problem], [product name] is the [category] that [unique value]. Unlike [primary alternative], we [key differentiator]."

**External (for messaging):**
The market-facing version — punchy, memorable, no jargon

### 5. Messaging Hierarchy
- Level 1: The big claim (1 sentence)
- Level 2: Supporting proof points (3 bullets)
- Level 3: Feature evidence for each proof point
- Level 4: Use case specifics

### 6. Channel-Specific Adaptation
Adapt the positioning for: paid ads headline / email subject / conference pitch / sales call opener`,
    category: 'marketing',
    tags: ['positioning', 'messaging', 'competitive', 'brand', 'gtm'],
    difficulty: 'advanced',
    useCase: 'Use when entering a crowded market, rebranding, or when sales says prospects don\'t understand what you do.',
    authorUsername: 'growthoperator',
    likes: 289,
    saves: 201,
    copies: 678,
    views: 3500,
    trendScore: 289*2 + 201*3 + 678 + 3500*0.2,
    trendingScore: 289*2 + 201*3 + 678 + 3500*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Positioning is the most leveraged marketing investment. This follows April Dunford\'s proven framework adapted for AI-assisted research.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 678,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-18',
  },
  {
    id: 'lib-mkt-006',
    title: 'Growth Experiment Backlog Builder',
    slug: 'growth-experiment-backlog-builder',
    description: 'Generates a prioritized growth experiment backlog with ICE scores, hypotheses, and measurement plans.',
    content: `You are a growth engineer with experience running hundreds of experiments at high-growth startups. Build a prioritized growth experiment backlog for the following funnel.

## Funnel Context
- Product: [PRODUCT_NAME]
- Current funnel stages: [ACQUISITION → ACTIVATION → RETENTION → REVENUE]
- Biggest drop-off: [STAGE_WITH_LOWEST_CONVERSION]
- Current metrics: [PASTE_METRICS_OR_DESCRIBE]
- Team resources: [DEVELOPER_AVAILABLE: YES/NO, DESIGNER: YES/NO]

## Experiment Design Process

### 1. Funnel Audit
For each funnel stage, identify:
- Current conversion rate
- Industry benchmark
- Gap to close
- Primary friction hypothesis

### 2. Experiment Backlog (generate 20 experiments)
For each experiment:

**Experiment: [NAME]**
- Hypothesis: "If we [change X], then [metric Y] will [increase/decrease] because [reason based on user psychology]"
- Stage: [ACQUISITION/ACTIVATION/RETENTION/REVENUE]
- ICE Score:
  - Impact (1-10): How much could this move the metric?
  - Confidence (1-10): How sure are we the hypothesis is right?
  - Ease (1-10): How fast can we build and run this?
  - **Total ICE**: (Impact + Confidence + Ease) / 3
- Minimum sample size: [N users needed for statistical significance]
- Run time: [DAYS]
- Success metric: [PRIMARY_METRIC]
- Guardrail metric: [WHAT_NOT_TO_BREAK]

### 3. Top 5 Quick Wins
Low-effort, high-confidence experiments to run this sprint.

### 4. Measurement Infrastructure
What tracking/analytics needs to be in place before running experiments.`,
    category: 'marketing',
    tags: ['growth', 'experiments', 'ab-testing', 'conversion', 'analytics'],
    difficulty: 'advanced',
    useCase: 'Use at the start of a growth sprint when the team needs a prioritized list of experiments to run.',
    authorUsername: 'growthoperator',
    likes: 223,
    saves: 167,
    copies: 589,
    views: 3100,
    trendScore: 223*2 + 167*3 + 589 + 3100*0.2,
    trendingScore: 223*2 + 167*3 + 589 + 3100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Growth without experiments is guessing. This prompt generates a statistically rigorous experiment backlog in minutes.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 589,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-15',
  },
  {
    id: 'lib-mkt-007',
    title: 'Customer Case Study Writer',
    slug: 'customer-case-study-writer',
    description: 'Transforms a customer interview or notes into a polished case study with before/after metrics.',
    content: `You are a B2B content marketer who specializes in customer success storytelling. Write a compelling case study from the following customer information.

## Customer Information
- Company name: [COMPANY_NAME] (or [ANONYMIZED: Industry + Size])
- Their role/title: [ROLE]
- Problem they had before: [PROBLEM_DESCRIPTION]
- How they found us: [ACQUISITION_CHANNEL]
- How they use our product: [USE_CASE]
- Key results/metrics: [BEFORE_AND_AFTER_METRICS]
- Favorite quote from them: [QUOTE_IF_AVAILABLE]

## Case Study Structure

### Title
Formula: "[Company] [achieved result] in [timeframe] using [product]"
Provide 3 title variants.

### Executive Summary (100 words)
The whole story in 3 sentences: Problem → Solution → Result

### The Challenge Section
- What was their life like before?
- What had they tried that didn't work?
- What was the cost of the problem? (time, money, frustration)

### The Solution Section
- How did they discover and evaluate us?
- How did implementation go? (honest, including bumps)
- Specific features/capabilities they rely on

### The Results Section
**Quantitative wins** (lead with the most impressive number):
- [Metric 1]: X → Y ([Z%] improvement)
- [Metric 2]: ...

**Qualitative wins**:
- How has this changed their team/workflow/stress levels?

### Customer Quote Block
Best 3-sentence quote formatted for pull-quote display.

### Conclusion
CTA paragraph: "If [reader ICP], [product] can [promise]. [Learn more / Book demo / Get started]."

## Format Options
- Web page version (SEO-optimized with headers)
- PDF one-pager version (condensed)
- Tweet thread version (10 tweets)`,
    category: 'marketing',
    tags: ['case-study', 'content', 'social-proof', 'b2b', 'copywriting'],
    difficulty: 'beginner',
    useCase: 'Use after a customer success story surfaces to turn it into a sales-enabling case study.',
    authorUsername: 'growthoperator',
    likes: 178,
    saves: 134,
    copies: 456,
    views: 2400,
    trendScore: 178*2 + 134*3 + 456 + 2400*0.2,
    trendingScore: 178*2 + 134*3 + 456 + 2400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Copy',
    whyTrending: 'Case studies close deals. This prompt turns rough customer notes into polished multi-format case studies.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 456,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-12',
  },
  {
    id: 'lib-mkt-008',
    title: 'Ad Creative Concept Generator',
    slug: 'ad-creative-concept-generator',
    description: 'Generates 10 distinct ad creative concepts with hooks, visuals, and copy for paid social campaigns.',
    content: `You are a performance creative strategist who has managed $5M+ in paid social ad spend. Generate ad creative concepts for the following campaign.

## Campaign Brief
- Product/offer: [PRODUCT_NAME]
- Target audience: [AUDIENCE_DESCRIPTION]
- Platform: [Meta / TikTok / LinkedIn / YouTube]
- Campaign objective: [Awareness / Traffic / Conversions / App Install]
- Budget level: [SMALL < $5k / MEDIUM $5-50k / LARGE $50k+]
- Best performing hooks so far: [IF_KNOWN]

## Creative Concepts (generate 10)

For each concept:

**Concept [N]: [CREATIVE_TYPE_NAME]**
- Hook type: [UGC / Testimonial / Demo / Comparison / Story / Shocking stat / Question]
- Visual description: What the viewer sees in the first 3 seconds
- Hook (first line): The exact opening words/text
- Core message: What we're communicating in the middle 15-30 seconds
- CTA: Exact call to action text
- Why this might work: Psychology behind this concept
- Best for: [Cold audience / Warm audience / Retargeting]

## Creative Diversity Requirements
Ensure the 10 concepts cover:
- At least 2 UGC-style scripts
- At least 1 comparison/competitor angle
- At least 1 customer transformation story
- At least 1 educational/value-first approach
- At least 1 pattern interrupt (unexpected opening)

## Production Notes
For each concept, note:
- Props/actors needed
- Estimated production difficulty (Easy/Medium/Hard)
- Estimated CPM hypothesis (High/Medium/Low) with rationale

## Testing Matrix
Suggest which 3 concepts to test first and why.`,
    category: 'marketing',
    tags: ['ads', 'creative', 'paid-social', 'copywriting', 'performance'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of a new paid campaign or when existing ad creatives are experiencing creative fatigue.',
    authorUsername: 'growthoperator',
    likes: 245,
    saves: 167,
    copies: 623,
    views: 3200,
    trendScore: 245*2 + 167*3 + 623 + 3200*0.2,
    trendingScore: 245*2 + 167*3 + 623 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Copy',
    whyTrending: 'Creative fatigue kills ad performance. This prompt generates 10 diverse angles so your team always has fresh creatives in the pipeline.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 623,
    estimatedTokens: 900,
    model: 'gpt-4o',
    createdAt: '2024-10-10',
  },
  {
    id: 'lib-mkt-009',
    title: 'Webinar and Event Promotion Kit',
    slug: 'webinar-event-promotion-kit',
    description: 'Creates all promotional assets for a webinar including registration copy, reminder sequence, and replay promotion.',
    content: `You are an event marketing specialist. Create a complete promotional kit for the following webinar or live event.

## Event Details
- Event name: [EVENT_NAME]
- Topic/promise: [WHAT_ATTENDEES_WILL_LEARN]
- Speaker(s): [NAMES_AND_CREDENTIALS]
- Date and time: [DATE_TIME_TIMEZONE]
- Platform: [Zoom / Crowdcast / Hopin / etc.]
- Registration page: [URL_PLACEHOLDER]
- Target audience: [WHO_SHOULD_ATTEND]

## Promotion Kit Components

### Registration Page Copy
- Headline (3 variants)
- Subheadline
- What you'll learn (5 bullets in outcome format)
- Speaker bio (2 versions: long and short)
- Social proof element
- Registration form CTA text

### Promotional Social Posts (write all)
- Twitter/X: 5 posts for the 2 weeks leading up
- LinkedIn: 3 posts (professional tone, longer form)
- Instagram caption for event graphic

### Email Promotion Sequence
1. **Announcement email** (14 days before): Build anticipation
2. **Value preview email** (7 days before): Share one insight from the talk
3. **Reminder email** (1 day before): Practical details + excitement
4. **Day-of email** (1 hour before): Link + quick motivation
5. **Replay email** (24 hours after): For those who missed it

### Live Event Assets
- Welcome message for attendees joining early
- 3 engagement poll questions for during the event
- Closing CTA script (what to do next)

### Post-Event Follow-up
- Thank-you email with replay link
- Highlight clip social post (script what to clip)`,
    category: 'marketing',
    tags: ['webinar', 'event-marketing', 'email', 'promotion', 'copywriting'],
    difficulty: 'beginner',
    useCase: 'Use 2 weeks before a webinar or live event to create all promotional and operational copy at once.',
    authorUsername: 'growthoperator',
    likes: 167,
    saves: 112,
    copies: 398,
    views: 2100,
    trendScore: 167*2 + 112*3 + 398 + 2100*0.2,
    trendingScore: 167*2 + 112*3 + 398 + 2100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Copy',
    whyTrending: 'Webinar promotion is multi-channel and repetitive. This kit eliminates hours of copy creation before every event.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 398,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-08',
  },
  {
    id: 'lib-mkt-010',
    title: 'Brand Voice and Messaging Guide',
    slug: 'brand-voice-messaging-guide',
    description: 'Defines a distinctive brand voice with dos/don\'ts, writing examples, and channel-specific tone guidelines.',
    content: `You are a brand strategist and creative director. Define the complete brand voice and messaging framework for the following company.

## Company Context
- Company name: [COMPANY_NAME]
- What they do: [ONE_SENTENCE]
- Industry: [INDUSTRY]
- Target audience: [AUDIENCE]
- Current tone description (if any): [CURRENT_DESCRIPTION]
- Brands they admire (for tone reference): [BRAND_1, BRAND_2, BRAND_3]
- Brands they want to avoid sounding like: [BRAND_1, BRAND_2]

## Brand Voice Framework

### 1. Voice Archetype
Assign a primary archetype (The Expert / The Rebel / The Caregiver / The Explorer / The Creator / etc.)
Explain why this archetype fits and how it manifests.

### 2. Voice Characteristics (4 dimensions)
For each: definition, what it means in practice, example

| Characteristic | We Are | We Are Not |
|---------------|--------|-----------|
| e.g., Direct | Clear and confident | Blunt or cold |
| ... | ... | ... |

### 3. Tone Shifts by Context
How the voice adapts (not changes) across:
- Marketing copy (ads, landing pages)
- Technical documentation
- Customer support
- Social media
- Error messages / empty states

### 4. Writing Rules (10 house rules)
Specific, testable rules like:
- "Use second person (you/your), never third person (they/their)"
- "Never use the word 'leverage' as a verb"
- "Questions end copy sections, not statements"

### 5. Before and After Examples
Take 5 "bad" examples and rewrite them in the brand voice

### 6. Word Bank
- Power words to use: [20 words]
- Words to avoid: [20 words]
- Competitor words to differentiate from: [10 words]`,
    category: 'marketing',
    tags: ['brand', 'voice', 'messaging', 'copy', 'guidelines'],
    difficulty: 'intermediate',
    useCase: 'Use when onboarding a new content writer or when brand messaging feels inconsistent across channels.',
    authorUsername: 'growthoperator',
    likes: 198,
    saves: 145,
    copies: 489,
    views: 2600,
    trendScore: 198*2 + 145*3 + 489 + 2600*0.2,
    trendingScore: 198*2 + 145*3 + 489 + 2600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Brand voice inconsistency is the top complaint about AI-generated content. This creates the style guide that prevents it.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 489,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-05',
  },
  {
    id: 'lib-mkt-011',
    title: 'Referral Program Design Framework',
    slug: 'referral-program-design-framework',
    description: 'Designs a viral referral program with reward mechanics, tracking strategy, and launch campaign.',
    content: `You are a viral growth designer. Design a referral program for the following product that will drive sustainable word-of-mouth growth.

## Product Context
- Product: [PRODUCT_NAME]
- Price/business model: [PRICING]
- Current user base: [SIZE]
- Average customer LTV: [LTV]
- Natural sharing moments in product: [WHEN_DO_USERS_FEEL_GOOD]

## Referral Program Design

### 1. Reward Structure Analysis
Evaluate 4 reward models for this product:
- Double-sided cash/credit (Dropbox model)
- One-sided gifter reward
- Charitable donation (altruistic model)
- Unlock feature/tier (product-led model)

Recommend the best fit with justification.

### 2. Mechanics Design
- What triggers the referral prompt? (moment of delight)
- Referral link vs. code vs. email invite
- Reward delivery timing (immediate vs. milestone)
- Fraud prevention rules
- Maximum reward caps

### 3. Viral Loop Mapping
Draw the step-by-step viral loop:
User achieves success → Prompt appears → Shares → Friend sees → Friend signs up → Friend achieves success → Loop repeats

### 4. Messaging Templates
- In-product referral prompt copy
- Email invitation templates (2 variants)
- Social share templates (Twitter/LinkedIn)
- "You've been referred" landing page copy

### 5. Launch Plan
Week 1-4 rollout strategy:
- Soft launch to power users first
- Feedback collection mechanism
- Scale trigger (what metric triggers full rollout)

### 6. Measurement Dashboard
KPIs to track: k-factor, CAC via referral, referral conversion rate, reward ROI`,
    category: 'marketing',
    tags: ['referral', 'viral', 'growth', 'retention', 'word-of-mouth'],
    difficulty: 'intermediate',
    useCase: 'Use when building a referral program from scratch or when word-of-mouth growth is underperforming.',
    authorUsername: 'growthoperator',
    likes: 189,
    saves: 134,
    copies: 456,
    views: 2400,
    trendScore: 189*2 + 134*3 + 456 + 2400*0.2,
    trendingScore: 189*2 + 134*3 + 456 + 2400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Referral programs can cut CAC by 50%. This designs the full program mechanics, not just the incentive structure.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 456,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-02',
  },
  {
    id: 'lib-mkt-012',
    title: 'Podcast Outreach and Guest Strategy',
    slug: 'podcast-outreach-guest-strategy',
    description: 'Creates a targeted podcast outreach system with pitch templates and topic angles for any industry.',
    content: `You are a PR and podcast booking strategist. Create a complete podcast guest strategy for the following brand or individual.

## Context
- Who is pitching: [NAME_AND_EXPERTISE]
- Topic they can speak on: [TOPIC_AREA]
- Goal: [BRAND_AWARENESS / LEAD_GEN / BOOK_LAUNCH / etc.]
- Target audience for podcast listeners: [IDEAL_LISTENER]
- Unique angle or story: [WHAT_MAKES_THEM_INTERESTING]

## Podcast Strategy

### 1. Target Podcast Criteria
Define the ideal podcast profile:
- Audience size range (too small = low ROI, too big = hard to book)
- Industry/topic alignment requirements
- Episode format preferences (interview vs. panel vs. solo)
- How to find them (specific tools and searches)

### 2. Outreach Pitch Templates

**Cold email pitch (under 150 words):**
Subject line + 3 paragraphs: hook, value offer, CTA

**Twitter/DM pitch (under 280 characters):**
Casual version for social outreach

**Referral-based pitch:**
When you have a mutual connection

### 3. Topic Angles (5 strong pitches)
For each:
- Headline for the episode
- Why this serves their audience (not your goals)
- 3 specific takeaways listeners will get
- Controversial or contrarian angle (makes it more bookable)

### 4. Pre-Interview Preparation Checklist
- Research the host (recent 3 episodes listened?)
- Technical setup requirements
- Talking points document structure
- Bridging back to your CTA naturally

### 5. Post-Interview Amplification
- How to share the episode to maximize hosts' promotion
- Email sequence to your list about the appearance
- Repurpose strategy (clips, quotes, blog post)`,
    category: 'marketing',
    tags: ['podcast', 'pr', 'outreach', 'brand', 'content'],
    difficulty: 'beginner',
    useCase: 'Use when planning a podcast guest campaign to build authority and generate leads.',
    authorUsername: 'growthoperator',
    likes: 145,
    saves: 98,
    copies: 367,
    views: 1900,
    trendScore: 145*2 + 98*3 + 367 + 1900*0.2,
    trendingScore: 145*2 + 98*3 + 367 + 1900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Template',
    whyTrending: 'Podcast guesting is one of the highest-ROI earned media channels. This system creates the pitch and the amplification strategy.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 367,
    estimatedTokens: 700,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-28',
  },
  {
    id: 'lib-mkt-013',
    title: 'Pricing Page and Tier Structure Designer',
    slug: 'pricing-page-tier-structure-designer',
    description: 'Designs a psychologically optimized pricing page with tier naming, feature positioning, and anchor pricing.',
    content: `You are a pricing strategist and conversion rate optimizer. Design the pricing page and tier structure for the following product.

## Product Context
- Product: [PRODUCT_NAME]
- Target market: [B2B / B2C / BOTH]
- Target segments: [DESCRIBE 2-4 BUYER SEGMENTS]
- Cost to serve per customer: [ESTIMATE]
- Top 3 competitor pricing: [COMPETITOR_1_PRICE, COMPETITOR_2_PRICE, COMPETITOR_3_PRICE]
- Current most-requested features: [LIST]

## Pricing Architecture

### 1. Tier Strategy
Recommend 2, 3, or 4 tiers with justification.
For each tier:
- **Name** (not "Basic/Pro/Enterprise" — brand-specific names)
- **Target customer segment**
- **Monthly and annual price** (with anchor discount for annual)
- **Feature list** (what's included vs excluded)
- **Usage limits** (seats, API calls, storage, etc.)
- **Support level**

### 2. Psychological Design
- Which tier should be highlighted as "Most Popular" and why
- Anchor pricing strategy (place expensive tier first to anchor)
- The "Goldilocks" tier (where you want most customers)
- What to include in free trial vs paid only

### 3. Feature Packaging
Which features go in which tier (and why this order creates upgrade pressure)

### 4. Page Copy
- Hero headline for pricing page
- Tier descriptions (1-2 sentences each)
- FAQ section (8 most common pricing questions)
- Risk reversal copy (guarantee/refund language)

### 5. Annual vs Monthly Strategy
- Discount percentage recommendation
- How to frame annual (savings vs monthly cost)
- Annual conversion tactics`,
    category: 'marketing',
    tags: ['pricing', 'conversion', 'saas', 'positioning', 'copywriting'],
    difficulty: 'advanced',
    useCase: 'Use when launching a new pricing page or when conversion from free to paid is underperforming.',
    authorUsername: 'growthoperator',
    likes: 212,
    saves: 156,
    copies: 534,
    views: 2800,
    trendScore: 212*2 + 156*3 + 534 + 2800*0.2,
    trendingScore: 212*2 + 156*3 + 534 + 2800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Pricing is the highest-leverage business decision. This systematically applies behavioral economics to your tier structure.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 534,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-25',
  },
  {
    id: 'lib-mkt-014',
    title: 'ABM Account Targeting and Outreach System',
    slug: 'abm-account-targeting-outreach-system',
    description: 'Designs an account-based marketing campaign with target account selection, personalization tiers, and multi-channel outreach.',
    content: `You are a B2B marketing strategist specializing in account-based marketing (ABM). Design an ABM campaign for the following company.

## Company Context
- Your company: [YOUR_COMPANY] selling [PRODUCT]
- Deal size: [ACV]
- Sales cycle: [LENGTH]
- Target account profile: [ICP_DESCRIPTION]
- Sales team size: [REPS]
- Current pipeline coverage: [HEALTHY / NEEDS_COVERAGE]

## ABM Campaign Design

### 1. Account Selection Criteria
Build a scoring model (0-100) for account prioritization:
- Firmographic fit: industry, size, growth stage (30 pts)
- Technographic signals: stack compatibility (20 pts)
- Intent signals: content consumption, competitor research (30 pts)
- Relationship signals: connections, past interactions (20 pts)

### 2. Account Tiers
- **Tier 1 (1:1)**: Top 20 accounts — fully personalized programs
- **Tier 2 (1:Few)**: Next 100 accounts — cluster-personalized
- **Tier 3 (1:Many)**: Named accounts — programmatic with light personalization

### 3. Personalization Playbook (Tier 1)
For each Tier 1 account:
- Research checklist (what to find before first touch)
- Custom message templates (email, LinkedIn, direct mail)
- Personalized landing page variables
- Executive gift/event invitation strategy

### 4. Multi-Channel Sequence
Touch 1 (Day 1): Personalized email from AE
Touch 2 (Day 3): LinkedIn connection from AE
Touch 3 (Day 7): Targeted display ad shown to account
Touch 4 (Day 10): SDR follow-up call
Touch 5 (Day 14): Marketing email with relevant content
Touch 6 (Day 21): Executive outreach if no response

### 5. Measurement
ABM-specific metrics: account engagement score, pipeline influenced, deal velocity in target accounts`,
    category: 'marketing',
    tags: ['abm', 'b2b', 'outreach', 'enterprise', 'sales'],
    difficulty: 'advanced',
    useCase: 'Use when moving upmarket to enterprise accounts that require personalized, multi-touch campaigns.',
    authorUsername: 'growthoperator',
    likes: 178,
    saves: 123,
    copies: 445,
    views: 2300,
    trendScore: 178*2 + 123*3 + 445 + 2300*0.2,
    trendingScore: 178*2 + 123*3 + 445 + 2300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'ABM consistently outperforms broad-based marketing for enterprise sales. This builds the full account selection and outreach system.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 445,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-09-22',
  },
  {
    id: 'lib-mkt-015',
    title: 'Content Repurposing Multiplier System',
    slug: 'content-repurposing-multiplier-system',
    description: 'Turns one piece of pillar content into 15+ pieces of channel-specific content with complete copy.',
    content: `You are a content strategist who maximizes the output from every content investment. Take the following pillar content and repurpose it into a full content system.

## Source Content
- Content type: [BLOG_POST / PODCAST_TRANSCRIPT / WEBINAR / VIDEO / REPORT]
- Paste the content or describe it: [CONTENT]
- Primary topic: [TOPIC]
- Target audience: [AUDIENCE]
- Key insight or unique angle: [THE_MAIN_INSIGHT]

## Repurposed Content (generate all)

### Long-Form Derivatives
1. **Email newsletter** (600-800 words, conversational, opinionated)
2. **LinkedIn article** (1000 words, professional, personal story angle)
3. **SEO blog post outline** (H1, H2s, word count target, primary keyword)

### Short-Form Social Posts
4. **Twitter thread** (10 tweets, hook → insight → CTA)
5. **Twitter single post** (contrarian take under 280 chars)
6. **LinkedIn post** (300 words, personal + professional)
7. **Instagram caption** (emotional angle, line breaks, hashtags)
8. **Facebook post** (community engagement angle)

### Visual Content Scripts
9. **Short-form video script** (TikTok/Reels/Shorts, 60 seconds)
10. **YouTube video outline** (5-minute educational video)

### Micro-Content
11. **5 pull quotes** formatted as image text
12. **3 stat cards** (key data points with context)
13. **Carousel slide deck outline** (10 slides)

### Distribution
14. **Product Hunt discussion post** (if relevant)
15. **Reddit post** (which subreddit + discussion angle)

## Formatting Rules
- Each piece stands completely alone (no "as I mentioned above")
- Adapt tone for each platform (professional on LinkedIn, direct on Twitter)
- Include character counts for social posts`,
    category: 'marketing',
    tags: ['content-repurposing', 'content-marketing', 'social', 'newsletter', 'strategy'],
    difficulty: 'beginner',
    useCase: 'Use after creating any long-form content to immediately multiply its reach across channels.',
    authorUsername: 'growthoperator',
    likes: 334,
    saves: 234,
    copies: 890,
    views: 4600,
    trendScore: 334*2 + 234*3 + 890 + 4600*0.2,
    trendingScore: 334*2 + 234*3 + 890 + 4600*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Copy',
    whyTrending: 'Most creators publish once and move on. This multiplies every content piece into 15+ assets, dramatically increasing content ROI.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 890,
    estimatedTokens: 950,
    model: 'gpt-4o',
    createdAt: '2024-09-18',
  },
]
