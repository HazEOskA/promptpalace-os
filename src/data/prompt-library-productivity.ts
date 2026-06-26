import type { Prompt } from './prompts'

export const PRODUCTIVITY_PROMPTS: Prompt[] = [
  {
    id: 'lib-prd-001',
    title: 'Personal OKR Builder for Ambitious Professionals',
    slug: 'personal-okr-builder-ambitious-professionals',
    description: 'Designs quarterly OKRs with 3 objectives, 3 key results each, grading rubric, weekly check-in ritual, and team cascade guide.',
    content: `You are an executive coach specializing in goal frameworks who has worked with founders, VPs, and operators at high-growth companies. Help me design my quarterly OKRs.

## Inputs
- My role: [ROLE]
- Company stage: [COMPANY_STAGE] (seed / Series A / growth / public)
- Top priorities this quarter: [TOP_PRIORITIES]

## OKR Design Framework

### What Makes a Great OKR (Context Before We Start)
- Objectives are qualitative, inspirational, and time-bound to the quarter
- Key Results are binary (done = 1.0, not done = 0) or measurable (hit the number = 1.0)
- The rule: if you can achieve a Key Result without it being clear progress toward the Objective, the KR is wrong
- Target grading: 0.7 = success (if you hit 1.0 on everything, you're sandbagging)

### Objective Design (3 Objectives)
For each Objective:
- Draft the objective as an inspirational statement
- Ask: does this objective, if achieved, make our company/team better in a meaningful way?
- Check: is it achievable in one quarter? (not a 3-year mission statement)
- Check: is it qualitative? (not a number — numbers belong in KRs)

### Key Results Per Objective (3 KRs each)
For each KR:
- The metric and target number
- How it's measured (who tracks it, where it lives)
- Baseline (where are we today?)
- What "done" looks like unambiguously
- Grading guide: 0.3 / 0.7 / 1.0 milestone descriptions

### Anti-OKR Mistakes for Your Context
Based on [ROLE] and [COMPANY_STAGE], flag the specific OKR failure modes most common in your situation:
- Activity OKRs vs outcome OKRs (most common mistake)
- Too many OKRs (> 3 objectives = none of them get focus)
- Health metrics disguised as KRs (maintaining current performance ≠ ambitious KR)
- Alignment failure (your OKRs don't connect to company OKRs)

### Weekly Check-In Ritual Design
15-minute solo weekly review:
- What did I move forward this week on each KR?
- What's blocking progress?
- What do I need to do differently next week?
- Confidence level update per KR (HIGH / MEDIUM / LOW / AT RISK)

### Team Cascade Guide (if applicable)
How to translate your OKRs into your team's OKRs:
- What each team member's OKRs should support
- How to run the cascade conversation (not top-down dictation)
- How to handle team members whose work doesn't naturally map to your OKRs

### Tracking System Recommendation
Compare for your setup:
- Notion OKR template (pros: flexible, visual)
- Linear/Asana/Jira integration (pros: connected to work)
- Simple spreadsheet (pros: lowest friction)
- Dedicated OKR tool (Lattice, Betterworks — worth it at which scale?)

## Output
- Formatted OKR card for each of the 3 Objectives (Objective → KR1 + KR2 + KR3 + grading rubric)
- End-of-quarter scoring template
- Calendar reminders schedule (weekly check-in, mid-quarter review, end-of-quarter grading)`,
    category: 'productivity',
    tags: ['okr', 'goal-setting', 'planning', 'productivity', 'leadership'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of each quarter to design focused, ambitious OKRs that connect to company priorities.',
    authorUsername: 'osa',
    likes: 378,
    saves: 245,
    copies: 934,
    views: 5400,
    trendScore: 378*2 + 245*3 + 934 + 5400*0.2,
    trendingScore: 378*2 + 245*3 + 934 + 5400*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'OKRs fail because people set activity metrics instead of outcome metrics. This framework catches the most common mistakes before they happen.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 934,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-03',
  },
  {
    id: 'lib-prd-002',
    title: 'Deep Work Session Design System',
    slug: 'deep-work-session-design-system',
    description: 'Designs a personalized deep work system with optimal schedule, pre-session ritual, environment design, and flow state recovery protocol.',
    content: `You are a cognitive performance coach who has worked with knowledge workers at top research institutions and tech companies. Design a personalized deep work system for [ROLE/JOB_TYPE].

## Inputs
- Chronotype: [CHRONOTYPE] (morning person / evening person / flexible)
- Work environment: [WORK_ENVIRONMENT] (home office / open office / hybrid / café worker)
- Deep work goal: [DEEP_WORK_GOAL] (writing / coding / strategy / design / analysis)

## Deep Work System Design

### 1. Optimal Deep Work Schedule
Based on your chronotype and role, design a 4-week ramp schedule:
- Week 1: 1 deep work block/day (90 minutes) — establishing the habit
- Week 2: 2 deep work blocks/day — building capacity
- Weeks 3–4: 2–3 blocks/day — full production rhythm

For each block:
- Start time (aligned to cognitive peak)
- Duration (90 minutes — one full ultradian cycle)
- Block type (creation / analysis / learning — don't mix)
- Protected vs flexible (which blocks are unmovable?)

### 2. Pre-Session Ritual (10-Minute Protocol)
This ritual signals to the brain that deep work is starting. Personalize for [ROLE/JOB_TYPE]:
- Environment trigger (specific chair, desk configuration, music/silence)
- Cognitive warm-up (review yesterday's output for 2 minutes)
- Intention setting (write ONE outcome for this session)
- Distraction elimination (notification off, phone in drawer, browser tabs closed)
- Session start anchor (a consistent small action that begins every session)

### 3. Environment Design Checklist
Specific to [WORK_ENVIRONMENT]:
- Physical setup (monitor height, lighting, seating, temperature)
- Acoustic environment (noise-canceling headphones, sound masking, do-not-disturb signal)
- Digital environment (which apps must be closed, which tools to have open)
- Access control (Slack status, calendar block messaging, physical door/signal)

### 4. Phone and Notification Protocol
The specific rules for your context:
- Notification elimination (which apps get turned off entirely)
- Phone placement (out of sight vs do-not-disturb vs in another room)
- Emergency access protocol (so you can turn off without anxiety)
- Email processing schedule (when you check email — not during deep work)

### 5. Output Measurement
How do you know if a deep work session was successful?
- Define a specific output metric for [DEEP_WORK_GOAL] (words written / functions shipped / slides completed)
- Session log template (date, start/end time, output metric, quality rating 1–5, obstacles)
- Weekly output review

### 6. Context Switching Recovery Protocol
When deep work is interrupted (it will happen):
- Re-entry technique (re-read last 2 paragraphs / re-run the last test / review notes from before interruption)
- Cool-down protocol for the interrupter (how to handle the interruption in < 2 minutes)
- Session restart decision (continue current session or reschedule?)

### 7. Energy Management Integration
Deep work depletes cognitive resources — design recovery into the system:
- Post-session recovery activity (20-minute walk / non-digital break)
- Between-block transition (what fills the 30 minutes between deep work blocks)
- End-of-day shutdown ritual (when does work end, and how do you signal it to yourself?)

### 8. Protecting Deep Work in a Meeting-Heavy Culture
Practical tactics for [COMPANY_STAGE]-stage companies:
- How to communicate deep work availability to your team
- Meeting consolidation (push all meetings to specific days)
- "Office hours" concept for your reports or stakeholders
- Pushback scripts for meeting requests that invade deep work time

### 9. What to Do When Flow State Doesn't Come
Not every session enters flow. Recovery tactics:
- Minimum output rule (even if flow doesn't happen, ship X)
- Stuck starter prompts for [DEEP_WORK_GOAL]
- Session abort criteria (when it's smarter to stop and recover)

## Output
- Personalized deep work schedule (4-week template)
- Pre-session ritual card (print-or-post-it ready)
- Environment design checklist (specific to your setup)
- Weekly output tracker`,
    category: 'productivity',
    tags: ['deep-work', 'focus', 'cognitive-performance', 'schedule', 'productivity'],
    difficulty: 'intermediate',
    useCase: 'Use when struggling to find or protect focused work time in a distracting work environment.',
    authorUsername: 'agentdesigner',
    likes: 345,
    saves: 223,
    copies: 867,
    views: 4800,
    trendScore: 345*2 + 223*3 + 867 + 4800*0.2,
    trendingScore: 345*2 + 223*3 + 867 + 4800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'Deep work capacity is the scarcest productivity resource. This system converts good intentions into a repeatable daily architecture.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 867,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-10',
  },
  {
    id: 'lib-prd-003',
    title: 'Meeting Optimization and Elimination Audit',
    slug: 'meeting-optimization-elimination-audit',
    description: 'Audits a weekly meeting schedule to identify what to eliminate, consolidate, or convert to async, with redesigned meeting templates per type.',
    content: `You are an organizational effectiveness consultant who has helped executive teams reclaim 10+ hours per week through meeting redesign. Audit my meeting schedule and redesign it for maximum output.

## Input
Current weekly meeting list: [CURRENT_WEEKLY_MEETING_LIST]
For each meeting provide: name, duration, frequency, attendees (count + roles), stated purpose, who called it.

## Audit Framework

### 1. Meeting Necessity Test (for each meeting)
Answer these four questions:
1. What decision or outcome does this meeting produce? (If you can't answer, it's a status update — make it async)
2. Could this be replaced by a well-written Loom video or shared document? (If yes, eliminate)
3. Are all attendees active participants, or are some there "just in case"? (Remove passive attendees)
4. What would break if this meeting disappeared for one month? (If nothing, cancel it)

### 2. Meeting Classification
Classify each meeting into one of five types:
- **Decision meeting**: has a specific decision to make → keep, tighten
- **Status update**: sharing information → convert to async (Loom / shared doc / Slack)
- **Brainstorm / creative**: needs real-time collaboration → keep, redesign for quality
- **Relationship / 1:1**: human connection → keep, right-size
- **Ritual / ceremony**: standups, retrospectives → audit frequency and length

### 3. Analysis Per Meeting
| Meeting | Type | Decision Produced | Could Be Async? | Wrong People? | Frequency Right? | Action |
|---|---|---|---|---|---|---|

Actions: ELIMINATE / ASYNC / CONSOLIDATE / REDESIGN / KEEP

### 4. Eliminate List with Async Alternatives
For each eliminated meeting:
- Meeting name
- Why eliminated
- Async replacement (Loom update / Google Doc / Slack standup bot / email digest)
- Communication to attendees (template language)

### 5. Consolidation Opportunities
Which meetings serve similar purposes and could be merged?
- Proposed consolidation
- New merged meeting design
- Time saved per week

### 6. Meeting Template Redesign
Redesign templates for the meetings worth keeping:

**Daily Standup (15 min)**
- Structure: yesterday / today / blockers (strict format, no discussion)
- Facilitation rule: facilitator cuts any discussion that goes > 60 seconds

**1:1 Meeting (30 min, weekly or biweekly)**
- First 10 min: they bring topics (their agenda first)
- Next 15 min: your topics and feedback
- Last 5 min: commitments and next steps

**Planning Meeting (60 min)**
- Pre-work required (participants come prepared — no cold planning)
- Decision-focused structure (not status updates)

**Retrospective / Review (45 min)**
- What worked + what didn't + one change to make

### 7. Facilitation Improvements
For remaining meetings:
- Start with the decision / outcome statement ("We're here to decide X")
- Assign a note-taker + action item tracker
- End 5 minutes early, always
- Action items: owner + due date in Slack/email within 10 minutes

## Output
- Optimized meeting calendar (before vs after comparison)
- Eliminate list with async alternatives (ready to communicate to teams)
- Meeting templates (copy-paste ready for calendar invites)
- Time reclaimed calculation (hours/week freed)`,
    category: 'productivity',
    tags: ['meetings', 'async', 'productivity', 'calendar', 'management'],
    difficulty: 'beginner',
    useCase: 'Use when your calendar is overloaded with meetings that prevent focused work and individual contribution.',
    authorUsername: 'osa',
    likes: 267,
    saves: 178,
    copies: 712,
    views: 4100,
    trendScore: 267*2 + 178*3 + 712 + 4100*0.2,
    trendingScore: 267*2 + 178*3 + 712 + 4100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'The average knowledge worker spends 35% of working hours in meetings. This audit consistently frees 8–12 hours per week.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 712,
    estimatedTokens: 800,
    model: 'gpt-4o',
    createdAt: '2024-11-07',
  },
  {
    id: 'lib-prd-004',
    title: 'Email Inbox Zero System Design',
    slug: 'email-inbox-zero-system-design',
    description: 'Designs a personal email management system with folder architecture, processing protocol, scheduled time blocks, and template library.',
    content: `You are a productivity systems expert who has helped 500+ professionals achieve and maintain Inbox Zero without missing critical messages. Design a personal email management system.

## Inputs
- Email client: [EMAIL_CLIENT] (Gmail / Outlook / Superhuman / Hey)
- Daily email volume: [DAILY_EMAIL_VOLUME] (approximate number of emails/day)
- Role: [ROLE]

## System Design

### 1. Folder / Label Architecture
Minimal, functional structure (avoid the trap of too many folders):

**4-folder system:**
- ACTION REQUIRED (needs a response or decision)
- WAITING ON (sent something, waiting for reply — snooze or label)
- REFERENCE (no action, might need it later)
- ARCHIVE (everything else — searchable, not browsable)

Customization for [ROLE]:
- Additional labels if needed (e.g., LEGAL / FINANCE / PRESS for specific roles)
- Color coding logic
- Naming convention

### 2. Auto-Filtering Rules
Automation that processes email before you see it:
- Newsletter filter: all newsletters → skip inbox → REFERENCE label
- Notification filter: automated emails (GitHub, Jira, Slack digests) → skip inbox → tool-specific label
- Calendar filter: calendar invites → directly to calendar, no inbox
- Internal vs external sender rules (how to handle differently by [ROLE])

Filters to set up (specific to [EMAIL_CLIENT]):
- Rule 1: [newsletter indicators] → Archive + label
- Rule 2: [notification domains] → skip inbox + label
- Rule 3: [your sent domain + no reply] → auto-archive

### 3. Processing Protocol: The 4 Ds
Apply to every email in one pass:
- **Delete** (or archive): no action needed, no reference value → archive immediately
- **Defer**: requires > 2 minutes of action → move to ACTION REQUIRED, handle in processing block
- **Delegate**: someone else should handle this → forward + archive
- **Do**: takes < 2 minutes → do it right now, then archive

Rules:
- Never read an email twice without acting on it
- Never leave an email in the inbox after processing

### 4. Scheduled Email Processing Blocks
Design a daily email schedule (not always-on):
- Morning processing block (specific time, 20–30 min max): clear overnight emails
- Afternoon processing block (specific time, 15 min): mid-day triage
- End-of-day close (5 min): confirm inbox is zero
- Outside these blocks: email client is closed or notifications off

Auto-responder message template for setting expectations during closed periods.

### 5. Newsletter Management Strategy
- Unsubscribe sprint: dedicate 30 minutes to mass unsubscribing
- Tools: unroll.me / leave-me-alone.app / manual unsubscribe
- Keeper criteria: if you haven't read it in 3 months, unsubscribe
- Reader inbox alternative: use a separate email or read-later tool (Instapaper, Matter)

### 6. Template Library for Common Responses
Build templates for your most frequent reply types:
- "I'll get back to you by [date]" acknowledgment
- Meeting scheduling (include calendar link)
- Declining requests (polite + firm)
- Forwarding with context
- Short affirmative reply

For [EMAIL_CLIENT]: where to store and quickly access templates (Canned Responses / TextExpander / native snippets).

### 7. Tools Integration by Client
Specific setup guide for [EMAIL_CLIENT]:
- Gmail: keyboard shortcuts, filters, undo send, scheduled send
- Outlook: Quick Steps, Focused Inbox, Rules
- Superhuman: split inbox, snippets, keyboard-first workflow
- Hey: screener, imbox, paper trail

### 8. Weekly Email Review (5 minutes)
- Are there emails stuck in ACTION REQUIRED for > 5 days?
- Any newsletters to unsubscribe from?
- Any senders to filter or block?

## Output
- Setup guide (step-by-step for [EMAIL_CLIENT])
- Filter rules (copy-paste ready for your client)
- Daily processing protocol card (print-ready)
- 5 email templates for your role`,
    category: 'productivity',
    tags: ['email', 'inbox-zero', 'productivity', 'organization', 'tools'],
    difficulty: 'beginner',
    useCase: 'Use when email has become an unmanageable anxiety source that interrupts focus and causes missed messages.',
    authorUsername: 'agentdesigner',
    likes: 198,
    saves: 134,
    copies: 567,
    views: 3200,
    trendScore: 198*2 + 134*3 + 567 + 3200*0.2,
    trendingScore: 198*2 + 134*3 + 567 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'Email anxiety is universal. This system design works because it is built around behavior, not willpower.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 567,
    estimatedTokens: 820,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-15',
  },
  {
    id: 'lib-prd-005',
    title: 'Task Priority Matrix Builder (Eisenhower + MoSCoW)',
    slug: 'task-priority-matrix-builder-eisenhower-moscow',
    description: 'Applies a hybrid Eisenhower/MoSCoW framework to a task list to produce a prioritized action plan with daily planning template.',
    content: `You are a productivity coach specializing in task prioritization for high-output professionals. Help me prioritize my current task list using a hybrid Eisenhower/MoSCoW framework.

## Input
Task list: [TASK_LIST] (paste all current tasks, one per line)

## Prioritization Framework

### Step 1: Task Enrichment
For each task in [TASK_LIST], capture:
- Task name
- Deadline (hard / soft / none)
- Effort estimate (hours)
- Dependency: does this block other tasks? Are you blocked by something else?
- Value type: revenue-generating / cost-saving / relationship / compliance / maintenance

### Step 2: Eisenhower Classification
Classify each task:
- **Urgency**: Must act within 24–48 hours (Urgent) vs can wait (Not Urgent)
- **Importance**: Directly moves a key goal or metric (Important) vs maintenance/housekeeping (Not Important)

**Quadrant 1 — Do Now (Urgent + Important)**
- Crisis items, deadline-driven deliverables
- Should be < 20% of your list. If > 40%, you have a planning problem.

**Quadrant 2 — Schedule (Not Urgent + Important)**
- These are your OKR and growth tasks
- They never feel urgent — so they never get done without deliberate scheduling
- Schedule in deep work blocks this week

**Quadrant 3 — Delegate (Urgent + Not Important)**
- Tasks with deadlines that someone else could do
- Who specifically could you delegate each of these to?

**Quadrant 4 — Eliminate (Not Urgent + Not Important)**
- These should not be on a professional's task list
- For each: can you simply delete it, automate it, or say no permanently?

### Step 3: MoSCoW Applied to Q1 + Q2
For Quadrant 1 and Quadrant 2 tasks only (the ones you're actually doing), apply MoSCoW for this week:
- **Must Have**: without this, the week fails or a relationship is damaged
- **Should Have**: high value, will do if possible, minor consequences if delayed
- **Could Have**: nice to do, no significant consequence if pushed to next week
- **Won't Have this week**: explicitly decided not to do this week (move to backlog)

### Step 4: Dependency Sequencing
From the Must Have and Should Have list:
- Which tasks are blocked by other tasks? (you can't start B until A is done)
- Which tasks block others? (prioritize these even if they seem small)
- Optimal execution sequence given dependencies

### Step 5: Effort vs Impact Sort
For Must Have + Should Have tasks:
| Task | Effort (hrs) | Impact (1–5) | Effort-Impact Ratio | Do First? |
|---|---|---|---|---|
High impact + low effort = do first. High effort + low impact = reconsider.

## Daily Planning Template (Based on This Framework)
Morning planning ritual (5 minutes):
1. Review Must Haves for this week — what must move today?
2. Identify today's single Most Important Task (MIT)
3. Block time for Q2 (important but not urgent) — at least 90 minutes
4. Clear Q3 tasks from your calendar by delegating
5. Time-box your day: assign tasks to specific time slots

## Output
- Classified task list (Quadrant 1–4 for every task)
- Must/Should/Could/Won't table for this week
- Dependency sequence
- Daily planning template (ready to use tomorrow morning)`,
    category: 'productivity',
    tags: ['task-management', 'eisenhower', 'prioritization', 'planning', 'productivity'],
    difficulty: 'beginner',
    useCase: 'Use when overwhelmed by a large task list and needing a clear, prioritized action plan for the week.',
    authorUsername: 'osa',
    likes: 234,
    saves: 156,
    copies: 689,
    views: 3900,
    trendScore: 234*2 + 156*3 + 689 + 3900*0.2,
    trendingScore: 234*2 + 156*3 + 689 + 3900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'Most task lists are anxiety lists. This framework converts chaos into a sequenced, decision-made action plan in one session.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 689,
    estimatedTokens: 760,
    model: 'gpt-4o',
    createdAt: '2024-11-22',
  },
  {
    id: 'lib-prd-006',
    title: 'Decision Journal Protocol',
    slug: 'decision-journal-protocol',
    description: 'Builds a personal decision journal practice with entry templates, 30/90/180-day review protocol, and annual decision audit framework.',
    content: `You are a decision quality coach who has helped executives improve decision-making through structured journaling. Help me build a personal decision journal practice.

## Input
Decision to record or major decision context: [DECISION_TO_RECORD] or [MAJOR_DECISION_CONTEXT]

## Decision Journal Framework

### Why Keep a Decision Journal
The core insight: our memories are unreliable storytellers. We unconsciously rewrite our decision rationale after we see the outcome (hindsight bias). A decision journal captures the truth before outcomes are known.

### Decision Entry Template
Complete this BEFORE you make the decision (or within 24 hours of making it):

**1. Decision Statement**
One clear sentence: "I am deciding to [ACTION] by [DATE]."
Avoid: vague decisions ("I should do more X"). Be specific.

**2. Decision Date and Deadline**
- Date of this journal entry: [DATE]
- Date by which this decision must be made: [DEADLINE]
- What happens if I delay past the deadline?

**3. Options Considered**
List ALL options — including the option to do nothing.
Most people consider 2 options. High-quality decisions consider 4–6.
For each option: what's the best-case and worst-case outcome?

**4. Information Used**
- Key data / evidence informing this decision
- Key people consulted
- What information is MISSING that you wish you had?
- What would you need to believe for each option to be correct?

**5. Uncertainties Acknowledged**
What are the top 3 things you don't know that matter most?
Estimated probability for the key uncertainty you're most worried about.

**6. Decision Made + Rationale**
- Final decision: [CHOICE]
- In 2–3 sentences: why this option over the alternatives?
- What would change your mind? (pre-commitment to updating)

**7. Expected Outcome**
- What do you expect to happen? (be specific and time-bound)
- What would success look like in 3 months?
- What would failure look like?
- What's the worst realistic outcome if you're wrong?

**8. Confidence Level**
Rate your confidence in this decision: HIGH / MEDIUM / LOW
Explain what's driving the uncertainty.

### Review Protocol

**30-Day Check-In (per decision)**
- Is the decision playing out as expected?
- Any new information that changes the picture?
- Regret check: would you make the same decision today?

**90-Day Check-In**
- Clear outcome becoming visible?
- What was right and wrong in your original analysis?
- One thing you'd do differently in the decision process?

**180-Day / Final Outcome Record**
- Actual outcome vs expected outcome
- Accuracy of your probability estimates
- What the outcome revealed about your judgment

### Annual Decision Audit Framework
At year end, review all journal entries:
- Win rate: % of decisions that produced good outcomes
- Calibration: were your HIGH confidence decisions right more often than LOW confidence?
- Pattern analysis: what types of decisions do you make well vs poorly?
- Information patterns: what information was consistently most valuable?
- Decision process: what process changes would improve future decisions?

## Output
- Decision journal entry template (formatted, ready to use)
- Review schedule (calendar prompts at 30/90/180 days per entry)
- Annual audit worksheet`,
    category: 'productivity',
    tags: ['decision-making', 'journaling', 'cognitive-bias', 'self-improvement', 'reflection'],
    difficulty: 'beginner',
    useCase: 'Use when you want to build a practice of high-quality decision-making and track whether your judgment is improving over time.',
    authorUsername: 'agentdesigner',
    likes: 156,
    saves: 112,
    copies: 432,
    views: 2600,
    trendScore: 156*2 + 112*3 + 432 + 2600*0.2,
    trendingScore: 156*2 + 112*3 + 432 + 2600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Document',
    whyTrending: 'Most people optimize for making decisions, not for making better decisions. A decision journal is the only tool that improves judgment over time.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 432,
    estimatedTokens: 800,
    model: 'gpt-4o',
    createdAt: '2024-12-03',
  },
  {
    id: 'lib-prd-007',
    title: 'Learning Curriculum Self-Designer',
    slug: 'learning-curriculum-self-designer',
    description: 'Creates a self-directed learning curriculum with skill decomposition, resource curation, milestone tests, and 12-week practice schedule.',
    content: `You are a learning designer with expertise in adult skill acquisition and deliberate practice. Create a self-directed learning curriculum for [SKILL_TO_LEARN].

## Inputs
- Current level: [CURRENT_LEVEL] (zero / familiar / intermediate)
- Target level: [TARGET_LEVEL] (can use professionally / expert / can teach others)
- Available hours per week: [AVAILABLE_HOURS_PER_WEEK]
- Deadline: [DEADLINE]

## Curriculum Design

### 1. Skill Decomposition
Break [SKILL_TO_LEARN] into 5–8 sub-skills:
For each sub-skill:
- Sub-skill name
- Why it's foundational (what depends on this?)
- Estimated hours to reach competency at your target level
- How you'll know you've mastered it (observable behavior or output)

### 2. Learning Sequence
Order the sub-skills for optimal transfer:
- Start with: the sub-skill that unlocks all others (foundational)
- Avoid: learning advanced sub-skills before the foundation is solid
- Parallel learning: which sub-skills can be learned simultaneously?
- Why order matters: transfer of learning (each sub-skill should build on the previous)

### 3. Resource Curation (1–2 resources per sub-skill)
For each sub-skill, curate:
- Primary resource (the single best thing to learn this from): book / course / video series / documentation
- Practice resource (how to apply it): project / exercise set / community / mentor
- Evaluation: why this resource over alternatives (learning quality, time efficiency)

### 4. Practice Schedule (Theory : Practice Ratio)
Optimal ratio for [SKILL_TO_LEARN]:
- Conceptual learning hours vs applied practice hours
- Weekly schedule template (which days for theory, which for practice)
- Spaced repetition plan (when to review previously learned sub-skills)

### 5. Milestone Tests
For each sub-skill, define a milestone test:
- What you'll produce or demonstrate to prove mastery
- Self-assessment criteria (how you'll evaluate your own work)
- External validation option (how to get feedback from others)
- Pass/fail decision: if you fail the milestone, what do you do before moving on?

### 6. 12-Week Learning Plan
Week-by-week breakdown:
| Week | Focus | Hours | Deliverable / Milestone | Check-In |
|---|---|---|---|---|

Include:
- Buffer weeks (weeks 6 and 12) for review and catching up
- Consolidation weeks (reduce new material, increase practice)

### 7. Accountability System
- Study partner criteria and how to find one
- Public commitment strategy (if it fits your style)
- Weekly self-check ritual (10 minutes: what did I learn? what confused me? what's next?)

### 8. Plateau-Break Strategies
When progress stalls (it will):
- Diagnosis: are you in a performance plateau or a learning plateau? (different causes, different fixes)
- Deliberate practice technique: identify the specific failure mode, isolate it, drill it
- Expert input: when to seek a mentor or coach rather than continue self-study
- Environment change: sometimes a new context unlocks new progress

## Output
- 12-week learning plan (table format)
- Daily study session structure (60-minute template: warm-up / focused learning / practice / review)
- Progress tracker (milestone status + hours logged)
- Resource library (all curated resources in one list)`,
    category: 'productivity',
    tags: ['learning', 'self-improvement', 'skills', 'curriculum', 'deliberate-practice'],
    difficulty: 'intermediate',
    useCase: 'Use when starting a significant new skill acquisition journey that requires structure to avoid random learning and plateau.',
    authorUsername: 'osa',
    likes: 212,
    saves: 145,
    copies: 578,
    views: 3300,
    trendScore: 212*2 + 145*3 + 578 + 3300*0.2,
    trendingScore: 212*2 + 145*3 + 578 + 3300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'Self-directed learning fails because people follow tutorials instead of building skills. This curriculum converts consumption into capability.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 578,
    estimatedTokens: 860,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-07',
  },
  {
    id: 'lib-prd-008',
    title: 'Habit Stack Engineering System',
    slug: 'habit-stack-engineering-system',
    description: 'Designs a reliable habit stack with anchor-based sequencing, environmental design, temptation bundling, and 90-day evolution plan.',
    content: `You are a behavioral design coach trained in BJ Fogg's Tiny Habits methodology and James Clear's habit loop framework. Help me build a reliable habit stack for [GOAL_AREA] (health / productivity / learning / relationships).

## Inputs
- Target habits: [TARGET_HABITS]
- Current anchors: [CURRENT_ANCHORS] (existing reliable behaviors, e.g., "morning coffee," "brushing teeth," "sitting down at my desk")

## Habit Stack Design

### 1. Anchor Identification and Sequencing
An anchor is a behavior you already do reliably. The new habit "stacks" onto the anchor.

For each current anchor provided:
- Reliability score: how reliably do you do this? (daily / most days / inconsistently)
- Natural timing: what time of day, and what state are you in?
- Preceding condition: what causes you to do this anchor?

Then design the stack:
**Anchor → New Habit → Reward**
- Anchor: existing reliable behavior
- New habit: the new behavior you're adding (must be very small — 2-minute rule)
- Reward: immediate positive feeling or micro-celebration

### 2. Minimum Viable Habit (2-Minute Rule)
For each target habit in [TARGET_HABITS]:
- Define the 2-minute version that requires zero motivation to start
- Examples: "meditate daily" → "sit in meditation position for 2 minutes"
- Examples: "exercise daily" → "put on workout clothes"
- Rule: the habit is the 2-minute version. Let it grow naturally — don't commit to the full version first.

### 3. Cue-Routine-Reward Mapping
For each habit in the stack:
| Cue (what triggers it) | Routine (the behavior) | Reward (immediate feeling) |
|---|---|---|

Design rewards that are:
- Immediate (within seconds of completing the habit)
- Consistent (same reward every time)
- Aligned (don't reward yourself for meditating by eating junk food)

### 4. Environmental Design Changes
Remove friction for desired habits:
- Habit [X]: change [environment element] so the behavior is easier to start (e.g., "put running shoes by the door")
- Habit [Y]: remove [friction point] so the most common obstacle is eliminated

Add friction for habits to reduce:
- If you're replacing a bad habit: what environmental change makes the old behavior harder?

### 5. Temptation Bundling Opportunities
Pair something you want to do with something you need to do:
- Example: only listen to your favorite podcast while doing the habit
- Identify which habits in [TARGET_HABITS] could be paired with something you enjoy

### 6. Tracking Mechanism
- Visual tracking method (paper habit tracker / app / calendar X method)
- Metric to track per habit (binary: done/not done)
- Review frequency (daily glance / weekly review)
- The chain rule: never break the chain twice in a row

### 7. Failure Recovery Protocol
When you miss a day (not if — when):
- Rule: never miss twice in a row (single misses don't break habits, doubles do)
- Missing due to travel or illness: resume with the 2-minute version
- Missing due to resistance or avoidance: habit may be too big — shrink it further
- Shame reduction: missing is data, not failure. Update the design, not the judgment.

### 8. 30/60/90-Day Evolution Plan
- Days 1–30: establish the 2-minute minimum, no upgrades
- Days 31–60: expand naturally if the minimum is locked in (add 2–3 minutes per week)
- Days 61–90: the habit is automatic — time to add the next stack or expand to the full version

## Output
- Habit stack diagram (anchor → habit → reward for each stack)
- Daily tracker template (week view, all habits visible)
- Environment design checklist (changes to make before starting)
- 90-day milestone plan`,
    category: 'productivity',
    tags: ['habits', 'behavior-design', 'productivity', 'health', 'self-improvement'],
    difficulty: 'beginner',
    useCase: 'Use when trying to build or break habits that have previously failed despite motivation and intention.',
    authorUsername: 'agentdesigner',
    likes: 223,
    saves: 156,
    copies: 634,
    views: 3600,
    trendScore: 223*2 + 156*3 + 634 + 3600*0.2,
    trendingScore: 223*2 + 156*3 + 634 + 3600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'Habit failure is almost always a design problem, not a willpower problem. This system addresses the actual root causes of habit collapse.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 634,
    estimatedTokens: 840,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-30',
  },
  {
    id: 'lib-prd-009',
    title: 'Energy Audit and Schedule Optimization',
    slug: 'energy-audit-schedule-optimization',
    description: 'Conducts an energy audit and redesigns the weekly schedule around cognitive peaks, recovery time, and ultradian rhythm alignment.',
    content: `You are an executive performance coach who works with high-output professionals on sustainable performance. Conduct an energy audit and redesign my weekly schedule.

## Inputs
- Current weekly schedule: [CURRENT_WEEKLY_SCHEDULE]
- Role: [ROLE]
- Natural energy pattern: [NATURAL_ENERGY_PATTERN] (morning peak / evening peak / flat / two peaks)

## Energy Audit Framework

### 1. Cognitive Energy Peak Mapping
Plot your natural energy curve across the day:
- Peak (high cognitive capacity): when do you feel sharpest? (most people: 2–4 hours after waking)
- Trough (low cognitive capacity): post-lunch dip, typically 1–3pm for morning types
- Recovery (medium, creative): late afternoon rebound

Map [CURRENT_WEEKLY_SCHEDULE] against this curve:
- What's currently scheduled during cognitive peak? (should be: complex work, decisions, writing)
- What's during the trough? (should be: admin, emails, routine calls)
- Are there any deep work blocks that align with your peak?

### 2. Energy Drain Identification
From [CURRENT_WEEKLY_SCHEDULE], identify drains:
- Meetings that create no decisions or value (energy vampires)
- Context switching costs (each switch costs 20–23 minutes of cognitive recovery)
- Decision fatigue sources (too many low-stakes decisions consuming cognitive budget)
- Commute or transit time and how to use it productively vs let it drain energy

### 3. Ultradian Rhythm Alignment
The brain cycles through 90-minute alertness windows (ultradian rhythm):
- Design work blocks in 90-minute units (not 2-hour or 30-minute blocks)
- Build 20-minute transitions between work blocks (walk / away from screen / non-digital)
- Maximum productive blocks per day: 4 (360 minutes of deep work) — plan for 2–3

### 4. Social Energy Management
- Introvert optimization: schedule solitary work before social meetings to preserve energy
- Extrovert optimization: schedule collaborative work first if social interaction recharges you
- Meeting clustering: batch all meetings on 2–3 days to preserve full focus days

### 5. Recovery Integration
Built-in recovery is not laziness — it's how sustainable performance works:
- Mid-morning break (10 min, after first work block)
- Physical movement (at least 20 min mid-day — non-negotiable)
- Off-screen lunch (meals in front of computer drain energy, not restore it)
- End-of-day decompression (30 min buffer before personal time)

### 6. Ideal Week Template
Redesign the week from scratch:

| Time | Monday | Tuesday | Wednesday | Thursday | Friday |
|---|---|---|---|---|---|
| 7–9am | | | | | |
| 9–10:30 | | | | | |
| 10:30–11 | | | | | |
| 11–12:30 | | | | | |
| 12:30–1:30 | | | | | |
| 1:30–3 | | | | | |
| 3–3:20 | | | | | |
| 3:20–5 | | | | | |

Block types to use: DEEP WORK / SHALLOW WORK / ADMIN / MEETINGS / RECOVERY / PERSONAL

### 7. Sustainable Performance Practices
Practices to integrate that protect cognitive output:
- Sleep as performance input (not a variable to trade for productivity)
- Physical exercise scheduling (30 min aerobic = measurable cognitive benefit)
- Nutrition timing (avoid high-carb pre-deep-work)
- Caffeine strategy (peak cognitive timing alignment)

### 8. Pre-Work and Shutdown Rituals
**Morning activation (15 min):**
Review the day's plan, set the single Most Important Task, enter first deep work block.

**End-of-work shutdown (15 min):**
Close all open loops (write tomorrow's top tasks), close all apps, verbal or written shutdown declaration: "Shutdown complete."
After shutdown: no work-related activity. This protects cognitive recovery.

## Output
- Ideal week template (filled out for your role and energy pattern)
- Energy map (peak/trough/recovery schedule for your chronotype)
- Sustainable performance rules (5–7 personal rules based on this audit)
- Metrics: estimated deep work hours gained per week vs current schedule`,
    category: 'productivity',
    tags: ['energy-management', 'schedule', 'performance', 'deep-work', 'productivity'],
    difficulty: 'intermediate',
    useCase: 'Use when output quality is declining due to schedule design, not capability or motivation.',
    authorUsername: 'osa',
    likes: 245,
    saves: 167,
    copies: 678,
    views: 3800,
    trendScore: 245*2 + 167*3 + 678 + 3800*0.2,
    trendingScore: 245*2 + 167*3 + 678 + 3800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'Treating energy as finite and schedulable — not unlimited and recoverable — is the shift that transforms sustainable high performance.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 678,
    estimatedTokens: 870,
    model: 'gpt-4o',
    createdAt: '2024-12-20',
  },
  {
    id: 'lib-prd-010',
    title: 'Second Brain Setup Guide (PARA Method)',
    slug: 'second-brain-setup-guide-para-method',
    description: 'Sets up a PARA-method second brain in your tool of choice with folder structure, quick capture workflow, linking strategy, and 5 project templates.',
    content: `You are a knowledge management consultant who has helped 300+ professionals implement Tiago Forte's PARA method. Help me set up my second brain in [TOOL].

## Inputs
- Tool: [TOOL] (Notion / Obsidian / Roam / Logseq / Bear)
- Current note-taking situation: [CURRENT_NOTE-TAKING_CHAOS]
- Types of work I do: [TYPES_OF_WORK_I_DO]

## PARA Setup Guide

### Understanding PARA Before Building It
PARA is not a filing system — it's a system that mirrors how you think and work.
- **Projects**: things you're actively working on with a deadline or completion criteria
- **Areas**: ongoing responsibilities with no end date (health, finances, team management)
- **Resources**: reference material you might need someday (by topic)
- **Archive**: everything completed, inactive, or no longer relevant

The key insight: information lives in the first category that makes it actionable. Only one category.

### 1. Projects Folder Structure
Active projects — by deadline or next action, not by topic:
- Naming convention: "P — [Project Name] — [Target Date]"
- Project note structure (for each project):
  - Goal / desired outcome
  - Next action (the very next physical step)
  - Project materials (notes, references, links)
  - Project log (dated entries of progress)
- Maximum active projects: 10–15 (more = none get done)
- Inbox for new projects (before they get a folder)

### 2. Areas Folder Structure
Ongoing responsibilities — organized by responsibility, not by time:
- List the 5–8 ongoing areas of your life and work
- Examples for [TYPES_OF_WORK_I_DO]:
  - Professional: "Team Management," "Product Strategy," "Personal Growth"
  - Personal: "Health," "Finance," "Relationships"
- Area note structure: current state, standards to maintain, periodic review trigger

### 3. Resources Folder Structure
Reference by topic — organize for future retrieval, not current use:
- Topics organized alphabetically or by domain
- Resource note structure: source, key insights, when useful
- Rule: a resource only lives here if it's not tied to a current project or area

### 4. Archive Folder
- Everything completed, inactive, or postponed
- Never delete — archive instead
- Archive trigger: project completed / responsibility transferred / resource no longer relevant
- Search-first design (you will never browse this — only search)

### 5. Quick Capture Workflow (Mobile + Desktop)
The system fails if capture is slow. Design for zero-friction capture:
- Mobile capture: which app or tool to capture immediately on phone (before you reach your computer)
- Desktop capture: keyboard shortcut or widget to create a new note instantly
- Capture format: no structure required at capture — just get it in
- Inbox processing: dedicated time (2x/week) to move captured items to PARA locations

### 6. Linking Strategy
When to link (create a connection between notes):
- Link when two notes have a cause-and-effect relationship
- Link when you reference a resource from a project note
- Don't link for association alone — leads to link bloat

When to tag (use keywords):
- Tag by content type (template / meeting-note / reference / book-summary)
- Tag by domain (only if you have 20+ notes on the topic)
- Avoid: over-tagging everything (the "tag everything" trap kills usability)

### 7. Search-First vs Browse-First Setup
Your second brain is a search system, not a filing cabinet:
- Design notes for findability (descriptive titles, key terms in first paragraph)
- Avoid: deep nested folders you have to browse (search finds it faster)
- For [TOOL]-specific: which search features to use (full-text / tag / backlink)

### 8. Weekly Review Protocol (15 minutes)
The system maintenance ritual:
- Clear inbox (process all captured items to PARA)
- Update project next actions
- Archive completed projects
- Spot check: are there notes in the wrong PARA category?

## 5 Templates to Create First
Based on [TYPES_OF_WORK_I_DO], design templates for:
1. Project kickoff note
2. Meeting note
3. Book / article summary
4. Weekly review checklist
5. [Role-specific template based on your input]

## Output
- PARA folder structure (ready to implement in [TOOL])
- 5 note templates (formatted for your tool)
- Quick capture setup guide (mobile + desktop)
- Weekly maintenance checklist`,
    category: 'productivity',
    tags: ['second-brain', 'para', 'notion', 'obsidian', 'knowledge-management'],
    difficulty: 'intermediate',
    useCase: 'Use when setting up a knowledge management system from scratch or migrating chaotic notes to a structured system.',
    authorUsername: 'agentdesigner',
    likes: 289,
    saves: 198,
    copies: 756,
    views: 4300,
    trendScore: 289*2 + 198*3 + 756 + 4300*0.2,
    trendingScore: 289*2 + 198*3 + 756 + 4300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'The PARA method has 500K+ practitioners but most implementations fail because they over-build. This guide prevents the 3 most common setup mistakes.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 756,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-01',
  },
  {
    id: 'lib-prd-011',
    title: 'Goal Decomposition Framework',
    slug: 'goal-decomposition-framework',
    description: 'Decomposes a big goal into an executable action plan using WOOP method, backward planning, and risk mitigation with week-1 action list.',
    content: `You are a strategic planning coach specializing in closing the intention-action gap for ambitious professionals. Help me decompose [BIG_GOAL] into an executable plan.

## Inputs
- Goal: [GOAL]
- Timeline: [TIMELINE]
- Current situation: [CURRENT_SITUATION]

## Goal Decomposition Framework

### Step 1: WOOP Analysis
Before planning the execution, apply WOOP to ensure this goal has the right psychological foundation.

**Wish**: State the goal in one sentence (positive, present-tense, as if achieved)
"I have [goal outcome] by [date]."

**Outcome**: What is the best outcome you can imagine from achieving this goal?
Describe it viscerally — how does it feel, what's different about your life/work?

**Obstacle**: What is the main inner obstacle that could prevent you from reaching the goal?
(Not external obstacles — internal. Fear, procrastination, distraction, self-doubt, a competing priority)

**Plan**: If [obstacle], then I will [action].
This if-then implementation intention is the key to WOOP — it preprograms your response to the obstacle you identified.

### Step 2: Backward Planning (from goal to today)
Start at the goal and work backward:
- **Timeline end**: [GOAL] is achieved — what had to be true?
- **Three months out**: what must be true at this milestone?
- **One month out**: what must be true?
- **Two weeks out**: what must be true?
- **This week (Week 1)**: what must I start?

Build the backward plan as a milestone chain — each milestone is defined by what must be TRUE, not what activity must occur.

### Step 3: Milestone Identification
For each quarterly milestone:
- Milestone statement (what is true / what exists)
- Leading indicators (how do I know I'm on track 2 weeks before the milestone?)
- What would cause me to miss this milestone? (top 2 blockers)
- Contingency: if I'm behind at this milestone, what changes?

### Step 4: Weekly Action Items
From the backward plan, derive this week's action items:
- List every action required this week to stay on the milestone path
- For each action: effort estimate, best time to do it, dependencies
- Highlight: the single Most Critical Action (if only one thing happens this week, it's this)

### Step 5: Resource Gap Analysis
What do you need to achieve this goal that you don't currently have?
- Skills / knowledge gaps
- Tools or systems needed
- Relationships or introductions needed
- Time / budget / permission required
For each gap: how will you close it? By when?

### Step 6: Risk Anticipation (Top 3 Derailment Risks)
For each risk:
- Risk description (specific, not generic: "I'll get distracted" → "The Q4 planning cycle will consume 80% of my calendar in October")
- Probability (HIGH / MEDIUM / LOW)
- Impact (HIGH / MEDIUM / LOW)
- Prevention plan (what to do before the risk materializes)
- Response plan (what to do if it happens anyway)

### Step 7: Accountability Design
- Who will you tell about this goal? (commitment power)
- Check-in frequency and format (weekly solo review / biweekly partner call / public updates)
- What data will you share at each check-in?
- Consequence design: what is the cost of falling behind? (make it real but not punishing)

## Output
- Goal decomposition tree (goal → milestones → weekly actions — visual hierarchy)
- Week 1 action list (specific, time-boxed, owner assigned)
- Risk mitigation plan (3 risks × prevention + response)
- 30-second accountability brief (what to tell your accountability partner)`,
    category: 'productivity',
    tags: ['goal-setting', 'planning', 'execution', 'accountability', 'productivity'],
    difficulty: 'intermediate',
    useCase: 'Use when you have a big goal that feels overwhelming and needs to be converted into a week-by-week execution plan.',
    authorUsername: 'osa',
    likes: 267,
    saves: 178,
    copies: 723,
    views: 4100,
    trendScore: 267*2 + 178*3 + 723 + 4100*0.2,
    trendingScore: 267*2 + 178*3 + 723 + 4100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'Big goals stay as intentions because people skip the decomposition step. WOOP + backward planning converts ambition into specific weekly actions.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 723,
    estimatedTokens: 830,
    model: 'gpt-4o',
    createdAt: '2024-11-09',
  },
  {
    id: 'lib-prd-012',
    title: 'Delegation Decision Matrix',
    slug: 'delegation-decision-matrix',
    description: 'Builds a delegation decision matrix with readiness assessment, briefing templates, oversight calendar, and delegation conversation script.',
    content: `You are a management consultant who has trained 200+ managers on effective delegation. Help me decide what to delegate and how to do it effectively.

## Inputs
- Task list or role description: [TASK_LIST_OR_ROLE_DESCRIPTION]
- Team members and skills: [TEAM_MEMBERS_AND_SKILLS]

## Delegation Framework

### Why Managers Under-Delegate (and the Real Cost)
Before the matrix: the most common reasons managers hold onto work they should delegate:
- "It's faster to do it myself" — true for one instance, false for the fifth time
- "No one else can do it as well" — likely true, but good enough + team learning > perfect + bottleneck
- "I enjoy this work" — keeping enjoyable work that belongs at a lower level is a failure mode
Calculate: what is the cost of each hour you spend on delegatable tasks × your hourly rate?

### 1. Delegation Decision (per task)
For each task in [TASK_LIST_OR_ROLE_DESCRIPTION]:

**Should I delegate this?**
- Is this task at the right level for my role? (if a junior could do 80% as well, delegate)
- Is this a growth opportunity for someone on my team?
- What is my unique contribution here vs someone else's sufficient contribution?
- Decision: YES / NO / NOT YET (with reason)

**Who should I delegate to?**
Match task requirements to team member strengths and development goals.

### 2. Delegation Level (Tannenbaum Scale)
For each delegated task, choose the appropriate delegation level based on the delegate's readiness:

| Level | Name | What You Do | What They Do | Use When |
|---|---|---|---|---|
| 1 | Tell | Decide and instruct | Execute | New to task, high-stakes |
| 2 | Sell | Decide and explain why | Execute with understanding | New to task, needs buy-in |
| 3 | Consult | Ask for input, then decide | Contribute ideas | Familiar with task |
| 4 | Agree | Decide together | Co-decide and execute | Experienced, needs alignment |
| 5 | Delegate | Set outcome, step back | Decide and execute | Expert, trusted |

### 3. Task Briefing Template
For each delegated task, use this briefing structure:
- Context: why this task matters and how it fits the bigger picture
- Outcome: what "done" looks like (specific and measurable)
- Authority: what decisions can they make without checking with you?
- Resources: what support, budget, or access do they have?
- Timeline: deadline + any interim check-in points
- Quality bar: what standard must the output meet?
- Your availability: how to reach you if they're truly stuck

### 4. Check-In Frequency by Delegation Level
Design oversight that matches the level:
- Level 1–2: daily or at key milestones
- Level 3–4: weekly progress update
- Level 5: completion check only

Oversight calendar template: which delegated tasks to check in on and when.

### 5. Failure Recovery Plan
When a delegated task goes wrong (it will sometimes):
- Debrief protocol: what happened → what was expected → gap analysis
- Correction: fix the output OR accept imperfection and learn from it (your choice, depends on stakes)
- Delegation learning: what briefing or support would have prevented this?
- Don't: take the task back permanently after one failure (this destroys delegation culture)

## Delegation Mistakes to Avoid
- Delegating the task but not the authority (sets the delegate up to fail)
- Checking in so frequently it's micromanagement, not delegation
- Delegating only the unpleasant tasks (your team will notice)
- Delegating without a clear quality bar (vague outcomes produce vague results)

## Output
- Delegation decision table (every task: YES/NO/NOT YET + assigned to + delegation level)
- Delegation conversation script (how to brief a team member — 10-minute model)
- Task briefing template (fill-in format for each delegation)
- Oversight calendar (what to check in on and when)`,
    category: 'productivity',
    tags: ['delegation', 'management', 'leadership', 'productivity', 'team'],
    difficulty: 'intermediate',
    useCase: 'Use when overwhelmed by tasks that could be done by others, or when building a team\'s capability through intentional delegation.',
    authorUsername: 'agentdesigner',
    likes: 189,
    saves: 128,
    copies: 523,
    views: 3100,
    trendScore: 189*2 + 128*3 + 523 + 3100*0.2,
    trendingScore: 189*2 + 128*3 + 523 + 3100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'First-time managers are the most common under-delegators. This matrix makes the decision explicit and gives them the language to brief effectively.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 523,
    estimatedTokens: 840,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-14',
  },
  {
    id: 'lib-prd-013',
    title: 'Personal Accountability System Builder',
    slug: 'personal-accountability-system-builder',
    description: 'Designs a personal accountability system with commitment devices, partner protocol, weekly review ritual, and failure debrief process.',
    content: `You are a performance coach who specializes in closing the gap between intentions and actions. Design a personal accountability system for achieving [GOAL_OR_PROJECT].

## Inputs
- Goal: [GOAL]
- Timeline: [TIMELINE]
- Past failure patterns: [PAST_FAILURE_PATTERNS] (what has stopped you before?)

## Accountability System Design

### 1. Pre-Mortems: Anticipate Failure Before It Happens
Before building the system, run a pre-mortem on [GOAL]:
"It is [deadline date] and I did not achieve [GOAL]. What happened?"
Write 5–7 specific reasons this could have failed.
Then: design the accountability system specifically to prevent the 2–3 most likely failure scenarios.

### 2. Commitment Device Design
A commitment device makes the cost of not following through greater than the cost of following through.
Choose the right type for [PAST_FAILURE_PATTERNS]:

**Financial commitment device**
- Stake money that goes to a charity you dislike (Beeminder / StickK / manual accountability partner)
- Amount: meaningful but not bankruptcy-level (1% of monthly income as a reference point)

**Social commitment device**
- Public declaration on Twitter/LinkedIn or in a community
- Tells people you respect — creates reputation-based accountability

**Identity commitment device**
- Reframe the goal as "I am the type of person who [does this]" before setting a target
- Journal weekly on: am I acting in accordance with who I said I am?

**Pre-commitment of time**
- Book non-refundable resources (classes, coaching, co-working space) before you feel like it
- Schedule the work blocks before you schedule anything else for the week

### 3. Accountability Partner Protocol
How to choose a partner (not just a supportive friend):
- Criteria: honest (will call you out), consistent (won't miss check-ins), has their own goals (reciprocal)
- Avoid: people who will comfort you when you miss targets instead of challenging you

Check-in structure (weekly, 20 minutes):
1. What did you commit to last week?
2. What did you actually do?
3. What's the gap and why?
4. What will you commit to this week?
5. What obstacle might arise and how will you handle it?

Partner briefing guide: what to tell your partner about this goal so they can ask the right questions.

### 4. Public Commitment Strategy
If your [PAST_FAILURE_PATTERNS] include "I give up when no one is watching":
- Platform choice (LinkedIn for professional goals / Twitter for creative / community forum for specific goals)
- Announcement format (what to say, not too detailed to feel threatening)
- Update cadence (weekly brief progress update keeps momentum)
- What to post when you fail (transparency beats silence — it actually increases commitment)

### 5. Weekly Review Ritual (15 minutes every Sunday)
12 questions to answer in 15 minutes:
1. Did I do what I committed to this week?
2. If yes: what helped me follow through?
3. If no: what happened? (honest, not self-blaming)
4. What is my confidence level in hitting [GOAL] by [TIMELINE]? (1–10)
5. What is the one thing most likely to derail me this coming week?
6. What am I committing to this coming week? (specific, measurable)
7. [+ remaining questions based on your goal type]

### 6. Consequence System Design
**Positive reinforcement (milestone rewards):**
- Define rewards for hitting major milestones
- Rule: reward must be desirable enough to motivate, not so large it becomes the goal

**Friction for missed targets:**
- Social friction: share missed targets with partner (the discomfort of reporting failure is real motivation)
- Process friction: if you miss 3 consecutive weeks, run a 30-minute failure debrief before resuming

### 7. Data Tracking
What to measure and how often:
- Leading metric: the behavior input you control (hours spent / actions taken per week)
- Lagging metric: the outcome you're working toward (the actual goal)
- Tracking method: simplest possible (phone notes / habit app / one column in a spreadsheet)
- Review frequency: leading daily, lagging weekly

### 8. Failure Debrief Process
When you miss a week or fall significantly behind:
1. Describe what happened (neutral, factual — no judgment)
2. What was the root cause? (not "I was busy" — what specifically displaced this?)
3. Was the system design wrong, or was execution the issue?
4. What one change to the system would prevent this?
5. Restart protocol: resume at the smallest possible version of the goal

## Output
- Accountability system blueprint (all components in one reference doc)
- Weekly review template (15-minute ritual, 12 questions)
- Partner briefing guide (what to send your accountability partner)`,
    category: 'productivity',
    tags: ['accountability', 'goals', 'commitment', 'behavior-change', 'productivity'],
    difficulty: 'intermediate',
    useCase: 'Use when you have repeatedly failed to achieve an important goal and need external structure to stay on track.',
    authorUsername: 'osa',
    likes: 234,
    saves: 167,
    copies: 678,
    views: 3800,
    trendScore: 234*2 + 167*3 + 678 + 3800*0.2,
    trendingScore: 234*2 + 167*3 + 678 + 3800*0.2,
    trending: true,
    featured: false,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'Most accountability systems fail because they rely on good intentions. This one uses behavioral science to make failure costly and completion rewarding.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 678,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-25',
  },
  {
    id: 'lib-prd-014',
    title: 'Meeting-Free Deep Work Day Planner',
    slug: 'meeting-free-deep-work-day-planner',
    description: 'Designs and protects a weekly meeting-free deep work day with team communication strategy and output improvement metrics.',
    content: `You are a productivity strategist who has helped executives at meeting-heavy companies protect 8+ hours per week for deep focused work. Help me design and protect a meeting-free deep work day.

## Inputs
- Current role: [CURRENT_ROLE]
- Key deep work projects: [KEY_DEEP_WORK_PROJECTS]
- Meeting culture at company: [MEETING_CULTURE_AT_COMPANY] (light / moderate / heavy / extreme)

## Deep Work Day Design

### 1. Optimal Day of Week Selection
Which day to protect for deep work (analyze your meeting calendar patterns):
- Tuesday: typically lighter meeting load, past Monday context-switch is resolved
- Wednesday: midweek, good for complex mid-project work
- Friday: good for creative/strategic thinking, but meetings often bleed in
- Thursday: often heavy with end-of-week syncs

Recommendation based on [MEETING_CULTURE_AT_COMPANY]:
- Heavy meeting culture: Wednesday is hardest to defend; Monday or Friday easier
- Moderate: Tuesday or Thursday work well
- Your optimal day: [analysis of typical patterns for their context]

### 2. Pre-Day Preparation (The Night Before)
The deep work day fails if you don't prepare:
- Task list: write the 3 things you MUST accomplish tomorrow (pre-committed)
- Materials: have everything open and ready (docs, repo, research — no morning setup time)
- Brain dump: clear open loops before sleep (reduces next-morning mental overhead)
- Communication: send a "I'm in heads-down mode tomorrow" note to your team tonight

### 3. Session Structure (Full Deep Work Day)
Four 90-minute blocks with transitions:
| Time | Block | Focus |
|---|---|---|
| 8:00–9:30 | Block 1 | Hardest task (peak cognitive energy) |
| 9:30–9:50 | Transition | Walk, coffee, review Block 1 output |
| 9:50–11:20 | Block 2 | Second hardest task |
| 11:20–11:40 | Transition | Movement, away from screen |
| 11:40–1:00 | Block 3 | Creative or analytical task |
| 1:00–2:00 | Lunch + recovery | Full break, no screens |
| 2:00–3:30 | Block 4 | Review, editing, or next-steps from morning |
| 3:30 | Shutdown | Review outputs, tomorrow prep, close everything |

### 4. Interruption Handling Protocol
Prepare responses for the three types of interruptions:
- Slack message: auto-reply enabled ("I'm in deep work mode until 4pm. For urgent matters: [phone number/protocol].")
- Calendar pop-up from colleague: pre-written decline template
- Genuine emergency: define in advance what counts as a genuine emergency that overrides the day

### 5. Communication Strategy With Team
Set expectations before implementing the day:

**For direct reports:**
"Every [day of week] I'll be in focused work mode. Here's what that means for you: [async channels, response times, when I'm available for urgent questions]."

**For peers:**
"I'm protecting [day] for deep work. Can we move our regular check-ins to [alternative day]?"

**For manager:**
Frame in output terms: "I'd like to try protecting [day] for focused work. I'll track my output and share results in 4 weeks. Here's what I'm planning to accomplish."

### 6. Communicating Value to Management
How to demonstrate that deep work days improve output (not decrease availability):
- Define what you'll produce on deep work days (specific deliverables)
- Track: before vs after 4 weeks of protected days
- Metric categories: output quantity (pages written, features shipped), output quality (revision cycles needed), team satisfaction (fewer delays on things waiting on you)
- Language for the 4-week report to manager

### 7. Quarterly Scheduling Guide
How to protect the day across a quarter:
- Block the recurring event 12 weeks at a time
- Review and re-protect every 4 weeks (calendar drift is real)
- Pre-blocking exceptions: known heavy weeks (planning cycles, board weeks) where you waive the day in advance

## Output
- Deep work day schedule template (your personal one, based on the inputs)
- Team communication message templates (3: direct reports / peers / manager)
- Output improvement tracking sheet
- Quarterly calendar protection checklist`,
    category: 'productivity',
    tags: ['deep-work', 'meetings', 'focus', 'calendar', 'productivity'],
    difficulty: 'intermediate',
    useCase: 'Use when implementing the first meeting-free focus day in a meeting-heavy work environment.',
    authorUsername: 'agentdesigner',
    likes: 212,
    saves: 143,
    copies: 598,
    views: 3400,
    trendScore: 212*2 + 143*3 + 598 + 3400*0.2,
    trendingScore: 212*2 + 143*3 + 598 + 3400*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'A single weekly focus day doubles most knowledge workers\' output on complex projects. The challenge is protecting it — this solves that.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 598,
    estimatedTokens: 820,
    model: 'gpt-4o',
    createdAt: '2024-12-30',
  },
  {
    id: 'lib-prd-015',
    title: 'Work-Life Integration Audit',
    slug: 'work-life-integration-audit',
    description: 'Audits and redesigns work-life integration with personal boundary protocols, time ROI analysis, and quarterly life review ritual.',
    content: `You are an executive life coach who has worked with 300+ high-performers on designing sustainable, fulfilling careers. Help me audit and redesign my work-life integration for [LIFE_STAGE].

## Inputs
- Life stage: [LIFE_STAGE] (early career / parent of young children / executive / entrepreneur / caregiver)
- Current schedule: [CURRENT_SCHEDULE]
- Non-negotiable personal commitments: [NON-NEGOTIABLE_PERSONAL_COMMITMENTS]
- Career goals: [CAREER_GOALS]

## Integration Audit Framework

### 1. Integration vs Separation Preference Assessment
First, determine which model fits you:
**Integration model**: work and personal life blend fluidly — you check email on vacation but also take a Tuesday afternoon for personal matters. Requires: high tolerance for fluidity, clear values to guide decisions when the lines blur.
**Separation model**: hard boundaries between work and personal — when work is over, it's over. Requires: strong boundary-setting skills, tolerance for occasional missed opportunities.

For [LIFE_STAGE]: which model is realistic and which aligns with your values?

### 2. Boundary Violation Inventory
From [CURRENT_SCHEDULE], identify current violations:
- Work bleeding into personal: (list specific examples)
  - Checking work messages during family dinners
  - Working on weekends without intention or compensation
  - Mental preoccupation with work during personal time
- Personal bleeding into work: (list specific examples)
  - Personal errands during work hours creating guilt
  - Family obligations during work hours creating resentment

For each violation:
- Is this necessary or habitual?
- What would need to change to eliminate it?

### 3. Time ROI Analysis
Where you spend time vs what you actually value:
Complete the time allocation audit:
| Life Domain | Hours/Week Actual | % of Total | What You Value (1–10) | Alignment Score |
|---|---|---|---|---|
| Deep work / career advancement | | | | |
| Relationship investment | | | | |
| Health and physical wellbeing | | | | |
| Recovery / rest | | | | |
| Learning and growth | | | | |
| Creative / personal projects | | | | |
| Admin / housework | | | | |

Identify the biggest gaps: where you're spending time ≠ what you value.

### 4. Energy Leaks Identification
Sources of energy depletion that don't provide proportional value:
- Obligation-based commitments (things you do out of guilt or habit)
- Relationship drains (people or interactions that consistently deplete you)
- Technology habits (social media consumption that doesn't fulfill you)
- Work tasks that are low-impact and low-enjoyment (combined)

For each energy leak: eliminate / reduce / change relationship with?

### 5. Relationship Investment Audit
For [LIFE_STAGE]-specific context:
- Which relationships are most important to you? (list top 5–8)
- How much intentional, quality time per week does each receive currently?
- Which relationships have been neglected due to work pressure?
- Relationship investment calendar: what intentional time will each relationship receive?

### 6. Integration Principles Design
Your personal rules — not generic advice, but specific rules for your [LIFE_STAGE]:

Examples:
- "I am fully present with my family from 6–8pm every weekday — phone in a drawer."
- "I do not check work communication on Sundays before noon."
- "Every quarter I take one full unplugged day."

Design 5–7 principles that are specific, testable, and meaningful to you.

### 7. Boundary Protocols
Technology boundary design:
- Work phone: which hours is it on / off?
- Email: last check of the day at [time]?
- Laptop: where does it live when not working? (physical separation)
- Work apps on personal phone: keep / move to tablet / delete?

Communication with colleagues and clients:
- Response time expectation setting (what should people expect from you on evenings/weekends?)
- Auto-response templates for evenings and vacation
- Escalation protocol (what truly warrants interrupting personal time?)

### 8. Quarterly Life Review Ritual (2 hours, alone)
The practice that makes everything else sustainable:
- Time allocation review (did I live by my integration principles this quarter?)
- Relationship investment review (am I investing in the right relationships?)
- Career progress review (am I on track for [CAREER_GOALS]?)
- Energy assessment (how am I feeling? what needs to change?)
- Next quarter intentions (3 integration-focused intentions, not just work goals)

## Output
- Integration principles (5–7, specific and testable)
- Weekly template (showing integration in practice)
- Quarterly life review guide (2-hour ritual, structured questions)
- Boundary communication templates (auto-responders, team expectations)`,
    category: 'productivity',
    tags: ['work-life', 'balance', 'integration', 'wellbeing', 'productivity'],
    difficulty: 'intermediate',
    useCase: 'Use when work is consistently crowding out the personal commitments and relationships that matter most.',
    authorUsername: 'osa',
    likes: 198,
    saves: 134,
    copies: 567,
    views: 3200,
    trendScore: 198*2 + 134*3 + 567 + 3200*0.2,
    trendingScore: 198*2 + 134*3 + 567 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Work-life balance advice is generic. This audit is specific to your life stage and builds systems around your actual values and constraints.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 567,
    estimatedTokens: 880,
    model: 'gpt-4o',
    createdAt: '2025-01-06',
  },
]
