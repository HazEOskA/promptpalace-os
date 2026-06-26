import type { Prompt } from './prompts'

export const SEO_PROMPTS: Prompt[] = [
  {
    id: 'lib-seo-001',
    title: 'Topical Authority Map Builder',
    slug: 'topical-authority-map-builder',
    description: 'Builds a complete topical authority map with pillar and cluster content, internal linking matrix, and entity coverage for any website and topic.',
    content: `You are a senior SEO strategist who has built topical authority for websites that rank on the first page of Google in competitive niches. Your task is to build a comprehensive topical authority map for the following website and topic.

## Inputs
- Website: [WEBSITE] (URL and brief description)
- Main Topic: [MAIN_TOPIC] (e.g., "project management software for remote teams")
- Current Domain Authority: [DA_ESTIMATE]
- Publishing Capacity: [POSTS_PER_MONTH]
- Target Audience: [TARGET_AUDIENCE]

## Topical Authority Map Components

### Pillar Content List (5-10 Core Topics)
For each pillar topic: exact title, target keyword, search intent (informational/commercial/transactional), estimated monthly volume, recommended content format (ultimate guide/comparison/how-to/listicle), and why this qualifies as a pillar.

### Cluster Content List (10-15 Subtopics Per Pillar)
For each cluster: exact title, target keyword, parent pillar it belongs to, search intent, search volume estimate, internal link to/from relationship, content format.

### Content Hub Architecture
How to structure the hub: folder/subfolder URL structure, hub page design, spoke page templates, navigation recommendations. Diagram-ready outline.

### Internal Linking Matrix
A linking plan that maps which cluster pages link to which pillar pages, which pillars link to each other, and how to implement link equity flow efficiently. Include anchor text recommendations.

### Entity Coverage Map
Key entities (people, companies, concepts, tools) that Google associates with your main topic. Which entities appear in top-ranking content that you should cover? Which entities you currently mention vs. are missing?

### Semantic Keyword Groups
Group keywords by semantic similarity rather than exact match. For each group: seed keyword, related terms, LSI variations, and questions to answer within content.

### Content Gap Analysis vs Top Competitors
Compare your current content coverage against the top 3 organic competitors for your main topic. Output: topics they cover that you don't, topics you cover that they don't (advantage to press), and overlapping topics where you can differentiate.

### Publishing Sequence for Authority Building
In what order should you publish to build authority fastest? Recommend a 6-month publishing sequence with rationale — start with quick wins (low competition, high relevance) before attacking high-volume competitive terms.

## Output
Topical map in a spreadsheet-ready format (can be pasted into Airtable or Google Sheets) plus a written implementation guide explaining the strategy and prioritization logic.`,
    category: 'seo',
    tags: ['topical-authority', 'content-strategy', 'keyword-research', 'internal-linking'],
    difficulty: 'intermediate',
    useCase: 'Use when starting a content SEO program from scratch or auditing an existing content strategy for topical depth and authority building.',
    authorUsername: 'promptarchitect',
    likes: 352,
    saves: 230,
    copies: 920,
    views: 5800,
    trendScore: 352*2 + 230*3 + 920 + 5800*0.2,
    trendingScore: 352*2 + 230*3 + 920 + 5800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '18 min',
    outputType: 'Plan',
    whyTrending: 'Google\'s Helpful Content updates reward topical depth over breadth. Teams use this to build the content architecture that earns sustained organic traffic.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 920,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-10',
  },
  {
    id: 'lib-seo-002',
    title: 'Technical SEO Audit Checklist',
    slug: 'technical-seo-audit-checklist',
    description: 'Conducts a comprehensive technical SEO audit covering crawlability, Core Web Vitals, structured data, and indexability with prioritized fix recommendations.',
    content: `You are a technical SEO specialist who has audited hundreds of websites and diagnosed the issues that prevent pages from ranking. Your task is to conduct a thorough technical SEO audit of the following website.

## Inputs
- Website URL: [WEBSITE_URL]
- Site Type: [SITE_TYPE] (e.g., SaaS, e-commerce, publisher, local business)
- CMS/Platform: [CMS] (e.g., WordPress, Webflow, Next.js, Shopify)
- Traffic Volume: [MONTHLY_ORGANIC_SESSIONS_ESTIMATE]
- Known Issues: [KNOWN_ISSUES_IF_ANY]

## Technical SEO Audit Framework

### 1. Crawlability
- robots.txt: Is it blocking important pages? Are crawl directives correct?
- XML sitemap: Does it exist? Is it submitted to GSC? Are canonical URLs included? Is it free of 4xx/5xx pages?
- Crawl budget: Are faceted navigation, duplicate parameters, or infinite scroll wasting crawl budget?
- JavaScript rendering: Is important content rendered client-side? Can Googlebot access it?

### 2. Indexability
- noindex tags: Are they applied correctly? Any accidentally applied to important pages?
- Canonical tags: Are self-canonicals correct? Any cross-domain canonical issues?
- Duplicate content: Parameterized URLs, session IDs, print versions, HTTP vs HTTPS duplicates
- Pagination: rel=next/prev deprecated — what's the current recommended approach?

### 3. Core Web Vitals
- LCP (Largest Contentful Paint): Target < 2.5s. Diagnose and fix: image optimization, server response time, render-blocking resources
- FID/INP (Interaction to Next Paint): Target < 200ms. Diagnose: JavaScript execution time, main thread blocking
- CLS (Cumulative Layout Shift): Target < 0.1. Diagnose: image dimensions, dynamic content, web fonts

### 4. Mobile-Friendliness
- Responsive design implementation
- Tap target sizes
- Viewport meta tag
- Mobile-specific content parity

### 5. HTTPS and Security
- SSL certificate validity
- Mixed content warnings
- HSTS headers
- Security headers (X-Frame-Options, CSP)

### 6. Structured Data
- Current schema types implemented
- Validation errors in Rich Results Test
- Opportunities for additional schema types
- JSON-LD vs microdata vs RDFa recommendation

### 7. URL Structure
- URL length and readability
- Dynamic parameters in URLs
- Uppercase vs lowercase consistency
- Trailing slash consistency

### 8. Internal Linking
- Orphan pages (no internal links pointing to them)
- Pages with too few internal links
- Broken internal links
- Link equity distribution

### 9. 404s and Redirect Chains
- Broken external links pointing to your site
- Redirect chain length (should be max 1 redirect)
- Redirect loops
- Soft 404s

## Output
Prioritized issues list organized by severity (Critical/High/Medium/Low), with specific fix recommendations, tool to verify the fix, and estimated implementation effort for each issue.`,
    category: 'seo',
    tags: ['technical-seo', 'audit', 'core-web-vitals', 'crawlability', 'indexability'],
    difficulty: 'advanced',
    useCase: 'Use when conducting a full technical health check before a redesign, migration, or when organic traffic has unexpectedly dropped.',
    authorUsername: 'marketinglab',
    likes: 318,
    saves: 208,
    copies: 840,
    views: 5300,
    trendScore: 318*2 + 208*3 + 840 + 5300*0.2,
    trendingScore: 318*2 + 208*3 + 840 + 5300*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Checklist',
    whyTrending: 'Technical issues silently kill organic traffic. This audit framework surfaces the critical fixes that unlock ranking potential already built through content.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 840,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-12',
  },
  {
    id: 'lib-seo-003',
    title: 'Keyword Research & Clustering Framework',
    slug: 'keyword-research-clustering-framework',
    description: 'Performs a complete keyword research process with intent classification, cluster mapping, difficulty scoring, and content calendar integration.',
    content: `You are an SEO keyword strategist who has driven millions of monthly organic sessions through data-driven keyword programs. Your task is to build a keyword research and clustering framework for the following business.

## Inputs
- Business Type: [BUSINESS_TYPE] (e.g., project management SaaS, accounting firm, e-commerce outdoor gear)
- Geography: [GEOGRAPHY] (e.g., US, UK + Australia, global English-speaking)
- Primary Topic: [PRIMARY_TOPIC]
- Secondary Topics (if any): [SECONDARY_TOPICS]
- Publishing Capacity: [ARTICLES_PER_MONTH]

## Keyword Research Framework

### Seed Keyword Expansion (100+ Ideas)
Process for generating seed keywords from: competitor analysis, customer interview language, product feature terms, problem-solution phrasing, industry jargon vs layman terms, question-based terms, comparison terms, and alternative phrasing. Output: seed keyword list structure with sources.

### Search Intent Classification
For each keyword cluster, classify search intent:
- **Informational**: seeking knowledge (how to, what is, why)
- **Navigational**: looking for a specific site or brand
- **Commercial Investigation**: comparing options before buying
- **Transactional**: ready to take action (buy, sign up, download)
Intent affects content format, word count, CTA placement, and conversion potential.

### Keyword Clustering by Topic
Group keywords that should be targeted on the same page. Clustering logic: same SERP overlap, same search intent, related subtopics. Define the parent keyword and supporting keywords per cluster.

### Difficulty vs Opportunity Scoring
For each cluster: estimated keyword difficulty (use a 1-10 scale), estimated monthly search volume, traffic potential (volume × expected CTR at target position), commercial value multiplier (transactional > commercial > informational). Create a priority score combining these dimensions.

### Quick Wins Identification
Identify the top 20 keywords meeting these criteria: keyword difficulty ≤ 35, monthly volume ≥ 200, strong commercial or transactional intent, no current ranking page of yours targeting it. These are the first 90 days of content investment.

### Content Calendar Mapping
Map clusters to content calendar slots over 12 months. Sequence: quick wins first (months 1-3), supporting cluster content (months 4-8), high-difficulty money terms (months 9-12) after domain authority has grown from publishing lower-competition content.

## Output
Keyword research framework document explaining the full methodology, plus a spreadsheet-ready cluster map structure with all fields defined.`,
    category: 'seo',
    tags: ['keyword-research', 'clustering', 'search-intent', 'content-planning'],
    difficulty: 'intermediate',
    useCase: 'Use when launching a new SEO program, expanding into a new topic area, or conducting annual keyword strategy planning.',
    authorUsername: 'builderai',
    likes: 295,
    saves: 193,
    copies: 790,
    views: 4950,
    trendScore: 295*2 + 193*3 + 790 + 4950*0.2,
    trendingScore: 295*2 + 193*3 + 790 + 4950*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Random publishing without a keyword cluster strategy produces minimal organic results. This framework brings scientific rigor to content prioritization.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 790,
    estimatedTokens: 810,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-14',
  },
  {
    id: 'lib-seo-004',
    title: 'Link Building Outreach Strategy',
    slug: 'link-building-outreach-strategy',
    description: 'Creates a comprehensive link building playbook with 5 acquisition tactics, outreach email templates, anchor text strategy, and toxic link management.',
    content: `You are a link building specialist who has built domain authority for competitive B2B and B2C websites. Your task is to create a comprehensive link building strategy for the following website.

## Inputs
- Website: [WEBSITE]
- Niche: [NICHE]
- Current Domain Rating/Authority: [DA_ESTIMATE]
- Target Domain Rating in 12 Months: [TARGET_DA]
- Monthly Link Building Budget: [BUDGET]
- Content Team Capacity: [CONTENT_RESOURCES]

## Link Building Strategy

### Link Prospect Identification (5 Tactics)

**1. Resource Page Link Building**
How to find resource pages in your niche, qualify them (DA, relevance, followed links), and get listed. Search operators, tools, and qualification criteria.

**2. Broken Link Building**
Process for finding broken links on high-authority sites in your niche, creating replacement content, and pitching the site owner. Tool workflow (Ahrefs/Semrush/Check My Links).

**3. Digital PR**
How to create link-worthy assets (original research, data studies, tools, infographics). Distribution strategy: journalist targeting, HARO/Qwoted, PR Newswire selective use, social amplification.

**4. Guest Posting**
How to identify quality guest post targets (not link farms), pitch effectively, and write content that gets accepted. Qualification criteria for accepting vs declining guest post opportunities.

**5. Link Reclamation**
Find unlinked brand mentions, broken backlinks pointing to your site (that you can redirect), and competitor links you can replicate.

### Link Qualification Criteria
Minimum thresholds for pursuing: DA, relevance score, organic traffic of referring page, link type (followed/nofollow), placement (editorial vs footer vs sidebar).

### Outreach Email Templates (4 Angles)
- Resource page pitch
- Broken link replacement pitch
- Guest post pitch
- Digital PR asset pitch
Each: subject line + 120-word email body + follow-up.

### Personalization Research Process
Exactly what to research before sending an outreach email: 3 things to learn about the site/editor that will make the email feel custom, not templated.

### Follow-Up Sequence
Timing and messaging for 2 follow-ups after the initial pitch. How to follow up without being annoying.

### Anchor Text Strategy
How to diversify anchor text naturally: branded, exact match (limited), partial match, generic, and URL anchors. Target ratios for a healthy backlink profile.

### Link Velocity Targets
How many links to build per month based on current DA and target. How to avoid unnatural velocity spikes.

### Toxic Link Avoidance and Disavow File Management
How to identify toxic links (spam score, link farm patterns), decision criteria for disavowing vs ignoring, and how to build and submit a disavow file.

## Output
Link building playbook with all 4 outreach email templates, personalization research checklist, and 12-month link velocity plan.`,
    category: 'seo',
    tags: ['link-building', 'outreach', 'digital-PR', 'domain-authority', 'backlinks'],
    difficulty: 'advanced',
    useCase: 'Use when launching a link building program, training a new SEO hire on link acquisition, or rebuilding a backlink strategy after a Google penalty.',
    authorUsername: 'devdna',
    likes: 272,
    saves: 178,
    copies: 720,
    views: 4600,
    trendScore: 272*2 + 178*3 + 720 + 4600*0.2,
    trendingScore: 272*2 + 178*3 + 720 + 4600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Playbook',
    whyTrending: 'Backlinks remain a top-3 Google ranking factor. This playbook gives teams a systematic, white-hat approach to earning links at scale.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 720,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-16',
  },
  {
    id: 'lib-seo-005',
    title: 'Local SEO Domination Plan',
    slug: 'local-seo-domination-plan',
    description: 'Creates a complete local SEO strategy with Google Business Profile optimization, citation building, review generation system, and local link tactics.',
    content: `You are a local SEO expert who has helped hundreds of brick-and-mortar businesses dominate their local pack results and drive foot traffic through organic search. Your task is to create a comprehensive local SEO strategy for the following business.

## Inputs
- Business Name: [BUSINESS_NAME]
- City/Region: [CITY/REGION]
- Business Category: [BUSINESS_CATEGORY] (e.g., dental practice, auto repair shop, law firm)
- Number of Locations: [LOCATIONS]
- Current Google Business Profile Status: [CLAIMED / UNCLAIMED / OPTIMIZED]
- Primary Competitors: [TOP_3_LOCAL_COMPETITORS]

## Local SEO Strategy

### Google Business Profile Optimization (Every Field)
Complete optimization guide for every GBP field: business name (exact match vs keyword stuffing risks), category selection (primary + secondary), description (keyword-rich, 750 characters), attributes to enable, products/services section, Q&A seeding, Google Posts strategy (weekly cadence, content types), photo optimization (quantity, quality, geotagging), appointment/booking link setup. What to avoid that triggers suspensions.

### Local Citation Building Plan (Top 20 Directories)
Prioritized list of the 20 most important directories for your business category. For each: directory name, DA, why it matters for this niche, how to claim/create the listing, NAP consistency requirements. Ongoing citation audit process.

### Review Generation System
Automated review request workflow: when to ask (post-purchase trigger), how to ask (SMS vs email vs in-person), review request templates (SMS and email), QR code review links, responding to positive and negative reviews (response templates), review velocity target (how many per month), how to handle fake reviews.

### Local Keyword Strategy
Research process for geo-modified keywords ("plumber in [city]"), near me queries, neighborhood-level targeting, service + location page strategy for multi-location businesses. How to find local keyword volume when tools show low data.

### Local Link Building
Local link sources: chamber of commerce, local newspaper/blog, sponsorships, community organizations, local business associations, cross-referral partnerships. Outreach templates for each.

### LocalBusiness Schema Markup
Complete JSON-LD template for LocalBusiness schema: required fields, recommended fields, how to mark up multiple locations, how to validate.

### Local Content Topics (10 Ideas)
Ten content pieces targeting local search intent specific to this business category and city. For each: title, target keyword, search intent, estimated volume.

### Competitor Local Pack Analysis
How to reverse-engineer what top local pack competitors are doing: their GBP completeness, review count and velocity, citation sources, local backlinks. Template for competitive local audit.

## Output
Complete local SEO action plan with prioritized 90-day task list, all templates, and a monthly maintenance checklist.`,
    category: 'seo',
    tags: ['local-seo', 'google-business-profile', 'citations', 'reviews', 'local-pack'],
    difficulty: 'beginner',
    useCase: 'Use when a local business needs to improve their Google Maps ranking, increase foot traffic from organic search, or recover from a local pack ranking drop.',
    authorUsername: 'contentpro',
    likes: 305,
    saves: 200,
    copies: 810,
    views: 5100,
    trendScore: 305*2 + 200*3 + 810 + 5100*0.2,
    trendingScore: 305*2 + 200*3 + 810 + 5100*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '16 min',
    outputType: 'Plan',
    whyTrending: 'Local pack visibility directly drives phone calls and store visits. Small businesses use this to compete against established local players with a structured approach.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 810,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-seo-006',
    title: 'On-Page SEO Optimization Guide',
    slug: 'on-page-seo-optimization-guide',
    description: 'Optimizes a specific page for a target keyword with title tag, meta description, header structure, semantic keywords, internal links, and E-E-A-T signals.',
    content: `You are an on-page SEO specialist who has optimized thousands of pages to rank in the top 3 for competitive keywords. Your task is to provide a comprehensive on-page optimization guide for the following page and keyword.

## Inputs
- URL or Topic: [URL/TOPIC]
- Primary Keyword: [PRIMARY_KEYWORD]
- Secondary Keywords: [SECONDARY_KEYWORDS]
- Current Ranking (if known): [CURRENT_POSITION]
- Competitor Pages Ranking Above You: [COMPETITOR_URLS_1_TO_3]
- Word Count Target: [CURRENT_WORD_COUNT] (reference current length vs. what's needed)

## On-Page Optimization Guide

### Title Tag Formula (CTR-Optimized)
Write 3 title tag variants under 60 characters. Each should: include the primary keyword near the front, include a benefit or differentiator, avoid duplicate phrasing from meta description. Choose the winner and explain why it will outperform the others on click-through rate.

### Meta Description (with CTA)
Write 2 meta description variants at 150-155 characters. Include: primary keyword, a specific benefit, and a CTA verb. Explain the psychological trigger each version uses.

### H1-H6 Structure
Recommended header hierarchy: H1 (only one, contains primary keyword), H2s (main sections, include secondary keywords), H3s (subsections). Map out the full header structure for this page showing exactly where keywords fit naturally.

### Keyword Placement Rules
- First 100 words: primary keyword must appear naturally
- Body: keyword density guidance (avoid stuffing — aim for natural usage)
- Conclusion: primary keyword + variation
- Image alt text: descriptive + keyword where relevant

### Semantic Keyword Integration
Top 15 semantically related terms and LSI keywords to weave throughout the content. These are words Google expects to see on a page about this topic, based on top-ranking pages.

### Internal Link Additions (3-5)
Identify 3-5 existing pages on your site that should link to this page. For each: anchor text recommendation, brief rationale for why the link makes editorial sense.

### Image Optimization
Alt text formula, file naming convention, compression standards for web, whether to add images to this page and what type (diagram, screenshot, chart).

### Schema Markup Recommendation
Which schema type fits this page (Article, HowTo, FAQ, Product, Review, etc.) and a brief JSON-LD implementation note.

### E-E-A-T Signals to Add
Specific additions to demonstrate Experience, Expertise, Authoritativeness, Trustworthiness: author bio with credentials, publication date + last updated date, external citations, data sources, trust signals (awards, certifications, press mentions).

### Content Length Benchmarking
Compare recommended word count vs. the average of the top 5 ranking pages for the primary keyword. Should you expand, trim, or maintain current length?

## Output
Page optimization checklist (check-box format for implementation) plus rewrite recommendations for the title, meta, headers, and intro paragraph.`,
    category: 'seo',
    tags: ['on-page-seo', 'optimization', 'keyword-placement', 'E-E-A-T', 'meta-tags'],
    difficulty: 'beginner',
    useCase: 'Use before publishing new content or when refreshing existing pages that are ranking on page 2-3 and need an optimization push.',
    authorUsername: 'promptarchitect',
    likes: 280,
    saves: 182,
    copies: 750,
    views: 4700,
    trendScore: 280*2 + 182*3 + 750 + 4700*0.2,
    trendingScore: 280*2 + 182*3 + 750 + 4700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '12 min',
    outputType: 'Checklist',
    whyTrending: 'Pages sitting on position 11-20 often just need on-page optimization to break into the top 10. This prompt systematizes the entire on-page optimization process.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 750,
    estimatedTokens: 790,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-seo-007',
    title: 'Content Gap Analysis & Strategy',
    slug: 'content-gap-analysis-strategy',
    description: 'Identifies content gaps vs top competitors across keyword overlap, SERP features, funnel stages, and search intent mismatches, with a prioritized creation roadmap.',
    content: `You are an SEO content strategist who has identified and closed content gaps that unlocked millions of monthly organic sessions for B2B and B2C websites. Your task is to perform a comprehensive content gap analysis for the following website against its top competitors.

## Inputs
- Your Website: [WEBSITE]
- Competitor 1: [COMPETITOR_1]
- Competitor 2: [COMPETITOR_2]
- Competitor 3: [COMPETITOR_3]
- Topic Area: [TOPIC_AREA] (the subject domain you're analyzing gaps in)
- Current Monthly Organic Traffic: [TRAFFIC]

## Content Gap Analysis Framework

### Keyword Overlap Analysis
Process for identifying: keywords your competitors rank for that you don't, keywords you rank for that they don't (your moat to protect), keywords all 3 competitors rank for but you miss (high priority — proven demand), and keywords only one competitor ranks for (explore if it's an emerging opportunity).

### Topic Coverage Comparison
Beyond keyword-level analysis, map topics at the conceptual level. What major subjects do competitors cover comprehensively that you address only superficially or not at all? Use their content inventory as a starting point.

### SERP Feature Opportunities
For your topic area, identify where competitors are capturing:
- Featured snippets (paragraph/list/table)
- People Also Ask answers
- Image pack results
- Video carousels
- Knowledge panel mentions
Map which of these you're missing and which content format changes would make you eligible.

### Funnel Stage Coverage Gaps
Audit your content by funnel stage: awareness (educational, high-volume), consideration (comparison, best-of, alternatives), decision (product-specific, trial, demo). Where is your content thin? Competitors will dominate the stages you ignore.

### Search Intent Mismatches
Identify pages where you're targeting a keyword but your content format doesn't match the dominant search intent. Examples: you wrote a listicle for a keyword where Google serves step-by-step guides, or you wrote a product page for an informational query.

### Gap Prioritization by Traffic Opportunity × Competitive Difficulty × Business Relevance
Score each gap on three dimensions, weighted by your business goals. Output: priority tier 1 (create in 30 days), tier 2 (create in 60-90 days), tier 3 (create in 90+ days).

### Content Creation Roadmap
Turn the prioritized gap list into a 6-month content creation plan: topics, formats, target keywords, recommended word count, responsible team member, and success metric per piece.

## Output
Content gap report with executive summary, data-backed prioritization, and a month-by-month content creation roadmap.`,
    category: 'seo',
    tags: ['content-gap', 'competitive-analysis', 'content-strategy', 'SERP-features'],
    difficulty: 'intermediate',
    useCase: 'Use during quarterly content planning, before a major content investment, or when organic traffic has plateaued and new topics are needed.',
    authorUsername: 'marketinglab',
    likes: 260,
    saves: 170,
    copies: 695,
    views: 4400,
    trendScore: 260*2 + 170*3 + 695 + 4400*0.2,
    trendingScore: 260*2 + 170*3 + 695 + 4400*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '16 min',
    outputType: 'Report',
    whyTrending: 'Most content strategies are based on intuition. This data-driven gap analysis ensures every new content investment is backed by competitive evidence.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 695,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-22',
  },
  {
    id: 'lib-seo-008',
    title: 'SEO-Optimized Article Writer',
    slug: 'seo-optimized-article-writer',
    description: 'Writes a fully SEO-optimized article with proper header structure, E-E-A-T signals, FAQ section targeting PAA, and internal link suggestions.',
    content: `You are an SEO content writer who has written articles that rank #1 for competitive keywords and drive consistent organic traffic for SaaS companies, publishers, and e-commerce brands. Your task is to write a fully optimized article on the following topic.

## Inputs
- Topic: [TOPIC]
- Primary Keyword: [PRIMARY_KEYWORD]
- Secondary Keywords: [LIST_SECONDARY_KEYWORDS]
- Target Audience: [TARGET_AUDIENCE]
- Content Goal: [GOAL] (rank for keyword / capture featured snippet / drive trial signups / build topical authority)
- Competitor Articles to Beat: [COMPETITOR_URLS_TO_OUTPERFORM]
- Approximate Word Count Target: [WORD_COUNT]

## Article Requirements

### SEO Title (60 Characters Max)
Write 3 title options. Each must include the primary keyword, convey a clear benefit, and be designed to maximize click-through rate from the SERP. Note the character count for each.

### Meta Description (155 Characters Max)
Two meta description variants. Each includes the primary keyword, a compelling reason to click, and a CTA verb. Note character count.

### Opening Paragraph (First 100 Words)
Include the primary keyword in the first 100 words. Open with a hook — a statistic, a bold claim, a relatable scenario, or a direct statement of what the reader will gain. Avoid filler like "In today's digital landscape."

### H2 and H3 Structure
Provide the full outline with H2 and H3 headers. Include secondary keywords naturally in H2s. Structure the content to match the dominant search intent shown by competitors.

### Body Content Requirements
- Write for the reader first, Google second
- Use short paragraphs (3-4 sentences max) and generous white space
- Include relevant statistics with source citations (format: [Source, Year])
- Add expert perspective or quotable insight in at least 2 sections
- Use bullet lists and numbered lists where they aid readability

### FAQ Section (5 Questions Targeting PAA)
Write 5 FAQ entries targeting People Also Ask questions for the primary keyword. For each: the exact question and a 60-100 word direct answer designed to capture a featured snippet.

### Conclusion with CTA
Wrap up with a summary of key takeaways and a contextually relevant CTA aligned to the content goal.

### Internal Link Suggestions
Suggest 4 internal links to other relevant pages on the site, with recommended anchor text and placement in the article.

### Schema Markup Type
Recommend whether this article should use Article, HowTo, or FAQ schema (or a combination) and briefly explain why.

## E-E-A-T Additions
Add an author bio note placeholder, external authority citations (2 minimum), and any trust signals that fit naturally in this content type.

## Output
Complete SEO article ready for editing and publication, plus a separate optimization checklist confirming all technical SEO elements are in place.`,
    category: 'seo',
    tags: ['content-writing', 'SEO-article', 'E-E-A-T', 'FAQ', 'featured-snippet'],
    difficulty: 'beginner',
    useCase: 'Use when briefing content writers, writing SEO content yourself, or creating articles designed to rank for specific target keywords.',
    authorUsername: 'builderai',
    likes: 388,
    saves: 258,
    copies: 1040,
    views: 6200,
    trendScore: 388*2 + 258*3 + 1040 + 6200*0.2,
    trendingScore: 388*2 + 258*3 + 1040 + 6200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Article',
    whyTrending: 'Writing SEO content that actually ranks requires knowing exactly where to place keywords, how to structure headers, and how to satisfy E-E-A-T. This prompt encodes all of that.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 1040,
    estimatedTokens: 920,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-24',
  },
  {
    id: 'lib-seo-009',
    title: 'Schema Markup Implementation Guide',
    slug: 'schema-markup-implementation-guide',
    description: 'Provides JSON-LD code templates for the top 5 schema types, with implementation priority, rich result testing process, and page-type mapping.',
    content: `You are a structured data specialist who has implemented schema markup that generated rich results and improved CTR for e-commerce, SaaS, and content sites. Your task is to build a comprehensive schema markup implementation guide for the following website type.

## Inputs
- Website Type: [WEBSITE_TYPE] (e-commerce / blog / local business / SaaS / portfolio / news publisher)
- CMS/Platform: [CMS]
- Top 5 Page Types by Traffic Volume: [PAGE_TYPES]
- Current Schema Implemented (if any): [EXISTING_SCHEMA]
- Business Goal for Schema: [GOAL] (rich results CTR / local pack / knowledge panel / review stars / FAQ boxes)

## Schema Implementation Guide

### Recommended Schema Types by Page Type
For each major page type on the site, specify:
- Which schema type(s) to implement
- Required vs recommended properties
- The rich result it enables (if any)
- Priority score (1-5 based on traffic potential × rich result availability)

### JSON-LD Code Templates (Top 5 Schemas)
Write complete, production-ready JSON-LD templates for the 5 highest-priority schema types for this site. For each template:
- Complete property structure with placeholder values
- Comments explaining each property
- Required properties clearly marked
- Recommended properties that improve rich result eligibility
- Common implementation mistakes and how to avoid them

### Homepage: Organization + Website Schema
Complete JSON-LD for Organization (name, URL, logo, contact info, sameAs for social profiles) and WebSite (name, URL, potentialAction for sitelinks search box). Explain when to use Organization vs LocalBusiness vs Corporation.

### Breadcrumb Schema
JSON-LD template for BreadcrumbList, how to implement for static vs dynamically generated pages, and how breadcrumbs appear in search results.

### Testing and Validation Process
Step-by-step: Rich Results Test (URL + code snippet testing), Schema Markup Validator, Google Search Console rich results performance monitoring. How to interpret errors vs warnings. How long after implementation to expect GSC data.

### Schema Prioritization by Traffic Potential
Rank the schema types by expected CTR impact. FAQ schema and HowTo schema often provide disproportionate visibility gains — quantify the typical CTR uplift for each.

### Common Schema Mistakes
Top 10 implementation errors that prevent rich results: missing required fields, nesting errors, mismatched schema type to content, schema on noindexed pages, incorrect datePublished format.

## Output
Schema implementation kit: page-type mapping table, 5 JSON-LD code templates ready to copy, testing checklist, and implementation priority guide.`,
    category: 'seo',
    tags: ['schema-markup', 'structured-data', 'JSON-LD', 'rich-results', 'technical-seo'],
    difficulty: 'intermediate',
    useCase: 'Use when implementing schema markup for the first time, auditing existing schema, or trying to qualify for specific rich result types in Google Search.',
    authorUsername: 'devdna',
    likes: 230,
    saves: 152,
    copies: 640,
    views: 4100,
    trendScore: 230*2 + 152*3 + 640 + 4100*0.2,
    trendingScore: 230*2 + 152*3 + 640 + 4100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Code',
    whyTrending: 'Schema markup is one of the fastest CTR improvements available in SEO — yet most sites implement it incorrectly. This guide produces ready-to-use, validated code.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 640,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-26',
  },
  {
    id: 'lib-seo-010',
    title: 'Core Web Vitals Optimization Plan',
    slug: 'core-web-vitals-optimization-plan',
    description: 'Diagnoses and prioritizes Core Web Vitals fixes for LCP, INP, and CLS with specific technical actions, tool recommendations, and expected score improvements.',
    content: `You are a web performance engineer who has improved Core Web Vitals scores for high-traffic websites, recovering and improving their Google search rankings. Your task is to build a Core Web Vitals optimization plan for the following website.

## Inputs
- Website URL: [WEBSITE_URL]
- Tech Stack: [TECH_STACK] (e.g., Next.js on Vercel, WordPress with Elementor, Shopify)
- Current CWV Scores (if known): LCP [X]s / INP [X]ms / CLS [X]
- Page Type to Prioritize: [PAGE_TYPE] (homepage, product pages, blog posts, landing pages)
- Hosting Environment: [HOSTING]

## Core Web Vitals Optimization Plan

### LCP (Largest Contentful Paint) — Target: < 2.5s

**Identify the LCP Element**: Process for finding what Google considers the LCP element using Chrome DevTools and PageSpeed Insights. Common culprits: hero image, H1 text block, above-fold video.

**Optimization Actions by LCP Element Type**:
- Image LCP: WebP/AVIF format, preload link hint, fetchpriority="high", CDN delivery, correct sizes attribute, remove lazy loading from LCP image
- Text LCP: eliminate render-blocking CSS, inline critical CSS, reduce server response time (TTFB < 800ms)
- Video LCP: poster image optimization, preload metadata

**Server Response Time (TTFB)**:
- CDN configuration
- Edge caching strategy
- Database query optimization flags
- Server-side rendering vs static generation decision

### INP (Interaction to Next Paint) — Target: < 200ms

**JavaScript Execution Analysis**:
- Main thread blocking identification (Chrome DevTools Performance panel)
- Code splitting strategy
- Long task identification and breaking up (> 50ms tasks)

**Third-Party Script Audit**:
- Which third-party scripts are blocking the main thread (analytics, chat widgets, ad scripts)
- Deferral strategy for non-critical scripts
- Facade pattern for heavy embeds (YouTube, Maps)

### CLS (Cumulative Layout Shift) — Target: < 0.1

**Identify Layout Shift Sources**: LayoutShift entries in DevTools, cls.wtf tool usage

**Common CLS Fixes**:
- Images without width/height attributes — provide explicit dimensions
- Web fonts causing FOUT/FOIT — font-display: swap, preconnect hints
- Dynamic content injected above existing content — reserve space with CSS min-height
- Ads and embeds — reserve space in advance

### Tools and Workflow
- PageSpeed Insights (field data + lab data)
- Chrome DevTools Performance and Network panels
- Web Vitals Chrome extension for real-time debugging
- Lighthouse CI for automated testing in CI/CD
- Google Search Console Core Web Vitals report for real-user field data

### Expected Score Improvements
For each optimization action: estimated improvement in milliseconds or score points, implementation complexity (Low/Medium/High), developer time estimate.

## Output
CWV optimization roadmap organized by metric, with specific code-level recommendations, implementation order by impact-to-effort ratio, and a testing protocol to measure improvements.`,
    category: 'seo',
    tags: ['core-web-vitals', 'LCP', 'INP', 'CLS', 'web-performance', 'technical-seo'],
    difficulty: 'advanced',
    useCase: 'Use when CWV scores are failing in Google Search Console, before a site migration, or when improving page experience for ranking and conversion rate.',
    authorUsername: 'contentpro',
    likes: 245,
    saves: 162,
    copies: 660,
    views: 4200,
    trendScore: 245*2 + 162*3 + 660 + 4200*0.2,
    trendingScore: 245*2 + 162*3 + 660 + 4200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Plan',
    whyTrending: 'Core Web Vitals are a confirmed Google ranking factor. Poor CWV scores are also correlated with high bounce rates. This plan fixes both problems simultaneously.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 660,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-28',
  },
  {
    id: 'lib-seo-011',
    title: 'E-commerce SEO Architecture',
    slug: 'ecommerce-seo-architecture',
    description: 'Designs a complete e-commerce SEO blueprint covering category pages, product templates, faceted navigation, schema, and internal linking at scale.',
    content: `You are an e-commerce SEO specialist who has designed the organic search architecture for online stores generating $1M–$100M+ in revenue. Your task is to build a comprehensive SEO architecture for an e-commerce site selling the following products.

## Inputs
- Product Category: [PRODUCT_CATEGORY] (e.g., women's athletic wear, B2B industrial components, consumer electronics)
- E-commerce Platform: [PLATFORM] (e.g., Shopify, Magento, WooCommerce, custom)
- Number of SKUs: [SKU_COUNT]
- Number of Category Pages: [CATEGORY_COUNT]
- Current Organic Traffic: [MONTHLY_SESSIONS]

## E-commerce SEO Blueprint

### Category Page Optimization
Template for optimizing category pages: H1 formula (keyword + product type + modifier), category description placement (above vs below products — SEO vs UX tradeoff), filter sidebar optimization, pagination handling, canonical strategy for filtered/sorted URLs. Keyword targeting: one primary keyword per category page, semantic variations in description.

### Product Page Template SEO
Unique title tag formula for each product, meta description template with dynamic fields, H1 = product name formula, unique product description requirements (avoid manufacturer copy), schema markup (Product + Offer + AggregateRating), structured breadcrumb, and cross-linking to category and related products.

### Faceted Navigation Handling
The #1 technical SEO challenge for e-commerce. Decision framework: which facet combinations to allow to be crawled and indexed vs. noindexed vs. blocked. Rules for: size/color/brand filters (often index-worthy) vs. sort order and multi-select combinations (usually noindex). Implementation using canonical tags vs. robots.txt vs. noindex.

### Duplicate Content Prevention
Sources of duplicate content on e-commerce sites and solutions: product variants (canonical to master), site search result pages (noindex), pagination (canonical vs noindex), print pages, HTTPS vs HTTP, www vs non-www, trailing slash.

### XML Sitemap Structure
Recommended sitemap architecture: separate sitemaps for category pages, product pages, blog. What to exclude (noindex, out-of-stock products with no variants, thin pages). Dynamic vs static sitemap generation. Sitemap index file.

### Internal Linking at Scale
Automated internal linking strategies: breadcrumbs, related products, frequently bought together, category → subcategory → product hierarchy, blog posts linking to product/category pages with contextual anchors.

### Product Schema + Review Schema
Complete JSON-LD templates for Product schema with Offer and AggregateRating. How to aggregate reviews for schema. What triggers review stars in search results vs what disqualifies them.

### UGC and Review Content Strategy
How customer reviews improve SEO: unique content on product pages, long-tail keyword capture in review text, review schema for rich results, Q&A sections as additional SEO content.

## Output
E-commerce SEO blueprint document covering all components, with code templates for schema, canonical strategy decision flowchart, and implementation priority checklist.`,
    category: 'seo',
    tags: ['ecommerce-seo', 'product-pages', 'category-pages', 'faceted-navigation', 'schema'],
    difficulty: 'advanced',
    useCase: 'Use when launching a new e-commerce site, migrating platforms, or conducting a full technical and content SEO audit of an existing store.',
    authorUsername: 'promptarchitect',
    likes: 258,
    saves: 168,
    copies: 690,
    views: 4350,
    trendScore: 258*2 + 168*3 + 690 + 4350*0.2,
    trendingScore: 258*2 + 168*3 + 690 + 4350*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Blueprint',
    whyTrending: 'E-commerce SEO has unique challenges that generic SEO guides miss. This blueprint covers every architectural decision that separates stores ranking on page 1 from those buried on page 5.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 690,
    estimatedTokens: 940,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-30',
  },
  {
    id: 'lib-seo-012',
    title: 'Featured Snippet Capture Strategy',
    slug: 'featured-snippet-capture-strategy',
    description: 'Creates a featured snippet targeting plan with content formatting rules, existing content optimization, new content briefs, and monitoring setup.',
    content: `You are an SEO snippets specialist who has engineered featured snippet wins that doubled the organic traffic of specific pages overnight. Your task is to build a strategy to capture featured snippets for the following website in the following topic area.

## Inputs
- Website: [WEBSITE]
- Topic Area: [TOPIC_AREA]
- Current Monthly Organic Traffic: [TRAFFIC]
- Current Featured Snippet Count (if known): [SNIPPET_COUNT]
- Primary Keyword Targets: [LIST_TARGET_KEYWORDS]

## Featured Snippet Capture Strategy

### Snippet Opportunity Type Identification
For each target keyword, identify the dominant snippet type that Google is currently serving: paragraph snippet (usually for "what is," "how does," "why" questions), list snippet (numbered for sequential steps, bulleted for unordered items), table snippet (comparisons, specifications, pricing), and video snippet. The format of your content must match the format of the snippet type Google wants to show.

### Content Formatting Rules for Snippet Capture

**Paragraph Snippets**: Answer the question directly in the first sentence after the H2 that contains the question as a header. Keep the answer paragraph to 40-60 words. Use plain language. Put the definition/answer before any qualification or context.

**List Snippets**: Use exact HTML ordered or unordered list tags. Each list item: 1 line, clear and parallel structure, no more than 8 items (Google typically shows 4-8). Preceded by a H2 or H3 that asks the question.

**Table Snippets**: Use semantic HTML table markup. Include a clear table header row. Keep table to 3-5 columns. Avoid merged cells. The H2 preceding the table should include the keyword.

### Existing Content to Optimize
Identify pages on your site currently ranking positions 2-10 for question-based queries in your topic area. These are your highest-probability snippet wins — you're already relevant, you just need to reformat the answer section.

### New Content to Create
Identify question keywords in your topic area where no ranking page of yours exists. These require new content creation specifically structured for snippet capture.

### How to Structure Headers and Lists for Eligibility
The exact H-tag + content format combination that Google most frequently pulls from. Practical formatting checklist for every page targeting a snippet.

### Monitoring Setup
Tools for tracking which keywords trigger featured snippets, which snippets you own vs competitors, and which snippets you recently won or lost. Review cadence (weekly) and threshold for intervention.

### Iterative Testing Approach
After reformatting for a snippet, how long to wait before assessing results. What to change if you don't win the snippet within 8-12 weeks. A/B testing approach for format variations on high-traffic pages.

## Output
Featured snippet targeting plan listing all target keywords, current snippet owner, opportunity type, formatting change needed, and priority score — plus content templates for each snippet type.`,
    category: 'seo',
    tags: ['featured-snippets', 'SERP-features', 'content-formatting', 'zero-click'],
    difficulty: 'intermediate',
    useCase: 'Use when launching a SERP feature optimization initiative or when key pages are ranking #2-5 and a snippet win would significantly increase traffic without improving position.',
    authorUsername: 'marketinglab',
    likes: 235,
    saves: 155,
    copies: 650,
    views: 4150,
    trendScore: 235*2 + 155*3 + 650 + 4150*0.2,
    trendingScore: 235*2 + 155*3 + 650 + 4150*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Plan',
    whyTrending: 'Featured snippets capture the #0 position and can double organic CTR for a keyword. This strategy systematically engineers snippet wins from existing rankings.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 650,
    estimatedTokens: 830,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-02',
  },
  {
    id: 'lib-seo-013',
    title: 'International SEO & Hreflang Implementation',
    slug: 'international-seo-hreflang-implementation',
    description: 'Designs international SEO strategy with subdomain vs subdirectory decision framework, hreflang code templates, localization strategy, and market-by-market link building.',
    content: `You are an international SEO specialist who has guided the global expansion of websites into 20+ markets, avoiding the hreflang implementation mistakes that silently kill international organic traffic. Your task is to design the international SEO strategy for the following website expansion.

## Inputs
- Website: [WEBSITE]
- Expanding to: [COUNTRIES/LANGUAGES] (e.g., Germany, France, Spain in German, French, Spanish)
- Current Website Tech Stack: [TECH_STACK]
- Content Localization Budget: [BUDGET_TYPE] (full localization / human translation / MT + editing / transcreation for key pages only)
- Launch Timeline: [TIMELINE]

## International SEO Strategy

### URL Structure Decision Framework: Subdomain vs Subdirectory vs ccTLD
Pros and cons of each approach in the context of this expansion. Recommendation with specific rationale based on: team structure, budget, expected traffic volume per market, and link equity considerations. Common mistakes that lead to international cannibalization.

### Hreflang Implementation Guide

**What hreflang does** (and what it does not do — it is not a redirect directive).

**Hreflang attribute format**:
- Language-only (lang="de") vs language + region (lang="de-DE" vs lang="de-AT")
- When to use x-default and how to implement it correctly
- Self-referencing hreflang requirement

**Implementation methods**:
- HTML head implementation (complete code example)
- XML sitemap implementation (complete code example for sitemap with hreflang)
- HTTP header implementation (for PDFs and non-HTML pages)

**Top 10 hreflang mistakes**:
- Missing return tags (the most common error)
- Incorrect language codes
- Pointing to noindexed pages
- Inconsistent URL formats (trailing slash, HTTP vs HTTPS)
- Using hreflang for same-language, different-country content without real content differences

### Content Localization vs Translation Strategy
When to fully localize (transcreation — adapting tone, examples, cultural references) vs translate (accurate, professional, but not culturally adapted) vs machine-translate and edit. Which page types require full localization for SEO success vs. which can be translated more economically.

### International Keyword Research Process
Why you cannot simply translate your English keywords. Research process for each target market: use local tools (Google Trends per country, local keyword data), understand local search behavior differences, identify local competitor share of voice.

### Link Building Per Market
International link building strategy: local industry publications, local business directories, country-specific PR contacts, local influencer partnerships. Why .com links don't transfer authority as effectively to ccTLD versions.

### Geo-Targeting in Google Search Console
How to set geographic target for subdirectories and subdomains, what to do for ccTLDs (automatic), and how to monitor indexation per market in GSC.

## Output
International SEO implementation guide with hreflang code templates (HTML + sitemap), URL structure recommendation, localization decision matrix, and market launch checklist.`,
    category: 'seo',
    tags: ['international-seo', 'hreflang', 'localization', 'multilingual', 'global-seo'],
    difficulty: 'advanced',
    useCase: 'Use when expanding a website into international markets, diagnosing hreflang errors causing cannibalization, or planning a multi-language SEO strategy.',
    authorUsername: 'builderai',
    likes: 210,
    saves: 140,
    copies: 600,
    views: 3900,
    trendScore: 210*2 + 140*3 + 600 + 3900*0.2,
    trendingScore: 210*2 + 140*3 + 600 + 3900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Guide',
    whyTrending: 'International SEO errors are expensive — they cause search engines to show the wrong language to the wrong users. This guide prevents the most costly hreflang mistakes before they happen.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 600,
    estimatedTokens: 910,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-04',
  },
  {
    id: 'lib-seo-014',
    title: 'SEO Reporting Dashboard Design',
    slug: 'seo-reporting-dashboard-design',
    description: 'Designs an SEO reporting system with KPI selection, data source integration, visualization recommendations, and executive summary format for any stakeholder type.',
    content: `You are an SEO analytics specialist who has built reporting systems that transformed how executives and clients understand SEO performance. Your task is to design a comprehensive SEO reporting framework for the following context.

## Inputs
- Client/Stakeholder Type: [CLIENT/STAKEHOLDER_TYPE] (e.g., enterprise CMO, agency client, startup founder, e-commerce head of marketing)
- Reporting Access: Data sources available — Google Search Console [YES/NO], GA4 [YES/NO], Rank Tracking Tool [TOOL], Ahrefs/Semrush [YES/NO]
- Business Goal: [GOAL] (brand awareness growth / lead generation / e-commerce revenue / local traffic)
- Current Reporting Frequency: [CURRENT_FREQUENCY]

## SEO Reporting Framework

### KPI Selection by Business Goal
Map SEO KPIs to the business goal. Avoid vanity metrics. For each business goal, recommend: primary KPIs (2-3 that drive business decisions), secondary KPIs (supporting context), leading indicators (predict future performance), and lagging indicators (confirm past performance).

Core KPI categories: organic visibility (impressions, average position), organic traffic (sessions, users, new vs returning), engagement quality (bounce rate, pages per session, time on page — GA4 equivalents), conversion metrics (goal completions, conversion rate from organic, revenue from organic), and domain health (backlink growth, DA trend, indexation rate).

### Data Sources and Integration
How to connect GSC + GA4 + rank tracking for unified reporting. Recommended tools for dashboard creation: Looker Studio (free, integrates GSC and GA4 natively), SEMrush / Ahrefs reporting modules, Notion / Airtable for narrative reporting. Data refresh frequency per source.

### Report Frequency Design
- **Weekly pulse report**: 1 page — traffic trend, notable ranking changes, technical alerts
- **Monthly performance report**: Full KPI scorecard, content performance, competitive position, key wins, key concerns + recommendations
- **Quarterly strategic report**: Trend analysis, goal vs actual, strategic recommendations for next quarter, competitor benchmarking

### Visualization Recommendations
For each KPI: recommended chart type (line/bar/table/scorecard), time period comparison (MoM, YoY, rolling 90 days), benchmark reference line. How to present declining metrics constructively.

### Competitive Benchmarking
How to set up and report competitive SEO benchmarks: share of voice by keyword category, content gap closure rate, backlink growth rate vs competitors.

### Attribution Model for SEO
How to attribute conversions and revenue to SEO in a multi-touch environment. Difference between last-click (default) and data-driven attribution. How to communicate SEO's contribution to pipeline.

### Anomaly Detection Setup
Automated alerts for: traffic drop > 20% week-over-week, index count drop > 10%, average position drop for top 10 keywords, new manual action in GSC.

### Executive Summary Format
One-page executive summary template: headline metric (traffic or revenue), delta vs last period, 3 wins, 2 concerns, 1 strategic recommendation, next 30-day focus.

## Output
SEO reporting framework document, dashboard specification for Looker Studio implementation, and 3 report templates (weekly/monthly/quarterly) ready for use.`,
    category: 'seo',
    tags: ['SEO-reporting', 'analytics', 'KPIs', 'dashboard', 'GA4', 'GSC'],
    difficulty: 'intermediate',
    useCase: 'Use when setting up a new SEO reporting program, presenting SEO to a new executive stakeholder, or transitioning clients from vanity metrics to business-impact reporting.',
    authorUsername: 'devdna',
    likes: 225,
    saves: 150,
    copies: 625,
    views: 4000,
    trendScore: 225*2 + 150*3 + 625 + 4000*0.2,
    trendingScore: 225*2 + 150*3 + 625 + 4000*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '16 min',
    outputType: 'Framework',
    whyTrending: 'SEO teams that can\'t communicate business impact lose budget. This reporting framework speaks the language of executives: revenue, pipeline, and ROI.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 625,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-06',
  },
  {
    id: 'lib-seo-015',
    title: 'Programmatic SEO Strategy Builder',
    slug: 'programmatic-seo-strategy-builder',
    description: 'Designs a programmatic SEO strategy with template page types, data requirements, unique value generation, internal linking at scale, and indexation strategy.',
    content: `You are a programmatic SEO strategist who has designed and launched pSEO programs that generated hundreds of thousands of indexed pages and millions of monthly organic sessions. Your task is to design a programmatic SEO strategy for the following website.

## Inputs
- Website Type: [WEBSITE_TYPE] (e.g., SaaS tool, marketplace, directory, e-commerce, aggregator)
- Data Source Available: [DATA_SOURCE] (e.g., internal product data, public API, scraped/licensed database, user-generated content)
- Current Monthly Organic Traffic: [TRAFFIC]
- Target Page Count: [TARGET_PAGE_COUNT] (how many programmatic pages to create)
- Primary Keyword Category to Target: [KEYWORD_CATEGORY] (e.g., "[city] + [profession]", "[tool] vs [tool]", "[use case] template")

## Programmatic SEO Strategy

### Template Page Types to Create

**Hub Pages (Category Level)**
High-level pages that aggregate and link to spoke pages. Target: broader head terms. Example: "/templates/project-management/" linking to all project management templates. These build topical authority and distribute link equity to spokes.

**Spoke Pages (Entity Level)**
The core programmatic pages. Target: long-tail, high-intent queries. Each page = one entity combination (e.g., a specific city × profession, a specific tool comparison, a specific use case). These are where the real traffic lives.

**Comparison Pages**
"[Product A] vs [Product B]" or "alternatives to [Product]" pages. High commercial intent. Data requirements: feature matrix, pricing data, pros/cons.

**Location Pages**
"[Service] in [City/State/Region]" pages for service-area businesses or marketplaces. Data requirements: location data, local statistics, local reviews/listings.

### URL Structure
Recommended URL patterns that are: human-readable, keyword-rich, scalable (work for 100 or 100,000 pages), and consistent. Common URL structure mistakes in programmatic SEO.

### Unique Value Generation Per Page (Avoid Thin Content)
The #1 programmatic SEO risk is Google treating pages as thin/duplicate. Strategies for generating uniqueness at scale: dynamic data fields, user-generated content integration, AI-assisted content generation with human review, local data APIs, calculated metrics (e.g., "average salary" computed from dataset), editorial summaries per entity.

### Data Requirements and Sourcing
What data fields you need for each template. Source options: internal database, public APIs (list relevant ones for this use case), licensed data providers, web scraping (legal and ethical considerations), user submissions. Data freshness requirements and update cadence.

### Quality Control Process
How to review programmatic pages before and after launch: random sampling QA checklist, automated quality threshold scoring, traffic-based flagging of underperforming pages, manual review trigger conditions.

### Internal Linking at Scale
Automated internal linking rules: hub links to spokes (comprehensive), cross-linking between related spoke pages, spoke pages link to relevant product/feature pages. Anchor text generation rules for scale.

### Indexation Strategy
Not all programmatic pages should be indexed immediately. Rollout approach: crawl budget allocation, sitemap submission strategy, phased indexation (start with highest-quality pages), monitoring for indexation rate vs crawl rate.

### Canonical Handling for Near-Duplicate Pages
When pages are too similar to each other: canonical strategy, parameter handling, consolidation vs differentiation decision framework.

### Success Metrics
Programmatic SEO-specific metrics: pages indexed / pages submitted ratio, average impressions per page, pages generating at least 1 click per month, revenue attributed to programmatic pages.

## Output
Programmatic SEO blueprint with template specifications, data model, URL structure, quality control process, and a phased launch plan.`,
    category: 'seo',
    tags: ['programmatic-seo', 'scaled-content', 'template-pages', 'indexation', 'automation'],
    difficulty: 'advanced',
    useCase: 'Use when designing a programmatic SEO initiative that will create hundreds or thousands of pages targeting long-tail keyword patterns at scale.',
    authorUsername: 'contentpro',
    likes: 195,
    saves: 130,
    copies: 560,
    views: 3700,
    trendScore: 195*2 + 130*3 + 560 + 3700*0.2,
    trendingScore: 195*2 + 130*3 + 560 + 3700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Blueprint',
    whyTrending: 'Programmatic SEO has become a top-tier growth strategy for SaaS and marketplaces. Teams without a blueprint often build thin content that gets penalized before generating any traffic.',
    bestFor: ['Claude'],
    author: 'contentpro',
    uses: 560,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-08',
  },
]
