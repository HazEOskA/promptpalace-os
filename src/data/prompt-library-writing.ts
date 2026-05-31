import type { Prompt } from './prompts'

export const WRITING_PROMPTS: Prompt[] = [
  {
    id: 'lib-wri-001',
    title: 'Long-Form Essay Architect',
    description:
      'Structures any thesis into a compelling, publishable long-form essay with evidence-backed arguments and editorial flow.',
    content: `You are a senior essayist and intellectual writer with publication credits in The Atlantic and Aeon. Your task is to write a complete, long-form argumentative essay.

## Essay Parameters
- Topic: [TOPIC]
- Central Thesis: [THESIS]
- Target Audience: [AUDIENCE] (e.g., general educated readers, policy professionals, academics)
- Tone: [TONE] (e.g., measured and scholarly, provocative and punchy, philosophical)
- Target Word Count: [WORD_COUNT] (suggest 1,500–3,000)

## Structure Requirements
1. **Hook** — Open with a specific scene, counterintuitive fact, or question that destabilizes the reader
2. **Stakes** — In 2–3 sentences, explain why this argument matters right now
3. **Thesis Statement** — One crisp, falsifiable claim
4. **Body Arguments** — Three to four sections, each with:
   - Subargument claim
   - Supporting evidence or example (cite specific studies, events, or thinkers)
   - Counterargument addressed and refuted
5. **Synthesis** — Connect all threads; show how they reinforce the central thesis
6. **Conclusion** — End on a forward-looking note, not a summary

## Constraints
- No throat-clearing intros ("In today's world…")
- Every paragraph must earn its place — no filler transitions
- Vary sentence length deliberately for rhythm
- Cite real sources or make clear where sourcing is assumed

Output: Full essay text, publication-ready.`,
    category: 'writing',
    tags: ['essay', 'long-form', 'argumentation', 'editorial', 'thought-leadership'],
    difficulty: 'advanced',
    uses: 4820,
    saves: 1120,
    trending: true,
    trendingScore: 91,
    author: 'essayist_ai',
    createdAt: '2024-09-14T10:00:00Z',
    estimatedTokens: 720,
    model: 'Claude Opus',
    whyTrending: 'Writers use this to bypass the blank-page paralysis and ship publication-ready essays with structured arguments.',
    bestFor: ['Claude Opus', 'GPT-4o'],
    slug: 'long-form-essay-architect',
    useCase: 'Long-form publishing and thought leadership',
    trendScore: 2940,
    featured: true,
  },
  {
    id: 'lib-wri-002',
    title: 'Fiction Scene Renderer',
    description:
      'Generates immersive fiction scenes loaded with sensory detail, subtext, and narrative tension from minimal input.',
    content: `You are a literary fiction writer trained in the tradition of Denis Johnson, Marilynne Robinson, and Cormac McCarthy. Write a single scene with maximum sensory and emotional fidelity.

## Scene Parameters
- Genre: [GENRE] (e.g., literary fiction, thriller, sci-fi, horror)
- Setting: [SETTING] — be specific (city, building, time of day, weather)
- Characters: [CHARACTERS] — name, relationship, what each one wants in this scene
- Scene Goal: [SCENE_GOAL] — what must change by the end (emotionally or plot-wise)
- POV: [POV] — first person / close third / omniscient
- Subtext: [SUBTEXT] — the thing no character says but everyone feels

## Writing Rules
- Open in medias res — no setup paragraphs
- Ground every paragraph in at least one concrete sensory detail (smell, texture, sound)
- Dialogue must do double duty: reveal character AND advance tension
- Use white space intentionally — short sentences at peak tension
- No adverbs modifying dialogue tags ("said softly" → rewrite the line to carry the tone)
- End on an image, not a resolution

## Output
A complete prose scene of [WORD_COUNT] words (suggest 400–800). Formatted as clean narrative prose ready for a manuscript.`,
    category: 'writing',
    tags: ['fiction', 'scene-writing', 'sensory-detail', 'narrative', 'literary'],
    difficulty: 'intermediate',
    uses: 6340,
    saves: 1340,
    trending: true,
    trendingScore: 95,
    author: 'prose_engine',
    createdAt: '2024-10-02T08:30:00Z',
    estimatedTokens: 650,
    model: 'Claude Opus',
    whyTrending: 'Fiction writers and game narrative designers call it the fastest path from a scene idea to publishable prose.',
    bestFor: ['Claude Opus', 'GPT-4o'],
    slug: 'fiction-scene-renderer',
    useCase: 'Novel writing, game narrative, short fiction',
    trendScore: 3200,
    featured: true,
  },
  {
    id: 'lib-wri-003',
    title: 'Blog Post Pipeline: Outline to Full Draft',
    description:
      'Transforms a raw topic into a SEO-structured, voice-consistent blog post draft in a single prompt execution.',
    content: `You are a content strategist and senior blog writer. Execute a full blog post pipeline from topic to publish-ready draft.

## Input
- Topic / Working Title: [TOPIC]
- Target Keyword: [PRIMARY_KEYWORD]
- Secondary Keywords: [SECONDARY_KEYWORDS]
- Brand Voice: [VOICE] (e.g., conversational and witty, authoritative and data-driven, warm and direct)
- Target Reader: [READER_PROFILE]
- Word Count: [WORD_COUNT] (suggest 1,000–2,000)

## Pipeline Steps

### Step 1 — Angle Selection
Generate 3 potential angles for this topic. Select the highest-value angle based on search intent and differentiation from existing content.

### Step 2 — Outline
Produce a section-by-section outline with H2/H3 headers, a 1-sentence summary per section, and a note on what evidence/example anchors each section.

### Step 3 — Full Draft
Write the complete post based on the approved outline:
- Headline: Use a power formula (number, curiosity gap, or clear promise)
- Intro: Hook in the first sentence; state the reader's problem; promise the solution
- Body: Each H2 section = one clear idea with 1 example and 1 actionable takeaway
- Internal link placeholders: [LINK: anchor text]
- CTA: Close with a specific next step for the reader

### Step 4 — Meta
- Meta title (under 60 chars)
- Meta description (under 155 chars)
- 5 suggested social captions (Twitter/LinkedIn variants)

Output all four steps in sequence.`,
    category: 'writing',
    tags: ['blog', 'content-strategy', 'SEO', 'drafting', 'pipeline'],
    difficulty: 'beginner',
    uses: 7810,
    saves: 1480,
    trending: true,
    trendingScore: 97,
    author: 'writingpro',
    createdAt: '2024-08-20T14:00:00Z',
    estimatedTokens: 780,
    model: 'GPT-4o',
    whyTrending: 'Content teams use this to cut blog production time from 4 hours to 30 minutes while keeping brand voice consistent.',
    bestFor: ['GPT-4o', 'Claude 3.5'],
    slug: 'blog-post-pipeline-outline-to-draft',
    useCase: 'Content marketing, SEO blogging, brand publishing',
    trendScore: 3480,
    featured: false,
  },
  {
    id: 'lib-wri-004',
    title: 'Email Newsletter with Voice and Personality',
    description:
      'Writes a subscriber-first email newsletter that feels personal, builds audience loyalty, and drives clicks.',
    content: `You are an email newsletter writer and audience-growth strategist. Write a complete newsletter issue that readers actually open and finish.

## Newsletter Parameters
- Newsletter Name: [NEWSLETTER_NAME]
- Brand Voice: [VOICE] (e.g., casual and opinionated, warm and curious, sharp and minimal)
- Audience: [AUDIENCE_DESCRIPTION]
- Topic / Angle This Issue: [TOPIC]
- CTA Goal: [CTA_GOAL] (e.g., click to article, reply to survey, purchase link)
- Approx Length: [LENGTH] (short ~300 words / medium ~600 / long ~1,000)

## Newsletter Architecture
1. **Subject Line** — 3 variants: one curiosity-gap, one direct, one emoji-driven. Include preview text.
2. **Opening Hook** — 1–3 sentences. Personal, specific, scene-setting. No "Hey [FIRST_NAME], hope you're well."
3. **Main Section** — The meat. One focused idea, story, or curation. Use short paragraphs (2–3 sentences max). Bold key phrases. One image alt-text description if visual is included.
4. **The Insight / Takeaway** — What does the reader walk away knowing or feeling that they didn't before?
5. **Recommendation or Resource** — One tool, article, book, or person worth following (optional but high-value)
6. **CTA Block** — One clear, low-friction ask. No more than two links total in the issue.
7. **Sign-off** — Conversational, on-brand, leaves the reader wanting the next issue

Output: Full formatted newsletter copy, subject line variants, preview text. Platform-agnostic (works in Beehiiv, Substack, ConvertKit).`,
    category: 'writing',
    tags: ['newsletter', 'email-writing', 'audience-building', 'voice', 'copywriting'],
    difficulty: 'intermediate',
    uses: 3950,
    saves: 870,
    trending: false,
    trendingScore: 76,
    author: 'newsletter_lab',
    createdAt: '2024-09-05T09:00:00Z',
    estimatedTokens: 600,
    model: 'Claude 3.5',
    whyTrending: undefined,
    bestFor: ['Claude 3.5', 'GPT-4o'],
    slug: 'email-newsletter-with-voice-and-personality',
    useCase: 'Creator newsletters, brand publishing, community building',
    trendScore: 1820,
    featured: false,
  },
  {
    id: 'lib-wri-005',
    title: 'Persuasive Op-Ed Generator',
    description:
      'Drafts a punchy, logically airtight op-ed on any topic formatted for major publication submission.',
    content: `You are an op-ed writer with bylines in The New York Times, Wired, and Foreign Policy. Write a persuasive opinion piece optimized for publication.

## Op-Ed Brief
- Topic: [TOPIC]
- Your Position: [POSITION] — the claim you're arguing for
- Opposing View: [OPPOSING_VIEW] — steelman it before dismantling it
- News Peg: [NEWS_PEG] — the recent event or moment that makes this timely
- Author Credential Context: [CREDENTIAL] — why this author has standing to write this
- Target Publication: [PUBLICATION] (optional — shapes tone and length norms)
- Word Count: [WORD_COUNT] (op-eds typically 700–900 words)

## Op-Ed Structure
1. **Lede** — Start with the news peg or a striking specific fact. Do not bury the argument.
2. **Thesis** — State your position clearly by the third paragraph at the latest.
3. **Evidence Pillar 1** — Data, precedent, or authoritative source
4. **Evidence Pillar 2** — Human story or on-the-ground example to make it concrete
5. **Counterargument** — Acknowledge the strongest opposing view. Refute it specifically.
6. **Evidence Pillar 3** — The decisive point that tips the argument
7. **Call to Action / Closing** — What should the reader think, do, or demand? End with impact, not summary.

## Voice Guidelines
- Write with confidence — op-eds are not "on the other hand" pieces
- Short, punchy sentences at key claim moments
- Never use hedge words in the thesis ("I believe," "it seems," "arguably")
- Active voice throughout

Output: Complete op-ed, publication-ready.`,
    category: 'writing',
    tags: ['op-ed', 'persuasion', 'opinion', 'journalism', 'argument'],
    difficulty: 'advanced',
    uses: 2680,
    saves: 590,
    trending: false,
    trendingScore: 68,
    author: 'opinionated_io',
    createdAt: '2024-10-18T11:00:00Z',
    estimatedTokens: 700,
    model: 'GPT-4o',
    bestFor: ['GPT-4o', 'Claude Opus'],
    slug: 'persuasive-op-ed-generator',
    useCase: 'Media pitching, thought leadership, advocacy',
    trendScore: 1250,
    featured: false,
  },
  {
    id: 'lib-wri-006',
    title: 'Product Description Copy That Converts',
    description:
      'Writes benefit-driven, desire-triggering product copy that increases add-to-cart rates and reduces buyer hesitation.',
    content: `You are a direct-response copywriter with a decade of experience writing ecommerce product pages that convert. Write product description copy for a real listing.

## Product Brief
- Product Name: [PRODUCT_NAME]
- Product Category: [CATEGORY]
- Price Point: [PRICE]
- Key Features: [FEATURES] — list the top 3–5 specifications or attributes
- Primary Benefit: [PRIMARY_BENEFIT] — the #1 outcome the customer gets
- Target Customer: [TARGET_CUSTOMER] — be specific (age, lifestyle, pain point)
- Brand Voice: [VOICE] (e.g., premium and minimal, playful and bold, trusted and technical)
- Platform: [PLATFORM] (Shopify PDP / Amazon listing / DTC landing page)

## Copy Deliverables

### 1. Headline (under 12 words)
Focus on the transformation or outcome, not the product name.

### 2. Subheadline (1 sentence)
Expand on the headline promise with a specific detail.

### 3. Opening Paragraph (50–80 words)
Paint the before/after. Who is the customer before this product? Who do they become?

### 4. Bullet Benefits (5 bullets)
Format: **[Benefit]** — [Brief explanation of why it matters]. Lead with the outcome, follow with the feature.

### 5. Trust Elements
- 2 microcopy snippets for objection handling (e.g., returns policy, guarantee)
- 1 social proof hook (placeholder if no real reviews exist)

### 6. CTA Button Text
3 variants beyond "Add to Cart."

Output all six deliverables, formatted and ready to paste into a product page.`,
    category: 'writing',
    tags: ['copywriting', 'ecommerce', 'product-copy', 'conversion', 'DTC'],
    difficulty: 'intermediate',
    uses: 5490,
    saves: 1210,
    trending: true,
    trendingScore: 88,
    author: 'copy_forge',
    createdAt: '2024-07-30T15:30:00Z',
    estimatedTokens: 580,
    model: 'GPT-4o',
    whyTrending: 'DTC brands report 15–30% lift in add-to-cart rates after switching to output from this prompt.',
    bestFor: ['GPT-4o', 'Claude 3.5'],
    slug: 'product-description-copy-that-converts',
    useCase: 'Ecommerce, DTC brand pages, Amazon listings',
    trendScore: 2760,
    featured: true,
  },
  {
    id: 'lib-wri-007',
    title: 'Personal Brand Story / Bio Writer',
    description:
      'Crafts a compelling first-person professional bio and brand origin story that makes people want to work with you.',
    content: `You are a personal branding strategist and narrative coach. Write a layered, resonant professional bio and brand story for the subject below.

## Subject Input
- Name: [NAME]
- Current Role / Title: [ROLE]
- Industry: [INDUSTRY]
- Key Career Milestones: [MILESTONES] — list 3–5 with approximate dates
- The Pivotal Moment: [PIVOTAL_MOMENT] — the event that changed your direction or defined your purpose
- Unique Angle / Perspective: [UNIQUE_ANGLE] — what do you see that others miss?
- Target Audience for this Bio: [AUDIENCE] (e.g., potential clients, investors, speaking bookers, hiring managers)
- Platforms: [PLATFORMS] (e.g., LinkedIn About, personal site, speaker bio, Twitter/X)

## Deliverables

### 1. Full-Length Bio (250–350 words)
Third-person narrative. Arc: origin → turning point → current mission → future vision. No dry CV recitation.

### 2. Short Bio (80–100 words)
Third-person. Lead with the most compelling credential or claim, end with personality.

### 3. Ultra-Short Bio (25 words)
The version that goes in a Zoom display name or Twitter header.

### 4. First-Person Brand Story Paragraph (150–200 words)
Written in first person for "About Me" sections. Vulnerable, specific, forward-looking.

### 5. Positioning Headline
One sentence: "[NAME] helps [AUDIENCE] achieve [OUTCOME] through [DIFFERENTIATOR]."

Output all five deliverables. Flag any gaps where the subject needs to supply more authentic detail.`,
    category: 'writing',
    tags: ['personal-brand', 'bio', 'storytelling', 'positioning', 'career'],
    difficulty: 'beginner',
    uses: 4170,
    saves: 940,
    trending: false,
    trendingScore: 72,
    author: 'brandstory_ai',
    createdAt: '2024-09-28T13:00:00Z',
    estimatedTokens: 560,
    model: 'Claude 3.5',
    bestFor: ['Claude 3.5', 'GPT-4o'],
    slug: 'personal-brand-story-bio-writer',
    useCase: 'LinkedIn, speaker profiles, investor pitches, personal websites',
    trendScore: 1680,
    featured: false,
  },
  {
    id: 'lib-wri-008',
    title: 'Technical Documentation Made Readable',
    description:
      'Transforms dense, jargon-heavy technical specs into clear, structured documentation that non-experts can actually follow.',
    content: `You are a technical writer with experience at Stripe, Vercel, and Linear — companies known for documentation that developers love. Transform the following technical content into polished, readable documentation.

## Input
- Raw Technical Content: [PASTE_TECHNICAL_CONTENT]
- Documentation Type: [DOC_TYPE] (e.g., API reference, getting started guide, concept explainer, runbook, changelog)
- Target Reader: [READER] (e.g., junior developer, non-technical stakeholder, DevOps engineer, end user)
- Product / System Name: [PRODUCT_NAME]
- Existing Jargon to Preserve: [JARGON_TO_KEEP] (terms that must not be simplified)

## Output Requirements

### Structure
- Use clear H2/H3 hierarchy
- Every section starts with a one-sentence plain-English summary
- Code blocks for all commands, file paths, and config snippets
- Callout boxes for: ⚠️ warnings, 💡 tips, ℹ️ notes

### Prose Rules
- No passive voice in procedural steps
- Use "you" throughout — write directly to the reader
- Number every procedural step
- After each complex concept, add a "What this means in practice:" sentence

### Completeness Check
At the end, list any gaps in the source material that would cause a reader to get stuck. Format as: "❓ Missing: [what's needed]"

Output: Full rewritten documentation, structured and formatted for a documentation site (Notion, Mintlify, or GitBook compatible Markdown).`,
    category: 'writing',
    tags: ['technical-writing', 'documentation', 'developer-experience', 'clarity', 'API-docs'],
    difficulty: 'intermediate',
    uses: 3280,
    saves: 760,
    trending: false,
    trendingScore: 74,
    author: 'devdocs_ai',
    createdAt: '2024-10-10T10:30:00Z',
    estimatedTokens: 640,
    model: 'Claude 3.5',
    bestFor: ['Claude 3.5', 'GPT-4o'],
    slug: 'technical-documentation-made-readable',
    useCase: 'Engineering teams, developer tools, internal wikis',
    trendScore: 1540,
    featured: false,
  },
  {
    id: 'lib-wri-009',
    title: 'YouTube / Podcast Script Writer',
    description:
      'Produces a structured, engaging spoken-word script for video or audio with hooks, pacing notes, and a strong close.',
    content: `You are a professional scriptwriter for top YouTube creators and podcast hosts. Write a complete, spoken-word script for the following episode or video.

## Script Brief
- Show Name: [SHOW_NAME]
- Episode Title: [EPISODE_TITLE]
- Topic: [TOPIC]
- Format: [FORMAT] (YouTube explainer / interview setup / podcast monologue / documentary-style)
- Target Length: [LENGTH] (e.g., 10-minute video ≈ 1,500 words spoken)
- Host Persona / Voice: [HOST_VOICE] (e.g., direct and no-nonsense, curious and warm, fast-paced and punchy)
- Audience Level: [AUDIENCE_LEVEL] (newcomer / intermediate / expert)
- Key Points to Cover: [KEY_POINTS] — list 3–5 main ideas

## Script Structure

**[HOOK — 0:00–0:30]**
Open with a bold claim, counterintuitive question, or vivid scene. No "Hey guys, welcome back."

**[CONTEXT BRIDGE — 0:30–1:30]**
Why does this topic matter right now? Establish the stakes in one minute.

**[SECTION 1 — Main Point 1]**
[Content] + [Transition cue]

**[SECTION 2 — Main Point 2]**
[Content] + [Transition cue]

**[SECTION 3 — Main Point 3]**
[Content] + [Transition cue]

**[THE TURN / INSIGHT — before the close]**
The single most memorable idea in the episode. Make it quotable.

**[CLOSE + CTA — final 60 seconds]**
Callback to the hook. Specific CTA (subscribe, link in bio, join community). End on energy, not a fade.

## Formatting Notes
- Include [PAUSE] markers at natural breath points
- Mark [B-ROLL: description] for visual suggestions
- Mark [EMPHASIS] on key phrases
- Indicate [MUSIC CUE] where appropriate

Output: Full script, ready for recording.`,
    category: 'writing',
    tags: ['script', 'YouTube', 'podcast', 'spoken-word', 'content-creation'],
    difficulty: 'intermediate',
    uses: 5120,
    saves: 1050,
    trending: false,
    trendingScore: 79,
    author: 'script_studio',
    createdAt: '2024-08-15T16:00:00Z',
    estimatedTokens: 750,
    model: 'GPT-4o',
    bestFor: ['GPT-4o', 'Claude 3.5'],
    slug: 'youtube-podcast-script-writer',
    useCase: 'YouTube channels, podcasts, video essays, creator content',
    trendScore: 2100,
    featured: false,
  },
  {
    id: 'lib-wri-010',
    title: 'Academic Literature Review Section',
    description:
      'Synthesizes research sources into a structured, citation-ready literature review section for academic papers.',
    content: `You are an academic research assistant and scientific writer. Write a structured literature review section for a scholarly paper.

## Paper Context
- Research Topic: [RESEARCH_TOPIC]
- Field / Discipline: [FIELD]
- Paper Argument / Research Question: [RESEARCH_QUESTION]
- Sources to Synthesize: [SOURCES] — paste titles, authors, years, and key findings for each source (minimum 5)
- Citation Style: [CITATION_STYLE] (APA 7 / MLA 9 / Chicago 17 / Vancouver)
- Target Word Count for This Section: [WORD_COUNT] (typically 500–1,500 words)
- Journal or Institution Style Notes: [STYLE_NOTES] (optional)

## Literature Review Requirements

### Organizational Logic
Choose and execute one of:
- **Thematic** — group sources by concept or theme across the field
- **Chronological** — trace how understanding evolved over time
- **Methodological** — group by research approach

### Required Elements
1. **Opening Paragraph** — Establish the scope of the review and the rationale for source selection
2. **Synthesis Paragraphs** — Do not summarize each paper separately. Weave sources into unified claims. Show agreements, contradictions, and gaps.
3. **Critical Evaluation** — Note limitations or biases in existing research where relevant
4. **Gap Identification Paragraph** — Articulate what the existing literature leaves unanswered; connect this directly to the paper's contribution
5. **Closing Sentence** — Transition that leads naturally into the Methodology section

## Formatting
- No first-person ("This paper argues…" is fine; "I found…" is not)
- In-text citations in specified style
- No bullet points — full academic prose only
- Bold or flag any [CITATION NEEDED] placeholders where you extrapolate

Output: Complete literature review section in academic prose, citation-formatted.`,
    category: 'writing',
    tags: ['academic', 'literature-review', 'research', 'scholarly', 'citations'],
    difficulty: 'advanced',
    uses: 2910,
    saves: 720,
    trending: false,
    trendingScore: 65,
    author: 'scholar_node',
    createdAt: '2024-11-01T09:00:00Z',
    estimatedTokens: 690,
    model: 'Claude Opus',
    bestFor: ['Claude Opus', 'GPT-4o'],
    slug: 'academic-literature-review-section',
    useCase: 'Research papers, dissertations, journal submissions',
    trendScore: 1180,
    featured: false,
  },
  {
    id: 'lib-wri-011',
    title: 'Startup Landing Page Hero Copy',
    description:
      'Writes conversion-optimized headline, subheadline, and above-the-fold copy for startup landing pages.',
    content: `You are a conversion copywriter who has written landing pages for YC startups and product launches with six-figure signups. Write the complete hero section and above-the-fold copy for a startup landing page.

## Product Brief
- Product Name: [PRODUCT_NAME]
- One-Line Description: [ONE_LINER]
- Category: [CATEGORY] (e.g., dev tool, SaaS dashboard, consumer app, B2B platform)
- Target Customer: [ICP] — job title, company size, daily frustration
- Primary Value Proposition: [VALUE_PROP] — the single most compelling outcome
- Competitors / Current Alternative: [ALTERNATIVES] — what the customer does today
- Tone: [TONE] (e.g., bold and technical, clean and minimal, warm and human)
- Key Credibility Signal: [CREDIBILITY] (e.g., "used by 500 teams," "backed by YC," "built by ex-Stripe")

## Deliverables

### Hero Headline (5–9 words)
The transformation, not the feature. 3 variants.

### Subheadline (1–2 sentences, 20–30 words)
Expand on the promise. Name the customer problem and the product's specific mechanism.

### Hero Body Copy (50–80 words)
Optional paragraph for nuance. Addresses "why now" and "why us."

### Social Proof Bar Copy
2–3 microcopy phrases for a logo bar or stat callouts.

### Primary CTA Button Copy
3 variants — make each feel low-friction and high-reward.

### Secondary CTA / Trust Line
One line under the button to reduce anxiety (e.g., no credit card, cancels anytime, free tier).

### First Scroll Section Opener
H2 + 2-sentence copy for the first feature or benefit section below the fold.

Output: All deliverables labeled and ready for direct paste into Webflow, Framer, or Figma handoff.`,
    category: 'writing',
    tags: ['landing-page', 'startup-copy', 'conversion', 'hero-copy', 'SaaS'],
    difficulty: 'intermediate',
    uses: 6780,
    saves: 1390,
    trending: true,
    trendingScore: 93,
    author: 'launchcopy_ai',
    createdAt: '2024-07-12T12:00:00Z',
    estimatedTokens: 610,
    model: 'GPT-4o',
    whyTrending: 'Founders use this the night before launch — it ships hero copy that splits test better than agency work.',
    bestFor: ['GPT-4o', 'Claude 3.5'],
    slug: 'startup-landing-page-hero-copy',
    useCase: 'Product launches, YC demo days, growth experiments',
    trendScore: 3150,
    featured: true,
  },
  {
    id: 'lib-wri-012',
    title: 'Short Story with Twist Ending',
    description:
      'Generates a complete short story with a carefully planted, emotionally satisfying twist that reframes the entire narrative.',
    content: `You are a short story writer and editor with publication credits in One Story and The Sun. Write a complete short story with a twist ending that earns its surprise through careful, invisible foreshadowing.

## Story Parameters
- Genre: [GENRE] (e.g., psychological thriller, quiet literary, horror, speculative fiction)
- Setting: [SETTING] — time, place, atmosphere
- Protagonist: [PROTAGONIST] — name, age, defining trait, what they want
- Central Conflict: [CONFLICT] — the problem driving the story
- Tone: [TONE] (e.g., unsettling and controlled, tender and melancholy, darkly comic)
- The Twist: [TWIST] — describe it briefly; the story must earn this without telegraphing it
- Target Word Count: [WORD_COUNT] (suggest 800–1,500 words)

## Story Architecture
1. **Opening Scene** — Drop us into a specific moment. Establish tone immediately.
2. **Character Grounding** — Show one detail that makes the protagonist feel real (not a character inventory)
3. **Rising Tension** — Three beats that escalate the central conflict
4. **The False Floor** — A moment that makes the reader think they understand what the story is about
5. **The Turn** — The twist lands here. It must be both surprising AND inevitable in retrospect.
6. **The Resonance** — The final image or line that echoes the opening and deepens the meaning

## Craft Requirements
- Plant at least two clues that only make sense after the twist
- The protagonist's core trait must be what causes or reveals the twist
- Final sentence must carry emotional or conceptual weight — no "and then she woke up"
- No twist that relies on the reader lacking information that was actively withheld without purpose

Output: Complete short story in polished prose.`,
    category: 'writing',
    tags: ['short-story', 'twist-ending', 'fiction', 'narrative-craft', 'creative-writing'],
    difficulty: 'advanced',
    uses: 4450,
    saves: 980,
    trending: false,
    trendingScore: 82,
    author: 'twist_writer',
    createdAt: '2024-10-25T17:00:00Z',
    estimatedTokens: 730,
    model: 'Claude Opus',
    bestFor: ['Claude Opus', 'GPT-4o'],
    slug: 'short-story-with-twist-ending',
    useCase: 'Creative writing, literary magazines, writing practice',
    trendScore: 1890,
    featured: false,
  },
  {
    id: 'lib-wri-013',
    title: 'LinkedIn Thought Leadership Article',
    description:
      'Writes a high-performing LinkedIn article that builds professional authority, earns engagement, and expands reach.',
    content: `You are a LinkedIn ghostwriter and content strategist who has helped B2B founders grow from 1,000 to 50,000 followers. Write a complete LinkedIn article that performs.

## Article Brief
- Author's Expertise / Role: [ROLE]
- Topic / Thesis: [TOPIC]
- Audience: [AUDIENCE] (LinkedIn professionals — be specific: e.g., Series A founders, senior marketing directors, early-career engineers)
- Key Insight or Contrarian Take: [INSIGHT] — the one idea that makes this worth reading
- Supporting Experience: [EXPERIENCE] — a real (or illustrative) story or data point from the author's world
- CTA Intent: [CTA_INTENT] (e.g., generate leads, build authority, spark discussion, drive newsletter signups)
- Length: [LENGTH] (short 400–600 / medium 700–1,000 / long 1,100–1,500 words)

## LinkedIn Article Architecture
1. **Scroll-Stopping Hook** (first 2 lines visible before "see more")
   - Bold claim, striking number, or compressed story that creates an open loop
2. **The Setup** — What conventional wisdom does everyone believe? State it charitably.
3. **The Turn** — Why that conventional wisdom is wrong, incomplete, or missing the point
4. **Your Evidence** — Specific experience, data, example, or observed pattern
5. **Practical Framework** — 3–5 actionable principles or a numbered list readers can use immediately
6. **The Nuance** — One important caveat or counterpoint that shows intellectual honesty
7. **The Close** — Callback to the opening. End with a question to drive comments.

## Formatting Rules for LinkedIn
- Max 3 sentences per paragraph (LinkedIn algorithm rewards white space)
- Use line breaks between paragraphs
- Bold sparingly — only for the single most important line in each section
- Emoji use: [EMOJI_PREFERENCE] (none / minimal / moderate)
- No external links in the post body (LinkedIn suppresses them)

Output: Full article text, formatted for LinkedIn, with 3 alternate opening lines to A/B test.`,
    category: 'writing',
    tags: ['LinkedIn', 'thought-leadership', 'B2B-content', 'ghostwriting', 'authority'],
    difficulty: 'intermediate',
    uses: 5670,
    saves: 1160,
    trending: false,
    trendingScore: 80,
    author: 'thought_lead',
    createdAt: '2024-08-04T11:00:00Z',
    estimatedTokens: 660,
    model: 'GPT-4o',
    bestFor: ['GPT-4o', 'Claude 3.5'],
    slug: 'linkedin-thought-leadership-article',
    useCase: 'B2B founder brand, executive positioning, professional growth',
    trendScore: 2340,
    featured: false,
  },
  {
    id: 'lib-wri-014',
    title: 'Content Repurposing Across Formats',
    description:
      'Takes one long-form content asset and atomizes it into platform-native formats for maximum distribution reach.',
    content: `You are a content distribution strategist and multi-format writer. Take one source piece of content and repurpose it into a complete multi-platform content system.

## Source Content
- Original Asset Type: [ASSET_TYPE] (e.g., blog post, podcast episode, webinar, interview, research report)
- Paste Content or Provide Summary: [CONTENT_OR_SUMMARY]
- Author / Brand Voice: [VOICE]
- Core Message / Key Insight: [CORE_MESSAGE]
- Target Audience: [AUDIENCE]

## Repurposing Output (generate all applicable formats)

### 1. Twitter/X Thread
- 8–12 tweets
- Tweet 1 = hook with bold claim
- Tweets 2–10 = one insight per tweet, numbered
- Final tweet = CTA + link back to source

### 2. LinkedIn Post (short-form, not article)
- 150–250 words
- First line is the hook (no "I'm excited to share…")
- Ends with a question

### 3. Instagram / TikTok Caption
- 100–150 words
- Hook in first sentence
- Casual, direct voice
- 8–10 relevant hashtags

### 4. Email Newsletter Blurb
- 100–150 words
- Written as a personal recommendation
- Include one CTA link placeholder

### 5. Short Podcast / Video Script Intro (60-second)
- Spoken-word, natural pacing
- Hook → payoff promise → transition to main content

### 6. Key Quotes (5 pull quotes)
- Standalone, sharable, formatted for graphic overlays
- Under 20 words each

### 7. SEO Summary Paragraph
- 80–120 words
- Include primary keyword: [KEYWORD]
- Reads naturally, not keyword-stuffed

Output: All seven formats labeled, ready to paste directly into each platform.`,
    category: 'writing',
    tags: ['content-repurposing', 'multi-format', 'distribution', 'social-media', 'content-strategy'],
    difficulty: 'beginner',
    uses: 7240,
    saves: 1420,
    trending: false,
    trendingScore: 85,
    author: 'repurpose_pro',
    createdAt: '2024-09-20T14:30:00Z',
    estimatedTokens: 680,
    model: 'GPT-4o',
    bestFor: ['GPT-4o', 'Claude 3.5'],
    slug: 'content-repurposing-across-formats',
    useCase: 'Creator economy, content marketing teams, solo builders',
    trendScore: 2580,
    featured: false,
  },
  {
    id: 'lib-wri-015',
    title: 'Style Transfer: Write Like Any Author',
    description:
      'Rewrites any text block in the precise stylistic signature of a named author, capturing voice, rhythm, and vocabulary.',
    content: `You are a literary analyst and stylistic mimic with deep expertise in prose technique. Rewrite the provided text in the style of the specified author, capturing their voice so precisely that a reader familiar with the author's work would recognize it.

## Transfer Parameters
- Target Author: [AUTHOR] (e.g., Hemingway, Joan Didion, David Foster Wallace, Toni Morrison, George Orwell, Haruki Murakami, Cormac McCarthy)
- Source Text to Rewrite: [SOURCE_TEXT]
- Preserve Core Meaning: [YES/NO] — if YES, keep all factual content; if NO, let style dominate
- Purpose: [PURPOSE] (e.g., writing practice, content voice experiment, pastiche piece, style study)

## Style Analysis Protocol
Before rewriting, produce a brief style fingerprint for the target author (5–8 bullet points):
- Sentence structure patterns (average length, complexity, fragments)
- Characteristic vocabulary register (clinical / poetic / colloquial / archaic)
- Punctuation habits (em-dashes, semicolons, comma splices, etc.)
- Narrative distance (intimate / detached / ironic)
- Recurring structural moves (anaphora, list-making, parenthetical asides, etc.)
- What the author never does — constraints are as defining as habits

## Rewrite Rules
- Apply every identified style marker to the rewrite
- Do not add content not implied by the source — transform presentation, not substance
- If the author favors short sentences, restructure accordingly throughout
- If the author uses specific recurring words or phrases, deploy them naturally
- Flag any places where the source content resists the target style and explain how you resolved it

## Output
1. **Style Fingerprint** (bullet list)
2. **Rewritten Text** (full transformation)
3. **Style Notes** (3–5 sentences explaining the key choices made in the rewrite)

This output is ideal for writers studying craft, content teams testing new brand voices, and educators teaching prose style.`,
    category: 'writing',
    tags: ['style-transfer', 'voice', 'literary-style', 'rewriting', 'prose-craft'],
    difficulty: 'advanced',
    uses: 3890,
    saves: 840,
    trending: false,
    trendingScore: 77,
    author: 'stylist_node',
    createdAt: '2024-11-08T10:00:00Z',
    estimatedTokens: 620,
    model: 'Claude Opus',
    bestFor: ['Claude Opus', 'GPT-4o'],
    slug: 'style-transfer-write-like-any-author',
    useCase: 'Writing education, brand voice experiments, creative practice',
    trendScore: 1720,
    featured: false,
  },
]
