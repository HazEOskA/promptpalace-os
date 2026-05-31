import type { Prompt } from './prompts'

export const LEARNING_PROMPTS: Prompt[] = [
  {
    id: 'lib-lea-001',
    title: 'Feynman Technique Deep Explainer',
    slug: 'feynman-technique-deep-explainer',
    description: 'Applies the Feynman Technique to any topic, exposing gaps in understanding and rebuilding knowledge from first principles.',
    content: `You are a master teacher who uses the Feynman Technique to create ironclad understanding of any subject. Apply this method rigorously to the topic I provide.

## Topic
[TOPIC] — the concept, theory, or subject I want to truly understand.

## My Current Level
[CURRENT_UNDERSTANDING] — describe what you already know, even if it's "nothing yet."

## Step 1: Plain-Language Core Explanation
Explain [TOPIC] as if teaching a curious 12-year-old with no domain background. Use:
- A single vivid analogy as the conceptual anchor
- No jargon in the first pass — translate every technical term into everyday language
- Short paragraphs (3 sentences max each)

## Step 2: Identify the Hard Parts
List the 3–5 sub-concepts where most learners' understanding breaks down. For each, explain why it's confusing and give a clearer mental model.

## Step 3: Rebuild with Precision
Re-explain the topic with accurate terminology now that the intuition is established. Connect each technical term back to the plain-language anchor from Step 1.

## Step 4: Gap Diagnosis
Based on [CURRENT_UNDERSTANDING], identify exactly what gaps remain. Generate 5 targeted questions I should be able to answer if I truly understand this topic.

## Step 5: Simplicity Test
Summarize the entire concept in 3 sentences. If you can't, identify what's still murky.

## Output Format
Structured sections with headers. Flag any place where a deeper dive would be valuable with [DEEP DIVE AVAILABLE].`,
    category: 'learning',
    tags: ['feynman-technique', 'first-principles', 'comprehension', 'teaching', 'concept-mastery'],
    difficulty: 'beginner',
    uses: 4821,
    saves: 1043,
    trending: true,
    trendingScore: 96,
    author: 'deeplearn_dao',
    createdAt: '2024-10-14',
    estimatedTokens: 620,
    model: 'Claude 3.5',
    useCase: 'Use when encountering a new topic and wanting to build a durable mental model rather than surface-level familiarity.',
    authorUsername: 'deeplearn_dao',
    likes: 489,
    copies: 4821,
    views: 18400,
    trendScore: 489*2 + 1043*3 + 4821 + 18400*0.2,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '8 min',
    outputType: 'Explanation',
    whyTrending: 'The most-used learning framework in the world — applied systematically. Learners report breakthroughs on concepts they\'ve struggled with for months.',
    bestFor: ['Claude', 'ChatGPT', 'Gemini'],
  },
  {
    id: 'lib-lea-002',
    title: 'Spaced Repetition Flashcard Generator',
    slug: 'spaced-repetition-flashcard-generator',
    description: 'Converts any study material into scientifically optimized flashcard sets designed for Anki or manual spaced repetition review.',
    content: `You are a learning scientist specializing in memory retention and spaced repetition systems. Convert the following material into a high-quality flashcard deck.

## Source Material
[PASTE_CONTENT_OR_DESCRIBE_TOPIC]

## Skill Level
[SKILL_LEVEL] — beginner / intermediate / advanced

## Card Design Rules (follow strictly)
1. **Minimum Information Principle**: One fact per card. Never combine two ideas.
2. **Cloze deletions over Q&A** where possible: "The capital of France is {{c1::Paris}}"
3. **Avoid trivial cards**: Every card must earn retention by testing something worth knowing.
4. **Contextual anchors**: Include a brief context hint on the back for isolated facts.
5. **Reverse pairs**: For vocabulary and definitions, generate both directions automatically.

## Card Categories to Generate

### Tier 1 — Core Concepts (10–15 cards)
Foundational definitions and the "what is it" questions.

### Tier 2 — Mechanism & Process (8–12 cards)
"How does it work" and cause-effect relationships.

### Tier 3 — Application & Edge Cases (6–10 cards)
Scenario-based cards that test whether understanding transfers.

### Tier 4 — Common Mistakes (4–6 cards)
Cards that explicitly test misconceptions: "Why is this wrong: [WRONG_STATEMENT]?"

## Output Format
Produce cards in this exact format for easy import:
Front: [question or cloze]
Back: [answer + 1-sentence context]
Tag: [tier] [subtopic]

End with a suggested review schedule: first review timing, graduation criteria, and daily card count recommendation.`,
    category: 'learning',
    tags: ['spaced-repetition', 'flashcards', 'anki', 'memorization', 'retention'],
    difficulty: 'beginner',
    uses: 3654,
    saves: 889,
    trending: true,
    trendingScore: 91,
    author: 'memvault_ai',
    createdAt: '2024-10-22',
    estimatedTokens: 580,
    model: 'GPT-4o',
    useCase: 'Use when studying for exams, learning a new language, or cementing technical knowledge that needs long-term retention.',
    authorUsername: 'memvault_ai',
    likes: 412,
    copies: 3654,
    views: 14200,
    trendScore: 412*2 + 889*3 + 3654 + 14200*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '6 min',
    outputType: 'Flashcards',
    whyTrending: 'Anki users discovered this prompt converts any material into import-ready decks in minutes. Study efficiency jumps 4× compared to re-reading.',
    bestFor: ['ChatGPT', 'Claude'],
  },
  {
    id: 'lib-lea-003',
    title: 'Socratic Questioning Mastery Session',
    slug: 'socratic-questioning-mastery-session',
    description: 'Guides you to deep understanding of any topic through structured Socratic dialogue — no passive reading, only active thinking.',
    content: `You are a Socratic tutor. Your role is not to explain — it is to ask questions that lead me to discover answers myself. Never give me an answer directly; instead, ask the next logical question that will reveal the answer through my own reasoning.

## Topic I Want to Master
[TOPIC]

## My Starting Belief or Understanding
[MY_CURRENT_POSITION] — state what you currently believe to be true about this topic.

## Session Protocol
1. Begin by asking me to define the core term in my own words.
2. When I answer, probe for clarity: "What do you mean by [WORD_I_USED]?"
3. Find an assumption in my answer and ask me to examine it: "Is that always true? What would need to be true for that to hold?"
4. Introduce a counterexample when my thinking stabilizes: "What about [EDGE_CASE]?"
5. Ask me to reconcile contradictions I create through my own responses.
6. Every 5 exchanges, pause and ask: "Can you now state what you know more confidently than when we started?"

## Rules for You (the tutor)
- Never lecture. One question at a time.
- Mirror my language back to me in questions.
- If I say "I don't know," respond with "What would you need to know to answer that?" — not with an explanation.
- End each session with: "What's the one thing you're most confident about now, and what's still unclear?"

## Starting Question
Ask me your first Socratic question to begin the session.`,
    category: 'learning',
    tags: ['socratic-method', 'critical-thinking', 'dialogue', 'philosophy', 'active-learning'],
    difficulty: 'intermediate',
    uses: 2187,
    saves: 543,
    trending: false,
    trendingScore: 74,
    author: 'dialectic_studio',
    createdAt: '2024-11-03',
    estimatedTokens: 480,
    model: 'Claude 3.5',
    useCase: 'Use when you want to genuinely understand something, not just know it — especially for complex subjects where passive reading fails.',
    authorUsername: 'dialectic_studio',
    likes: 267,
    copies: 2187,
    views: 8900,
    trendScore: 267*2 + 543*3 + 2187 + 8900*0.2,
    featured: false,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Interactive Session',
    whyTrending: 'Philosophy students and autodidacts swear by this format. Forces active recall and exposes exactly where your understanding is hollow.',
    bestFor: ['Claude'],
  },
  {
    id: 'lib-lea-004',
    title: 'Course Curriculum Designer',
    slug: 'course-curriculum-designer',
    description: 'Builds a complete learning curriculum for any skill, from zero to mastery, with module breakdowns, resources, and milestones.',
    content: `You are a curriculum designer with expertise in adult learning theory and skill development. Design a complete, structured learning curriculum for the following skill.

## Skill to Learn
[SKILL] — be as specific as possible (e.g., "Python for data analysis" not just "programming").

## Learner Profile
- Current level: [BEGINNER / INTERMEDIATE / ADVANCED]
- Available time per week: [HOURS_PER_WEEK]
- Learning style preference: [VISUAL / PROJECT_BASED / READING / VIDEO]
- End goal: [WHAT_YOU_WANT_TO_BE_ABLE_TO_DO]

## Curriculum Architecture

### Phase 1 — Foundation (Weeks 1–[X])
Core concepts without which nothing else makes sense. For each module:
- Learning objective (measurable: "You will be able to...")
- Key concepts covered
- Recommended resources (free + paid, ranked by quality)
- Practice exercise
- Completion criteria

### Phase 2 — Core Competence (Weeks [X]–[Y])
The 20% of knowledge that covers 80% of real-world use cases.

### Phase 3 — Advanced Application (Weeks [Y]–[Z])
Edge cases, professional patterns, and the knowledge that separates novices from practitioners.

### Phase 4 — Mastery Projects (Final [X] weeks)
2–3 portfolio-worthy projects that demonstrate complete competence to employers or clients.

## Learning Milestones
Define clear checkpoints at the end of each phase. Include a self-assessment test with 5 questions per milestone.

## Resource Stack
Curated list: best book, best free course, best paid course, best community, best reference documentation.

## Weekly Study Template
Time-blocked template for a [HOURS_PER_WEEK]-hour week showing exactly how to allocate study time.`,
    category: 'learning',
    tags: ['curriculum', 'skill-development', 'learning-plan', 'education', 'roadmap'],
    difficulty: 'beginner',
    uses: 5102,
    saves: 1087,
    trending: true,
    trendingScore: 94,
    author: 'learncraft_hq',
    createdAt: '2024-09-28',
    estimatedTokens: 700,
    model: 'GPT-4o',
    useCase: 'Use when starting to learn something new and wanting a structured path rather than random YouTube rabbit holes.',
    authorUsername: 'learncraft_hq',
    likes: 634,
    copies: 5102,
    views: 21300,
    trendScore: 634*2 + 1087*3 + 5102 + 21300*0.2,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '10 min',
    outputType: 'Curriculum',
    whyTrending: 'Replaces months of scattered learning with a coherent path to mastery. Used by self-taught developers and career changers worldwide.',
    bestFor: ['ChatGPT', 'Claude'],
  },
  {
    id: 'lib-lea-005',
    title: 'Personalized Study Schedule Creator',
    slug: 'personalized-study-schedule-creator',
    description: 'Generates a realistic, sustainable study schedule tailored to your goals, time constraints, and energy patterns.',
    content: `You are a productivity coach specializing in learning optimization. Create a detailed, personalized study schedule based on the constraints and goals I provide.

## Study Goals
- What I'm learning: [SUBJECT_OR_SKILL]
- Deadline or target date: [DATE_OR_TIMEFRAME]
- Depth required: [OVERVIEW / WORKING_KNOWLEDGE / EXPERT_LEVEL]

## Life Constraints
- Work/school hours: [SCHEDULE]
- Peak energy times: [MORNING / AFTERNOON / EVENING]
- Non-negotiable commitments: [LIST]
- Available study days per week: [NUMBER]
- Hours available per session: [MIN_SESSION] to [MAX_SESSION]

## Learning Material Inventory
List what you have:
- Books: [TITLES_AND_PAGE_COUNTS]
- Courses: [NAMES_AND_ESTIMATED_HOURS]
- Practice materials: [DESCRIBE]

## Schedule Design

### Weekly Template
Design a recurring weekly schedule that:
- Matches session length to energy level (hard material when energy is high)
- Alternates between acquisition (reading/watching) and consolidation (practice/review)
- Builds in mandatory review sessions (Thursdays or every 4th session)
- Protects against burnout with buffer days

### Daily Session Structure (per study day)
- Warm-up (5 min): Review last session's key points
- Deep work block: Primary new material
- Active recall (10 min): Self-test without notes
- Notes consolidation (5 min): Capture key insights

### Milestone Calendar
Week-by-week content targets from start to deadline, with buffer weeks built in.

### Early Warning System
If I fall behind by [X] days, here's the minimal viable recovery plan.

Output as a calendar-friendly weekly grid plus a day-by-day breakdown for the first two weeks.`,
    category: 'learning',
    tags: ['study-schedule', 'productivity', 'time-management', 'planning', 'consistency'],
    difficulty: 'beginner',
    uses: 3289,
    saves: 712,
    trending: false,
    trendingScore: 68,
    author: 'studyflow_labs',
    createdAt: '2024-10-05',
    estimatedTokens: 560,
    model: 'GPT-4o',
    useCase: 'Use when you have a learning goal with a deadline and need to turn vague intentions into concrete daily actions.',
    authorUsername: 'studyflow_labs',
    likes: 356,
    copies: 3289,
    views: 12700,
    trendScore: 356*2 + 712*3 + 3289 + 12700*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '7 min',
    outputType: 'Schedule',
    whyTrending: 'Most study schedules fail because they\'re unrealistic. This one accounts for energy patterns and life constraints before blocking calendar time.',
    bestFor: ['ChatGPT', 'Claude'],
  },
  {
    id: 'lib-lea-006',
    title: 'Dual-Mode Concept Summarizer (ELI5 + Expert)',
    slug: 'dual-mode-concept-summarizer',
    description: 'Summarizes any concept at two levels simultaneously — dead-simple for intuition, then precise for depth — bridging understanding and accuracy.',
    content: `You are a science communicator and domain expert. Summarize the following concept in two modes: one for a curious beginner and one for a practitioner who wants the full technical picture.

## Concept to Summarize
[CONCEPT_OR_TEXT]

## Context
- Domain: [FIELD_OR_DOMAIN]
- Why I'm learning this: [PURPOSE]

---

## MODE 1 — ELI5 (Explain Like I'm 12)
Write a 150–200 word summary that:
- Starts with a single, memorable analogy that captures the core idea
- Uses zero jargon — if a technical word must appear, immediately define it in parentheses
- Focuses on "what it does" over "how it works technically"
- Ends with one sentence about why this concept matters in the real world

## MODE 2 — Expert Summary
Write a 200–300 word summary that:
- Opens with a precise technical definition
- Describes the mechanism, not just the outcome
- Notes key assumptions, limitations, and failure modes
- References related concepts a practitioner would connect this to
- Flags open questions or areas of active debate in the field

## MODE 3 — Bridge Statement
Write 2–3 sentences that explicitly connect the ELI5 analogy to the expert definition. This is the "aha" statement that locks both levels of understanding together.

## Quick Reference Card
3-bullet summary for quick future recall:
- Core idea in one sentence
- Most common application
- Most common misconception`,
    category: 'learning',
    tags: ['summarization', 'eli5', 'comprehension', 'dual-level', 'concepts'],
    difficulty: 'beginner',
    uses: 4103,
    saves: 876,
    trending: true,
    trendingScore: 88,
    author: 'clearminds_ai',
    createdAt: '2024-10-18',
    estimatedTokens: 520,
    model: 'Claude 3.5',
    useCase: 'Use when encountering a new concept that you need to both quickly grasp and eventually master at depth.',
    authorUsername: 'clearminds_ai',
    likes: 445,
    copies: 4103,
    views: 16800,
    trendScore: 445*2 + 876*3 + 4103 + 16800*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '5 min',
    outputType: 'Summary',
    whyTrending: 'The dual-mode format solves the classic problem: oversimplified explanations that don\'t scale vs. technical ones that lose beginners entirely.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'lib-lea-007',
    title: 'Practice Problem Generator with Graduated Hints',
    slug: 'practice-problem-generator-graduated-hints',
    description: 'Creates tailored practice problems for any subject with a built-in hint system that guides without giving away answers.',
    content: `You are a master tutor who designs practice problems that build genuine competence. Generate a practice problem set for the following topic with a scaffolded hint system.

## Topic
[TOPIC] — be specific (e.g., "calculating compound interest" not "finance").

## Skill Level
[SKILL_LEVEL] — beginner / intermediate / advanced

## Problem Set Design

### Problem 1 — Foundational (direct application)
A problem that tests the core concept with no distractions. Solvable with only the fundamental knowledge.

### Problem 2 — Transfer (slightly different context)
Same concept, different surface features. Tests whether understanding is concept-level, not example-level.

### Problem 3 — Multi-step (combines related ideas)
Requires applying [TOPIC] alongside one or two prerequisite concepts. Mirrors real-world complexity.

### Problem 4 — Tricky Case (tests misconceptions)
A problem specifically designed to surface the most common wrong intuition about [TOPIC]. If the student falls for the trap, they'll learn more from the mistake than from 10 correct answers.

### Problem 5 — Open-ended (creative application)
An under-constrained problem where multiple valid approaches exist. Tests ownership of the concept.

## Hint System (for each problem, provide 3 graduated hints)
- Hint 1 (nudge): Reframes the question without giving direction — just removes a false assumption.
- Hint 2 (direction): Points to the relevant concept or first step without revealing the method.
- Hint 3 (scaffold): Walks through the first step explicitly, leaving the rest to the student.

## Full Solutions
Provide complete worked solutions after all problems. Include the reasoning behind each step, not just the mechanics.`,
    category: 'learning',
    tags: ['practice-problems', 'problem-solving', 'hints', 'active-learning', 'skill-building'],
    difficulty: 'intermediate',
    uses: 2934,
    saves: 654,
    trending: false,
    trendingScore: 72,
    author: 'practicelab_dev',
    createdAt: '2024-11-08',
    estimatedTokens: 640,
    model: 'Claude 3.5',
    useCase: 'Use when you\'ve finished studying a topic and need deliberate practice that challenges you without being so hard you give up.',
    authorUsername: 'practicelab_dev',
    likes: 312,
    copies: 2934,
    views: 11400,
    trendScore: 312*2 + 654*3 + 2934 + 11400*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '8 min',
    outputType: 'Practice Set',
    whyTrending: 'The graduated hint system prevents the two failure modes: giving up immediately or getting spoiled by full solutions. Used heavily by STEM students.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'lib-lea-008',
    title: 'Mental Model Library Builder',
    slug: 'mental-model-library-builder',
    description: 'Identifies and explains the most powerful mental models for any domain, showing how to apply them to real decisions and problems.',
    content: `You are a cognitive scientist and cross-domain thinker. Build a curated mental model library for the domain I specify, explaining each model with enough depth to make it immediately usable.

## Domain
[DOMAIN] — e.g., product management, investing, scientific research, negotiation.

## My Goal
[WHAT_YOU_WANT_TO_GET_BETTER_AT] — the types of decisions, problems, or analyses you face.

## Mental Model Curation

For each of the 8–10 most powerful mental models for [DOMAIN], provide:

### Model Name
**Origin**: Which field this model comes from and who formalized it.
**Core Idea** (2–3 sentences): The cleanest possible statement of the model.
**Mechanism**: How the model works — not just what it says, but why it's true.
**Canonical Example**: The clearest real-world illustration of the model in action.
**Application to [DOMAIN]**: Exactly how to use this model when facing [WHAT_YOU_WANT_TO_GET_BETTER_AT]. Be specific — give a decision prompt like "Ask yourself: [QUESTION]."
**Failure Mode**: When this model leads you astray. Every powerful model has a blind spot.
**Pairs Well With**: One other model from this list that complements or corrects this one.

## Synthesis
After all models, provide:
1. A decision tree: "When facing [TYPE_OF_PROBLEM], start with [MODEL_A], then check with [MODEL_B]."
2. The single most underused model in [DOMAIN] and why practitioners miss it.
3. A 30-day practice plan: one model per 3–4 days, with a daily micro-exercise.`,
    category: 'learning',
    tags: ['mental-models', 'decision-making', 'frameworks', 'thinking', 'cognition'],
    difficulty: 'intermediate',
    uses: 3412,
    saves: 821,
    trending: false,
    trendingScore: 79,
    author: 'modelforge_ai',
    createdAt: '2024-10-30',
    estimatedTokens: 680,
    model: 'Claude 3.5',
    useCase: 'Use when you want to level up your thinking in a domain by internalizing the core frameworks practitioners use.',
    authorUsername: 'modelforge_ai',
    likes: 389,
    copies: 3412,
    views: 13600,
    trendScore: 389*2 + 821*3 + 3412 + 13600*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Framework Library',
    whyTrending: 'Mental models are discussed everywhere but rarely taught with application depth. This prompt delivers practitioner-level clarity on when and how to use each model.',
    bestFor: ['Claude'],
  },
  {
    id: 'lib-lea-009',
    title: 'Book Summary and Key Takeaways Extractor',
    slug: 'book-summary-key-takeaways-extractor',
    description: 'Produces a layered book summary — core thesis, chapter breakdowns, actionable takeaways, and critical analysis — in a fraction of the reading time.',
    content: `You are a professional book summarizer with expertise in distilling complex texts into actionable knowledge. Produce a comprehensive summary and analysis of the following book.

## Book Details
- Title: [BOOK_TITLE]
- Author: [AUTHOR_NAME]
- My reason for reading it: [PURPOSE — e.g., career development, curiosity, solving a specific problem]

## Summary Structure

### 1. Core Thesis (1 paragraph)
The one argument the entire book is built around. If the author could only keep one paragraph, this is it.

### 2. Big Ideas (5–7 key concepts)
For each major idea:
- **Concept name**: The author's term or my label
- **Claim**: What the author argues
- **Evidence**: The key data, story, or argument used to support it
- **Practical implication**: What changes if you believe this

### 3. Chapter-by-Chapter Breakdown
For each chapter or major section: title, main point (1–2 sentences), most memorable illustration.

### 4. Top 5 Actionable Takeaways
Specific things a reader can do differently starting this week. Framed as actions, not insights.

### 5. Critical Analysis
- What the book gets right that most people miss
- Where the argument is weakest or evidence is thin
- What it contradicts in other well-regarded works on [TOPIC]
- Who should NOT read this book (mismatched expectations)

### 6. Quotable Lines
5 direct quotes that capture the author's voice and core ideas.

### 7. Further Reading
3 books that deepen, challenge, or complement the main arguments.`,
    category: 'learning',
    tags: ['book-summary', 'reading', 'knowledge-extraction', 'analysis', 'nonfiction'],
    difficulty: 'beginner',
    uses: 5893,
    saves: 1098,
    trending: true,
    trendingScore: 92,
    author: 'readwise_proto',
    createdAt: '2024-09-15',
    estimatedTokens: 660,
    model: 'GPT-4o',
    useCase: 'Use before, during, or after reading a nonfiction book to structure your understanding and extract actionable insights.',
    authorUsername: 'readwise_proto',
    likes: 712,
    copies: 5893,
    views: 24100,
    trendScore: 712*2 + 1098*3 + 5893 + 24100*0.2,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '6 min',
    outputType: 'Summary',
    whyTrending: 'The critical analysis section is what makes this different — it doesn\'t just summarize, it stress-tests the book\'s arguments. Executives love it.',
    bestFor: ['ChatGPT', 'Claude'],
  },
  {
    id: 'lib-lea-010',
    title: 'Skill Gap Analyzer and Learning Roadmap Builder',
    slug: 'skill-gap-analyzer-learning-roadmap',
    description: 'Performs a rigorous skill gap analysis between your current state and your target role or goal, then builds a prioritized roadmap to close the gap.',
    content: `You are a skills strategist and career development expert. Analyze the gap between my current skills and my target, then produce a concrete roadmap to close it.

## Current State
- Current role/background: [CURRENT_ROLE_OR_BACKGROUND]
- Skills I have (be honest): [SKILL_LIST — rate each 1–5 if possible]
- Hours per week available for learning: [HOURS]
- Timeline to target: [TIMEFRAME]

## Target State
- Target role, project, or capability: [TARGET]
- Why this matters to me: [MOTIVATION]

## Gap Analysis Process

### Step 1 — Target Role Decomposition
Break [TARGET] into its 10–15 core skill requirements. For each skill:
- Required proficiency level (1–5)
- Whether it's a "day 1 requirement" or a "year 2 nice-to-have"
- Observable indicator: "You'll know you have this skill when you can [DO_X]"

### Step 2 — Current State Assessment
Rate my current level on each required skill based on [SKILL_LIST]. Be honest and specific — a false positive here wastes months.

### Step 3 — Gap Matrix
| Skill | Required | Current | Gap | Priority |
|-------|----------|---------|-----|----------|

Prioritize gaps by: (Required Level × Business Impact) / Learning Time.

### Step 4 — 90-Day Roadmap
A quarter-by-quarter plan:
- Q1: Close the 3 highest-priority gaps (these will unlock the most opportunities)
- Q2: Build depth in supporting skills
- Q3: Polish and portfolio-building

### Step 5 — Resources per Gap
For each top-priority gap: the fastest path to proficiency (not the most thorough — the fastest effective route).

### Step 6 — Progress Checkpoints
Measurable milestones at 30, 60, and 90 days. What should you be able to do by each date?`,
    category: 'learning',
    tags: ['skill-gap', 'career-development', 'roadmap', 'upskilling', 'self-assessment'],
    difficulty: 'intermediate',
    uses: 4234,
    saves: 967,
    trending: false,
    trendingScore: 83,
    author: 'pathfinder_ai',
    createdAt: '2024-10-08',
    estimatedTokens: 720,
    model: 'GPT-4o',
    useCase: 'Use when preparing for a career transition, job application, or new project that requires capabilities you don\'t yet fully have.',
    authorUsername: 'pathfinder_ai',
    likes: 487,
    copies: 4234,
    views: 17200,
    trendScore: 487*2 + 967*3 + 4234 + 17200*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '10 min',
    outputType: 'Roadmap',
    whyTrending: 'Career changers use this to stop guessing what to learn. The prioritization formula alone saves months of learning the wrong things first.',
    bestFor: ['ChatGPT', 'Claude'],
  },
  {
    id: 'lib-lea-011',
    title: 'Debate Prep and Counterargument Trainer',
    slug: 'debate-prep-counterargument-trainer',
    description: 'Stress-tests your position on any topic by generating the strongest possible counterarguments, helping you build iron-clad reasoning.',
    content: `You are a debate coach and intellectual sparring partner. Help me build the strongest possible position on the topic below by subjecting it to rigorous counterargument, steelmanning the opposition, and stress-testing my reasoning.

## My Position
Topic: [TOPIC]
My argument: [MY_POSITION_IN_2-3_SENTENCES]
My strongest supporting evidence: [KEY_EVIDENCE_OR_REASONING]

## Debate Preparation Protocol

### Phase 1 — Steelman the Opposition
Present the 3 strongest possible versions of the opposing argument. Not strawmen — the most intellectually honest, well-evidenced counter-positions. If a brilliant, well-informed person disagreed with me, what exactly would they say?

### Phase 2 — Attack My Argument
For each component of my position, identify:
- The weakest assumption I'm making
- The evidence most likely to undermine my claim
- The scenario where my position clearly fails
Be direct. Don't soften the critique.

### Phase 3 — My Defense Strategy
For each attack from Phase 2, help me construct the strongest response. What evidence should I gather? What framing protects my position? What concessions can I make without losing the core argument?

### Phase 4 — Common Ground Mapping
Where does the strongest version of the opposition agree with me? Identifying genuine common ground makes my argument harder to dismiss.

### Phase 5 — One-Minute Rebuttal
Write a tight, 150-word rebuttal I can use after hearing the opposing argument. Sharp, evidence-based, non-dismissive.

## Debate Practice Round
After completing phases 1–5, argue the opposing position back at me so I can practice responding in real time. Don't hold back.`,
    category: 'learning',
    tags: ['debate', 'critical-thinking', 'argumentation', 'reasoning', 'rhetoric'],
    difficulty: 'advanced',
    uses: 1876,
    saves: 423,
    trending: false,
    trendingScore: 61,
    author: 'ironclad_ai',
    createdAt: '2024-11-12',
    estimatedTokens: 590,
    model: 'Claude 3.5',
    useCase: 'Use before a presentation, debate, academic defense, or any situation where your position will be challenged.',
    authorUsername: 'ironclad_ai',
    likes: 198,
    copies: 1876,
    views: 7400,
    trendScore: 198*2 + 423*3 + 1876 + 7400*0.2,
    featured: false,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Debate Prep',
    whyTrending: 'Law students, researchers, and startup founders use this to fortify positions before high-stakes conversations. Forces genuine intellectual rigor.',
    bestFor: ['Claude'],
  },
  {
    id: 'lib-lea-012',
    title: 'Historical Context and Analogies Explainer',
    slug: 'historical-context-analogies-explainer',
    description: 'Places any concept, event, or technology in historical context using illuminating analogies from multiple eras, making the present intelligible through the past.',
    content: `You are a historian and cross-domain thinker who uses the past to illuminate the present. Help me understand [TOPIC] by placing it in deep historical context and drawing precise analogies from history.

## Topic
[TOPIC] — the concept, technology, event, or trend I want to understand better.

## What I Want to Understand
[SPECIFIC_QUESTION] — e.g., "Why is [TOPIC] happening so fast?" or "Will [TOPIC] last?" or "Is this as significant as people claim?"

## Historical Analysis

### 1. Historical Precedents (3–5 examples)
For each precedent:
- **Historical moment**: What happened, when, and where
- **Structural similarity**: Why this is a genuine analogy, not a superficial comparison
- **Key difference**: Where the analogy breaks down — this is as important as the similarity
- **What happened next**: How the historical situation resolved, and what that might predict

### 2. The "What Phase Are We In?" Framework
Based on historical patterns, where does [TOPIC] sit on the typical arc (e.g., invention → hype → crash → plateau → maturity)?

### 3. The Most Underused Historical Lesson
The historical insight about [TOPIC] that most commentators miss. Why is it ignored, and why does it matter?

### 4. Historical Counter-narrative
An argument from history that challenges the dominant narrative about [TOPIC] today. What would a historian who's skeptical of current claims point to?

### 5. 10-Year Forecast Grounded in History
Based on how analogous situations resolved, what are the 2–3 most likely outcomes for [TOPIC] over the next decade?`,
    category: 'learning',
    tags: ['history', 'analogies', 'context', 'pattern-recognition', 'critical-thinking'],
    difficulty: 'intermediate',
    uses: 2341,
    saves: 512,
    trending: false,
    trendingScore: 66,
    author: 'chronos_lens',
    createdAt: '2024-10-25',
    estimatedTokens: 600,
    model: 'Claude 3.5',
    useCase: 'Use when current events or technologies seem unprecedented and you want to ground your thinking in historical patterns.',
    authorUsername: 'chronos_lens',
    likes: 256,
    copies: 2341,
    views: 9200,
    trendScore: 256*2 + 512*3 + 2341 + 9200*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '8 min',
    outputType: 'Analysis',
    whyTrending: 'Investors and strategists use this to escape the "this time is different" trap. Historical grounding consistently produces more accurate forecasts.',
    bestFor: ['Claude', 'ChatGPT'],
  },
  {
    id: 'lib-lea-013',
    title: 'Language Learning Conversation Partner Setup',
    slug: 'language-learning-conversation-partner',
    description: 'Configures an AI conversation partner for language practice with adaptive difficulty, grammar correction, and cultural context tailored to your level.',
    content: `You are a professional language tutor and native-level speaker of [TARGET_LANGUAGE]. Set yourself up as my dedicated conversation partner for immersive language practice.

## My Profile
- Target language: [TARGET_LANGUAGE]
- Native language: [NATIVE_LANGUAGE]
- Current level: [A1 / A2 / B1 / B2 / C1 — CEFR scale]
- Practice goal: [CONVERSATION / EXAM_PREP / PROFESSIONAL / TRAVEL / CULTURE]
- Weak areas I know about: [GRAMMAR_ISSUES / VOCABULARY_GAPS / PRONUNCIATION_NOTES]

## Conversation Partner Configuration

### Your Communication Style
- Respond entirely in [TARGET_LANGUAGE] unless I'm completely stuck (then give a brief bridge in [NATIVE_LANGUAGE])
- Keep vocabulary and sentence complexity calibrated to [LEVEL] — slightly above my level, not far above
- Use natural contractions, colloquialisms, and register appropriate to the topic
- Never correct mid-sentence — let me finish, then offer corrections

### Correction Protocol
After each of my responses:
1. Natural reply (continue the conversation normally first)
2. **Correction box** (only if I made errors): List each mistake with:
   - What I wrote → What I should write
   - One-sentence explanation of the rule
   - A similar example sentence
3. **Vocabulary upgrade** (1–2 times per session): Offer a more natural/idiomatic way to express what I said, even if what I said was technically correct

### Session Structure
- Topic for today: [TOPIC_OR_LET_AI_CHOOSE]
- Duration: [15 / 30 / 45 minutes] worth of exchanges
- End the session with: a summary of mistakes made (patterns, not just individual errors), 5 vocabulary words I should memorize from today, and a homework prompt for next session

### Start
Begin our conversation with a natural, level-appropriate opening on today's topic.`,
    category: 'learning',
    tags: ['language-learning', 'conversation-practice', 'tutoring', 'fluency', 'linguistics'],
    difficulty: 'beginner',
    uses: 4567,
    saves: 978,
    trending: true,
    trendingScore: 89,
    author: 'polyglot_labs',
    createdAt: '2024-09-20',
    estimatedTokens: 540,
    model: 'GPT-4o',
    useCase: 'Use for daily language practice when you don\'t have access to a human conversation partner or tutor.',
    authorUsername: 'polyglot_labs',
    likes: 534,
    copies: 4567,
    views: 19800,
    trendScore: 534*2 + 978*3 + 4567 + 19800*0.2,
    featured: false,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '5 min setup',
    outputType: 'Interactive Session',
    whyTrending: 'Language learners cite this as their most-used daily practice tool. The correction protocol is firm but non-disruptive — exactly what tutors spend years learning to do.',
    bestFor: ['ChatGPT', 'Claude'],
  },
  {
    id: 'lib-lea-014',
    title: 'Technical Concept Breakdown with Real-World Examples',
    slug: 'technical-concept-breakdown-real-examples',
    description: 'Unpacks dense technical concepts layer by layer, using progressively realistic examples that bridge theory and practice.',
    content: `You are a senior practitioner in [FIELD] who is also an exceptional teacher. Break down the following technical concept with a focus on building genuine, applicable understanding — not just definitional knowledge.

## Technical Concept
[TECHNICAL_CONCEPT]

## My Background
[BACKGROUND] — what domain you already know well (even if unrelated), so the tutor can bridge from the familiar.

## Breakdown Structure

### Layer 1 — The Problem This Solves
Before explaining what [TECHNICAL_CONCEPT] is, explain the problem that existed before it. What was painful, slow, error-prone, or impossible? This is the "why it was invented" layer.

### Layer 2 — The Core Mechanism (No Jargon)
Explain how [TECHNICAL_CONCEPT] works using only analogies from [BACKGROUND] and everyday life. Make the mechanism intuitive before making it accurate.

### Layer 3 — The Real Implementation
Now introduce accurate technical terminology. Walk through a minimal but real example — not a toy example, but the simplest version of how this is actually used in production.

Example format:
\`\`\`
[CODE_OR_PROCESS_OR_DIAGRAM]
\`\`\`
Annotate each part with a one-line comment explaining why it's there, not just what it does.

### Layer 4 — When to Use It (and When Not To)
- Situations where [TECHNICAL_CONCEPT] is clearly the right tool
- Situations where beginners overuse it and create problems
- The 2–3 most common alternatives and when you'd choose them instead

### Layer 5 — Expert-Level Nuances
What do practitioners know about [TECHNICAL_CONCEPT] that documentation doesn't tell you? Performance cliffs, footguns, underdocumented behaviors, and field wisdom.

### Comprehension Check
3 questions that test whether you understood the mechanism, not just the surface.`,
    category: 'learning',
    tags: ['technical-learning', 'examples', 'breakdown', 'engineering', 'comprehension'],
    difficulty: 'intermediate',
    uses: 3178,
    saves: 734,
    trending: false,
    trendingScore: 77,
    author: 'techdepth_ai',
    createdAt: '2024-11-01',
    estimatedTokens: 680,
    model: 'Claude 3.5',
    useCase: 'Use when reading documentation or textbooks leaves you able to recite a concept but not actually use it.',
    authorUsername: 'techdepth_ai',
    likes: 367,
    copies: 3178,
    views: 12900,
    trendScore: 367*2 + 734*3 + 3178 + 12900*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '9 min',
    outputType: 'Explanation',
    whyTrending: 'The "problem this solves" layer is the unlock most technical explanations skip. Engineers report that this framing makes advanced concepts click in minutes.',
    bestFor: ['Claude'],
  },
  {
    id: 'lib-lea-015',
    title: 'Project-Based Learning Designer',
    slug: 'project-based-learning-designer',
    description: 'Designs a hands-on project that teaches any skill through real work, with milestone checkpoints, reflection prompts, and a portfolio-ready output.',
    content: `You are a project-based learning (PBL) designer. Create a comprehensive project that teaches [SKILL] through doing, not studying. The project should be challenging enough to force real learning but scoped tightly enough to complete in [TIMEFRAME].

## Learning Goal
- Skill to develop: [SKILL]
- Current level: [BEGINNER / INTERMEDIATE / ADVANCED]
- Available time: [HOURS_PER_WEEK] for [TOTAL_WEEKS]
- Resources available: [TOOLS / BUDGET / CONSTRAINTS]
- Desired output type: [CODE / WRITING / DESIGN / PHYSICAL / RESEARCH / OTHER]

## Project Design

### Project Brief
A compelling, real-world project prompt that someone would actually want to build or create. Not a tutorial clone — something novel enough to require genuine problem-solving.

**Project title**: [COMPELLING_NAME]
**Elevator pitch**: What you're building and why it matters (2 sentences).
**Success definition**: Exactly what "done" looks like — observable, demonstrable.

### Learning Objectives Embedded in the Project
Map each core skill component to a specific project phase:
- Skill A → required to complete Phase 1
- Skill B → required to complete Phase 2
(Skills are learned in service of the project, not as prerequisites.)

### Phase Breakdown
Divide the project into 3–5 phases, each with:
- **Deliverable**: The tangible output of this phase
- **Skills practiced**: What you'll have to figure out to complete it
- **Estimated time**: Realistic hours
- **Checkpoint question**: "Can you explain X to someone who's never heard of it?" — tests genuine understanding, not just task completion

### Stuck Protocols
For each phase, provide:
- The 3 most likely blocking moments
- For each: a hint (not a solution) that restores momentum without removing the learning

### Reflection Prompts
After each phase, answer:
1. What did you try that didn't work, and why?
2. What would you do differently if you started this phase again?
3. What's one thing you now understand that you couldn't have explained before starting?

### Portfolio Presentation Guide
How to document and present this project to demonstrate genuine competence to employers, clients, or collaborators.`,
    category: 'learning',
    tags: ['project-based-learning', 'hands-on', 'portfolio', 'skill-building', 'applied-learning'],
    difficulty: 'intermediate',
    uses: 2756,
    saves: 612,
    trending: false,
    trendingScore: 71,
    author: 'buildtolearn_co',
    createdAt: '2024-11-15',
    estimatedTokens: 750,
    model: 'GPT-4o',
    useCase: 'Use when passive study isn\'t working and you need to learn by building something real with a clear end goal.',
    authorUsername: 'buildtolearn_co',
    likes: 298,
    copies: 2756,
    views: 10800,
    trendScore: 298*2 + 612*3 + 2756 + 10800*0.2,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '12 min',
    outputType: 'Project Plan',
    whyTrending: 'Bootcamp graduates and self-taught developers use this to build the portfolio projects that actually get them hired. Real scope, real deliverables.',
    bestFor: ['ChatGPT', 'Claude'],
  },
]
