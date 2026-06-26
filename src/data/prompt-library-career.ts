import type { Prompt } from './prompts'

export const CAREER_PROMPTS: Prompt[] = [
  {
    id: 'lib-car-001',
    title: 'Resume Rewrite & ATS Optimizer',
    slug: 'resume-rewrite-ats-optimizer',
    description: 'Transform a resume for [TARGET_ROLE] with achievement-focused bullets, ATS keyword integration, and an executive summary that passes automated screening.',
    content: `You are a professional resume writer and ATS optimization expert who has helped thousands of candidates land interviews at top companies. Rewrite the resume for [NAME] applying to [TARGET_ROLE].

## ATS Optimization Foundation
Before rewriting any content, conduct a keyword analysis:
- Pull the top 15 keywords from the [TARGET_ROLE] job description (both explicit skills and implied competencies)
- Identify which keywords are currently absent from the resume
- Note where each keyword should be naturally integrated

ATS systems score resumes against job descriptions. A resume missing 30%+ of the key terms is auto-rejected before any human reads it.

## Executive Summary (3 Sentences)
Replace the generic objective statement with a 3-sentence executive summary:
- Sentence 1: Professional identity + years of experience + domain expertise
- Sentence 2: Biggest career achievement with a specific metric
- Sentence 3: What you bring to this specific role

The executive summary should contain 3–5 keywords from the target job description. Write it in third person implied (no "I" statements).

## Bullet Point Transformation — Achievement Formula
Apply this formula to every bullet point: **Action Verb (past tense, specific) + Achievement + Quantified Impact + Context**

### Rules for Achievement Bullets
- Lead with the strongest action verb available (not "responsible for" — never use "responsible for")
- Quantify wherever possible: dollars, percentages, time savings, scale, team size, user numbers
- If no hard metric exists, use relative impact language: "reduced time by approximately half", "grew team from 3 to 12"
- One achievement per bullet — never combine two achievements into one bullet with "and"
- Maximum 2 lines per bullet — if it runs to 3 lines, it needs to be cut

### Action Verb Bank by Function
Provide 20 strong action verbs appropriate for [TARGET_ROLE]:
- Leadership verbs (for managing teams and projects)
- Growth verbs (for revenue, users, growth outcomes)
- Technical verbs (for building, architecting, implementing)
- Analysis verbs (for research, data, insight generation)
- Communication verbs (for presenting, writing, influencing)

## Three Top Experiences — Full Rewrite
Select the 3 most relevant experiences for [TARGET_ROLE] and provide a complete bullet rewrite for each:

For each experience:
- **Role and company** (retained as-is)
- **Original bullets** (show the before)
- **Rewritten bullets** (3–5 bullets per role, all following the achievement formula)
- **Keywords integrated** (list which target keywords were incorporated)

## Skills Section Curation
The skills section is heavily weighted in ATS parsing. Optimize it:
- Group skills by category: Technical, Soft Skills, Tools/Platforms, Certifications
- Prioritize skills that appear in the job description
- Remove outdated or irrelevant skills that dilute keyword density
- Recommended skills additions based on [TARGET_ROLE] requirements

## Accomplishment Statements for Remaining Experiences
For experiences not fully rewritten: 5 accomplishment statements that can be adapted to any role in [NAME]'s background:
- Each follows the achievement formula
- Each is specific enough to be memorable and provable in an interview

## ATS Score Estimate
After the rewrite, estimate the ATS score improvement:
- Original estimated keyword match rate (% of target keywords present before rewrite)
- New estimated keyword match rate (% after rewrite)
- Format compliance check: standard headings, no tables or text boxes, single-column where possible, no headers or footers with critical information

## Formatting Recommendations
- Length: 1 page for under 10 years of experience; 2 pages maximum for senior roles
- Font: Arial, Calibri, or Garamond — 10–12pt body
- File format: .docx for ATS submissions (PDF loses formatting in some ATS systems)
- Section order for [TARGET_ROLE]: Summary → Experience → Skills → Education (for experienced candidates)

## Output
Rewritten executive summary, 3 fully rewritten experience sections with before/after bullets, optimized skills section, accomplishment statement bank, ATS score estimate, and formatting checklist.`,
    category: 'career',
    tags: ['resume', 'ats', 'job-search', 'career-development', 'job-application'],
    difficulty: 'beginner',
    useCase: 'Use when a resume is not generating interview callbacks or when applying to a highly competitive role that requires ATS optimization.',
    authorUsername: 'contentpro',
    likes: 395,
    saves: 258,
    copies: 1020,
    views: 6100,
    trendScore: 395*2 + 258*3 + 1020 + 6100*0.2,
    trendingScore: 395*2 + 258*3 + 1020 + 6100*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '10 min',
    outputType: 'Document',
    whyTrending: 'Over 75% of resumes are filtered by ATS before a human sees them; keyword optimization and achievement framing are the two highest-leverage improvements any candidate can make.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 1020,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-25',
  },
  {
    id: 'lib-car-002',
    title: 'Job Interview Preparation System',
    slug: 'job-interview-preparation-system',
    description: 'Complete interview prep kit: company research brief, 20 role-specific questions, STAR stories, technical prep, questions to ask, negotiation phrases, and red flags.',
    content: `You are an interview coach who has prepared candidates for roles at top companies across every industry. Build a complete interview preparation system for [ROLE] at [COMPANY].

## Company Research Brief
A focused research summary that a candidate can master in 2–3 hours:

### Company Intelligence
- Business model: how does [COMPANY] make money and what are the key revenue drivers?
- Recent news: the 3 most important developments from the last 6 months (funding, product launches, leadership changes, acquisitions, controversies)
- Competitive landscape: [COMPANY]'s top 3 competitors and [COMPANY]'s stated differentiation
- Culture signals: what do current and former employees say on Glassdoor, Blind, and LinkedIn?
- The hiring manager: what can be learned from their LinkedIn and public writing?

### Why This Creates Interview Advantage
How to weave company knowledge into answers naturally — not as name-dropping but as genuine context that demonstrates you understand the business the interviewer is building.

## Role-Specific Question Bank (20 Questions)
Questions organized by interview type:

### Behavioral Questions (8 questions)
STAR-method questions specifically likely for [ROLE] at [COMPANY]:
1–8: questions about the specific competencies this role requires (leadership, cross-functional collaboration, data-driven decisions, handling failure, stakeholder management, etc. — calibrated to [ROLE])

### Situational / Hypothetical Questions (6 questions)
Scenario-based questions that interviewers use to assess judgment:
9–14: "If you were 3 months into this role and discovered X, what would you do?" format questions relevant to [ROLE]

### Technical or Case Questions (6 questions)
Functional knowledge questions specific to [ROLE]:
15–20: Questions that test domain expertise and analytical thinking

## STAR Story Library (10 Stories)
For each of 10 key behavioral themes, provide a STAR story framework:
- **Situation**: the specific context (when, where, what was at stake)
- **Task**: your specific responsibility
- **Action**: what you specifically did (use "I" not "we")
- **Result**: the specific, quantified outcome

10 themes to prepare:
1. Biggest professional achievement
2. A time you failed and what you learned
3. A time you led without formal authority
4. A time you handled conflict with a colleague
5. A time you had to make a decision with incomplete information
6. A time you had to push back on your manager
7. A time you managed competing priorities under pressure
8. A time you learned something quickly that was outside your expertise
9. A time you turned around a failing project or relationship
10. A time you influenced a significant organizational decision

For each, provide the framework as a fill-in template + a strong example answer to illustrate.

## Technical / Case Preparation Guide
For [ROLE], the specific technical or domain knowledge areas to prepare:
- Core concepts to review (5 areas)
- Resources for each area (specific articles, books, or practice tools)
- How to handle a question where you do not know the answer (the answer that shows intellectual honesty + problem-solving approach)

## Questions to Ask the Interviewer (8 Questions)
Questions that demonstrate strategic thinking and genuine interest:
- 2 questions about the role itself (expectations, success metrics)
- 2 questions about the team and culture
- 2 questions about the company's strategic direction
- 2 questions about the interviewer's personal experience

Rule: never ask about salary, benefits, or vacation time in an initial interview. Never ask questions where the answer is clearly on the website.

## Salary Negotiation Phrases
3 phrases to use when salary comes up before an offer is made:
1. Deferring without closing off the conversation
2. Providing a range when pressed
3. Gathering information without anchoring yourself

Full negotiation playbook is in a separate prompt — these phrases handle the common early-stage salary conversation.

## Thank You Email Template
A 3-paragraph thank you email template:
- Paragraph 1: specific callback to a conversation moment that mattered
- Paragraph 2: a new thought or insight since the interview that adds value
- Paragraph 3: reaffirm interest and next step request

Send within 2 hours of the interview. The candidate who sends the most specific, least generic thank you note stands out.

## Interview Red Flags
5 red flags to watch for during the interview that signal a problematic role or company:
- Inability to articulate what success looks like in the first 90 days
- High turnover in the role or team (ask directly: "How long has the average person in this role been here?")
- Vague or inconsistent answers about compensation range
- Interviewer speaks negatively about colleagues or leadership
- Disorganized or disrespectful interview process (this is how they treat you as a candidate — it predicts culture)

## Output
Company research brief, 20 role-specific questions with suggested approaches, 10 STAR story templates, technical prep guide, 8 questions to ask, salary phrase scripts, thank you email template, and red flag checklist.`,
    category: 'career',
    tags: ['interview', 'job-search', 'interview-prep', 'star-method', 'career'],
    difficulty: 'intermediate',
    useCase: 'Use when preparing for any consequential job interview, from screening call through final round.',
    authorUsername: 'marketinglab',
    likes: 405,
    saves: 262,
    copies: 1060,
    views: 6250,
    trendScore: 405*2 + 262*3 + 1060 + 6250*0.2,
    trendingScore: 405*2 + 262*3 + 1060 + 6250*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '12 min',
    outputType: 'Kit',
    whyTrending: 'Interview preparation is correlated directly with offer rates; structured prep systems level the playing field for candidates without expensive coaching.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'marketinglab',
    uses: 1060,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-28',
  },
  {
    id: 'lib-car-003',
    title: 'Salary Negotiation Playbook',
    slug: 'salary-negotiation-playbook',
    description: 'Complete salary negotiation guide: BATNA development, first offer response scripts, counter-offer strategies for 3 scenarios, total comp beyond base, and 5 objection handlers.',
    content: `You are a compensation negotiation coach who has helped thousands of professionals negotiate higher salaries. Build a complete salary negotiation playbook for [OFFER].

## Negotiation Foundation

### Market Rate Research
You cannot negotiate effectively without knowing the market. Benchmark [OFFER] against:
- Levels.fyi (tech roles — highly specific to level and company)
- LinkedIn Salary Insights
- Glassdoor and Blind salary data
- Radford or Mercer surveys (enterprise roles)
- Peer network (the most accurate source — ask people in similar roles)

How to triangulate a salary range: use 3+ sources, weight by recency and role specificity. Document your finding as a range, not a single number.

### BATNA Development
Your Best Alternative to a Negotiated Agreement is your most powerful negotiation tool. If you have no BATNA, you have no leverage:
- Current job + counter-offer possibility: have you maximized your current role's offer?
- Other active processes: are there other offers or near-offers you can reference?
- Walk-away number: what is the absolute minimum you would accept and still take the role?

Without a BATNA, consider delaying the negotiation until you have one.

## The Offer Evaluation Framework
Before negotiating, understand what you are actually negotiating. Total compensation components:
- **Base salary**: negotiating this has compounding effects on future raises and other offers
- **Annual bonus**: target vs actual and how it has historically paid out
- **Equity**: vesting schedule, strike price (for options), current 409A valuation, dilution risk
- **Signing bonus**: one-time — use this as your "meet in the middle" variable
- **Benefits**: health insurance premiums, 401k match, PTO, parental leave — these have dollar values
- **Title**: this has market value implications for your next negotiation
- **Flexibility**: remote work, hours, scope of role — not dollar amounts but real value

Calculate total comp, not just base salary.

## Negotiation Scripts

### When to Negotiate (Never Accept on the Spot)
Script for buying time after receiving an offer:
"Thank you so much — I'm genuinely excited about this opportunity. Can I have [24-48 hours] to review the full package before I respond? I want to give this the thoughtful consideration it deserves."

### First Offer Response (3 Scenarios)

**Scenario 1: Offer is below market**
"Thank you for the offer. I'm very excited about the role and the team. Based on my research into market compensation for [ROLE] at this level, and given my [specific differentiator: X years of specialized experience / quantified achievement], I was expecting something closer to [$AMOUNT]. Is there flexibility to get there?"

**Scenario 2: Offer is at market but you want more**
"I really appreciate the offer and I'm very interested. I want to be transparent: I have [another process / competing offer / current compensation at $X]. To make this an easy yes, I'd need the base to be at [$AMOUNT]. Can we make that work?"

**Scenario 3: Offer requires relocation or risk premium**
"I'm excited about this opportunity. Given the relocation involved / the career risk of moving from a senior role / the stage of the company, I'd feel a lot better about [base salary / equity / signing bonus] being at [$X]. What's possible?"

### Number Anchoring vs Range
**Anchoring** (recommended): state a specific number first, not a range. The first number said becomes the psychological anchor for the negotiation.
- Anchor high (15–20% above your target) — you can always come down
- If they ask for your number first, ask about budget before answering

**Range** (only if pressed): if you must give a range, make your target number the bottom of the range ("I'm looking for $150K to $165K" — you should expect to land at $150K, not the midpoint).

## Counter-Offer Mechanics

### After They Counter (3 Common Responses)

**If they meet you halfway**: "I appreciate you moving on this. I can accept at [$X] if you can add [$Y signing bonus] to close the gap."

**If they say the offer is firm**: "I understand. Can we revisit in 6 months if I'm performing well? I'd like that in writing as part of my offer letter."

**If they say it's above budget**: "I respect that. What budget parameters are you working within? I want to find a creative way to make this work — whether that's a different structure, equity, or a path to [target compensation] at a defined milestone."

## Beyond Base Salary — Negotiating Total Comp
When base salary is truly fixed, negotiate on these variables:
- Signing bonus (covers the annual bonus you are leaving behind, your unvested equity, relocation)
- Equity grant size or strike price (especially valuable at growth-stage companies)
- Title (Director vs Senior Manager has downstream market value)
- Performance review timing (request 6-month review instead of annual)
- Flexible work arrangements (convert to dollar value: if remote saves $400/month in commuting, that is $4,800/year)

## Handling the 5 Most Common Objections
1. **"This is the top of our band for this role"**: Ask about promotion timeline and the compensation at the next level. "What would I need to achieve to move to the next band in 12–18 months?"

2. **"We have internal equity concerns"**: "I understand internal equity is important. Given my [specific experience/impact], how does the band structure work and is there a market adjustment process?"

3. **"This is more than your last salary"**: Your past salary is not a ceiling. "I appreciate that — I'm benchmarking against the market rate for this role and level, not my previous compensation."

4. **"We need an answer today"**: "I want to say yes, but I need [24 hours] to review this with care. A decision this significant deserves that. Is there any flexibility on timing?"

5. **"The equity will make up the difference"**: Ask for specifics: current valuation, last 409A, strike price, liquidation preferences, and any upcoming financing plans. "I'd love to understand the equity more fully — what is the current 409A valuation and what does the cap table look like?"

## The Graceful Close
Once you reach agreement:
"I'm excited to accept. Can you send the updated offer letter? I'd like to give my current employer [two weeks] notice and start on [date]."

Never renege on an accepted offer unless a significantly better offer arrives within 24–48 hours — the professional cost exceeds the financial benefit in almost every case.

## Output
Complete negotiation playbook with BATNA development guide, total comp evaluation framework, scripts for 3 first offer scenarios, counter-offer mechanics, 5 objection handlers, and graceful close language.`,
    category: 'career',
    tags: ['salary-negotiation', 'compensation', 'job-offer', 'career-finance', 'negotiation'],
    difficulty: 'intermediate',
    useCase: 'Use when evaluating and preparing to negotiate a job offer, or when preparing for an annual compensation review.',
    authorUsername: 'devdna',
    likes: 368,
    saves: 245,
    copies: 970,
    views: 5800,
    trendScore: 368*2 + 245*3 + 970 + 5800*0.2,
    trendingScore: 368*2 + 245*3 + 970 + 5800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Playbook',
    whyTrending: 'Professionals who negotiate earn $1M+ more over their careers; this is the highest-ROI career skill and most people never learn it.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'devdna',
    uses: 970,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-02',
  },
  {
    id: 'lib-car-004',
    title: 'Career Pivot Strategy Builder',
    slug: 'career-pivot-strategy-builder',
    description: 'A structured career pivot roadmap from current role to target role: skills audit, gap analysis, credibility building, bridge role identification, and 18-month timeline.',
    content: `You are a career transition coach who has guided hundreds of professionals through successful career pivots. Build a complete pivot strategy for [PROFESSIONAL] moving from [CURRENT_ROLE] to [TARGET_ROLE].

## Pivot Foundation Assessment

### Pivot Type Classification
Not all career pivots are equal. Classify this pivot:
- **Adjacent pivot**: same industry, different function (e.g., sales to customer success)
- **Industry pivot**: same function, different industry (e.g., marketing in retail to marketing in fintech)
- **Double pivot**: different function AND different industry — the most difficult and time-consuming
- **Level pivot**: moving up (individual contributor to manager) or across (IC to founder)

The classification determines the timeline and strategy. Double pivots almost always require 18–24 months.

## Transferable Skills Audit

### Skills Inventory Method
List every skill from [CURRENT_ROLE] in 5 categories:
1. **Technical hard skills**: tools, platforms, languages, certifications, domain knowledge
2. **Analytical skills**: data analysis, financial modeling, research, problem-solving frameworks
3. **Communication skills**: writing, presenting, selling, teaching, storytelling
4. **Leadership skills**: managing teams, influencing without authority, cross-functional coordination
5. **Domain expertise**: industry knowledge, customer type familiarity, regulatory environment

For each skill: rate relevance to [TARGET_ROLE] as High / Medium / Low.

### Reframing Transferable Skills
Most professionals undervalue their transferable skills because they describe them in the language of their old role. Provide 5 skill reframing examples:
"In [CURRENT_ROLE] I [did X skill] which in [TARGET_ROLE] translates to [reframed skill with new terminology]."

## Gap Analysis

### Critical Gap Identification
Compare the transferable skills inventory against [TARGET_ROLE] requirements:
- Skills that are absent and required: these are gaps that must be closed
- Skills that are present but need terminology translation: education gaps (easy to close)
- Skills that are present but need credibility proof: portfolio gaps (require demonstration)

Rate each gap: Critical (blocks hiring) / Important (affects competitiveness) / Minor (nice to have).

### Gap Closure Prioritization
Rank gaps by: impact on candidacy × speed to close × cost to close.
Top 3 gaps to close immediately and the most efficient path for each.

## Credibility Building Plan

### The Portfolio Problem
You cannot demonstrate [TARGET_ROLE] skills with examples only from [CURRENT_ROLE]. Build a bridge portfolio:
- 2–3 projects you can complete in the next 90 days that demonstrate [TARGET_ROLE] skills
- Open source contributions, freelance work, or pro bono projects that create real deliverables
- Content creation (blog posts, LinkedIn articles, case studies) that demonstrates domain knowledge

### Education and Certification ROI
For [TARGET_ROLE], evaluate:
- Which certifications or courses are genuinely valued by hiring managers (as opposed to resume padding)
- The ROI of each: cost × time × hiring manager perception
- 2–3 specific recommended credentials for [TARGET_ROLE]

## Network Rebuild Plan

### Why Network Rebuilds Are Necessary
Your current network is optimized for [CURRENT_ROLE]. To pivot successfully, you need relationships in [TARGET_ROLE]'s ecosystem.

### Network Building Tactics (30-Day Sprint)
- Identify 20 people currently in [TARGET_ROLE] who are 2–5 years ahead in their career
- LinkedIn search strategy to find them
- Informational interview request template (ask for 20 minutes, ask about their path and advice — do not ask for a job)
- Community involvement: online and offline communities where [TARGET_ROLE] practitioners gather
- Content engagement: comment meaningfully on the content of [TARGET_ROLE] thought leaders

## Target Company Research

### Building a Target Company List
- 30 companies that regularly hire [TARGET_ROLE] professionals
- Prioritization criteria: company size (larger = more structured hiring for pivots), culture fit, growth stage (early-stage companies value versatility), known for internal mobility
- Research method: LinkedIn jobs + LinkedIn alumni search + industry publications

## Bridge Role Identification
Sometimes a direct pivot requires an intermediate step — a bridge role that closes the gap:
- Define what a bridge role looks like: [CURRENT_ROLE] × [TARGET_ROLE] hybrid
- 3 specific bridge role titles to search for
- How long to spend in a bridge role before pivoting again (typically 12–18 months)

## 18-Month Pivot Timeline

### Phase 1 (Months 1–3): Foundation
- Complete the top gap closure activities
- Start building the pivot portfolio
- Begin network rebuild sprint
- Identify 10 target companies to research deeply

### Phase 2 (Months 4–9): Visibility Building
- Publish 2–3 pieces of content demonstrating [TARGET_ROLE] knowledge
- Attend 2–3 industry events or communities where [TARGET_ROLE] professionals gather
- Complete informational interviews with 10+ [TARGET_ROLE] practitioners
- Apply to 5–10 bridge roles to generate interview practice

### Phase 3 (Months 10–18): Active Transition
- Application sprint: 3–5 targeted applications per week to qualified [TARGET_ROLE] positions
- Optimize application materials specifically for the pivot story
- Leverage the network built in Phase 2 for referrals
- Track application data and adjust strategy based on response rates

## The Pivot Story
How to answer "Why are you pivoting?" in an interview:
- The wrong answer: defensive explanation of what you are leaving
- The right answer: affirmative narrative about what you are moving toward
- Template: "My experience in [CURRENT_ROLE] gave me deep exposure to [relevant skill/insight]. That experience made me realize I wanted to [specific goal in TARGET_ROLE]. I've been preparing for this transition by [specific actions taken]. I'm excited about [specific aspect of the role] because [genuine connection to your background]."

## Output
Pivot type classification, transferable skills inventory with reframing examples, gap analysis matrix, credibility building plan with 3 portfolio projects, network rebuild sprint guide, bridge role recommendations, 18-month timeline, and pivot story template.`,
    category: 'career',
    tags: ['career-pivot', 'career-transition', 'career-change', 'skills', 'job-search'],
    difficulty: 'intermediate',
    useCase: 'Use when planning a significant career change and needing a systematic, realistic roadmap for making the transition.',
    authorUsername: 'builderai',
    likes: 285,
    saves: 198,
    copies: 800,
    views: 4900,
    trendScore: 285*2 + 198*3 + 800 + 4900*0.2,
    trendingScore: 285*2 + 198*3 + 800 + 4900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Roadmap',
    whyTrending: 'The average professional now changes careers 3 times in their working life; structured pivot frameworks save months of aimless job searching.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 800,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-13',
  },
  {
    id: 'lib-car-005',
    title: 'Personal Brand Development System',
    slug: 'personal-brand-development-system',
    description: 'Complete personal brand blueprint: positioning statement, content pillars, platform strategy, signature formats, origin story, thought leadership, and bio variations.',
    content: `You are a personal brand strategist who has helped professionals build authority in competitive spaces. Build a complete personal brand system for [PROFESSIONAL] targeting [GOAL].

## Personal Brand Philosophy
A personal brand is not a persona — it is an amplification of who you genuinely are. The strongest personal brands are built by people who share real expertise and real perspective, not by people performing an identity. Authenticity is the only sustainable brand strategy.

## Positioning Statement
Apply this 4-part formula:
"[PROFESSIONAL] helps [specific audience] achieve [specific outcome] through [unique approach or superpower]."

Provide 3 variations, each emphasizing a different dimension:
1. Outcome-focused positioning (leads with results)
2. Method-focused positioning (leads with the unique approach)
3. Identity-focused positioning (leads with who the audience becomes)

The positioning statement answers the question a prospective client, employer, or collaborator asks when they find your profile: "Why should I care about this person?"

## Niche + Superpower Definition

### Niche Definition
A niche is not an industry — it is a specific problem you solve for a specific type of person:
- Who: [specific professional role, company type, life situation]
- Problem: [the specific recurring challenge you solve better than most]
- Alternative: [what they are currently doing instead of working with you]
- Your advantage: [why you solve it better]

Test: if 3 different people in your niche read your positioning statement and all say "that's exactly me", the niche is right.

### Superpower Identification
The intersection of what you are uniquely good at, what others rarely have, and what the market values. Identify [PROFESSIONAL]'s superpower by asking:
- What do people consistently come to you for?
- What feels effortless to you that others struggle with?
- What can you do in an hour that would take most people a day?

## Content Pillars (5)
Personal brand content must be consistent, but not repetitive. Five pillars create variety while maintaining a coherent brand:
1. **Core expertise pillar**: the primary domain [PROFESSIONAL] is known for
2. **Process and methodology pillar**: behind-the-scenes of how you work and think
3. **Lessons and mistakes pillar**: hard-won wisdom that creates trust
4. **Perspective and takes pillar**: your genuine opinion on industry trends and debates
5. **Personal window pillar**: glimpses of values and life that make you human

For each pillar: content formats that work best, 5 specific topic ideas, and the type of audience engagement it generates.

## Platform Prioritization

### Choosing the Right Platform(s)
Match [PROFESSIONAL]'s [GOAL] to the platform where [target audience] is most reachable and receptive:
- LinkedIn: B2B audiences, thought leadership, career moves, enterprise sales
- Twitter/X: technology, startups, policy, media — opinion-heavy content
- YouTube: deep expertise, teaching, demonstration, long-term SEO value
- Instagram: visual, consumer-facing, creator economy, lifestyle
- Newsletter: owned audience, highest conversion intent, long-term asset

Recommend 1 primary platform (where to invest 70% of effort) and 1 secondary platform (30%). Warn against spreading too thin — 3 platforms done poorly is worse than 1 done exceptionally.

## Signature Formats
Define 2–3 recurring content formats that become [PROFESSIONAL]'s signature:
- Format 1: [e.g., weekly teardown of a company or product decision — why it works and who reads it]
- Format 2: [e.g., monthly "what I learned" post — vulnerability + insight]
- Format 3: [e.g., annotated examples of great/bad work in your domain]

Signature formats build recognition. When your audience sees the format, they already know it is you before they read the name.

## Origin Story
The story of how [PROFESSIONAL] came to care deeply about this domain:
- The inciting incident: the specific experience that created the passion or the expertise
- The messy middle: what you tried that didn't work, what you learned
- The current chapter: where you are now and why it matters

Three story lengths:
- Tweet (240 characters): the essential core
- Intro story (2 sentences): for podcast bios and conference intros
- Full origin story (400 words): for About page, LinkedIn about section, press mentions

## Speaking & Writing Pitch
[PROFESSIONAL] gets invited to speak and write when they have a clear pitch for their unique perspective:
- Talk/article title (3 variations)
- The core argument in 2 sentences
- Why it is relevant right now
- What the audience will learn or think differently about after hearing/reading it

## Bio Variations (3)
For different contexts, different bio lengths serve different purposes:
- **One-line bio** (for Twitter/Instagram profiles): title + value + audience
- **Short bio** (for guest post bylines, event programs): 50 words
- **Full bio** (for speaker pages, LinkedIn summary): 150–200 words, written in third person

Rules for all three: lead with what you do for others, not your job title; include 1 specific credential or accomplishment; end with a current focus or CTA.

## Thought Leadership Content Calendar
90-day content plan for building authority on the primary platform:
- Month 1: establish the expertise baseline (what you know)
- Month 2: share the process and perspective (how you think)
- Month 3: build community and dialogue (who you connect with)

## Output
3 positioning statement variations, niche and superpower definition, 5 content pillars with topic banks, platform recommendation with rationale, 3 signature format concepts, origin story in 3 lengths, speaking pitch template, 3 bio variations, and 90-day content calendar outline.`,
    category: 'career',
    tags: ['personal-brand', 'thought-leadership', 'linkedin', 'content-strategy', 'career-development'],
    difficulty: 'intermediate',
    useCase: 'Use when building a professional brand from scratch or repositioning an existing professional presence for a new audience or goal.',
    authorUsername: 'promptarchitect',
    likes: 310,
    saves: 218,
    copies: 880,
    views: 5400,
    trendScore: 310*2 + 218*3 + 880 + 5400*0.2,
    trendingScore: 310*2 + 218*3 + 880 + 5400*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Blueprint',
    whyTrending: 'Personal brand is now a career infrastructure investment; professionals with strong brands receive inbound opportunities at 3–5x the rate of their peers.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 880,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-05',
  },
  {
    id: 'lib-car-006',
    title: 'LinkedIn Profile Optimization',
    slug: 'linkedin-profile-optimization',
    description: 'Complete LinkedIn profile rewrite: headline formula, achievement-focused about section, experience bullets, featured section strategy, and recommendations approach.',
    content: `You are a LinkedIn optimization specialist who has rewritten profiles for professionals at every level. Rewrite the LinkedIn profile for [NAME] targeting [AUDIENCE].

## Profile Strategy
LinkedIn profiles serve two audiences simultaneously: the algorithm (keyword-based search ranking) and the human reader (who makes the connection or reach-out decision in 7 seconds). Every element must serve both masters.

## Headline Rewrite

### The Headline Formula
LinkedIn gives you 220 characters for the headline. Most professionals waste it on their job title and employer. The headline is your most-read piece of content on LinkedIn.

Optimal formula: **[What you do] + [Who you help] + [Specific outcome] | [Credibility signal]**

Provide 4 headline variations for [NAME] targeting [AUDIENCE]:
1. Role-focused (leads with the title)
2. Outcome-focused (leads with what you deliver)
3. Audience-focused (leads with who you serve)
4. Niche authority headline (leads with specialization)

Test: would someone from [AUDIENCE] who glances at this headline know immediately whether to connect? If not, rewrite it.

## About Section Rewrite (300 words)

### The About Section Structure
Most LinkedIn about sections are career summaries written in the third person past tense — essentially a less useful version of the resume. The about section should be a conversation starter written in first person.

Required elements:
- **Hook** (first 2 lines, before "See more"): must earn the click to expand. A question, a bold statement, or a surprising claim.
- **Professional story** (paragraph 2–3): why you do this work, what drives you, what shaped your expertise
- **Evidence block** (paragraph 4): 3 specific accomplishments with numbers that prove you can deliver what you promise
- **Current focus** (paragraph 5): what you are building or working on right now
- **Clear CTA** (final line): what [AUDIENCE] should do to connect or engage

Write the full 300-word about section for [NAME]. Confirm it contains at least 5 keywords that [AUDIENCE] would search for.

## Experience Bullets — Achievement Rewrite

### The LinkedIn Bullet Rule
LinkedIn experience bullets are often copy-pasted from resumes, which is a missed opportunity. On LinkedIn, bullets should read as achievements to the professional network, not as duty lists for HR systems.

For [NAME]'s top 3 most recent or relevant roles, rewrite 4–5 bullets per role using:
- Active verb + specific achievement + quantified result + scale or context
- Make each bullet a standalone piece of evidence that demonstrates capability
- Use the first bullet in each role as the headline achievement — the one that makes [AUDIENCE] stop scrolling

## Featured Section Strategy
The featured section is prime real estate that most professionals leave empty or fill with low-value links.

Recommend 3 featured items for [NAME] targeting [AUDIENCE]:
- Item 1: The best social proof available (a LinkedIn post with high engagement, a media mention, a major announcement)
- Item 2: A demonstration of expertise (a slide deck, written guide, or video)
- Item 3: A clear CTA item (a landing page, newsletter, or portfolio link)

For each item: what to feature, the cover image direction, and the title text.

## Skills Section Optimization
LinkedIn's skill endorsements affect search ranking. Optimize the skills section:
- Remove weak or irrelevant skills that dilute keyword focus
- Prioritize the 10 skills most relevant to [AUDIENCE]'s searches
- Skills to feature prominently at the top: the 3 core skills [AUDIENCE] searches most
- Skills to add if not present: identify any high-demand skills missing from the profile

## Creator Mode & Content Strategy
For [NAME] with [GOAL], evaluate whether Creator Mode is the right setting:
- When Creator Mode helps: building an audience, writing content regularly, growing followers
- When Creator Mode hurts: when the connection strategy is more important than the follow strategy

Content frequency recommendation for [AUDIENCE] and [GOAL]: how often to post and in which formats for the algorithm to recommend the profile.

## Banner Image Direction
The banner image is the first visual impression. Design brief:
- Dimensions: 1584 × 396 pixels
- Message to convey in 3 seconds (what should [AUDIENCE] know before reading the headline?)
- Visual elements: text, imagery, color palette
- Examples: text-only vs branded visual vs photography

## Recommendations Strategy
Authentic recommendations from the right people are powerful social proof:
- Who to request recommendations from (former managers, direct reports, major clients — prioritized by credibility with [AUDIENCE])
- How to request them: the ask that makes it easy for the recommender and increases specificity
- Recommendation brief template: how to guide the recommender to write something useful rather than generic

## Profile SEO Checklist
A 12-point checklist for maximum LinkedIn search visibility:
- Keyword placement: headline, about, job titles, skills, and activity posts
- Custom profile URL
- Connection count: why 500+ connections affects search visibility
- Activity frequency: how recent activity affects profile ranking
- All profile sections completed (LinkedIn rewards completeness)
- Industry and location set correctly

## Output
4 headline variations with strength ranking, full 300-word about section, experience bullet rewrites for top 3 roles, featured section recommendations, skills optimization, creator mode recommendation, banner design brief, recommendations strategy, and profile SEO checklist.`,
    category: 'career',
    tags: ['linkedin', 'personal-brand', 'job-search', 'profile-optimization', 'networking'],
    difficulty: 'beginner',
    useCase: 'Use when a LinkedIn profile is not generating inbound opportunities or when preparing for a job search or career pivot.',
    authorUsername: 'contentpro',
    likes: 342,
    saves: 232,
    copies: 920,
    views: 5650,
    trendScore: 342*2 + 232*3 + 920 + 5650*0.2,
    trendingScore: 342*2 + 232*3 + 920 + 5650*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Rewrite',
    whyTrending: 'LinkedIn is the primary channel for professional inbound; a well-optimized profile generates opportunities passively while the professional focuses on their work.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'contentpro',
    uses: 920,
    estimatedTokens: 840,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-car-007',
    title: 'Performance Review Self-Assessment',
    slug: 'performance-review-self-assessment',
    description: 'Complete performance review self-assessment: executive summary, 5-7 accomplishments with metrics, honest growth areas, SMART goals, and development plan.',
    content: `You are a career coach who helps professionals articulate their impact for performance reviews. Write a complete performance review self-assessment for [ROLE] for [PERIOD].

## Self-Assessment Philosophy
Most self-assessments fall into two traps: either they undersell (the humble professional who fails to document their impact) or they oversell in ways that damage credibility (the professional who claims ownership of team outcomes). The ideal self-assessment is specific, evidence-based, honest about gaps, and forward-looking.

## Executive Summary (3 Achievements)
Open the self-assessment with an executive summary: the 3 most significant contributions you made in [PERIOD].

For each of the 3 achievements:
- State the achievement in one sentence with the quantified outcome
- Briefly (1 sentence) explain why it mattered to the business
- Note any team members who contributed (this demonstrates self-awareness, not weakness)

The executive summary should be readable in 30 seconds and create the frame through which the manager reads the rest of the document.

## Detailed Accomplishments (5–7 With Metrics)
The core of the self-assessment. For each accomplishment:
- **What I did**: specific action, not vague description
- **The impact**: quantified outcome (revenue, users, time saved, cost reduced, quality improved)
- **The context**: what made this challenging or why it mattered at this moment
- **What it demonstrates**: the capability or value this illustrates (connects to the role's competencies)

For accomplishments where metrics are not available:
- Use relative impact language: "reduced time by approximately half", "the fastest this process had ever moved"
- Use stakeholder language: "the project lead described this as a turning point for the team"
- Use comparative language: "this was more complex than any prior project of this type in the organization"

## Goals Assessment

### For Each Goal Set at the Start of [PERIOD]
Structure each goal assessment in this format:
- **Goal**: state the original goal
- **Status**: Met / Exceeded / Partially met / Missed
- **Evidence**: what happened (facts, not spin)
- **Context for misses**: if a goal was missed, explain the cause without blame (external factors, scope change, resource constraints) and what was done to mitigate

How to write honestly about a missed goal without undermining your overall assessment:
- Acknowledge it directly (managers notice if you avoid it — it damages trust)
- Provide accurate context
- Show what you learned
- Explain what you would do differently

## Growth Areas (Honest Framing)
Most professionals write growth areas as disguised strengths: "I sometimes care too much" or "I work too hard." This is transparent and ineffective.

Write 2 genuine growth areas that are:
- Real (your manager already knows about them)
- Specific (not "communication" — say "written communication for executive audiences")
- Forward-looking (paired with a development plan)

Format for each growth area:
"I want to strengthen [specific skill]. In [PERIOD], I noticed [specific instance where the gap showed]. I plan to address this by [specific action] in the next [timeframe]."

## Next Period Goals (3 SMART Goals)
Goals that are Specific, Measurable, Achievable, Relevant, and Time-bound:

For each of 3 goals:
- The goal in one sentence (quantified target, clear deadline)
- Why this goal matters: how it contributes to team or company objectives
- How you will measure it: the specific metric or deliverable
- What support or resources you need

Format goals at the right level of ambition: stretch but achievable. Goals that are too easy signal low ambition; goals that are clearly impossible are ignored.

## Development Needs & Support Request
The most underused section of a self-assessment. Use it to request specific support from your manager:
- Skill development: specific training, course, or certification
- Exposure: specific project types, stakeholder access, or cross-functional experience
- Feedback: specific areas where you want more coaching
- Resources: tool, team, or budget that would unlock the next level of contribution

Frame each request as a business case: "Developing [skill] would enable me to [specific contribution]. I'd like [specific support]."

## Tone and Language Guide
Language that demonstrates executive maturity:
- Use "I" for individual contributions (do not hide behind "we" when you did the work)
- Use "we" and "the team" for collaborative achievements (do not claim team wins as solo)
- Use past tense for accomplishments, present tense for ongoing strengths, future tense for goals
- Avoid: "just", "only", "tried to", "helped with" — these minimize your contributions
- Use: "led", "drove", "achieved", "delivered", "built", "reduced", "increased"

## Output
Complete performance review self-assessment with 3-achievement executive summary, 5-7 detailed accomplishments with impact framing, honest goals assessment, 2 genuine growth areas with development plans, 3 SMART next period goals, and specific development support requests.`,
    category: 'career',
    tags: ['performance-review', 'self-assessment', 'career-development', 'workplace', 'career-growth'],
    difficulty: 'beginner',
    useCase: 'Use when preparing an annual or semi-annual performance review self-assessment that documents impact and sets up the compensation and promotion conversation.',
    authorUsername: 'marketinglab',
    likes: 225,
    saves: 165,
    copies: 695,
    views: 4350,
    trendScore: 225*2 + 165*3 + 695 + 4350*0.2,
    trendingScore: 225*2 + 165*3 + 695 + 4350*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Document',
    whyTrending: 'Performance review quality directly impacts compensation and promotion outcomes; structured self-assessments help professionals document impact they would otherwise undersell.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'marketinglab',
    uses: 695,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-car-008',
    title: 'Promotion Case Builder',
    slug: 'promotion-case-builder',
    description: 'Build a compelling promotion case: impact narrative, evidence matrix, criteria comparison, sponsorship strategy, visibility campaign, and compensation negotiation.',
    content: `You are a career strategy coach who has helped hundreds of professionals successfully advocate for their own promotion. Build a complete promotion case for [NAME] to [TARGET_LEVEL].

## Promotion Philosophy
Promotions are not awarded for doing your current job well. They are awarded for demonstrating consistent performance at the next level before the title is given. The promotion conversation is the formal recognition of a transition that should have already happened — and your case must prove that it has.

## Why Now — The Timing Argument
The promotion case begins with the answer to: "Why is now the right time?"
- Evidence of sustained next-level performance (not a single achievement)
- Business justification: how does promoting [NAME] serve the team's or company's goals?
- Market context: are you at risk of being poached if not promoted? (This is legitimate leverage, not a threat)
- Organizational readiness: is there a role or scope that the promotion would formally recognize?

If the timing is wrong, the best strategy is to build the case and execute the visibility campaign for the next review cycle — not to push prematurely and be told no.

## Evidence Matrix — Impact × Scope × Leadership

### Dimension 1: Impact
Quantified outcomes that exceed your current level's expectations:
- Revenue generated, protected, or influenced
- Cost savings or efficiency gains
- User or customer outcomes at scale
- Strategic projects led or delivered

For each piece of evidence: the specific achievement, the metric, and why it represents next-level performance (not just good current-level performance).

### Dimension 2: Scope
Evidence that you are already operating beyond your current scope:
- Projects or initiatives that span beyond your team or function
- Problems you solved that were not in your job description
- Decisions you made that were above your pay grade
- External stakeholders (customers, partners, board) you successfully managed

### Dimension 3: Leadership
Evidence of next-level leadership behaviors:
- People who have grown under your mentorship or sponsorship
- Decisions that influenced the team's direction (even without formal authority)
- How you have shown up in ambiguous or high-stakes situations
- The way your peers and stakeholders describe your leadership

## Criteria Comparison — The Level Framework
Most organizations have written or unwritten criteria for each level. Research and document:
- The explicit competencies listed for [TARGET_LEVEL] (from the job ladder, if accessible)
- The behaviors your manager and skip-level associate with [TARGET_LEVEL]
- The 3 competencies where your evidence is strongest (lead with these)
- The 1–2 competencies where evidence is thinner (prepare a development narrative for these)

## Sponsorship Strategy
Your manager cannot champion your promotion alone in most organizations. Identify and activate sponsors:
- Your manager: have they explicitly committed to advocating for you in the promotion committee?
- Your skip-level: do they know your work by name? If not, why not?
- Cross-functional stakeholders: who outside your team has benefited from your work?

How to activate each sponsor in the 90 days before the promotion discussion:
- Manager: regular 1:1 check-ins where you surface your evidence and ask directly "What do I need to demonstrate to make the case undeniable?"
- Skip-level: request a career conversation — not to ask for the promotion, but to share your goals and receive feedback
- Cross-functional: send a brief "thanks for our collaboration" note that makes your contributions visible

## 90-Day Visibility Campaign
If your work is not visible to decision-makers, evidence of it does not exist. A 90-day campaign to increase strategic visibility before the promotion conversation:

Month 1: Documentation
- Write a one-page summary of your 5 biggest contributions in the last year (send to manager as a "catch-up" note)
- Volunteer to present a team or project outcome to the broader organization

Month 2: Stakeholder Expansion
- Schedule conversations with 3 senior stakeholders you have not yet built relationships with
- Find one cross-functional opportunity to deliver visible impact quickly

Month 3: Next-Level Demonstration
- Explicitly take on one next-level responsibility (ask your manager what that would look like)
- Document and communicate the outcome of this next-level contribution before the review

## Competing Differentiation
In most promotion cycles, multiple people are considered. How does [NAME]'s profile differentiate from the competition?
- What combination of skills, relationships, and institutional knowledge is unique to [NAME]?
- What would the team lose if [NAME] were not promoted and moved on?
- What would the team gain that it does not currently have?

## Compensation Negotiation Prep
The promotion conversation and the compensation conversation are related but distinct:
- Research market rate for [TARGET_LEVEL] using the same sources as the salary negotiation playbook
- Understand the typical compensation increase associated with promotions at this level in this company
- Separate the promotion case from the compensation negotiation (make the case for the title first; negotiate compensation once it is offered)
- Prepare for the conversation where the title is given but compensation is delayed — how to handle this professionally

## Output
Complete promotion case with the timing argument, evidence matrix across all 3 dimensions, criteria comparison, sponsorship activation plan, 90-day visibility campaign, differentiation narrative, and compensation negotiation preparation.`,
    category: 'career',
    tags: ['promotion', 'career-growth', 'performance', 'workplace', 'leadership'],
    difficulty: 'intermediate',
    useCase: 'Use when preparing to advocate for a promotion, ideally 90+ days before the formal review cycle begins.',
    authorUsername: 'devdna',
    likes: 265,
    saves: 192,
    copies: 760,
    views: 4700,
    trendScore: 265*2 + 192*3 + 760 + 4700*0.2,
    trendingScore: 265*2 + 192*3 + 760 + 4700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '13 min',
    outputType: 'Playbook',
    whyTrending: 'Most professionals who deserve promotions fail to get them because they wait to be recognized rather than making a structured case; this framework bridges that gap.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 760,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-15',
  },
  {
    id: 'lib-car-009',
    title: 'Job Search Strategy & Outreach System',
    slug: 'job-search-strategy-outreach-system',
    description: 'Complete job search playbook: job board strategy, recruiter outreach templates, hidden job market activation, referral system, and response rate optimization.',
    content: `You are a career advisor who has helped hundreds of professionals land roles through both the visible and hidden job markets. Build a complete job search playbook for [CANDIDATE] targeting [ROLE].

## Job Search Architecture
Most job searches are entirely reactive: see job posting → apply → wait. This approach has a sub-5% success rate at competitive companies because you are competing with hundreds of other applicants in a process optimized for filtering, not discovery.

The effective job search uses 3 parallel channels:
1. Active applications (20% of effort)
2. Warm network activation (50% of effort)
3. Direct company outreach and recruiter relationships (30% of effort)

## Channel 1: Job Board Strategy

### Platform Selection for [ROLE]
Specific platforms by role category:
- LinkedIn Jobs: best for corporate and startup roles; apply within first 24 hours of posting
- Indeed: broad but competitive; most useful for volume searching
- Glassdoor: pair with company culture research
- Specialized boards for [ROLE]: identify 2–3 niche job boards specific to this field

### Advanced Search Operators
LinkedIn search string examples to surface [ROLE] postings that most candidates miss:
- Boolean search for job titles with multiple valid names
- Company-size filters matched to [CANDIDATE]'s preferences
- Date posted filter: always apply within 3 days (application completion rates drop after that)
- "Actively recruiting" filter on LinkedIn recruiter searches

### Application Volume and Quality Calibration
Target: 3–5 highly qualified applications per week, not 30 spray-and-pray applications. The evidence: personalized applications to well-matched roles generate 6–10x higher response rates than mass applications.

## Channel 2: Warm Network Activation

### Network Audit
Map [CANDIDATE]'s existing network into tiers:
- Tier 1: former managers, direct collaborators, people who have seen [CANDIDATE]'s work directly
- Tier 2: colleagues from past companies, professional community contacts
- Tier 3: LinkedIn connections with relevant roles or companies who do not know [CANDIDATE] personally

### Outreach Templates

**To Tier 1 contacts (former manager or close collaborator)**:
"Hi [NAME], hope you're well. I'm starting to explore new opportunities in [ROLE] and wanted to connect with a few people I respect and trust. Would you be open to a 20-minute call? I'd love your perspective on [specific question about market or role]. Not asking for anything — just genuinely value your insight."

**To Tier 2 contacts (former colleague)**:
"Hi [NAME], been a while! I'm exploring [ROLE] opportunities and noticed you've been at [COMPANY/INDUSTRY] — I'd love to reconnect and hear about your experience. Would a quick call work for you?"

**To Tier 3 contacts (weak ties)**:
"Hi [NAME], I follow your work on LinkedIn and respect your perspective on [THEIR AREA]. I'm exploring [ROLE] opportunities and would love 15 minutes to learn about your path. Happy to share what I know about [something relevant to them] in return."

### Referral Activation
The single highest-yield job search activity: getting a referral at a target company.
- How to identify if you have a first or second-degree connection at target companies (LinkedIn alumni search)
- The referral request script (ask specifically, make it easy to say yes, give them talking points)
- What to give the referrer to pass along (a 3-sentence note + your resume, not a full LinkedIn profile URL)

## Channel 3: Direct Outreach & Recruiter Relationships

### LinkedIn Recruiter Outreach
Most recruiters receive generic "I'd love to connect" messages that they ignore. The message that gets a response:
- Reference something specific about their recent post or company
- Make your value proposition clear in 2 sentences
- Make a specific ask that is easy to fulfill (a 15-minute call, not "do you have a job for me?")

Template: "Hi [RECRUITER NAME], I saw you posted about [COMPANY]'s growth in [AREA]. I'm a [ROLE] with [specific, brief credential] exploring opportunities. Would a quick call make sense to see if there's a fit? Happy to send my background over."

### Cold Outreach to Hiring Managers
For roles where the hiring manager is identifiable (through LinkedIn or job posting):
- Reaching out before applying increases callback rates significantly
- The cold outreach message structure: genuine compliment on their work → brief value statement → request (not a job, a conversation)
- When to send the application: after the first exchange, not before

## Tracking System
An organized job search requires a tracking system. Minimum viable tracker:
- Company name, role title, application date, referral or cold, application status, next action, follow-up date
- Weekly review: what applications have been silent for 10+ days? Send a follow-up or close them.

## Follow-Up Protocol
Most candidates never follow up. Following up once increases response rates by approximately 30%:
- Timing: 7–10 days after application, 3–5 days after an interview
- Template: brief, warm, adds a value touch (a relevant article, a thought about their product, not just "checking in")

## Response Rate Optimization
Signs your job search materials need adjustment:
- Application → recruiter screen conversion below 10%: resume or keywords need work
- Recruiter screen → hiring manager screen below 40%: phone presence or pitch needs work
- Hiring manager screen → final round below 50%: interview skill or role fit needs calibration
- Final round → offer below 50%: calibration issue or specific skill gap feedback from interviewers

## Output
Complete job search playbook with platform strategy, search operators, application calibration guide, network audit framework, 3 outreach templates, referral activation script, recruiter cold outreach template, tracking system structure, follow-up protocol, and response rate diagnostic guide.`,
    category: 'career',
    tags: ['job-search', 'networking', 'outreach', 'career-development', 'recruitment'],
    difficulty: 'beginner',
    useCase: 'Use when launching an active job search to run a structured, multi-channel campaign rather than an uncoordinated application spray.',
    authorUsername: 'builderai',
    likes: 285,
    saves: 205,
    copies: 810,
    views: 4850,
    trendScore: 285*2 + 205*3 + 810 + 4850*0.2,
    trendingScore: 285*2 + 205*3 + 810 + 4850*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Playbook',
    whyTrending: 'Job market tightness has made systematic job search skills a competitive advantage; candidates with structured outreach campaigns land roles 2–3x faster.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 810,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-car-010',
    title: 'Executive Presence & Communication',
    slug: 'executive-presence-communication',
    description: 'Develop executive presence: communication model, business storytelling, meeting presence, managing up, boardroom communication, and written style guide.',
    content: `You are an executive coach who has worked with senior leaders at Fortune 500 companies. Build a complete executive presence development plan for [PROFESSIONAL] targeting [CAREER_GOAL].

## Executive Presence Defined
Executive presence is not charisma or authority. It is the quality of communication that makes people trust your judgment before you have proved it. It is earned through consistency: clarity in uncertainty, calm in pressure, brevity at all times.

The three pillars of executive presence:
1. **Gravitas**: the sense that your words carry weight and your judgment is sound
2. **Communication**: the ability to be understood by anyone, at any level, in any format
3. **Appearance**: projecting competence and credibility through every element of presentation

This plan develops all three, with the heaviest focus on communication — the most learnable and highest-leverage pillar.

## Communication Model: Clarity × Brevity × Confidence

### Clarity
Executives are unclear when they lead with details before context. The clarity rule: always answer "So what?" before answering "How?"
- BLUF framework (Bottom Line Up Front): state the conclusion before the supporting evidence
- Three-part structure for any communication: situation → complication → recommendation
- Eliminate jargon test: can a smart 12-year-old understand this? If not, rewrite it.

### Brevity
The executive-level communication failure mode is over-explanation driven by anxiety:
- The one-sentence principle: every point you make should be expressible in one sentence before being expanded
- Email length target: senior audiences → 5 sentences maximum for routine communication, 15 sentences for complex decisions
- Meeting contribution rule: make one clear point per speaking turn; let it land before continuing

### Confidence
Confidence in communication is not volume or assertiveness. It is absence of hedging:
- Phrases that undermine credibility: "I think maybe…", "I could be wrong but…", "Just an idea…", "I'm not an expert but…"
- Confident alternative: "My recommendation is…", "Based on the data, I believe…", "Here is what I would do…"
- The confidence of uncertainty: "I don't know — I'll find out by [date]" projects more confidence than a hedged guess

## Business Storytelling — The SCQA Framework
Senior leaders make decisions based on narratives, not spreadsheets. The SCQA framework is the most effective structure for executive storytelling:
- **Situation**: the current state everyone agrees on (keep this brief — do not explain what the audience already knows)
- **Complication**: what has changed or what is at risk that creates urgency
- **Question**: the central question the story answers (state it explicitly)
- **Answer**: your recommendation, conclusion, or insight

Provide 3 worked examples of the SCQA framework applied to [PROFESSIONAL]'s domain.

## Meeting Presence

### The 3 Types of Meeting Contributions
Not all meeting contributions create the same impression:
1. **Data contribution** (low impact): sharing information everyone could read in a report
2. **Perspective contribution** (medium impact): offering an interpretation or opinion on the data
3. **Decision contribution** (high impact): synthesizing the discussion and proposing a path forward

Executive communicators make primarily type 2 and type 3 contributions.

### Specific Meeting Presence Tactics
- Arrive with 1 prepared contribution (a specific question, data point, or recommendation) for each meeting on your calendar
- The first contribution in any meeting should be a question, not an assertion — it signals you are listening and thinking
- The "so what we're hearing is" synthesis move: when a discussion is going in circles, synthesize it into a clear statement and ask for confirmation
- How to disagree with a senior stakeholder without damaging the relationship

## Managing Up — Communication With Senior Leaders

### The Managing Up Principle
Your manager's job is not to keep up with your work — your job is to make their job easier by giving them exactly what they need, no more.

**Weekly update email structure** (for managers who want status updates):
3 sentences: what was accomplished, what is in progress, what is blocked + what you need.

**Issue escalation template** (when you need a decision):
"I need your input on [issue]. The 3 options are [A, B, C]. I recommend [A] because [1 specific reason]. Can you confirm by [date]?"

**Proactive bad news communication**: how to deliver bad news before it becomes a crisis (the "no surprises" commitment).

## Boardroom Communication
For professionals who present to boards or senior leadership teams:
- What board members want from a presenter: confidence, clarity, brevity, and an explicit ask
- The 10-minute board presentation structure
- Anticipated board questions by presentation type (financial update, strategic proposal, risk review)
- How to handle a hostile question in a boardroom setting

## Written Style Guide for Senior Audiences

### Email Principles
- Subject line is the most important sentence you write: make it a summary of the email, not a topic label
- One topic per email (never combine issues — it reduces response rate and clarity)
- Every email to a senior leader should have a clear next step and who owns it
- Maximum 5 sentences for routine updates; use an attachment for complex information

### Executive Summary Template
For any document over 2 pages that a senior leader will read:
- Paragraph 1: the situation and why it matters (2 sentences)
- Paragraph 2: the key findings or options (3 bullets maximum)
- Paragraph 3: the recommendation and what is needed to proceed (2 sentences)
Total: 8–10 sentences, readable in under 60 seconds.

### Presentation Principles
The 3 rules that separate executive presentations from professional-level presentations:
1. Every slide has a headline that is a sentence, not a topic (bad: "Revenue Analysis"; good: "Revenue is growing but at declining margins")
2. Every recommendation slide must answer: what, why now, what it costs, what happens if we don't
3. Anticipate and address the 3 most likely objections on the slide, not in the Q&A

## Output
Executive presence development plan with the clarity/brevity/confidence framework, SCQA storytelling template with 3 examples, meeting presence tactics, managing up communication templates, boardroom presentation structure, written style guide, and email principles.`,
    category: 'career',
    tags: ['executive-presence', 'communication', 'leadership', 'presentation', 'career-growth'],
    difficulty: 'advanced',
    useCase: 'Use when preparing for a more senior role, improving communication with C-suite stakeholders, or developing as a leader who commands a room.',
    authorUsername: 'promptarchitect',
    likes: 198,
    saves: 145,
    copies: 610,
    views: 3850,
    trendScore: 198*2 + 145*3 + 610 + 3850*0.2,
    trendingScore: 198*2 + 145*3 + 610 + 3850*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '13 min',
    outputType: 'Plan',
    whyTrending: 'Communication quality is the most cited differentiator between professionals at director level and above; structured development plans accelerate what would otherwise take years of trial and error.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 610,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-22',
  },
  {
    id: 'lib-car-011',
    title: 'Freelance/Consulting Launch Plan',
    slug: 'freelance-consulting-launch-plan',
    description: 'Complete freelance launch playbook: 3-tier service packaging, pricing strategy, positioning, lead generation, client acquisition scripts, and first 90-day milestones.',
    content: `You are a business coach who has helped hundreds of professionals launch successful independent consulting practices. Build a complete freelance launch plan for [ROLE] in [SPECIALTY].

## Freelance Business Foundation

### Why This Matters Before Any Tactics
Most freelancers compete on price because they have not defined what they do better than anyone else. This plan starts with positioning and packaging — the work that determines whether you attract the clients you want or the clients who can only afford you.

### The Positioning Decision
In freelancing, the riches are in niches. Define [ROLE]'s positioning along 3 dimensions:
- **Who you serve**: the most specific ICP you can credibly target (e.g., not "tech companies" but "Series A SaaS startups with 10–50 person teams")
- **What you solve**: the specific, recurring, painful problem you solve for them
- **How you are different**: your mechanism, approach, or background that makes you the better choice over generalists or alternatives

Test: would someone from your ICP read your positioning and say "that is exactly what I need right now"? If not, it is not specific enough.

## Service Packaging — 3 Tiers

### Tier 1: Project-Based Engagement
A defined deliverable with a defined outcome and a fixed scope:
- Name: [Name it — naming services makes them feel more concrete and easier to buy]
- What is included (3–5 deliverables)
- What is NOT included (set scope boundaries explicitly)
- Timeline: from start to final delivery
- Price: [AMOUNT] — fixed fee, paid in advance or 50/50

### Tier 2: Retainer Engagement
Ongoing relationship with defined monthly availability and deliverables:
- Monthly commitment: X hours or Y deliverables
- What the client gets: defined outputs, not just "access to your time"
- Response time SLA
- Contract term: minimum 3 months (protects both parties)
- Monthly fee: [AMOUNT]

### Tier 3: High-Touch Advisory
Your highest-value offering for clients who need strategic guidance and direct access:
- Limited seats (scarcity is real if you enforce it)
- What is included: monthly strategy calls, async support, priority access
- Who this is right for: clients who have resources but need direction
- Price: [AMOUNT] — your highest rate because this takes the most of your attention

## Pricing Strategy
How to set rates that reflect value, not time:
- **Market rate research**: what do specialists in [SPECIALTY] charge for comparable services? (Freelancer forums, LinkedIn DMs to peers, freelancer salary reports)
- **Rate floors**: calculate your minimum viable rate (desired annual income ÷ 1,000 billable hours = minimum hourly rate)
- **Value-based pricing**: the value each tier delivers to the client in dollar terms (a project that generates $50K in revenue for the client should not be priced at $2,000)
- **The psychological anchor**: publish your Tier 3 pricing first — it makes Tier 1 and 2 feel accessible

## Lead Generation Channels (3 Channels)

### Channel 1: LinkedIn Outreach (Fastest to First Revenue)
- ICP search: how to identify your exact target client on LinkedIn using title + company size + industry filters
- Profile-to-DM strategy: optimize your profile to pre-qualify leads, then reach out
- Outreach sequence: connection request → follow after 48 hours → value message → offer conversation
- Volume: 10 targeted connection requests per day, 5 follow-ups per week
- Expected timeline to first conversation: 2–4 weeks

### Channel 2: Network Referral Activation (Highest Quality Leads)
- Map your existing network for potential clients and potential referrers
- The referral announcement: tell your network you've launched — once, directly and clearly
- Referral incentive: consider a finder's fee or reciprocal referral agreement
- Making it easy to refer: a 2-sentence description of your ideal client that referrers can paste into a message

### Channel 3: Content-Led Inbound (Best Long-Term ROI)
- Platform selection: where does your ICP spend time and what do they read?
- Content thesis: the single idea you want to be known for in [SPECIALTY]
- Content calendar: 2 posts per week for 90 days — specific topics tied to your ICP's problems
- Content-to-inquiry conversion: a clear CTA in every piece of content that leads to a discovery call

## Client Acquisition Scripts

### Discovery Call Framework (45 minutes)
A structured discovery call that qualifies the client AND demonstrates your value before any proposal is sent:
- Minutes 0–5: set the agenda, establish that the call has a defined outcome
- Minutes 5–20: understand their situation (listen more than you speak — ask the questions from the customer discovery prompt)
- Minutes 20–30: show expertise through questions and observations (not a pitch yet)
- Minutes 30–40: explore fit — is this a problem you can solve? Is the client ready to invest?
- Minutes 40–45: next step (either you'll send a proposal or it's not a fit — decide on the call, not later)

### Proposal Template
A 3-section proposal that closes without a sales call:
- Section 1: Summary of what you heard on the discovery call (this shows you listened and builds trust)
- Section 2: Your recommended engagement (which tier, why, what they get)
- Section 3: Investment and next steps (pricing, payment terms, simple acceptance process)

Keep proposals under 2 pages. Long proposals signal uncertainty.

## Contract Basics
A freelance contract protects both parties. Minimum provisions:
- Scope of work (detailed, with explicit out-of-scope items)
- Payment terms (net-15, not net-30 or net-60; require 50% upfront for new clients)
- Revision limits (2 rounds of revisions included, additional rounds at [rate])
- IP ownership (clarify whether the client owns work product or you license it)
- Termination clause (30-day notice either party; payment for work completed to that point)

## Onboarding System
A great onboarding experience turns a first project into a long-term relationship:
- Kickoff call agenda (30 minutes — set expectations, confirm deliverables, establish communication norms)
- Client intake questionnaire (gather all information needed before starting, not mid-project)
- Project management setup (Notion, Asana, or email — match the client's tools)
- First-week check-in (proactive, short — signal that you are on track)

## First 90 Days Milestones

**Days 1–30**: Foundation
- Profile optimization complete
- Services and pricing finalized
- Outreach to first 30 target contacts started
- First discovery call booked

**Days 31–60**: Revenue Generation
- First paying client signed (even a small project)
- Content publishing cadence established
- 3–5 proposals sent
- Referral network activated

**Days 61–90**: Validation
- First client deliverable completed and feedback collected
- Second paying client or retainer signed
- First testimonial or case study documented
- Rate adjustment if market is responding strongly

## Output
Complete freelance launch playbook with 3-tier service packages, pricing strategy, 3 lead generation channel plans, discovery call framework, proposal template, contract essentials, onboarding system, and 90-day milestone plan.`,
    category: 'career',
    tags: ['freelance', 'consulting', 'self-employment', 'business-launch', 'client-acquisition'],
    difficulty: 'intermediate',
    useCase: 'Use when launching a freelance or consulting practice for the first time or repositioning an existing practice that is not growing.',
    authorUsername: 'marketinglab',
    likes: 235,
    saves: 172,
    copies: 725,
    views: 4400,
    trendScore: 235*2 + 172*3 + 725 + 4400*0.2,
    trendingScore: 235*2 + 172*3 + 725 + 4400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Playbook',
    whyTrending: 'Freelance economy growth accelerates every year; professionals who launch systematically build sustainable income in months instead of the typical 18-month struggle.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 725,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-25',
  },
  {
    id: 'lib-car-012',
    title: 'Networking Strategy & Outreach',
    slug: 'networking-strategy-outreach',
    description: 'Complete networking system: network audit, event strategy, 5 cold outreach scenarios, warm intro templates, nurture cadence, and informational interview guide.',
    content: `You are a networking coach who has helped professionals build high-value professional relationships without feeling transactional. Build a complete networking system for [PROFESSIONAL_GOAL].

## Networking Philosophy
Most professionals network when they need something — a job, a client, an introduction. This is exactly backward. The best networked professionals give consistently before they ever ask. When it is time to ask, the ask feels natural because the relationship is already real.

This system is built on the give-first principle: every outreach, every conversation, and every follow-up should create value for the other person before it requests value for you.

## Network Audit

### Current Network Inventory
Map the existing network by relationship quality:
- **Strong ties** (people who would take your call today): former managers, close colleagues, trusted peers
- **Weak ties** (people who recognize your name but don't know you deeply): past colleagues, classmates, conference contacts
- **Dormant ties** (people you knew well but have lost touch with): former mentors, early-career colleagues, past collaborators

Weak and dormant ties are statistically the most valuable for career advancement — they have access to information and opportunities that your strong ties do not.

### Network Gap Analysis for [PROFESSIONAL_GOAL]
To achieve [PROFESSIONAL_GOAL], you need relationships in specific domains. Identify:
- The 3 most critical relationship categories you need but currently lack
- The specific individuals (by role or name) who would most accelerate [PROFESSIONAL_GOAL]
- The warm paths from your current network to these target relationships

## Event Strategy

### Finding the Right Events
Not all networking events are created equal. Criteria for selecting events worth attending:
- Attendee profile: will [target contacts] be there? (Check speaker lists, sponsor lists, attendee demographics)
- Opportunity for real conversation (cocktail reception vs lecture hall — the former is far better for networking)
- Size: 50–200 person events generate significantly better networking outcomes than 2,000-person conferences

### Event Execution System
Before the event: prepare 3 conversation starters specific to this event's theme
During the event: have 2 goals (specific conversations) rather than a quantity goal
After the event: send personalized follow-up within 24 hours to every meaningful conversation

## Outreach Templates — 5 Scenarios

### Scenario 1: Cold outreach to a target contact
Subject: Your work on [specific project or topic]

"Hi [NAME], I've been following your work on [SPECIFIC PROJECT/TOPIC] — your [specific piece or decision] stood out to me because [genuine reason]. I'm [brief professional context]. I'd love to hear your perspective on [specific question you have]. Would you be open to a 20-minute call in the next few weeks?"

### Scenario 2: Warm introduction request
"Hi [MUTUAL CONNECTION], hope you're well. I'm trying to connect with [TARGET PERSON] — I'd love to get their perspective on [TOPIC]. You came to mind as someone who might know them. Would you be comfortable making an introduction? Happy to send you a short note to make it easy to forward."

### Scenario 3: Re-engaging a dormant tie
"Hi [NAME], it's been too long! I was [specific reason you thought of them] and thought of you. How are things going? I'd love to catch up — would a 15-minute call work in the next few weeks?"

### Scenario 4: Following up after a conference
"Hi [NAME], great to meet you at [EVENT] — your point about [SPECIFIC THING THEY SAID] stuck with me. [1-sentence reaction or follow-up thought]. I'd love to continue the conversation — would you be open to a call?"

### Scenario 5: Adding value without an ask
"Hi [NAME], I came across [ARTICLE/RESOURCE/INTRO] and immediately thought of you because [SPECIFIC REASON IT'S RELEVANT TO THEM]. No action needed — just wanted to pass it along. Hope things are going well."

## Relationship Nurture — Keep-in-Touch Cadence

### Cadence by Relationship Tier
- **Tier 1 (high value, active relationship)**: 1 touchpoint per month (can be a quick message, shared article, or comment on their content)
- **Tier 2 (important, less active)**: 1 touchpoint per quarter
- **Tier 3 (valuable but distant)**: 1 touchpoint every 6 months

Tools for managing this: LinkedIn CRM features, a simple spreadsheet, or tools like Clay or Folk.

### The Value Touch System
5 low-effort, high-impact ways to add value to a relationship without a meeting:
1. Share an article with a 1-sentence note on why it made you think of them
2. Comment thoughtfully on their LinkedIn post (adds visibility for them)
3. Make an introduction between two people in your network who would benefit
4. Send a book recommendation specific to a challenge they mentioned
5. Celebrate a milestone you noticed (new role, published piece, company news)

## Informational Interview Guide

### Requesting an Informational Interview
This works because the ask is small and the framing is flattering:
"I'm exploring [FIELD/TRANSITION] and respect your path deeply. I'd love 20 minutes to hear your advice. Not asking for a job or introduction — just genuinely value your perspective."

### The 10 Best Informational Interview Questions
1. What has your career path actually looked like vs what you expected?
2. What do you know now that you wish you had known when you started in this field?
3. What does it actually take to succeed in [ROLE/FIELD]?
4. What are the most common mistakes you see people make in [FIELD]?
5. What skills or experiences do you think matter most for breaking in?
6. Who else do you think I should be talking to?
7. How has [INDUSTRY] changed in the last 3 years and where do you see it going?
8. What would you do differently if you were starting your career today?
9. What resources do you rely on most to stay current in this field?
10. Is there anything I didn't ask about that you think I should know?

### Post-Interview Follow-Up
Within 24 hours: a specific thank-you note that references something they said and how it shaped your thinking.
Within 2 weeks: a follow-up on something they mentioned or a progress update if they asked about your path.

## Give-First Framework
The 3 ways professionals give value most effectively:
1. **Introductions**: connecting two people in your network who would genuinely benefit from knowing each other
2. **Information**: sharing insights, opportunities, and resources relevant to someone's goals
3. **Endorsement**: publicly acknowledging someone's work through recommendations, testimonials, or amplifying their content

How to identify who to give to: when you think "I just learned something useful" or "I just met someone interesting," think of 1 person in your network who would benefit from that information or introduction.

## Output
Complete networking system with network audit framework, event strategy, 5 outreach templates, relationship nurture cadence, 10 informational interview questions, give-first tactics, and a 30-day networking action plan.`,
    category: 'career',
    tags: ['networking', 'relationships', 'career-development', 'outreach', 'informational-interviews'],
    difficulty: 'beginner',
    useCase: 'Use when building a professional network from scratch, re-activating a dormant network, or preparing for a career transition that requires new relationship capital.',
    authorUsername: 'devdna',
    likes: 215,
    saves: 158,
    copies: 670,
    views: 4150,
    trendScore: 215*2 + 158*3 + 670 + 4150*0.2,
    trendingScore: 215*2 + 158*3 + 670 + 4150*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'System',
    whyTrending: 'Research consistently shows that weak-tie relationships generate more career opportunities than strong-tie relationships; systematic networking is a learnable competitive advantage.',
    bestFor: ['Claude'],
    author: 'devdna',
    uses: 670,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-27',
  },
  {
    id: 'lib-car-013',
    title: 'Skills Gap Analysis & Learning Roadmap',
    slug: 'skills-gap-analysis-learning-roadmap',
    description: 'Comprehensive skills roadmap: current skills inventory, gap prioritization by impact and urgency, learning resources, project portfolio, certification ROI, and 6-month milestones.',
    content: `You are a career development advisor who helps professionals close skills gaps systematically. Build a complete skills gap analysis and learning roadmap for [PROFESSIONAL] targeting [CAREER_GOAL].

## Skills Gap Framework
The most common skills development mistake: learning broadly instead of deeply, following curiosity instead of strategic need, and learning without demonstrating. This framework targets only the skills that create the highest career return on learning investment.

## Phase 1: Current Skills Inventory

### Skills Catalog
Inventory all current skills across 5 categories. For each skill, rate proficiency: Beginner / Practitioner / Expert.
1. **Domain expertise**: functional and industry knowledge
2. **Technical skills**: tools, platforms, languages, methodologies
3. **Analytical skills**: data analysis, financial modeling, research, problem-solving
4. **Leadership and management skills**: team management, project ownership, stakeholder influence
5. **Communication skills**: written, verbal, visual, executive audience

For each skill at Practitioner or Expert level: document 1–2 specific examples of how you have demonstrated this skill at high stakes.

### Evidence Mapping
A skill you cannot prove in an interview or portfolio does not count for hiring and promotion purposes. For each claimed expertise skill, identify:
- Where in your work history this skill is evidenced
- Whether evidence is documented (resume, portfolio, LinkedIn, public work) or only verbal
- Skills that exist but have no documented evidence: these are portfolio gaps to close

## Phase 2: Required Skills Research

### Target Role Skills Mapping
Research [CAREER_GOAL] requirements from 3 sources:
1. Analyze 10 job descriptions for [CAREER_GOAL] and extract the 20 most commonly required skills
2. Conduct 5 informational interviews with people currently in [CAREER_GOAL] and ask what they actually use day-to-day
3. Review LinkedIn profiles of 10 people in [CAREER_GOAL] and note the skills they list and endorse

Combine into a single consolidated skills requirement list with frequency weighting.

## Phase 3: Gap Analysis Matrix

### Prioritization Framework
For each gap, score on two dimensions:
- **Impact on candidacy** (1–5): how much does this gap hurt [PROFESSIONAL]'s competitiveness for [CAREER_GOAL]?
- **Speed to close** (1–5): how quickly can this gap be meaningfully closed with focused effort?

Priority matrix:
- **High impact + fast to close**: close immediately (Quadrant 1)
- **High impact + slow to close**: begin now, expect 3–6 months (Quadrant 2)
- **Low impact + fast to close**: close opportunistically
- **Low impact + slow to close**: do not invest significant time

### Top 5 Priority Gaps
List the top 5 priority gaps from the matrix with:
- Gap name and definition
- Why it matters for [CAREER_GOAL] (the specific impact on candidacy)
- Recommended learning path (most efficient path to demonstrable competency)
- Estimated time to close with focused effort

## Phase 4: Learning Resources

### For Each of the Top 5 Priority Gaps:
Provide specific, curated resources rather than generic categories:
- **Best single book** (if applicable) with a note on which chapters matter most
- **Best online course** (specific platform and course name, not just "YouTube" or "Coursera")
- **Best community or practitioner to follow** for staying current
- **The shortcut**: what single practical project would teach this skill faster than any course?

### The Learning Trap
Most people spend 80% of their learning time on content consumption and 20% on application. Real skill development requires the opposite. For each gap, define a specific application project where the learning happens through doing.

## Phase 5: Portfolio Projects

### Project Design Principles
A portfolio project for a skills gap must:
1. Be real (working for an actual organization — pro bono or freelance is fine)
2. Produce a tangible artifact (code, document, analysis, design, video — something shareable)
3. Demonstrate the gap skill specifically, not just general competence
4. Be completable in under 4 weeks with 5–10 hours per week of focused effort

### 3 Portfolio Project Recommendations
For [PROFESSIONAL]'s top 3 priority gaps, design specific portfolio projects:
- Project name and description
- The skill it demonstrates
- Where to find this project opportunity (specific communities, freelance platforms, volunteer organizations)
- What the deliverable looks like
- How to showcase it (GitHub, Notion, LinkedIn, personal site)

## Phase 6: Certification ROI Analysis

### Certification Decision Framework
Not all certifications are worth the time and money. Evaluate each candidate certification:
- Hiring manager perception: do the people who hire for [CAREER_GOAL] actively look for this certification? (Research by asking in communities or interviews)
- Time investment: hours required to prepare and pass
- Cost: exam + preparation materials + potential course fees
- Shelf life: how long before it expires or becomes outdated
- Return: estimated impact on salary, candidacy, or credibility

### Recommended Certifications for [CAREER_GOAL]
Rank 3–5 certifications relevant to [CAREER_GOAL] by ROI score (hiring manager value ÷ time × cost).

## Phase 7: Learning Schedule

### Weekly Learning Block Design
Sustainable skills development requires scheduled protected time:
- Minimum viable learning block: 5–7 hours per week for meaningful progress
- Optimal split: 70% application, 30% content consumption
- Block scheduling: 2–3 sessions per week rather than 1 long session (spaced repetition)
- Accountability: a learning partner or public commitment mechanism

### Learning Fatigue Prevention
- Cap active skill development at 2 skills simultaneously (more creates overwhelm and shallow progress)
- Complete one demonstrable project per skill before moving to the next
- Celebrate competency milestones, not just completion milestones

## 6-Month Milestones

### Month 1–2: Foundation
- Top 2 priority gaps identified and learning resources selected
- Portfolio project #1 started
- First informational interview to validate skill priority choices

### Month 3–4: Demonstration
- Portfolio project #1 complete and showcased
- First competency milestone reached in priority gap #1
- Portfolio project #2 started for gap #2

### Month 5–6: Application
- Both priority gaps at Practitioner level with documented evidence
- Skills featured prominently on LinkedIn and resume
- 2 portfolio projects showcased
- Active job search or promotion conversation started

## Output
Current skills inventory with proficiency ratings, required skills list from 3 sources, gap analysis priority matrix, top 5 gaps with learning paths, curated resources for each gap, 3 portfolio project designs, certification ROI analysis, weekly learning schedule, and 6-month milestone plan.`,
    category: 'career',
    tags: ['skills', 'learning', 'career-development', 'upskilling', 'career-planning'],
    difficulty: 'intermediate',
    useCase: 'Use when targeting a specific career goal and needing a structured approach to identifying and closing the skills gaps that are blocking progress.',
    authorUsername: 'builderai',
    likes: 165,
    saves: 118,
    copies: 510,
    views: 3200,
    trendScore: 165*2 + 118*3 + 510 + 3200*0.2,
    trendingScore: 165*2 + 118*3 + 510 + 3200*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '14 min',
    outputType: 'Roadmap',
    whyTrending: 'The half-life of skills is shortening across every field; professionals who build systematic learning habits outpace peers who rely only on on-the-job learning.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 510,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-29',
  },
  {
    id: 'lib-car-014',
    title: 'Cover Letter & Application Strategy',
    slug: 'cover-letter-application-strategy',
    description: 'Compelling cover letter template with a specific company hook, achievement highlights, cultural alignment, and a complete application strategy with referral and follow-up tactics.',
    content: `You are a career coach and professional writer who has helped thousands of candidates stand out in competitive hiring processes. Write a complete cover letter and application strategy for [CANDIDATE] applying to [ROLE].

## Cover Letter Philosophy
Most cover letters are ignored because they are not letters — they are resumes in prose form. A cover letter that gets read does one thing a resume cannot: it demonstrates that you understand the company's specific situation and have a specific reason for wanting to be there.

The cover letter that gets an interview answers: "Why this company, why this role, why now?"

## Cover Letter Structure

### Paragraph 1: The Hook (3–4 sentences)
The first paragraph must do two things simultaneously: demonstrate that you researched this specific company (not a template) and establish a genuine, specific reason you want this role.

Topics to draw from for the hook:
- A recent company announcement, product launch, or strategic shift that excited you
- A piece of content (article, podcast, interview) featuring the company's leadership
- A customer experience or product interaction you had personally
- A connection to the company's mission that is rooted in a real experience of yours

What to avoid: "I am excited to apply for the [ROLE] position at [COMPANY]. I believe my background in [X] makes me a strong candidate." — This could have been written for any company in any industry.

### Paragraph 2: Your Most Relevant Professional Story (4–5 sentences)
Tell one story (STAR format: Situation → Action → Result) that directly connects to a key challenge or requirement for this role. The story should:
- Be from the last 3–5 years
- Include a specific, quantified outcome
- Connect explicitly to the role ("This experience is directly relevant because [COMPANY] is currently [specific situation you researched]")

### Paragraph 3: 2–3 Achievement Highlights (bullet format acceptable)
Three concise achievement statements that are the strongest signals of fit for this specific role. These should be different from the story in paragraph 2 and should cover different capability areas:
- Achievement 1: demonstrates [most critical skill for the role]
- Achievement 2: demonstrates [second most important skill or relevant domain knowledge]
- Achievement 3: demonstrates culture fit or values alignment through a work outcome

### Paragraph 4: Cultural Alignment (2–3 sentences)
Why you want to work at this specific company beyond the role itself:
- Reference something specific about the culture, values, or team that resonates (from Glassdoor, company blog, employee LinkedIn posts, news coverage)
- Connect it to something real about how you work or what you value
- Avoid generic statements like "I value innovation and collaboration" — these are meaningless unless grounded in specifics

### Closing Paragraph (2 sentences)
Confident close that makes a specific ask:
"I would welcome the opportunity to discuss how my background aligns with [COMPANY]'s goals. I will follow up in [X days] if I have not heard back — and I am happy to make myself available for a call at your earliest convenience."

Providing a follow-up commitment signals confidence and organization, not desperation.

## Cover Letter Quality Standards
A strong cover letter passes this test before submission:
- Could this letter have been sent to a different company with only the name changed? (If yes, it is a generic letter — rewrite it.)
- Does the letter answer "Why this company?" with something specific? (If no, find the answer or delay submitting.)
- Is it under 400 words? (If over, cut it. Hiring managers read cover letters in 30–90 seconds.)
- Does every sentence earn its place? (Cut any sentence that does not add evidence or connection.)

## Application Strategy

### The Referral Advantage
An application with a referral is 6–10x more likely to reach a recruiter screen than a cold application. Before submitting any application:
1. Search LinkedIn for first and second-degree connections at [COMPANY]
2. For first-degree: reach out directly — "I'm applying for [ROLE] at [COMPANY]. Would you be willing to refer me or mention my name to the recruiting team? I'd be happy to send you my background."
3. For second-degree: request an introduction through the mutual connection

### LinkedIn Research Before Applying
20 minutes of research per application dramatically increases relevance:
- Follow [COMPANY] on LinkedIn and look for recent content that reveals strategic priorities
- Read the LinkedIn profiles of the hiring manager and potential team members
- Search "[COMPANY] [ROLE TITLE]" on LinkedIn to find people in similar roles and their career paths
- Check if any former colleagues or connections have worked there (warm insights)

### Application Timing
Application timing affects callback rates:
- Apply within 48–72 hours of a posting going live (applications submitted after 7 days receive significantly lower consideration)
- Tuesday–Thursday submissions have higher read rates than Monday and Friday
- Apply in the morning (9–11 AM in the company's timezone) when hiring managers review applications

### Application Tracking System
For an organized job search, track every application:
- Company name, role, application date, application method (cold/referral), cover letter version, status, next action date
- Follow-up rule: if no response in 10 business days, send one follow-up email to the recruiter

### Follow-Up Email Template
Subject: Following up — [ROLE] Application — [YOUR NAME]

"Hi [RECRUITER NAME], I submitted my application for [ROLE] on [DATE] and wanted to follow up briefly. I'm genuinely excited about [specific thing about the company or role] and believe my background in [1 specific relevant area] aligns closely with what you're looking for. I've attached my resume in case it's helpful. Looking forward to hearing from you."

Keep follow-ups to once — more than one follow-up crosses into persistence that damages your candidacy.

## Output
Complete cover letter (all 4 paragraphs fully written for [CANDIDATE] applying to [ROLE]), quality checklist, referral activation guide, LinkedIn research framework, application timing guidance, tracking system template, and follow-up email template.`,
    category: 'career',
    tags: ['cover-letter', 'job-application', 'job-search', 'career', 'writing'],
    difficulty: 'beginner',
    useCase: 'Use when applying to a competitive role and needing a cover letter that demonstrates genuine company-specific research and relevant achievement.',
    authorUsername: 'promptarchitect',
    likes: 255,
    saves: 182,
    copies: 745,
    views: 4550,
    trendScore: 255*2 + 182*3 + 745 + 4550*0.2,
    trendingScore: 255*2 + 182*3 + 745 + 4550*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Document',
    whyTrending: 'Most cover letters read as templates; a company-specific letter demonstrating genuine research dramatically stands out in competitive applicant pools.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 745,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-03',
  },
  {
    id: 'lib-car-015',
    title: 'Leadership Development Plan',
    slug: 'leadership-development-plan',
    description: '12-month leadership development roadmap: style assessment, 5 competencies, 360 strategy, stretch assignments, coaching, and executive presence milestones.',
    content: `You are an executive coach and leadership development expert who has designed programs for Fortune 500 companies and high-growth startups. Build a complete 12-month leadership development plan for [PROFESSIONAL] moving from [CURRENT] to [TARGET_LEVEL].

## Leadership Development Philosophy
Leadership is a practice, not a destination. The most effective development plans are built on real work challenges — not classroom learning that never connects to the actual problems a leader faces. This plan uses 70/20/10 learning: 70% from on-the-job challenge, 20% from learning from others, 10% from formal education.

## Leadership Style Assessment

### Self-Assessment Questions (Answer Before Building the Plan)
Honest self-assessment in these 5 areas reveals the highest-leverage development opportunities:
1. How do I make decisions? (Data-driven vs intuitive vs consensus-seeking vs directive)
2. How do I build trust with new team members? (Through competence demonstration / through vulnerability / through availability / through deliverables)
3. How do I handle conflict? (Confront directly / mediate / avoid until forced / defer to authority)
4. How do I respond under pressure? (Become more directive / withdraw / seek input / become analytical)
5. What feedback have I received most consistently about my leadership? (Ask 3 people before answering this question)

### Leadership Style Profile
Based on the self-assessment, identify:
- Dominant leadership style and the contexts where it serves you well
- Style blind spots (where your default style creates friction or limits team performance)
- The leadership style gap between [CURRENT] and [TARGET_LEVEL] (what behaviors are expected at [TARGET_LEVEL] that are not characteristic of [CURRENT]?)

## Five Competencies to Develop

### Competency Selection Criteria
Choose the 5 competencies that have the highest impact on success at [TARGET_LEVEL]. Rank them by:
- Expected impact on performance reviews at [TARGET_LEVEL]
- Current gap between [PROFESSIONAL]'s demonstrated level and expectations
- Organizational visibility (competencies that are observable to decision-makers)

### For Each of 5 Competencies:
- **Competency name**: specific and behavioral (not vague like "communication" — say "influencing cross-functional stakeholders without authority")
- **Why it matters at [TARGET_LEVEL]**: the specific situations where this competency is required
- **Current level**: honest assessment with evidence
- **Target level**: what success looks like in 12 months
- **Development activities**: specific actions mapped to the 70/20/10 model

## 360 Feedback Strategy

### Why 360 Feedback Is the Accelerator
External feedback consistently reveals blind spots that self-assessment misses. For leaders moving to [TARGET_LEVEL], 360 feedback from the right people at the right time is the most valuable development tool available.

### 360 Design for [PROFESSIONAL]
- **Who to ask** (5–8 people): manager, skip-level, 2–3 peers, 2–3 direct reports if applicable
- **What to ask**: 5 specific, behavioral questions rather than generic "rate their leadership" format
- **How to collect**: in a 1:1 conversation (not a form) for the most actionable feedback
- **How to process**: identify patterns (feedback from multiple sources = signal); single points of feedback = consider, don't over-index
- **How to act on it**: share your development plan with your manager and 2–3 trusted colleagues — public accountability accelerates change

### 360 Questions Template
10 questions that generate specific, actionable feedback:
1. What does [PROFESSIONAL] do that most helps the team succeed?
2. What does [PROFESSIONAL] do that inadvertently limits the team's effectiveness?
3. In what situations does [PROFESSIONAL] show up at their best as a leader?
4. In what situations does [PROFESSIONAL] show up at their least effective?
5. If you could change one thing about how [PROFESSIONAL] leads, what would it be?
6. How well does [PROFESSIONAL] develop and grow the people around them?
7. How effectively does [PROFESSIONAL] communicate strategic context to the team?
8. How does [PROFESSIONAL] handle ambiguity and uncertainty?
9. What one thing would make [PROFESSIONAL] more effective at [TARGET_LEVEL]?
10. What would you want [PROFESSIONAL] to know about their impact that they might not be aware of?

## Development Activities — 70/20/10 Model

### 70% On-the-Job Challenge (Stretch Assignments)
Identify 3 stretch assignments that force development in priority competencies:
- Assignment 1: a project that requires leading cross-functionally (develops influence without authority)
- Assignment 2: a decision under uncertainty with real stakes (develops judgment and tolerance for ambiguity)
- Assignment 3: a people challenge (a performance conversation, a team conflict, or a re-org impact)

For each: why this specific challenge develops the target competency, what success looks like, and what to document to use as evidence in the promotion case.

### 20% Learning From Others (Mentors, Coaches, Peers)
- **Executive sponsor or mentor**: who at [TARGET_LEVEL] or above is willing to invest 1–2 hours per quarter in [PROFESSIONAL]'s development? (How to identify and ask)
- **Peer learning group**: 3–5 peers at similar levels developing similar competencies — structured monthly conversation format
- **External coach**: when is professional coaching worth the investment? (At inflection points: before a promotion push, during a major role change, or when hitting a ceiling with self-development)

### 10% Formal Learning
Curate 2–3 specific formal learning activities (not a generic reading list):
- Leadership development program relevant to [PROFESSIONAL]'s industry or company size
- 2 specific books with the most relevant chapters identified
- 1 online course or certification with specific value for [TARGET_LEVEL]

## Team Leadership Skills (If Managing People)
For leaders managing teams, 4 specific team leadership skills to develop:
1. **Delegation**: moving from doing to enabling — the delegation spectrum from task assignment to full ownership
2. **Feedback delivery**: the SBI (Situation-Behavior-Impact) model for direct, actionable feedback that is received as coaching
3. **Career development**: 1:1 coaching conversations that develop direct reports' skills and increase their engagement
4. **Performance management**: how to address underperformance early, compassionately, and directly

## Executive Presence Milestones
For [TARGET_LEVEL], define 4 observable executive presence milestones that can be measured:
1. Is recognized as a voice of clarity in cross-functional meetings
2. Communicates strategic context (not just tasks) to the team consistently
3. Delivers bad news or difficult feedback without delay or softening to the point of ineffectiveness
4. Is proactively sought out for input on decisions above their current pay grade

## Success Metrics — 12-Month Review
How to assess whether the development plan worked:
- Manager feedback at 6 months: have the competency gaps narrowed?
- 360 feedback at 12 months: is external perception moving toward [TARGET_LEVEL] expectations?
- Sponsorship signal: has [PROFESSIONAL] been given stretch responsibilities associated with [TARGET_LEVEL]?
- Promotion conversation: has the formal case been made and received positively?

## Output
12-month leadership development plan with style assessment framework, 5 priority competencies with development activities, 360 feedback guide (10 questions + implementation), 3 stretch assignment designs, mentorship and coaching guidance, team leadership skill development if applicable, executive presence milestones, and 12-month success metrics.`,
    category: 'career',
    tags: ['leadership', 'career-development', 'management', 'executive-presence', 'promotion'],
    difficulty: 'advanced',
    useCase: 'Use when a professional is preparing for a move to a leadership role or when an existing leader wants a structured development plan for the next level.',
    authorUsername: 'marketinglab',
    likes: 88,
    saves: 55,
    copies: 345,
    views: 2620,
    trendScore: 88*2 + 55*3 + 345 + 2620*0.2,
    trendingScore: 88*2 + 55*3 + 345 + 2620*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Leadership development budgets are shifting to individuals; professionals who manage their own development systematically advance faster than those who wait for company programs.',
    bestFor: ['Claude'],
    author: 'marketinglab',
    uses: 345,
    estimatedTokens: 910,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-30',
  },
]
