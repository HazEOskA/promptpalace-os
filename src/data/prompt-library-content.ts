import type { Prompt } from './prompts'

export const CONTENT_PROMPTS: Prompt[] = [
  {
    id: 'lib-cnt-001',
    title: 'Long-Form Authority Blog Post Framework',
    slug: 'long-form-authority-blog-post-framework',
    description: 'Creates a complete 3000-5000 word authority blog post framework with SEO structure, expert quote placeholders, FAQ, and first 200 words draft.',
    content: `You are a content strategist and SEO writer who has authored long-form content that ranks in the top 3 positions for competitive keywords. Create a comprehensive framework for a high-ranking authority blog post.

## Inputs
- Topic: [TOPIC]
- Target keyword: [KEYWORD] (primary keyword this post must rank for)

## Article Framework

### H1 — Title (with keyword)
Write 3 title options that:
- Include the target keyword naturally
- Are between 50-60 characters
- Create curiosity or promise a specific outcome
- Are not clickbait

### Introduction (200-250 words)
Structure:
1. **Hook** (1-2 sentences): open with a surprising statistic, counterintuitive claim, or vivid scenario relevant to [TOPIC]
2. **Problem agitation** (2-3 sentences): make the reader feel the pain of not knowing this
3. **Promise** (1-2 sentences): explicitly state what the reader will know or be able to do after reading
4. **Credibility signal** (1 sentence): why this source is worth reading
5. **Table of contents teaser**: list what the article covers

### Body Structure — 5-7 H2 Sections
For each section provide:
- **H2 headline**: includes LSI keywords or related terms naturally
- **H3 subsections** (2-3 per H2): specific angles within the section
- **Word count target**: (total body = 2500-4000 words)
- **Content direction**: what specific information, data, or perspective this section should cover
- **Expert quote placeholder**: describe what kind of expert and what claim they should validate
- **Data/statistic placeholder**: what kind of data would strengthen this section?
- **Internal link opportunity**: what other content on your site could link here?
- **External authoritative source**: suggest what type of source (.edu, .gov, industry report) to cite

### FAQ Section (H2)
Write 5 FAQ questions that:
- Directly address common search queries around [KEYWORD]
- Are phrased the way people actually ask (conversational)
- Each answer is 40-60 words (concise for featured snippet potential)

### Conclusion (150 words)
Structure:
- Key takeaway summary (3 bullet points)
- "What to do next" paragraph (actionable next steps)
- CTA: what should the reader do? (subscribe, download, contact, try)

## Supporting Assets

### Meta Description (155 characters max)
Write 2 variants — one benefit-focused, one curiosity-focused.

### Social Media Teasers (3 variants)
- Twitter/X: 240 characters max, strong hook
- LinkedIn: 3-line post with the key insight + article link
- Newsletter teaser: 50 words, makes the subscriber want to click

### First 200 Words Draft
Write the actual opening of the article using the introduction framework above — not a template, but real prose.

## SEO Checklist
- Keyword in H1: ✓
- Keyword in first 100 words: ✓
- Keyword in at least 2 H2s: ✓
- Target word count confirmed: ✓
- Internal links planned: ✓
- Image alt text directions: describe 3 images and their alt text`,
    category: 'content',
    tags: ['seo', 'blog', 'long-form', 'content-strategy', 'copywriting'],
    difficulty: 'intermediate',
    useCase: 'Use when building topical authority in a niche, targeting competitive keywords, or establishing a thought leadership content engine.',
    authorUsername: 'growthoperator',
    likes: 412,
    saves: 278,
    copies: 1180,
    views: 7200,
    trendScore: 412*2 + 278*3 + 1180 + 7200*0.2,
    trendingScore: 412*2 + 278*3 + 1180 + 7200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Authority content requires a structure most writers skip. This prompt forces every element that makes a post rank and convert.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 1180,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-12',
  },
  {
    id: 'lib-cnt-002',
    title: 'Weekly Email Newsletter Issue Builder',
    slug: 'weekly-email-newsletter-issue-builder',
    description: 'Builds a complete newsletter issue with 5 subject line variants, all sections written, tone-matched to your voice, and ready for sending.',
    content: `You are an email newsletter strategist who has grown and monetized newsletters across B2B, creator, and consumer audiences. Build a complete, ready-to-send newsletter issue.

## Inputs
- Newsletter name: [NEWSLETTER_NAME]
- Audience: [AUDIENCE]
- Theme or topic this week: [THEME_OR_TOPIC_THIS_WEEK]
- 3 news items or links: [NEWS_ITEM_1], [NEWS_ITEM_2], [NEWS_ITEM_3]
- 1 insight or opinion: [INSIGHT_OR_OPINION]
- Tone: [SPECIFIED_VOICE] (e.g., "conversational and warm", "sharp and analytical", "irreverent and direct")

## Newsletter Components

### Subject Lines (5 variants for A/B testing)
Write 5 subject lines using different psychological hooks:
1. **Curiosity gap**: hints at the insight without revealing it
2. **Direct benefit**: plainly states what the reader gets
3. **Question format**: poses the tension the issue resolves
4. **Social proof**: references a number, person, or trend
5. **The "weird" angle**: unexpected or counterintuitive framing
For each: character count, emoji recommendation (yes/no with rationale), A/B test pairing suggestion

### Preview Text (for each subject line)
Each preview text (85-100 characters) should extend — not repeat — the subject line.

### Opening Hook Paragraph (100-150 words)
Start with a scene, question, or statement that immediately justifies opening the email. Do not start with "Hey [Name]" or "Happy [Day]." Make the first sentence do work.

### Section 1 — Main Insight (150-200 words)
Based on [INSIGHT_OR_OPINION]:
- Start with the bold claim or key point
- Support with 2-3 specific pieces of evidence or reasoning
- Connect to why this matters to [AUDIENCE] specifically
- End with a thought-provoking question or implication

### Section 2 — News Roundup (3 items × 50 words each)
For each of the 3 news items:
- **Bolded headline** (under 10 words)
- 1-sentence summary of what happened
- 1-sentence "so what" — why [AUDIENCE] should care
- Source attribution

### Section 3 — Tool or Resource Recommendation (80 words)
- Name and one-line description
- Who it's best for
- The specific use case this week's theme makes relevant
- Link placeholder with CTA text

### Closing Personal Note (50-75 words)
End with a brief, human moment: a reflection, an observation, or something that happened this week that connects to the theme. Not a summary — something new that makes the reader feel they know the author.

### Primary CTA
The single thing you want the reader to do after reading. Write:
- Button/link label (under 6 words)
- One supporting sentence that frames why they should click now

### P.S. Line (1-2 sentences)
The P.S. has the second-highest open rate after the subject line. Use it for:
- A related insight that didn't fit the main flow
- A soft pitch to a product or service
- A teaser for next week's issue`,
    category: 'content',
    tags: ['newsletter', 'email', 'content-marketing', 'audience-building', 'copywriting'],
    difficulty: 'beginner',
    useCase: 'Use every week to reduce newsletter production time from hours to minutes while maintaining quality and voice consistency.',
    authorUsername: 'growthoperator',
    likes: 523,
    saves: 347,
    copies: 1420,
    views: 8600,
    trendScore: 523*2 + 347*3 + 1420 + 8600*0.2,
    trendingScore: 523*2 + 347*3 + 1420 + 8600*0.2,
    trending: true,
    featured: true,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Email',
    whyTrending: 'Newsletter creators report spending 4-6 hours per issue. This prompt cuts that to under 30 minutes without sacrificing the voice that built the audience.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 1420,
    estimatedTokens: 900,
    model: 'gpt-4o',
    createdAt: '2024-10-08',
  },
  {
    id: 'lib-cnt-003',
    title: 'YouTube Long-Form Video Script Creator',
    slug: 'youtube-long-form-video-script-creator',
    description: 'Writes a complete YouTube video script with hook, pacing notes, B-roll callouts, mid-roll CTA, and 3 title options with CTR analysis.',
    content: `You are a YouTube content strategist and scriptwriter who has written for channels that collectively reach millions of subscribers. Write a complete, production-ready video script.

## Inputs
- Duration: [DURATION] minutes
- Topic: [TOPIC]
- Channel audience: [AUDIENCE]

## Script Structure

### Hook (First 30 Seconds — write word-for-word)
The hook determines whether the viewer stays or leaves. Use one of these proven patterns:
- **Pattern interrupt**: start in the middle of action or conflict
- **Bold claim**: state the most surprising or valuable thing in the video
- **Question with stakes**: ask a question that makes the viewer realize they need the answer

Write the hook in full. Include:
- Exact words (no paraphrasing)
- Pacing note: FAST / MEDIUM / SLOW
- Energy cue: HIGH / MEDIUM / CALM
- [B-ROLL: describe the visual on screen]
- Estimated read time: _ seconds at natural pace

### Context Section (First 60 Seconds After Hook)
"Why this matters" — establish urgency and relevance.
- 2-3 sentences explaining why the viewer needs this information now
- Statistic or trend that validates the urgency [B-ROLL: relevant visual]
- Bridge to main content: "So in this video, I'm going to show you..."

### Main Content — 3-5 Sections
For each section:
- **Section title** (for script reference)
- **Transition line** from previous section
- **Full script** (word-for-word, at natural speaking pace)
- **[B-ROLL: description]** callouts every 30-45 seconds
- **Pacing note** per paragraph: FAST / MEDIUM / SLOW
- **Energy cue** per paragraph: HIGH / MEDIUM / CALM
- **Retention hook** at the end of each section: a reason to keep watching ("But here's where it gets interesting...")

### Mid-Roll CTA (at approximately 40% of video duration)
- Subscribe nudge (10-15 seconds): conversational, not desperate
- Related video or playlist mention (5 seconds)
- Pattern to return to main content: bridge line

### Conclusion and End Screen Section
- Summary of key points (30 seconds)
- "What to do next" instruction (the specific action you want them to take)
- End screen instruction: "While that's loading, click here to watch [VIDEO_TITLE] — it covers X that directly connects to what we just discussed"

### Thumbnail Concept
Describe the thumbnail:
- Main visual element
- Text overlay (5 words max, legible at small size)
- Color emotion: what feeling should it trigger?
- Face expression if person is featured

### Title Options (3 variants)
For each title:
- The title text
- Why it drives click-through for this audience
- Keyword(s) it targets for YouTube SEO
- Estimated CTR potential: HIGH / MEDIUM / LOW with rationale`,
    category: 'content',
    tags: ['youtube', 'video-script', 'content-creation', 'social-media'],
    difficulty: 'intermediate',
    useCase: 'Use when producing YouTube content to ensure every section earns the viewer\'s continued attention.',
    authorUsername: 'growthoperator',
    likes: 187,
    saves: 123,
    copies: 510,
    views: 3200,
    trendScore: 187*2 + 123*3 + 510 + 3200*0.2,
    trendingScore: 187*2 + 123*3 + 510 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Script',
    whyTrending: 'YouTube retention is a craft. This prompt builds retention hooks and pacing cues directly into the script so editors and creators know what matters.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 510,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-04',
  },
  {
    id: 'lib-cnt-004',
    title: 'Podcast Guest Interview Outline Builder',
    slug: 'podcast-guest-interview-outline-builder',
    description: 'Builds a complete interview episode blueprint with pre-research questions, 5 section interview guide, clip moments, and show notes structure.',
    content: `You are a podcast producer who has produced hundreds of long-form interview episodes. Create a complete interview episode blueprint for the following guest.

## Inputs
- Guest name: [GUEST_NAME]
- Guest bio summary: [GUEST_BIO_SUMMARY]
- Episode theme: [EPISODE_THEME]

## Episode Blueprint

### Pre-Interview Research Questions (for host preparation)
10 questions to research before the conversation:
- Background questions (career trajectory, defining moments)
- Topic-specific questions (what is the guest's known position on [EPISODE_THEME]?)
- Contrarian questions (what would critics say about the guest's work?)
- Depth questions (what most people don't know about this guest's expertise?)
These are NOT interview questions — they're prep notes to make the host sound informed.

### Opening Intro Script (for host, word-for-word)
60-90 second intro that:
- Opens with a hook about the episode theme (not "today my guest is...")
- Builds anticipation for 2-3 specific things the guest will share
- Introduces the guest with their most impressive or relevant credential
- Ends with the first question naturally

### Interview Structure — 5 Sections with Questions

**Section 1 — Origin Story (10-15 min)**
3 questions that build rapport and establish the guest's journey to this expertise.
Include: 1 main question + 2 follow-up probes per question

**Section 2 — Core Framework or Methodology (15-20 min)**
3 questions that extract the guest's systematic thinking on [EPISODE_THEME].
Goal: get them to teach something actionable, not just opine.

**Section 3 — The Contrarian or Surprising View (10-15 min)**
3 questions that surface the guest's minority opinion or the thing they know that most people get wrong.
Include: a devil's advocate question that challenges their view respectfully.

**Section 4 — Practical Application (10-15 min)**
3 questions connecting the guest's expertise to what listeners can do.
Goal: listener leaves with at least one specific action.

**Section 5 — Future and Legacy (5-10 min)**
3 questions about where the guest sees things going and what they're working on.
Include the closing question: "What's the one thing you want our audience to do or think differently about after this conversation?"

### Transition Phrases Between Segments
Write 4 natural host transitions that move between sections without sounding scripted.

### Outro Script (for host, word-for-word)
60-second outro that:
- Summarizes the 3 biggest takeaways from the episode
- Thanks the guest with a specific compliment about the conversation
- Tells listeners where to find the guest
- CTA to subscribe, rate, or share

### Show Notes Structure
- Episode title (3 options)
- One-paragraph episode description (150 words, SEO-optimized)
- Key timestamps format (list 8 moments)
- Guest links and resources mentioned
- Transcript note

### Social Clip Moments (5 highlight markers)
Identify 5 moments in the interview that will make excellent 60-second social clips:
- Describe the likely clip topic based on the interview structure
- The section and approximate timestamp range
- Why this clip will perform well on [LinkedIn/Instagram/Twitter]`,
    category: 'content',
    tags: ['podcast', 'interview', 'content-creation', 'show-notes', 'media'],
    difficulty: 'intermediate',
    useCase: 'Use before every guest interview episode to ensure structured preparation, a flowing conversation, and maximum content repurposing.',
    authorUsername: 'growthoperator',
    likes: 143,
    saves: 96,
    copies: 390,
    views: 2400,
    trendScore: 143*2 + 96*3 + 390 + 2400*0.2,
    trendingScore: 143*2 + 96*3 + 390 + 2400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Outline',
    whyTrending: 'Interview quality is preparation quality. This prompt ensures hosts arrive with structured depth, not just a list of questions.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 390,
    estimatedTokens: 870,
    model: 'gpt-4o',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-cnt-005',
    title: 'Results-Driven Case Study Builder',
    slug: 'results-driven-case-study-builder',
    description: 'Creates a compelling B2B case study with outcome-first headline, results-forward narrative, and variants for sales email and social pull quotes.',
    content: `You are a case study writer specializing in B2B content marketing. You understand that case studies fail when they read like vendor brochures and succeed when they read like honest problem-solving stories.

## Inputs
- Client name: [CLIENT_NAME]
- Product or service used: [PRODUCT_OR_SERVICE]
- Challenge: [CHALLENGE]
- Solution implemented: [SOLUTION_IMPLEMENTED]
- Results with metrics: [RESULTS_WITH_METRICS]

## Case Study Structure

### Headline (outcome-first format)
Write 3 headline options:
1. Metric-led: "[Client] [Achieved X Result] in [Timeframe] with [Product]"
2. Problem-solution: "How [Client] Solved [Problem] and [Achieved Outcome]"
3. Story-first: "[Insight about the challenge] — [Client]'s Story"

### Executive Summary (150 words)
A standalone summary that busy executives can read in 60 seconds. Must include:
- Who the client is (1 sentence, not a sales pitch)
- What the business problem was
- What was implemented
- The quantified result
- One direct quote from the customer

### Customer Background (100 words)
Make the reader identify with the customer:
- Company type, size, industry
- What makes their situation typical of the target buyer (relatable context)
- What they were doing before (the "before" state)

### Challenge Section (150-200 words)
The goal is to make the reader say "we have that exact problem."
- Describe the problem in the customer's language, not the vendor's
- Include the business consequences of the problem (not just the inconvenience)
- If possible, include a quote or attributed perspective from the customer
- End with the decision point: why they decided to do something about it now

### Solution Narrative (200-250 words)
Not a product feature walkthrough — a story of implementation:
- How the decision to use [PRODUCT_OR_SERVICE] was made
- What the implementation process looked like (human moments, not just steps)
- Who was involved and what their experience was
- What changed in how the team worked

### Results Section (150 words)
Let the metrics be the hero:
- Lead with the biggest, most impressive metric
- Provide 3-5 supporting metrics
- Add context for each metric (e.g., "This represented a 3x improvement over their previous baseline")
- Include a customer quote that validates the results emotionally, not just numerically

### What We Learned Section (100 words)
The insight that makes this case study useful beyond the sale:
- What did this implementation reveal about the problem space?
- What would the customer recommend to others in their situation?
- What would they do differently?

### CTA (50 words)
Contextual CTA: "If [READER_SITUATION] sounds familiar, [NEXT_STEP]."

## Supporting Formats

### Social Media Pull Quotes (5)
Short, standalone quotes from the case study suitable for LinkedIn cards or Twitter. Each under 140 characters.

### Sales Email Version (200 words)
A condensed version suitable for a cold or warm sales outreach email. Outcome in subject line, story in body, CTA at close.`,
    category: 'content',
    tags: ['case-study', 'b2b', 'content-marketing', 'copywriting', 'social-proof'],
    difficulty: 'intermediate',
    useCase: 'Use when turning a customer success story into a sales asset, content marketing piece, or conference talk.',
    authorUsername: 'osa',
    likes: 168,
    saves: 112,
    copies: 460,
    views: 2900,
    trendScore: 168*2 + 112*3 + 460 + 2900*0.2,
    trendingScore: 168*2 + 112*3 + 460 + 2900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Most case studies are too product-focused to be convincing. This prompt forces a customer-first narrative with real metrics front and center.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 460,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-25',
  },
  {
    id: 'lib-cnt-006',
    title: 'LinkedIn Long-Form Thought Leadership Article',
    slug: 'linkedin-long-form-thought-leadership-article',
    description: 'Writes a 1500-2000 word LinkedIn article with personal story hook, core argument, counterargument, and LinkedIn-specific formatting notes.',
    content: `You are a LinkedIn content strategist specializing in executive thought leadership. You know what makes LinkedIn articles generate meaningful engagement versus what gets silently ignored.

## Inputs
- Topic: [TOPIC]
- Author role: [AUTHOR_ROLE]
- Company type: [COMPANY_TYPE]
- Core argument: [CORE_ARGUMENT] (the main thing you want readers to believe after reading)
- Personal experience hook: [PERSONAL_EXPERIENCE_HOOK] (a specific experience that relates to this topic)

## Article Structure (1500-2000 words total)

### Attention-Grabbing First Sentence
Write 3 options for the opening sentence:
1. A counterintuitive claim that contradicts common wisdom
2. A specific data point or trend that reframes the topic
3. A brief moment from the personal experience hook

The first sentence will appear as preview text in the LinkedIn feed. It must work standalone.

### Personal Story Hook (150 words)
Open with [PERSONAL_EXPERIENCE_HOOK] told as a specific, grounded scene — not a lesson, just what happened. Use concrete details: location, time, who was there, what was said. The lesson comes later.
LinkedIn formatting note: short paragraphs (1-3 sentences max). No walls of text.

### Industry Context and Problem (200 words)
- What is the broader industry pattern this story reflects?
- Why is this problem getting worse or more important now?
- What does the conventional wisdom say (that you're about to challenge)?
LinkedIn formatting note: use a bold pull quote or key stat as a standalone line to break up the text.

### 3 Main Insights with Supporting Examples (800 words — ~267 words per insight)
For each insight:
- **Bold the insight** as a standalone line (this is what gets screenshot and shared)
- Explain the insight with 1-2 supporting examples (one from personal experience, one from industry)
- Make the practical implication explicit: "This means that..."
- End each insight with a transition to the next

### Counterargument Acknowledgment (150 words)
Address the most obvious objection to your core argument:
- "I know what some of you are thinking..."
- State the counterargument fairly (don't strawman it)
- Acknowledge what's true in it
- Explain why your position still holds

### Call to Action and Invitation to Comment (100 words)
- Summarize the core argument in 2 sentences
- Tell readers the one thing you want them to do or think differently about
- End with an open-ended question that invites comments (the question should be one that your audience has a genuine opinion about)

## LinkedIn Formatting Notes
- Use line breaks after every 2-3 sentences
- Use bullet points for lists of 3+ items
- Bold the most important sentence in each section
- Emojis: 0-2 max, only if they match the author's established voice
- No block quotes — LinkedIn doesn't render them well
- Internal links: mention related content naturally, don't just dump links

## Supporting Elements
- Article title (3 options, under 70 characters, keyword-aware)
- First comment draft (the author's pinned comment with the CTA and any links)`,
    category: 'content',
    tags: ['linkedin', 'thought-leadership', 'personal-brand', 'b2b', 'copywriting'],
    difficulty: 'intermediate',
    useCase: 'Use when executives or founders want to build a LinkedIn presence with substantive, opinion-led content that generates meaningful conversation.',
    authorUsername: 'osa',
    likes: 194,
    saves: 131,
    copies: 520,
    views: 3100,
    trendScore: 194*2 + 131*3 + 520 + 3100*0.2,
    trendingScore: 194*2 + 131*3 + 520 + 3100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Article',
    whyTrending: 'LinkedIn thought leadership is a high-leverage channel for founders and executives. This prompt handles the hardest part — making it actually say something worth reading.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 520,
    estimatedTokens: 920,
    model: 'gpt-4o',
    createdAt: '2024-12-05',
  },
  {
    id: 'lib-cnt-007',
    title: 'Product Documentation Structure Generator',
    slug: 'product-documentation-structure-generator',
    description: 'Creates a complete documentation site architecture with getting started guide, concept explanations, API reference structure, and writing style guidelines.',
    content: `You are a technical writer who has built documentation systems for developer tools, SaaS products, and APIs. Create a complete, scalable documentation structure for the specified product.

## Inputs
- Product or feature: [PRODUCT_OR_FEATURE]
- Product type: [PRODUCT_TYPE] (e.g., "CLI tool", "REST API", "SaaS web app", "SDK")
- User technical level: [USER_TECHNICAL_LEVEL] (beginner / intermediate / advanced developer)
- Core workflows: [CORE_WORKFLOWS] (the 3-5 main things users do with this product)

## Documentation Architecture

### Site Architecture (Category → Page Hierarchy)
Organize into 4-6 top-level categories:
- **Get Started**: installation, quickstart, first success
- **Core Concepts**: mental models and foundational knowledge
- **How-to Guides**: task-oriented instructions
- **Reference**: complete API/CLI/configuration reference
- **Tutorials**: end-to-end project guides
- **Troubleshooting**: common issues and resolutions

For each category: list 4-8 specific page titles.

### Getting Started Guide Outline
The most important page in any documentation. Structure:
1. **Prerequisites** (what the user needs before starting)
2. **Installation** (exact commands, OS variations)
3. **First success** (the simplest thing that works — 5 minutes to "it works!")
4. **What just happened** (brief explanation of what they built)
5. **Next steps** (2-3 paths based on what they want to do)

### Core Concepts (for each key concept)
Template for each concept page:
- **Definition**: one sentence, jargon-free
- **Why it matters**: the problem it solves or the capability it enables
- **How it works**: the mental model (analogy-first, then precise)
- **Usage example**: minimal working code or configuration
- **Common misconceptions**: 2-3 things users get wrong
- **Related concepts**: links to connected pages

Provide outlines for each of the [CORE_WORKFLOWS] as concept pages.

### API Reference Structure (if applicable)
- Authentication section: how to authenticate every request
- Resource/endpoint format: method, path, description, parameters table, request body, response, error codes, example
- Pagination section
- Rate limiting section
- Error codes reference table
- SDK code example alongside each endpoint (language: match [USER_TECHNICAL_LEVEL])

### Troubleshooting Guide Format
For each common issue:
- **Error message or symptom** (exact text users see)
- **Cause**: why this happens
- **Fix**: step-by-step resolution
- **Prevention**: how to avoid this next time

### Writing Style Guidelines (specific to this product)
Based on the product type and user technical level, define:
- Voice: formal / conversational / direct (with 2 example sentences)
- Second-person ("you") vs. imperative mood ("Run the command") — which to use and when
- Code block conventions: inline \`code\` vs. block, comment density, real vs. placeholder values
- Warning and note callout usage: when to use which
- Sentence length target
- Jargon rules: which product-specific terms are acceptable and which need definition on first use

### Template for Each Doc Type
Provide a fill-in-the-blank template for:
- How-to guide
- Concept explanation
- Troubleshooting entry

### Good vs. Bad Documentation Writing (2 examples)
Show one example of a well-written paragraph for this product and one poorly written paragraph covering the same content. Explain specifically what makes the good one effective.`,
    category: 'content',
    tags: ['documentation', 'technical-writing', 'developer-experience', 'knowledge-base'],
    difficulty: 'intermediate',
    useCase: 'Use when launching a new developer tool, rebuilding scattered docs, or establishing documentation standards for a growing team.',
    authorUsername: 'growthoperator',
    likes: 129,
    saves: 86,
    copies: 340,
    views: 2100,
    trendScore: 129*2 + 86*3 + 340 + 2100*0.2,
    trendingScore: 129*2 + 86*3 + 340 + 2100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Architecture',
    whyTrending: 'Good documentation directly reduces churn and support costs. This prompt gives teams a structure that scales from v1 docs to enterprise knowledge bases.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 340,
    estimatedTokens: 920,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-15',
  },
  {
    id: 'lib-cnt-008',
    title: 'Content Repurposing Engine',
    slug: 'content-repurposing-engine',
    description: 'Transforms one piece of original content into 8 platform-specific formats with platform-native formatting, posting time, and engagement hooks for each.',
    content: `You are a content strategist who specializes in content operations and distribution efficiency. Take one piece of original content and extract maximum value by repurposing it across every major platform.

## Input
- Original content type: [ORIGINAL_CONTENT_TYPE] (e.g., "45-minute podcast episode", "2000-word blog post", "60-minute webinar")
- Content summary or transcript excerpt: [CONTENT_SUMMARY_OR_TRANSCRIPT_EXCERPT]

## Repurposing Outputs

For each format below, produce fully written content — not outlines, but the actual words.

### 1. Twitter/X Thread (10 tweets)
- Tweet 1: hook that works standalone (the reason to read the thread)
- Tweets 2-9: one insight or data point per tweet, building logically
- Tweet 10: summary + CTA (follow, link to original, question for replies)
Platform note: max 280 characters per tweet, threads perform best between 6-10 tweets. Number each tweet (1/10).
Best posting time: [recommend based on content topic]
Engagement hook: what question should end the thread?

### 2. LinkedIn Post (3 variants)
**Variant A — Personal Story angle**: open with "I [did/learned/realized] something that changed how I think about [TOPIC]..." Format with line breaks every 2-3 sentences. 150-250 words.
**Variant B — Data Insight angle**: lead with the most surprising statistic or finding from the original content. 150-200 words.
**Variant C — Hot Take angle**: state a minority opinion from the content provocatively. 100-150 words.
For each: best posting time, first-comment content (links and CTA), engagement prompt question.

### 3. Instagram Carousel Outline (10 slides)
- Slide 1: cover — hook text + visual direction
- Slides 2-9: one insight per slide — headline + 1-2 supporting sentences + visual direction
- Slide 10: CTA slide — what you want followers to do
Caption: 150 words max + 5 targeted hashtags (explain why each)
Story version: how to break this carousel into 3 Stories

### 4. YouTube Shorts Script (60 seconds — ~150 words)
- Hook (0-5 sec): pattern interrupt — the most counterintuitive thing from the original content
- Value delivery (5-50 sec): the core insight, one example, one application
- CTA (50-60 sec): tell them what video to watch next
Include: [VISUAL: description] callouts every 10 seconds. B-roll direction. On-screen text suggestions.

### 5. Email Newsletter Section (150 words)
- Section headline: frames the insight for the newsletter audience
- Body: the key takeaway in newsletter voice (informal, personal)
- "Read more" teaser: why clicking through to the full content is worth it
- Link CTA text (under 5 words)

### 6. Quote Graphics (5 pull quotes)
Select 5 quotes from the content (real or reconstructed from the summary) that:
- Work without context
- Are under 140 characters
- Make the reader want to share them
For each: quote text + speaker attribution + recommended background color/mood

### 7. Blog Post Angle
A different angle on the same content that could rank for a new keyword:
- New title and keyword target
- How the same information is reframed for a different audience or intent
- 5-point outline of the new post
- What new context or examples should be added

### 8. Reddit Post Framing
- Subreddit recommendation (3 options with rationale)
- Post title (question or statement format that Reddit culture rewards)
- Post body: 200-300 words, Reddit-native voice (self-deprecating, educational, not promotional)
- What NOT to do in this subreddit (community-specific pitfalls)`,
    category: 'content',
    tags: ['repurposing', 'content-distribution', 'social-media', 'content-operations'],
    difficulty: 'beginner',
    useCase: 'Use after publishing any long-form content asset to maximize distribution without creating everything from scratch.',
    authorUsername: 'growthoperator',
    likes: 486,
    saves: 322,
    copies: 1360,
    views: 8200,
    trendScore: 486*2 + 322*3 + 1360 + 8200*0.2,
    trendingScore: 486*2 + 322*3 + 1360 + 8200*0.2,
    trending: true,
    featured: true,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Multi-Format',
    whyTrending: 'Most creators publish once and move on. This prompt turns one piece of content into a week of platform-native posts, each optimized for its channel.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 1360,
    estimatedTokens: 1050,
    model: 'gpt-4o',
    createdAt: '2024-10-20',
  },
  {
    id: 'lib-cnt-009',
    title: '90-Second Explainer Video Script',
    slug: '90-second-explainer-video-script',
    description: 'Writes a production-ready 90-second explainer script with word-for-word VO, visual direction per line, animation style notes, and timing marks.',
    content: `You are a video scriptwriter specializing in product explainers. You know that 90 seconds is unforgiving — every word must justify its presence. Write a production-ready explainer video script.

## Inputs
- Product: [PRODUCT]
- Core problem: [CORE_PROBLEM]
- Solution: [SOLUTION]
- Target audience: [TARGET_AUDIENCE]
- Key differentiator: [KEY_DIFFERENTIATOR] (the one thing that makes this different from alternatives)

## Script Framework: Problem → Agitation → Solution → CTA

### Script Rules
- Reading pace: 130 words per minute (for natural VO)
- 90 seconds = ~195 words maximum (leave 10% for pauses)
- No jargon the target audience wouldn't immediately understand
- No passive voice
- No vague benefit claims (never "easier", "faster", "better" without specifics)
- Every claim must be visual (if you can't show it, cut it)

### Script Structure with Timing

**[0:00 - 0:10] — Hook**
Open with the problem in the user's words. Make the audience feel seen.
Voice-over text:
[VISUAL: describe exact on-screen visual]
Emotion/energy: empathetic, relatable

**[0:10 - 0:25] — Problem Agitation**
Make the problem feel real by describing the current broken workflow or pain.
Voice-over text:
[VISUAL: show the painful "before" state]
[VISUAL: transition to consequence]

**[0:25 - 0:50] — Solution Introduction**
Introduce [PRODUCT] as the answer. Show — don't tell. Product in context.
Voice-over text:
[VISUAL: product entering the scene, solving the problem]
[VISUAL: close-up of key feature or interaction]

**[0:50 - 1:15] — Key Features (2-3 max)**
Each feature gets one sentence of VO and one visual beat. Focus on outcomes, not mechanics.
Feature 1: [outcome sentence]
[VISUAL: demonstration]
Feature 2: [outcome sentence]
[VISUAL: demonstration]
Feature 3 (optional, only if time allows):
[VISUAL: demonstration]

**[1:15 - 1:30] — Call to Action**
Tell the viewer exactly what to do. One action only.
Voice-over text:
[VISUAL: end card with product name, CTA button, URL]

### Production Notes

**Animation Style Note**
Recommend an animation style that fits this product and audience:
(e.g., "2D motion graphics with product UI screenshots", "character animation", "screencast with annotation overlays")
Justify why this style serves the content.

**Music Mood Suggestion**
Describe the sonic mood: tempo, energy level, instrumentation direction (no specific track names — descriptive guidance for a music supervisor).

**Thumbnail / End Card Copy**
- End card headline: (5 words max)
- End card CTA button: (3 words max)
- End card URL or app store badge direction

### Quality Checklist
Before submitting this script for production:
- [ ] Total word count ≤ 195 words
- [ ] No passive voice
- [ ] No jargon
- [ ] Every visual direction is achievable (not abstract)
- [ ] One CTA only
- [ ] Key differentiator mentioned`,
    category: 'content',
    tags: ['video', 'explainer', 'script', 'marketing', 'product-marketing'],
    difficulty: 'beginner',
    useCase: 'Use when creating a homepage explainer, product launch video, or investor demo video for a product.',
    authorUsername: 'growthoperator',
    likes: 82,
    saves: 55,
    copies: 210,
    views: 1300,
    trendScore: 82*2 + 55*3 + 210 + 1300*0.2,
    trendingScore: 82*2 + 55*3 + 210 + 1300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Script',
    whyTrending: 'Explainer videos are high-cost to produce but often written without a proper script. This prompt gives production teams something they can actually shoot from.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'growthoperator',
    uses: 210,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-28',
  },
  {
    id: 'lib-cnt-010',
    title: 'White Paper Executive Summary Writer',
    slug: 'white-paper-executive-summary-writer',
    description: 'Creates the executive summary and key sections of a white paper including data-backed findings, strategic recommendations, and a one-page print version.',
    content: `You are a technical writer and business strategist. Create the executive summary and major sections of a white paper suitable for C-suite and senior decision-makers.

## Inputs
- Topic: [TOPIC]
- Industry: [INDUSTRY]
- Core thesis: [CORE_THESIS] (the central argument or finding the white paper advances)
- Key data points: [KEY_DATA_POINTS]
- Recommendations: [RECOMMENDATIONS]

## White Paper Sections

### Executive Summary (500 words — standalone and compelling)
The executive summary must work as a standalone document. Structure:
- **Opening statement** (2 sentences): the most important insight — what decision-makers need to know
- **Context and stakes** (100 words): why this topic matters now, what is at risk if ignored
- **Key findings** (3 bullet points): each with a specific data point or evidence
- **Strategic implications** (100 words): what these findings mean for organizations in [INDUSTRY]
- **Recommendations** (3 bullet points): prioritized, actionable, specific
- **Closing** (50 words): the decision this white paper equips readers to make

### Introduction — Why This Matters Now (300 words)
- The trend, disruption, or problem driving interest in this topic
- What is changing and why the timing is critical
- Who this white paper is written for and what they will gain
- Overview of methodology or research approach (if data-backed)

### Key Finding 1 (300-400 words)
- Finding statement (bolded): specific, quantified where possible
- Evidence and supporting data
- What this finding challenges about conventional wisdom
- Data visualization suggestion: describe the chart type and what it would show
- Case example or scenario illustrating the finding in practice

### Key Finding 2 (300-400 words)
Same structure as Finding 1, covering a distinct aspect of [CORE_THESIS].

### Key Finding 3 (300-400 words)
Same structure, covering the third dimension or implication.

### Strategic Recommendations (400 words)
For each recommendation (prioritized from highest to lowest urgency):
- **Recommendation statement**: imperative sentence (e.g., "Invest in X before Y")
- **Rationale**: why this is the right move given the findings
- **Implementation first step**: the specific thing an organization should do in the next 30 days
- **Success metric**: how will you know this recommendation is working?

### Conclusion — The Decision (150 words)
- Restate the core thesis in light of all the evidence
- The "therefore" — what organizations should do
- Forward-looking closing statement that positions the reader as an early mover

## Supporting Formats

### About Section Template
Boilerplate describing the authoring organization (fill-in format with placeholder brackets).

### One-Page Summary (for PDF and print)
Compress the entire white paper into a single page:
- Title
- 3-sentence executive summary
- 3 findings as bold bullet points with one supporting sentence each
- 3 recommendations as numbered list
- One compelling statistic as pull quote
- Author/organization + date`,
    category: 'content',
    tags: ['white-paper', 'thought-leadership', 'b2b', 'research', 'technical-writing'],
    difficulty: 'advanced',
    useCase: 'Use when creating gated content for lead generation, establishing industry authority, or supporting a complex sales process with research-backed collateral.',
    authorUsername: 'growthoperator',
    likes: 156,
    saves: 104,
    copies: 420,
    views: 2700,
    trendScore: 156*2 + 104*3 + 420 + 2700*0.2,
    trendingScore: 156*2 + 104*3 + 420 + 2700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'White papers are high-stakes documents. This prompt gives writers a rigorous structure that reads as authoritative as it needs to be.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 420,
    estimatedTokens: 950,
    model: 'gpt-4o',
    createdAt: '2024-12-08',
  },
  {
    id: 'lib-cnt-011',
    title: 'PR Press Release Generator',
    slug: 'pr-press-release-generator',
    description: 'Writes an AP Style press release with executive and partner quotes plus a journalist pitch email and 3 social announcement posts.',
    content: `You are a PR specialist with experience writing press releases that get picked up by TechCrunch, VentureBeat, and trade press. Write a press release that journalists will actually want to cover.

## Inputs
- Announcement type: [ANNOUNCEMENT_TYPE] (product launch / Series A funding / strategic partnership / company milestone)
- Company name: [COMPANY_NAME]
- Announcement details: [ANNOUNCEMENT_DETAILS]
- Quote from executive: [QUOTE_FROM_EXECUTIVE]
- Quote from partner or customer: [QUOTE_FROM_PARTNER_OR_CUSTOMER]

## Press Release (AP Style)

### Headline (under 110 characters)
Write 3 headline options:
1. Newsy and direct (what happened, why it matters)
2. Impact-first (the outcome or scale)
3. Human angle (who it affects)

### Subheadline (optional, under 180 characters)
The second layer of context that fills in what the headline teased.

### Dateline
FORMAT: CITY, STATE, Month Day, Year —

### Opening Paragraph (50 words — who/what/where/when/why)
The first paragraph must answer all five Ws. Journalists read this and decide if the story is worth covering. No fluff, no adjectives like "leading" or "pioneering."

### Body Paragraphs (inverted pyramid — most important to least)
**Paragraph 2** (75 words): Context — why this announcement matters in the broader market
**Paragraph 3** (60 words): Executive quote — use [QUOTE_FROM_EXECUTIVE], integrate naturally
**Paragraph 4** (75 words): Details — additional specifics about the announcement (features, terms, timeline)
**Paragraph 5** (60 words): Partner/customer quote — use [QUOTE_FROM_PARTNER_OR_CUSTOMER], integrate naturally
**Paragraph 6** (50 words): Availability, pricing, or next steps (the practical details)

### Boilerplate — About [COMPANY_NAME] (75 words)
One paragraph description of the company: what it does, who it serves, founded when/where, key traction metrics.

### Media Contact
Format: Name, Title, Email, Phone, Website

## Supporting Formats

### Journalist Email Pitch (150 words)
Subject line options (3): short, curious, specific
Email body:
- Opening: why this journalist specifically should care (reference their beat or a recent story they covered)
- The news in 2 sentences
- Why their readers care
- The exclusive or angle you're offering
- Simple CTA (are you available for a call Tuesday?)

### Social Media Posts for Announcement Day

**LinkedIn** (150 words): professional tone, company milestone framing, link to full announcement
**Twitter/X** (240 characters): punchy news hook + link
**Founder personal post** (100 words): behind-the-scenes human angle, why this moment matters`,
    category: 'content',
    tags: ['pr', 'press-release', 'media', 'communications', 'announcement'],
    difficulty: 'intermediate',
    useCase: 'Use for any company announcement — launch, funding, partnership — to ensure media-ready format and a journalist pitch that stands out.',
    authorUsername: 'growthoperator',
    likes: 138,
    saves: 92,
    copies: 360,
    views: 2300,
    trendScore: 138*2 + 92*3 + 360 + 2300*0.2,
    trendingScore: 138*2 + 92*3 + 360 + 2300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Most press releases are written like marketing copy and ignored by journalists. This prompt produces media-first content that follows AP Style and tells a real story.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 360,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-20',
  },
  {
    id: 'lib-cnt-012',
    title: 'Online Course Curriculum Builder',
    slug: 'online-course-curriculum-builder',
    description: 'Builds a complete course curriculum with learning outcomes, module structure, per-lesson plans, assessment strategy, and sales page bullet points.',
    content: `You are an instructional designer with experience building online courses that achieve high completion rates and measurable skill outcomes. Design a complete curriculum.

## Inputs
- Topic: [TOPIC]
- Target student: [TARGET_STUDENT]
- Skill level: [SKILL_LEVEL] (beginner / intermediate / advanced)
- Course goal: [COURSE_GOAL] (what should students be able to do after completing this course?)
- Available hours: [AVAILABLE_HOURS] (total learning time, e.g., "10 hours", "4 weeks at 2 hours/week")

## Curriculum Design

### Course Title Options (3)
Each title should:
- Include the transformation or outcome (not just the topic)
- Appeal to [TARGET_STUDENT] specifically
- Be concrete and specific (avoid vague titles like "Mastering X")

### Hook and Course Description (100 words)
Describe the course as you would on the sales page: who it's for, what pain it solves, and what transformation it delivers. Written in second person ("you will...").

### Learning Outcomes (5-7 SMART outcomes)
Each outcome must be:
- **Specific**: describes a concrete skill or behavior
- **Measurable**: can be observed and assessed
- **Achievable**: realistic in the available time
- **Relevant**: directly connected to [COURSE_GOAL]
- **Time-bound**: achievable by end of course
Format: "By the end of this course, students will be able to [ACTION VERB] [SPECIFIC SKILL/KNOWLEDGE]."

### Module Structure (5-8 modules)
For each module:
- Module number and title
- Module goal (1 sentence): what students know or can do after this module
- Rationale: why this module belongs in this sequence
- Time allocation: total time for this module

### Lesson Plan (per module — 3-5 lessons each)
For each lesson:
- **Lesson title**
- **Format**: video lecture / screencast / reading / workshop / Q&A / exercise
- **Duration**: minutes
- **Key takeaway**: the one thing students must leave with
- **Assignment or exercise**: the practice task that cements the lesson (describe in 2 sentences)

### Assessment Strategy
- Formative assessments: quizzes or exercises embedded throughout (frequency and format)
- Final project or capstone: description of the summative assessment that proves course completion
- Grading or completion criteria: what constitutes passing?
- Feedback mechanism: how do students get feedback on their work?

### Resource List Per Module
For each module, suggest:
- 1 book or long-form resource
- 1 tool or software to practice with
- 1 community or place to apply the learning

## Sales Assets

### Sales Page Bullet Points (7)
Each bullet: "You'll learn how to [specific skill] so that [specific outcome]."

### FAQ (5 questions)
The 5 questions prospective students ask most before buying, with honest answers.`,
    category: 'content',
    tags: ['course', 'curriculum', 'e-learning', 'education', 'instructional-design'],
    difficulty: 'intermediate',
    useCase: 'Use when building a course from scratch, restructuring an existing course, or auditing whether a curriculum achieves its learning outcomes.',
    authorUsername: 'osa',
    likes: 148,
    saves: 98,
    copies: 410,
    views: 2500,
    trendScore: 148*2 + 98*3 + 410 + 2500*0.2,
    trendingScore: 148*2 + 98*3 + 410 + 2500*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Curriculum',
    whyTrending: 'Course creation without instructional design produces low completion rates. This prompt applies SMART outcomes and proper sequencing to every course.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 410,
    estimatedTokens: 940,
    model: 'gpt-4o',
    createdAt: '2024-12-12',
  },
  {
    id: 'lib-cnt-013',
    title: 'Email Subscriber Welcome Sequence',
    slug: 'email-subscriber-welcome-sequence',
    description: 'Creates a 5-email welcome sequence over 10 days with subject lines, preview text, and full email body for each email in the sequence.',
    content: `You are an email marketing specialist who builds welcome sequences that turn new subscribers into engaged, paying customers. Create a 5-email welcome sequence optimized for relationship-building and conversion.

## Inputs
- Newsletter or product: [NEWSLETTER_OR_PRODUCT]
- What they signed up for: [WHAT_THEY_SIGNED_UP_FOR] (the lead magnet, free trial, or promise that got them on the list)
- Audience profile: [AUDIENCE_PROFILE] (who this person is, their primary problem, what they ultimately want)

## Email Sequence

### Email 1 — Immediate (sent within 5 minutes of signup)
**Purpose**: Deliver the lead magnet and set list expectations.
- Subject line: direct and specific (references exactly what they signed up for)
- Preview text: extends the subject, doesn't repeat it
- Email body (200-300 words):
  - Deliver what was promised (link, download, or access instructions)
  - Briefly introduce yourself (1-2 sentences — who you are and why you're the right person)
  - Set expectations: what will they receive from this list? How often? What kind of content?
  - First CTA: reply to this email with their answer to a specific question (drives engagement signal + response)
- P.S.: something personal or unexpected that establishes voice

### Email 2 — Day 2
**Purpose**: Personal story — why you started this, what you believe.
- Subject line: story hook (curiosity-driven)
- Preview text: deepens the mystery
- Email body (250-300 words):
  - The story of why you created this newsletter/product
  - The specific moment, failure, or realization that drove you
  - What you believe about [TOPIC] that most people get wrong
  - Connection: how this belief directly serves [AUDIENCE_PROFILE]
- CTA: soft — invite them to share their version of this struggle (reply or link to a specific post)

### Email 3 — Day 4
**Purpose**: Your best existing content — prove immediate value.
- Subject line: "3 things that changed how I think about [TOPIC]" (or variant)
- Preview text: tease the most surprising item
- Email body (250-300 words):
  - Brief framing: "Before we go deeper, I want to make sure you've seen these..."
  - 3 links with context (50-70 words each): what it is, why it's worth reading/watching, what to look for
  - Each link chosen to advance the subscriber toward the eventual CTA in email 5
- CTA: which of these resonates most? (drives segmentation insight via reply or click tracking)

### Email 4 — Day 7
**Purpose**: Your core framework — the thing only you teach.
- Subject line: introduces a named concept or framework
- Preview text: hints at the framework's power
- Email body (300-350 words):
  - Name the framework and explain why it's different from what they've heard before
  - Walk through it with a concrete example relevant to [AUDIENCE_PROFILE]
  - 1-2 actionable steps they can take today based on the framework
  - Tease that this is what the next step (email 5) is about
- CTA: bookmark this email — it's the foundation for what comes next

### Email 5 — Day 10
**Purpose**: Soft pitch or invitation to the next step.
- Subject line: benefit-forward, specific to the offer
- Preview text: social proof or outcome-focused
- Email body (250-300 words):
  - Acknowledge the journey: "You've been on the list for a week..."
  - Bridge from framework (email 4) to the deeper solution
  - Introduce the product, community, or next step (soft pitch — frame as an invitation, not a sale)
  - 3 bullets: specific outcomes this next step delivers
  - 1-2 testimonials or results (brief, specific)
  - CTA: the link to the offer or next step with urgency framing (if applicable)
  - P.S.: address the most common objection`,
    category: 'content',
    tags: ['email-marketing', 'welcome-sequence', 'automation', 'nurture', 'copywriting'],
    difficulty: 'intermediate',
    useCase: 'Use when launching a newsletter, creating a new lead magnet funnel, or upgrading a single welcome email into a proper sequence.',
    authorUsername: 'growthoperator',
    likes: 218,
    saves: 146,
    copies: 610,
    views: 3600,
    trendScore: 218*2 + 146*3 + 610 + 3600*0.2,
    trendingScore: 218*2 + 146*3 + 610 + 3600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Email Sequence',
    whyTrending: 'A welcome sequence is the highest-ROI email automation. This prompt writes all 5 emails with the psychological sequencing that turns subscribers into buyers.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 610,
    estimatedTokens: 1050,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-10',
  },
  {
    id: 'lib-cnt-014',
    title: 'Story-Driven Sales Page Writer',
    slug: 'story-driven-sales-page-writer',
    description: 'Creates a complete long-form sales page with story opener, feature-to-benefit breakdown, FAQ objection handling, guarantee, and P.S.',
    content: `You are a direct response copywriter who has written sales pages that convert at 2-5% for cold traffic. Write a complete long-form sales page.

## Inputs
- Product name: [PRODUCT_NAME]
- Price: [PRICE]
- Target buyer: [TARGET_BUYER]
- Core transformation: [CORE_TRANSFORMATION] (before state → after state)
- Main objections: [MAIN_OBJECTIONS] (list 3-5 reasons people don't buy)

## Sales Page Structure

### Above-the-Fold Hero
- **Headline**: the transformation in 10-15 words. Not clever — clear. Lead with the outcome the buyer wants.
- **Subheadline**: 1-2 sentences expanding the promise. Address who it's for.
- **Hero CTA button**: action-oriented label (not "Buy Now" — something that references the transformation)
- **Trust signal beneath CTA**: testimonial snippet, guarantee mention, or social proof number

### Story Opener (200 words)
Open with a scene the target buyer will recognize from their own life — a specific moment of frustration, failure, or aspiration. Do not introduce the product yet. Just tell the story.

### Problem and Agitation (150 words)
Name what is at stake. What happens if this problem isn't solved? What is it costing them (time, money, relationships, status)? Articulate the internal belief that's keeping them stuck.

### Solution Reveal (100 words)
Introduce [PRODUCT_NAME] as the answer. Not a product description — a bridge. "That's why I created..." Explain the insight that led to the solution.

### Feature-to-Benefit Breakdown (5-7 items)
For each feature:
- **Feature** (what it is)
- **Benefit** (what it does for the buyer)
- **Deeper "so what"**: why this benefit matters emotionally or financially
Format: "With [FEATURE], you [BENEFIT], which means [DEEPER SO WHAT]."

### Social Proof Section
- Testimonial format: 3 templates (name, role, specific result, emotional before/after)
- Results statistics: 2 metrics format (e.g., "X% of students report Y within 30 days")
- Case study micro-story: 75-word version of one transformation story

### FAQ (5 questions addressing main objections)
For each objection from [MAIN_OBJECTIONS]:
- Question (phrased as the buyer would think it)
- Answer (honest, confident, empathy-first)

### Guarantee Statement (75 words)
Write a guarantee that removes risk and builds trust. Be specific about terms.

### Urgency/Scarcity Section (50 words)
Only include if genuinely true. If no real scarcity, skip this section or use deadline framing.

### Final CTA + P.S.
- Restate the transformation one last time
- Repeat the primary CTA button with surrounding context
- **P.S.** (50 words): address the single biggest objection one more time, or summarize the guarantee`,
    category: 'content',
    tags: ['sales-page', 'copywriting', 'conversion', 'direct-response', 'marketing'],
    difficulty: 'advanced',
    useCase: 'Use when launching a new product, course, or service that requires persuasive long-form copy to convert cold or warm traffic.',
    authorUsername: 'growthoperator',
    likes: 287,
    saves: 192,
    copies: 780,
    views: 4800,
    trendScore: 287*2 + 192*3 + 780 + 4800*0.2,
    trendingScore: 287*2 + 192*3 + 780 + 4800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Sales Copy',
    whyTrending: 'Sales pages are where copy makes or loses money. This prompt follows direct response principles that have driven millions in revenue.',
    bestFor: ['Claude'],
    author: 'growthoperator',
    uses: 780,
    estimatedTokens: 980,
    model: 'gpt-4o',
    createdAt: '2024-11-22',
  },
  {
    id: 'lib-cnt-015',
    title: 'Comprehensive Content Brief Generator',
    slug: 'comprehensive-content-brief-generator',
    description: 'Creates a detailed content brief for a writer with keyword analysis, article structure, competitor gaps, visual content suggestions, and success metrics.',
    content: `You are a content strategist and SEO specialist. Create a detailed content brief that gives a writer everything they need to produce a piece of content that ranks and converts.

## Inputs
- Content title: [CONTENT_TITLE]
- Target keyword: [TARGET_KEYWORD]
- Search intent: [SEARCH_INTENT] (informational / navigational / commercial / transactional)
- Audience: [AUDIENCE]
- Funnel stage: [FUNNEL_STAGE] (awareness / consideration / decision)

## Content Brief

### Article Goal Statement
One clear sentence: "The goal of this article is to [achieve X outcome] for [AUDIENCE] who are [situation/search intent], resulting in [desired action — rank, convert, educate]."

### Target Audience Profile
- Who they are: job title, industry, experience level
- What they know coming in: their existing knowledge about [TARGET_KEYWORD]
- What problem brings them to this article: the trigger for their search
- What they need to believe after reading: the conviction this article must create

### Primary Keyword
- [TARGET_KEYWORD]
- Target position: first page, top 3
- Monthly search volume estimate: (provide best estimate)
- Keyword difficulty note: (high / medium / low with brief rationale)
- Where keyword must appear: title, first paragraph, at least 2 H2s, meta description

### Secondary and LSI Keywords (8-12)
For each: keyword, search volume estimate, where to include it naturally in the article.

### Search Intent Analysis
- What is the searcher actually trying to accomplish?
- What format do current top-ranking results use? (list / guide / comparison / tool)
- What does this tell us about what Google's algorithm values for this query?
- Any SERP features to target? (featured snippet, People Also Ask, image pack)

### Recommended Article Structure (H1 through H3)
For each heading:
- H tag level and text
- What this section must cover (2-3 sentences of direction)
- Angle or hook that differentiates this section from competitors
- Word count target for this section

### Total Word Count Target
Recommendation with rationale (based on competitor lengths and content complexity).

### Tone and Style Guide
- Voice: formal / conversational / technical
- Person: second person ("you") or neutral?
- Sentence length target (average)
- Paragraph length target
- Use of subheadings: every X words
- One brand-specific style rule

### Competitor Articles to Beat
List 3 competitor articles on this keyword:
- What they cover well (don't skip this)
- What they miss or do poorly
- The specific angle or depth this article must exceed to win

### Expert Quotes to Find
2-3 types of experts who could provide credible quotes for this article. Describe the type and what claim they should validate.

### Internal Links to Include (3-5)
Describe the type of existing content to link to and where in the article it belongs.

### External Sources to Cite (3-5)
Describe the type of external source (.edu, .gov, industry study, academic) and what claim it should support.

### Visual Content Suggestions
- Chart or data visualization: describe what data it visualizes
- Screenshots or product images: what they should show
- Infographic concept: what overview or process it explains
- Image alt text guidance

### Success Metrics
- Ranking target: first page for [TARGET_KEYWORD] within X months
- Traffic goal: X organic visitors per month
- Conversion metric: what action on-page indicates this article is achieving its funnel goal?
- Engagement signal: target time on page, bounce rate benchmark`,
    category: 'content',
    tags: ['content-brief', 'seo', 'content-strategy', 'editorial', 'keyword-research'],
    difficulty: 'advanced',
    useCase: 'Use when briefing freelance writers, assigning content to in-house teams, or building a scalable content production workflow.',
    authorUsername: 'osa',
    likes: 234,
    saves: 158,
    copies: 650,
    views: 4000,
    trendScore: 234*2 + 158*3 + 650 + 4000*0.2,
    trendingScore: 234*2 + 158*3 + 650 + 4000*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Brief',
    whyTrending: 'Content briefs determine the ceiling of writer output. This prompt ensures every article starts with a clear goal, audience, and competitive angle.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 650,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2025-01-06',
  },
]
