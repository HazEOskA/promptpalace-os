import type { Prompt } from './prompts'

export const SOLANA_PROMPTS: Prompt[] = [
  {
    id: 'lib-sol-001',
    title: 'Tokenomics Design Framework for SPL Tokens',
    slug: 'tokenomics-design-framework-spl-tokens',
    description: 'Designs a complete tokenomics model for an SPL token including allocation, vesting, emission, and value accrual mechanisms.',
    content: `You are a tokenomics architect. Design a complete tokenomics model for [TOKEN_NAME] on Solana.

## Inputs
- Project type: [PROJECT_TYPE] (DeFi / GameFi / DAO / NFT)
- Total supply: [TOTAL_SUPPLY]
- Launch strategy: [LAUNCH_STRATEGY]

## Deliverables

### 1. Allocation Breakdown
Provide a detailed allocation table with percentages and rationale for:
- Team (with cliff + linear vesting schedule)
- Investors / early backers (by round, with lock-up periods)
- Community / public sale
- Treasury (multi-sig structure and spending governance)
- Ecosystem / grants / partnerships

Include a full vesting schedule table: allocation label | % | cliff (months) | vesting duration | monthly unlock.

### 2. Emission Schedule
- Year-by-year circulating supply projections (Years 1–5)
- Inflation rate per year and terminal inflation model
- Unlock event calendar (major unlock dates and sizes)

### 3. Token Utility Design
Answer convincingly: why would a rational actor hold this token vs immediately sell?
- Access / gating utilities
- Fee reduction or rebate mechanics
- Staking yield source and sustainability
- Governance rights (veto power, proposal thresholds)

### 4. Inflation / Deflation Mechanisms
- Buy-and-burn triggers (revenue %, frequency)
- Fee routing (% to treasury, % burned, % stakers)
- Supply cap enforcement on-chain

### 5. Liquidity Strategy
- Initial liquidity bootstrapping (DEX, CLMM range selection, % of raise)
- Ongoing market-making budget and strategy
- CEX listing timeline and liquidity requirements

### 6. Value Accrual Mechanisms
Map protocol revenue → token value flow. Be specific about whether this constitutes a security under Howey.

### 7. Economic Simulation Assumptions
List key assumptions: price at TGE, DAU growth curve, revenue per user, staking participation rate.

## Output Format
- Tokenomics summary table
- Vesting schedule Gantt (text-based)
- Economic simulation assumptions table
- Red flags checklist (common tokenomics mistakes to audit against)`,
    category: 'solana',
    tags: ['tokenomics', 'spl-token', 'defi', 'dao', 'web3'],
    difficulty: 'advanced',
    useCase: 'Use when designing or auditing the economic model for a new SPL token launch.',
    authorUsername: 'promptarchitect',
    likes: 387,
    saves: 241,
    copies: 895,
    views: 5200,
    trendScore: 387*2 + 241*3 + 895 + 5200*0.2,
    trendingScore: 387*2 + 241*3 + 895 + 5200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Every new Solana project needs a defensible tokenomics model. This framework covers all dimensions VCs and communities scrutinize.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 895,
    estimatedTokens: 950,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-14',
  },
  {
    id: 'lib-sol-002',
    title: 'Solana Smart Contract Security Audit Protocol',
    slug: 'solana-smart-contract-security-audit-protocol',
    description: 'Conducts a systematic security review of an Anchor program with severity-rated findings, attack scenarios, and fix recommendations.',
    content: `You are a Solana security researcher with expertise in Anchor programs and on-chain exploit patterns. Conduct a thorough security review of the following program.

## Input
Anchor program code: [ANCHOR_PROGRAM_CODE]

## Audit Checklist — Check Each Category Systematically

### 1. Account Validation
- Signer checks: every instruction that mutates state must verify the correct signer
- Owner checks: accounts must be owned by the expected program
- PDA derivation: verify seeds and bump are canonical and cannot be spoofed
- Discriminator checks: Anchor account discriminators enforced on deserialization

### 2. Arithmetic Safety
- Integer overflow / underflow: all arithmetic uses checked_add, checked_sub, checked_mul
- Division by zero guards
- Precision loss in fixed-point math
- Casting between u64 / i64 / u128

### 3. Reentrancy Vectors
- State updates before external CPI calls
- CPI targets that are not program-owned (arbitrary CPI)
- Reentrancy via invoke_signed with mutable accounts

### 4. Privilege Escalation via CPI
- Programs invoked via CPI inheriting signer seeds incorrectly
- Upgradeable program authority not locked
- Delegated signing abuse

### 5. Bump Seed Canonicalization
- All PDAs use find_program_address (canonical bump) not create_program_address
- Bump stored and reused correctly

### 6. Lamport and Rent Manipulation
- Lamport drain attacks (zeroing lamports without closing the account)
- Rent-exempt minimum not enforced on new accounts
- Account closing leaves data (data not zeroed before close)

### 7. Type Confusion
- Account type mismatch exploits
- Shared account struct reuse across different instructions
- Missing constraint: #[account(has_one = authority)]

### 8. Missing Account Closing
- Accounts that should be closed after use but are not
- Close constraint missing in instruction handler

## Output Format Per Finding
- Finding ID
- Severity: CRITICAL / HIGH / MEDIUM / LOW / INFO
- Category (from checklist above)
- Code location (file:line)
- Attack scenario (step-by-step exploit narrative)
- Recommended fix with code snippet
- References (similar past exploits if applicable)

## Summary Output
- Executive summary (2–3 sentences)
- Findings table: ID | Severity | Category | Status
- Security score /100 with scoring methodology
- Recommended re-audit scope after fixes`,
    category: 'solana',
    tags: ['security', 'audit', 'anchor', 'smart-contract', 'solana'],
    difficulty: 'advanced',
    useCase: 'Use before mainnet deployment to identify critical vulnerabilities in Anchor programs.',
    authorUsername: 'promptarchitect',
    likes: 312,
    saves: 198,
    copies: 742,
    views: 4100,
    trendScore: 312*2 + 198*3 + 742 + 4100*0.2,
    trendingScore: 312*2 + 198*3 + 742 + 4100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Report',
    whyTrending: 'Solana exploits cost millions annually. Builders use this as a pre-audit checklist before engaging expensive formal security firms.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 742,
    estimatedTokens: 1050,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-22',
  },
  {
    id: 'lib-sol-003',
    title: 'DAO Governance Structure Architect',
    slug: 'dao-governance-structure-architect',
    description: 'Designs a complete DAO governance framework including proposal lifecycle, voting mechanisms, treasury rules, and attack mitigations.',
    content: `You are a DAO governance specialist who has designed governance systems for protocols with $100M+ in TVL. Design a governance framework for [DAO_NAME].

## Inputs
- DAO purpose: [DAO_PURPOSE]
- Governance token: [TOKEN_NAME]
- Community size (current): [COMMUNITY_SIZE]

## Framework Components

### 1. Proposal Lifecycle
Define each stage with time durations and actor responsibilities:
- Submission (eligibility threshold, deposit requirement to prevent spam)
- Discussion period (forum structure, mandatory review period)
- Voting period (duration, snapshot block selection)
- Execution (time lock duration, executor role)
- Emergency cancellation (multisig override conditions)

### 2. Voting Mechanism
Compare and recommend for this DAO's context:
- Token-weighted voting (default — pros/cons for this use case)
- Quadratic voting (sybil resistance requirements)
- Conviction voting (for treasury spending)
- Delegated voting (liquid democracy design)

### 3. Quorum and Approval Thresholds by Decision Type
| Decision Type | Quorum | Approval | Time Lock |
|---|---|---|---|
| Parameter changes | | | |
| Treasury spend < $50K | | | |
| Treasury spend > $50K | | | |
| Smart contract upgrade | | | |
| Token mint / burn | | | |
| Emergency action | | | |

### 4. Veto Mechanisms
- Security council veto (composition, tenure, threshold)
- Guardian multisig for critical contracts
- Community veto petition process

### 5. Treasury Management Rules
- Spending limits by governance tier
- Asset diversification policy
- Contributor compensation framework
- Grant program structure

### 6. Delegate System Design
- Delegate registration and discovery
- Delegation UX (wallet-level, partial delegation)
- Delegate accountability metrics
- Revocation mechanics

### 7. Governance Attack Mitigations
- Flash loan protection (snapshot-based vs time-weighted balance)
- Quorum manipulation resistance
- Time lock bypass prevention
- Proposal spam prevention

### 8. Tooling Stack Recommendation
Evaluate for this DAO's context: Realms (Solana native), Squads (multisig), custom on-chain governance, snapshot (off-chain signaling).

## Output
- Governance constitution template (ready to adapt)
- Parameter recommendations table with justifications
- Risk analysis: top 5 governance risks and mitigations
- 6-month governance bootstrapping roadmap`,
    category: 'solana',
    tags: ['dao', 'governance', 'voting', 'treasury', 'web3'],
    difficulty: 'advanced',
    useCase: 'Use when bootstrapping or redesigning governance for a Solana-based DAO.',
    authorUsername: 'osa',
    likes: 198,
    saves: 134,
    copies: 521,
    views: 3200,
    trendScore: 198*2 + 134*3 + 521 + 3200*0.2,
    trendingScore: 198*2 + 134*3 + 521 + 3200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'DAO governance failures are a top cause of protocol collapse. Founders use this to avoid costly design mistakes early.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 521,
    estimatedTokens: 980,
    model: 'gpt-4o',
    createdAt: '2024-11-03',
  },
  {
    id: 'lib-sol-004',
    title: 'NFT Collection Launch Strategy Planner',
    slug: 'nft-collection-launch-strategy-planner',
    description: 'Creates a complete Solana NFT launch strategy covering pre-mint community building, mint day execution, and post-mint holder value.',
    content: `You are a Web3 launch strategist specializing in NFT collections on Solana. Create a complete launch strategy for [COLLECTION_NAME].

## Inputs
- Collection size: [COLLECTION_SIZE]
- Mint price: [MINT_PRICE]
- Theme and utility: [THEME/UTILITY]

## Strategy Components

### 1. Pre-Launch Phase (T-30 days to T-0)

**Community Building Timeline**
- Week 4 before mint: teaser campaign, founding member Discord
- Week 3: art reveal cadence, whitelist mechanics announcement
- Week 2: collab announcements, Discord growth push
- Week 1: final allowlist snapshot, mint day hype

**Allowlist Mechanics via Candy Machine**
- Allowlist vs public mint split recommendation (% allocation)
- Allowlist earning methods: OG role, collab WL, raffle, contest
- Candy Machine guard configuration: bot tax, mint limit, start date, allowlist
- Pricing strategy: allowlist discount vs flat price

**Anti-Bot Measures**
- Bot tax configuration (candy machine guard)
- Captcha integration options
- Rate limiting per wallet
- Jito bundle consideration (fair ordering vs MEV)

### 2. Mint Day Execution
- T-minus 24h checklist
- Mint page tech stack (Candy Machine UI, custom storefront)
- Real-time monitoring setup (Discord alerts, on-chain watcher)
- Gas optimization guidance for minters
- Sold-out announcement and immediate post-mint actions

### 3. Post-Mint Rollout
- Week 1 holder benefits (Discord roles, exclusive channels)
- Utility rollout calendar (staking / token / game access timeline)
- Secondary royalty strategy (Metaplex pNFT vs legacy)
- Floor price defense tactics (buyback policy, burn mechanics)
- Holder retention: weekly alpha drops, holder-only events

### 4. Marketing Calendar (30-Day Pre-Launch)
Day-by-day content calendar with:
- Post format (thread / space / graphic / video)
- Content topic
- Platform (X / Discord / Farcaster)
- Metric to track

### 5. Collab Outreach Script
- Target collab criteria (audience size, culture fit, collection quality)
- Cold DM template for collection collabs
- Mutual WL exchange agreement template

### 6. Twitter/X and Discord Growth Playbook
- Thread strategy (hook formulas that work in NFT Twitter)
- Reply game targets (big accounts to engage with)
- Discord event cadence (AMAs, games, community calls)
- Moderator structure and roles

## Output
- Week-by-week launch timeline (Gantt-style text)
- Launch day checklist (technical + marketing)
- KPIs: Discord members, Twitter followers, WL size, mint speed, secondary volume (Day 1)`,
    category: 'solana',
    tags: ['nft', 'launch', 'candy-machine', 'community', 'solana'],
    difficulty: 'intermediate',
    useCase: 'Use when planning a Solana NFT collection launch from 30 days out to post-mint.',
    authorUsername: 'osa',
    likes: 421,
    saves: 287,
    copies: 1050,
    views: 6100,
    trendScore: 421*2 + 287*3 + 1050 + 6100*0.2,
    trendingScore: 421*2 + 287*3 + 1050 + 6100*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'NFT launches succeed or fail based on launch execution. This is the most complete Solana-specific launch playbook available.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 1050,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-08',
  },
  {
    id: 'lib-sol-005',
    title: 'DeFi Protocol Risk Analysis Framework',
    slug: 'defi-protocol-risk-analysis-framework',
    description: 'Produces a multi-dimensional risk analysis of a Solana DeFi protocol with risk matrix, safety score, and user action recommendations.',
    content: `You are a DeFi analyst specializing in Solana protocol risk assessment. Conduct a risk analysis of [PROTOCOL_NAME].

## Inputs
- Protocol type: [PROTOCOL_TYPE] (AMM / Lending / Perps / Yield Aggregator)
- Current TVL: [TVL]
- Audit status: [AUDIT_STATUS] (audited by / unaudited / in progress)

## Risk Dimensions

### 1. Smart Contract Risk
- Audit findings summary (critical/high unresolved issues)
- Upgrade authority: is the program upgradeable? Who holds the authority?
- Program buffer attacks (buffer account not closed after deployment)
- Admin key management (hardware wallet? multisig? timelock?)
- Historical incident analysis (any past exploits or near-misses?)

### 2. Economic / Market Risk
- Oracle manipulation risk (price feed source, deviation threshold, TWAP usage)
- Price impact on large withdrawals (liquidity depth analysis)
- Liquidation cascade risk (what happens in a 40% market drop in 1 hour?)
- Reflexivity risk (protocol token used as collateral for protocol itself)
- Bad debt accumulation risk

### 3. Liquidity Risk (for LPs and Depositors)
- Impermanent loss exposure (range, historical volatility context)
- Concentration risk (top 5 LPs as % of TVL)
- Withdrawal limits or cool-down periods
- Exit liquidity in stress scenario

### 4. Governance Risk
- Multisig threshold and signers (known entities vs anonymous)
- Timelock duration on parameter changes
- Whale token concentration (top 10 holders % of governance supply)
- History of governance attacks on similar protocols

### 5. Systemic / Dependency Risk
- Oracle dependencies (Pyth / Switchboard / custom)
- Protocol dependencies (e.g., lending protocol using DEX prices)
- Bridge exposure (assets bridged in from other chains)
- Solana validator / network risk (outage impact)

## Risk Matrix Output Format
| Risk | Probability (H/M/L) | Impact (H/M/L) | Current Mitigations | Residual Risk |
|---|---|---|---|---|

## Summary Output
- DeFi safety score /100 (methodology: weighted average across 5 dimensions)
- Recommended maximum exposure for risk-tolerant / risk-averse user
- Top 3 recommended actions for users currently in this protocol
- Watchlist signals (on-chain metrics to monitor for early warning)`,
    category: 'solana',
    tags: ['defi', 'risk', 'security', 'tvl', 'solana'],
    difficulty: 'advanced',
    useCase: 'Use before allocating significant capital to a Solana DeFi protocol.',
    authorUsername: 'promptarchitect',
    likes: 267,
    saves: 172,
    copies: 634,
    views: 3800,
    trendScore: 267*2 + 172*3 + 634 + 3800*0.2,
    trendingScore: 267*2 + 172*3 + 634 + 3800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'DeFi users lost $2B+ in 2024 to protocol failures. This framework provides a repeatable due diligence process before depositing.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 634,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-18',
  },
  {
    id: 'lib-sol-006',
    title: 'On-Chain Alpha Signal Analysis Protocol',
    slug: 'on-chain-alpha-signal-analysis-protocol',
    description: 'Analyzes wallet or token on-chain data to extract alpha signals, copy-trade feasibility, and position monitoring strategy.',
    content: `You are a Solana on-chain intelligence analyst. Analyze [WALLET_ADDRESS] or [TOKEN_ADDRESS] for alpha signals using data from [DATA_SOURCE] (Helius / Birdeye / Dune Analytics).

## Analysis Modules

### 1. Wallet Behavior Pattern Analysis
- Entry / exit timing relative to price action (lead or lag indicator?)
- Average hold duration by token category (memecoins vs blue chips vs new launches)
- Win rate: profitable exits / total closed positions
- Average return per trade (mean, median, best, worst)
- Trade frequency and clustering (consistent daily vs burst activity)
- Wallet age and activity history (degen wallet vs OG wallet)

### 2. Token Accumulation Analysis
- Buy frequency over time (gradual accumulation vs single FOMO entry)
- Position sizing relative to token market cap (whale vs retail behavior)
- Early entry detection: did this wallet buy in the first 100 transactions?
- Distribution pattern: slow sell vs full dump on ATH
- Correlation with known smart money wallets

### 3. Whale Movement Patterns
- Wallet cluster analysis (related wallets by funding source / behavior)
- Inter-wallet transfers (is this a single entity split across wallets?)
- Large transfers to / from CEX (deposit = likely sell signal)
- Interaction with new contract deployments (early contract tester)

### 4. Protocol Interaction History
- Which DeFi protocols used (sophistication indicator)
- Cross-protocol arbitrage detection
- Airdrop farming patterns (potential sybil, adjust signal weight accordingly)
- NFT trading history (trader vs collector vs flipper)

### 5. Alpha Signal Synthesis
Combine all modules into:
- Alpha score 0–100 (weighting: timing accuracy 30%, win rate 25%, position sizing discipline 20%, early entry rate 15%, consistency 10%)
- Copy-trade feasibility rating (HIGH/MEDIUM/LOW) with blockers identified
- Recommended monitoring strategy (alert thresholds, frequency)
- Position size risk (if copying, what % of their size is appropriate given your capital)

## Output Format
\`\`\`json
{
  "wallet": "[ADDRESS]",
  "analysisDate": "[DATE]",
  "alphaScore": 0,
  "copyTradeFeasibility": "HIGH|MEDIUM|LOW",
  "topSignals": [],
  "riskFactors": [],
  "monitoringAlerts": [],
  "positionSizeRecommendation": ""
}
\`\`\`
Followed by: narrative summary (300 words), key on-chain evidence cited with transaction signatures.`,
    category: 'solana',
    tags: ['on-chain', 'alpha', 'wallet-analysis', 'trading', 'solana'],
    difficulty: 'advanced',
    useCase: 'Use to evaluate wallets for copy trading or to understand token accumulation patterns before entering a position.',
    authorUsername: 'osa',
    likes: 289,
    saves: 198,
    copies: 812,
    views: 4600,
    trendScore: 289*2 + 198*3 + 812 + 4600*0.2,
    trendingScore: 289*2 + 198*3 + 812 + 4600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Report',
    whyTrending: 'On-chain alpha is the edge serious Solana traders develop. This structured protocol turns raw wallet data into actionable signals.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 812,
    estimatedTokens: 850,
    model: 'gpt-4o',
    createdAt: '2024-12-01',
  },
  {
    id: 'lib-sol-007',
    title: 'Web3 Project Whitepaper Structure Builder',
    slug: 'web3-project-whitepaper-structure-builder',
    description: 'Generates a comprehensive whitepaper outline and writing guide for a Web3 project, including VC-ready structure and anti-hype guidelines.',
    content: `You are a technical writer specializing in blockchain whitepapers, having contributed to papers that raised $50M+ in funding. Create a comprehensive whitepaper for [PROJECT_NAME].

## Inputs
- Problem being solved: [PROBLEM_SOLVED]
- Technical approach: [TECHNICAL_APPROACH]
- Token involvement: [TOKEN_INVOLVED] (yes/no, utility type)

## Whitepaper Structure

### Section 1: Abstract (target: 200 words)
- What the protocol does (one sentence)
- The market gap it addresses
- The technical innovation
- Token role (if any)
- Call to action for the reader

### Section 2: Problem Statement
- Market gap with quantified data (cite sources or note where to source data)
- Current solutions and their specific failure modes (be fair, not dismissive)
- Why this problem is worth solving now (timing argument)
- Cost of the status quo (economic or social)

### Section 3: Technical Architecture
- System design overview (component diagram description for illustrator)
- Consensus / data layer integration (how Solana is used, not just "we use Solana")
- Smart contract architecture (program structure, key instructions, state accounts)
- Off-chain components (indexers, oracles, relayers)
- Scalability and throughput design
- Security model

### Section 4: Token Economy
- Token distribution table
- Utility mechanisms (demand drivers)
- Value accrual model
- Emission and inflation schedule

### Section 5: Roadmap
- Q-by-Q milestones for 18 months
- Each milestone: deliverable, success metric, dependency

### Section 6: Team Section Template
- Fields to include per team member
- Advisor section structure
- What anonymous teams should and shouldn't claim

### Section 7: Risk Disclosures
- Legal language template (securities disclaimer, forward-looking statements)
- Technical risk disclosures
- Market risk disclosures
- Regulatory risk disclosures

### Section 8: Appendix
- Mathematical proofs placeholder (notation guide)
- Glossary template (30 key terms)
- References section format

## Writing Style Guide
- Preferred tone: precise, humble, data-driven
- Sentences to ban: "revolutionary," "paradigm shift," "10x better"
- What makes VCs immediately dismiss whitepapers (top 10 red flags)
- Anti-hype language substitutions table
- Recommended length per section`,
    category: 'solana',
    tags: ['whitepaper', 'web3', 'fundraising', 'technical-writing', 'solana'],
    difficulty: 'intermediate',
    useCase: 'Use when drafting or reviewing a whitepaper for a Web3 project seeking investors or community trust.',
    authorUsername: 'promptarchitect',
    likes: 178,
    saves: 142,
    copies: 487,
    views: 2900,
    trendScore: 178*2 + 142*3 + 487 + 2900*0.2,
    trendingScore: 178*2 + 142*3 + 487 + 2900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Document',
    whyTrending: 'A credible whitepaper is still the primary trust signal for institutional investors in Web3. This ensures all critical sections are covered.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 487,
    estimatedTokens: 920,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-25',
  },
  {
    id: 'lib-sol-008',
    title: 'Web3 Community Growth Bootstrap Playbook',
    slug: 'web3-community-growth-bootstrap-playbook',
    description: 'Builds a 90-day community bootstrap plan with Discord structure, Twitter growth tactics, KOL outreach, and ambassador program design.',
    content: `You are a Web3 community manager and growth strategist who has bootstrapped communities of 50K+ members. Create a community bootstrap playbook for [PROJECT_NAME] targeting [TARGET_COMMUNITY].

## Inputs
- Primary platform focus: [PLATFORM_FOCUS] (Discord / Farcaster / X / all three)
- Launch timeline: [LAUNCH_TIMELINE]

## Playbook Components

### 1. Seed Community Strategy (First 100 Authentic Members)
The goal is 100 engaged members — not 10,000 bots or airdrop farmers.
- Target persona: who are the first 100? (role in ecosystem, motivation)
- Manual outreach strategy: where to find them (existing communities, Twitter lists, IRL events)
- Founder-led community building: daily touchpoints the founder should personally own
- Anti-airdrop-farmer vetting: what separates genuine early believers from mercenaries

### 2. Pre-Launch Content Calendar
Week-by-week content plan for 8 weeks pre-launch:
| Week | Content Theme | Formats | Platform | Expected Outcome |
|---|---|---|---|---|
Drive: awareness → curiosity → FOMO → trust.

### 3. Discord Structure
- Channel architecture (categories and channels list)
- Role hierarchy (Visitor → Member → Contributor → OG → Team)
- Bot stack: MEE6 / Collab.Land / Guild.xyz / Carl-bot — which to use and why
- Moderation playbook (rule violations → response protocol)
- Engagement mechanics (daily questions, weekly AMAs, game nights)

### 4. Twitter/X Growth Tactics
- Thread strategy: hook formulas proven in Web3 (curiosity gap, contrarian take, data reveal)
- Reply game targets: 10 accounts to engage with daily (list criteria)
- Engagement loop design (quote-tweets, polls, community spotlights)
- Posting frequency and timing

### 5. Farcaster Strategy (if applicable)
- Channel creation and seeding
- Cross-posting vs native content approach
- Frames strategy for on-chain engagement

### 6. KOL Identification and Outreach
- Criteria: follower count, engagement rate, audience overlap, content quality, DM responsiveness
- Outreach message template
- Compensation structure options

### 7. Community Health and Anti-Sybil Measures
- On-chain verification for Discord roles (Guild.xyz setup)
- Sybil indicators to watch (new accounts, no PFP, no history)
- Community health metrics dashboard

### 8. Ambassador Program Design
- Ambassador criteria and application process
- Responsibilities and KPIs
- Compensation (tokens / USDC / early access)
- Onboarding and offboarding process

## Output
- 90-day growth plan (month-by-month milestones)
- 5 content templates (thread hook, announcement, AMA invite, collab post, milestone celebration)
- KPI targets: Discord members / Twitter followers / engagement rate at 30/60/90 days`,
    category: 'solana',
    tags: ['community', 'growth', 'discord', 'twitter', 'web3'],
    difficulty: 'intermediate',
    useCase: 'Use when launching community growth for a new Solana project from zero to launch-ready.',
    authorUsername: 'osa',
    likes: 234,
    saves: 167,
    copies: 698,
    views: 3900,
    trendScore: 234*2 + 167*3 + 698 + 3900*0.2,
    trendingScore: 234*2 + 167*3 + 698 + 3900*0.2,
    trending: true,
    featured: false,
    agentReady: true,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Community is the moat in Web3. This playbook focuses on quality-first growth strategies that build real believers, not metric farmers.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 698,
    estimatedTokens: 1000,
    model: 'gpt-4o',
    createdAt: '2024-12-10',
  },
  {
    id: 'lib-sol-009',
    title: 'Airdrop Campaign Design and Sybil Defense',
    slug: 'airdrop-campaign-design-sybil-defense',
    description: 'Designs a fair, effective airdrop campaign with eligibility criteria, sybil detection, allocation formula, and post-airdrop retention strategy.',
    content: `You are a Web3 growth specialist who has designed airdrop campaigns distributing $50M+ in tokens. Design a fair and effective airdrop for [TOKEN_NAME].

## Inputs
- Airdrop budget: [AIRDROP_BUDGET] (as % of total supply)
- Target recipients: [TARGET_RECIPIENTS] (estimated number)
- Campaign goal: [GOAL] (user acquisition / TVL growth / governance distribution / all three)

## Campaign Design

### 1. Eligibility Criteria
Define the on-chain activity requirements that qualify a wallet:
- Minimum transaction count (with rationale)
- Protocol interaction requirements (specific program IDs to check)
- Dollar volume thresholds (if applicable)
- Time range for qualifying activity (snapshot window)
- Exclusion criteria (team wallets, known exchange wallets, flagged sybil clusters)

### 2. Snapshot Timing Strategy
- When to take snapshot (announced vs surprise — pros/cons)
- Trailing activity window (e.g., last 6 months of activity counts more)
- Multi-snapshot approach for gaming resistance

### 3. Sybil Detection Approach
Layer multiple signals:
- Wallet clustering analysis (shared funding sources, similar behavior patterns, same-block activity)
- Minimum on-chain age requirement
- Minimum activity diversity score (multiple protocols, not just the target protocol)
- Identity verification options (Civic Pass, World ID — tradeoffs)
- Community reporting mechanism

### 4. Allocation Formula Options
Compare and recommend:
- Linear: equal distribution above threshold
- Square root: diminishing returns on high activity (more equitable)
- Tiered: Bronze / Silver / Gold tiers with multipliers
- Activity-weighted: score based on volume + frequency + diversity

### 5. Claim UI/UX Design
- Eligibility checker (before public announcement to reduce gas waste)
- Claim page requirements
- Wallet connection and verification flow
- Claiming deadline and unclaimed token handling

### 6. Vesting and Anti-Dump Mechanics
- Immediate vs cliff + linear vesting (what % each)
- Lock-up incentives (bonus for staking immediately)
- Claim-and-stake flow design

### 7. Post-Airdrop Retention
- Immediate engagement hooks (what do recipients do after claiming?)
- 30-day post-claim user journey
- Cohort analysis plan (do airdrop recipients become real users?)

## Output
- Airdrop specification document (ready for engineering handoff)
- Eligibility query logic (pseudocode / SQL-style)
- Distribution table template with tier examples
- Anti-sybil decision tree`,
    category: 'solana',
    tags: ['airdrop', 'sybil', 'tokenomics', 'growth', 'web3'],
    difficulty: 'intermediate',
    useCase: 'Use when designing a token airdrop that rewards genuine users and resists sybil farming.',
    authorUsername: 'promptarchitect',
    likes: 245,
    saves: 168,
    copies: 673,
    views: 3700,
    trendScore: 245*2 + 168*3 + 673 + 3700*0.2,
    trendingScore: 245*2 + 168*3 + 673 + 3700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'Poorly designed airdrops destroy token price and reward farmers over real users. This framework prevents both failure modes.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 673,
    estimatedTokens: 830,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-18',
  },
  {
    id: 'lib-sol-010',
    title: 'Solana Liquidity Pool Strategy Designer',
    slug: 'solana-liquidity-pool-strategy-designer',
    description: 'Designs an optimal liquidity provision strategy for a Solana DEX with IL modeling, range selection, rebalancing rules, and exit conditions.',
    content: `You are a DeFi liquidity strategist who has managed $10M+ in LP positions. Design an optimal liquidity provision strategy for [TOKEN_PAIR] on [DEX] (Raydium / Orca / Meteora).

## Inputs
- Pool capital: [POOL_CAPITAL]
- Risk tolerance: [RISK_TOLERANCE] (conservative / moderate / aggressive)
- Holding horizon: [HOLDING_HORIZON] (days / weeks / months)

## Strategy Components

### 1. Pool Selection Analysis
Compare for this token pair:
- Full-range pool (traditional AMM) — fee APY, IL exposure, simplicity
- CLMM concentrated liquidity — fee APY in-range, IL in-range vs out-of-range, active management requirement
- Recommendation with rationale

### 2. Price Range Selection (for CLMM)
- Historical price range analysis (30d / 90d / all-time)
- Recommended range width: narrow (higher fee APY, higher IL risk) vs wide (lower APY, more IL tolerant)
- Range positioning: symmetric vs directional (if you have price view)
- Out-of-range protocol: when to rebalance, when to withdraw

### 3. Fee Tier Optimization
- Fee tier options on this DEX
- Optimal tier for this pair's volatility profile
- Expected fee APY at current TVL and volume

### 4. Impermanent Loss Modeling
| Scenario | Price Change | IL % | Fee APY | Net Return |
|---|---|---|---|---|
| Bear | -80% | | | |
| Moderate down | -50% | | | |
| Flat | 0% | | | |
| Moderate up | +20% | | | |
| Bull | +100% | | | |

### 5. Rebalancing Strategy
- Trigger conditions (price moves X% out of range, time-based, fee accumulation threshold)
- Rebalancing cost analysis (gas + slippage vs fee income lost)
- Rebalancing execution approach

### 6. Compounding Frequency
- Optimal compounding interval calculation (fee earned vs gas cost)
- Auto-compound tools available on this DEX

### 7. Hedging Strategies for IL
- Delta-neutral approach (shorting one asset to hedge)
- Options overlay (if available)
- Basis trade opportunities

### 8. Emergency Exit Conditions
- Stop-loss triggers (drawdown threshold)
- Liquidity crisis indicators (pool TVL drop, token delistings)
- Exit execution checklist

## Output
- LP strategy document (ready to execute)
- IL calculation table (completed with estimates)
- Decision framework for range adjustments (flowchart in text)
- Tax implications summary (FIFO vs specific lot for LP positions)`,
    category: 'solana',
    tags: ['liquidity', 'defi', 'amm', 'clmm', 'solana'],
    difficulty: 'advanced',
    useCase: 'Use before providing liquidity on a Solana DEX to model impermanent loss and optimize range strategy.',
    authorUsername: 'osa',
    likes: 219,
    saves: 151,
    copies: 582,
    views: 3400,
    trendScore: 219*2 + 151*3 + 582 + 3400*0.2,
    trendingScore: 219*2 + 151*3 + 582 + 3400*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'CLMM pools on Meteora and Orca require active management. This framework prevents the most common IL and range mistakes.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 582,
    estimatedTokens: 820,
    model: 'gpt-4o',
    createdAt: '2024-12-22',
  },
  {
    id: 'lib-sol-011',
    title: 'Web3 Legal Risk Assessment Framework',
    slug: 'web3-legal-risk-assessment-framework',
    description: 'Produces a Web3 project legal risk matrix covering securities law, KYC/AML, DAO structures, and regulatory disclosure priorities.',
    content: `You are a Web3 legal analyst with deep familiarity with global crypto regulation. Note: this output is informational analysis, not legal advice — always engage qualified counsel.

Create a legal risk assessment for [PROJECT_TYPE] operating in [JURISDICTION].

## Inputs
- Token type: [TOKEN_TYPE] (utility / governance / revenue-share / NFT)
- Team location: [TEAM_LOCATION]
- User base: [USER_BASE] (geography, size)

## Risk Analysis Dimensions

### 1. Securities Law Risk
- Howey test application to this token (investment of money ✓/✗, common enterprise ✓/✗, expectation of profit ✓/✗, from efforts of others ✓/✗)
- Reves test applicability (for revenue-sharing tokens)
- SEC / CFTC jurisdiction boundary for this asset type
- Safe harbor analysis (SEC staff positions, Commodity vs Security classification trends)
- Mitigation strategies (utility-first design, decentralization roadmap)

### 2. Money Transmission Risk
- Does the protocol qualify as a money transmitter?
- FinCEN / MSB registration analysis
- State-by-state money transmission license exposure
- Stablecoin-specific rules (if applicable)

### 3. KYC / AML Obligations
- Which protocol components trigger AML obligations?
- FATF Travel Rule applicability
- Recommended KYC gates (if any) and privacy-preserving alternatives
- Sanctions screening requirements (OFAC list, SDN matching)

### 4. IP and Brand Risks
- Trademark registration priority actions
- Open-source license compliance for code dependencies
- NFT IP rights (what buyers actually receive)

### 5. Smart Contract Liability
- Liability for bugs causing user losses
- Disclaimers to include in UI
- Insurance options (Nexus Mutual / Sherlock coverage)

### 6. DAO Legal Structure Options
- Unincorporated DAO risks (unlimited personal liability)
- Wyoming DAO LLC structure
- Marshall Islands DAO LLC
- Foundation + DAO hybrid model
- Offshore structure options

### 7. US Person Restrictions
- Whether to geo-block US users (tradeoffs)
- Accredited investor requirements for token sales
- Reg D / Reg S safe harbors

## Output
- Risk matrix: dimension | risk level (HIGH/MED/LOW) | key exposure | immediate mitigation
- Red flag checklist (10 things that attract regulatory attention)
- Recommended legal structures ranked by cost/protection ratio
- Counsel engagement priorities (what to hire a lawyer for first vs later)`,
    category: 'solana',
    tags: ['legal', 'compliance', 'dao', 'securities', 'web3'],
    difficulty: 'advanced',
    useCase: 'Use when stress-testing a Web3 project for legal exposure before launch or fundraising.',
    authorUsername: 'promptarchitect',
    likes: 187,
    saves: 143,
    copies: 498,
    views: 2800,
    trendScore: 187*2 + 143*3 + 498 + 2800*0.2,
    trendingScore: 187*2 + 143*3 + 498 + 2800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Regulatory risk is existential for Web3 projects. Founders use this to identify exposure before legal fees spiral.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 498,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2025-01-05',
  },
  {
    id: 'lib-sol-012',
    title: 'Crypto Project KOL Outreach Strategy',
    slug: 'crypto-project-kol-outreach-strategy',
    description: 'Designs a tiered KOL outreach strategy with identification criteria, DM templates, compensation models, and performance tracking.',
    content: `You are a Web3 growth marketer who has executed KOL campaigns for protocols with $100M+ in TVL. Design a KOL strategy for [PROJECT_NAME].

## Inputs
- Total KOL budget: [BUDGET]
- Launch timeline: [LAUNCH_TIMELINE]
- Core value proposition: [VALUE_PROPOSITION]

## Strategy Framework

### 1. KOL Tier Architecture
Define allocation and expectations per tier:

| Tier | Follower Range | % of Budget | Deliverables | Compensation |
|---|---|---|---|---|
| Mega (Tier 1) | 500K+ | | | |
| Macro (Tier 2) | 100K–500K | | | |
| Micro (Tier 3) | 10K–100K | | | |
| Nano (Tier 4) | 1K–10K | | | |

Reasoning: why micro/nano often outperform mega in Web3 (engagement rate, audience trust, niche relevance).

### 2. KOL Identification Criteria
For each tier, evaluate:
- Audience demographics (Solana/DeFi/NFT focus vs general crypto)
- Engagement rate (likes + comments / followers) — minimum thresholds
- Content quality score (original analysis vs repost farm)
- Past promotion history (disclosed vs undisclosed, project quality)
- DM response rate and professionalism
- Exclusivity requirements from past deals

### 3. Outreach Message Templates
**Cold DM — Tier 1 / Tier 2:**
[Template with personalization fields, value prop hook, call to action]

**Cold DM — Tier 3 / Tier 4:**
[Template optimized for volume and speed]

**Follow-Up Sequence:**
Day 1 → Day 3 → Day 7 (3-message sequence with escalation)

### 4. Compensation Models
Compare for each tier:
- Upfront USDC payment (lowest risk for KOL, highest cost for project)
- Vested token allocation (aligns incentives, complex structuring)
- Revenue share on referral conversions (trackable, performance-based)
- Equity / advisory role (for strategic long-term KOLs)
- Hybrid: base USDC + performance token bonus

### 5. Deliverable Specifications per Tier
For each tier, define:
- Content formats (thread / YouTube / Space / TikTok)
- Minimum impression guarantee
- Approval process (review before posting)
- Embargo requirements
- Disclosure requirements (FTC #ad, #sponsored)

### 6. Performance Tracking
- UTM parameters for each KOL
- On-chain referral tracking (wallet attribution)
- Metrics: impressions, engagement rate, referral signups, on-chain conversions
- Post-campaign analysis template

## Output
- KOL tier strategy with budget allocation table
- Cold outreach DM templates (ready to send)
- Tracking spreadsheet column structure
- FTC / regulatory compliance checklist for disclosures`,
    category: 'solana',
    tags: ['marketing', 'kol', 'growth', 'influencer', 'web3'],
    difficulty: 'intermediate',
    useCase: 'Use when planning a KOL marketing campaign for a Solana project launch or growth phase.',
    authorUsername: 'osa',
    likes: 156,
    saves: 112,
    copies: 431,
    views: 2600,
    trendScore: 156*2 + 112*3 + 431 + 2600*0.2,
    trendingScore: 156*2 + 112*3 + 431 + 2600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Plan',
    whyTrending: 'KOL marketing is table stakes in Web3 but most campaigns waste budget on the wrong tiers. This framework maximizes ROI per dollar.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'osa',
    uses: 431,
    estimatedTokens: 780,
    model: 'gpt-4o',
    createdAt: '2024-12-29',
  },
  {
    id: 'lib-sol-013',
    title: 'Solana Program Test Suite Architecture',
    slug: 'solana-program-test-suite-architecture',
    description: 'Designs a comprehensive Anchor program test suite covering unit tests, integration scenarios, fuzz testing, and CI/CD integration.',
    content: `You are a Solana program developer who writes test suites for production protocols. Design a comprehensive test suite for [PROGRAM_NAME] built with Anchor.

## Inputs
- Program instructions: [PROGRAM_INSTRUCTIONS]
- State accounts: [STATE_ACCOUNTS]

## Test Suite Architecture

### 1. Unit Test Structure (Instruction-Level)
Using solana-bankrun or solana-program-test:

For each instruction, write tests covering:
- **Happy path**: valid inputs, expected state transitions, emitted events
- **Authorization failure**: wrong signer, wrong authority → expect AnchorError
- **Invalid account**: wrong owner, wrong PDA seeds → expect error
- **Edge values**: maximum values (u64::MAX arithmetic), zero values, empty strings

Example unit test template:
\`\`\`typescript
it("instruction_name: happy path", async () => {
  // Arrange: set up accounts
  // Act: invoke instruction
  // Assert: verify state, balances, events
});
\`\`\`

### 2. Integration Test Scenarios
Multi-instruction flows that test realistic user journeys:
- Happy path end-to-end (user onboards → acts → exits)
- Partial completion (instruction A succeeds, instruction B fails → verify rollback)
- Concurrent user simulation (two users interacting with shared state)
- Attack simulation scenarios (reentrancy attempt, privilege escalation attempt)

### 3. Fuzz Testing Approach
Property-based testing for arithmetic correctness:
- Tool: cargo-fuzz or Trident framework
- Properties to test: invariants that must always hold (e.g., total supply never exceeds max)
- Input corpus design
- Mutation strategies for account data

### 4. Devnet Test Protocol
- Deployment checklist before devnet testing
- Funded test wallet management
- Devnet-specific edge cases (RPC rate limits, airdrop limits)
- Smoke test sequence for post-deployment verification

### 5. Mainnet-Fork Simulation
- Using Solana mainnet-fork for integration tests with real protocol state
- Account cloning strategy (which accounts to snapshot)
- Time-travel simulation for time-locked instructions

### 6. Test Account Setup Helpers
Shared utilities across all tests:
\`\`\`typescript
// Example helpers to implement
async function createFundedWallet(provider, lamports)
async function createTokenAccount(provider, mint, owner)
async function createTestPDA(seeds, programId)
\`\`\`

### 7. Error Code Coverage
- Enumerate all custom error codes in the program
- Ensure each error code has at least one test that triggers it
- Error message verification

### 8. CI/CD Integration
- GitHub Actions workflow for test runs
- Test parallelization strategy
- Coverage reporting (which instructions have < 80% coverage?)
- Mainnet deployment gate: required test pass rate

## Output
- Test architecture document (folder structure + naming conventions)
- Example test code for each test type
- Coverage targets per instruction (% branches covered)
- CI/CD YAML snippet for GitHub Actions`,
    category: 'solana',
    tags: ['testing', 'anchor', 'program', 'ci-cd', 'solana'],
    difficulty: 'advanced',
    useCase: 'Use when designing a test suite for a new or existing Anchor program before mainnet deployment.',
    authorUsername: 'promptarchitect',
    likes: 201,
    saves: 147,
    copies: 589,
    views: 3100,
    trendScore: 201*2 + 147*3 + 589 + 3100*0.2,
    trendingScore: 201*2 + 147*3 + 589 + 3100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Plan',
    whyTrending: 'Test coverage is the first question auditors ask. This architecture ensures no instruction is deployed without systematic coverage.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 589,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-11',
  },
  {
    id: 'lib-sol-014',
    title: 'Web3 Investor Pitch Narrative Builder',
    slug: 'web3-investor-pitch-narrative-builder',
    description: 'Builds a compelling Web3 investor pitch with Solana-specific market framing, token value flow, and VC question anticipation.',
    content: `You are a Web3 venture pitch consultant who has helped projects raise $200M+ across Solana ecosystem funds. Build a compelling investor pitch narrative for [PROJECT_NAME].

## Inputs
- Problem: [PROBLEM]
- Solution: [SOLUTION]
- Traction metrics: [TRACTION_METRICS]
- Ask: [ASK] (amount, structure: SAFE / equity / token warrant)

## Pitch Structure

### Slide 1: Hook (one sentence)
The single sentence that makes an investor put down their phone. Format: "[Specific pain], [Specific group] [Specific bad outcome]. We fix this by [Non-obvious approach]."

### Slide 2: Problem
- Market pain with quantified data (cite source or note "source needed")
- Who experiences this pain and how often
- Why existing solutions fail (be specific and fair — VCs know the incumbents)
- Cost of the problem: economic or behavioral evidence

### Slide 3: Why Blockchain / Why Solana
This is the slide that most Web3 pitches fail. Answer honestly:
- What does decentralization actually buy the user (not the project)?
- Why Solana specifically (speed, cost, ecosystem, liquidity) vs alternative chains
- What would be worse about a centralized version?

### Slide 4: Market Opportunity
- TAM: define the total market being disrupted (with methodology)
- SAM: Solana-native + crypto-native addressable market today
- SOM: what you can win in 3 years given your GTM
- Comparable: name 2 analogous markets that grew this way

### Slide 5: Product Demo Direction
- What to show in 2 minutes
- Which user journey tells the best story
- What metric to highlight during demo

### Slide 6: Token Model (for token projects)
- How does protocol revenue flow to token holders?
- Is this a security? (address it directly — VCs will ask)
- Token vs equity upside split (what are investors actually getting?)

### Slide 7: Traction
Solana-specific on-chain metrics that VCs trust:
- Unique wallets (30-day active)
- Transaction volume
- TVL (if DeFi)
- Revenue (protocol fees, not TVL)
- Retention curve

### Slide 8: Team
- Credibility signals specific to Web3 (past protocol experience, on-chain history, GitHub)
- Why this team wins in this market

### Slide 9: Competitive Landscape
- Positioning map (2x2: dimensions that favor you)
- Why now (what changed that makes this winnable)

### Slide 10: Roadmap + Use of Funds
- 18-month milestones (3 key milestones with metrics)
- Fund allocation (product / team / marketing / liquidity)

## Anti-Patterns Section
- Top 10 things NOT to say to crypto VCs (and what to say instead)
- Most common questions asked + prepared answers
- Red lines that kill deals`,
    category: 'solana',
    tags: ['fundraising', 'pitch', 'investor', 'web3', 'solana'],
    difficulty: 'intermediate',
    useCase: 'Use when preparing a fundraising pitch for a Solana project targeting crypto-native VCs.',
    authorUsername: 'osa',
    likes: 243,
    saves: 178,
    copies: 712,
    views: 4200,
    trendScore: 243*2 + 178*3 + 712 + 4200*0.2,
    trendingScore: 243*2 + 178*3 + 712 + 4200*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Crypto VC pitches have specific failure modes traditional pitch advice misses. This is built for Solana ecosystem fundraising.',
    bestFor: ['Claude'],
    author: 'osa',
    uses: 712,
    estimatedTokens: 870,
    model: 'gpt-4o',
    createdAt: '2025-01-02',
  },
  {
    id: 'lib-sol-015',
    title: 'Cross-Chain Bridge Security Evaluation',
    slug: 'cross-chain-bridge-security-evaluation',
    description: 'Evaluates the security architecture of a cross-chain bridge with risk scoring, TVL ceiling recommendations, and user due diligence checklist.',
    content: `You are a cross-chain security researcher who has analyzed 20+ bridge architectures, including post-mortems of the Wormhole, Ronin, and Nomad exploits. Evaluate the security of [BRIDGE_NAME] connecting [CHAIN_A] to [CHAIN_B].

## Inputs
- Bridge mechanism: [BRIDGE_MECHANISM] (lock-and-mint / liquidity / ZK-proof / optimistic)

## Security Evaluation Framework

### 1. Trust Assumption Analysis
- Who (or what) must be trusted for a transfer to complete honestly?
- Validator / relayer model: how many validators, threshold required, known entities?
- Economic security: what is the cost to corrupt ≥ threshold validators?
- Key management: HSM, multi-sig, MPC, threshold signatures?
- Liveness vs safety tradeoff

### 2. Finality Guarantees
- Finality time on [CHAIN_A]: optimistic rollup (7-day challenge period) vs ZK-proof vs PoS
- Finality time on [CHAIN_B]
- How the bridge handles chain reorgs (what happens if a source tx is orphaned?)
- Replay attack protection across chains

### 3. Smart Contract Risk
- Contract addresses and audit history for each chain
- Upgrade authority: is the bridge contract upgradeable? Timelock duration?
- Admin key management
- Known vulnerabilities in this bridge architecture class

### 4. Oracle Risk
- How does the bridge verify that a lock event occurred on the source chain?
- Oracle liveness risk
- Oracle manipulation scenario

### 5. Liquidity and Economic Risk
- Liquidity fragmentation risk (for liquidity-based bridges)
- Slippage on large transfers
- MEV risk in the bridging flow
- Protocol solvency in a mass-withdrawal scenario

### 6. Historical Exploit Analysis
- Has this bridge been exploited before?
- Security score of similar bridge mechanisms (class analysis)
- Lessons learned from comparable exploits

### 7. Risk Rating Matrix
Rate each dimension 1–5 (5 = safest):
| Dimension | Score (1-5) | Key Concern |
|---|---|---|
| Validator trust | | |
| Finality guarantees | | |
| Smart contract risk | | |
| Oracle risk | | |
| Liquidity risk | | |
| Economic security | | |

## Output
- Overall security score (weighted average, methodology explained)
- TVL-appropriate risk ceiling (e.g., "suitable for up to $X per transfer")
- User due diligence checklist (10 items to verify before using this bridge)
- Comparison to top 3 alternative bridging options for this route
- Monitoring alerts to set up as a user`,
    category: 'solana',
    tags: ['bridge', 'cross-chain', 'security', 'wormhole', 'solana'],
    difficulty: 'advanced',
    useCase: 'Use before moving significant assets across chains to evaluate bridge security and set appropriate risk limits.',
    authorUsername: 'promptarchitect',
    likes: 168,
    saves: 121,
    copies: 456,
    views: 2700,
    trendScore: 168*2 + 121*3 + 456 + 2700*0.2,
    trendingScore: 168*2 + 121*3 + 456 + 2700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Bridges remain the most exploited surface in crypto. This framework gives users and protocols a repeatable evaluation methodology.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 456,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2025-01-07',
  },
]
