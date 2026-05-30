import type { Prompt } from './prompts'

export const CONTENT_PROMPTS: Prompt[] = [
  {
    id: 'lib-cnt-001',
    title: 'Long-Form Blog Post Framework',
    slug: 'long-form-blog-post-framework',
    description: 'Generates a complete long-form blog post with hook variants, structured H2 sections, SEO optimization, and a loop-closing CTA.',
    content: `You are a senior content strategist with 10+ years crafting long-form content that ranks, converts, and builds authority. Write a complete long-form blog post on [TOPIC] for [TARGET_AUDIENCE].

## Inputs
- Topic: [TOPIC]
- Target audience: [TARGET_AUDIENCE]
- Brand voice: [BRAND_VOICE] (e.g., authoritative, conversational, educational)
- SEO target keyword: [KEYWORD]
- Word count: [TARGET_LENGTH] (recommended 1,500–3,000 words)

## Deliverables

### 1. Headline Variants (5 options)
Write five attention-grabbing headlines for the post. Vary the formula: how-to, list, question, contrarian claim, curiosity gap.

### 2. Introduction — Open a Loop
Write a 150–200 word introduction that:
- Opens with a compelling hook (stat, story, or provocative question)
- Clearly states the promise of the post
- Introduces the tension or problem the reader faces
- Plants a loop the conclusion will close

### 3. Body — 5 to 7 H2 Sections
For each section include:
- H2 heading (keyword-conscious where natural)
- Optional H3 subheadings for scanability
- Key insight (the "so what")
- Supporting evidence (data, example, or analogy)
- Actionable takeaway the reader can apply immediately

### 4. Conclusion — Close All Loops
- Revisit the tension introduced in the intro
- Summarize the transformation the reader has experienced
- End with a single, clear CTA aligned to [BRAND_VOICE]

### 5. SEO & Metadata
- Meta title (under 60 characters, includes [KEYWORD])
- Meta description (under 155 characters, includes [KEYWORD])
- 3–5 internal link placeholders with suggested anchor text
- Suggested featured image alt text

## Constraints
- Never keyword-stuff; use [KEYWORD] and natural variants naturally throughout
- Write in [BRAND_VOICE]; no generic corporate language
- Every section must deliver standalone value (for skimmers)
- No fluff paragraphs — every sentence earns its place`,
    category: 'content',
    tags: ['blog', 'seo', 'long-form', 'copywriting', 'content-strategy'],
    difficulty: 'intermediate',
    useCase: 'Use when you need a research-backed, SEO-optimized long-form article that builds authority and drives organic traffic.',
    authorUsername: 'contentpro',
    likes: 380,
    saves: 240,
    copies: 980,
    views: 5800,
    trendScore: 380*2 + 240*3 + 980 + 5800*0.2,
    trendingScore: 380*2 + 240*3 + 980 + 5800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Long-form SEO content remains the highest-ROI content investment. This prompt saves hours of structuring and ensures every section delivers value.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 980,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-03',
  },
  {
    id: 'lib-cnt-002',
    title: 'Newsletter Issue Builder',
    slug: 'newsletter-issue-builder',
    description: 'Creates a complete newsletter issue with A/B subject lines, three story sections, quick links, and an HTML-ready draft.',
    content: `You are an email newsletter strategist who has grown and monetized newsletters across B2B and consumer audiences. Create a complete newsletter issue for [NEWSLETTER_NAME] on this week's topic: [THIS_WEEK_TOPIC].

## Inputs
- Newsletter name: [NEWSLETTER_NAME]
- This week's topic: [THIS_WEEK_TOPIC]
- Subscriber type: [SUBSCRIBER_TYPE] (e.g., founders, marketers, engineers, general professionals)
- Tone: [CONVERSATIONAL / AUTHORITATIVE / PLAYFUL]

## Deliverables

### 1. Subject Lines (A/B Variants)
- Variant A: Curiosity-driven (tease the insight without giving it away)
- Variant B: Benefit-driven (clear, direct promise of what they'll get)

### 2. Preview Text
One sentence (85–100 characters) that complements the subject line and boosts open rates.

### 3. Opening Hook (80–120 words)
A personal, conversational opener that bridges the subscriber's current reality to this week's topic. Make it feel like a message from a trusted peer, not a brand.

### 4. Three Main Story Sections
For each section:
- Section headline (punchy, scannable)
- 100–150 word story/insight body
- One bolded takeaway sentence the reader can act on or share

Topics should escalate: story → insight → implication.

### 5. Quick Links (5 items)
Curated links with a one-sentence annotation each. Format: "[Source] — [What it is and why it matters]"

### 6. Closing Thought + CTA
- 50–75 word sign-off in [NEWSLETTER_NAME]'s voice
- One CTA (reply, click, share, or upgrade — choose what fits the issue)

## Output Format
Provide the full newsletter draft formatted for easy HTML conversion: use clear section labels, line breaks between sections, and note where images or dividers should appear.

## Constraints
- Total read time: under 5 minutes
- No jargon unless the subscriber type demands it
- Every section must justify the subscriber's time`,
    category: 'content',
    tags: ['newsletter', 'email', 'copywriting', 'content-strategy', 'audience-building'],
    difficulty: 'beginner',
    useCase: 'Use weekly to produce a complete, publish-ready newsletter issue in one session instead of hours of drafting.',
    authorUsername: 'contentpro',
    likes: 295,
    saves: 185,
    copies: 820,
    views: 4900,
    trendScore: 295*2 + 185*3 + 820 + 4900*0.2,
    trendingScore: 295*2 + 185*3 + 820 + 4900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Document',
    whyTrending: 'Newsletter creators consistently rank issue writing as their biggest time sink. This prompt delivers a full issue structure in one shot.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 820,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-06',
  },
  {
    id: 'lib-cnt-003',
    title: 'YouTube Script & Hook Generator',
    slug: 'youtube-script-hook-generator',
    description: 'Produces a full production-ready YouTube video script with three hook variants, timestamps, pattern interrupts, and B-roll cues.',
    content: `You are a YouTube scriptwriter who has written for channels ranging from 10K to 10M subscribers. Your scripts are engineered for retention, not just views. Create a complete video script for [VIDEO_TOPIC] targeting [AUDIENCE].

## Inputs
- Video topic: [VIDEO_TOPIC]
- Target audience: [AUDIENCE] (be specific: age, interest, knowledge level)
- Video length target: [LENGTH] (e.g., 8–12 minutes)
- CTA placement timestamp: [TIMESTAMP] (e.g., 7:30)
- Channel tone: [ENERGETIC / EDUCATIONAL / CONVERSATIONAL / DOCUMENTARY]

## Deliverables

### 1. Three Hook Variations (first 15 seconds each)
Write three distinct opening hooks. Each must accomplish: interrupt the scroll, create a knowledge gap, and establish why the viewer must watch to the end. Label them: Hook A (story), Hook B (bold claim), Hook C (direct promise).

### 2. Full Script with Timestamps
Structure every 2–3 minute block with:
- Timestamp marker
- Script text (conversational, spoken-word friendly — no bullet lists in the body)
- Tone/delivery note in brackets

### 3. Pattern Interrupts (every 90 seconds)
Mark every pattern interrupt point with [PI] and describe the technique: change of pace, surprising statistic, question to viewer, visual transition, humor beat.

### 4. B-Roll Cue Notes
At natural transition points, add [B-ROLL: description] cues suggesting what footage or graphics would reinforce the spoken content.

### 5. CTA Block (at [TIMESTAMP])
A natural, non-salesy CTA integrated into the content flow — not bolted on. Then a soft mid-roll reminder (10 seconds) earlier in the script.

### 6. End Screen Script (final 20 seconds)
Direct viewer to next video and channel subscribe with a reason, not just "subscribe."

## Constraints
- Write for ears, not eyes — short sentences, natural rhythm
- Every 90 seconds must have a re-engagement hook
- Avoid passive voice and filler phrases like "in this video I'm going to show you"
- Open loops must be closed before end screen`,
    category: 'content',
    tags: ['youtube', 'video', 'scriptwriting', 'hooks', 'retention'],
    difficulty: 'intermediate',
    useCase: 'Use when producing YouTube content and you need a retention-engineered script, not just a topic outline.',
    authorUsername: 'marketinglab',
    likes: 340,
    saves: 220,
    copies: 1050,
    views: 6200,
    trendScore: 340*2 + 220*3 + 1050 + 6200*0.2,
    trendingScore: 340*2 + 220*3 + 1050 + 6200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Script',
    whyTrending: 'YouTube retention is algorithmically critical. Creators use this to engineer watch time, not just write content.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 1050,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-cnt-004',
    title: 'Content Repurposing Engine',
    slug: 'content-repurposing-engine',
    description: 'Transforms one piece of source content into a full suite of platform-native assets: LinkedIn posts, X threads, email sections, YouTube Shorts, Instagram captions, and a Reddit thread.',
    content: `You are a content strategist specializing in multi-platform distribution. Your job is to extract every drop of value from existing content and repackage it natively for each platform's culture and format. Take [ORIGINAL_CONTENT] and repurpose it into a complete distribution suite.

## Input
- Original content: [ORIGINAL_CONTENT] (paste blog post, video transcript, or podcast transcript)
- Brand/author name: [BRAND_OR_AUTHOR]
- Core message to preserve: [CORE_MESSAGE]

## Deliverables

### 1. LinkedIn Posts (5 posts)
For each post:
- Platform-native hook (no "I wrote a blog post" openers)
- Insight or story body (150–300 words)
- CTA (comment/save/connect — vary these)
- Label: [LinkedIn Post 1 of 5]

### 2. X / Twitter Threads (10 threads, 3–7 tweets each)
For each thread:
- Tweet 1: Hook that works standalone as a single tweet
- Tweets 2–N: One idea per tweet, building logically
- Final tweet: Summary + CTA
- Character counts noted per tweet
- Label: [Thread 1 of 10]

### 3. Email Newsletter Sections (3 sections)
Each section should work as a standalone newsletter segment: headline + 100–150 word body + one reader takeaway.

### 4. YouTube Shorts Script (60 seconds)
Hook in first 3 seconds, core value delivery in 45 seconds, CTA in final 12 seconds. Written for spoken delivery.

### 5. Instagram Captions (5 captions)
Each caption: hook line + body (100–150 words) + 15–20 relevant hashtags grouped by reach tier (broad/niche/brand).

### 6. Reddit-Style Thread
Title (question or discussion framing), original post (300–400 words, Reddit-authentic tone — no marketing language), 3 top-comment starters.

## Output Format
Organize by platform with character counts noted. Flag the top 3 highest-potential pieces.

## Constraints
- Each piece must feel native to its platform — no copy-paste reformatting
- Preserve the core insight but adapt voice, length, and format entirely
- No promotional language on Reddit or X`,
    category: 'content',
    tags: ['repurposing', 'linkedin', 'twitter', 'instagram', 'distribution'],
    difficulty: 'beginner',
    useCase: 'Use after creating any long-form content asset to maximize its distribution value across all platforms.',
    authorUsername: 'promptarchitect',
    likes: 420,
    saves: 280,
    copies: 1100,
    views: 6500,
    trendScore: 420*2 + 280*3 + 1100 + 6500*0.2,
    trendingScore: 420*2 + 280*3 + 1100 + 6500*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'Creating once and distributing everywhere is the defining content strategy of 2024. This prompt is the engine that makes it practical.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 1100,
    estimatedTokens: 1100,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-01',
  },
  {
    id: 'lib-cnt-005',
    title: 'Storytelling Arc for Brand Content',
    slug: 'storytelling-arc-for-brand-content',
    description: "Applies hero's journey, before/after/bridge, and StoryBrand frameworks to build a complete brand narrative content kit.",
    content: `You are a brand narrative strategist who has built content identities for startups and Fortune 500 companies alike. Apply storytelling principles to create a compelling, cohesive content arc for [BRAND] around [CAMPAIGN_THEME].

## Inputs
- Brand name: [BRAND]
- Campaign theme: [CAMPAIGN_THEME] (e.g., "overcoming growth plateaus," "the future of remote work")
- Brand voice: [BRAND_VOICE] (e.g., bold and direct, warm and human, data-driven and credible)
- Customer archetype: [CUSTOMER_ARCHETYPE]

## Frameworks to Apply

### Framework 1: Hero's Journey (Customer as Hero)
Map [BRAND]'s customer journey to the classic story arc. The customer is the hero; your brand is the guide (Yoda, not Luke). Identify: ordinary world (life before your product), call to adventure (the trigger event), road of trials (the real obstacles), transformation, and return with elixir (the customer's new capability).

### Framework 2: Before / After / Bridge
For three distinct customer segments, write a 100-word Before/After/Bridge arc. Be viscerally specific about the before state — make it hurt. The bridge is your brand's role.

### Framework 3: StoryBrand Method
Define: Character (customer), Problem (external + internal + philosophical), Guide ([BRAND]), Plan (3-step process), Call to Action, Failure stakes, Success vision.

## Deliverables

### 1. Origin Story (300 words)
A true-feeling origin story for [BRAND] that establishes mission, tension, and purpose. Not corporate history — emotional truth.

### 2. Three Customer Transformation Vignettes (150 words each)
Short, vivid stories of a customer before and after. Use composite personas, not testimonials. Show the emotional shift, not just the functional result.

### 3. Conflict / Resolution Narrative
The industry problem [BRAND] exists to solve, told as a story with a villain (the old way), a turning point, and a new world vision.

### 4. Values-in-Action Stories (one per core value)
For each of [BRAND]'s core values, a 100-word story that demonstrates the value in action — not a definition.

## Output
Narrative content kit, organized by section, ready for use across website, pitch decks, and long-form content.`,
    category: 'content',
    tags: ['storytelling', 'brand-narrative', 'storybrand', 'copywriting', 'brand-voice'],
    difficulty: 'advanced',
    useCase: "Use when building or refreshing a brand's content identity and you need narrative frameworks that resonate emotionally.",
    authorUsername: 'contentpro',
    likes: 265,
    saves: 175,
    copies: 720,
    views: 4200,
    trendScore: 265*2 + 175*3 + 720 + 4200*0.2,
    trendingScore: 265*2 + 175*3 + 720 + 4200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'StoryBrand methodology has become the gold standard for brand messaging. This prompt operationalizes all three major storytelling frameworks at once.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 720,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-10',
  },
  {
    id: 'lib-cnt-006',
    title: 'Podcast Episode Outline & Show Notes',
    slug: 'podcast-episode-outline-show-notes',
    description: 'Produces a complete podcast episode production doc: title options, interview questions, timestamps, 600-word show notes, and social promo copy.',
    content: `You are a podcast producer with experience across interview, solo, and narrative formats. Create a complete episode plan and production document for [PODCAST_NAME].

## Inputs
- Podcast name: [PODCAST_NAME]
- Episode topic: [EPISODE_TOPIC]
- Guest name and title: [GUEST_NAME], [GUEST_TITLE] at [GUEST_COMPANY]
- Audience: [LISTENER_PROFILE]
- Episode length target: [LENGTH] (e.g., 45–60 minutes)

## Deliverables

### 1. Episode Title Options (5 variants)
Mix formats: benefit-driven, curiosity-gap, guest authority, contrarian take, listener transformation.

### 2. Platform-Optimized Description (150 words)
Write one description optimized for Apple Podcasts and Spotify search. Include episode keywords naturally.

### 3. Intro Script (60 seconds)
Host intro that covers: hook, guest credibility (without sounding like a résumé), and the one question that will be answered by the end.

### 4. Interview Questions (8–10, escalating depth)
Organize in three tiers:
- Warm-up (2 questions): accessible, confidence-building
- Core (4–5 questions): the intellectual meat — challenge conventional wisdom, ask for stories, not opinions
- Deep dive (2–3 questions): the questions most interviewers are afraid to ask

Include follow-up probe suggestions for each core question.

### 5. Transition Phrases (5 options)
Natural, host-authentic phrases for moving between topics or pivoting when a segment runs long.

### 6. Outro Script (45 seconds)
Recap the episode's biggest insight, direct listeners to guest's resource, channel subscribe request with a specific reason.

### 7. Timestamps Outline
Chapter markers for episode players: [00:00] format with topic descriptions (8–12 chapters).

### 8. Show Notes (600 words)
Full show notes with: episode summary, 5 key takeaways, all resources mentioned, guest bio, and links. Formatted for web publishing.

### 9. Social Promo Copy
- LinkedIn post (200 words, hook + insight + listen link)
- X/Twitter post (280 characters)
- Instagram caption (150 words + 12 hashtags)

## Output: Complete episode production document, organized in production order.`,
    category: 'content',
    tags: ['podcast', 'interview', 'show-notes', 'production', 'audio-content'],
    difficulty: 'intermediate',
    useCase: 'Use when planning a podcast episode to go from guest booking to publish-ready production doc in one session.',
    authorUsername: 'builderai',
    likes: 195,
    saves: 130,
    copies: 580,
    views: 3500,
    trendScore: 195*2 + 130*3 + 580 + 3500*0.2,
    trendingScore: 195*2 + 130*3 + 580 + 3500*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Podcast production overhead is the #1 reason creators burn out. This prompt collapses prep, notes, and promo copy into a single workflow.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 580,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-12',
  },
  {
    id: 'lib-cnt-007',
    title: 'Case Study Writing Framework',
    slug: 'case-study-writing-framework',
    description: 'Writes an 800–1,000 word B2B case study with quantified results, pull-quote suggestions, and a conversion-focused CTA.',
    content: `You are a B2B content writer who specializes in case studies that actually convert — not vanity pieces. Write a compelling case study for [CLIENT_NAME] using [PRODUCT/SERVICE].

## Inputs
- Client name: [CLIENT_NAME]
- Product or service used: [PRODUCT/SERVICE]
- Industry: [INDUSTRY]
- Key result achieved: [QUANTIFIED_RESULT] (e.g., "43% reduction in churn," "2.3x pipeline growth")
- Internal contact for quotes: [CONTACT_NAME], [CONTACT_TITLE]

## Structure

### Headline
Lead with the quantified result. Formula: "[CLIENT_NAME] achieved [RESULT] with [PRODUCT/SERVICE]" — or a punchier variant that still includes the number.

### Executive Summary (100 words)
The TL;DR for busy decision-makers: who the client is, what problem they had, what they used, what result they got. No fluff.

### The Challenge
Describe the pain state before [PRODUCT/SERVICE]. Be specific: what was breaking down, what it was costing (time/money/opportunities), and why previous attempts failed. 150–200 words. Include a direct quote placeholder from [CONTACT_NAME].

### The Solution
The implementation journey — not a feature list. How [CLIENT_NAME] rolled out [PRODUCT/SERVICE], what decisions they made, and what surprised them. 200–250 words.

### The Results
Present 3–5 measurable outcomes with data. Format:
- Primary metric (the headline stat)
- Supporting metrics (2–3 secondary data points)
- Qualitative outcome (team sentiment, process change)

Use a sidebar box for the top 3 stats in large typography.

### What [CONTACT_NAME] Says
Two pull-quote placeholders: one mid-story (emotional/process quote) and one results quote.

### Looking Ahead
One paragraph (75 words) on what [CLIENT_NAME] plans next with [PRODUCT/SERVICE] — signals ongoing value and opens upsell narrative.

### CTA
A single, low-friction CTA appropriate for the case study's placement (sales deck, website, email). Options: "See a demo," "Read more stories," "Talk to sales."

## Output
800–1,000 word case study draft, formatted for web with H2s, sidebar stat boxes noted, and quote placeholders clearly marked.`,
    category: 'content',
    tags: ['case-study', 'b2b', 'copywriting', 'social-proof', 'sales-enablement'],
    difficulty: 'intermediate',
    useCase: 'Use when turning a customer success story into a sales-enabling case study that speaks to prospects at the decision stage.',
    authorUsername: 'marketinglab',
    likes: 220,
    saves: 155,
    copies: 695,
    views: 4100,
    trendScore: 220*2 + 155*3 + 695 + 4100*0.2,
    trendingScore: 220*2 + 155*3 + 695 + 4100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Case studies are the most underproduced, highest-converting content type in B2B. This prompt makes writing them fast and formulaic.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 695,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-14',
  },
  {
    id: 'lib-cnt-008',
    title: 'Content Calendar Strategy Generator',
    slug: 'content-calendar-strategy-generator',
    description: 'Builds a 30-day content calendar with pillar posts, social cadences, email touchpoints, funnel-stage mapping, and individual content briefs.',
    content: `You are a content strategist who builds integrated editorial calendars that tie every piece of content to a business outcome. Build a 30-day content calendar for [BRAND] in [INDUSTRY] targeting [AUDIENCE].

## Inputs
- Brand: [BRAND]
- Industry: [INDUSTRY]
- Primary audience: [AUDIENCE]
- Business goal for this 30-day period: [GOAL] (e.g., product launch, lead gen, brand awareness)
- Available content formats: [FORMATS] (blog, video, email, LinkedIn, X, Instagram)

## Weekly Content Architecture
Repeat this structure for each of 4 weeks, adapting topics weekly:

**Pillar Post (1 per week)**
Long-form content (blog/video/podcast) that establishes authority on one sub-topic within [INDUSTRY]. Provide: working title, core angle, target keyword, 200-word brief.

**Supporting Posts (3 per week)**
Content that links back to or builds on the pillar. Shorter format (LinkedIn article, carousel, email). Provide: title + 75-word brief each.

**Social Updates (5 per week)**
Daily social content (Mon–Fri). Provide: platform, format (text/image/reel/thread), hook sentence, and funnel stage.

**Email Touchpoints (2 per week)**
One nurture email + one conversion email. Provide: subject line, 50-word brief, CTA.

## Funnel-Stage Mapping
Tag each piece of content: TOFU (awareness) / MOFU (consideration) / BOFU (decision). Ensure the 30-day calendar covers all three stages in proportion: 50% TOFU / 30% MOFU / 20% BOFU.

## Seasonal Hooks
Identify any dates, events, or cultural moments in the next 30 days that [BRAND] should tie content to. Suggest how to weave them in authentically.

## Output
1. Calendar table (Week | Day | Format | Title | Funnel Stage | Brief)
2. Full content brief for each piece (organized by week)
3. Repurposing map: which pieces can be derived from the pillar posts`,
    category: 'content',
    tags: ['content-calendar', 'content-strategy', 'editorial', 'planning', 'social-media'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of each month to build a complete, strategically integrated content plan without starting from scratch.',
    authorUsername: 'promptarchitect',
    likes: 310,
    saves: 205,
    copies: 890,
    views: 5400,
    trendScore: 310*2 + 205*3 + 890 + 5400*0.2,
    trendingScore: 310*2 + 205*3 + 890 + 5400*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Plan',
    whyTrending: 'Content calendar creation is a weekly bottleneck for marketing teams. This prompt replaces a half-day strategy session with a single prompt run.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 890,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-04',
  },
  {
    id: 'lib-cnt-009',
    title: 'Thought Leadership Article Builder',
    slug: 'thought-leadership-article-builder',
    description: "Ghostwrites an 800–1,000 word thought leadership article for an executive with a distinctive POV, personal anecdote, and peer-facing CTA.",
    content: `You are a ghostwriter who specializes in writing thought leadership content for executives and founders. Your work appears under their name and must sound unmistakably human — not like a press release. Write a thought leadership article for [EXECUTIVE_NAME].

## Inputs
- Author name: [EXECUTIVE_NAME]
- Title: [TITLE] at [COMPANY]
- Topic: [INDUSTRY_TOPIC]
- Perspective type: [CONTRARIAN / FORWARD-LOOKING / LESSONS-LEARNED]
- Core belief the article should convey: [CORE_BELIEF]
- Personal anecdote to weave in: [ANECDOTE_PROMPT] (brief description — the AI will flesh it out)

## Structure

### Opening Claim (50–75 words)
A provocative, specific opening statement that challenges conventional wisdom or makes an unexpected prediction. No "In today's fast-paced world" openers. The first sentence must earn the next.

### Key Insight 1: The Problem Everyone Gets Wrong
What assumption does the industry make that [EXECUTIVE_NAME] believes is fundamentally flawed? Argue the point with evidence (cite a specific example, stat, or pattern — flagged as "[VERIFY STAT]" if unverified).

### Key Insight 2: What [EXECUTIVE_NAME] Has Learned
The lesson that changed how they operate. Integrate the [ANECDOTE_PROMPT] here as a 150-word narrative passage. Make it specific enough to be credible: time, place, decision, outcome.

### Key Insight 3: The Implication for the Industry
What does this mean for peers? What should they reconsider, start, or stop? Be direct and prescriptive — executives read for decisions, not theory.

### Call to Action for Peers
A 75-word closing that invites dialogue. Pose a question to readers. Include one concrete action or framework they can apply this week.

### Short Bio Blurb (75 words)
LinkedIn-ready bio in third person that supports the article's authority.

## Constraints
- No jargon, buzzwords, or phrases like "disrupt," "synergy," or "move the needle"
- Must pass the "could only this person have written this?" test
- Length: 800–1,000 words
- Tone: authoritative but accessible — peers talking to peers`,
    category: 'content',
    tags: ['thought-leadership', 'ghostwriting', 'executive', 'linkedin', 'personal-brand'],
    difficulty: 'advanced',
    useCase: "Use when an executive needs a strong LinkedIn article or industry publication piece and doesn't have time to write it themselves.",
    authorUsername: 'devdna',
    likes: 260,
    saves: 170,
    copies: 760,
    views: 4600,
    trendScore: 260*2 + 170*3 + 760 + 4600*0.2,
    trendingScore: 260*2 + 170*3 + 760 + 4600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Executive thought leadership drives pipeline and recruiting. This prompt ghostwrites with personality, not just structure.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 760,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-09',
  },
  {
    id: 'lib-cnt-010',
    title: 'E-book Chapter Outliner',
    slug: 'ebook-chapter-outliner',
    description: 'Generates a complete e-book chapter outline with learning objectives, exercises, case examples, and a 500-word sample section.',
    content: `You are an information architect and instructional writer. You design e-book chapters that teach, not just inform — readers finish a chapter with new capability, not just new knowledge. Create a full outline for an e-book chapter on [CHAPTER_TOPIC] within [BOOK_THEME].

## Inputs
- Chapter topic: [CHAPTER_TOPIC]
- Overall book theme: [BOOK_THEME]
- Target reader (ICP): [ICP] (e.g., "early-stage SaaS founders," "new marketing managers")
- Chapter number and position in book: [CHAPTER_NUMBER] of [TOTAL_CHAPTERS]
- Desired reading time: [READING_TIME] (e.g., 20–25 minutes)

## Deliverables

### Chapter Title
Two options: one benefit-driven, one curiosity-driven.

### Learning Objectives (3 items)
What the reader will be able to DO after finishing this chapter. Use action verbs: "identify," "design," "implement," "avoid." Not "understand" or "learn about."

### Opening Story Hook (150 words)
A specific, vivid opening scene that creates immediate identification with the reader's pain or aspiration. Do not open with a definition or statistic.

### Main Sections (4–6 sections)
For each section:
- H2 subheading (clear, scannable, benefit-oriented)
- Key insight (the core idea in one sentence)
- Supporting explanation (3–5 bullet points of elaboration points for the writer)
- Practical exercise: a 5–10 minute action the reader can take immediately
- Case example: a 50-word scenario (real or composite) that proves the point

### Chapter Summary Framework
A fill-in-the-blank summary template the reader completes to personalize the chapter's lessons to their situation.

### Key Takeaways List (5 items)
Bolded, standalone sentences. Each must hold meaning out of context (good for pull quotes).

### Transition to Next Chapter (75 words)
A cliffhanger or forward-hook that makes the reader want to continue — without cheaply teasing.

### Sample Section (500 words)
Write one complete section from the outline at full draft quality, demonstrating voice, pacing, and the exercise format.

## Output: Detailed chapter outline + 500-word sample section, formatted and ready for writer assignment or direct expansion.`,
    category: 'content',
    tags: ['ebook', 'writing', 'information-architecture', 'instructional-design', 'lead-magnet'],
    difficulty: 'intermediate',
    useCase: 'Use when structuring an e-book or lead magnet chapter to ensure it delivers real learning outcomes, not just information.',
    authorUsername: 'builderai',
    likes: 175,
    saves: 120,
    copies: 560,
    views: 3300,
    trendScore: 175*2 + 120*3 + 560 + 3300*0.2,
    trendingScore: 175*2 + 120*3 + 560 + 3300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'E-books remain a top lead magnet format. This prompt brings instructional design rigor to content that usually gets written without structure.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 560,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-16',
  },
  {
    id: 'lib-cnt-011',
    title: 'Press Release & Media Pitch Writer',
    slug: 'press-release-media-pitch-writer',
    description: 'Writes a complete PR kit: press release, publication-tailored media pitches, and a boilerplate for three target outlets.',
    content: `You are a PR strategist who has placed stories in TechCrunch, Forbes, Fast Company, and vertical trade publications. Write a press release and media pitch kit for [ANNOUNCEMENT_TYPE] at [COMPANY_NAME].

## Inputs
- Announcement type: [ANNOUNCEMENT_TYPE] (product launch, funding round, partnership, data report, executive hire)
- Company name: [COMPANY_NAME]
- Announcement details: [KEY_FACTS] (who, what, when, where, why, supporting data)
- Target publications: [PUBLICATION_1], [PUBLICATION_2], [PUBLICATION_3]
- Embargo date (if applicable): [EMBARGO_DATE]

## Deliverables

### 1. Press Release (AP Style)
**Headline**: News-forward, present tense, under 100 characters.
**Subheadline**: Expands with one key proof point.
**Dateline**: [CITY, Date] —
**Lede paragraph**: Answers who/what/when/where/why in 40–50 words.
**Body (3–4 paragraphs)**: Expand with context, significance, supporting data, and second voice (customer or partner quote placeholder).
**Executive Quote**: Attributed to [CEO_NAME], [TITLE]. Should add perspective — not repeat the lede.
**Boilerplate**: 75-word "About [COMPANY_NAME]" paragraph in evergreen present tense.
**Contact block**: Media contact name, email, phone placeholder.

### 2. Media Pitches (one per publication)
For each of [PUBLICATION_1], [PUBLICATION_2], [PUBLICATION_3]:
- **Subject line**: 8 words max, newsy, no exclamation marks
- **Personalized opener**: Reference a specific recent article or beat the journalist covers (use [JOURNALIST_NAME] placeholder)
- **Story angle**: Why this story fits THIS publication's audience specifically
- **Why now**: The news hook or timing angle
- **Supporting data or exclusive**: What you're offering this outlet specifically
- **The ask**: Specific and brief — interview request, exclusive, or review unit

## Constraints
- Press release: No buzzwords, no self-congratulatory language, written as if a journalist is quoting it directly
- Pitches: Under 200 words each, no attachments mentioned in pitch, personalization must feel real`,
    category: 'content',
    tags: ['pr', 'press-release', 'media-pitch', 'communications', 'publicity'],
    difficulty: 'intermediate',
    useCase: 'Use when launching a product, announcing funding, or generating press coverage and you need a complete PR kit fast.',
    authorUsername: 'marketinglab',
    likes: 200,
    saves: 140,
    copies: 640,
    views: 3800,
    trendScore: 200*2 + 140*3 + 640 + 3800*0.2,
    trendingScore: 200*2 + 140*3 + 640 + 3800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Earned media still drives outsized brand credibility. This prompt produces journalist-ready materials that respect editorial standards.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 640,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-17',
  },
  {
    id: 'lib-cnt-012',
    title: 'Webinar & Workshop Content Architect',
    slug: 'webinar-workshop-content-architect',
    description: 'Designs a complete 60-minute webinar production kit: slide outline, speaker notes, interactive moments, and a 3-email pre/post sequence.',
    content: `You are a learning designer and webinar producer who has designed live events for audiences from 50 to 5,000 attendees. Create the complete content architecture for a 60-minute webinar on [TOPIC] for [AUDIENCE].

## Inputs
- Topic: [TOPIC]
- Audience: [AUDIENCE] (role, industry, knowledge level)
- Business goal: [GOAL] (lead gen, customer education, partner enablement)
- Speaker(s): [SPEAKER_NAME(S)], [TITLE(S)]
- Platform: [PLATFORM] (Zoom Webinar, Hopin, Crowdcast, etc.)

## Deliverables

### 1. Title + Subtitle Options (3 sets)
Each set: title (benefit-driven) + subtitle (specificity + proof point). Avoid "Ultimate Guide to" or "Everything You Need to Know."

### 2. Learning Outcomes (5)
What attendees will leave able to do. Specific and measurable. Use in registration copy and slide 2.

### 3. Slide-by-Slide Outline
Full 60-minute run of show:
- [0:00–5:00] Cover + Welcome + Housekeeping
- [5:00–10:00] Problem framing — make the pain visceral
- [10:00–40:00] Solution sections (3–4 modules, 8–10 min each)
  - Each module: key concept + example + takeaway
- [40:00–50:00] Demo or case study (if applicable)
- [50:00–60:00] Q&A + CTA + Close

For each slide: title, 3-bullet content summary, and transition note.

### 4. Speaker Notes (for 5 key slides)
Full spoken-word notes for the opening, each module intro, and the CTA slide.

### 5. Interactive Moments (3)
Design one poll, one exercise, and one chat prompt — with exact questions and facilitation instructions.

### 6. Pre-Webinar Email Sequence (3 emails)
- Email 1 (7 days before): Registration confirmation + why attend
- Email 2 (1 day before): Reminder + prep tip or pre-read
- Email 3 (1 hour before): Final reminder + tech check link

### 7. Post-Webinar Follow-Up Email
Sent within 2 hours: replay link, key takeaways summary, CTA to next step.

## Output: Complete webinar production kit, organized in chronological production order.`,
    category: 'content',
    tags: ['webinar', 'workshop', 'learning-design', 'event', 'lead-gen'],
    difficulty: 'intermediate',
    useCase: 'Use when planning a webinar to produce all materials — from slides to emails — in one structured session.',
    authorUsername: 'devdna',
    likes: 185,
    saves: 125,
    copies: 590,
    views: 3600,
    trendScore: 185*2 + 125*3 + 590 + 3600*0.2,
    trendingScore: 185*2 + 125*3 + 590 + 3600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'Webinar production is massively time-intensive. This prompt compresses multi-day prep work into a single comprehensive output.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 590,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-cnt-013',
    title: 'SEO Content Brief Generator',
    slug: 'seo-content-brief-generator',
    description: 'Creates a comprehensive SEO content brief with intent analysis, heading structure, entity coverage, and differentiation angle against top SERP competitors.',
    content: `You are an SEO content strategist who bridges technical SEO and editorial quality. Create a comprehensive content brief for an article targeting [PRIMARY_KEYWORD].

## Inputs
- Primary keyword: [PRIMARY_KEYWORD]
- Secondary keywords: [LIST_OF_SECONDARY_KEYWORDS]
- Target audience: [AUDIENCE]
- Website/domain context: [WEBSITE_DESCRIPTION]
- Competitor URLs to beat (top 3): [URL_1], [URL_2], [URL_3]

## Deliverables

### 1. Search Intent Analysis
Classify intent: informational / navigational / transactional / commercial investigation. Describe the searcher's precise goal, their knowledge level, and what a fully satisfying answer looks like. Note: what does the searcher NOT want (mismatched formats/depths to avoid)?

### 2. Content Specifications
- Recommended word count range (with rationale)
- Content format: article / guide / list / comparison / tool page
- Reading level target
- Primary and secondary CTAs

### 3. Recommended Heading Structure
Full H1 / H2 / H3 outline with notes on keyword placement. Each heading should serve the reader's journey, not just keyword density.

### 4. Entities to Mention
List 8–12 topically relevant entities (people, tools, concepts, brands, standards) that demonstrate subject authority to search engines. Note why each matters.

### 5. Internal Links to Include
Suggest 3–5 internal link opportunities with anchor text recommendations. Format: [Anchor text] → [Page description]

### 6. External Sources to Cite
Recommend 3–5 high-authority sources to reference for EE-AT signals. Include why each source type matters.

### 7. FAQs to Address
List 6–8 PAA (People Also Ask) style questions the article should answer, with recommended placement (inline vs. FAQ section).

### 8. Differentiation Angle
Analyze what the current top 3 SERP results cover, and specify exactly what this article will do differently or better: unique data, stronger depth, better examples, or a fresh angle.

### 9. Meta Title + Description
- Meta title (under 60 characters, primary keyword near the front)
- Meta description (under 155 characters, includes primary keyword + value proposition)

## Output: Brief document formatted for writer assignment, including all sections labeled and ready to paste into a Google Doc or Notion page.`,
    category: 'content',
    tags: ['seo', 'content-brief', 'keyword-research', 'serp', 'organic-traffic'],
    difficulty: 'intermediate',
    useCase: 'Use before assigning any SEO article to a writer — ensures every piece is strategically calibrated before a word is written.',
    authorUsername: 'promptarchitect',
    likes: 355,
    saves: 235,
    copies: 960,
    views: 5700,
    trendScore: 355*2 + 235*3 + 960 + 5700*0.2,
    trendingScore: 355*2 + 235*3 + 960 + 5700*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Content briefs are the highest-leverage pre-writing investment. This prompt operationalizes expert SEO strategy into a repeatable brief format.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 960,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-05',
  },
  {
    id: 'lib-cnt-014',
    title: 'Video Series Concept & Treatment',
    slug: 'video-series-concept-treatment',
    description: 'Develops a complete video series treatment: series premise, 6-episode arc, host brief, production notes, and distribution plan.',
    content: `You are a video content strategist who develops branded series for YouTube, LinkedIn Video, and owned platforms. Develop a video series concept for [BRAND] targeting [AUDIENCE] on [PLATFORM].

## Inputs
- Brand: [BRAND]
- Target audience: [AUDIENCE]
- Platform: [PLATFORM] (YouTube / LinkedIn / Instagram / TikTok / Owned)
- Business objective: [OBJECTIVE] (awareness, lead gen, community building, customer education)
- Budget tier: [BUDGET] (low: smartphone + basic editing / mid: small crew / high: full production)

## Deliverables

### 1. Series Name + Tagline
Three name options, each with a one-line tagline that captures the premise and audience benefit.

### 2. Series Premise (50 words)
The logline: what this series is about, why it matters, and who it's for. Should work as a pitch to a busy executive in 10 seconds.

### 3. Format Description
Episode length, cadence (weekly/biweekly), segment structure, recurring elements, tone and visual style direction. What makes this series immediately recognizable from episode 1?

### 4. Six-Episode Arc (titles + 100-word synopses each)
Design a narrative or thematic arc across 6 episodes — not 6 standalone videos. Each episode should create a reason to watch the next. For each episode: title, guest or format note, 100-word synopsis, and one viewer takeaway.

### 5. Recurring Segments / Features
2–3 recurring elements that create format familiarity and drive subscriber habit (e.g., a "rapid fire" closer, a "one tool" spotlight, a community question segment).

### 6. Talent / Host Brief (150 words)
Profile of the ideal host or content lead: attributes, on-camera style, expertise signals, what they're NOT (to avoid).

### 7. Production Notes
Recommended shot types, set/environment, graphics style, music direction, and post-production approach — calibrated to [BUDGET] tier.

### 8. Distribution & Promotion Plan
- Launch strategy (how to generate momentum for episode 1)
- Ongoing promotion cadence per platform
- Cross-promotion and repurposing approach
- Metrics to track (views, CTR, watch time, comments, subscriber delta)

## Output: Series treatment document, formatted for internal approval or agency brief.`,
    category: 'content',
    tags: ['video-series', 'youtube', 'brand-content', 'production', 'content-strategy'],
    difficulty: 'advanced',
    useCase: 'Use when developing a sustained video content strategy that goes beyond one-off videos and builds an audience over time.',
    authorUsername: 'builderai',
    likes: 150,
    saves: 100,
    copies: 480,
    views: 2900,
    trendScore: 150*2 + 100*3 + 480 + 2900*0.2,
    trendingScore: 150*2 + 100*3 + 480 + 2900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'Video series outperform one-off videos for channel growth. This prompt provides the strategic scaffolding most brands skip.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 480,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-cnt-015',
    title: 'Community Content Engagement Playbook',
    slug: 'community-content-engagement-playbook',
    description: 'Creates a complete community content playbook with daily post templates, 30 engagement prompts, AMA script, and moderation response templates.',
    content: `You are a community manager who has built and activated online communities from 100 to 100,000 members. Create a content engagement playbook for [COMMUNITY_NAME] on [PLATFORM] with [MEMBER_COUNT] members.

## Inputs
- Community name: [COMMUNITY_NAME]
- Platform: [PLATFORM] (Discord / Slack / Circle / Mighty Networks / Facebook Group)
- Member count: [MEMBER_COUNT]
- Member type: [MEMBER_TYPE] (e.g., SaaS founders, indie creators, marketing professionals)
- Community purpose: [PURPOSE] (peer learning, customer success, brand loyalty, paid membership)

## Deliverables

### 1. Daily Post Templates (Monday–Sunday)
For each day, a repeatable post template that fits a weekly rhythm:
- Monday: weekly intention prompt
- Tuesday: educational insight or tool spotlight
- Wednesday: community spotlight or member win
- Thursday: debate or contrarian take prompt
- Friday: reflection or wins share
- Saturday: casual/off-topic connection prompt
- Sunday: weekly resource roundup format

Each template: post format, opening hook formula, body structure, engagement CTA.

### 2. Weekly Event Calendar
4 weekly recurring event types with: event name, format (voice/text/video), duration, facilitator guide (5 bullet points), and expected engagement outcome.

### 3. Engagement Prompts Library (30 prompts)
Organized by engagement type:
- 10 opinion/debate prompts
- 10 experience/story prompts
- 10 resource/recommendation prompts

Each prompt: the question + a follow-up if the thread goes quiet.

### 4. Member Spotlight Format
Template for featuring a community member: intro framing, 5 interview questions, how to announce it, how to maximize engagement from the featured member.

### 5. AMA Script
Complete AMA (Ask Me Anything) format for a guest or community leader: pre-AMA promotion copy, opening script, question management process, closing script, follow-up content.

### 6. Monthly Challenge Framework
Design a 30-day community challenge: challenge name, daily structure, accountability mechanism, milestone check-ins, how to celebrate completion.

### 7. Moderation Response Templates
- 5 positive reinforcement responses (welcoming new members, praising contributions)
- 5 constructive redirection responses (off-topic, low-effort posts)
- 3 conflict de-escalation responses

## Output: Complete playbook document, organized in operational sections, ready to hand to a community manager or moderator team.`,
    category: 'content',
    tags: ['community', 'engagement', 'community-management', 'discord', 'slack'],
    difficulty: 'intermediate',
    useCase: 'Use when launching or reinvigorating an online community and you need a systematic engagement content system.',
    authorUsername: 'marketinglab',
    likes: 175,
    saves: 115,
    copies: 520,
    views: 3100,
    trendScore: 175*2 + 115*3 + 520 + 3100*0.2,
    trendingScore: 175*2 + 115*3 + 520 + 3100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'Community-led growth is replacing ad-led growth. This prompt gives community managers a systematic content engine they can run sustainably.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 520,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-22',
  },
]
