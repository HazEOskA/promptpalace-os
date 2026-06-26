import type { Prompt } from './prompts'

export const AUTOMATION_PROMPTS: Prompt[] = [
  {
    id: 'lib-aut-001',
    title: 'Zapier Multi-Step Workflow Architect',
    slug: 'zapier-multi-step-workflow-architect',
    description: 'Designs a complete Zapier multi-step workflow with trigger configuration, step-by-step Zap structure, error handling, testing protocol, and plan requirements.',
    content: `You are an automation engineer specializing in Zapier who has built and maintained hundreds of production workflows across marketing, sales, and operations teams. Design a complete, production-ready multi-step Zap.

## Inputs
- Trigger app: [TRIGGER_APP]
- Trigger event: [TRIGGER_EVENT]
- Goal: [GOAL] (what business outcome should this Zap achieve?)
- Apps available: [APPS_AVAILABLE] (list of tools connected to your Zapier account)

## Zap Architecture

### Trigger Configuration
- **App**: [TRIGGER_APP]
- **Trigger event**: [TRIGGER_EVENT]
- **Account**: specify which account/workspace
- **Filter conditions**: define the exact conditions that should fire this Zap (not every event — only specific ones). Provide the filter logic as IF [field] [operator] [value] statements.
- **Sample data**: describe what the trigger data object looks like (key fields and data types)
- **Polling interval note**: for non-instant triggers, what is the minimum polling frequency on each Zapier plan?

### Step-by-Step Zap Structure
For each step (number sequentially):

**Step [N]: [Action App] — [Action Event]**
- App and action event name
- Account: specify
- Field mapping: [Trigger Field or Previous Step Field] → [Destination Field]
  List every field mapping, including data transformations (e.g., "Format Date step to convert ISO 8601 to MM/DD/YYYY")
- Filter condition (if this step should only run in certain cases): IF/ELSE logic
- Notes: any quirk or gotcha specific to this app's Zapier integration

**Formatter and Code steps**: when to use Zapier's built-in Formatter vs. a Code step (JavaScript), with example transformations.

### Error Handling Strategy
For each likely failure point:
- What triggers the failure (API timeout, field mapping mismatch, quota exceeded)
- Default Zapier behavior (retry vs. pause vs. skip)
- Recommended response: re-run / skip / notify / create a task for review
- Error notification setup: how to alert the team when the Zap fails without turning off the Zap

### Testing Protocol
Step-by-step process to validate the Zap before enabling:
1. Test with sample data (trigger test)
2. Validate each step's output before proceeding
3. Confirm field mapping accuracy
4. Test edge cases: empty fields, special characters, long strings
5. Full end-to-end test with a real (controlled) trigger event
6. Monitor first 10 live runs before fully trusting

### Maintenance Notes
- Which fields are likely to break if the source app changes (brittle mappings)
- How often to review this Zap for drift
- Logging: where to track Zap run history and error rates
- What manual override looks like if the Zap breaks

### Alternative Approach
If the primary Zap structure hits a limitation, describe the alternative:
- Which steps could be replaced with a different app
- Whether a Make.com (Integromat) scenario would handle this better and why

### Estimated Metrics
- Estimated tasks per month (Zapier billing unit)
- Zapier plan required (Free / Starter / Professional / Team)
- Cost estimate at current Zapier pricing`,
    category: 'automation',
    tags: ['zapier', 'workflow', 'no-code', 'automation', 'integration'],
    difficulty: 'intermediate',
    useCase: 'Use when designing a new Zapier workflow to ensure every step, error path, and mapping is accounted for before going live.',
    authorUsername: 'builderai',
    likes: 412,
    saves: 274,
    copies: 1180,
    views: 7400,
    trendScore: 412*2 + 274*3 + 1180 + 7400*0.2,
    trendingScore: 412*2 + 274*3 + 1180 + 7400*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Architecture',
    whyTrending: 'Most Zapier workflows break silently and nobody knows. This prompt forces teams to design error handling and testing before the workflow goes live.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 1180,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-15',
  },
  {
    id: 'lib-aut-002',
    title: 'Make.com Scenario Blueprint',
    slug: 'make-com-scenario-blueprint',
    description: 'Designs a complete Make.com scenario with module sequence, router logic, data transformation expressions, error handlers, and scheduling strategy.',
    content: `You are a Make.com (formerly Integromat) automation specialist who builds complex, production-grade scenarios for operations and marketing teams. Design a complete Make.com scenario.

## Inputs
- Automation goal: [AUTOMATION_GOAL]
- Source app: [SOURCE_APP]
- Destination app: [DESTINATION_APP]
- Data to transfer: [DATA_TO_TRANSFER]
- Trigger type: [TRIGGER_TYPE] (webhook / scheduled / instant / manual)

## Scenario Architecture

### Module Sequence
List every module in order. For each module:
- **Module number and name** (exact Make.com module name, e.g., "Google Sheets: Watch Rows", "HTTP: Make a Request")
- **Module type**: trigger / action / aggregator / iterator / router / tool
- **Configuration summary**: key fields to set up
- **Output bundle description**: what data structure this module passes to the next

### Router Logic (if applicable)
If the scenario branches based on conditions:
- Route 1: condition (using Make.com filter syntax) + description of what this path does
- Route 2: condition + description
- Default route: what happens if no conditions match (important — prevents silent failures)
- Fallback route: error handler or logging step

### Iterator and Aggregator Usage
- Where to use Iterator: when dealing with arrays (e.g., list of contacts, rows from a sheet)
- Iterator setup: bundle structure, how to reference bundle items downstream
- Where to use Aggregator: when collecting results across multiple bundles into one (e.g., building a summary email)
- Text Aggregator vs. Array Aggregator vs. Numeric Aggregator: which to use and why

### Data Transformation Expressions
For each field that requires transformation:
- Source field reference: \`{{module_N.fieldName}}\`
- Transformation needed: (e.g., format date, extract substring, concatenate, convert type)
- Make.com expression: provide the exact expression using Make's function syntax
  Examples: \`{{formatDate(now; "YYYY-MM-DD")}}\`, \`{{if(1.status = "active"; "Yes"; "No")}}\`, \`{{trim(lower(2.email))}}\`

### Filter Conditions (Make.com Filter Syntax)
For each filter point in the scenario:
- Position: between which modules
- Condition logic: field, operator, value
- Make.com filter setup: exact field path and operator type
- What happens when filter does not pass: scenario continues to next route or stops

### Error Handler Routes
Make.com error handling types to use:
- **Ignore**: for non-critical errors (log and continue)
- **Rollback**: for transactions requiring atomicity
- **Commit**: for partial success scenarios
- **Resume**: with fallback value specified
For each error type this scenario might encounter, specify the error handler and its configuration.

### Incomplete Execution Handling
- Enable incomplete executions: yes/no with rationale
- Maximum stored incomplete executions: recommendation
- Resolution process: how a team member should review and resolve incomplete executions
- Automatic retry: is it appropriate here?

### Scheduling Strategy
- Trigger type: webhook (instant) vs. scheduled (cron)
- If scheduled: recommended interval and Make.com scheduling expression
- Peak hours avoidance: if this scenario writes to a rate-limited API, when to schedule
- Consecutive runs: is it safe for two runs to overlap?

### Scenario Metadata
- Scenario name convention: [PROJECT]-[SOURCE]-[DESTINATION]-[ACTION]
- Folder: which team folder in Make.com
- Scenario notes: what to document in the scenario description field

## Output Format
1. Module sequence list (copy-paste ready for scenario build checklist)
2. Data structure mapping table (source field → transformation → destination field)
3. Testing checklist (10 items to verify before activating)
4. API rate limit considerations for each app in this scenario`,
    category: 'automation',
    tags: ['make', 'integromat', 'no-code', 'automation', 'workflow'],
    difficulty: 'intermediate',
    useCase: 'Use when building a Make.com scenario that involves routing, iteration, or data transformation — anything beyond a simple trigger-action flow.',
    authorUsername: 'builderai',
    likes: 167,
    saves: 112,
    copies: 460,
    views: 2900,
    trendScore: 167*2 + 112*3 + 460 + 2900*0.2,
    trendingScore: 167*2 + 112*3 + 460 + 2900*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Blueprint',
    whyTrending: 'Make.com scenarios get complex fast. This prompt creates a module-by-module blueprint including the data transformations most tutorials skip.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 460,
    estimatedTokens: 970,
    model: 'gpt-4o',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-aut-003',
    title: 'Behavior-Based Email Automation Map',
    slug: 'behavior-based-email-automation-map',
    description: 'Designs a complete behavior-triggered email automation system covering every lifecycle stage with trigger logic, branch conditions, and ASCII flowchart.',
    content: `You are a marketing automation architect who designs behavior-based email systems that convert trials to customers and recover churned users. Create a complete behavior-based email automation system.

## Input
- Product: [PRODUCT]
- Customer lifecycle stages: [CUSTOMER_LIFECYCLE_STAGES] (e.g., Lead, Trial, Onboarding, Active, At-Risk, Churned)
- Key behavioral signals available: [KEY_ACTIONS] (e.g., signup, feature used, upgrade clicked, inactivity, cancellation)

## Automation System Design

### System Architecture Overview
Before diving into individual sequences, define:
- Marketing automation platform: what tool is this designed for? (HubSpot / ActiveCampaign / Klaviyo / Customer.io / Braze)
- Property and event tracking requirements: what custom properties and events must be tracked for this system to work?
- Contact record structure: what fields must exist?
- Segment definitions: define each lifecycle stage as a contact list/segment condition

### Automation Sequences by Stage

For each lifecycle stage, define all triggered automations:

#### Stage: [Lifecycle Stage Name]
**Trigger**: exact event or property condition that enrolls a contact (e.g., "Event: trial_started fired", "Property: plan_type = trial AND created_at < 24h ago")

**Email sequence** (for each email in the sequence):
- Delay from trigger: X hours/days
- Email objective: what behavioral shift should this email drive?
- Subject line: written, not described
- Body outline (60 words): opening hook + core message + CTA
- CTA: specific action with link destination
- Exit condition: what event or property change removes the contact from this sequence?

**Branching logic**: if the user takes the desired action before email N, what happens?
- Branch A (engaged): fast-track them to the next stage sequence
- Branch B (no action): continue to next email in sequence
- Branch C (negative signal): enroll in recovery or win-back sequence

**Stage coverage required** (design automations for ALL of these):
1. **Welcome / Lead Nurture**: first contact to first meaningful action
2. **Trial Activation**: getting trial users to the activation event within [X] days
3. **Onboarding**: guiding activated users to full feature adoption
4. **Engagement Maintenance**: keeping active users engaged, preventing drift
5. **At-Risk / Re-engagement**: detecting and recovering users showing churn signals
6. **Win-Back**: users who have churned — timing, message, offer
7. **Upgrade Prompts**: behavioral triggers that indicate upgrade readiness

### Trigger Inventory Table
| Trigger Name | Event or Property Condition | Enrolls Into | Priority | Platform Setup Notes |
|---|---|---|---|---|
(Cover every trigger in the system)

### Copywriting Notes Per Email Type
For each email type (Welcome, Activation, Re-engagement, etc.):
- Tone: how formal/casual is appropriate?
- Opening: what format works best (story / stat / question / direct)?
- CTA type: learn more vs. take action vs. reply vs. book call?
- Length: short (< 100 words) vs. medium (100-250) vs. long (250+)

### What NOT to Automate
List 3-5 touchpoints that should remain human:
- Which moments require a personal email from a founder or CSM?
- Which negative signals should trigger a human task, not an automated email?
- When does automation feel tone-deaf and damage trust?

## Output Format
1. Automation map (ASCII flowchart showing all sequences and branches)
2. Trigger inventory table (complete)
3. Email subject lines written for each sequence (all, not just examples)
4. Implementation priority order (which sequences to build first and why)`,
    category: 'automation',
    tags: ['email-automation', 'lifecycle', 'marketing-automation', 'crm', 'behavioral'],
    difficulty: 'advanced',
    useCase: 'Use when building or overhauling a marketing automation system — from trial conversion flows to win-back campaigns.',
    authorUsername: 'builderai',
    likes: 398,
    saves: 264,
    copies: 1020,
    views: 6400,
    trendScore: 398*2 + 264*3 + 1020 + 6400*0.2,
    trendingScore: 398*2 + 264*3 + 1020 + 6400*0.2,
    trending: true,
    featured: true,
    agentReady: true,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'System',
    whyTrending: 'Behavior-based automation is the difference between a 5% and 25% trial conversion rate. This prompt designs the entire system, not just individual emails.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 1020,
    estimatedTokens: 1050,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-20',
  },
  {
    id: 'lib-aut-004',
    title: 'CRM Data Enrichment Pipeline Designer',
    slug: 'crm-data-enrichment-pipeline-designer',
    description: 'Designs an automated CRM enrichment pipeline covering trigger logic, API sequence, deduplication rules, freshness strategy, and field mapping table.',
    content: `You are a RevOps architect who builds data enrichment pipelines that keep CRM records accurate and complete. Design a comprehensive data enrichment pipeline.

## Inputs
- CRM name: [CRM_NAME] (Salesforce / HubSpot / Pipedrive / Close / etc.)
- Fields to enrich: [DATA_FIELDS_TO_ENRICH] (e.g., company size, industry, tech stack, funding stage, LinkedIn URL)
- Data sources available: [DATA_SOURCES_AVAILABLE] (e.g., Clearbit, Apollo.io, Hunter.io, LinkedIn, BuiltWith, Crunchbase)

## Pipeline Architecture

### Enrichment Trigger Logic
Define when enrichment should run:
- **New record trigger**: fires when a new lead/contact/company is created. Which record creation events trigger enrichment? (form submission / manual import / API-created / Zapier-created)
- **Update trigger**: fires when specific fields change. Which field changes should re-trigger enrichment?
- **Time-based re-enrichment**: how often should existing records be re-enriched? (data goes stale at different rates — company data: 6-12 months, contact data: 3-6 months)
- **Manual trigger**: how can a sales rep manually trigger re-enrichment for a specific record?

### Enrichment Sequence
The order in which enrichment sources are queried matters — optimize for cost and coverage:
For each enrichment source:
1. **Source name**: (e.g., Clearbit Company API)
2. **Fields it enriches**: specific fields this source covers
3. **Match method**: email domain / company domain / LinkedIn URL / phone number
4. **Match confidence threshold**: minimum confidence score to apply data
5. **Cost per record**: estimate
6. **Fallback**: if this source returns no match, which source tries next?
7. **Rate limit**: requests per second/minute and how to handle it in the pipeline

### Field Mapping Logic
| Source Field | CRM Field | Overwrite Rule | Fallback |
|---|---|---|---|
- **Overwrite rule**: always overwrite / only overwrite if empty / overwrite if source confidence > X% / never overwrite (flag for review)
- **Data normalization**: what transformations are needed? (e.g., company size range "51-200" → integer midpoint "125")
- **Conflicting data**: when two sources provide different values, which wins?

### Deduplication Rules
- **Duplicate detection**: how are duplicate records identified? (exact email match / fuzzy name + company match / domain match)
- **Merge strategy**: which record is the "winner" (oldest / most complete / most recently active)?
- **Field-level merge**: for each field, does the winner's value or the duplicate's value take precedence?
- **Human review queue**: which duplicate situations require manual review?

### Data Freshness Strategy
- **Freshness fields**: add \`last_enriched_at\` and \`enrichment_source\` to every enriched record
- **Staleness threshold by field type**: company HQ and size: refresh every 12 months; funding and tech stack: refresh every 6 months; contact title and LinkedIn: refresh every 3 months
- **Triggered re-enrichment**: when a deal moves to a certain stage, re-enrich to ensure data is current before outreach

### Failure Handling
- **API error**: log error + retry after 15 minutes + max 3 retries
- **No match found**: log "not enriched" status, set a flag for manual research, enroll in a low-confidence nurture sequence
- **Partial match**: apply only high-confidence fields, flag low-confidence fields for review
- **Manual review queue**: describe the CRM view or Slack notification that surfaces records needing human attention

### Reporting on Enrichment Coverage
- CRM report: % of records with each key field populated
- Monthly metric: enrichment coverage rate by field
- Pipeline health dashboard: lead records missing 3+ key fields

## Output Format
1. Pipeline architecture diagram (ASCII flowchart)
2. Field mapping table (complete, all fields × all sources)
3. Implementation steps (sequential build order)
4. Cost estimate (rough API cost per 1000 new records enriched)`,
    category: 'automation',
    tags: ['crm', 'data-enrichment', 'revops', 'sales-operations', 'pipeline'],
    difficulty: 'advanced',
    useCase: 'Use when building a RevOps data stack or improving CRM data quality for outbound sales and ABM campaigns.',
    authorUsername: 'promptarchitect',
    likes: 198,
    saves: 132,
    copies: 520,
    views: 3300,
    trendScore: 198*2 + 132*3 + 520 + 3300*0.2,
    trendingScore: 198*2 + 132*3 + 520 + 3300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Architecture',
    whyTrending: 'Data enrichment without a clear pipeline leads to inconsistent data and wasted API budget. This prompt designs the entire system including fallbacks and freshness.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 520,
    estimatedTokens: 980,
    model: 'gpt-4o',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-aut-005',
    title: 'Slack Bot Command System Designer',
    slug: 'slack-bot-command-system-designer',
    description: 'Designs a complete Slack bot slash command system with response formats, permission model, OAuth scopes, Slack manifest JSON, and webhook event subscriptions.',
    content: `You are a Slack developer who has built production Slack bots for operations, engineering, and HR teams. Design a complete slash command system for a Slack bot.

## Inputs
- Use case: [USE_CASE] (e.g., "incident management", "PTO requests", "standup reports", "expense approvals")
- Team workflows to automate: [TEAM_WORKFLOWS_TO_AUTOMATE]

## Bot Command System Design

### Main Commands (5-8 commands)

For each command, provide:
- **Command**: /command-name
- **Description**: one sentence shown in the Slack slash command menu (under 120 characters)
- **Usage syntax**: /command-name [required-param] [optional-param]
- **Parameters**: list each parameter with name, type, required/optional, and validation rules
- **Response format**: ephemeral (only visible to caller) or in-channel (visible to all)
- **Trigger action**: what happens when this command is invoked? (API call, database query, webhook to external service)
- **Response message format**: describe the Slack Block Kit structure (text, buttons, sections, dropdowns)
- **Error response**: what message appears if the command fails or parameters are invalid?

### Admin Commands (2-3 commands)
Commands restricted to workspace admins or designated roles:
Same format as above + permission check logic.

### Help Command
- /help [command-name] — returns usage instructions
- /help (no argument) — returns command list with one-line descriptions
- Design the help response as a Slack Block Kit layout

### Permission System
- Define user groups with different command access levels (e.g., Everyone / Team Lead / Admin)
- Permission check implementation: where is the user's role stored and how is it verified?
- Response when unauthorized: friendly message that explains the restriction

### Slack Manifest JSON (complete)
Provide the full Slack app manifest JSON including:
- App name, description, icon
- Slash commands array (all commands defined above)
- OAuth scopes (bot token scopes required for all functionality)
- Event subscriptions (which Slack events to subscribe to)
- Interactivity (if using Block Kit buttons/modals)
- Org-deploy settings (if this will be distributed across workspaces)

### OAuth Scopes Required
List every scope needed and explain why each is required:
- \`commands\`: slash command processing
- \`chat:write\`: sending messages
- [additional scopes based on functionality]

### Webhook Events to Subscribe To
List each event subscription and why:
- \`app_mention\`: handle @bot mentions
- \`message.channels\`: monitor specific channels (if needed)
- [additional events based on use case]

### Block Kit Response Templates
Provide 2-3 reusable Block Kit JSON templates for this bot's common response patterns:
- Success response template
- Error response template
- Confirmation dialog template (for destructive actions)

### Implementation Architecture
- Where does the bot's server live? (recommend: serverless function vs. always-on server for this use case)
- How are slash command requests handled? (synchronous 3-second limit vs. immediate 200 + async processing)
- State management: how does the bot track multi-step interactions (modals, follow-up actions)?`,
    category: 'automation',
    tags: ['slack', 'bot', 'slash-commands', 'workflow', 'team-automation'],
    difficulty: 'intermediate',
    useCase: 'Use when building a Slack bot to automate team workflows — from standup collection to approval workflows.',
    authorUsername: 'builderai',
    likes: 143,
    saves: 96,
    copies: 390,
    views: 2500,
    trendScore: 143*2 + 96*3 + 390 + 2500*0.2,
    trendingScore: 143*2 + 96*3 + 390 + 2500*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Specification',
    whyTrending: 'Slack bots are the fastest way to bring automation into existing team workflows. This prompt handles the manifest, scopes, and Block Kit templates that make it production-ready.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 390,
    estimatedTokens: 930,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-02',
  },
  {
    id: 'lib-aut-006',
    title: 'REST API Integration Specification',
    slug: 'rest-api-integration-specification',
    description: 'Writes a complete API integration spec covering authentication, pagination, rate limit handling, data transformation mapping, and idempotency strategy.',
    content: `You are a backend integration engineer who has built reliable API integrations between enterprise systems. Write a complete integration specification.

## Inputs
- Source system: [SOURCE_SYSTEM]
- Destination system: [DESTINATION_SYSTEM]
- Data to sync: [DATA_TO_SYNC]
- Sync frequency: [SYNC_FREQUENCY] (real-time / hourly / daily / event-triggered)
- Volume estimate: [VOLUME_ESTIMATE] (records per sync, total records in system)

## Integration Specification

### Authentication Approach
- Authentication method: OAuth 2.0 / API Key / JWT / HMAC
- Token acquisition: how is the token obtained (client credentials / authorization code flow)?
- Token storage: where and how are credentials stored securely (environment variables, secrets manager)?
- Token refresh: automatic refresh logic (how many seconds before expiry to refresh?)
- Credential rotation strategy: how to rotate without downtime

### Endpoints to Use
For each API endpoint required in this integration:
- **Method**: GET / POST / PUT / PATCH / DELETE
- **URL**: full endpoint path
- **Headers**: required headers (Content-Type, Authorization, API-Version)
- **Request body**: JSON schema for POST/PUT/PATCH requests
- **Query parameters**: all supported parameters with types and defaults
- **Response shape**: key fields in the success response
- **Relevant status codes**: 200, 201, 400, 401, 403, 404, 409, 429, 500

### Pagination Strategy
- Pagination type: cursor-based / offset-limit / page number / link header
- How to detect there are more pages: \`hasMore\` field / \`nextCursor\` / \`Link: <url>; rel="next"\` header
- Page size recommendation: balance between request count and payload size
- Handling large datasets: when to use streaming vs. batch

### Rate Limit Handling
- Rate limit specifications: requests per second/minute/hour for this API
- Rate limit headers to read: \`X-RateLimit-Remaining\`, \`Retry-After\`, etc.
- Retry logic: exponential backoff algorithm (base delay, multiplier, max retries, jitter)
- Pseudocode:
\`\`\`
function retryWithBackoff(request, maxRetries = 3):
  delay = 1000ms
  for attempt in 1..maxRetries:
    response = execute(request)
    if response.status == 429:
      wait(delay + random(0, delay * 0.1))  // jitter
      delay = delay * 2
    else if response.status >= 500:
      wait(delay)
      delay = delay * 2
    else:
      return response
  throw MaxRetriesExceededError
\`\`\`

### Data Transformation Mapping
| Source Field | Source Type | Transformation | Destination Field | Destination Type |
|---|---|---|---|---|
(Cover all fields in [DATA_TO_SYNC])

Transformation types to document:
- Type conversion (string → integer, ISO date → Unix timestamp)
- Normalization (trim whitespace, lowercase email)
- Default values (what to use when source field is null)
- Conditional logic (if status = "A" map to "active" else "inactive")

### Error Codes and Handling
For each relevant HTTP error code:
- Cause
- Retry: yes/no
- Action: log / notify / skip record / send to dead letter queue / rollback

### Webhook vs. Polling Decision
- Current sync approach: [SYNC_FREQUENCY] → polling or webhooks?
- Decision rationale: at what data freshness requirement does the switch make sense?
- Webhook setup (if applicable): event types, endpoint URL, signature verification

### Idempotency Strategy
- Idempotency key: where does it come from (source record ID / hash of payload / UUID generated at request time)?
- How idempotency is enforced: API header (\`Idempotency-Key\`) vs. application-level deduplication
- Deduplication window: how long is the idempotency key stored?
- What constitutes a "duplicate"? (same key = same request)

### Logging Requirements
- What to log per sync run: timestamp, records processed, records failed, API calls made, duration
- Error log structure: include source record ID, error message, endpoint, request body (sanitized)
- Log retention: how long to keep sync logs?
- Alerting threshold: alert if failure rate > X%

## Output Format
1. Technical spec document (all sections above)
2. Sample code snippets (authentication setup + paginated fetch + retry handler in Python or TypeScript — match [DESTINATION_SYSTEM] tech stack)
3. Integration test cases (10 cases covering success, edge cases, and error paths)`,
    category: 'automation',
    tags: ['api', 'integration', 'backend', 'rest', 'data-sync'],
    difficulty: 'advanced',
    useCase: 'Use when building a new API integration or auditing an existing one for production reliability.',
    authorUsername: 'promptarchitect',
    likes: 223,
    saves: 148,
    copies: 590,
    views: 3600,
    trendScore: 223*2 + 148*3 + 590 + 3600*0.2,
    trendingScore: 223*2 + 148*3 + 590 + 3600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Specification',
    whyTrending: 'API integrations break in predictable ways. This prompt forces teams to design for rate limits, idempotency, and error handling before writing a single line of code.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 590,
    estimatedTokens: 1050,
    model: 'gpt-4o',
    createdAt: '2024-11-25',
  },
  {
    id: 'lib-aut-007',
    title: 'Lead Scoring Automation System',
    slug: 'lead-scoring-automation-system',
    description: 'Designs a complete lead scoring system with demographic and behavioral scoring models, score decay logic, MQL/SQL thresholds, and CRM field setup guide.',
    content: `You are a marketing operations specialist who has built lead scoring models that reduced sales cycle length and improved SQL conversion rates. Design a complete lead scoring automation system.

## Inputs
- Company type: [COMPANY_TYPE]
- Product: [PRODUCT]
- ICP attributes: [ICP_ATTRIBUTES] (Ideal Customer Profile: company size, industry, title, geography, etc.)
- Behavioral signals available: [BEHAVIORAL_SIGNALS_AVAILABLE] (events and page visits tracked in your marketing automation platform)

## Lead Scoring Model Design

### Demographic Scoring Model
Points assigned based on who the lead is. Assign positive scores for fit, negative scores for disqualifiers:

**Company Attributes**:
| Attribute | Value | Points | Rationale |
|---|---|---|---|
| Company size | 1-10 employees | -10 | Below ICP minimum |
| Company size | 11-50 | +5 | Small but potential |
| Company size | 51-500 | +15 | Core ICP range |
| Company size | 500+ | +10 | Enterprise, longer cycle |
| Industry | [ICP industry] | +20 | Direct fit |
| Industry | Adjacent industry | +10 | Related use case |
| Industry | Disqualified industry | -20 | No fit |

**Contact Attributes**:
| Attribute | Value | Points |
(Cover: job title seniority, decision-making authority, relevant department, location/geography if relevant)

**Negative Scores** (disqualifiers):
- Personal email domain (@gmail, @yahoo): -15
- Competitor domain: -50 (and tag as competitor)
- Student or "N/A" title: -10

**Maximum demographic score**: set a cap (e.g., 60 points max) to prevent demographic alone from qualifying a lead

### Behavioral Scoring Model
Points assigned based on what the lead does. High-intent actions score higher:

**High Intent (20-30 points)**:
- Pricing page visit: +25
- Demo request form: +30
- Free trial signup: +30
- Contact sales page: +25

**Medium Intent (10-20 points)**:
- Product feature page visit: +15
- Case study view: +15
- Webinar attendance: +20
- Email click to product page: +10

**Low Intent (5-10 points)**:
- Blog post view: +5
- Email open: +2
- Social media click: +5

**Recency Multiplier**: actions in the last 7 days count at 1.5x, 8-30 days at 1x, 31-90 days at 0.5x.

**Maximum behavioral score**: set a cap (e.g., 100 points) to prevent gaming by volume alone.

### Score Decay Logic
Behavioral scores decay over time — demonstrate this is a recency-aware model:
- No activity in 30 days: remove 10 points
- No activity in 60 days: remove 25 points
- No activity in 90 days: remove 50% of behavioral score
- No activity in 180 days: reset behavioral score to 0 (demographic score preserved)
- Decay runs: daily or weekly batch job

### Scoring Thresholds
Define the lifecycle stages triggered by score:

| Threshold | Lifecycle Stage | Definition | Automated Action |
|---|---|---|---|
| < 20 | Subscriber | Unqualified | Nurture sequence |
| 20-49 | Marketing Lead | Early engagement | Awareness content |
| 50-74 | MQL | Marketing Qualified | Sales notification, assign to BDR |
| 75-99 | SQL | Sales Qualified | AE assignment, SLA timer starts |
| 100+ | SAL | Sales Accepted | Opportunity creation triggered |

### Automation Triggers
When a lead crosses a threshold:

**MQL Trigger** (score reaches 50):
- Notify the assigned BDR via Slack and email
- Create a task in CRM: "Follow up within 4 hours"
- Change Lifecycle Stage to MQL in CRM
- Enroll in sales-touch email sequence

**Disqualification Trigger** (score drops below 10 or disqualifier added):
- Move to Disqualified stage
- Remove from all active sequences
- Log disqualification reason

### CRM Field Setup Guide
New fields to add to contact and company records:
- \`Lead Score\` (integer, calculated)
- \`Demographic Score\` (integer, calculated)
- \`Behavioral Score\` (integer, calculated)
- \`Score Last Updated\` (datetime)
- \`MQL Date\` (datetime, set when first crosses MQL threshold)
- \`Disqualification Reason\` (picklist)

## Output Format
1. Scoring matrix table (complete, all attributes and actions)
2. Automation workflow diagram (ASCII: trigger → action for each threshold)
3. CRM field setup guide (field name, type, formula/logic for each field)
4. Model validation plan (how to test the model with historical data before go-live)`,
    category: 'automation',
    tags: ['lead-scoring', 'marketing-automation', 'revops', 'crm', 'sales'],
    difficulty: 'advanced',
    useCase: 'Use when implementing lead scoring for the first time or rebuilding a broken scoring model that is sending the wrong leads to sales.',
    authorUsername: 'builderai',
    likes: 178,
    saves: 118,
    copies: 470,
    views: 3000,
    trendScore: 178*2 + 118*3 + 470 + 3000*0.2,
    trendingScore: 178*2 + 118*3 + 470 + 3000*0.2,
    trending: true,
    featured: false,
    agentReady: true,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'System',
    whyTrending: 'Most lead scoring models are either too simple (one threshold) or too complex to maintain. This prompt designs a balanced, decay-aware system with clear thresholds.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 470,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-05',
  },
  {
    id: 'lib-aut-008',
    title: 'Customer Lifecycle Automation Trigger Map',
    slug: 'customer-lifecycle-automation-trigger-map',
    description: 'Maps every automated touchpoint across the customer lifecycle from Trial to Renewed, with trigger inventory, health score integration, and what to keep human.',
    content: `You are a customer success automation architect who designs systems that scale personalized customer experiences. Map every automated touchpoint in a customer's lifecycle.

## Inputs
- Product: [PRODUCT]
- Product type: [PRODUCT_TYPE] (SaaS / marketplace / mobile app / e-commerce)
- Customer journey stages: [CUSTOMER_JOURNEY_STAGES] (e.g., Trial → Onboarding → Active → At-Risk → Churned → Renewed)

## Lifecycle Automation Map

### Automation Philosophy
Before mapping triggers, establish 3 guiding principles for this product's automation approach:
- When does automation help? (examples specific to [PRODUCT_TYPE])
- When does automation hurt? (moments where automation feels cold or inappropriate)
- How should automation and human touchpoints complement each other?

### Stage-by-Stage Automation Inventory

For each lifecycle stage, provide:

**Stage: [Stage Name]**

**Definition**: the condition that defines a customer as being in this stage (property values, event history, inactivity period)

**Trigger Events** (what moves a customer into this stage or activates automations within it):
| Trigger | Type | Platform |
|---|---|---|
(Event-based, property-based, or time-based triggers)

**Automated Actions**:
For each trigger, list all automated actions:
- **Email**: subject + objective + timing delay + CTA
- **In-app message / push notification**: message text + trigger timing + display rule
- **Slack notification** (internal team): who gets notified, what message
- **Webhook / task creation**: what fires in the CRM or project management tool
- **Field update**: which CRM property changes and to what value

**Exit Conditions** (what moves a customer OUT of this stage):
- Positive exit: they took the desired action → go to [Next Stage]
- Negative exit: they churned or hit a disqualification condition → go to [Other Stage]
- Time-based exit: if no positive exit after X days → escalate to [Escalation Stage]

**Stage coverage** (design for ALL of these):
1. **Trial** (free trial period — converting to paid)
2. **Onboarding** (first 30-90 days of paid usage — driving adoption)
3. **Active** (healthy, regular usage — maintaining engagement)
4. **At-Risk** (declining usage signals — preventing churn)
5. **Churned** (cancelled — win-back sequence timing and offer)
6. **Renewed** (renewal completed — expanding and referring)

### Trigger Inventory Table
| Trigger Name | Stage | Type (event/property/time) | Automated Actions | Human Action? |
|---|---|---|---|---|
(Complete inventory — every trigger in the system)

### Health Score Integration Points
- Health score components: usage frequency, feature adoption breadth, NPS/CSAT, support tickets, billing history
- Score calculation: weighted formula example
- Automation triggers based on health score thresholds:
  - Score drops below X → enroll in At-Risk sequence
  - Score drops below Y → create CSM task immediately
  - Score rises above Z after At-Risk → pause win-back, send success confirmation

### Automation Dependency Map
Which automations must fire before others? Which are mutually exclusive? List:
- Conflict rules: "If enrolled in Win-Back, exclude from all promotional emails"
- Priority rules: "Health Score alert overrides scheduled nurture email"
- Suppression rules: "If assigned CSM active on account, suppress automated outreach"

### What NOT to Automate (Keep Human)
List 5-7 moments that should always involve a human:
- Specific trigger events that indicate a human conversation is needed
- What the human action should be (call, personalized email, Slack message)
- How the automation should create a task and route it correctly

### Metrics to Track
For each automation, define:
- Open rate / click rate target
- Conversion metric (what action proves this automation is working?)
- A/B test hypothesis for the first optimization

## Output Format
1. Complete lifecycle automation map (ASCII flowchart with all stages and transitions)
2. Trigger inventory table (all triggers, all actions)
3. Implementation priority order (which stage to build first — why)
4. 3-month automation calendar (when to build and launch each stage)`,
    category: 'automation',
    tags: ['customer-success', 'lifecycle', 'automation', 'churn-prevention', 'saas'],
    difficulty: 'advanced',
    useCase: 'Use when building a customer success automation system or auditing why customers are churning before the CS team can intervene.',
    authorUsername: 'builderai',
    likes: 356,
    saves: 236,
    copies: 940,
    views: 5800,
    trendScore: 356*2 + 236*3 + 940 + 5800*0.2,
    trendingScore: 356*2 + 236*3 + 940 + 5800*0.2,
    trending: true,
    featured: true,
    agentReady: true,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'System',
    whyTrending: 'Lifecycle automation is the highest-leverage CS investment. This prompt maps every touchpoint across all stages including what should stay human.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 940,
    estimatedTokens: 1050,
    model: 'gpt-4o',
    createdAt: '2024-10-25',
  },
  {
    id: 'lib-aut-009',
    title: 'Automated Business Report Generator',
    slug: 'automated-business-report-generator',
    description: 'Designs an automated reporting system with data collection schedule, transformation logic, report template, alerting rules, and SQL query templates.',
    content: `You are a business intelligence engineer who designs automated reporting systems that replace manual spreadsheet updates. Design a complete automated reporting system.

## Inputs
- Metric type: [METRIC_TYPE] (e.g., "weekly sales performance", "monthly marketing attribution", "daily operational metrics")
- Audience: [AUDIENCE] (e.g., "C-suite executives", "sales team", "marketing ops")
- Data sources: [DATA_SOURCES] (e.g., Salesforce, Google Analytics, Stripe, PostgreSQL, BigQuery)
- Reporting frequency: [REPORTING_FREQUENCY] (daily / weekly / monthly)
- KPIs to include: [KPIs_TO_INCLUDE]

## Automated Reporting System Design

### Data Collection Automation
For each data source:
- **Connection method**: direct database query / REST API / file export / data warehouse
- **Query or extraction schedule**: when does data get pulled? (cron expression)
- **Query template** (SQL or API call pseudocode):
\`\`\`sql
-- Example: Weekly revenue by segment
SELECT
  DATE_TRUNC('week', created_at) as week,
  plan_type,
  SUM(amount) as revenue,
  COUNT(DISTINCT customer_id) as customers
FROM subscriptions
WHERE created_at >= NOW() - INTERVAL '13 weeks'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC;
\`\`\`
- **Latency note**: how fresh is this data? (real-time / 1-hour delay / daily batch)
- **Data freshness indicator**: how will the report show when data was last updated?

### Data Transformation Logic
- **Aggregation rules**: which metrics are sums, which are averages, which are medians?
- **Period comparisons**: how are WoW / MoM / YoY comparisons calculated?
- **Cohort logic** (if applicable): how are cohorts defined and tracked?
- **Attribution logic** (if marketing report): first touch / last touch / linear / data-driven
- **Calculated fields**: provide the formula for each derived metric

### Report Template Structure
**Section 1 — Executive Summary**
- Top 3-5 KPIs as large numbers with trend indicators (↑↓→ with % change)
- Traffic light indicators (green/yellow/red based on target thresholds)
- One-sentence narrative summary (auto-generated from data)

**Section 2 — [KPI Group 1]**
- Primary chart type: (recommend time-series / bar / scatter — with rationale)
- Key metric table: period × segment breakdown
- Notable changes: how to flag items that changed more than X%

**Section 3 — [KPI Group 2]**
Same structure as Section 2.

**Section 4 — [KPI Group 3 — if applicable]**

**Section 5 — Action Items**
(Human-written section — what this report's data means for decisions this week)

### Distribution Mechanism
- **Email delivery**: tool, format (PDF / HTML email / Google Doc link), recipient list, schedule
- **Slack delivery**: Slack channel, bot message format, @mention rules
- **Dashboard**: always-on version in BI tool (Metabase / Looker / Tableau / etc.)
- **Mobile accessibility**: does the report render usably on a phone screen?

### Exception Alerting
For each KPI:
- **Alert threshold**: what % change or absolute value triggers an alert?
- **Alert channel**: email / Slack / PagerDuty / SMS
- **Alert audience**: different thresholds for different audiences (ops team vs. CEO)
- **Alert fatigue prevention**: minimum time between alerts, suppression rules

### Historical Comparison Logic
- **Comparison periods**: WoW, MoM, QoQ, YoY — which apply for each KPI?
- **Seasonality handling**: how to adjust comparisons for seasonal patterns
- **Baseline definition**: rolling 4-week average, same period last year, budget target

### Stakeholder Review Workflow
- Who reviews before the report is distributed? (if any)
- How does the reviewer annotate or add commentary?
- What is the review SLA? (report generated → reviewed → sent)

## Output Format
1. System architecture diagram (ASCII: data source → transform → template → distribution)
2. SQL query templates (one per KPI group)
3. Chart type recommendations (KPI → chart type → rationale table)
4. Report template (all sections described with column/row structure)
5. Monitoring setup: how to know if the automation breaks`,
    category: 'automation',
    tags: ['reporting', 'business-intelligence', 'data', 'automation', 'analytics'],
    difficulty: 'intermediate',
    useCase: 'Use when replacing a manual weekly or monthly report with an automated system that requires no human to generate.',
    authorUsername: 'builderai',
    likes: 134,
    saves: 90,
    copies: 360,
    views: 2200,
    trendScore: 134*2 + 90*3 + 360 + 2200*0.2,
    trendingScore: 134*2 + 90*3 + 360 + 2200*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Architecture',
    whyTrending: 'Manual reporting wastes hours every week. This prompt designs a complete automated system including alerting, distribution, and the SQL queries to power it.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 360,
    estimatedTokens: 960,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-08',
  },
  {
    id: 'lib-aut-010',
    title: 'Webhook Event Handler Architecture',
    slug: 'webhook-event-handler-architecture',
    description: 'Designs a production-grade webhook event handling system with signature verification, queuing, idempotency, dead letter queue, and infrastructure recommendations.',
    content: `You are a backend systems architect who has built high-volume event processing systems. Design a production-grade webhook event handling system.

## Inputs
- Source service: [SOURCE_SERVICE] (e.g., Stripe, GitHub, Shopify, Twilio)
- Events to handle: [EVENTS_TO_HANDLE] (list the specific event types)
- Processing requirements: [PROCESSING_REQUIREMENTS] (e.g., "update database, send email, trigger fulfillment")

## Webhook Architecture

### Endpoint Security — Signature Verification
Never process a webhook without verifying its authenticity:
- **Signature header**: the header [SOURCE_SERVICE] uses (e.g., \`Stripe-Signature\`, \`X-Hub-Signature-256\`)
- **Verification algorithm**: HMAC-SHA256 (standard) — provide pseudocode:
\`\`\`
function verifyWebhook(payload, signature, secret):
  expected = HMAC-SHA256(payload, secret)
  return timingSafeEqual(expected, signature)  // use timing-safe comparison to prevent timing attacks
\`\`\`
- **Reject on failure**: return 400 immediately, log the attempt, alert on repeated failures
- **Secret rotation strategy**: how to rotate the webhook secret without missing events

### Why Queuing Matters
Explain why webhooks should not be processed synchronously in the HTTP handler:
- HTTP handler must respond within 5-30 seconds (source service timeout)
- Complex processing (DB writes, external API calls) can exceed this
- A slow handler causes missed events and source service retries (duplicate processing)
- Solution: receive → enqueue → acknowledge (200 OK) → process asynchronously

### Queue Architecture
- **Queue technology recommendation**: Redis (BullMQ) / AWS SQS / Google Cloud Pub/Sub / RabbitMQ — choose based on [PROCESSING_REQUIREMENTS]
- **Queue configuration**:
  - Concurrency: how many workers process events in parallel?
  - Visibility timeout: how long before an unacknowledged job is retried?
  - Job priority: are some event types higher priority? (e.g., payment.failed > ping)
- **Queue monitoring**: how to observe queue depth, processing rate, error rate

### Idempotency — Prevent Duplicate Processing
Source services retry webhooks on failure. The same event may arrive multiple times:
- **Idempotency key**: use the event ID provided by [SOURCE_SERVICE] (e.g., \`event.id\` in Stripe)
- **Deduplication store**: Redis SET with TTL / database unique constraint on event_id
- **Check before processing**: if event_id already in store → acknowledge and skip
- **Store after processing**: set event_id in store after successful processing
- **TTL for idempotency keys**: 24-72 hours (longer than source retry window)

### Event Routing — Type-Based Handlers
- **Handler registry pattern**: map event types to handler functions
\`\`\`
HANDLERS = {
  "payment.succeeded": handlePaymentSucceeded,
  "payment.failed": handlePaymentFailed,
  "subscription.created": handleSubscriptionCreated,
  // ...
}

function routeEvent(event):
  handler = HANDLERS.get(event.type)
  if handler: handler(event)
  else: logUnhandledEventType(event)
\`\`\`
- **Unknown event types**: log + skip (never throw an unhandled error for unknown events)
- **Future-proofing**: how to add new handlers without deploying the router

### Retry Strategy
- **Max retries**: 3-5 for transient errors, 0 for business logic errors (no point retrying)
- **Backoff**: exponential with jitter (1s, 2s, 4s, 8s)
- **Error classification**: transient (network timeout, 503) vs. permanent (invalid data, 422)
- **Retry metadata**: store attempt count, last error, next retry time with each job

### Dead Letter Queue
- **When events go to DLQ**: after max retries exhausted
- **DLQ storage**: separate queue or database table with full event payload
- **Alert on DLQ**: immediate alert when any event enters DLQ
- **Manual replay**: how to replay a DLQ event after fixing the root cause
- **DLQ retention**: how long to keep failed events

### Event Logging and Observability
- Log every event received: timestamp, event_type, event_id, source_ip, payload size
- Log processing outcome: success / failure / skipped (duplicate)
- Structured logging format: JSON with consistent field names
- Trace ID: propagate a trace ID from webhook receipt through all processing steps
- Dashboard metrics: events/minute, processing latency p50/p95/p99, error rate, DLQ depth

### Scaling Considerations
- **Horizontal scaling**: stateless handler processes allow running multiple instances
- **Throughput ceiling**: at what events/second does each queue technology start to strain?
- **Database connection pooling**: avoid connection exhaustion under burst load
- **Graceful degradation**: what happens if the database is unavailable? (queue, don't drop)

## Output Format
1. Pseudocode for handler pattern (receive → verify → enqueue → process → acknowledge)
2. Infrastructure recommendations (specific tools for each component based on scale)
3. Monitoring setup (what to alert on, thresholds, on-call runbook stub)
4. Security checklist (10 items before going live)`,
    category: 'automation',
    tags: ['webhooks', 'backend', 'event-driven', 'architecture', 'api'],
    difficulty: 'advanced',
    useCase: 'Use when building a webhook receiver for any third-party service — Stripe, GitHub, Shopify, or custom webhooks.',
    authorUsername: 'promptarchitect',
    likes: 267,
    saves: 178,
    copies: 690,
    views: 4300,
    trendScore: 267*2 + 178*3 + 690 + 4300*0.2,
    trendingScore: 267*2 + 178*3 + 690 + 4300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Architecture',
    whyTrending: 'Webhooks processed naively lose events, process duplicates, and go down under load. This prompt designs a production-grade system from the start.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 690,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-15',
  },
  {
    id: 'lib-aut-011',
    title: 'E-commerce Order Automation Playbook',
    slug: 'ecommerce-order-automation-playbook',
    description: 'Designs a complete e-commerce order and fulfillment automation system from order confirmation to review request, with exception handling and ROI calculation.',
    content: `You are an e-commerce operations engineer who has automated order and fulfillment workflows for DTC brands. Design a complete order and fulfillment automation system.

## Inputs
- E-commerce platform: [ECOMMERCE_PLATFORM] (Shopify / WooCommerce / BigCommerce / custom)
- Current manual steps: [CURRENT_MANUAL_STEPS]
- Integrations available: [INTEGRATIONS_AVAILABLE] (e.g., "Klaviyo for email, ShipBob for fulfillment, Gorgias for support")

## Order Automation System

### 1. Order Confirmation Automation
**Trigger**: Order created event
- Email confirmation: fires within 2 minutes (not 30 minutes — customers notice delays)
  - Subject line: "Your order #[ORDER_NUMBER] is confirmed"
  - Content: order summary, expected ship date, support contact
  - Inventory check trigger: if item out of stock, flag for manual review immediately
- Inventory deduction: real-time inventory decrement
- Fraud detection trigger: pass to fraud check (see section 3)
- Internal notification: Slack message to ops channel for orders over $[THRESHOLD]

### 2. Fraud Detection Triggers
**Automation rules** (flag for manual review if any):
- Order amount > 2× average order value for this product
- Shipping to a freight forwarder or known fraud address
- Multiple orders with same IP but different payment methods in 24 hours
- First-time customer + high value order + expedited shipping
**Action on flag**: hold order, notify ops team, auto-email customer with verification step

### 3. Fulfillment Routing
**Trigger**: Order passes fraud check and inventory confirmed
- Routing rules (warehouse/3PL selection):
  - Rule 1: if customer in [REGION] → route to [WAREHOUSE_A]
  - Rule 2: if order contains [SKU_TYPE] → route to [WAREHOUSE_B]
  - Rule 3: default → route to primary fulfillment center
- Push to fulfillment API: order details, shipping method, items, packaging instructions

### 4. Shipping Label and Tracking
**Trigger**: Fulfillment center confirms order picked and packed
- Shipping label generation: carrier selection automation (cheapest qualifying carrier for delivery window)
- Tracking number write-back: update order record in [ECOMMERCE_PLATFORM]
- Customer notification: "Your order has shipped" email with tracking link (send within 15 minutes of label creation)

### 5. Tracking Email Sequence
Three-email automated sequence using carrier tracking API:
- **Shipped** (immediate): tracking number, carrier, estimated delivery
- **Out for Delivery** (day of delivery): confirmation + delivery instructions link
- **Delivered** (2 hours after delivery scan): delivery confirmation + how to contact support + product care tips

### 6. Return Initiation Flow
**Trigger**: Customer clicks "Start a Return" or contacts support
- Self-serve portal automation: validate order eligibility (within return window, not final sale)
- Return reason capture: dropdown with 6 options (used for product QA)
- Return label generation: automatic for exchanges, manual approval for refunds over $[THRESHOLD]
- Refund trigger: when carrier scans return as received → initiate refund within 24 hours

### 7. Inventory Reorder Points
**Trigger**: real-time inventory monitoring
- Reorder threshold by SKU: when quantity on hand falls below [X] units (based on average daily sales × lead time)
- Automated PO draft: generate purchase order draft in [INVENTORY_SYSTEM]
- Notification: email purchasing team with reorder recommendation and current velocity data

### 8. Review Request Timing
**Trigger**: order delivered (confirmed by tracking scan)
- Delay: 5 days after delivery (time to use the product)
- Platform: Klaviyo / Postscript / direct email
- Message: "How was your [PRODUCT_NAME]?" + one-click review link
- Suppression: skip if customer has contacted support about this order (don't ask unhappy customers for a review)

## Exception Handling
For each automation, define the manual intervention scenario:
| Automation | Exception | Manual Action Required | Who Gets Notified |
|---|---|---|---|
(Cover all 8 sections above)

### App Recommendations
- For [ECOMMERCE_PLATFORM]: specific apps for fulfillment, review requests, return portals
- Integration method: native app / Zapier / custom API

### Automation ROI Calculation
For each automated step:
- Time saved per order (minutes)
- Orders per month
- Total hours saved per month
- At $[HOURLY_RATE], monthly savings = $X
- Total annual savings estimate`,
    category: 'automation',
    tags: ['ecommerce', 'shopify', 'fulfillment', 'order-management', 'operations'],
    difficulty: 'intermediate',
    useCase: 'Use when scaling an e-commerce operation past the point where manual order processing is sustainable.',
    authorUsername: 'builderai',
    likes: 156,
    saves: 104,
    copies: 430,
    views: 2700,
    trendScore: 156*2 + 104*3 + 430 + 2700*0.2,
    trendingScore: 156*2 + 104*3 + 430 + 2700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Playbook',
    whyTrending: 'E-commerce operators hitting 100+ orders/day can no longer process manually. This prompt maps every automation needed to scale to 10× without adding headcount.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 430,
    estimatedTokens: 980,
    model: 'gpt-4o',
    createdAt: '2024-12-18',
  },
  {
    id: 'lib-aut-012',
    title: 'Omnichannel Content Publishing Automation',
    slug: 'omnichannel-content-publishing-automation',
    description: 'Designs a content operations automation system from CMS to multi-channel publishing with platform-specific formatting, scheduling optimization, and performance aggregation.',
    content: `You are a content operations engineer who automates multi-channel publishing workflows. Design an automation system that publishes from a single source of truth to every channel.

## Inputs
- Master CMS: [MASTER_CMS] (e.g., Notion, Contentful, WordPress, Ghost, Airtable)
- Channels: [CHANNELS] (e.g., "blog, LinkedIn, Twitter, newsletter, YouTube, Instagram")
- Content types: [CONTENT_TYPES] (e.g., "articles, short-form posts, videos, product updates")

## Publishing Automation Architecture

### Content Creation to Review Pipeline
Define the workflow from draft to approved:
- **Creation**: author writes in [MASTER_CMS]
- **Status field**: Draft → In Review → Approved → Scheduled → Published → Archived
- **Review trigger**: status change to "In Review" → notify editor via Slack with direct link
- **Approval action**: status change to "Approved" → content enters publishing queue
- **Scheduling**: editor sets publish date/time in CMS → automation handles distribution

### Platform-Specific Transformation Rules
For each channel, define the transformation from master content to platform-native format:

**Blog/Website**:
- CMS to website: API push or static site rebuild trigger
- SEO metadata: auto-populate from CMS fields
- Featured image: required dimensions and format

**LinkedIn**:
- Character limit: 3000 for articles, 3000 for posts, first 210 chars shown before "see more"
- Images: 1200×627px (landscape) recommended
- Formatting: strip markdown, use line breaks (no headers), limited emoji
- Auto-tag: [COMPANY_PAGE] in all posts
- Best posting time: Tuesday-Thursday, 9-11am local timezone

**Twitter/X**:
- Character limit: 280 per tweet
- Thread strategy: long articles become threads (1 insight per tweet)
- Image: 1200×675px, max 4 images per tweet
- Hashtags: max 2, most relevant only
- Thread numbering: (1/N) format

**Newsletter** (if Mailchimp/Beehiiv/ConvertKit):
- Subject line: pulled from CMS field or auto-generated
- Preview text: first 100 characters of body or CMS field
- CTA: always link back to full article on website

**YouTube** (for video content):
- Title: CMS title + optimization for search
- Description template: hook paragraph + timestamps + links + hashtags
- Tags: auto-generated from content tags in CMS
- Thumbnail: flag for manual creation (cannot fully automate)

**Instagram**:
- Caption: condensed version of core insight + 3-5 hashtags
- Image/carousel: flag for design team if graphics needed
- Stories version: if carousel, auto-create Stories scheduling task

### Scheduling Optimization
For each channel, define the optimal publish cadence and timing:
| Channel | Frequency | Best Days | Best Times | Scheduling Tool |
|---|---|---|---|---|

**Queue management**:
- If multiple pieces approved in one day, how to space distribution
- Minimum gap between posts on same channel

### Performance Data Collection and Aggregation
After each piece publishes:
- Collect per-channel metrics at 24h, 7d, 30d
- Aggregate into a single "content performance" record in [MASTER_CMS]
- Metrics per channel: impressions, clicks, engagement rate, shares, follower growth
- Weekly performance report: top 5 pieces by channel, overall trend

### Re-promotion of Evergreen Content
- **Evergreen tag**: CMS field to mark content as evergreen
- **Re-promotion schedule**: 3 months after first publish + 6 months + 12 months
- **Re-promotion format**: tweet thread summary, LinkedIn reshare with new angle, newsletter mention

### Failed Publication Alerts
- If any channel publication fails: immediate Slack alert with channel, content title, error message
- Retry logic: automatic retry after 15 minutes (max 3 retries)
- Manual fallback: direct link to content for manual posting

## Output Format
1. Automation architecture diagram (ASCII: CMS → transform → schedule → publish → collect metrics)
2. Tool stack recommendation (CMS → automation platform → scheduling → analytics)
3. Implementation order (4-phase rollout, starting with highest-volume channel)
4. Platform transformation rules table (all channels × all content types)`,
    category: 'automation',
    tags: ['content-operations', 'publishing', 'social-media', 'cms', 'workflow'],
    difficulty: 'intermediate',
    useCase: 'Use when a content team is manually copy-pasting to every platform and needs a system to scale distribution without scaling headcount.',
    authorUsername: 'builderai',
    likes: 123,
    saves: 82,
    copies: 330,
    views: 2100,
    trendScore: 123*2 + 82*3 + 330 + 2100*0.2,
    trendingScore: 123*2 + 82*3 + 330 + 2100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Architecture',
    whyTrending: 'Multi-channel publishing without automation eats entire content teams. This prompt maps every transformation and scheduling rule needed to go omnichannel.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 330,
    estimatedTokens: 960,
    model: 'claude-3-5-sonnet',
    createdAt: '2025-01-04',
  },
  {
    id: 'lib-aut-013',
    title: 'Support Ticket Auto-Routing System',
    slug: 'support-ticket-auto-routing-system',
    description: 'Designs an intelligent ticket routing and classification system with NLP-based classification rules, urgency detection, SLA assignment, and escalation triggers.',
    content: `You are a customer support operations engineer who builds intelligent routing systems that reduce first response time and improve CSAT. Design a complete ticket routing system.

## Inputs
- Company type: [COMPANY_TYPE]
- Ticket types: [TICKET_TYPES] (list the categories of support requests you receive)
- Team structure: [TEAM_STRUCTURE] (e.g., "Tier 1 general agents, Tier 2 technical specialists, Billing team, Account managers")
- Tools: [TOOLS] (Zendesk / Intercom / Freshdesk / Help Scout)

## Routing System Design

### Classification Rules

**Keyword-Based Classification**:
| Keyword/Phrase | Detected In | Classify As | Confidence |
|---|---|---|---|
(Cover all [TICKET_TYPES])

**NLP-Based Intent Detection** (for platforms supporting it):
- Intent: billing inquiry → route to Billing team
- Intent: technical bug → route to Tier 2
- Intent: account access → route to Tier 1 (self-serve path first)
- Intent: feature request → route to product feedback queue (not support)
- Intent: cancellation → route to retention-trained agent immediately

**Urgency Detection**:
High-urgency keywords: "down", "broken", "can't access", "data loss", "urgent", "critical", "outage"
- Action: immediate Tier 2 escalation regardless of other routing rules
- SLA: 15-minute first response

Negative sentiment detection:
- Phrases: "worst", "frustrated", "unacceptable", "lawsuit", "refund", "cancel"
- Action: route to senior agent, flag for manager visibility

**VIP Detection**:
- Customer tier field = Enterprise or above
- ARR above threshold
- Action: skip queue, assign to dedicated CSM or senior agent

### Routing Logic
For each classification:
- Primary route: which team or queue
- Load balancing rule: round-robin / least busy / skills-based
- Business hours routing: what happens to after-hours tickets? (queue / offshore team / auto-response with SLA)
- Language routing: if detected language ≠ English → route to language-appropriate agent

### Auto-Response Rules
For common ticket types, send an immediate acknowledgment:
- **Acknowledgment template**: fires within 2 minutes
  - Subject: "We received your request: [TICKET_SUBJECT]"
  - Body: acknowledge the issue + set response time expectation + self-serve article suggestion (if applicable)
- **Self-serve first**: if knowledge base article exists for this issue type, include it in the auto-response and ask if it resolves their issue before routing to an agent

### Escalation Triggers
Automatic escalation conditions:
| Trigger | Condition | Escalation Action | Who Notified |
|---|---|---|---|
| SLA breach | No response within SLA window | Escalate to supervisor | Supervisor + team lead |
| Sentiment spike | 3+ negative words detected | Flag for manager | Queue manager |
| Wait time | Customer waiting > 2× SLA | Prioritize in queue | Agent + supervisor |
| Tier 1 unsolved | Tier 1 agent marks "needs escalation" | Move to Tier 2 queue | Tier 2 on-call |
| Reopened ticket | Customer replies "not resolved" | Reassign to original agent | Original agent + supervisor |

### SLA Assignment Automation
| Customer Tier | Ticket Priority | First Response SLA | Resolution SLA |
|---|---|---|---|
| Enterprise | Urgent | 15 min | 4 hours |
| Enterprise | Normal | 1 hour | 24 hours |
| Pro | Urgent | 1 hour | 8 hours |
| Pro | Normal | 4 hours | 2 business days |
| Free | Any | 24 hours | 5 business days |

### CSAT Survey Trigger
- Trigger: ticket status changes to "Solved"
- Delay: 24 hours after solved (gives customer time to verify)
- Suppression: skip if ticket was escalated or had a complaint (send manual check-in instead)
- Survey format: 1-click (thumbs up/down) + optional comment

### Knowledge Base Suggestion Automation
- On ticket creation: search knowledge base for articles matching ticket keywords
- If match found (confidence > 70%): attach article in agent's sidebar AND include in auto-response
- If agent uses article to solve ticket: track article effectiveness
- If article did not help: flag for knowledge base team to update

## Output Format
1. Routing decision tree (ASCII flowchart from ticket creation to agent assignment)
2. Tag taxonomy (complete list of tags with auto-assignment rules)
3. Automation rule templates (copy-paste ready for [TOOLS])
4. SLA compliance dashboard spec (what metrics to track and alert on)`,
    category: 'automation',
    tags: ['support', 'ticketing', 'routing', 'customer-service', 'zendesk'],
    difficulty: 'intermediate',
    useCase: 'Use when scaling a support team and manual ticket routing is creating inconsistent response times and agent overload.',
    authorUsername: 'builderai',
    likes: 112,
    saves: 75,
    copies: 295,
    views: 1800,
    trendScore: 112*2 + 75*3 + 295 + 1800*0.2,
    trendingScore: 112*2 + 75*3 + 295 + 1800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'System',
    whyTrending: 'Support ticket routing is the single biggest lever for reducing first response time. This prompt designs a system that handles classification, escalation, and SLAs automatically.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 295,
    estimatedTokens: 950,
    model: 'gpt-4o',
    createdAt: '2024-12-22',
  },
  {
    id: 'lib-aut-014',
    title: 'Sales Pipeline Automation Workflow',
    slug: 'sales-pipeline-automation-workflow',
    description: 'Designs a complete sales pipeline automation workflow stage by stage covering entry triggers, task creation, time-based nudges, and closed-won celebration workflow.',
    content: `You are a sales operations engineer who builds CRM automation workflows that keep deals moving and reduce manual data entry for reps. Design a complete pipeline automation system.

## Inputs
- CRM: [CRM] (Salesforce / HubSpot / Pipedrive / Close / etc.)
- Pipeline stages: [PIPELINE_STAGES] (list all stages from lead to closed)
- Current manual steps in sales process: [CURRENT_MANUAL_STEPS_IN_SALES_PROCESS]

## Pipeline Automation Design

### Lead Assignment Automation
**Trigger**: New lead created (form, inbound, import)
- Assignment rules: round-robin / territory-based / account-based / by lead source
- Assignment logic pseudocode: describe the if/else routing
- Notification: Slack DM to assigned rep with lead details and "1-click qualify" button
- SLA: rep must respond within [X] hours — create task with due date

For each pipeline stage, define:

**Stage: [Stage Name]**

**Entry Trigger**:
- What moves a deal into this stage? (manual rep action / automated trigger / customer action)
- Required fields to complete before entering: (data quality gate)

**Automated Tasks Created**:
- Task 1: description, due date (X days from stage entry), assigned to (rep / manager / SDR)
- Task 2: (if applicable)
- Template email: does an email sequence start? (name the sequence)

**Automated Field Updates**:
- Which CRM fields update automatically on stage entry?
- Calculated fields that update (e.g., "Days in Stage" counter starts)

**Slack Notification**:
- Who is notified and in which channel?
- Message template: what information is included?

**Time-Based Nudges** (if deal is stuck):
- After [X] days in stage with no activity → alert rep via Slack + create "deal at risk" task
- After [X+5] days → alert rep manager
- After [X+10] days → automatically move to "Stalled" stage

**Exit Conditions**:
- Positive exit: what action or field change moves the deal forward?
- Lost/disqualified exit: what triggers a deal to be marked lost? What is the required lost reason?

**Stage coverage** (design for ALL provided stages plus):
- Lead Assignment
- Meeting Booking Integration
- Proposal Generation Trigger
- Contract Automation
- Closed-Won Celebration Workflow
- Lost Deal Re-engagement Timing

### Meeting Booking Integration
**Trigger**: Rep sends calendar link OR customer books meeting
- CRM update: automatically update "Next Activity" field and date
- Sequence pause: pause any active nurture sequences during active sales conversation
- Meeting prep task: create task for rep 2 hours before meeting: "Review [COMPANY] notes"

### Proposal Generation Trigger
**Trigger**: Deal moves to "Proposal" stage
- Document generation: auto-populate proposal template with deal/company fields from CRM
- Approval routing: if deal value > $[THRESHOLD] → require manager approval before sending
- Send notification: when proposal is sent, log activity and start "Proposal Follow-up" sequence

### Contract Automation
**Trigger**: Verbal agreement or "Contract Sent" stage
- Contract generation: populate from CRM data (company, price, terms)
- Signature routing: send to correct signatories based on deal size
- Signed contract trigger: when e-signature completed → move to Closed-Won automatically

### Closed-Won Celebration Workflow
**Trigger**: Deal marked Closed-Won
- Slack announcement: post to #wins channel with deal name, value, industry, and rep name
- Commission calculation task: create task for finance
- Handoff trigger: create onboarding task in project management tool, assign to CSM
- Customer welcome sequence: enroll in welcome email sequence
- Rep personal notification: DM with congratulations + current quota attainment

### Lost Deal Re-engagement Timing
**Trigger**: Deal marked Closed-Lost
- Tag: apply loss reason tag
- Suppression period: no outreach for [X] months (based on loss reason — "not now" vs. "chose competitor")
- Re-engagement enrollment: enroll in long-term nurture sequence (monthly, low-frequency)
- Re-engagement timing rules by loss reason:
  - "No budget": 6-month delay → budget cycle re-engagement
  - "Chose competitor": 12-month delay → competitive win-back message
  - "Not a fit": archive, do not re-engage

## Output Format
1. Stage-by-stage automation spec table (Stage | Entry Trigger | Auto Tasks | Notifications | Nudge Timing | Exit Conditions)
2. CRM workflow configuration guide (step-by-step setup for [CRM])
3. Automation priority matrix (which workflows to build first based on revenue impact)`,
    category: 'automation',
    tags: ['sales', 'crm', 'pipeline', 'sales-ops', 'workflow'],
    difficulty: 'intermediate',
    useCase: 'Use when building out a CRM automation layer to reduce rep admin time and ensure no deal slips through without timely follow-up.',
    authorUsername: 'builderai',
    likes: 189,
    saves: 126,
    copies: 510,
    views: 3200,
    trendScore: 189*2 + 126*3 + 510 + 3200*0.2,
    trendingScore: 189*2 + 126*3 + 510 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Workflow',
    whyTrending: 'Every manual step in a sales process is a place where deals die. This prompt automates the nudges, tasks, and handoffs that keep pipeline moving.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 510,
    estimatedTokens: 980,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-30',
  },
  {
    id: 'lib-aut-015',
    title: 'Data Sync and Deduplication Engine',
    slug: 'data-sync-and-deduplication-engine',
    description: 'Designs a data synchronization and deduplication system with fuzzy matching rules, conflict resolution strategy, sync monitoring, and rollback capability.',
    content: `You are a data engineering specialist who builds reliable data synchronization systems between business applications. Design a complete data sync and deduplication engine.

## Inputs
- System A: [SYSTEM_A]
- System B: [SYSTEM_B]
- Data entities to sync: [DATA_ENTITIES_TO_SYNC] (e.g., "contacts, companies, deals")
- Sync direction: [SYNC_DIRECTION] (bidirectional / A → B only / B → A only)
- Volume: [VOLUME] (e.g., "50,000 contacts, 200 new per day")

## Sync and Deduplication Design

### Sync Architecture Decision
**Real-time vs. Batch**:
- Real-time (event-driven): use webhooks or change data capture (CDC) for time-sensitive data
- Batch (scheduled): use for non-time-sensitive data with high volume
- Recommendation for this use case: choose based on [SYNC_DIRECTION] and [VOLUME]

**Event-Driven Architecture**:
- System A sends webhook on record create/update/delete
- Event queue buffers and processes events
- System B API updated asynchronously

**Polling Architecture**:
- Sync job runs on schedule (cron)
- Fetches records modified since last sync (requires updated_at timestamp)
- Processes changes in batches

### Entity Matching Logic (Deduplication)
Before creating a new record in the destination, check if it already exists:

**Blocking** (narrow the comparison set for performance):
- Group records that could plausibly be duplicates by: email domain, first 3 characters of last name, company name first word
- Only compare records within the same block

**Matching Rules** (scored matching — not binary):
| Field | Match Type | Score if Match | Notes |
|---|---|---|---|
| Email | Exact | 100 | Normalize: lowercase, trim |
| Email | Domain match only | 20 | Same company, different person |
| Full name | Exact | 80 | After normalization |
| Full name | Fuzzy (Levenshtein ≤ 2) | 60 | Catches typos |
| Phone | Exact (normalized) | 80 | Strip +1, spaces, dashes |
| Company name | Fuzzy (Levenshtein ≤ 3) | 50 | Also check common abbreviations |
| LinkedIn URL | Exact | 100 | If both records have it |

**Match decision thresholds**:
- Score ≥ 80: automatic merge
- Score 50-79: flag for human review
- Score < 50: create as new record

**Fuzzy Matching Implementation**:
- Algorithm: Levenshtein distance for short strings, Jaro-Winkler for names
- Phonetic matching: Soundex or Metaphone for name variation (e.g., "Catherine" vs. "Katherine")
- Normalization steps before comparison: lowercase, remove punctuation, expand abbreviations (St. → Street, Corp. → Corporation)

### Conflict Resolution
When the same field has different values in System A and System B:

**Conflict resolution rules by field type**:
| Field Type | Resolution Strategy | Rationale |
|---|---|---|
| Last modified timestamp | More recent wins | Assumes most recent edit is correct |
| Email | System A wins | System A is the source of truth for email |
| Name | Manual review if different | Names change infrequently — discrepancy is suspicious |
| Phone | Keep both, deduplicate | People have multiple phones |
| Custom fields | Configurable per field | Depends on which system owns the data |

**Human review queue**:
- Criteria for routing to human review: score 50-79, name conflict, multiple potential matches
- Review interface: side-by-side comparison with "Merge" / "Keep Both" / "Discard" options
- SLA for review: 48 hours before record is held from syncing

**Merge strategy** (when two records are confirmed duplicates):
- Golden record: the surviving record that gets all merged data
- Field-level merge: apply conflict resolution rules per field
- Activity/history merge: preserve all activity from both records
- Reference update: update all foreign keys pointing to the merged record

### Sync Monitoring and Drift Detection
- **Sync log**: every sync run records: timestamp, entity type, records processed, created, updated, deleted, errors, duration
- **Drift detection**: daily count comparison between System A and System B
  - Alert if count difference > [X%] between systems
  - Alert if a batch sync processed 0 records unexpectedly
- **Error rate monitoring**: alert if sync error rate > 2% of records
- **Last sync heartbeat**: alert if no successful sync in [2× expected interval]

### Rollback Strategy
If a sync causes unintended data changes:
- **Snapshot before sync**: create a point-in-time snapshot of affected records
- **Rollback trigger**: manual trigger or automatic on error rate > [threshold]
- **Rollback scope**: specific sync run, specific entity type, specific time window
- **Rollback process**: restore from snapshot + flag records as "rollback-restored" for review

## Output Format
1. Architecture diagram (ASCII: System A ↔ event queue ↔ matching engine ↔ System B)
2. Matching rules table (complete, with thresholds)
3. Conflict resolution rules table (field × strategy × rationale)
4. Implementation checklist (sequential build order with estimated complexity per step)`,
    category: 'automation',
    tags: ['data-sync', 'deduplication', 'integration', 'data-engineering', 'crm'],
    difficulty: 'advanced',
    useCase: 'Use when syncing contacts or records between CRM, marketing automation, and data warehouse to prevent duplicates and ensure data consistency.',
    authorUsername: 'promptarchitect',
    likes: 178,
    saves: 118,
    copies: 470,
    views: 3000,
    trendScore: 178*2 + 118*3 + 470 + 3000*0.2,
    trendingScore: 178*2 + 118*3 + 470 + 3000*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Architecture',
    whyTrending: 'Data sync without deduplication creates CRM chaos. This prompt designs the matching logic, conflict resolution, and monitoring needed to keep two systems clean.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 470,
    estimatedTokens: 1000,
    model: 'gpt-4o',
    createdAt: '2025-01-08',
  },
]
