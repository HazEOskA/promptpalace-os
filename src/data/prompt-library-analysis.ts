import type { Prompt } from './prompts'

export const ANALYSIS_PROMPTS: Prompt[] = [
  {
    id: 'lib-ana-001',
    title: 'SWOT Analysis Generator with Strategic Insights',
    description:
      'Produces a comprehensive SWOT analysis with actionable strategic recommendations, prioritized initiatives, and cross-quadrant SO/ST/WO/WT strategies.',
    content: `You are a senior strategy consultant. Conduct a rigorous SWOT analysis for [COMPANY_OR_PRODUCT] operating in the [INDUSTRY] space.

## Context
- Company/Product: [COMPANY_OR_PRODUCT]
- Industry: [INDUSTRY]
- Stage: [STAGE] (e.g., early-stage startup, growth, enterprise)
- Primary competitors: [COMPETITORS]
- Current strategic goal: [GOAL]

## Instructions

**Step 1 — Data Gathering**
List all known facts about the entity: revenue/traction metrics, team strengths, technology stack, market position, regulatory environment, and macro trends.

**Step 2 — SWOT Grid**
Populate each quadrant with 5–7 bullet points. Be specific and evidence-based, not generic.
- Strengths: internal advantages that differentiate
- Weaknesses: internal gaps or constraints
- Opportunities: external tailwinds or untapped markets
- Threats: external risks or competitive pressures

**Step 3 — Cross-Quadrant Strategies**
- SO Strategies (leverage strengths to capture opportunities)
- WO Strategies (use opportunities to fix weaknesses)
- ST Strategies (use strengths to neutralize threats)
- WT Strategies (defensive plays to minimize exposure)

**Step 4 — Priority Matrix**
Rank the top 3 strategic initiatives by impact × feasibility, with a 90-day action plan for each.

**Step 5 — Executive Summary**
Write a 3-sentence summary suitable for a board presentation.

Format the output with clear headers, bullet points, and a final priority table.`,
    category: 'analysis',
    tags: ['swot', 'strategy', 'competitive', 'business-planning', 'frameworks'],
    difficulty: 'intermediate',
    uses: 4821,
    saves: 892,
    trending: true,
    trendingScore: 88,
    author: 'StrategyNerd_Kai',
    createdAt: '2024-03-15T09:00:00Z',
    estimatedTokens: 520,
    model: 'Claude 3.5',
    whyTrending: 'Go-to framework for founders and consultants during planning cycles',
    bestFor: ['founders', 'product managers', 'strategy consultants', 'MBA students'],
    slug: 'swot-analysis-generator-strategic-insights',
    useCase: 'Strategic planning and competitive positioning',
    trendScore: 2140,
    featured: true,
  },
  {
    id: 'lib-ana-002',
    title: 'Competitive Landscape Mapping Framework',
    description:
      'Maps an entire competitive landscape across multiple dimensions, identifies white-space opportunities, and generates a positioning strategy.',
    content: `You are a market intelligence analyst. Build a comprehensive competitive landscape map for [MARKET_SEGMENT].

## Inputs
- Market segment: [MARKET_SEGMENT]
- Your company/product: [YOUR_PRODUCT]
- Known competitors: [COMPETITOR_LIST]
- Key differentiating axes (e.g., price vs. features, speed vs. accuracy): [AXES]
- Target customer profile: [ICP]

## Deliverables

**1. Competitor Profiles (for each competitor)**
- Company overview and funding stage
- Core value proposition
- Pricing model
- Target customer segment
- Key strengths and known weaknesses
- Recent strategic moves (last 12 months)

**2. Positioning Matrix**
Create a 2×2 positioning matrix using the two most strategically relevant axes from [AXES]. Place each competitor and your product on the matrix. Describe the quadrants.

**3. Feature Comparison Table**
List top 10 differentiating features as rows. Rate each competitor (1–5) per feature. Highlight gaps where [YOUR_PRODUCT] leads or lags.

**4. White-Space Analysis**
Identify 3 underserved niches or uncontested positioning opportunities with supporting rationale.

**5. Competitive Threats Radar**
Rank the top 5 competitors by threat level (High/Medium/Low) with a one-line explanation for each ranking.

**6. Strategic Recommendations**
Suggest 3 positioning moves [YOUR_PRODUCT] could execute in the next 6 months to strengthen differentiation.

Output all sections in structured markdown with tables where appropriate.`,
    category: 'analysis',
    tags: ['competitive-analysis', 'market-research', 'positioning', 'strategy', 'landscape'],
    difficulty: 'advanced',
    uses: 3104,
    saves: 641,
    trending: false,
    trendingScore: 62,
    author: 'MarketMapper_Priya',
    createdAt: '2024-05-20T14:30:00Z',
    estimatedTokens: 580,
    model: 'GPT-4o',
    bestFor: ['product managers', 'growth teams', 'investors', 'sales enablement'],
    slug: 'competitive-landscape-mapping-framework',
    useCase: 'Market intelligence and go-to-market strategy',
    trendScore: 980,
    featured: false,
  },
  {
    id: 'lib-ana-003',
    title: 'Financial Statement Analysis and Key Ratios',
    description:
      'Analyzes income statements, balance sheets, and cash flow statements to produce ratio analysis, trend commentary, and investment-grade insights.',
    content: `You are a CFA-level financial analyst. Perform a thorough financial statement analysis for [COMPANY_NAME] using the data provided.

## Input Data
Paste the following financial statements (last 3 fiscal years preferred):
- Income Statement: [INCOME_STATEMENT]
- Balance Sheet: [BALANCE_SHEET]
- Cash Flow Statement: [CASH_FLOW]

## Analysis Framework

**1. Profitability Ratios**
Calculate and interpret: Gross Margin, Operating Margin, Net Margin, ROA, ROE, ROIC. Flag any year-over-year changes > ±5 percentage points.

**2. Liquidity Ratios**
Current Ratio, Quick Ratio, Cash Ratio. Assess short-term solvency risk.

**3. Leverage & Solvency Ratios**
Debt-to-Equity, Debt-to-EBITDA, Interest Coverage Ratio. Flag if Debt/EBITDA > 4x.

**4. Efficiency Ratios**
Asset Turnover, Inventory Days, Receivables Days, Payables Days. Identify working capital trends.

**5. Cash Flow Quality**
Compare Net Income to Operating Cash Flow. Calculate Free Cash Flow. Flag if FCF conversion < 70%.

**6. Trend Analysis**
Identify 3 positive trends and 3 concerning trends across the periods.

**7. Peer Benchmarking**
If industry benchmarks are available, compare key ratios to sector medians.

**8. Red Flags & Green Flags**
List up to 5 red flags (e.g., rising DSO, margin compression) and 5 green flags.

**9. Analyst Summary**
Write a 5-sentence analyst commentary suitable for an investment memo.

Present all ratios in a clean table with YoY change columns.`,
    category: 'analysis',
    tags: ['finance', 'financial-analysis', 'ratios', 'investment', 'accounting'],
    difficulty: 'advanced',
    uses: 5432,
    saves: 1087,
    trending: true,
    trendingScore: 91,
    author: 'QuantQuill_Marcus',
    createdAt: '2024-02-08T11:00:00Z',
    estimatedTokens: 620,
    model: 'GPT-4o',
    whyTrending: 'High demand from finance professionals doing due diligence and earnings analysis',
    bestFor: ['analysts', 'investors', 'CFOs', 'finance students', 'M&A teams'],
    slug: 'financial-statement-analysis-key-ratios',
    useCase: 'Investment due diligence, earnings analysis, credit assessment',
    trendScore: 3210,
    featured: true,
  },
  {
    id: 'lib-ana-004',
    title: 'User Research Synthesis and Insight Extraction',
    description:
      'Transforms raw user interview transcripts or survey responses into structured insights, themes, and actionable product recommendations.',
    content: `You are a senior UX researcher. Synthesize the following user research data into actionable product insights.

## Research Input
- Research method: [METHOD] (e.g., interviews, usability tests, diary studies)
- Number of participants: [PARTICIPANT_COUNT]
- Research question: [RESEARCH_QUESTION]
- Raw data: [TRANSCRIPTS_OR_NOTES]

## Synthesis Process

**Step 1 — Affinity Clustering**
Group all observations, quotes, and behaviors into thematic clusters. Label each cluster with a descriptive theme name. List the top 8–12 themes.

**Step 2 — Insight Statements**
For each top-5 theme, write an insight statement using this format:
"[User segment] struggles with / needs / values [observation] because [underlying motivation/context], which leads to [impact/behavior]."

**Step 3 — Frequency & Severity Matrix**
Rate each theme by:
- Frequency: How many participants expressed this? (%)
- Severity: How much does it impact user goals? (1–5)
Plot or list in a 2×2 matrix (High Freq / High Sev = Priority 1).

**Step 4 — Verbatim Evidence**
For each Priority 1 insight, pull 2–3 direct quotes that best illustrate it.

**Step 5 — Jobs-to-Be-Done Mapping**
Identify the core functional, emotional, and social jobs users are hiring the product to do.

**Step 6 — Opportunity Areas**
Translate insights into 5 opportunity statements: "How might we [opportunity] so that [user benefit]?"

**Step 7 — Recommended Next Steps**
Suggest 3 product experiments or design changes tied directly to Priority 1 insights, with success metrics.`,
    category: 'analysis',
    tags: ['ux-research', 'user-insights', 'qualitative', 'product', 'synthesis'],
    difficulty: 'intermediate',
    uses: 2873,
    saves: 574,
    trending: false,
    trendingScore: 55,
    author: 'EmpathyEngine_Zoe',
    createdAt: '2024-07-11T10:00:00Z',
    estimatedTokens: 560,
    model: 'Claude 3.5',
    bestFor: ['UX researchers', 'product managers', 'design leads', 'customer success teams'],
    slug: 'user-research-synthesis-insight-extraction',
    useCase: 'Product discovery, feature prioritization, design strategy',
    trendScore: 740,
    featured: false,
  },
  {
    id: 'lib-ana-005',
    title: 'Root Cause Analysis: 5 Whys and Fishbone Diagram',
    description:
      'Guides a structured root cause investigation using the 5 Whys technique and Ishikawa fishbone framework to surface systemic issues.',
    content: `You are a process improvement expert with expertise in lean and Six Sigma methodologies. Conduct a root cause analysis for the following problem.

## Problem Statement
- Problem: [PROBLEM_STATEMENT]
- First occurrence: [DATE]
- Impact: [IMPACT] (e.g., revenue loss, customer churn, system downtime)
- Affected process/system: [PROCESS_OR_SYSTEM]
- Data available: [DATA_POINTS]

## Analysis Method 1 — 5 Whys

Starting with the problem statement, ask "Why did this happen?" five times in succession, each time using the previous answer as the new input.

Format:
- Problem: [state problem]
- Why 1: [cause] → Because: [answer]
- Why 2: [deeper cause] → Because: [answer]
- Why 3 → Why 4 → Why 5 → Root Cause

Identify whether the root cause is: People / Process / Technology / Environment.

## Analysis Method 2 — Fishbone (Ishikawa) Diagram

Organize potential causes into these 6 categories (use all that apply):
1. People — skills, training, errors, behavior
2. Process — procedures, workflow, controls
3. Technology — systems, tools, automation
4. Materials — inputs, data quality, dependencies
5. Measurement — metrics, monitoring, reporting
6. Environment — organizational, regulatory, external

For each category, list 3–5 contributing factors.

## Synthesis
- Identify the top 3 root causes supported by both methods
- Assign a probability score (%) to each root cause

## Corrective Action Plan
For each root cause:
1. Immediate containment action (within 24 hours)
2. Short-term fix (within 2 weeks)
3. Long-term systemic change (within 90 days)
4. Success metric to confirm resolution`,
    category: 'analysis',
    tags: ['root-cause', 'problem-solving', '5-whys', 'fishbone', 'process-improvement'],
    difficulty: 'intermediate',
    uses: 3689,
    saves: 718,
    trending: false,
    trendingScore: 58,
    author: 'LeanThinkr_Hiroshi',
    createdAt: '2024-04-02T08:00:00Z',
    estimatedTokens: 540,
    model: 'GPT-4o',
    bestFor: ['engineers', 'operations managers', 'quality teams', 'incident responders'],
    slug: 'root-cause-analysis-5-whys-fishbone',
    useCase: 'Incident post-mortems, quality improvement, operational reliability',
    trendScore: 1250,
    featured: false,
  },
  {
    id: 'lib-ana-006',
    title: 'Market Sizing Calculator: TAM, SAM, and SOM',
    description:
      'Walks through both top-down and bottom-up market sizing methodologies to calculate TAM, SAM, and SOM with defensible assumptions.',
    content: `You are a venture capital analyst and market sizing expert. Calculate the Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) for [PRODUCT_OR_BUSINESS].

## Business Context
- Product/Business: [PRODUCT_OR_BUSINESS]
- Target geography: [GEOGRAPHY]
- Target customer segment: [CUSTOMER_SEGMENT]
- Business model: [BUSINESS_MODEL] (e.g., SaaS, marketplace, transactional)
- Average contract/transaction value: [ACV]
- Key assumptions: [ASSUMPTIONS]

## Method 1 — Top-Down Sizing
1. Start with total industry revenue from reputable sources (cite the source type)
2. Apply segmentation filters to isolate the relevant subsegment
3. Calculate TAM = relevant subsegment revenue
4. Apply ICP filters to derive SAM
5. Apply realistic market share capture to derive SOM (typically 1–5% for early stage)

Show each step with the number, the filter applied, and the resulting figure.

## Method 2 — Bottom-Up Sizing
1. Define the unit: number of potential buyers in target segment
2. Estimate frequency of purchase or contract length
3. Apply ACV: Number of buyers × ACV = SAM
4. Apply realistic penetration rate for year 1, year 3, year 5: SOM by year

## Sanity Check
Compare top-down and bottom-up results. If they diverge by > 2×, identify which assumption is the source of variance and stress-test it.

## Summary Table
| Metric | Value | Key Assumption | Confidence |
|--------|-------|----------------|------------|
| TAM    |       |                |            |
| SAM    |       |                |            |
| SOM Y1 |       |                |            |
| SOM Y3 |       |                |            |
| SOM Y5 |       |                |            |

## Investor Narrative
Write 3 sentences framing the market opportunity for a pitch deck.`,
    category: 'analysis',
    tags: ['market-sizing', 'tam-sam-som', 'startup', 'venture-capital', 'go-to-market'],
    difficulty: 'advanced',
    uses: 6214,
    saves: 1143,
    trending: true,
    trendingScore: 94,
    author: 'VCAnalyst_Sofia',
    createdAt: '2024-01-18T16:00:00Z',
    estimatedTokens: 600,
    model: 'GPT-4o',
    whyTrending: 'Essential for fundraising pitches and business case development',
    bestFor: ['founders', 'VCs', 'consultants', 'corporate strategists', 'MBA students'],
    slug: 'market-sizing-tam-sam-som-calculator',
    useCase: 'Fundraising, business case justification, go-to-market planning',
    trendScore: 3450,
    featured: true,
  },
  {
    id: 'lib-ana-007',
    title: 'Survey Data Interpretation and Report Writing',
    description:
      'Transforms raw survey results into a structured insights report with statistical commentary, visualization recommendations, and executive takeaways.',
    content: `You are a market research analyst. Analyze the following survey dataset and produce a professional research report.

## Survey Metadata
- Survey title: [SURVEY_TITLE]
- Sample size: [N]
- Sampling method: [METHOD] (e.g., random, quota-sampled, convenience)
- Response rate: [RESPONSE_RATE]%
- Survey period: [DATE_RANGE]
- Target population: [POPULATION]
- Raw data or summary: [DATA]

## Report Structure

**1. Executive Summary (3–4 sentences)**
Key headline findings the reader must know.

**2. Methodology Note**
Describe sample characteristics, potential biases, and confidence level.

**3. Descriptive Statistics**
For each key question:
- Report mean/median (for scale questions) or top-2-box scores (for Likert)
- Note the distribution shape (skewed, bimodal, normal)
- Flag any statistically significant subgroup differences (by age, role, region, etc.)

**4. Top 5 Findings**
Present each finding as: Headline → Supporting Data → Interpretation → Implication.

**5. Cross-Tabulation Highlights**
Identify 3 interesting correlations or segment differences. Explain what they mean strategically.

**6. Visualization Recommendations**
Recommend the best chart type for the top 6 data points (e.g., bar, pie, likert scale, heatmap) with a reason for each.

**7. Limitations**
List 3 limitations of this dataset that readers should keep in mind.

**8. Recommended Actions**
Translate findings into 5 concrete, prioritized recommendations with the supporting evidence cited.`,
    category: 'analysis',
    tags: ['survey-analysis', 'market-research', 'statistics', 'reporting', 'data-interpretation'],
    difficulty: 'intermediate',
    uses: 2541,
    saves: 498,
    trending: false,
    trendingScore: 47,
    author: 'DataNarrator_Leila',
    createdAt: '2024-06-25T13:00:00Z',
    estimatedTokens: 510,
    model: 'Claude 3.5',
    bestFor: ['market researchers', 'product teams', 'HR analysts', 'customer success'],
    slug: 'survey-data-interpretation-report-writing',
    useCase: 'Market research reporting, NPS analysis, employee engagement surveys',
    trendScore: 620,
    featured: false,
  },
  {
    id: 'lib-ana-008',
    title: 'A/B Test Results Analysis and Recommendations',
    description:
      'Evaluates A/B test results for statistical significance, practical significance, and segmentation effects, then generates a clear ship/no-ship recommendation.',
    content: `You are a data scientist specializing in experimentation. Analyze the following A/B test results and provide a rigorous evaluation.

## Experiment Details
- Test name: [TEST_NAME]
- Hypothesis: [HYPOTHESIS]
- Control variant (A): [CONTROL_DESCRIPTION]
- Treatment variant (B): [TREATMENT_DESCRIPTION]
- Primary metric: [PRIMARY_METRIC]
- Secondary metrics: [SECONDARY_METRICS]
- Test duration: [DURATION]
- Traffic split: [SPLIT] (e.g., 50/50)
- Sample sizes: Control N=[N_CONTROL], Treatment N=[N_TREATMENT]
- Results: [RESULTS_DATA]

## Analysis Steps

**1. Statistical Significance Test**
- State the appropriate test (z-test, t-test, chi-square) and why
- Calculate p-value and compare to alpha (0.05 default)
- State whether the result is statistically significant

**2. Effect Size and Practical Significance**
- Calculate relative lift: (B − A) / A × 100%
- Calculate absolute difference
- Assess practical significance: Is the lift large enough to matter for the business?

**3. Confidence Interval**
Report the 95% CI for the difference. Interpret what the range means for decision-making.

**4. Sample Ratio Mismatch (SRM) Check**
Verify that actual traffic split matches intended split. If SRM detected, flag as a validity threat.

**5. Segmentation Analysis**
Break results down by key segments: [SEGMENTS] (e.g., device, user tenure, geography). Identify heterogeneous treatment effects.

**6. Secondary Metric Guardrails**
Check whether secondary metrics moved in an undesirable direction (cannibalization, negative externalities).

**7. Ship / No-Ship / Iterate Recommendation**
Provide a clear recommendation with 3 supporting reasons. Include any conditions or risks.

**8. Next Experiment Suggestion**
Propose one follow-up experiment based on what was learned.`,
    category: 'analysis',
    tags: ['a-b-testing', 'experimentation', 'statistics', 'data-science', 'optimization'],
    difficulty: 'advanced',
    uses: 4103,
    saves: 832,
    trending: false,
    trendingScore: 72,
    author: 'ExperimentLab_Niko',
    createdAt: '2024-03-30T15:00:00Z',
    estimatedTokens: 640,
    model: 'GPT-4o',
    bestFor: ['data scientists', 'growth engineers', 'product managers', 'CRO specialists'],
    slug: 'ab-test-results-analysis-recommendations',
    useCase: 'Conversion rate optimization, feature experimentation, pricing tests',
    trendScore: 1870,
    featured: false,
  },
  {
    id: 'lib-ana-009',
    title: 'Business Model Canvas Deep Analysis',
    description:
      'Deconstructs any business through all nine Building Blocks of the Business Model Canvas, identifies tensions, and surfaces innovation opportunities.',
    content: `You are a business model innovation consultant trained in Osterwalder's Business Model Canvas methodology. Conduct a deep analysis of [COMPANY_OR_IDEA].

## Business Context
- Company/Idea: [COMPANY_OR_IDEA]
- Stage: [STAGE]
- Industry: [INDUSTRY]
- Available information: [KNOWN_FACTS]

## Canvas Analysis — All 9 Building Blocks

For each block, provide: current state description, strengths, vulnerabilities, and 1 improvement idea.

1. **Customer Segments** — Who are the most important customers? Are they mass market, niche, segmented, diversified, or multi-sided?
2. **Value Propositions** — What value is delivered? Which customer problems are solved? What jobs-to-be-done are addressed?
3. **Channels** — How does the company reach its segments? Assess awareness, evaluation, purchase, delivery, and after-sales phases.
4. **Customer Relationships** — What type of relationship is established with each segment? (Self-service, automated, community, co-creation?)
5. **Revenue Streams** — How does the company generate revenue from each segment? Assess pricing mechanisms and revenue mix health.
6. **Key Resources** — What assets are required? (Physical, intellectual, human, financial.) Which are truly defensible?
7. **Key Activities** — What critical activities does the value proposition require? Where are operational bottlenecks?
8. **Key Partnerships** — Who are the key partners and suppliers? Identify single points of failure.
9. **Cost Structure** — What are the most important costs? Is the model cost-driven or value-driven? Fixed vs. variable cost ratio?

## Tension & Fit Analysis
Identify 3 internal tensions or misalignments between building blocks.

## Blue Ocean Opportunities
Suggest 2 ways to reconfigure the canvas to create an uncontested market space.

## Innovation Levers
List 5 specific, actionable improvements ranked by impact and ease of implementation.`,
    category: 'analysis',
    tags: ['business-model', 'bmc', 'strategy', 'innovation', 'entrepreneurship'],
    difficulty: 'intermediate',
    uses: 3320,
    saves: 665,
    trending: false,
    trendingScore: 60,
    author: 'CanvasBuilder_Amir',
    createdAt: '2024-08-14T09:30:00Z',
    estimatedTokens: 590,
    model: 'Claude 3.5',
    bestFor: ['founders', 'MBA students', 'strategy consultants', 'accelerator coaches'],
    slug: 'business-model-canvas-deep-analysis',
    useCase: 'Business model design, strategic pivots, investor preparation',
    trendScore: 1050,
    featured: false,
  },
  {
    id: 'lib-ana-010',
    title: 'Content Gap Analysis for SEO and Marketing',
    description:
      'Identifies content gaps across the buyer journey and competitor landscape, then prioritizes a content roadmap with keyword and topic recommendations.',
    content: `You are an SEO strategist and content marketing expert. Perform a comprehensive content gap analysis for [BRAND_OR_WEBSITE].

## Inputs
- Brand/Website: [BRAND_OR_WEBSITE]
- Industry/Niche: [NICHE]
- Target audience: [AUDIENCE]
- Primary goal: [GOAL] (e.g., organic traffic, lead generation, brand awareness)
- Top 3 competitors: [COMPETITORS]
- Existing content inventory (summarize or paste): [EXISTING_CONTENT]

## Analysis Framework

**1. Buyer Journey Content Audit**
Map existing content across funnel stages:
- Awareness (TOFU): Does it address industry problems and educational queries?
- Consideration (MOFU): Does it cover solution comparisons, use cases, case studies?
- Decision (BOFU): Does it include pricing, demos, testimonials, FAQs?

Identify which stages are underserved.

**2. Topic Cluster Gap Identification**
List the top 5 pillar topics that should anchor the content strategy. For each pillar, identify 5 cluster subtopics that are missing or underdeveloped.

**3. Competitor Content Benchmarking**
For each competitor in [COMPETITORS]:
- Estimate monthly blog/article output
- Identify 3 topics they consistently cover that [BRAND_OR_WEBSITE] does not
- Note 1 content format they use effectively (video, tools, guides, research)

**4. Keyword Opportunity Matrix**
Identify 15 high-value keyword opportunities segmented by:
- Search intent (informational, navigational, transactional)
- Estimated difficulty (Low/Medium/High)
- Business relevance (1–5)
- Funnel stage

**5. Content Format Gaps**
Identify which formats are missing: original research, interactive tools, video, comparison pages, glossary, templates.

**6. Prioritized Content Roadmap**
Build a 90-day content calendar with 12 recommended pieces, ordered by impact score. Include: title, target keyword, format, funnel stage, word count estimate.`,
    category: 'analysis',
    tags: ['seo', 'content-strategy', 'content-gap', 'marketing', 'keyword-research'],
    difficulty: 'intermediate',
    uses: 5891,
    saves: 1102,
    trending: true,
    trendingScore: 89,
    author: 'SEOScout_Tara',
    createdAt: '2024-02-28T12:00:00Z',
    estimatedTokens: 610,
    model: 'GPT-4o',
    whyTrending: 'Widely used by content teams doing quarterly planning and competitive audits',
    bestFor: ['SEO managers', 'content strategists', 'growth marketers', 'agency teams'],
    slug: 'content-gap-analysis-seo-marketing',
    useCase: 'Content strategy, SEO roadmap planning, competitive content research',
    trendScore: 2780,
    featured: true,
  },
  {
    id: 'lib-ana-011',
    title: 'Qualitative Research Coding and Thematic Analysis',
    description:
      'Applies systematic coding and thematic analysis to qualitative data (interviews, focus groups, open-ends) using both inductive and deductive approaches.',
    content: `You are a qualitative research specialist trained in grounded theory and thematic analysis (Braun & Clarke framework). Analyze the following qualitative data.

## Research Context
- Data type: [DATA_TYPE] (e.g., interview transcripts, focus group notes, open-ended survey responses)
- Number of sources: [N_SOURCES]
- Research question: [RESEARCH_QUESTION]
- Theoretical lens (if any): [LENS] (e.g., feminist, phenomenological, constructivist — or leave blank for inductive)
- Raw data: [RAW_DATA]

## Coding Process

**Phase 1 — Familiarization**
Summarize the data in 3–4 sentences. Note initial impressions and any striking observations.

**Phase 2 — Initial Coding (Open Coding)**
Apply line-by-line or segment-by-segment codes to the data. Generate a codebook with:
- Code name
- Definition (1 sentence)
- Example quote that best illustrates it

Aim for 20–40 initial codes.

**Phase 3 — Focused Coding**
Group initial codes into higher-order categories. Collapse, split, or rename codes as needed. Present the final code hierarchy (categories → subcodes).

**Phase 4 — Theme Development**
Identify 4–6 overarching themes. For each theme:
- Theme name and descriptive label
- Narrative description (2–3 sentences)
- Supporting codes it encompasses
- 2 verbatim quotes as evidence
- Relationship to the research question

**Phase 5 — Thematic Map**
Describe the relationships between themes (e.g., Theme A enables Theme B; Themes C and D are in tension).

**Phase 6 — Trustworthiness Check**
Address: credibility, transferability, dependability, and confirmability. Suggest one member-checking or peer-debriefing step.

**Phase 7 — Research Implications**
List 4 implications or recommendations arising from the themes.`,
    category: 'analysis',
    tags: ['qualitative-research', 'coding', 'thematic-analysis', 'grounded-theory', 'research-methods'],
    difficulty: 'advanced',
    uses: 1872,
    saves: 412,
    trending: false,
    trendingScore: 44,
    author: 'QualResearch_Nina',
    createdAt: '2024-09-05T10:00:00Z',
    estimatedTokens: 580,
    model: 'Claude Opus',
    bestFor: ['academic researchers', 'UX researchers', 'social scientists', 'doctoral students'],
    slug: 'qualitative-research-coding-thematic-analysis',
    useCase: 'Academic research, ethnographic studies, deep customer research',
    trendScore: 380,
    featured: false,
  },
  {
    id: 'lib-ana-012',
    title: 'Performance Metrics Dashboard Interpretation',
    description:
      'Reads a set of business metrics or KPIs and produces a structured performance narrative with anomaly detection, trend commentary, and prioritized actions.',
    content: `You are a business intelligence analyst. Interpret the following performance dashboard data and produce a comprehensive analysis report.

## Dashboard Context
- Business unit/product: [BUSINESS_UNIT]
- Reporting period: [PERIOD] (e.g., Q3 2024, week of Nov 4)
- Metrics data: [METRICS_DATA]
- Targets/benchmarks: [TARGETS]
- Prior period data: [PRIOR_PERIOD_DATA]

## Analysis Protocol

**1. Headline Performance Summary**
Write 3 bullet points covering: (a) overall performance vs. target, (b) biggest win, (c) biggest concern.

**2. Metric-by-Metric Commentary**
For each KPI:
- Actual vs. target: % variance
- Actual vs. prior period: % change
- Trend direction: ↑ ↓ → (improving/declining/stable)
- One-sentence interpretation of what's driving the movement

**3. Anomaly Detection**
Flag any metrics that deviate > 15% from trend or target. For each anomaly:
- Name the metric
- Quantify the deviation
- Propose 2–3 possible root causes

**4. Leading vs. Lagging Indicators**
Separate the metrics into leading indicators (predict future performance) and lagging indicators (confirm past performance). Note any warning signals in the leading indicators.

**5. Correlation Analysis**
Identify 3 pairs of metrics that appear to be moving together or in opposition. Explain the likely causal relationship.

**6. Segment Breakdown**
If segment data is available in [METRICS_DATA], identify which segments are over- or under-performing and why.

**7. Prioritized Action Items**
List 5 recommended actions ranked by urgency × impact. For each: action, owner role, target metric, timeline.

**8. Next Review Focus**
Identify 3 metrics to watch most closely in the next reporting period and why.`,
    category: 'analysis',
    tags: ['metrics', 'kpi', 'business-intelligence', 'dashboard', 'performance-analysis'],
    difficulty: 'intermediate',
    uses: 4267,
    saves: 854,
    trending: false,
    trendingScore: 66,
    author: 'MetricsMaestro_Jin',
    createdAt: '2024-04-18T14:00:00Z',
    estimatedTokens: 550,
    model: 'Claude 3.5',
    bestFor: ['business analysts', 'product managers', 'executive teams', 'operations leads'],
    slug: 'performance-metrics-dashboard-interpretation',
    useCase: 'Weekly/monthly business reviews, OKR tracking, executive reporting',
    trendScore: 1560,
    featured: false,
  },
  {
    id: 'lib-ana-013',
    title: 'Risk Assessment and Mitigation Framework',
    description:
      'Conducts a systematic risk identification, probability-impact scoring, and mitigation planning exercise suitable for projects, products, or strategic initiatives.',
    content: `You are an enterprise risk management consultant. Conduct a comprehensive risk assessment for [PROJECT_OR_INITIATIVE].

## Context
- Project/Initiative: [PROJECT_OR_INITIATIVE]
- Organization type: [ORG_TYPE]
- Scope and objectives: [SCOPE]
- Timeline: [TIMELINE]
- Stakeholders: [STAKEHOLDERS]
- Known constraints: [CONSTRAINTS]

## Risk Identification

**Step 1 — Risk Brainstorm**
Using PESTLE + Project-specific lenses, identify all potential risks:
- Political/Regulatory risks
- Economic/Financial risks
- Social/People risks
- Technological risks
- Legal/Compliance risks
- Environmental/Operational risks
- Strategic/Market risks

Generate a minimum of 20 candidate risks.

**Step 2 — Risk Register**
For each risk, complete the following fields:
| Risk ID | Risk Description | Category | Probability (1–5) | Impact (1–5) | Risk Score | Risk Owner |
|---------|-----------------|----------|-------------------|--------------|------------|------------|

Sort by Risk Score (descending).

**Step 3 — Risk Heat Map**
Categorize risks into quadrants:
- Critical (High Probability, High Impact) — requires immediate mitigation
- Significant (Low Probability, High Impact) — requires contingency plans
- Manageable (High Probability, Low Impact) — requires monitoring controls
- Acceptable (Low Probability, Low Impact) — accept and monitor

**Step 4 — Mitigation Strategies**
For the top 10 risks by score, provide:
- Avoidance strategy (eliminate the root cause)
- Reduction strategy (reduce probability or impact)
- Transfer strategy (insurance, contracts, partnerships)
- Acceptance rationale (if no mitigation is cost-effective)

**Step 5 — Contingency Plans**
For Critical risks, write a one-page contingency plan: trigger condition, response owner, response steps, recovery timeline, communication protocol.

**Step 6 — Risk Monitoring Plan**
Define the review cadence, risk indicators to track, and escalation thresholds.`,
    category: 'analysis',
    tags: ['risk-management', 'risk-assessment', 'project-management', 'mitigation', 'governance'],
    difficulty: 'advanced',
    uses: 2988,
    saves: 598,
    trending: false,
    trendingScore: 53,
    author: 'RiskRadar_Elena',
    createdAt: '2024-05-07T11:00:00Z',
    estimatedTokens: 630,
    model: 'GPT-4o',
    bestFor: ['project managers', 'PMOs', 'compliance teams', 'startup operators', 'board advisors'],
    slug: 'risk-assessment-mitigation-framework',
    useCase: 'Project planning, product launches, regulatory compliance, investment decisions',
    trendScore: 820,
    featured: false,
  },
  {
    id: 'lib-ana-014',
    title: 'Customer Journey Mapping and Experience Analysis',
    description:
      'Constructs a detailed customer journey map across all touchpoints, identifies friction points and emotional highs/lows, and generates CX improvement priorities.',
    content: `You are a customer experience strategist. Build a comprehensive customer journey map and experience analysis for [COMPANY_OR_PRODUCT].

## Context
- Company/Product: [COMPANY_OR_PRODUCT]
- Customer persona: [PERSONA_NAME] — [PERSONA_DESCRIPTION]
- Journey scenario: [SCENARIO] (e.g., first-time purchase, onboarding to paid, renewal)
- Available data: [DATA_SOURCES] (e.g., NPS scores, support tickets, session recordings, interviews)

## Journey Mapping Framework

**Stage Definition**
Define 5–7 journey stages from [TRIGGER] to [GOAL]. Name each stage with an active verb phrase (e.g., "Discovering the Solution," "Evaluating Options").

**For Each Stage, Map:**

1. **Customer Actions** — What is the customer doing? (list 3–5 behaviors)
2. **Thoughts** — What are they thinking? (key questions or concerns)
3. **Emotions** — Rate emotional experience: 1 (frustrated) to 5 (delighted). Note key feeling words.
4. **Touchpoints** — Which channels, tools, or people do they interact with?
5. **Pain Points** — What friction, confusion, or obstacles exist?
6. **Moments of Delight** — What positive surprises or moments of ease occur?
7. **Backend Processes** — Which internal teams/systems are involved (visible backstage)?

## Emotion Curve
Plot the emotional score (1–5) across all stages. Identify:
- The lowest point (biggest pain): [STAGE]
- The highest point (delight moment): [STAGE]
- Any emotional cliff-drops between stages

## Opportunity Prioritization Matrix
List the top 8 improvement opportunities. Score each by:
- Customer impact (1–5)
- Business value (1–5)
- Implementation effort (1–5)
- Quick win potential (Y/N)

## Top 5 CX Recommendations
For each: specific change, expected emotional impact, owner team, and 1 success metric.

## Key Metrics to Track
Suggest 5 KPIs that would signal journey improvement over time.`,
    category: 'analysis',
    tags: ['customer-journey', 'cx', 'ux', 'touchpoints', 'experience-design'],
    difficulty: 'intermediate',
    uses: 3756,
    saves: 751,
    trending: false,
    trendingScore: 68,
    author: 'JourneyArchitect_Rosa',
    createdAt: '2024-06-03T10:30:00Z',
    estimatedTokens: 590,
    model: 'Claude 3.5',
    bestFor: ['CX designers', 'product managers', 'customer success', 'marketing teams'],
    slug: 'customer-journey-mapping-experience-analysis',
    useCase: 'CX optimization, onboarding redesign, churn reduction, brand experience',
    trendScore: 1340,
    featured: false,
  },
  {
    id: 'lib-ana-015',
    title: 'Trend Analysis and Future Scenario Planning',
    description:
      'Synthesizes macro, industry, and technology trends into structured future scenarios with strategic implications for any business or domain.',
    content: `You are a futurist and strategic foresight consultant. Conduct a trend analysis and scenario planning exercise for [DOMAIN_OR_INDUSTRY].

## Context
- Domain/Industry: [DOMAIN_OR_INDUSTRY]
- Time horizon: [HORIZON] (e.g., 2–3 years, 5 years, 10 years)
- Organization perspective: [ORG_PERSPECTIVE] (e.g., incumbent, startup, policymaker)
- Key strategic question: [STRATEGIC_QUESTION]

## Part 1 — Trend Identification and Analysis

**STEEP Trend Scan**
Identify 3–4 significant trends in each category:
- Societal: demographic shifts, behavior changes, cultural movements
- Technological: emerging technologies, platform shifts, automation
- Economic: macroeconomic conditions, funding environments, cost curves
- Environmental: climate, regulation, resource constraints
- Political/Regulatory: policy changes, geopolitical shifts, compliance

For each trend, rate:
- Certainty: How likely is this trend to continue? (High/Medium/Low)
- Impact: How significant is the impact on [DOMAIN_OR_INDUSTRY]? (1–5)
- Time to mainstream: < 2 years / 2–5 years / 5+ years

**Megatrend Synthesis**
Identify the top 5 megatrends (convergences of multiple STEEP trends). Name and describe each.

## Part 2 — Scenario Planning (2×2 Matrix Method)

**Step 1 — Critical Uncertainties**
Identify the 2 most impactful AND most uncertain driving forces. These become the axes.

**Step 2 — Four Scenarios**
Name and describe each quadrant scenario (200 words each):
- Scenario A (High/High): [Name] — describe the world
- Scenario B (High/Low): [Name] — describe the world
- Scenario C (Low/High): [Name] — describe the world
- Scenario D (Low/Low): [Name] — describe the world

For each scenario: winners, losers, disrupted business models, new opportunities.

## Part 3 — Strategic Implications

**Robust Strategies**
Identify 3 strategies that create value across all 4 scenarios (hedging plays).

**Scenario-Specific Bets**
For the most probable scenario, identify 3 high-conviction bets.

**Early Warning Indicators**
List 5 signals that would indicate which scenario is materializing, so you can pivot early.

**Strategic Recommendations**
Synthesize into a 5-point strategic agenda for [ORG_PERSPECTIVE] given the foresight analysis.`,
    category: 'analysis',
    tags: ['trend-analysis', 'scenario-planning', 'foresight', 'strategy', 'futures'],
    difficulty: 'advanced',
    uses: 2134,
    saves: 467,
    trending: true,
    trendingScore: 82,
    author: 'FutureFrame_Dani',
    createdAt: '2025-01-12T09:00:00Z',
    estimatedTokens: 720,
    model: 'Claude Opus',
    whyTrending: 'Growing demand for structured foresight amid rapid AI and macroeconomic shifts',
    bestFor: ['strategy teams', 'consultants', 'innovation leads', 'policy teams', 'VCs'],
    slug: 'trend-analysis-future-scenario-planning',
    useCase: 'Long-range strategic planning, innovation roadmaps, policy design',
    trendScore: 1890,
    featured: false,
  },
]
