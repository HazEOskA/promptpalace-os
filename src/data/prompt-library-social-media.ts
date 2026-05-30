import type { Prompt } from './prompts'

export const SOCIAL_MEDIA_PROMPTS: Prompt[] = [
  {
    id: 'lib-soc-001',
    title: 'LinkedIn Thought Leadership System',
    slug: 'linkedin-thought-leadership-system',
    description: 'A complete 30-day LinkedIn operating system for professionals: profile optimization, content pillars, post templates, and engagement rituals.',
    content: `You are a LinkedIn growth strategist who has helped hundreds of professionals build influential presences on the platform. Build a complete 30-day LinkedIn thought leadership operating system for a [PROFESSIONAL_ROLE].

## Phase 1: Profile Optimization

### Headline Formula
Construct a headline using: [Title] | [Value you deliver] | [Who you help] | [Credibility marker]
Provide 3 headline variations ranked by strength.

### About Section Blueprint
- Opening hook (first 2 lines must work without "See more")
- Origin story (why you do what you do — 3 sentences)
- Social proof block (numbers, companies, outcomes)
- Content pillars teaser (what you write about)
- Clear CTA (what should readers do next?)

## Phase 2: Content Pillars
Define 5 content pillars that balance professional authority with personal relatability:
1. Industry insight / trend analysis
2. Behind-the-scenes / process transparency
3. Career lessons and hard-won wisdom
4. Tool or framework breakdowns
5. Community engagement / opinion posts

For each pillar: content frequency, example topic list (5 ideas), best format (text/document/poll/carousel).

## Phase 3: Post Formats & Templates
Provide fill-in templates for:
- **Text post** (hook + 4 punchy lines + insight + CTA)
- **Document carousel** (cover slide, 5-7 content slides, final CTA slide — with copy for each)
- **Poll post** (question framing, 4 answer options, follow-up comment strategy)
- **Short video script** (hook line, 3-point structure, sign-off)

## Phase 4: Hook Formula Library
10 proven hook formulas with filled examples for [PROFESSIONAL_ROLE]:
- Contrarian take, specific number, story opener, bold prediction, hot take, question opener, "I was wrong about…", "Unpopular opinion:", personal failure, industry myth bust

## Phase 5: Engagement Ritual (Daily — 20 min)
- Morning: 5 targeted comments on ideal-audience posts (comment frameworks provided)
- Afternoon: respond to all comments on your post within 3 hours
- Evening: 3 connection requests with personalized notes

## Phase 6: Connection & DM Strategy
- Connection request template (3 variations: cold, mutual connection, post commenter)
- First DM sequence (warm intro → value drop → soft ask)
- Newsletter strategy: frequency, topics, subject line formulas

## Output
Complete LinkedIn OS with all templates ready to use, a 30-day content calendar skeleton, and a daily action checklist (20-minute routine).`,
    category: 'social-media',
    tags: ['linkedin', 'thought-leadership', 'personal-brand', 'content-strategy', 'b2b'],
    difficulty: 'intermediate',
    useCase: 'Use when a professional wants to build a systematic LinkedIn presence that generates inbound opportunities.',
    authorUsername: 'marketinglab',
    likes: 385,
    saves: 245,
    copies: 980,
    views: 5800,
    trendScore: 385*2 + 245*3 + 980 + 5800*0.2,
    trendingScore: 385*2 + 245*3 + 980 + 5800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'LinkedIn organic reach is at an all-time high and professionals are racing to build authority before the algorithm shifts.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'marketinglab',
    uses: 980,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-soc-002',
    title: 'Twitter/X Thread Architect',
    slug: 'twitter-x-thread-architect',
    description: 'Craft high-performing Twitter/X threads with proven hook formulas, structured body tweets, and a reusable standalone tweet library.',
    content: `You are a top-performing Twitter/X content strategist who has written viral threads across technology, business, and personal development niches. Create a high-performing thread on [TOPIC] that maximizes engagement and profile growth.

## Thread Architecture

### Hook Tweet (Tweet 1)
Write 4 hook tweet variations using different formulas:
1. **Contrarian**: Challenge the obvious assumption about [TOPIC]
2. **Counterintuitive**: Share the surprising truth most people miss
3. **Specific number**: Lead with a compelling data point or numbered promise (e.g., "7 things I learned…")
4. **Story opener**: Start mid-scene with a vivid moment

Select the strongest hook and explain why.

### Body Tweets (Tweets 2–11)
Write 10 body tweets following these rules:
- Each tweet delivers one standalone insight (no filler)
- End each tweet with a micro-curiosity hook pulling to the next
- Use white space aggressively — one idea per line
- Maximum 2 sentences per line
- Alternate between tactical (how-to) and conceptual (why it matters) tweets
- Include at least one tweet with a framework or model readers can reuse

### Summary Tweet (Tweet 12)
Compress the entire thread into 3 bullet points. Start with: "If you read nothing else:"

### CTA Tweet (Tweet 13)
Offer something of value in exchange for engagement: a follow, a like+repost, or a reply. Never beg — frame it as a fair exchange.

## Formatting Best Practices
- Sentences under 12 words where possible
- Em-dashes over commas for punchy breaks
- No hashtags in thread body (add 1-2 only on CTA tweet)
- Numbers and colons create natural stopping points

## Standalone Tweet Library
Extract 5 standalone tweets from the thread content that work without context:
- Each under 240 characters
- Self-contained insight or provocation
- Include a reply starter to boost engagement

## Hook Formula Reference
Summarize all 4 hook formulas used with blank templates so the reader can apply them to future threads.

## Output
Complete thread (13 tweets, numbered), 5 standalone tweets, hook formula templates, and a posting checklist (best time, first-reply strategy, pinning decision).`,
    category: 'social-media',
    tags: ['twitter', 'threads', 'viral', 'hooks', 'content-writing'],
    difficulty: 'beginner',
    useCase: 'Use when you want to turn expertise or research into a high-performing Twitter/X thread with maximum reuse value.',
    authorUsername: 'contentpro',
    likes: 415,
    saves: 270,
    copies: 1080,
    views: 6400,
    trendScore: 415*2 + 270*3 + 1080 + 6400*0.2,
    trendingScore: 415*2 + 270*3 + 1080 + 6400*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '8 min',
    outputType: 'Content',
    whyTrending: 'Threads remain the highest-reach format on X/Twitter for knowledge creators and the demand for hook formulas is perennially high.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 1080,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-22',
  },
  {
    id: 'lib-soc-003',
    title: 'Instagram Content Strategy & Captions',
    slug: 'instagram-content-strategy-captions',
    description: 'Full Instagram content playbook: grid aesthetic, content pillars, caption formulas, hashtag strategy, Reels hooks, and bio optimization.',
    content: `You are a top Instagram strategist who grows engaged communities for brands and creators. Build a comprehensive Instagram content system for [BRAND/CREATOR].

## Grid Aesthetic Direction
- Define the visual identity: color palette (3 primary colors + 2 accents), mood/tone descriptors (5), lighting style, editing presets to emulate
- Grid layout pattern: checkerboard / row-based / puzzle — recommend one based on brand positioning
- Content type ratio for grid: educational : lifestyle : product : UGC : entertainment (suggest percentages)

## Content Pillars (5)
For each pillar provide:
- Pillar name and core purpose
- Content formats that work best (carousel, single image, Reel, Story, collab)
- 5 specific topic ideas
- Posting frequency recommendation

## Caption Formula
Every caption should follow: **Hook → Value → CTA**

### Hook Formulas (10 options):
Questions that sting, bold statements, open loops, relatable failures, surprising facts, contrarian takes, "if you [X], you need to know this", empathy openers, challenge starters, and number-led insights.

### Value Block:
- 3-5 tight paragraphs or line-broken blocks
- Use white space — one idea per break
- Mix education, story, and personality
- No more than 150 words for single images; up to 300 for carousels

### CTA Variations (10 CTAs by goal):
Save (for educational content), comment (conversation starters), share (relatable content), DM (lead gen), click link in bio (traffic), tag a friend (reach), follow (at key moments only), and 3 more tailored to [BRAND/CREATOR]'s conversion goal.

## Hashtag Strategy
- Research methodology: niche → medium → broad pyramid
- Optimal hashtag count by content type
- 5 hashtag sets for each pillar (15 tags each)
- Branded hashtag strategy and launch plan
- Hashtag rotation to avoid shadowban signals

## Reels Hook Templates (5)
Each under 3 seconds of screen time:
1. Bold text + reaction cut
2. POV opener ("POV: you just discovered…")
3. Before/after tease
4. Fast visual hook + verbal contrast
5. Question with immediate payoff — the answer is the Reel

## Story Tactics
- Daily story structure (5-frame sequence: engagement → value → behind-scenes → CTA → poll/quiz)
- Close Friends list strategy for highest-value audience segment
- Countdown and quiz sticker use cases mapped to content goals
- Story Highlight auto-add workflow

## Bio Optimization
Rewrite bio using: [Who you are] | [What you do] | [Who you help] + [Social proof or niche keyword] + CTA with link
Provide 3 bio variations by conversion priority.

## Highlight Strategy
5 highlight categories with cover icon direction (color, icon style) and content checklist for each. Naming convention that maximizes profile scannability.

## Output
Complete Instagram content playbook with all templates, caption examples for each pillar, hashtag sets, Reels hook scripts, and a 2-week sample posting schedule.`,
    category: 'social-media',
    tags: ['instagram', 'captions', 'content-strategy', 'reels', 'hashtags'],
    difficulty: 'intermediate',
    useCase: 'Use when building or overhauling an Instagram presence for a brand or creator account.',
    authorUsername: 'contentpro',
    likes: 320,
    saves: 198,
    copies: 845,
    views: 4900,
    trendScore: 320*2 + 198*3 + 845 + 4900*0.2,
    trendingScore: 320*2 + 198*3 + 845 + 4900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Playbook',
    whyTrending: 'Instagram algorithm favors consistent creators; brands are doubling down on structured content systems over ad-hoc posting.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 845,
    estimatedTokens: 780,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-14',
  },
  {
    id: 'lib-soc-004',
    title: 'TikTok Content Playbook',
    slug: 'tiktok-content-playbook',
    description: 'TikTok strategy playbook for brands and creators: hook formulas, video structure, trending audio tactics, duets, SEO, and Reels cross-posting.',
    content: `You are a TikTok growth expert who has helped brands break through on the platform. Create a comprehensive TikTok content playbook for [BRAND/CREATOR] targeting [DEMOGRAPHIC].

## Niche Content Format Analysis
- Identify the top 5 performing content formats in [BRAND/CREATOR]'s niche on TikTok
- For each format: structure breakdown, average video length, typical engagement rate, difficulty to replicate
- Recommend the top 2 formats to lead with based on [BRAND/CREATOR]'s current resources

## Video Hook Engineering (First 3 Seconds)
The hook is everything on TikTok. Provide 5 hook formulas with filled examples for [DEMOGRAPHIC]:
1. **Visual pattern interrupt**: unusual camera angle, unexpected action, or text overlay that breaks scroll
2. **Bold verbal claim**: speak directly to [DEMOGRAPHIC]'s #1 pain or desire in one sentence
3. **Story-in-progress**: start mid-action ("I can't believe this actually worked…")
4. **Curiosity gap text overlay**: on-screen text teases an answer the viewer must stay to get
5. **Relatable situation setup**: "When you [highly specific relatable scenario]…"

## Video Structure Framework
For every video, follow this 4-part structure:
- **Hook** (0–3 sec): Earn attention — do not waste a single frame
- **Build** (3–20 sec): Deliver on the hook's promise, add context, layer intrigue with micro-hooks
- **Payoff** (20–40 sec): The moment of value, transformation, or reveal that justifies the viewer's time
- **CTA** (final 3 sec): Follow for part 2 / comment your answer / link in bio

Provide template scripts for 3 video types: educational tutorial, entertainment/story, and product showcase.

## Trending Audio Strategy
- How to find trending sounds 48–72 hours before they peak (TikTok Creative Center, early-adopter searches, creator tool signals)
- Rules for using trending audio: the video must hook independently of the audio
- Original audio strategy: why building a recognizable sound is a long-term moat
- Sound licensing considerations for brand accounts

## Duet & Stitch Tactics
- How to identify high-value duet/stitch candidates in your niche (agree/disagree/build-upon plays)
- 3 duet formats: reaction, addition, and contrast — when to use each
- How to make stitches feel original and additive rather than derivative
- Creator relationship angle: when to message the original creator before stitching

## Comment Section Strategy
- Pin a controversial or funny comment to drive re-engagement on old videos
- Reply with video responses to top comments — criteria for choosing which ones to answer
- "Comment bait" CTA formulas that generate high comment volume without being transparent about it
- How to use the comment section as a content research feed

## Posting Cadence & TikTok SEO
- Recommended posting frequency during growth phase vs maintenance phase
- Best posting windows for [DEMOGRAPHIC] by timezone
- TikTok SEO: keyword placement in spoken words, on-screen text, captions, and auto-generated captions
- Hashtag strategy: 3–5 niche + 1–2 broad; avoid trending-only hashtag strategies

## Reels Cross-Posting System
- What to trim or adapt when cross-posting to Instagram Reels (watermark removal, aspect ratio guidance)
- Caption differences between TikTok and Reels audiences
- Content formats that travel well vs content that should stay native to TikTok

## Output
Complete TikTok playbook with hook templates for 5 formulas, 3 full video scripts, a 30-day content calendar, SEO checklist, and cross-posting workflow guide.`,
    category: 'social-media',
    tags: ['tiktok', 'short-form-video', 'hooks', 'reels', 'content-strategy'],
    difficulty: 'intermediate',
    useCase: 'Use when a brand or creator needs a structured approach to breaking through on TikTok.',
    authorUsername: 'builderai',
    likes: 298,
    saves: 175,
    copies: 790,
    views: 4600,
    trendScore: 298*2 + 175*3 + 790 + 4600*0.2,
    trendingScore: 298*2 + 175*3 + 790 + 4600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Playbook',
    whyTrending: 'TikTok is the fastest-growing brand discovery channel and marketers need repeatable frameworks to compete with native creators.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 790,
    estimatedTokens: 810,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-soc-005',
    title: '30-Day Social Media Content Calendar',
    slug: '30-day-social-media-content-calendar',
    description: 'Day-by-day content calendar for a brand across 3 platforms with content briefs, hook drafts, hashtags, and posting time recommendations.',
    content: `You are a social media director with experience running multi-platform content operations for fast-growing brands. Create a complete 30-day content calendar for [BRAND] across [3 PLATFORMS].

## Calendar Architecture

### Platform Configuration
For each of the 3 platforms define:
- Posting frequency (days per week)
- Primary content format(s) for this platform
- Audience intent on this platform (discovery / community / conversion)
- Content tone adjustment from brand baseline

### Content Pillar Balance
Distribute 30 days of content across 5 pillars with these target ratios:
1. Educational / How-to (30%)
2. Brand story / Behind-the-scenes (20%)
3. Product or service spotlight (20%)
4. Community / UGC / Social proof (15%)
5. Entertainment / Trending / Seasonal (15%)

Show pillar distribution per platform in a summary table before the calendar begins.

## Day-by-Day Calendar (Days 1–30)
For each day, provide a structured entry with all of the following fields:
- **Day & Date**: Day 1 — [Date]
- **Platform**: Which platform(s) are posting today
- **Content Type**: Carousel / Reel / Thread / Static / Story / Poll
- **Pillar**: Which content pillar this falls under
- **Topic**: Specific post topic (not vague — e.g., "3 mistakes new [product category] buyers make")
- **Hook**: First line or first 3-second hook for video
- **Visual Direction**: Brief art direction (color, format, subject)
- **Caption Draft**: 2–3 sentences of actual draft copy
- **Hashtags**: 8–12 relevant hashtags
- **Posting Time**: Recommended time (with timezone note)
- **Campaign Tie-in**: Flag if this post connects to a campaign or promotion

## Week 1 Content Briefs (Full Detail)
For days 1–7, expand each calendar entry into a full content brief:
- Objective and success metric for this specific post
- Full caption draft (hook + body + CTA)
- Visual brief (dimensions, design notes, reference examples)
- Platform-specific formatting notes
- Internal approval and review notes

## Campaign Alignment
Identify 2 mini-campaigns to run within the 30 days (e.g., a launch teaser series or a UGC prompt week). For each campaign:
- Campaign name and objective
- Arc structure (teaser → main event → follow-up)
- Posts mapped to calendar days

## Cross-Platform Repurposing Map
A table showing which content pieces from the calendar can be adapted across platforms and what specific changes each adaptation requires.

## Output
Complete 30-day calendar table (all fields for each day), 7 full content briefs, 2 campaign outlines, and a cross-platform repurposing map.`,
    category: 'social-media',
    tags: ['content-calendar', 'social-media-planning', 'multi-platform', 'editorial-calendar'],
    difficulty: 'intermediate',
    useCase: 'Use when you need to plan an entire month of social media content across multiple platforms in one session.',
    authorUsername: 'marketinglab',
    likes: 275,
    saves: 195,
    copies: 870,
    views: 5100,
    trendScore: 275*2 + 195*3 + 870 + 5100*0.2,
    trendingScore: 275*2 + 195*3 + 870 + 5100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Calendar',
    whyTrending: 'Marketing teams save dozens of hours monthly with AI-assisted content calendars; demand spikes at the start of every quarter.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 870,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-30',
  },
  {
    id: 'lib-soc-006',
    title: 'Community Building & Engagement System',
    slug: 'community-building-engagement-system',
    description: 'Full community playbook: positioning, engagement ladder, UGC campaigns, moderation guidelines, influencer engagement, and health metrics.',
    content: `You are a community strategist who has built engaged online communities for brands and creators from zero to thriving ecosystems. Build a complete community playbook for [BRAND] on [PLATFORM].

## Community Positioning & Purpose
- Community mission statement (1 sentence — why this community exists for members, not for the brand)
- Unique value proposition vs existing communities in the space
- Community personality: 5 adjectives, 2 anti-adjectives (what you are NOT)
- Name and tagline options (3 variations)
- Membership criteria: who is this for and who is it explicitly not for

## The Engagement Ladder
Define 5 stages of community membership with specific behaviors at each level:
1. **Lurker**: reads content, never posts — what draws them in deeper?
2. **Commenter**: reacts and replies to others — what prompts their first comment?
3. **Contributor**: creates original posts — what gives them the confidence?
4. **Regular**: shows up consistently, has recognizable relationships — what keeps them coming back?
5. **Advocate**: brings in new members, defends the community — what makes them feel genuine ownership?

For each transition between stages, list 3 specific tactics to move members up the ladder.

## UGC Campaign Mechanics
Design 3 UGC campaigns for [PLATFORM]:
- **Prompt campaign**: weekly question or challenge that generates member posts (5 example prompts included)
- **Showcase campaign**: feature member content with a branded template — submission process and curation cadence
- **Challenge campaign**: 7-day challenge with daily prompts and a community hashtag

For each campaign: objective, mechanic, incentive structure, and moderation workflow.

## Community Rituals & Recurring Content
Weekly rituals that create consistency and a sense of belonging:
- Monday: goal-setting or motivation post with community reply thread
- Wednesday: ask-me-anything or hot take discussion thread
- Friday: win-sharing and celebration post
- Monthly: member spotlight series (nomination → interview → feature format)
- Quarterly: community retrospective (what we built, what we learned, what's next)

## Influencer & Micro-Creator Engagement
- Tiered engagement strategy: nano (1K–10K) / micro (10K–100K) / macro (100K+)
- Outreach template for each tier
- Ambassador program structure: perks, expectations, and co-creation opportunities
- How to convert vocal community members into unofficial advocates without making it feel transactional

## Moderation Guidelines
- 5 core community rules with the rationale for each
- Response templates for: spam, off-topic posts, toxic behavior, public complaints
- Escalation ladder: warning → 24-hour timeout → permanent ban criteria and review process
- Moderator tone guide: firm but human, never robotic or punitive-sounding

## Community Health Metrics
Weekly metrics: active member count, post volume, response rate, new member retention at day 7
Monthly metrics: engagement rate, churn rate, Net Promoter Score, content quality score (defined rubric)
Dashboard structure and weekly review cadence

## Output
Complete community playbook with engagement ladder tactics for each stage, 3 UGC campaign briefs, ritual calendar, moderation response templates, and KPI dashboard structure.`,
    category: 'social-media',
    tags: ['community', 'engagement', 'ugc', 'moderation', 'brand-community'],
    difficulty: 'advanced',
    useCase: 'Use when launching or revitalizing a branded online community on any social platform.',
    authorUsername: 'devdna',
    likes: 218,
    saves: 148,
    copies: 620,
    views: 3800,
    trendScore: 218*2 + 148*3 + 620 + 3800*0.2,
    trendingScore: 218*2 + 148*3 + 620 + 3800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Playbook',
    whyTrending: 'Brands are shifting from broadcast social to owned community models as organic reach on public feeds continues to decline.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 620,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-05',
  },
  {
    id: 'lib-soc-007',
    title: 'Social Media Ad Creative Brief',
    slug: 'social-media-ad-creative-brief',
    description: 'Complete ad creative briefs across 4 formats and 3 strategic angles — pain-focused, aspiration-focused, and social proof-focused — plus testing hierarchy and fatigue signals.',
    content: `You are a direct-response creative director who has produced winning paid social campaigns across Meta, TikTok, and YouTube. Create a complete ad creative brief kit for [PRODUCT] on [PLATFORM].

## Creative Strategy Foundation
- Product positioning in 1 sentence (what it is, who it's for, why it's different)
- Target audience psychographic snapshot: core beliefs, fears, daily frustrations, and aspirations
- Primary conversion goal: awareness / consideration / purchase / retention
- Budget tier and recommended format split given the budget

## Three Creative Angles

### Angle 1: Pain-Focused
Leads with the problem. Makes the viewer feel deeply seen before offering a solution.
- The core pain point articulated in the target audience's exact language (no brand voice here)
- Emotional escalation arc: awareness of pain → intensification of recognition → arrival of relief
- Warning: when to pull back before the creative feels manipulative rather than empathetic

### Angle 2: Aspiration-Focused
Leads with the dream outcome. Sells the transformation, not the features of the product.
- The aspirational identity the target audience wants to embody
- Before/after framing that highlights the destination without making the "before" feel shameful
- Visual language and color palette that signals arrival at the desired outcome

### Angle 3: Social Proof-Focused
Leads with evidence. Third-party validation reduces purchase risk better than any brand claim.
- Criteria for selecting the most persuasive reviews or testimonials (specificity beats enthusiasm)
- UGC-style vs polished production: when each approach performs better and why
- Authority markers to feature: specific numbers, recognizable company logos, expert credentials

## Format Briefs — Four Formats Per Angle (12 Total)

### Static Image Ad
- Hook headline (under 7 words)
- Supporting subheadline
- Body copy (25–40 words)
- CTA button copy (3 options)
- Visual description: subject, composition, text overlay placement
- Target emotion the creative should trigger in the first 2 seconds

### Video Ad (15–30 sec)
- Hook script and visual direction (0–3 sec)
- Middle section script: problem-solution narrative or product demonstration (3–20 sec)
- Close: CTA and final visual (20–30 sec)
- Voiceover tone guide
- On-screen text requirements

### Carousel Ad
- Card 1: Hook card — bold problem statement or claim
- Cards 2–4: Proof, feature, or benefit cards (one idea per card)
- Final card: CTA card with offer framing
- Copy and visual direction for each card

### Story / Vertical Full-Screen Ad
- Opening visual hook for full-screen format
- Tap-forward interaction design consideration (where does the user tap to advance?)
- CTA placement and format (swipe-up, link tap, or button overlay)

## Testing Hierarchy
Recommended A/B testing sequence to spend budget efficiently:
1. Test angle (pain vs aspiration vs social proof) — hold creative format constant
2. Test hook format within the winning angle
3. Test CTA copy within the winning hook
4. Test visual style within the proven creative structure

## Creative Fatigue Signals & Refresh Protocol
- Frequency thresholds per platform before refreshing creative
- Early warning metrics: CTR decline %, CPM spike %, thumbstop rate below threshold
- Refresh protocol: swap hook only vs full creative refresh — decision criteria

## Output
12 complete creative briefs (3 angles × 4 formats), testing hierarchy with sample timeline, fatigue monitoring checklist, and a 4-week launch and testing sequencing plan.`,
    category: 'social-media',
    tags: ['paid-social', 'ad-creative', 'direct-response', 'creative-brief', 'meta-ads'],
    difficulty: 'advanced',
    useCase: 'Use when briefing a creative team or generating paid social ad copy and creative concepts for a product launch or ongoing campaign.',
    authorUsername: 'promptarchitect',
    likes: 245,
    saves: 168,
    copies: 710,
    views: 4200,
    trendScore: 245*2 + 168*3 + 710 + 4200*0.2,
    trendingScore: 245*2 + 168*3 + 710 + 4200*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Brief',
    whyTrending: 'Paid social CPMs continue to rise; structured creative briefs and systematic angle testing are now table stakes for any performance marketing team.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 710,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-soc-008',
    title: 'Influencer Marketing Campaign Planner',
    slug: 'influencer-marketing-campaign-planner',
    description: 'End-to-end influencer campaign playbook: tier strategy, creator vetting, outreach templates, creative brief, tracking setup, and performance benchmarks.',
    content: `You are an influencer marketing director who manages large creator budgets across multiple verticals. Build a complete influencer marketing campaign playbook for [PRODUCT] with [BUDGET].

## Campaign Objectives & KPIs
- Primary objective: brand awareness / reach / engagement / conversions / UGC generation
- Secondary objective
- Success metrics by objective with specific benchmark targets
- Attribution model selection: last-click, view-through, or incrementality testing — explain tradeoffs for this campaign

## Influencer Tier Strategy
Define the optimal tier mix for [BUDGET]:
- **Nano (1K–10K)**: High trust, lower cost, niche authenticity — best budget % allocation
- **Micro (10K–100K)**: Proven engagement rates, category authority, most cost-efficient reach
- **Macro (100K–1M)**: Scale and brand credibility signal — use selectively
- **Mega (1M+)**: Mass awareness — use sparingly at [BUDGET] level with clear justification

Provide a tier allocation table: tier, follower range, recommended # of creators, budget %, expected CPM, and best use case.

## Finding & Vetting Creators
**Discovery channels**: native platform search, creator marketplaces, hashtag prospecting, competitor tagging analysis, and mining your own customer community

**Vetting checklist for each creator**:
- Engagement rate benchmark by tier and platform (provide minimum thresholds)
- Audience authenticity signals to check (bot detection red flags)
- Content quality and brand safety audit of last 90 days
- Audience demographic alignment with [PRODUCT]'s ICP
- Previous brand conflicts or exclusivity clause history
- Comment quality: are comments genuine conversation or generic emoji responses?

## Outreach Templates (3 Scenarios)
1. **Cold outreach** via DM or email: personalized hook referencing their content + campaign angle + clear ask
2. **Warm outreach** to existing followers or brand fans: acknowledge relationship before making the pitch
3. **Agency or management outreach**: professional format, rate card request, brief campaign overview attachment

## Creative Brief Template
Provide a complete fill-in creator brief:
- Campaign overview (one paragraph, written from the creator's perspective)
- Key messages (3 maximum — what the content must communicate)
- Do's: brand voice guidelines, product handling instructions, accuracy requirements
- Don'ts: competitor mentions, restricted claims, content styles to avoid
- Deliverables: number of posts, formats required, posting windows, story requirements
- FTC disclosure requirements: exact #ad and #sponsored placement guidance
- Approval process: draft review timeline and round limits
- Usage rights: organic-only vs paid amplification vs whitelisting — with rate guidance

## Tracking Setup
- UTM naming convention for each creator and format
- Unique promo code strategy: assignment, tracking, expiry
- Story link and link-in-bio tracking methodology
- Post-campaign brand lift survey: 3-question format for simple measurement
- 30/60/90-day content performance review schedule

## Repurposing Rights & Paid Amplification
- Why to negotiate repurposing rights upfront before rates are set
- Whitelist strategy: how to boost top-performing organic creator content
- Creative licensing cost benchmarks by tier and usage type

## Performance Benchmarks & Reporting
- Expected CPV, CPE, CPC, and ROAS by creator tier
- Red flag thresholds that trigger early campaign termination or renegotiation
- Post-campaign report template: executive summary, by-creator performance breakdown, key learnings, next campaign recommendations

## Output
Complete influencer campaign playbook with tier budget split, creator vetting checklist, 3 outreach templates, full creative brief template, tracking setup guide, and post-campaign report template.`,
    category: 'social-media',
    tags: ['influencer-marketing', 'creator-economy', 'ugc', 'campaign-planning', 'paid-media'],
    difficulty: 'advanced',
    useCase: 'Use when planning an influencer marketing campaign from budget allocation through post-campaign analysis.',
    authorUsername: 'marketinglab',
    likes: 192,
    saves: 138,
    copies: 590,
    views: 3600,
    trendScore: 192*2 + 138*3 + 590 + 3600*0.2,
    trendingScore: 192*2 + 138*3 + 590 + 3600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'Creator economy budgets are growing while marketing teams need systematic frameworks that reduce dependency on agency relationships.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 590,
    estimatedTokens: 920,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-22',
  },
  {
    id: 'lib-soc-009',
    title: 'Viral Hook Formula Library',
    slug: 'viral-hook-formula-library',
    description: '30 battle-tested hook formulas for any niche, organized by engagement goal, with filled examples and a systematic testing framework.',
    content: `You are a content strategist and copywriter who has reverse-engineered thousands of viral posts across every major social platform. Generate a comprehensive hook swipe file of 30 hooks for [CONTENT_TYPE] in [NICHE].

## Hook Psychology (Read This First)
Before the library, explain in 3 tight paragraphs what makes a hook work at the neurological level. Cover the 4 core drivers: curiosity gap, self-relevance, pattern interrupt, and social proof. Explain how they interact and why the best hooks layer two or more drivers simultaneously rather than relying on a single technique.

## Hook Library (30 Hooks)

### Category 1: Curiosity Gap Hooks (10 hooks)
Curiosity gaps work by withholding the resolution the reader's brain immediately demands.

For each of the 10 hooks provide all four of these elements:
- **Template**: the blank formula with [VARIABLES] labeled
- **Filled Example**: the template applied specifically to [NICHE] / [CONTENT_TYPE]
- **Psychology note**: one sentence explaining why this variation creates a stronger pull than a generic version
- **Variation**: one structural twist on the same formula for a different emotional register

Topics to cover across the 10: "what nobody tells you", "the real reason behind X", counterintuitive findings, open loop questions, partial list reveals, implied insider expertise, forbidden or taboo knowledge framing, timeline reversal (start at the end), future state preview, and comparative surprise.

### Category 2: Contrarian / Counterintuitive Hooks (5 hooks)
These work by challenging the default belief your audience holds about [NICHE]:
1. Challenge the industry consensus directly
2. Reframe a common best practice as secretly harmful
3. Reveal the hidden cost of the "safe" choice everyone makes
4. "Stop doing X" format — must include a specific X, not vague
5. "Everyone is wrong about X" with a credibility signal that earns the right to say it

### Category 3: Specific Outcome Hooks (5 hooks)
Precision beats vagueness every time. Numerical specificity and time-bound results dramatically outperform generic outcome hooks:
1. Result + timeframe + qualifying condition
2. Exact number of steps, mistakes, or tactics
3. Before/after framing with a quantified gap
4. "From X to Y in Z" structure — make X and Y as concrete as possible
5. Percentage improvement with enough context to make it credible

### Category 4: Story Opener Hooks (5 hooks)
Mid-scene drops force the reader into a story already in motion:
1. In medias res: start at the most dramatic moment
2. Failure confession opener that implies a hard-earned lesson follows
3. "I almost quit" moment — vulnerability that signals earned wisdom
4. Unexpected outcome reveal with the stakes established in the hook itself
5. Character + conflict in a single line — no setup, no context, just tension

### Category 5: Pain Question Hooks (5 hooks)
Questions that articulate a frustration the audience has felt but never named precisely:
1. The unspoken frustration most people have never heard put into words
2. "Why does X keep happening to me?" format — the answer must be non-obvious
3. The false choice question that reveals a third option
4. Permission question that makes the reader feel safe wanting something ("Is it okay to want X?")
5. Diagnostic question pointing to a problem they didn't know they had

## Engagement Goal Reference Table
Reorganize the 30 hooks into a quick-reference table:

| Engagement Goal | Most Effective Hook Categories | Top 3 Hook Numbers to Start With |
|----------------|-------------------------------|----------------------------------|
| Drive comments | ... | ... |
| Drive shares | ... | ... |
| Drive saves | ... | ... |
| Drive follows | ... | ... |

## Hook Testing Framework
A systematic approach to finding your highest-performing hooks:
- How to A/B test hooks using scheduling tools without paying for ads
- Minimum sample size before declaring a winner for your follower count
- The 48-hour evaluation rule for short-form content vs the 7-day rule for long-form
- How to build a personal hook performance database from your own past posts
- The iterative improvement protocol: how to take a B+ hook to an A+ hook in exactly 3 edits

## Output
30-hook swipe file organized by category with all 4 elements filled in for [NICHE], engagement goal reference table, and hook testing framework with decision criteria.`,
    category: 'social-media',
    tags: ['hooks', 'viral', 'copywriting', 'content-creation', 'engagement'],
    difficulty: 'beginner',
    useCase: 'Use when you need a ready-made library of hooks to test across social platforms, or when existing content is underperforming and you need to rewrite the opening.',
    authorUsername: 'promptarchitect',
    likes: 395,
    saves: 258,
    copies: 1050,
    views: 6200,
    trendScore: 395*2 + 258*3 + 1050 + 6200*0.2,
    trendingScore: 395*2 + 258*3 + 1050 + 6200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '10 min',
    outputType: 'Swipe File',
    whyTrending: 'Hook formulas are the single highest-leverage copywriting skill in social media and every creator needs a fresh swipe file regularly.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 1050,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-18',
  },
  {
    id: 'lib-soc-010',
    title: 'YouTube Channel Growth Strategy',
    slug: 'youtube-channel-growth-strategy',
    description: 'Complete YouTube growth playbook: content positioning, video ideation, title formulas, hook structure, retention tactics, Shorts strategy, and monetization path.',
    content: `You are a YouTube growth strategist who has taken channels from zero to hundreds of thousands of subscribers across competitive niches. Build a comprehensive channel growth playbook for [CHANNEL] in [NICHE] currently at [SUBSCRIBER_COUNT].

## Channel Positioning & Differentiation
- The unique angle: what does [CHANNEL] cover that no other channel in [NICHE] does in exactly this way?
- Audience avatar: describe the ideal viewer in full detail — demographics, watch habits, what they already search for, what content they have already consumed and are now tired of
- Positioning statement template: "[CHANNEL] is the only YouTube channel for [AUDIENCE] who want [OUTCOME] without [TRADEOFF]"
- The channel promise: the implicit contract between creator and subscriber that every video must fulfill

## Video Idea Framework — Search-First vs Browse-First

**Search-First Videos (60% of content mix)**: Capturing existing, proven demand
- Research tools: YouTube search autocomplete, TubeBuddy or VidIQ keyword data, Reddit and forum question mining, Google search intent analysis
- Topic template: "[Specific problem] for [specific audience segment]"
- 10 search-first video ideas for [NICHE] generated using this framework

**Browse-First Videos (40% of content mix)**: Earning algorithm recommendation placement
- These win on click-through rate and watch time, not search volume
- Topic template: "[Emotional trigger] + [specific outcome] + [credibility or intrigue signal]"
- 10 browse-first video ideas for [NICHE] that would perform well as recommendations

## Title Formula System
8 proven title formulas with [NICHE]-specific filled examples:
1. Number + timeframe + specific measurable outcome
2. "How to [outcome] without [the common painful tradeoff]"
3. "Why [widely believed thing in [NICHE]] is actually wrong"
4. "[Specific audience segment] + [named frustration] + [solution promise]"
5. Story setup: "What happened when I [specific action]"
6. Honest comparison: "[Option A] vs [Option B]: what I actually found"
7. Warning format: "Stop [X] until you watch this" — X must be specific
8. The knowledge gap: "What nobody talks about with [topic in [NICHE]]"

## Thumbnail Principles
- 5 non-negotiable rules (readability at 120px, emotional face expression, color contrast with platform background, text maximum of 5 words, brand color consistency)
- 3 thumbnail template types by video category: educational, story-driven, and list/ranking
- A/B testing protocol: when to test and when to stop (impressions threshold)

## Hook Structure — First 30 Seconds
The YouTube hook must accomplish 3 things in sequence: validate the click, build urgency to keep watching, and promise the payoff without delivering it yet.
- Frame 1 (0–5 sec): Prove the title's premise is real and about to be delivered
- Frame 2 (5–15 sec): Establish stakes — why does this matter right now, for this specific viewer?
- Frame 3 (15–30 sec): Brief credibility signal that earns authority without a full channel intro
- Anti-pattern to eliminate: never start with "Hey guys, welcome back to my channel" — explain why this kills retention

Hook script template + 3 filled examples for [NICHE].

## Retention Tactics
- Open loop technique: plant 3 unresolved questions in the first 2 minutes that only the full video answers
- Chapter structure for long-form: every 3–5 minutes needs a new mini-hook to reset attention
- B-roll and visual change cadence recommendations by video length
- End screen optimization: what to feature to maximize session time, not just subscription clicks

## Community Tab & YouTube Shorts

**Community Tab**: 3 weekly post types that drive notification opens and comment volume without requiring video production
**YouTube Shorts**: how to use Shorts as a top-of-funnel discovery engine that funnels viewers to long-form content — 3 Shorts formats optimized for subscriber conversion

## Collaboration & Cross-Promotion Strategy
- 4 collaboration formats and when to use each: guest appearance, response video, challenge, joint series
- How to identify ideal collab partners: complementary niche, subscriber count within 3x range, audience overlap analysis
- Outreach email template that gets responses from busy creators

## YouTube SEO — Full Keyword Placement Guide
- Title: primary keyword in first 60 characters
- Description: primary keyword in first 2 sentences, secondary keywords throughout, chapters with timestamps
- Tags: 15–20 tags from specific to broad
- Chapters: keyword-rich chapter titles for search snippet eligibility
- Pinned comment: SEO-optimized first comment strategy

## Monetization Path by Subscriber Milestone
- 0–1K: Build the posting habit, identify your 2 best-performing formats
- 1K–10K: YouTube Partner Program eligibility, affiliate link strategy, first digital product
- 10K–100K: Brand deal outreach, course or membership launch, community building
- 100K+: Premium brand partnerships, licensing deals, speaking and event revenue

## Output
Complete channel growth playbook with 20-video idea bank (10 search + 10 browse), 8 title formulas with filled examples, hook script template, retention checklist, Shorts strategy, and monetization milestone roadmap.`,
    category: 'social-media',
    tags: ['youtube', 'video-strategy', 'seo', 'retention', 'channel-growth'],
    difficulty: 'advanced',
    useCase: 'Use when building or relaunching a YouTube channel with a systematic, data-informed approach to sustainable growth.',
    authorUsername: 'devdna',
    likes: 265,
    saves: 185,
    copies: 775,
    views: 4700,
    trendScore: 265*2 + 185*3 + 775 + 4700*0.2,
    trendingScore: 265*2 + 185*3 + 775 + 4700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'YouTube remains the highest-ROI long-form platform for building compounding audience; creators are investing in systematic strategies over random posting.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 775,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-10',
  },
  {
    id: 'lib-soc-011',
    title: 'Social Proof & UGC Generation System',
    slug: 'social-proof-ugc-generation-system',
    description: 'A complete social proof flywheel: review request sequences, UGC campaigns, customer story outreach, testimonial formats, and repurposing to ads and landing pages.',
    content: `You are a growth marketing expert specializing in building social proof systems that convert skeptical visitors into buyers. Create a complete social proof and UGC generation system for [BRAND].

## Social Proof Audit
Start by cataloging what [BRAND] already has and identifying the most critical gaps:
- **Volume proof**: total customers served, review count, downloads, active users
- **Quality proof**: notable client logos, case study outcomes, awards and certifications
- **Recency proof**: reviews from the last 30 and 90 days, real-time user counts
- **Specificity proof**: testimonials that name exact outcomes with real numbers
- **Social proof**: influencer endorsements, media coverage, celebrity associations

Identify the top 3 gaps in the current social proof portfolio. Prioritize closing them in order of conversion impact.

## Review Request Sequences

### Post-Purchase Email Sequence (3 touches)
Provide the complete copy — subject lines and full email bodies — for all three emails:
- **Touch 1 (Day 7 post-purchase)**: Soft check-in email — "How is [PRODUCT] working for you?" No review ask yet. Build relationship.
- **Touch 2 (Day 14)**: Gentle review request — personalized to product category, direct review link, brief explanation of why their review matters
- **Touch 3 (Day 30)**: Final ask — addresses common hesitation ("it takes 60 seconds"), shows current review count as social proof, offers easy exit if they decline

### In-App / Post-Interaction Trigger
- Optimal timing: trigger immediately after the user experiences a success moment
- 2-tap flow design: emoji reaction → star rating → optional written review
- "Not now" pathway: route declines to an internal feedback form, not a dead end

## UGC Prompt Campaigns — 3 Complete Campaigns

### Campaign 1: "Show Us How You Use It"
- Platform: Instagram + TikTok
- Branded hashtag with tracking setup
- Video prompt: 3 specific guided questions that produce useful content, not generic praise
- Incentive: feature on brand account + exclusive discount code
- Weekly curation and best-of workflow

### Campaign 2: "Before & After"
- Works for any product with a transformation or improvement outcome
- Submission form with guided before/after prompts
- Permission and usage rights clause (standard language provided)
- Visual formatting brief for how to present the content once received

### Campaign 3: "Community Challenge"
- 7-day challenge structure with daily prompts that escalate in commitment
- Countdown mechanics and leaderboard-style engagement driver
- Finale: community showcase post that celebrates all participants
- Budget: executes without cash prizes — recognition and visibility as the primary incentive

## Customer Story Outreach System
- Selection criteria for customers to approach for full case studies (recency, outcome quality, communication willingness, ICP fit)
- Outreach email template (subject line + 3-sentence pitch — read rate over click rate)
- Interview guide: 10 questions that reliably surface quote-worthy, story-rich responses
- Story structure: situation → challenge → solution → specific result → recommendation

## Testimonial Formats — 5 Types
For each format provide copy and design guidelines:
1. **Pull quote card** (social, ads): 1–3 sentences, outcome-focused, name + photo + title
2. **Video testimonial** (landing page): 30–60 second 3-act script guide
3. **Star rating + snippet** (product pages): minimum specificity requirement for display
4. **Case study one-pager** (B2B sales): metrics-first headline, structured narrative
5. **Long-form customer story** (blog or email): narrative format template, 500–800 words

## Rights Management
- Standard UGC usage permission language for DM reply or comment (copy-pasteable)
- Opt-in consent form template for paid advertising repurposing
- Credit and attribution policy for public content reuse

## Best-Of Curation & Repurposing System
- Weekly review process: who reviews new UGC, where it lives, how it gets tagged
- Content calendar slots reserved specifically for social proof posts
- Repurposing map: how each piece of social proof flows to paid ads, landing pages, email campaigns, and organic social posts

## Output
Complete social proof flywheel with review sequences (full email copy for all 3 touches), 3 UGC campaign briefs, customer story interview guide, 5 testimonial format templates, rights management language, and repurposing map.`,
    category: 'social-media',
    tags: ['social-proof', 'ugc', 'testimonials', 'reviews', 'conversion-optimization'],
    difficulty: 'intermediate',
    useCase: 'Use when a brand needs to systematically generate and leverage customer content to increase conversion rates.',
    authorUsername: 'builderai',
    likes: 182,
    saves: 125,
    copies: 545,
    views: 3400,
    trendScore: 182*2 + 125*3 + 545 + 3400*0.2,
    trendingScore: 182*2 + 125*3 + 545 + 3400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '13 min',
    outputType: 'System',
    whyTrending: 'UGC consistently outperforms brand-created content in paid social; brands are systematizing its generation rather than hoping it appears organically.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 545,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-25',
  },
  {
    id: 'lib-soc-012',
    title: 'LinkedIn Company Page Growth Strategy',
    slug: 'linkedin-company-page-growth-strategy',
    description: 'B2B LinkedIn strategy for company pages: page optimization, content mix, employee advocacy program, showcase pages, newsletter, document strategy, and paid promotion.',
    content: `You are a B2B LinkedIn strategist who has grown company pages to tens of thousands of followers and generated measurable pipeline from organic content. Build a comprehensive LinkedIn growth strategy for [COMPANY] targeting [BUYER].

## Page Optimization — Full Rewrite
- **Tagline**: 3 variations of a 120-character value proposition written for [BUYER] (ranked by strength)
- **About section**: Complete 2,000-character rewrite — lead with customer outcomes, embed keywords [BUYER] would search, close with a specific CTA
- **Specialties**: 20 keyword-rich specialties (LinkedIn uses these directly for search ranking — treat them like SEO meta tags)
- **Cover image**: Design brief for a banner that communicates the core value to [BUYER] in under 3 seconds of visual scanning
- **CTA button**: Which option to select (Visit Website / Contact Us / Learn More / Register / Sign Up) and the rationale based on [COMPANY]'s primary conversion goal
- **Hashtag following**: 3 niche-relevant hashtags to follow for distribution to follower feeds

## Content Mix Strategy
Optimal content distribution for B2B company page growth:
- 30% thought leadership: industry insights, original data, bold perspectives the industry hasn't articulated yet
- 25% product and service value: case studies, customer outcomes, feature announcements tied to business impact
- 20% company culture: behind-the-scenes, team stories, talent brand content for hiring
- 15% educational: practical frameworks, step-by-step guides, how-tos that solve [BUYER]'s day-to-day problems
- 10% community: customer spotlights, event recaps, partner announcements, milestone celebrations

For each content type: recommended format, optimal post length, and posting frequency.

## Employee Advocacy Program
Employee content generates 8x more organic reach than company page posts. Build a structured program:
- **Opt-in structure**: which employee segments to target first and how to invite them without pressure
- **Weekly content toolkit**: 3 suggested topics per week that employees can personalize and post in their own voice
- **Posting calendar**: suggested sharing schedule by seniority level (executives vs managers vs individual contributors)
- **Internal recognition**: how to celebrate top advocates in team channels and company meetings
- **Participation guidelines**: what to share, how to add personal perspective, what to avoid for legal and brand reasons
- **Social media policy template**: a concise, non-intimidating LinkedIn sharing policy for the employee handbook

## Showcase Pages
- Decision criteria: when to create a showcase page vs a separate company page
- 3 showcase page opportunities for [COMPANY] based on product lines, buyer verticals, or geographic markets
- Cross-promotion strategy between the main page and showcase pages

## LinkedIn Events Strategy
- Event types suited to [COMPANY]: virtual webinar, in-person, LinkedIn Audio event
- Pre-event promotion arc (3-week content sequence building to the event)
- During-event live posting tactics that drive attendance and real-time engagement
- Post-event content repurposing: 5 distinct content pieces derivable from a single event

## LinkedIn Newsletter Strategy
- Topic and angle that [COMPANY] can credibly own in [BUYER]'s inbox
- Issue frequency and structural format
- Subscriber growth tactics: CTA in every post, email list cross-promotion, team member sharing cadence
- B2B lead generation from newsletter content (gated resource integration, soft CTA strategy)

## Document & Carousel Strategy
LinkedIn documents receive the highest organic impressions of any content format. System:
- 5 document content types that work for B2B: methodology frameworks, benchmark reports, curated lists, how-to guides, case study snapshots
- Design principles: slide 1 must function as a compelling thumbnail, 10–15 slides is the optimal range
- Repurposing shortcut: how to convert a blog post into a high-performing document post in 30 minutes

## Paid Promotion — Amplifying Organic Best Performers
- Organic performance threshold that triggers a paid boost decision (engagement rate benchmark)
- LinkedIn Sponsored Content targeting parameters for [BUYER]: job titles, seniority levels, company sizes, industry filters, skills
- Budget allocation guide: dark posts vs promoted organic content vs Lead Gen Form campaigns
- Lead Gen Form strategy: when it beats website traffic objectives

## Follower Growth Tactics
- Invite connections to follow: the 100/month limit — prioritization criteria for who to invite
- Cross-platform promotion: email signature, website footer, other social channels, email newsletter
- Job posting strategy as an organic follower acquisition channel
- Competitive follower benchmarking: what to track and how often

## Output
Complete LinkedIn company strategy with rewritten page sections (copy ready to paste), 4-week content calendar skeleton, employee advocacy program guide, document content strategy, paid promotion targeting setup, and follower growth checklist.`,
    category: 'social-media',
    tags: ['linkedin', 'b2b', 'company-page', 'employee-advocacy', 'demand-generation'],
    difficulty: 'intermediate',
    useCase: 'Use when a B2B company wants to build LinkedIn as a meaningful demand generation and brand awareness channel.',
    authorUsername: 'marketinglab',
    likes: 225,
    saves: 155,
    copies: 650,
    views: 3950,
    trendScore: 225*2 + 155*3 + 650 + 3950*0.2,
    trendingScore: 225*2 + 155*3 + 650 + 3950*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Strategy',
    whyTrending: 'LinkedIn B2B organic reach is outperforming every other platform for enterprise buyers and CMOs are prioritizing company page investment.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 650,
    estimatedTokens: 890,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-12',
  },
  {
    id: 'lib-soc-013',
    title: 'Social Media Crisis Response Playbook',
    slug: 'social-media-crisis-response-playbook',
    description: 'Complete crisis communications playbook: crisis tiers, response SLAs, holding statement templates for 5 scenarios, escalation protocol, and post-crisis recovery plan.',
    content: `You are a crisis communications expert who has guided brands through high-profile social media crises. Build a comprehensive crisis response playbook for [BRAND].

## Crisis Definition & Tiering
Not all negative social media activity is a crisis. Define the full spectrum so teams can respond proportionately:

**Tier 0 — Non-crisis**: Routine negative comments, individual complaints, minor factual corrections
- Response protocol: standard customer service response within business hours
- Escalation trigger: none unless mention volume spikes more than 3x above the 7-day average

**Tier 1 — Issue**: A pattern of negative feedback or a story gaining early traction
- Definition: 50+ mentions/hour, a complaint from a verifiably influential account, or a press inquiry received
- Response SLA: 1 hour for internal triage; 2 hours for the first public response
- Team involved: social media manager + customer service lead

**Tier 2 — Crisis**: Significant reputational threat, product safety concern, or a viral negative narrative
- Definition: trending hashtag, 500+ mentions/hour, pickup in a national publication, or a company executive named personally
- Response SLA: 30 minutes for internal escalation; 1 hour for a public statement
- Team involved: social media director + PR + legal + C-suite notification

**Tier 3 — Emergency**: Existential reputational threat, confirmed legal liability, safety incident, or coordinated attack campaign
- Definition: national broadcast media coverage, government regulatory attention, product recall, or employee misconduct story
- Response SLA: immediate — 15-minute war room assembly
- Team involved: full leadership team, external PR counsel, legal department

## Response Team Structure
Define roles with clear ownership:
- **Crisis Commander** [Role]: owns all external messaging and final approval
- **Internal Communicator** [Role]: owns employee communications
- **Social Monitor** [Role]: tracks volume, sentiment, platform spread in real time
- **Legal Reviewer** [Role]: approves all Tier 2+ public statements before posting
- **Executive Sponsor** [Role]: available 24/7 for Tier 3 decisions

## Holding Statement Templates — 5 Crisis Scenarios
Each template follows the structure: Acknowledge → Empathize → Commit to Action → Provide a Timeline → Do Not Admit Fault Before Verification

For each scenario, provide three versions: a 280-character social post, a 150-word press statement, and a 100-word internal employee communication.

1. **Product defect or safety complaint**: Initial response before an internal investigation is complete
2. **Employee misconduct allegation**: Separates the company from the individual without abandoning due process or appearing to protect wrongdoers
3. **Data breach or privacy incident**: Legally compliant statement with required consumer disclosure language
4. **Offensive or erroneous content posted by error**: Immediate acknowledgment that the content has been removed and an authentic apology
5. **Coordinated misinformation campaign or harassment targeting the brand**: A response that addresses the situation without amplifying the attack or engaging bad-faith actors

## Escalation Protocol — Decision Tree
A step-by-step decision process:
Alert received → Tier assessment using 5-criteria checklist → Response team assembled → Fact-gathering window (defined time limit per tier) → Statement drafted → Legal review → Post and pin → Monitor response volume → Issue update or follow-up statement → Post-crisis review

## Dark Period Guidelines
- Pause all scheduled content immediately upon reaching Tier 2 or above
- Do not publish unrelated brand content during an active crisis — explain why this feels tone-deaf even when well-intentioned
- Internal communication template to notify your content team of the content pause
- Three clearance criteria that must be met before resuming normal posting

## Response DOs and DON'Ts
**Do**: Respond within your stated SLA, own what can be owned, commit to a timeline even when you cannot commit to an answer, use plain human language, remain consistent across all channels
**Don't**: Delete legitimate complaints without first responding, argue with critics in public threads, include legal defenses in social copy, make promises that operations cannot keep, go silent for more than 4 hours during a Tier 2 or 3 crisis

## Post-Crisis Recovery Plan — 30 Days
Phase 1 (Days 1–7): Acknowledgment — transparent update posts showing the investigation or fix in progress
Phase 2 (Days 8–21): Accountability — content demonstrating what has changed
Phase 3 (Days 22–30): Action proof — evidence that systemic changes have been implemented

Recovery metrics to track: sentiment score trend, share of positive vs negative mentions, NPS movement, direct message volume.

## Monitoring Setup
- Keywords, phrases, and hashtag combinations to monitor 24/7 during normal operations and during a crisis
- Alert threshold configuration: what volume triggers an after-hours notification
- Tools setup checklist: Brandwatch, Sprout Social Listening, Google Alerts configurations
- After-hours escalation protocol: who receives the 2 AM notification and through what channel

## Output
Complete crisis playbook with tier definitions and SLAs, response team org chart, 5 holding statement templates in 3 format versions each, escalation decision tree, 30-day post-crisis recovery calendar, and monitoring setup guide.`,
    category: 'social-media',
    tags: ['crisis-communications', 'brand-protection', 'pr', 'reputation-management', 'social-media-management'],
    difficulty: 'advanced',
    useCase: 'Use when building pre-emptive crisis infrastructure before a crisis occurs, or when a crisis is actively unfolding and you need immediate response frameworks.',
    authorUsername: 'promptarchitect',
    likes: 155,
    saves: 112,
    copies: 475,
    views: 2900,
    trendScore: 155*2 + 112*3 + 475 + 2900*0.2,
    trendingScore: 155*2 + 112*3 + 475 + 2900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'One viral crisis can erase years of brand equity; proactive playbook preparation is now standard practice for any brand with a significant social following.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 475,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-28',
  },
  {
    id: 'lib-soc-014',
    title: 'Podcast to Social Content Repurposing System',
    slug: 'podcast-to-social-content-repurposing-system',
    description: 'Turn every podcast episode into a week of multi-platform content: audiograms, threads, LinkedIn posts, Instagram quotes, YouTube Shorts scripts, TikTok hooks, and email excerpts.',
    content: `You are a content operations specialist who helps podcasters multiply their reach by extracting maximum value from every episode. Build a complete repurposing system for [PODCAST].

## The Core Principle
Every podcast episode contains 20–30 standalone content assets. Most creators extract 1–2 and leave the rest in the audio file. This system extracts and distributes 20+ assets across 7 platforms using a single structured production workflow run once per episode.

## Pre-Production: Episode Content Mining
Before repurposing begins, mine the episode transcript for core asset types:
- 5 "quotable moments" — punchy, self-contained insights that work without context
- 3 "story moments" — narrative arcs with a clear beginning, complication, and resolution
- 2 "framework moments" — models, processes, or mental models the guest or host explains step by step
- 1 "hot take moment" — the most controversial or counterintuitive statement in the episode
- 1 "tactical moment" — specific, actionable step-by-step advice a listener can implement today

Mining worksheet: a timestamp log template with columns for moment type, timestamp, verbatim quote, and content potential rating (1–3).

## Platform-Specific Content Extraction

### 5 Audiograms (Instagram, LinkedIn, Twitter/X)
For each audiogram provide:
- Timestamp range (30–90 seconds — the sweet spot for shareability)
- Why this specific clip works without requiring the full episode context
- Caption copy written for each platform's audience expectations
- Visual direction for the waveform card: quote text overlay, typography weight, background color
- Subtitle style recommendation (open vs closed captions, font size for mobile viewing)

### 3 Twitter/X Threads
For each of the 3 threads:
- The central insight or story from the episode being expanded upon
- Thread structure: hook tweet + 8–10 body tweet bullet outline + summary tweet + CTA tweet
- Full hook tweet written out — this is the most important tweet in the thread
- Body tweet concept outline (3–5 words per tweet to guide the writer)
- CTA linking back to the full episode with a value framing (not "listen to the full episode" — make the link earn the click)

### 2 LinkedIn Posts
For each LinkedIn post:
- Format selection: long-form text post vs document carousel (with rationale)
- Which episode insight resonates most with a professional LinkedIn audience and why
- Full caption draft: hook + 3 substantive paragraphs + CTA
- If carousel is selected: slide-by-slide content outline with headline and body text for each

### 5 Instagram Quote Cards
For each quote card:
- Exact quote (verbatim or lightly edited for visual readability — note any edits made)
- Speaker attribution format: name + title + episode number
- Caption: 2–3 sentences that add context + 10 relevant hashtags
- Visual direction: primary color, font weight choice, background texture or pattern

### 1 YouTube Shorts Script (60 seconds)
- Episode moment being adapted (timestamp reference)
- Full 60-second script: hook line (0–3 sec) + content delivery (3–50 sec) + CTA (50–60 sec)
- On-screen text overlay plan: what text appears and when
- Thumbnail still description for the cover frame

### 1 TikTok Video Outline
- Opening 3-second hook: written script + specific visual direction
- Full video structure: hook / build / payoff / CTA
- Audio strategy: use original podcast audio clip vs choose a trending sound — decision framework
- Caption copy with 3–5 niche hashtags

### 3 Email Newsletter Excerpts
For each excerpt:
- The insight being featured
- Excerpt copy (100–150 words) — lightly edited from the transcript for reading-format pacing
- Intro sentence that frames the excerpt for email subscribers who haven't heard the episode
- Link placement guidance and CTA copy for the episode landing page

## Production Workflow
- Total estimated time per episode: broken into individual tasks (transcript editing, content writing, design, scheduling)
- Role assignment matrix: which tasks belong to editor, copywriter, graphic designer, and social media publisher
- Tool stack recommendation: Descript or Otter.ai for transcripts → Canva or Adobe Express for visuals → Buffer or Later for scheduling
- File naming and asset organization system for a growing content archive
- QC checklist: 30-point review before the first piece publishes

## 7-Day Publishing Schedule
How to spread 20 assets across the week to maximize reach without overwhelming any single platform:
- Day 0 (episode launch day): audiogram #1 + LinkedIn post #1 + Twitter thread #1 teaser tweet
- Day 1: TikTok video + Instagram quote card series (cards 1–2)
- Day 2: Full Twitter thread #1
- Day 3: YouTube Short + email excerpt #1
- Day 4: Instagram quote cards 3–5 + audiogram #2
- Day 5: LinkedIn carousel post + Twitter thread #2
- Day 6: Final audiogram + LinkedIn post #2 + email excerpt #2
- Day 7: Twitter thread #3 + email excerpt #3 (recap and drive to next episode)

## Output
Complete repurposing system with episode mining worksheet, content templates and outlines for all 7 platforms (20 assets per episode), production workflow with time estimates, tool stack recommendations, and the 7-day publishing schedule.`,
    category: 'social-media',
    tags: ['podcast', 'content-repurposing', 'content-operations', 'multi-platform', 'audiograms'],
    difficulty: 'intermediate',
    useCase: 'Use when a podcaster or content team wants to systematically maximize the distribution value of every episode across all major social platforms.',
    authorUsername: 'contentpro',
    likes: 205,
    saves: 158,
    copies: 660,
    views: 3900,
    trendScore: 205*2 + 158*3 + 660 + 3900*0.2,
    trendingScore: 205*2 + 158*3 + 660 + 3900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'System',
    whyTrending: 'Podcast production is expensive in time and money; repurposing systems are the highest-ROI investment a show can make to grow its audience without additional recording.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 660,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-16',
  },
  {
    id: 'lib-soc-015',
    title: 'Social Media Analytics Framework',
    slug: 'social-media-analytics-framework',
    description: 'Complete analytics system: KPIs by platform and goal, reporting cadence, competitive tracking, content scoring model, attribution framework, and executive report templates.',
    content: `You are a social media analytics director who helps brands connect platform activity to business outcomes. Build a complete analytics framework for [BRAND] across [PLATFORMS].

## Analytics Philosophy — Measuring What Matters
Most brands measure vanity metrics that feel good but inform no decisions. Establish a measurement hierarchy that ties every metric to a business outcome:
1. **Business metrics**: revenue influenced, pipeline generated, leads acquired, customer acquisition cost
2. **Platform metrics**: reach, engagement rate, share of voice, follower growth rate
3. **Content metrics**: saves, shares, comments, click-through rate, watch time or video completion
4. **Operational metrics**: publishing frequency, response time, content approval cycle time

Rule: any metric that cannot be traced back to a business metric is deprioritized in reporting.

## KPIs by Platform and Goal

### Platform-Specific KPI Sets
For each platform in [PLATFORMS] define:
- **Primary KPI**: the single most important metric for [BRAND]'s goal on this platform
- **Secondary KPIs**: 3–5 supporting metrics that diagnose performance
- **Vanity metrics to deprioritize**: name them specifically so teams stop optimizing for them
- **Industry benchmarks**: engagement rates, CTRs, and follower growth rates by follower tier (<10K, 10K–100K, 100K+)

### Goal-Based KPI Overlays
Overlay the right KPI set depending on the goal:
- **Awareness**: reach per post, impressions, share of voice, new follower growth rate
- **Engagement**: engagement rate, save rate, comment depth (reply thread length), DM response rate
- **Conversion**: link click rate, swipe-up rate, lead form fill rate, revenue attribution
- **Retention**: returning commenter percentage, story completion rate, series open rate

## Reporting Cadence & Structure

### Daily Dashboard (5-minute review)
- Alert-based only: flag anomalies where a metric moves more than 20% above or below the 7-day rolling average
- Reviewed by: social media manager
- Built in: native platform analytics or connected dashboard tool

### Weekly Report (30-minute review)
- Top 3 and bottom 3 performing posts per platform with engagement rate and reach data
- Week-over-week metric movements vs the prior 4-week rolling average
- Audience growth rate and composition change summary
- Anomaly investigation notes

### Monthly Report (2-hour review)
- Full KPI dashboard vs monthly targets for all platforms
- Content format performance analysis: which formats are over or underperforming their expected benchmarks
- Audience insights update: demographic shifts, new interest cluster emergence
- Competitive positioning update
- 3 specific recommended actions for the next month

### Quarterly Executive Summary (30-minute presentation format)
- Lead with business impact metrics — never open with follower counts in an executive setting
- Platform health scorecards: one visual page per platform with traffic-light status (green/yellow/red)
- Top win of the quarter and the insight behind it
- Top challenge and the proposed strategic response
- Channel mix recommendation: should budget or effort allocation change?
- Annual goal progress tracker

## Benchmark Methodology
How to set benchmarks that are realistic and defensible:
1. Your own historical baseline: rolling 90-day average as the primary comparison
2. Industry benchmarks: annual social media benchmark reports (Sprout Social, Hootsuite, Rival IQ — all three cross-referenced)
3. Competitive benchmarks: manually tracked from 5 direct competitor accounts monthly

Setting growth targets: use regression-based projections from historical data rather than arbitrary percentage goals that have no grounding in reality.

## Competitive Tracking System
- 5 metrics to track per competitor account on a monthly basis using only publicly available data
- Data collection process: manual vs tool-assisted, with the tradeoffs of each
- Competitive gap analysis template with action implications
- Share of voice calculation formula: [brand mentions] ÷ [all brand mentions in category] × 100

## Content Scoring Model
A 100-point scoring system applied to every piece of content to build a learning database over time:
- **Reach score** (20 points): impressions relative to current follower count vs platform benchmark
- **Engagement score** (30 points): engagement rate vs platform and pillar benchmarks
- **Action score** (30 points): saves, shares, and clicks relative to reach
- **Business score** (20 points): leads, pipeline, or revenue attributed within a 72-hour attribution window

Use the scoring model to identify patterns in top-performing content (topics, formats, posting times, hook types) and replicate them systematically.

## Attribution Framework
Social media attribution is inherently imprecise. Adopt a multi-signal portfolio approach:
- **UTM parameters**: naming convention (source/medium/campaign/content), implementation checklist, QA audit process
- **View-through attribution windows**: platform-specific recommendations (Meta 1-day click / 1-day view vs TikTok 7-day click)
- **Assisted conversion value**: how to count social touchpoints in a multi-touch attribution model
- **Self-reported attribution**: "how did you hear about us?" survey on checkout or lead form — the most underused attribution signal

## Optimization Triggers — When to Change Strategy
Define the exact conditions that should trigger a strategic change rather than leaving decisions to gut feel:
- **Format pivot**: when a content format underperforms its benchmark for 3 consecutive weeks
- **Posting time adjustment**: when engagement rate declines more than 15% for 2 consecutive weeks at the same posting time
- **Pillar rebalance**: when one content pillar consistently outperforms all others by more than 2x for 4 weeks
- **Platform exit or entry decision**: when a platform's estimated CAC exceeds the blended CAC threshold for 60 consecutive days
- **Budget reallocation trigger**: when paid support on a platform underperforms the target ROAS by more than 20% for a full month

## Executive Report Template — One-Page Format
Structure for a C-suite-facing social media update:
- **Headline metric**: lead with business outcome ("Social drove 340 qualified leads this month, up 22% MoM")
- **Platform health**: traffic light status per platform (green/yellow/red) with one-line rationale
- **Top win**: what worked and why (1 sentence + the data point)
- **Top challenge**: what is not working + the proposed fix (1 sentence each)
- **One decision requested**: make a specific ask of leadership — never just report, always request something

## Output
Complete analytics framework with KPI sets by platform and goal, templates for all 4 reporting cadences, content scoring model with rubric, competitive tracking template, attribution implementation guide, optimization trigger definitions, and one-page executive report template.`,
    category: 'social-media',
    tags: ['analytics', 'kpis', 'reporting', 'social-media-metrics', 'data-driven-marketing'],
    difficulty: 'advanced',
    useCase: 'Use when building or overhauling a social media measurement system that connects platform activity to business outcomes.',
    authorUsername: 'devdna',
    likes: 145,
    saves: 98,
    copies: 430,
    views: 2700,
    trendScore: 145*2 + 98*3 + 430 + 2700*0.2,
    trendingScore: 145*2 + 98*3 + 430 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'CFOs are demanding social ROI proof; analytics frameworks that bridge vanity metrics to real business outcomes are in high demand from every marketing team.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 430,
    estimatedTokens: 910,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-30',
  },
]
