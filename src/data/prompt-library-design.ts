import type { Prompt } from './prompts'

export const DESIGN_PROMPTS: Prompt[] = [
  {
    id: 'lib-des-001',
    title: 'UX Audit Scorecard Generator',
    slug: 'ux-audit-scorecard-generator',
    description: 'Audits a UI or product across 7 usability dimensions, outputs a scored table with critical fixes and quick wins.',
    content: `You are a senior UX researcher with 10+ years of experience conducting usability audits for SaaS, e-commerce, and mobile products. Perform a comprehensive UX audit of the provided product or interface.

## Input
Product URL or description: [PRODUCT_URL_OR_DESCRIPTION]

## Audit Dimensions
Evaluate each of the following dimensions and assign a score from 1 (critical failure) to 10 (excellent):

### 1. Navigation Clarity
- Can users find where they are at all times?
- Is the primary navigation consistent and predictable?
- Are breadcrumbs or wayfinding cues present where needed?

### 2. Information Architecture
- Is content grouped logically by mental model?
- Does the taxonomy match user expectations?
- Is search surface appropriate for content volume?

### 3. Cognitive Load
- How many decisions does a user face per screen?
- Is progressive disclosure used appropriately?
- Are forms and multi-step flows chunked well?

### 4. Visual Hierarchy
- Does the eye flow toward the primary action?
- Are typographic scales and spacing used to differentiate importance?
- Is contrast used purposefully to guide attention?

### 5. Error Prevention
- Are destructive actions guarded with confirmation steps?
- Are inline form validations present before submission?
- Are sensible defaults applied to reduce input errors?

### 6. Feedback Loops
- Does every action produce timely, visible feedback?
- Are loading states, success states, and error states designed?
- Is undo/redo available for reversible actions?

### 7. Accessibility Basics
- Are touch targets and click areas at minimum 44×44px?
- Is color contrast meeting WCAG AA minimums?
- Are form fields labeled and focusable via keyboard?

## Output Format

### Scorecard Table
| Dimension | Score (1-10) | Key Finding | Severity |
|---|---|---|---|
(Fill all 7 rows)

### Top 5 Critical Fixes
For each: problem statement, why it matters, specific fix recommendation, estimated implementation effort (S/M/L).

### Quick Wins List
5 improvements that can be implemented in under 2 hours each, with specific instructions.

### Overall UX Health Score
Weighted average and a one-paragraph executive summary suitable for sharing with a product team.`,
    category: 'design',
    tags: ['ux', 'audit', 'usability', 'accessibility', 'research'],
    difficulty: 'intermediate',
    useCase: 'Use before a product redesign, after launch to identify usability gaps, or to build a case for UX investment.',
    authorUsername: 'agentdesigner',
    likes: 487,
    saves: 312,
    copies: 1240,
    views: 7800,
    trendScore: 487*2 + 312*3 + 1240 + 7800*0.2,
    trendingScore: 487*2 + 312*3 + 1240 + 7800*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Report',
    whyTrending: 'Teams use this before redesigns to justify UX work with concrete scores and prioritized fixes stakeholders can act on.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 1240,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-14',
  },
  {
    id: 'lib-des-002',
    title: 'Mobile-First Component Specification Brief',
    slug: 'mobile-first-component-specification-brief',
    description: 'Generates a detailed mobile-first React component spec covering dimensions, touch targets, states, animations, and accessibility.',
    content: `You are a senior mobile UI engineer with deep expertise in React Native and responsive web component design. Create a production-ready component specification based on the following inputs.

## Inputs
- Component name: [COMPONENT_NAME]
- Purpose: [PURPOSE]
- User context: [USER_CONTEXT] (e.g., browsing a feed, completing a checkout step)

## Specification Sections

### 1. Dimensional Blueprint
- Base width: 375px (iPhone SE baseline)
- Responsive breakpoints: 390px (iPhone 14), 430px (Pro Max), 768px (tablet), 1024px+ (desktop)
- Height: fixed vs. dynamic (justify the choice)
- Internal padding and margin system (use 4px base grid)

### 2. Touch & Interaction Targets
- Minimum touch target: 44×44px (Apple HIG / Google Material compliance)
- Tap zone vs. visual element distinction
- Gesture behaviors: tap, long press, swipe, pinch (list which apply and their handlers)
- Haptic feedback triggers (if native)

### 3. State Variants
Define the visual and behavioral spec for each state:
- **Default**: resting appearance
- **Hover** (pointer devices only): transition duration, color shift
- **Active / Pressed**: scale transform, color darken
- **Disabled**: opacity level, cursor, interaction block
- **Loading**: skeleton or spinner placement, aria-busy
- **Error**: color system, icon placement, error message typography
- **Empty**: empty state illustration guidance

### 4. Accessibility Requirements
- ARIA role and label requirements
- Focus ring: 2px offset, brand color or system default
- Screen reader announcement text for each state change
- Color contrast ratio targets per state
- Keyboard navigation sequence

### 5. Animation Specifications
- Property animated (opacity, transform, background-color)
- Duration (ms) and easing function (e.g., cubic-bezier(0.4, 0, 0.2, 1))
- Entry and exit animations
- Reduced motion alternatives (prefers-reduced-motion)

### 6. Dark Mode Considerations
- Color token swaps (semantic token names, not raw hex)
- Elevation adaptation (lighter backgrounds in dark mode, not shadows)
- Image and icon treatments in dark context

## Output Format
1. Component spec document (structured sections above)
2. TypeScript prop interface with JSDoc for every prop
3. ASCII state machine diagram showing state transitions`,
    category: 'design',
    tags: ['mobile', 'component', 'react', 'specification', 'accessibility'],
    difficulty: 'advanced',
    useCase: 'Use when handing off a new component to developers or establishing spec standards for a design system.',
    authorUsername: 'agentdesigner',
    likes: 198,
    saves: 134,
    copies: 520,
    views: 3100,
    trendScore: 198*2 + 134*3 + 520 + 3100*0.2,
    trendingScore: 198*2 + 134*3 + 520 + 3100*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Specification',
    whyTrending: 'Bridges the designer-developer gap with a single prompt that produces both a human-readable spec and a TypeScript interface.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 520,
    estimatedTokens: 950,
    model: 'gpt-4o',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-des-003',
    title: 'Design System Token Architecture Builder',
    slug: 'design-system-token-architecture-builder',
    description: 'Creates a complete 3-layer design token architecture with JSON structure, CSS custom properties, and usage guidelines.',
    content: `You are a design systems engineer who has built token architectures for enterprise SaaS products. Create a complete, production-ready design token system for the following product.

## Inputs
- Brand colors: [BRAND_COLORS] (provide hex values for primary, secondary, and any existing brand colors)
- Product category: [PRODUCT_CATEGORY] (e.g., B2B SaaS dashboard, consumer mobile app, developer tool)

## Token Architecture — 3-Layer Model

### Layer 1: Primitive Tokens
Raw values with no semantic meaning. Never referenced in components directly.

**Color Primitives** (generate full tints/shades for each brand color):
- Scale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- Neutrals: gray scale + true black/white
- Functional: red, yellow, green, blue (for status colors)

**Typography Primitives**:
- Font families (display, body, mono)
- Raw size values (10px through 72px)
- Raw weight values (300, 400, 500, 600, 700, 800)

### Layer 2: Semantic Tokens
Contextual tokens that reference primitive tokens. These are what change between themes.

**Color Semantics**:
- \`color.background.default\`, \`color.background.subtle\`, \`color.background.emphasis\`
- \`color.text.primary\`, \`color.text.secondary\`, \`color.text.disabled\`, \`color.text.inverse\`
- \`color.border.default\`, \`color.border.strong\`, \`color.border.focus\`
- \`color.status.success\`, \`color.status.warning\`, \`color.status.error\`, \`color.status.info\`
- \`color.interactive.primary\`, \`color.interactive.primaryHover\`, \`color.interactive.primaryActive\`

**Typography Semantics**:
- \`text.heading.xl\`, \`text.heading.lg\`, \`text.heading.md\`, \`text.heading.sm\`
- \`text.body.lg\`, \`text.body.md\`, \`text.body.sm\`, \`text.body.xs\`
- \`text.label.md\`, \`text.label.sm\`
- \`text.code\`

### Layer 3: Component Tokens
Component-scoped tokens that reference semantic tokens. Allows per-component overrides.

Examples:
- \`button.primary.background\` → \`color.interactive.primary\`
- \`button.primary.text\` → \`color.text.inverse\`
- \`input.border.default\` → \`color.border.default\`
- \`input.border.focus\` → \`color.border.focus\`

### Spacing System (4px base grid)
- space-0: 0px, space-1: 4px, space-2: 8px, space-3: 12px, space-4: 16px, space-5: 20px, space-6: 24px, space-8: 32px, space-10: 40px, space-12: 48px, space-16: 64px, space-20: 80px, space-24: 96px

### Border Radius Scale
- radius-none: 0, radius-sm: 2px, radius-md: 4px, radius-lg: 8px, radius-xl: 12px, radius-2xl: 16px, radius-full: 9999px

### Shadow System
- shadow-xs through shadow-2xl (provide box-shadow values for each)
- Elevation-based naming rationale

### Motion Tokens
- Duration: fast (100ms), normal (200ms), slow (350ms), slower (500ms)
- Easing: ease-in, ease-out, ease-in-out, spring (cubic-bezier values)
- Transition presets: fade, slide, scale

## Output Format
1. JSON token file (primitives + semantics layers, W3C Design Token Community Group format)
2. CSS custom properties (semantic layer only, ready for :root)
3. Layer usage guidelines (one paragraph per layer explaining when to reference each)
4. Dark mode semantic overrides (JSON diff showing what changes)`,
    category: 'design',
    tags: ['design-system', 'tokens', 'css', 'theming', 'architecture'],
    difficulty: 'advanced',
    useCase: 'Use when bootstrapping a new design system or migrating from hard-coded values to a token-based architecture.',
    authorUsername: 'agentdesigner',
    likes: 542,
    saves: 378,
    copies: 1480,
    views: 9200,
    trendScore: 542*2 + 378*3 + 1480 + 9200*0.2,
    trendingScore: 542*2 + 378*3 + 1480 + 9200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '20 min',
    outputType: 'Architecture',
    whyTrending: 'Design token systems are the backbone of scalable UI. This prompt gives teams a complete, standards-compliant architecture in minutes.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 1480,
    estimatedTokens: 1050,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-22',
  },
  {
    id: 'lib-des-004',
    title: 'Emotional Journey Mapping for User Flows',
    slug: 'emotional-journey-mapping-user-flows',
    description: 'Maps the emotional arc of a user flow, identifies friction points and delight moments, and proposes targeted design interventions.',
    content: `You are a UX designer specializing in behavioral design and emotional experience mapping. Create a detailed emotional journey map for the specified user flow.

## Inputs
- Flow name: [FLOW_NAME] (e.g., "First-time onboarding", "Checkout", "Error recovery", "Feature discovery")
- Steps list: [STEPS_LIST] (list each step the user takes, e.g., "1. Sees signup page, 2. Enters email, 3. Confirms email...")

## Journey Map Sections

### 1. User Actions
For each step, describe exactly what the user does — clicks, reads, enters data, waits. Be specific about the interface element they interact with.

### 2. Emotional State per Step
Rate on a 5-point scale and label:
- 😤 Frustrated (-2): active friction, confusion, or error
- 😐 Uncertain (-1): hesitation, doubt, re-reading
- 😶 Neutral (0): proceeding without feeling
- 🙂 Satisfied (+1): progress confirmed, expectation met
- 😄 Delighted (+2): unexpected value, pleasant surprise, celebration

### 3. Pain Points
For each step rated -2 or -1:
- What caused the negative emotion?
- What assumption did the design make that was wrong?
- What information or affordance is missing?

### 4. Moments of Delight
For each step rated +1 or +2:
- What created the positive emotion?
- Is this moment intentional or accidental?
- How can it be amplified?

### 5. Design Opportunities
For each pain point step, provide 3 concrete design interventions:
- **Quick fix** (copy, color, or layout change — no engineering)
- **Medium lift** (new component or interaction pattern)
- **Strategic change** (flow restructuring or feature addition)

## Output Format
1. Emotion curve diagram (ASCII line chart with step labels on x-axis, emotion score on y-axis)
2. Annotated journey map table (Step | Action | Emotion | Pain/Delight | Opportunity)
3. Prioritized intervention list (top 5 changes ranked by impact × effort)
4. "Minimum Delightful Journey" — the fewest changes needed to shift the overall emotional arc positive`,
    category: 'design',
    tags: ['journey-mapping', 'ux', 'emotional-design', 'behavioral', 'research'],
    difficulty: 'intermediate',
    useCase: 'Use during product discovery, redesign sprints, or when diagnosing low activation or high churn in a specific flow.',
    authorUsername: 'agentdesigner',
    likes: 167,
    saves: 112,
    copies: 410,
    views: 2600,
    trendScore: 167*2 + 112*3 + 410 + 2600*0.2,
    trendingScore: 167*2 + 112*3 + 410 + 2600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Map',
    whyTrending: 'Emotional journey maps are hard to facilitate manually. This prompt structures the entire exercise in one pass.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 410,
    estimatedTokens: 780,
    model: 'gpt-4o',
    createdAt: '2024-11-15',
  },
  {
    id: 'lib-des-005',
    title: 'WCAG Accessibility Audit Checklist',
    slug: 'wcag-accessibility-audit-checklist',
    description: 'Audits a component or screen against WCAG 2.1 AA standards with severity ratings and code fix examples for every failure.',
    content: `You are an accessibility specialist with expertise in WCAG 2.1 and ARIA standards. Perform a thorough accessibility audit of the provided component or screen.

## Input
Component or screen description/HTML: [COMPONENT_DESCRIPTION_OR_HTML]

## Audit Criteria

### 1. Color and Contrast (WCAG 1.4.3, 1.4.11)
- Normal text contrast ratio: minimum 4.5:1
- Large text contrast ratio: minimum 3:1 (18pt or 14pt bold)
- UI component contrast (borders, icons, input states): minimum 3:1
- Test: foreground vs background for each text and UI element
- Test: focus indicator contrast against adjacent colors

### 2. Keyboard Navigation (WCAG 2.1.1, 2.1.2, 2.4.3, 2.4.7)
- Is every interactive element reachable via Tab key?
- Is focus order logical (matches visual/DOM order)?
- Is focus always visible (not hidden by overflow or opacity)?
- Are keyboard traps present (modal dialogs should trap, others must not)?
- Do custom widgets implement keyboard patterns from ARIA Authoring Practices?

### 3. Screen Reader Support (WCAG 1.1.1, 1.3.1, 4.1.2)
- Are images and icons with meaning given alt text?
- Are decorative images marked aria-hidden="true"?
- Are interactive elements labeled (aria-label or visible text)?
- Are dynamic updates announced (aria-live regions for alerts, toasts)?
- Do form fields have associated <label> or aria-labelledby?
- Are error messages linked to inputs via aria-describedby?

### 4. Focus Management (WCAG 2.4.3)
- On modal open: does focus move to the dialog?
- On modal close: does focus return to the trigger?
- On route changes (SPA): does focus reset to a meaningful landmark?

### 5. Touch Targets (WCAG 2.5.5)
- Minimum touch target size: 44×44px
- Spacing between adjacent targets: minimum 8px

### 6. Text Alternatives (WCAG 1.1.1, 1.3.3)
- All non-text content has a text alternative
- Instructions do not rely solely on color, shape, or position

### 7. Error Identification (WCAG 3.3.1, 3.3.2)
- Errors are identified in text (not just color)
- Labels and instructions are provided for user input

## Output Format

### Pass/Fail Checklist
| Criterion | WCAG Reference | Status | Severity | Notes |
|---|---|---|---|---|

Severity levels:
- **Critical**: blocks users with disabilities completely
- **Major**: creates significant friction or confusion
- **Minor**: best practice gap, edge case impact

### Code Fix Examples
For each FAIL item, provide a before/after code snippet (HTML/CSS/ARIA) showing the specific fix.

### Remediation Priority Order
Ranked list of fixes by severity × frequency of occurrence.`,
    category: 'design',
    tags: ['accessibility', 'wcag', 'aria', 'audit', 'compliance'],
    difficulty: 'intermediate',
    useCase: 'Use during QA, before public launch, or when preparing an accessibility statement for compliance.',
    authorUsername: 'promptarchitect',
    likes: 223,
    saves: 158,
    copies: 610,
    views: 3400,
    trendScore: 223*2 + 158*3 + 610 + 3400*0.2,
    trendingScore: 223*2 + 158*3 + 610 + 3400*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Checklist',
    whyTrending: 'Accessibility audits are legally required in many jurisdictions. This prompt gives teams a structured audit with fix examples they can act on immediately.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 610,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-01',
  },
  {
    id: 'lib-des-006',
    title: 'Brand Identity Visual Direction Brief',
    slug: 'brand-identity-visual-direction-brief',
    description: 'Creates a full visual direction brief including mood board description, color palette, typography pairing, and 3 logo concept directions.',
    content: `You are a brand strategist and creative director who has developed visual identities for funded startups and enterprise brands. Create a comprehensive visual direction brief for a new brand.

## Inputs
- Company name: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Target audience: [TARGET_AUDIENCE]
- 3 brand adjectives: [BRAND_ADJECTIVE_1], [BRAND_ADJECTIVE_2], [BRAND_ADJECTIVE_3]

## Brief Sections

### 1. Mood Board Description
Describe in vivid detail what a mood board for this brand would contain:
- **Photography style**: subjects, lighting quality, color grading, editorial vs. candid
- **Illustration approach**: style (flat/isometric/hand-drawn/geometric), complexity, color palette application
- **Texture and material feel**: surfaces, tactility, digital or analog mood
- **Reference touchstones**: describe 3 existing brands whose aesthetic DNA is relevant (but this brand must be distinct)

### 2. Color Palette Rationale
Provide exact hex values and explain the strategic reasoning for each:
- **Primary color**: hex + why this color serves the brand adjectives
- **Secondary color**: hex + how it complements primary
- **Accent color**: hex + when to use (CTAs, highlights, data)
- **Neutral family**: 3-4 neutrals (dark to light) with hex values
- **Color psychology notes**: what each color communicates to the target audience
- **Combination rules**: which pairs to use and which to avoid

### 3. Typography Pairing
- **Display/Heading font**: name (free or premium), weight range, why it fits the brand
- **Body font**: name, optimal reading size, line-height recommendation
- **Monospace font**: for code, data, or technical contexts (if applicable)
- **Pairing rationale**: how the two fonts contrast and complement
- **Hierarchy example**: H1 → H2 → H3 → Body → Caption sizing guide

### 4. Logo Concept Directions (3 distinct approaches)
For each direction:
- **Concept name** and one-sentence design philosophy
- **Visual description**: exact what the mark looks like (shape, metaphor, letterform)
- **Color application**: which palette colors and how
- **Where it works best**: digital, print, favicon, embroidery
- **Risk/reward**: what makes it bold vs. what might limit it

### 5. Do / Don't Brand Usage Guide
- 5 DOs: specific, visual examples of on-brand application
- 5 DON'Ts: common mistakes and exactly why they violate the brand direction`,
    category: 'design',
    tags: ['branding', 'identity', 'visual-design', 'color', 'typography'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of a branding project to align stakeholders and give designers a clear creative direction before any pixels are made.',
    authorUsername: 'agentdesigner',
    likes: 145,
    saves: 98,
    copies: 380,
    views: 2200,
    trendScore: 145*2 + 98*3 + 380 + 2200*0.2,
    trendingScore: 145*2 + 98*3 + 380 + 2200*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Brief',
    whyTrending: 'Brand briefs typically take days of stakeholder workshops. This prompt compresses that into a structured document designers can work from immediately.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 380,
    estimatedTokens: 820,
    model: 'gpt-4o',
    createdAt: '2024-10-30',
  },
  {
    id: 'lib-des-007',
    title: 'Competitor UI Pattern Analysis',
    slug: 'competitor-ui-pattern-analysis',
    description: 'Systematically analyzes UI patterns across 3 competitors and synthesizes differentiation opportunities and adoption-worthy patterns.',
    content: `You are a UX researcher and competitive analyst who specializes in pattern-level analysis across digital products. Conduct a structured competitor UI pattern analysis.

## Inputs
- Competitor 1: [COMPETITOR_1]
- Competitor 2: [COMPETITOR_2]
- Competitor 3: [COMPETITOR_3]
- Product category: [PRODUCT_CATEGORY]

## Analysis Framework

For each competitor, document the following UI patterns:

### 1. Primary Navigation Pattern
- Navigation type (top nav / sidebar / bottom bar / hybrid)
- Item count and grouping logic
- Active state treatment
- Mobile adaptation approach
- Strengths and weaknesses of this approach

### 2. Key Interaction Paradigms
- Primary CRUD actions: how are create/edit/delete triggered?
- Bulk action handling
- Drag-and-drop usage (yes/no, where, implementation quality)
- Filtering and sorting UI approach
- Search prominence and behavior

### 3. Visual Hierarchy Approach
- Color usage for actions (how many CTA colors?)
- Typography scale differentiation
- Use of whitespace as a design decision
- Card vs. table vs. list pattern choice

### 4. Onboarding Flow
- Empty state handling on first login
- Setup wizard presence and step count
- First-run tooltips or coach marks
- Time-to-value optimization evidence

### 5. Dashboard Layout Pattern
- Grid type (fixed columns / fluid / masonry)
- Above-fold content priority
- Data visualization choices
- Customization options offered to users

### 6. Mobile Adaptation Strategy
- Responsive vs. native app vs. progressive web app
- Key features available vs. hidden on mobile
- Bottom navigation vs. hamburger menu

## Synthesis

### Pattern Gap Analysis
- What UI pattern does no competitor do well? (Opportunity space)
- Where are all three doing the same thing? (Commodity pattern — meet expectations)
- Where does one competitor significantly outperform the others? (Threat)

### Differentiation Opportunity Map
3-5 specific UI decisions your product could make to stand out, each with rationale.

### Patterns Worth Adopting
List patterns any competitor does well that should inform your own design.

### Patterns to Avoid
Anti-patterns from the competitive set with explanations of why they fail users.

## Output Format
1. Comparison matrix table (competitors × dimensions)
2. Opportunity map narrative (200 words)
3. Prioritized recommendation list`,
    category: 'design',
    tags: ['competitive-analysis', 'ux-research', 'ui-patterns', 'strategy'],
    difficulty: 'intermediate',
    useCase: 'Use at the start of a product redesign or when entering a new market to establish a differentiated design position.',
    authorUsername: 'agentdesigner',
    likes: 134,
    saves: 88,
    copies: 340,
    views: 1900,
    trendScore: 134*2 + 88*3 + 340 + 1900*0.2,
    trendingScore: 134*2 + 88*3 + 340 + 1900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Analysis',
    whyTrending: 'Pattern-level competitive analysis is more actionable than surface-level teardowns. Teams use this to make specific design decisions backed by evidence.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 340,
    estimatedTokens: 870,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-20',
  },
  {
    id: 'lib-des-008',
    title: 'Dark Mode Design Adaptation Guide',
    slug: 'dark-mode-design-adaptation-guide',
    description: 'Creates a systematic light-to-dark mode adaptation strategy including color mapping, elevation adjustments, and implementation approach.',
    content: `You are a UI engineer specializing in theming and design system architecture. Create a systematic guide for adapting a design system or product from light mode to dark mode.

## Input
- Design system or product name: [DESIGN_SYSTEM_OR_PRODUCT]
- Current light mode palette: [CURRENT_LIGHT_PALETTE] (provide color names and hex values)

## Dark Mode Adaptation Framework

### 1. Core Strategy — Why Not to Just Invert
Explain the fundamental difference between a naive color inversion and a true dark mode:
- Lightness inversion creates visual noise, not readability
- Perceived contrast differs between light and dark environments
- Brand colors must be adapted, not flipped
- The role of elevation in dark interfaces (lightness instead of shadow)

### 2. Background Elevation System
In dark mode, elevation is expressed through progressively lighter backgrounds:
- Base (deepest): hex recommendation + usage
- Surface 1 (cards, panels): hex + elevation level
- Surface 2 (modals, overlays): hex + elevation level
- Surface 3 (tooltips, dropdowns): hex + elevation level
- Surface 4 (highest — popovers): hex + elevation level
- Rationale: why shadows lose effectiveness in dark mode

### 3. Text Contrast Hierarchy
- Primary text: never pure white (#FFFFFF) — explain why and provide recommendation
- Secondary text: opacity-based vs. separate color — pros/cons
- Disabled text: minimum contrast ratio still required
- Placeholder text: contrast floor in dark inputs
- Inverse text (on colored backgrounds): special handling

### 4. Color Mapping Table
For each semantic token in the light palette, provide the dark mode equivalent:
| Semantic Token | Light Mode Value | Dark Mode Value | Adjustment Rationale |

### 5. Interactive State Adjustments
- Primary button in dark: adjusted hue + saturation (avoid oversaturation)
- Hover states: lightness increase rather than darken
- Focus rings: high contrast against dark backgrounds
- Destructive actions: red in dark mode (saturation, lightness adjustments)

### 6. Image and Illustration Adaptations
- Photography: dimming strategy (CSS filter or overlay)
- Illustrations: SVG color swap approach, which fills change
- Gradients: directional reversal considerations
- Product screenshots: dark mode versions needed vs. neutral backgrounds

### 7. Icon Treatment
- Outline icons vs. filled icons in dark mode
- Icon opacity levels for different states
- Multi-color icons: which colors need dark mode variants

### 8. Border Visibility
- Borders become more important in dark mode (low contrast surfaces)
- Border color strategy: subtle separators vs. structural borders
- Input field borders: increased contrast requirements

### 9. System Color Compatibility
- CSS prefers-color-scheme media query implementation
- CSS custom property switching approach (one root vs. data-theme attribute)
- System font stack dark mode considerations
- OS-level color handling (Android/iOS dark mode APIs)

## Output Format
1. Dark mode color mapping table (full token set)
2. Semantic token CSS custom property adjustments (ready to paste)
3. Implementation approach recommendation (CSS variables + data-theme pattern)
4. Testing checklist (12 things to verify before shipping dark mode)`,
    category: 'design',
    tags: ['dark-mode', 'theming', 'css', 'color-system', 'design-system'],
    difficulty: 'advanced',
    useCase: 'Use when adding dark mode to an existing product or designing a token system that must support both themes from day one.',
    authorUsername: 'promptarchitect',
    likes: 178,
    saves: 122,
    copies: 450,
    views: 2800,
    trendScore: 178*2 + 122*3 + 450 + 2800*0.2,
    trendingScore: 178*2 + 122*3 + 450 + 2800*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Guide',
    whyTrending: 'Dark mode is now expected by users but implemented poorly by most teams. This prompt gives a systematic, token-based approach that avoids the most common mistakes.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 450,
    estimatedTokens: 980,
    model: 'gpt-4o',
    createdAt: '2024-12-10',
  },
  {
    id: 'lib-des-009',
    title: 'Dashboard Information Architecture Designer',
    slug: 'dashboard-information-architecture-designer',
    description: 'Designs the complete information architecture for a data-dense dashboard including content hierarchy, navigation, widget priority, and responsive strategy.',
    content: `You are a product designer specializing in data-dense dashboards for analytics, operations, and business intelligence products. Design the information architecture for the specified dashboard.

## Inputs
- Dashboard name: [DASHBOARD_NAME]
- User role: [USER_ROLE] (e.g., "Sales Manager", "DevOps Engineer", "Marketing Director")
- Data types available: [DATA_TYPES_AVAILABLE]
- Primary user goals: [PRIMARY_USER_GOALS] (what decisions does the user make with this dashboard?)
- Decision frequency: [DECISION_FREQUENCY] (e.g., "real-time monitoring", "weekly review", "ad-hoc analysis")

## Architecture Design Sections

### 1. Above-the-Fold Content Hierarchy
Define exactly what the user sees without scrolling on a 1440px display:
- Primary metric(s): the single most important number/status (position: top-left or center)
- Secondary metrics: supporting context (4-6 KPI tiles)
- Primary action: what can they do from this view?
- Temporal context: what time period is represented and how is it displayed?
- Alert surface: how are anomalies or threshold breaches surfaced immediately?

### 2. Sidebar / Navigation Structure
- Primary navigation items (5-7 max) with icons and labels
- Secondary navigation (sub-items, collapsible sections)
- Utility navigation (settings, help, account) placement
- Active state and current location indicators
- Collapsed state for space efficiency

### 3. Widget Priority Matrix
For each data type available, rate and assign:
| Widget | Importance (1-5) | Frequency of Reference | Position Zone | Expandable? |
|---|---|---|---|---|
(Cover all data types provided)

### 4. Drill-Down Patterns
- Level 1 (summary): what aggregation is shown?
- Level 2 (segment): how does the user break down by dimension?
- Level 3 (detail): row-level or event-level access
- Navigation between levels: breadcrumb or back button?
- URL/state persistence for deep links

### 5. Filter and Segmentation UI
- Global filters (affect entire dashboard): date range, team, region
- Local filters (affect individual widgets): placement, interaction model
- Filter state visibility: how does the user know what's currently filtered?
- Saved filter sets: yes/no and implementation approach
- Filter as navigation vs. overlay panel

### 6. Empty and Loading States
For each widget type:
- Loading state: skeleton shape, timing, transition to data
- Empty state (no data): message, action, illustration direction
- Error state: message, retry action, support path
- Partial data state: what to show when some data is missing

### 7. Responsive Collapse Strategy
- 1440px → 1024px: which widgets collapse or reorder?
- 1024px → 768px: what goes to a drawer or tab?
- Mobile (375px): is a mobile view needed? What is the minimum viable dashboard?
- Priority order for collapse: which widgets are removed last?

## Output Format
1. Wireframe description (text-based layout for each viewport)
2. Navigation tree (ASCII hierarchy)
3. Content priority table (Widget | Zone | Viewport Visibility)
4. 3 key information architecture principles specific to this dashboard`,
    category: 'design',
    tags: ['dashboard', 'information-architecture', 'data-visualization', 'product-design'],
    difficulty: 'advanced',
    useCase: 'Use at the start of a dashboard design project to establish structure before any visual design begins.',
    authorUsername: 'agentdesigner',
    likes: 398,
    saves: 264,
    copies: 1020,
    views: 6400,
    trendScore: 398*2 + 264*3 + 1020 + 6400*0.2,
    trendingScore: 398*2 + 264*3 + 1020 + 6400*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '18 min',
    outputType: 'Architecture',
    whyTrending: 'Dashboard design fails most often at the IA level, not the visual level. This prompt forces the right structure before a single chart is placed.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 1020,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-18',
  },
  {
    id: 'lib-des-010',
    title: 'Onboarding Flow Experience Designer',
    slug: 'onboarding-flow-experience-designer',
    description: 'Designs a complete first-run onboarding experience with flow map, step specs, personalization questions, and milestone moments.',
    content: `You are a product designer with expertise in activation flows and new user experience. Design a first-run onboarding experience that gets users to their "aha moment" as fast as possible.

## Inputs
- Product: [PRODUCT]
- Product category: [PRODUCT_CATEGORY]
- Key activation action: [KEY_ACTIVATION_ACTION] (e.g., "first report created", "first message sent", "first project published")
- User skill level: [USER_SKILL_LEVEL] (beginner / intermediate / expert)

## Onboarding Design Sections

### 1. Onboarding Flow Map (5-7 steps maximum)
For each step:
- Step number and name
- User goal at this step
- Product goal at this step
- Time to complete (seconds/minutes)
- Can skip? (yes/no + consequences of skipping)
- Success condition (how do we know this step is done?)

### 2. Progress Indicator Design
- Indicator type: steps/dots/progress bar/checklist (recommend with rationale)
- Position: top / sidebar / bottom
- Label strategy: numbered ("Step 3 of 6") vs. descriptive ("Setting up your workspace")
- Completion animation: what happens when progress advances?

### 3. Per-Step Content Specification
For each step, define:
- **Headline**: clear, benefit-oriented (max 8 words)
- **Body copy**: what the user needs to know (max 30 words)
- **Primary CTA**: button label and action
- **Skip option**: label and where skipped users go
- **Helper content**: tooltip, video thumbnail, or example (if needed)

### 4. Personalization Questions (maximum 3)
Design 3 questions that help personalize the experience without feeling like a survey:
- Question text (conversational, not form-like)
- Input type (single select / multi-select / free text)
- Why we ask this (and what changes based on the answer)
- Skip behavior

### 5. First-Use Empty State
Design the empty state the user lands on after completing onboarding:
- Illustration direction (style, subject, emotional tone)
- Headline and body copy
- Primary action (the first thing they should do)
- Sample data or demo mode option (yes/no with rationale)

### 6. Milestone Celebration Moments
Identify 3 moments in the first week where the user achieves something worth celebrating:
- Trigger: what action or condition triggers the celebration?
- Celebration type: confetti / toast / badge / email / in-app card
- Message: headline + 1-line copy
- Next step: what does the celebration prompt them to do?

### 7. Skip-and-Return Strategy
- Where are skipped items tracked?
- How is the user reminded to complete skipped steps?
- After how many days does the re-engagement prompt fire?
- What is the re-engagement message?

## Output Format
1. Step-by-step flow spec (structured per section above)
2. Copy suggestions for every screen (headline + body + CTA)
3. Flow map as ASCII diagram
4. Activation metric: what is the measurable outcome that proves this onboarding worked?`,
    category: 'design',
    tags: ['onboarding', 'activation', 'product-design', 'user-experience', 'ux'],
    difficulty: 'intermediate',
    useCase: 'Use when designing a new product onboarding, A/B testing onboarding variants, or diagnosing low activation rates.',
    authorUsername: 'agentdesigner',
    likes: 212,
    saves: 144,
    copies: 580,
    views: 3300,
    trendScore: 212*2 + 144*3 + 580 + 3300*0.2,
    trendingScore: 212*2 + 144*3 + 580 + 3300*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Flow',
    whyTrending: 'Onboarding is the highest-leverage design surface. This prompt ensures every step has a clear goal, copy, and skip path before any visual design starts.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 580,
    estimatedTokens: 920,
    model: 'gpt-4o',
    createdAt: '2024-11-28',
  },
  {
    id: 'lib-des-011',
    title: 'Landing Page Visual Hierarchy Planner',
    slug: 'landing-page-visual-hierarchy-planner',
    description: 'Plans the visual hierarchy of a high-converting landing page including focal point sequence, CTA placement, social proof positioning, and mobile scroll experience.',
    content: `You are a conversion-focused designer who has designed and A/B-tested landing pages with measurable revenue impact. Plan the visual hierarchy for a high-converting landing page.

## Inputs
- Product: [PRODUCT]
- Hero message: [HERO_MESSAGE] (your primary value proposition)
- Target visitor: [TARGET_VISITOR] (who lands here and what do they already know?)
- Conversion goal: [CONVERSION_GOAL] (e.g., "email signup", "free trial start", "demo booking")

## Visual Hierarchy Plan

### 1. Above-the-Fold Composition
- Layout pattern: F-pattern vs. Z-pattern (recommend based on content type with rationale)
- Left-right balance: what is on the left vs. right in the hero?
- Hero image/illustration: describe exactly what visual supports the headline and why
- Headline: position, size, weight, max character count
- Subheadline: position relative to headline, purpose
- Primary CTA: position, size, color weight, label recommendation
- Trust signal placement (if any): logo strip, testimonial snippet, or stat

### 2. Focal Point Sequence
Map the eye's natural path through the page:
- **1st focal point**: where the eye lands first (0.3 seconds) and why
- **2nd focal point**: where attention moves next and the narrative it carries
- **3rd focal point**: the action point — what the eye sees before the first CTA
- **Below-fold continuation**: how does scrolling feel? Is there scroll momentum or friction?

### 3. Color Weight Usage to Guide Attention
- Primary action color: used exclusively for the main CTA (what color and why)
- Secondary color: used for secondary actions or highlights
- Background color strategy: contrast zones to separate sections
- What NOT to put in accent color: keep it scarce and meaningful

### 4. CTA Button Placement and Prominence
- Above-fold CTA: position, size, padding, label
- Mid-page CTA: placement trigger (after what content block?) and variant label
- Bottom-page CTA: final conversion push — what context surrounds it?
- Sticky CTA: yes/no with rationale

### 5. Social Proof Positioning
- Logo strip: placement (above or below hero?) with rationale
- Testimonials: card vs. quote style, position in page flow
- Statistics/metrics: when to use numbers as visual anchors
- Case study references: where in the page flow they earn trust

### 6. Whitespace Strategy
- Section padding: generous vs. tight (match to brand personality)
- Line-height and paragraph width for readability
- Breathing room around CTAs: minimum space to isolate the action
- Mobile whitespace reduction strategy

### 7. Mobile Scroll Experience
- Hero stack order on mobile (image above or below text?)
- Section compression or elimination for mobile
- Sticky element behavior on mobile (header CTA, chat)
- Thumb-zone CTA positioning (bottom 1/3 of screen)

## Output Format
1. Annotated layout description for desktop and mobile
2. Hierarchy rules (7 principles specific to this page)
3. Anti-patterns to avoid (5 common mistakes for this type of landing page)
4. A/B test ideas (3 hierarchy elements worth testing first)`,
    category: 'design',
    tags: ['landing-page', 'conversion', 'visual-hierarchy', 'cro', 'design'],
    difficulty: 'beginner',
    useCase: 'Use before building or redesigning a landing page to establish hierarchy rules that give developers and copywriters clear guidance.',
    authorUsername: 'agentdesigner',
    likes: 87,
    saves: 58,
    copies: 230,
    views: 1400,
    trendScore: 87*2 + 58*3 + 230 + 1400*0.2,
    trendingScore: 87*2 + 58*3 + 230 + 1400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'Landing page hierarchy is more science than art. This prompt gives teams a repeatable, conversion-aware design process.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'agentdesigner',
    uses: 230,
    estimatedTokens: 840,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-12-18',
  },
  {
    id: 'lib-des-012',
    title: 'Icon System Design Guidelines',
    slug: 'icon-system-design-guidelines',
    description: 'Creates comprehensive icon design guidelines covering grid structure, stroke system, animation specs, naming conventions, and export requirements.',
    content: `You are a visual designer specializing in icon systems for digital products. Create comprehensive icon design guidelines for a consistent, scalable icon library.

## Inputs
- Product: [PRODUCT]
- Visual style: [VISUAL_STYLE] (e.g., "outlined with rounded caps", "filled geometric", "duotone", "hand-drawn")
- Grid size: [GRID_SIZE] (e.g., 24px, 20px, 16px)
- Target platform: [TARGET_PLATFORM] (web, iOS, Android, cross-platform)

## Icon Guidelines Sections

### 1. Grid Structure and Keyline Geometry
- Canvas size and safe area padding (e.g., 24px canvas, 2px padding = 20px content area)
- Keyline shapes: circle, square, horizontal rectangle, vertical rectangle (with exact dimensions on grid)
- Optical correction zones: where do icons need to break the grid slightly to feel balanced?
- Alignment guide: top/bottom/left/right baseline rules

### 2. Stroke Width Rationale
- Base stroke width at [GRID_SIZE] (e.g., 1.5px)
- Stroke scaling at smaller sizes (16px, 12px) — does stroke thin or stay constant?
- Stroke cap style: round / square (justify choice)
- Stroke join style: round / miter / bevel (justify choice)
- Exception rule: when to use filled shapes instead of strokes

### 3. Corner Radius System
- Outer corner radius (convex corners): value and how it relates to brand radius system
- Inner corner radius (concave corners): ratio relationship to outer radius
- Radius exceptions: geometric shapes that must stay sharp
- At small sizes: when to reduce radius to preserve readability

### 4. Optical Sizing Adjustments
- What changes between 24px, 20px, 16px, and 12px versions:
  - Stroke weight
  - Detail removal
  - Corner radius
  - Overall form simplification
- Rules for when to redesign vs. scale the master

### 5. Perspective and Depth Rules
- Flat vs. isometric: declare the rule
- Shadow usage: none / subtle drop shadow only in specific contexts
- Layering and cutout approach (if duotone or two-layer style)
- 3D or skeuomorphic elements: allowed/not allowed

### 6. Color Usage in Icons
- Monochrome first: all icons must work in single color
- currentColor inheritance rule (SVG)
- Accent layer usage (duotone second color: opacity and color)
- Contextual colors: when can an icon be inherently colored (e.g., status icons)?
- Background usage: icons on colored backgrounds — maintain contrast

### 7. Animation Specs for Interactive Icons
- Which icon states have animation: hover, active, toggle
- Animation type per state: rotate, morph, fill, bounce
- Duration and easing per animation type
- Reduced motion fallback: opacity transition at same duration

### 8. Naming Convention
- Format: \`[namespace]-[category]-[name]-[variant]\`
- Namespace: product or library prefix
- Category examples: action, navigation, status, social, media
- Variant suffixes: -filled, -outlined, -sm, -lg
- Example names for 10 common icons

### 9. File Format and Export Requirements
- SVG optimization requirements (remove IDs, title, desc; normalize stroke to path?)
- React component generation approach (SVGR or similar)
- Sprite sheet vs. individual file delivery
- PNG fallback sizes and when they're needed
- Figma export settings

### 10. Common Mistake Examples
Describe 5 specific mistakes icon designers make in this style, with visual description of the wrong approach and the correct approach.`,
    category: 'design',
    tags: ['icons', 'design-system', 'visual-design', 'svg', 'guidelines'],
    difficulty: 'intermediate',
    useCase: 'Use when establishing a new icon library, onboarding a new icon designer, or auditing consistency across an existing icon set.',
    authorUsername: 'agentdesigner',
    likes: 119,
    saves: 78,
    copies: 310,
    views: 1800,
    trendScore: 119*2 + 78*3 + 310 + 1800*0.2,
    trendingScore: 119*2 + 78*3 + 310 + 1800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'Guidelines',
    whyTrending: 'Icon consistency is one of the most visible design quality signals. This prompt gives designers and contributors a single source of truth.',
    bestFor: ['Claude'],
    author: 'agentdesigner',
    uses: 310,
    estimatedTokens: 950,
    model: 'gpt-4o',
    createdAt: '2025-01-05',
  },
  {
    id: 'lib-des-013',
    title: 'Typography Scale and Pairing System',
    slug: 'typography-scale-and-pairing-system',
    description: 'Creates a complete typography system with font selection rationale, size scale, responsive adjustments, and CSS custom properties.',
    content: `You are a typographic designer who creates typography systems for digital products ranging from developer tools to consumer apps. Create a complete, production-ready typography system.

## Inputs
- Product type: [PRODUCT_TYPE]
- Brand personality: [BRAND_PERSONALITY] (e.g., "technical and precise", "editorial and editorial", "friendly and approachable", "bold and energetic")
- Platform: [PLATFORM] (web / mobile / print / cross-platform)

## Typography System Sections

### 1. Display / Heading Font Selection
- Font name: (provide 1 premium recommendation + 1 free Google Fonts alternative)
- Why it fits this brand personality: cultural associations, historical context, technical characteristics
- Available weights and which to license/use: (minimum 2, maximum 4)
- Character set coverage: does it support required languages?
- Fallback stack: system font fallback sequence

### 2. Body Font Pairing
- Font name: (must create sufficient contrast with display font)
- Why this pairing works: proportion contrast, personality complement, historical compatibility
- Optimal body font size: (with rationale — not just "16px is standard")
- Line-height recommendation: (ratio, e.g., 1.6 for reading, 1.4 for UI)
- Letter-spacing at body size: (positive, negative, or 0 — with rationale)
- Paragraph width: optimal character count per line (55-75 characters) and CSS max-width

### 3. Monospace Font (for code, data, technical contexts)
- Font name recommendation (free and premium options)
- When to use: code blocks, numbers in tables, terminal output, keyboard shortcuts
- Size adjustment: monospace fonts often need +1px to match optical size of body font

### 4. Size Scale
Provide the complete scale with rem values (base 16px) and use cases:

| Name | rem | px | Line-height | Letter-spacing | Use case |
|------|-----|----|-------------|----------------|---------|
| xs | 0.75rem | 12px | ... | ... | captions, labels |
| sm | 0.875rem | 14px | ... | ... | secondary body, UI labels |
| md | 1rem | 16px | ... | ... | primary body |
| lg | 1.125rem | 18px | ... | ... | large body, intro text |
| xl | 1.25rem | 20px | ... | ... | H4, card titles |
| 2xl | 1.5rem | 24px | ... | ... | H3 |
| 3xl | 1.875rem | 30px | ... | ... | H2 |
| 4xl | 2.25rem | 36px | ... | ... | H1 |
| 5xl | 3rem | 48px | ... | ... | Display, hero |

### 5. Weight Hierarchy
- H1-H2: weight recommendation (700 or 800?) and rationale
- H3-H4: weight (600?) and rationale
- Body strong/bold: weight (500 vs 600?) — why not 700 for body?
- Body regular: 400 — any exceptions?
- Disabled/secondary: 400 but reduced opacity vs. 300 weight — which approach?

### 6. Color Application Per Level
- H1-H2: color token reference
- H3-H4: color token reference
- Body primary: color token reference
- Body secondary: color token reference
- Captions/labels: color token reference
- Links: color token + visited + hover states

### 7. Responsive Adjustment Strategy
- Fluid typography approach (clamp() function) vs. fixed breakpoint steps
- Which sizes change on mobile and by how much?
- Minimum readable size on mobile: never below this
- Display/5xl handling on mobile: fold into 4xl or use clamp?

### 8. Accessibility Minimum Sizes
- Body text: 16px minimum (WCAG guidance)
- Input labels: never below 14px
- Captions: 12px is the floor — usage guidelines
- Zoom text reflow: does the scale work at 200% zoom?

## Output Format
1. Type scale table (complete, with all columns filled)
2. CSS custom properties (copy-paste ready :root block)
3. Usage examples: 3 annotated UI examples showing the system in context
4. Pairing specimen: sample paragraph showing heading + body + caption in flow`,
    category: 'design',
    tags: ['typography', 'design-system', 'type-scale', 'css', 'fonts'],
    difficulty: 'beginner',
    useCase: 'Use when starting a new product design, establishing a design system, or when typography feels inconsistent across a product.',
    authorUsername: 'agentdesigner',
    likes: 76,
    saves: 52,
    copies: 195,
    views: 1100,
    trendScore: 76*2 + 52*3 + 195 + 1100*0.2,
    trendingScore: 76*2 + 52*3 + 195 + 1100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'System',
    whyTrending: 'Typography is the invisible backbone of readability. A proper scale saves teams hundreds of inconsistent sizing decisions down the line.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'agentdesigner',
    uses: 195,
    estimatedTokens: 880,
    model: 'claude-3-5-sonnet',
    createdAt: '2025-01-08',
  },
  {
    id: 'lib-des-014',
    title: 'Error and Empty State Design Patterns',
    slug: 'error-and-empty-state-design-patterns',
    description: 'Designs the complete error and empty state system for a product covering 8 state types with copy templates, recovery paths, and design principles.',
    content: `You are a UX designer who specializes in edge case and empty state design — the screens most teams leave until the last sprint and then rush. Design the complete error and empty state system for the specified product.

## Inputs
- Product category: [PRODUCT_CATEGORY]
- Key user actions: [KEY_USER_ACTIONS] (the actions users take most frequently — errors here have highest impact)

## State Design Sections

For each of the following state types, provide:
- **Headline**: empathetic, non-technical, 5-8 words
- **Body explanation**: what happened and why (max 25 words, plain language)
- **Primary action CTA**: what the user should do next (action verb)
- **Secondary action**: alternative path or support link
- **Illustration direction**: style, subject, emotional tone (not prescriptive, but evocative)
- **Emotional tone**: how should the user feel after reading this?
- **Recovery path**: exactly what happens when the user takes the primary action?

### State 1: 404 — Page Not Found
Common causes: broken links, deleted content, mistyped URL. Design this to feel helpful, not punishing.

### State 2: 500 — Server Error
Common causes: backend failure, timeout. User is not at fault. Design must rebuild trust.

### State 3: Empty List (First Use)
The user has reached a list or collection that has no items yet. This is the highest-leverage empty state — it's an activation opportunity.

### State 4: Empty Search Results
The user searched for something and got nothing. Design should help them recover, not just display "0 results."

### State 5: Permission Denied
The user tried to access something they can't. Design must explain why and give a path forward (request access, contact admin, upgrade).

### State 6: Network Error / Offline
The user has lost connectivity. Design must indicate the state clearly and auto-recover gracefully.

### State 7: Loading Failed
Content started loading but failed partway. Different from a server error — partial context may exist.

### State 8: Form Validation Errors
Inline and summary error states. These are the most frequent errors and most often designed poorly.
Include:
- Inline error (per field): position, color, icon, copy pattern
- Summary error (top of form): when to use, what to list
- Accessible announcement: aria-live region strategy

## Design Principles for This Product
Based on the product category provided, write 5 design principles that should guide all state design decisions for this product. Examples: "Errors should give users something to do, not just something to read" or "Never show technical error codes without a human explanation."

## Output Format
1. State inventory table (State | Headline | Primary Action | Tone | Recovery)
2. Full copy templates for each state (all fields filled with realistic example copy)
3. 5 design principles for this product's state system
4. Implementation checklist (12 things to verify before shipping each state)`,
    category: 'design',
    tags: ['error-states', 'empty-states', 'ux', 'microcopy', 'edge-cases'],
    difficulty: 'beginner',
    useCase: 'Use when building a new product, auditing UX completeness before launch, or improving the quality of error experiences that are driving support tickets.',
    authorUsername: 'agentdesigner',
    likes: 93,
    saves: 64,
    copies: 255,
    views: 1600,
    trendScore: 93*2 + 64*3 + 255 + 1600*0.2,
    trendingScore: 93*2 + 64*3 + 255 + 1600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: false,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '12 min',
    outputType: 'System',
    whyTrending: 'Error and empty states are the most neglected UX surfaces. Getting them right reduces support volume and increases trust.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'agentdesigner',
    uses: 255,
    estimatedTokens: 860,
    model: 'gpt-4o',
    createdAt: '2024-12-22',
  },
  {
    id: 'lib-des-015',
    title: 'Design-to-Dev Handoff Specification',
    slug: 'design-to-dev-handoff-specification',
    description: 'Creates a complete design handoff document including component inventory, spacing annotations, animation specs, asset exports, and responsive behavior.',
    content: `You are a design systems lead who has improved handoff quality and reduced developer rework at multiple product teams. Create a complete, structured design handoff specification document.

## Inputs
- Feature or screen: [FEATURE_OR_SCREEN]
- Design description: [DESIGN_DESCRIPTION] (describe the screen, component, or feature as you would to a colleague)
- Tech stack: [TECH_STACK] (e.g., "React + Tailwind CSS + Framer Motion", "Next.js + CSS Modules")

## Handoff Document Sections

### 1. Component Inventory
List every UI element in the design:
| Component | Source (design system or custom) | Notes | Interactive? |
|---|---|---|---|
(List every button, input, card, icon, badge, etc.)

### 2. Spacing Annotations
For every significant spacing relationship:
- Describe the element pair and the space between them
- Provide value in pixels
- Provide the design token equivalent (e.g., "space-4 = 16px")
- Flag any spacing that deviates from the 4px grid and explain why

### 3. Interactive State List
For every interactive element, list:
| Element | Default | Hover | Focus | Active | Disabled | Loading |
|---|---|---|---|---|---|---|
(Visual description per state: what changes — color? scale? border? icon?)

### 4. Animation Specifications
For every animation in the design:
| Element | Trigger | Property Animated | Duration | Easing | Notes |
|---|---|---|---|---|---|
- Provide exact cubic-bezier values for custom easings
- Note any staggered animation sequences (children animate after parent)
- Spring animation parameters if applicable (stiffness, damping)

### 5. Asset Export Requirements
For every image, illustration, or icon:
| Asset Name | Type | Sizes Needed | Format | Naming Convention |
|---|---|---|---|---|
- SVG optimization notes (which attributes to preserve, which to strip)
- PNG fallback specifications (when needed and at what DPR)
- Image compression targets (KB limits for specific assets)

### 6. Responsive Behavior at Breakpoints
For each defined breakpoint (375px, 768px, 1024px, 1280px, 1440px):
- What layout changes? (describe the shift)
- What elements appear / disappear?
- What changes in size (font, spacing, container)?
- What interactions change (hover becomes tap, tooltip becomes tooltip-bottom)?

### 7. Edge Case Handling Instructions
List minimum 5 edge cases the developer must account for:
- Long text overflow (max characters before truncation with ellipsis)
- Missing image fallback (placeholder design)
- Zero/null data states
- RTL layout considerations (if applicable)
- Slow network / loading state (if not covered in states section)

### 8. Open Questions for Developer
List any design decisions that are underspecified or require developer input:
- Technical feasibility questions
- Performance tradeoff decisions
- Platform-specific behavior questions
- Questions about data availability

## Output Format
1. Complete structured handoff document (all sections above)
2. Component checklist (copy-paste ready for Linear/Jira ticket)
3. Review sign-off template (designer confirms before engineering starts)`,
    category: 'design',
    tags: ['handoff', 'design-to-dev', 'specifications', 'component', 'workflow'],
    difficulty: 'intermediate',
    useCase: 'Use before every significant engineering sprint to reduce back-and-forth, rework, and implementation surprises.',
    authorUsername: 'promptarchitect',
    likes: 156,
    saves: 106,
    copies: 440,
    views: 2700,
    trendScore: 156*2 + 106*3 + 440 + 2700*0.2,
    trendingScore: 156*2 + 106*3 + 440 + 2700*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Document',
    whyTrending: 'Poor design handoff is one of the most cited engineering frustrations. This prompt forces completeness before a single line of code is written.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 440,
    estimatedTokens: 1000,
    model: 'claude-3-5-sonnet',
    createdAt: '2025-01-10',
  },
]
