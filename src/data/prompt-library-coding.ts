import type { Prompt } from './prompts'

export const CODING_PROMPTS: Prompt[] = [
  {
    id: 'lib-cod-001',
    title: 'TypeScript Strict Mode Migration Analyzer',
    slug: 'typescript-strict-mode-migration-analyzer',
    description: 'Generates a prioritized migration plan from loose TypeScript to strict mode with risk ratings.',
    content: `You are a senior TypeScript engineer specializing in codebase migrations. Analyze the following JavaScript or loosely-typed TypeScript codebase and produce a migration plan to strict TypeScript.

## Input
Codebase description or paste files: [CODE_OR_DESCRIPTION]

## Analysis Required
1. **Type Coverage Audit**: Identify all files/functions with implicit any, missing return types, untyped parameters
2. **Risk Matrix**: Rate each area HIGH/MEDIUM/LOW based on breaking change probability
3. **Migration Sequence**: Ordered list of files to migrate, starting from utilities → data layer → UI
4. **Compiler Options**: Exact tsconfig.json changes with explanations for each flag
5. **Common Patterns**: Map existing loose patterns to strict equivalents (e.g., casting, optional chaining, type guards)
6. **Testing Strategy**: How to validate each migration step without breaking runtime behavior

## Constraints
- Do not suggest rewriting working logic during migration
- Flag external library typing gaps separately (DefinitelyTyped vs inline types)
- Identify places where \`as unknown as T\` is an acceptable temporary escape hatch

## Output Format
- Migration roadmap table (File | Risk | Priority | Estimated effort)
- Top 10 quick wins (can be migrated in < 30 min each)
- Blocker list with proposed resolutions
- Final tsconfig.json snippet`,
    category: 'coding',
    tags: ['typescript', 'migration', 'strict', 'refactoring'],
    difficulty: 'intermediate',
    useCase: 'Use when upgrading a legacy JavaScript or weakly-typed TypeScript project to strict mode.',
    authorUsername: 'builderai',
    likes: 312,
    saves: 189,
    copies: 876,
    views: 4200,
    trendScore: 312*2 + 189*3 + 876 + 4200*0.2,
    trendingScore: 312*2 + 189*3 + 876 + 4200*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Plan',
    whyTrending: 'TypeScript strict mode adoption is accelerating. Teams use this to de-risk large migrations without breaking production.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 876,
    estimatedTokens: 650,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-02',
  },
  {
    id: 'lib-cod-002',
    title: 'React Custom Hook Architecture Designer',
    slug: 'react-custom-hook-architecture-designer',
    description: 'Designs a reusable custom React hook with full TypeScript types, tests, and usage documentation.',
    content: `You are a senior React engineer with deep expertise in hook patterns and state management. Design a production-grade custom React hook based on the following specification.

## Hook Specification
- Hook name: [HOOK_NAME] (e.g., useDataFetch, useDebounce, useLocalStorage)
- Purpose: [WHAT_IT_DOES]
- Inputs/parameters: [PARAMETERS]
- Expected return value: [RETURN_VALUE]
- Side effects: [SIDE_EFFECTS_IF_ANY]

## Deliverables

### 1. TypeScript Interface
Define all input/output types with JSDoc comments explaining each field.

### 2. Hook Implementation
Full implementation including:
- Proper dependency arrays for useEffect/useCallback/useMemo
- Cleanup functions for subscriptions, timers, event listeners
- Error boundary integration pattern
- Loading/error/data state pattern (if async)
- AbortController for cancellable async operations

### 3. Edge Case Handling
- Stale closure prevention strategies
- Race condition prevention (if async)
- Memory leak prevention
- SSR compatibility check (window/document guards)

### 4. Unit Tests
Write tests using React Testing Library + Vitest:
- Happy path test
- Error state test
- Cleanup/unmount test
- Re-render with new props test

### 5. Usage Example
Full component example showing the hook in context with proper error handling.

## Constraints
- No external state management dependencies
- Must work with React 18 concurrent mode
- Follow the Rules of Hooks strictly
- Export both the hook and its TypeScript types`,
    category: 'coding',
    tags: ['react', 'hooks', 'typescript', 'testing'],
    difficulty: 'intermediate',
    useCase: 'Use when building shared logic that multiple React components need to consume.',
    authorUsername: 'builderai',
    likes: 241,
    saves: 155,
    copies: 720,
    views: 3600,
    trendScore: 241*2 + 155*3 + 720 + 3600*0.2,
    trendingScore: 241*2 + 155*3 + 720 + 3600*0.2,
    trending: true,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Code',
    whyTrending: 'React hook patterns are consistently in demand. This prompt outputs production-ready hooks with tests included.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 720,
    estimatedTokens: 700,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-05',
  },
  {
    id: 'lib-cod-003',
    title: 'REST API Design and OpenAPI Spec Generator',
    slug: 'rest-api-design-openapi-spec-generator',
    description: 'Produces a complete OpenAPI 3.1 spec with endpoint design, auth patterns, and error schemas.',
    content: `You are a backend API architect with 10+ years designing REST APIs for high-traffic applications. Design a production-ready REST API for the following requirements.

## API Requirements
- Service name: [SERVICE_NAME]
- Core domain entities: [ENTITIES] (e.g., users, orders, products)
- Authentication method: [AUTH_TYPE] (JWT / API Key / OAuth2)
- Expected traffic: [TRAFFIC_ESTIMATE]
- Primary consumers: [WEB_APP / MOBILE_APP / THIRD_PARTY]

## Design Output

### 1. Resource Hierarchy
Map all entities to URL structures following REST conventions:
- Plural nouns for collections (/users, /orders)
- Nested resources with clear ownership (/users/:id/orders)
- Action endpoints where REST verbs fall short (/orders/:id/cancel)

### 2. Endpoint Definitions (for each endpoint)
- Method + path
- Path/query/body parameters with types
- Success response (status code + schema)
- Error responses (400, 401, 403, 404, 429, 500)
- Rate limiting headers

### 3. Authentication & Authorization
- Token validation middleware spec
- Role-based access control matrix (endpoint × role)
- API key scoping strategy

### 4. OpenAPI 3.1 YAML
Complete spec including:
- Info block with version and contact
- Security schemes
- All paths with request/response schemas
- Reusable components (schemas, responses, parameters)

### 5. Pagination Strategy
- Cursor-based pagination for large collections
- Response envelope: { data, meta: { cursor, hasMore, total } }

## Constraints
- No breaking changes pattern (versioning strategy included)
- Must handle idempotency for POST/PUT operations
- Include webhook design if applicable`,
    category: 'coding',
    tags: ['api', 'openapi', 'rest', 'backend', 'architecture'],
    difficulty: 'intermediate',
    useCase: 'Use when starting a new backend service or documenting an existing API for consumers.',
    authorUsername: 'promptarchitect',
    likes: 289,
    saves: 198,
    copies: 654,
    views: 3900,
    trendScore: 289*2 + 198*3 + 654 + 3900*0.2,
    trendingScore: 289*2 + 198*3 + 654 + 3900*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'API design upfront saves weeks of refactoring. This prompt generates contract-first specs teams can build against immediately.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 654,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-08',
  },
  {
    id: 'lib-cod-004',
    title: 'Database Schema Design and Query Optimizer',
    slug: 'database-schema-design-query-optimizer',
    description: 'Designs normalized database schemas with indexes, relationships, and optimized query patterns.',
    content: `You are a database architect specializing in PostgreSQL and relational database design. Design an optimized schema for the following application.

## Application Context
- App type: [APP_TYPE] (e.g., SaaS, marketplace, social platform)
- Core features: [FEATURE_LIST]
- Expected scale: [USERS] users, [RECORDS] records per table
- Read/write ratio: [READ_HEAVY / WRITE_HEAVY / BALANCED]
- Database: PostgreSQL 15+

## Schema Design Process

### 1. Entity Relationship Analysis
- List all entities and their attributes
- Identify relationships (1:1, 1:N, M:N)
- Normalize to 3NF minimum, with justified denormalization exceptions

### 2. Table Definitions
For each table provide:
\`\`\`sql
CREATE TABLE table_name (
  -- All columns with types, constraints, defaults
  -- Primary key strategy (UUID vs serial, with justification)
  -- Foreign key constraints with ON DELETE behavior
  -- Check constraints
  -- Created_at / updated_at timestamps with triggers
);
\`\`\`

### 3. Index Strategy
- Primary key indexes (automatic)
- Foreign key indexes (often missed)
- Composite indexes for common query patterns
- Partial indexes for filtered queries
- GIN indexes for JSONB or full-text search columns

### 4. Common Query Patterns
Write optimized SQL for the top 5 queries:
- List with filters and pagination
- Aggregations with GROUP BY
- Joins across multiple tables
- Full-text search (if applicable)
- Analytics/reporting query

### 5. Migration Script
Sequenced migration files (001_init.sql, 002_indexes.sql, etc.)

### 6. Performance Considerations
- Partitioning strategy if table will exceed 10M rows
- Connection pooling settings recommendation
- Materialized view opportunities`,
    category: 'coding',
    tags: ['postgresql', 'database', 'schema', 'sql', 'architecture'],
    difficulty: 'advanced',
    useCase: 'Use at the start of a new project or when optimizing an existing schema for scale.',
    authorUsername: 'builderai',
    likes: 198,
    saves: 143,
    copies: 512,
    views: 2800,
    trendScore: 198*2 + 143*3 + 512 + 2800*0.2,
    trendingScore: 198*2 + 143*3 + 512 + 2800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Code',
    whyTrending: 'Database design mistakes are expensive to fix later. This prompt produces migration-ready schemas with index strategies included.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 512,
    estimatedTokens: 850,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-28',
  },
  {
    id: 'lib-cod-005',
    title: 'Code Review Checklist and PR Analyzer',
    slug: 'code-review-checklist-pr-analyzer',
    description: 'Performs a structured code review with security, performance, and maintainability findings.',
    content: `You are a senior engineer performing a thorough code review. Analyze the following diff or code and produce a structured review report.

## Code to Review
\`\`\`
[PASTE_DIFF_OR_CODE]
\`\`\`

## Context
- PR title/description: [PR_DESCRIPTION]
- Tech stack: [STACK]
- PR size: [LINES_CHANGED]

## Review Dimensions

### 1. Correctness (CRITICAL)
- Logic errors that will cause bugs in production
- Off-by-one errors, null pointer risks
- Async/await misuse (missing await, unhandled rejections)
- Race conditions in concurrent code

### 2. Security (CRITICAL)
- SQL injection, XSS, CSRF vectors
- Hardcoded credentials or API keys
- Insecure direct object references
- Missing input validation/sanitization
- Authentication bypass possibilities

### 3. Performance
- N+1 query patterns
- Missing indexes on foreign keys
- Synchronous operations that should be async
- Memory leaks (event listeners, subscriptions not cleaned up)
- Unnecessary re-renders in React

### 4. Maintainability
- Functions > 50 lines (suggest breakdown)
- Magic numbers/strings without constants
- Missing error handling
- Inadequate test coverage for new code
- Breaking changes to public API without versioning

### 5. Code Style & Standards
- Naming convention violations
- Dead code
- Duplicate code (DRY violations)
- Missing TypeScript types

## Output Format
For each finding:
- **Severity**: CRITICAL | HIGH | MEDIUM | LOW | NITPICK
- **Location**: File:line
- **Issue**: Clear description
- **Suggestion**: Specific fix with code snippet if possible

End with: Overall assessment (Approve / Request Changes / Needs Discussion) + 3 positive observations.`,
    category: 'coding',
    tags: ['code-review', 'security', 'best-practices', 'typescript'],
    difficulty: 'intermediate',
    useCase: 'Use before merging any significant pull request to catch bugs, security issues, and maintainability problems.',
    authorUsername: 'promptarchitect',
    likes: 334,
    saves: 221,
    copies: 980,
    views: 5200,
    trendScore: 334*2 + 221*3 + 980 + 5200*0.2,
    trendingScore: 334*2 + 221*3 + 980 + 5200*0.2,
    trending: true,
    featured: true,
    agentReady: true,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '10 min',
    outputType: 'Report',
    whyTrending: 'Code review quality directly impacts production stability. This structured approach catches critical security and logic bugs systematically.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 980,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-01',
  },
  {
    id: 'lib-cod-006',
    title: 'Vitest and Testing Library Test Suite Writer',
    slug: 'vitest-testing-library-test-suite-writer',
    description: 'Writes comprehensive unit and integration tests for React components and utility functions.',
    content: `You are a test engineer specializing in frontend testing with Vitest and React Testing Library. Write a comprehensive test suite for the following component or function.

## Code to Test
\`\`\`typescript
[PASTE_CODE_TO_TEST]
\`\`\`

## Testing Requirements

### Test Coverage Goals
- **Unit tests**: All exported functions and their edge cases
- **Integration tests**: Component rendering, user interactions, state changes
- **Accessibility tests**: ARIA attributes, keyboard navigation, screen reader text

### Test Structure for Each Test File

1. **Setup and Mocks**
   - Mock external dependencies (API calls, localStorage, timers)
   - Create reusable render helpers with providers
   - Define test data factories

2. **Rendering Tests**
   - Default render with minimal props
   - Each significant prop combination
   - Conditional rendering paths

3. **Interaction Tests**
   - Click, type, focus, blur events
   - Form submission with valid/invalid data
   - Keyboard navigation (Tab, Enter, Escape, Arrow keys)

4. **Async Tests**
   - Loading states while data fetches
   - Success state after data loads
   - Error state on failure
   - Cancellation/unmount during async operations

5. **Edge Cases**
   - Empty/null/undefined prop values
   - Maximum input lengths
   - Rapid repeated interactions (debounce testing)

### Test Quality Rules
- Use \`userEvent\` over \`fireEvent\` for interactions
- Query by role/label/text (not test-id as last resort)
- No implementation details (no state inspection)
- Each test must be independent (no shared mutable state)
- Use \`describe\` blocks to group related tests

## Output
Complete test file with import statements, all tests, and a coverage summary listing what's tested vs what's intentionally excluded.`,
    category: 'coding',
    tags: ['testing', 'vitest', 'react', 'unit-tests'],
    difficulty: 'intermediate',
    useCase: 'Use when adding test coverage to a React component or utility function without tests.',
    authorUsername: 'builderai',
    likes: 187,
    saves: 132,
    copies: 489,
    views: 2600,
    trendScore: 187*2 + 132*3 + 489 + 2600*0.2,
    trendingScore: 187*2 + 132*3 + 489 + 2600*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Code',
    whyTrending: 'Testing is the most skipped step in fast-moving teams. This prompt removes friction by writing the tests for you.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 489,
    estimatedTokens: 700,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-25',
  },
  {
    id: 'lib-cod-007',
    title: 'Next.js App Router Architecture Planner',
    slug: 'nextjs-app-router-architecture-planner',
    description: 'Designs a complete Next.js 14 App Router project structure with server components and data fetching patterns.',
    content: `You are a Next.js expert who has shipped production apps using the App Router. Design the architecture for the following application.

## Application Requirements
- App type: [APP_DESCRIPTION]
- Authentication: [YES/NO + provider if yes]
- Data sources: [DATABASE / CMS / API]
- Key pages/features: [LIST_PAGES_AND_FEATURES]
- Team size: [SOLO / SMALL_TEAM / LARGE_TEAM]

## Architecture Design

### 1. Route Structure (app/ directory)
Map every route with:
- Static vs dynamic vs catch-all segments
- Layout files and their scope
- Loading.tsx and error.tsx placement
- Route groups for shared layouts

\`\`\`
app/
  (marketing)/      # Route group — no URL segment
    page.tsx        # Landing page
    layout.tsx      # Marketing layout
  (dashboard)/
    layout.tsx      # Auth-protected layout
    dashboard/
      page.tsx
      loading.tsx
  api/
    ...
\`\`\`

### 2. Server vs Client Component Split
For each major component, specify:
- **Server Component**: data fetching, no interactivity
- **Client Component**: state, event handlers, browser APIs
- **Boundary placement**: where 'use client' directives go
- **Props serialization**: what can/cannot cross the boundary

### 3. Data Fetching Strategy
- Route-level fetch with caching options (no-store, force-cache, revalidate)
- Server Actions for mutations
- Optimistic updates pattern
- Error handling with try/catch in Server Components

### 4. Performance Optimizations
- Static generation candidates (generateStaticParams)
- Streaming with Suspense boundaries
- Image optimization with next/image
- Font optimization strategy

### 5. Middleware
- Authentication middleware pattern
- Internationalization routing
- A/B testing hook

## Output
Full directory tree + key file contents for layout.tsx, page.tsx, and one data-fetching pattern.`,
    category: 'coding',
    tags: ['nextjs', 'react', 'architecture', 'server-components'],
    difficulty: 'advanced',
    useCase: 'Use when starting a new Next.js project or migrating from Pages Router to App Router.',
    authorUsername: 'builderai',
    likes: 267,
    saves: 178,
    copies: 634,
    views: 3700,
    trendScore: 267*2 + 178*3 + 634 + 3700*0.2,
    trendingScore: 267*2 + 178*3 + 634 + 3700*0.2,
    trending: true,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'App Router has a steep learning curve. This prompt outputs a complete architecture decision tree before writing a single line.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 634,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-11-10',
  },
  {
    id: 'lib-cod-008',
    title: 'Python FastAPI Endpoint Generator',
    slug: 'python-fastapi-endpoint-generator',
    description: 'Generates production-ready FastAPI endpoints with Pydantic models, dependency injection, and async patterns.',
    content: `You are a Python backend engineer specializing in FastAPI and async Python. Generate production-grade API endpoints for the following requirements.

## Endpoint Requirements
- Feature: [FEATURE_NAME]
- HTTP methods needed: [GET/POST/PUT/DELETE/PATCH]
- Input data: [DESCRIBE_INPUT]
- Output data: [DESCRIBE_OUTPUT]
- Auth required: [YES/NO]
- Database: [PostgreSQL with SQLAlchemy / MongoDB / None]

## Code to Generate

### 1. Pydantic Models
\`\`\`python
# Request model with validation
class CreateItemRequest(BaseModel):
    # All fields with types, validators, Field() metadata

# Response model (never expose sensitive fields)
class ItemResponse(BaseModel):
    # Fields to return to client

# Database model (SQLAlchemy if applicable)
class ItemDB(Base):
    # ORM model
\`\`\`

### 2. Service Layer
Business logic separated from routing:
- Async database operations with proper session handling
- Error handling with custom exceptions
- Logging with structured JSON logs

### 3. Router/Endpoints
\`\`\`python
router = APIRouter(prefix="/items", tags=["items"])

@router.post("/", response_model=ItemResponse, status_code=201)
async def create_item(
    body: CreateItemRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ItemResponse:
    # Implementation
\`\`\`

### 4. Dependency Injection
- Database session factory
- Authentication dependency
- Rate limiting dependency

### 5. Tests
pytest-asyncio tests for each endpoint:
- Success cases with assert on response body
- Validation error cases (422)
- Auth failure cases (401/403)
- Database error handling

## Constraints
- Use async/await throughout — no sync I/O in endpoints
- Always use response_model to prevent data leaks
- HTTP status codes must be semantically correct
- Include type hints on every function`,
    category: 'coding',
    tags: ['python', 'fastapi', 'api', 'backend', 'async'],
    difficulty: 'intermediate',
    useCase: 'Use when adding new API endpoints to a FastAPI service or bootstrapping a new Python backend.',
    authorUsername: 'promptarchitect',
    likes: 156,
    saves: 98,
    copies: 412,
    views: 2200,
    trendScore: 156*2 + 98*3 + 412 + 2200*0.2,
    trendingScore: 156*2 + 98*3 + 412 + 2200*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Code',
    whyTrending: 'FastAPI is the fastest-growing Python framework. This prompt generates the full service layer, not just route stubs.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'promptarchitect',
    uses: 412,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-20',
  },
  {
    id: 'lib-cod-009',
    title: 'CI/CD Pipeline Designer for GitHub Actions',
    slug: 'cicd-pipeline-designer-github-actions',
    description: 'Creates optimized GitHub Actions workflows with caching, parallel jobs, and environment-specific deployments.',
    content: `You are a DevOps engineer specializing in GitHub Actions and CI/CD pipelines. Design a complete CI/CD pipeline for the following project.

## Project Details
- Repository type: [MONOREPO / SINGLE_APP]
- Tech stack: [STACK]
- Test suite: [UNIT / INTEGRATION / E2E or ALL]
- Deployment target: [Vercel / AWS / GCP / Railway / Fly.io]
- Environments: [staging + production / or list custom]
- Team size: [SOLO / TEAM]

## Pipeline Design

### 1. Workflow Triggers
Specify exact trigger conditions:
- On push to main → deploy to production
- On pull request → run checks only
- On push to develop → deploy to staging
- Manual dispatch with environment selection

### 2. Job Architecture
Design parallel job graph:
\`\`\`yaml
jobs:
  lint:         # Fast fail — 1-2 min
  type-check:   # Parallel with lint
  unit-tests:   # After lint passes
  e2e-tests:    # After unit tests, uses preview URL
  deploy:       # After all checks pass
\`\`\`

### 3. Caching Strategy
- Node modules cache (package-lock.json hash key)
- Build artifact cache between jobs
- Docker layer caching if applicable
- Test result caching (skip unchanged modules)

### 4. Complete YAML Output
Full .github/workflows/ci.yml and deploy.yml:
- Exact action versions (pinned to SHA for security)
- Environment secrets usage
- Branch protection rule recommendations
- Status check requirements

### 5. Performance Optimizations
- Matrix strategy for cross-environment tests
- Fail-fast configuration
- Concurrency groups (cancel in-progress on new push)
- Self-hosted runner recommendations if applicable

### 6. Security
- OIDC token-based deployment (no long-lived secrets)
- Dependency audit on every PR
- Secret scanning workflow`,
    category: 'coding',
    tags: ['github-actions', 'cicd', 'devops', 'deployment', 'automation'],
    difficulty: 'intermediate',
    useCase: 'Use when setting up or optimizing CI/CD for a project to reduce build times and improve deployment reliability.',
    authorUsername: 'builderai',
    likes: 143,
    saves: 97,
    copies: 378,
    views: 1900,
    trendScore: 143*2 + 97*3 + 378 + 1900*0.2,
    trendingScore: 143*2 + 97*3 + 378 + 1900*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Code',
    whyTrending: 'CI/CD setup is often copied from outdated tutorials. This prompt generates security-hardened, optimized pipelines from scratch.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 378,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-18',
  },
  {
    id: 'lib-cod-010',
    title: 'Zustand State Management Architecture Builder',
    slug: 'zustand-state-management-architecture-builder',
    description: 'Designs scalable Zustand stores with slices, selectors, middleware, and persistence patterns.',
    content: `You are a React state management expert. Design a scalable Zustand state architecture for the following application feature.

## Feature Requirements
- Feature name: [FEATURE_NAME]
- State shape needed: [DESCRIBE_DATA]
- Actions needed: [LIST_ACTIONS]
- Persistence required: [YES/NO]
- Shared with other features: [YES/NO - list features]

## Architecture Output

### 1. Store Slice Design
\`\`\`typescript
// State interface
interface FeatureState {
  // All state fields with types
  // Status fields: 'idle' | 'loading' | 'success' | 'error'
}

// Actions interface
interface FeatureActions {
  // All action signatures
}
\`\`\`

### 2. Store Implementation
\`\`\`typescript
export const useFeatureStore = create<FeatureState & FeatureActions>()(
  devtools(
    persist(
      immer((set, get) => ({
        // Initial state
        // Action implementations using immer for immutable updates
      })),
      { name: 'feature-storage', partialize: (state) => ({ ... }) }
    ),
    { name: 'FeatureStore' }
  )
)
\`\`\`

### 3. Selector Pattern
Memoized selectors to prevent unnecessary re-renders:
\`\`\`typescript
// Fine-grained subscriptions
export const useFeatureData = () => useFeatureStore(state => state.data)
export const useFeatureStatus = () => useFeatureStore(state => state.status)
// Computed selectors
export const useFeatureDerivedValue = () => useFeatureStore(
  useShallow(state => expensiveComputation(state))
)
\`\`\`

### 4. Async Action Pattern
Standardized async operations with loading/error handling:
- Optimistic updates pattern
- Error recovery strategy
- Request deduplication

### 5. Testing Strategy
How to test Zustand stores in isolation without React.

## Constraints
- Use immer for all state mutations
- Never directly mutate state outside of set()
- Selectors must be stable references (prevent render loops)
- Persistence must handle schema migrations`,
    category: 'coding',
    tags: ['zustand', 'react', 'state-management', 'typescript'],
    difficulty: 'intermediate',
    useCase: 'Use when designing or refactoring state management for a React feature with complex async flows.',
    authorUsername: 'builderai',
    likes: 178,
    saves: 121,
    copies: 445,
    views: 2400,
    trendScore: 178*2 + 121*3 + 445 + 2400*0.2,
    trendingScore: 178*2 + 121*3 + 445 + 2400*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Code',
    whyTrending: 'Zustand replaced Redux for many teams. This prompt applies enterprise-grade patterns (immer, devtools, selectors) to Zustand stores.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 445,
    estimatedTokens: 650,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-22',
  },
  {
    id: 'lib-cod-011',
    title: 'Docker Multi-Stage Build Optimizer',
    slug: 'docker-multi-stage-build-optimizer',
    description: 'Creates minimal, secure Docker images with multi-stage builds, layer caching, and security hardening.',
    content: `You are a container security and optimization expert. Create an optimized Dockerfile for the following application.

## Application Details
- Language/framework: [LANGUAGE_AND_FRAMEWORK]
- Application type: [WEB_SERVER / WORKER / CLI / API]
- Base image preference: [Alpine / Debian-slim / Distroless]
- Build tools needed: [LIST_BUILD_DEPENDENCIES]
- Runtime secrets: [HOW_SECRETS_ARE_INJECTED]

## Dockerfile Design

### 1. Multi-Stage Strategy
Stage 1 - Dependencies: Install and cache all dependencies
Stage 2 - Builder: Compile/transpile/bundle
Stage 3 - Production: Minimal runtime with only necessary artifacts

### 2. Layer Optimization
- Order layers from least to most frequently changed
- Group RUN commands to minimize layers
- Use .dockerignore to exclude dev files, git history, tests

### 3. Security Hardening
- Non-root user creation and usage
- Read-only filesystem where possible
- Minimal base image (distroless or alpine)
- No package manager in production stage
- COPY --chown instead of chown after copy
- Remove build secrets with --mount=type=secret

### 4. Complete Dockerfile
\`\`\`dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Builder
FROM node:20-alpine AS builder
# ... build steps

# Stage 3: Production
FROM node:20-alpine AS runner
# ... minimal production image
\`\`\`

### 5. docker-compose.yml
Development compose file with:
- Volume mounts for hot reload
- Environment variable handling
- Health checks
- Resource limits

### 6. Build Commands
Exact commands for building, tagging, and pushing with size estimates.

## Security Checklist
- [ ] No secrets in ENV or ARG
- [ ] Non-root USER
- [ ] HEALTHCHECK defined
- [ ] Minimal attack surface`,
    category: 'coding',
    tags: ['docker', 'devops', 'containers', 'security', 'deployment'],
    difficulty: 'intermediate',
    useCase: 'Use when containerizing an application for the first time or when existing Docker images are too large or insecure.',
    authorUsername: 'builderai',
    likes: 134,
    saves: 89,
    copies: 356,
    views: 1800,
    trendScore: 134*2 + 89*3 + 356 + 1800*0.2,
    trendingScore: 134*2 + 89*3 + 356 + 1800*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Code',
    whyTrending: 'Most Docker images are 3-10x larger than they need to be. This prompt produces minimal, secure multi-stage builds automatically.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 356,
    estimatedTokens: 700,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-15',
  },
  {
    id: 'lib-cod-012',
    title: 'GraphQL Schema and Resolver Designer',
    slug: 'graphql-schema-resolver-designer',
    description: 'Designs a type-safe GraphQL schema with resolvers, dataloaders, and N+1 prevention patterns.',
    content: `You are a GraphQL architect with expertise in building production APIs. Design a complete GraphQL schema for the following use case.

## Requirements
- Domain: [DOMAIN_DESCRIPTION]
- Key queries needed: [LIST_QUERIES]
- Key mutations needed: [LIST_MUTATIONS]
- Real-time needs: [SUBSCRIPTIONS_YES/NO]
- Backend: [Node.js with Prisma / Apollo Server / etc.]

## Schema Design

### 1. Type Definitions
\`\`\`graphql
type Query {
  # All query fields with arguments
}

type Mutation {
  # All mutation fields
}

# All types with fields, nullability decisions (important: be explicit)
type User {
  id: ID!
  email: String!
  # Non-nullable = required, Nullable = optional
}

# Input types for mutations
input CreateUserInput {
  # Fields
}

# Connection types for pagination
type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
}
\`\`\`

### 2. Resolver Implementation
For each type and field:
\`\`\`typescript
const resolvers: Resolvers = {
  Query: {
    user: async (_, { id }, { dataSources, user }) => {
      // Auth check
      // Dataloader call (not direct DB query)
      // Error handling
    }
  }
}
\`\`\`

### 3. DataLoader Pattern (N+1 Prevention)
\`\`\`typescript
// Batch function for each entity type
const userLoader = new DataLoader<string, User>(async (ids) => {
  const users = await db.user.findMany({ where: { id: { in: [...ids] } } })
  return ids.map(id => users.find(u => u.id === id) ?? new Error(\`User \${id} not found\`))
})
\`\`\`

### 4. Authentication & Authorization
- Context population from JWT
- Field-level authorization with directives
- Depth limiting and complexity analysis

### 5. Error Handling
- Custom error classes (AuthError, NotFoundError, ValidationError)
- Error masking in production
- Error logging`,
    category: 'coding',
    tags: ['graphql', 'api', 'backend', 'typescript', 'dataloader'],
    difficulty: 'advanced',
    useCase: 'Use when building a GraphQL API from scratch or adding new types to an existing schema.',
    authorUsername: 'promptarchitect',
    likes: 145,
    saves: 98,
    copies: 389,
    views: 2100,
    trendScore: 145*2 + 98*3 + 389 + 2100*0.2,
    trendingScore: 145*2 + 98*3 + 389 + 2100*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Code',
    whyTrending: 'GraphQL without DataLoaders causes N+1 issues in production. This prompt designs the full resolver tree with batching built in.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 389,
    estimatedTokens: 900,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-12',
  },
  {
    id: 'lib-cod-013',
    title: 'Error Handling and Logging Architecture',
    slug: 'error-handling-logging-architecture',
    description: 'Designs a centralized error handling system with structured logging, monitoring hooks, and user-facing messages.',
    content: `You are a reliability engineer focused on observability and error management. Design a comprehensive error handling and logging architecture for the following application.

## Application Context
- App type: [FRONTEND / BACKEND / FULL_STACK]
- Tech stack: [STACK]
- Logging destination: [Console / Datadog / Sentry / CloudWatch]
- Error monitoring: [Sentry / LogRocket / Custom]

## Error Architecture

### 1. Error Taxonomy
Design a hierarchy of custom error classes:
\`\`\`typescript
// Base application error
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number,
    public isOperational: boolean = true,
    public context?: Record<string, unknown>
  ) { super(message) }
}

// Domain-specific errors
class ValidationError extends AppError {}
class AuthenticationError extends AppError {}
class NotFoundError extends AppError {}
class ExternalServiceError extends AppError {}
\`\`\`

### 2. Global Error Handler (Backend)
Express/Fastify middleware that:
- Distinguishes operational vs programmer errors
- Sends appropriate HTTP status + safe error message to client
- Logs full error context server-side (never to client)
- Triggers alerts for critical errors

### 3. Frontend Error Boundary
React error boundary component with:
- Fallback UI for each error severity
- Error reporting to monitoring service
- Recovery action (retry, reload, contact support)

### 4. Structured Log Format
\`\`\`json
{
  "timestamp": "ISO8601",
  "level": "error|warn|info|debug",
  "service": "api",
  "traceId": "uuid",
  "userId": "if-authenticated",
  "event": "descriptive.event.name",
  "message": "human readable",
  "context": {},
  "error": { "message": "", "stack": "", "code": "" }
}
\`\`\`

### 5. Monitoring Alerting Rules
- Critical (page immediately): 5xx rate > 1%, auth failures spike
- High (alert within 1h): Elevated 4xx, slow queries
- Low (daily digest): Warning logs, deprecation notices`,
    category: 'coding',
    tags: ['error-handling', 'logging', 'monitoring', 'architecture'],
    difficulty: 'advanced',
    useCase: 'Use when building production applications that need systematic error tracking and structured observability.',
    authorUsername: 'promptarchitect',
    likes: 123,
    saves: 87,
    copies: 334,
    views: 1700,
    trendScore: 123*2 + 87*3 + 334 + 1700*0.2,
    trendingScore: 123*2 + 87*3 + 334 + 1700*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '10 min',
    outputType: 'Framework',
    whyTrending: 'Unstructured error handling is the leading cause of debugging nightmares. This gives teams a complete observability blueprint.',
    bestFor: ['Claude'],
    author: 'promptarchitect',
    uses: 334,
    estimatedTokens: 750,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-10',
  },
  {
    id: 'lib-cod-014',
    title: 'Monorepo Workspace Setup Guide',
    slug: 'monorepo-workspace-setup-guide',
    description: 'Configures a Turborepo monorepo with shared packages, build pipeline, and workspace conventions.',
    content: `You are a build systems engineer. Configure a production-ready monorepo for the following organization.

## Monorepo Requirements
- Apps to include: [LIST_APPS] (e.g., web, api, mobile)
- Shared packages needed: [LIST] (e.g., ui-components, types, utils, config)
- Package manager: [pnpm / npm / yarn]
- Build tool: Turborepo
- Languages: [TypeScript / JavaScript / both]

## Configuration Output

### 1. Directory Structure
\`\`\`
monorepo/
  apps/
    web/              # Next.js app
    api/              # Express/Fastapi
  packages/
    ui/               # Shared components
    types/            # Shared TypeScript types
    config/           # ESLint, TS, Tailwind configs
    utils/            # Shared utilities
  turbo.json
  package.json        # Root workspace config
\`\`\`

### 2. turbo.json Pipeline
\`\`\`json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "lint": { "outputs": [] },
    "test": { "outputs": [] },
    "dev": { "cache": false, "persistent": true }
  }
}
\`\`\`

### 3. Shared Package Setup
Each shared package needs:
- package.json with proper exports field (ESM + CJS)
- TypeScript config extending base config
- Build script producing dist/

### 4. TypeScript Path Aliases
Configure paths in tsconfig for clean imports:
\`\`\`typescript
import { Button } from '@company/ui'
import type { User } from '@company/types'
\`\`\`

### 5. Developer Experience
- Workspace commands (run all tests, build all)
- VS Code workspace settings
- Changeset configuration for versioning
- Pre-commit hooks with lint-staged

## Constraints
- All packages must be publishable independently
- Circular dependencies must be prevented
- Shared configs in packages/config, consumed everywhere`,
    category: 'coding',
    tags: ['monorepo', 'turborepo', 'typescript', 'architecture', 'devtools'],
    difficulty: 'advanced',
    useCase: 'Use when scaling from a single app to multiple interconnected apps that share code.',
    authorUsername: 'builderai',
    likes: 167,
    saves: 112,
    copies: 423,
    views: 2300,
    trendScore: 167*2 + 112*3 + 423 + 2300*0.2,
    trendingScore: 167*2 + 112*3 + 423 + 2300*0.2,
    trending: false,
    featured: false,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT'],
    estimatedTime: '15 min',
    outputType: 'Framework',
    whyTrending: 'Monorepos are standard at scale but hard to set up correctly. This prompt outputs a complete Turborepo configuration.',
    bestFor: ['Claude'],
    author: 'builderai',
    uses: 423,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-08',
  },
  {
    id: 'lib-cod-015',
    title: 'Performance Audit and Optimization Plan',
    slug: 'performance-audit-optimization-plan',
    description: 'Audits a web application for performance bottlenecks and produces a prioritized optimization roadmap.',
    content: `You are a web performance engineer. Conduct a thorough performance audit for the following application and produce an actionable optimization plan.

## Application Details
- App type: [SPA / SSR / SSG / MPA]
- Framework: [FRAMEWORK]
- Current metrics (if known): [LCP / FID / CLS / TTFB]
- User complaint: [DESCRIBE_SLOW_PART]
- Bundle size (if known): [SIZE]

## Audit Dimensions

### 1. Core Web Vitals Analysis
For each metric, explain:
- What causes it to be poor in this app type
- How to measure it (Chrome DevTools, Lighthouse, Web Vitals JS)
- Target thresholds (Good / Needs Improvement / Poor)

### 2. JavaScript Bundle Analysis
- How to run bundle analyzer (webpack-bundle-analyzer or vite-bundle-visualizer)
- Top 5 bundle size culprits to investigate
- Code splitting strategies (route-based, feature-based)
- Dynamic import opportunities
- Tree-shaking failures (often from CommonJS imports)

### 3. Render Performance
- React DevTools Profiler walkthrough
- Component re-render root causes
- Memo/useMemo/useCallback placement strategy
- Virtualization candidates (long lists > 100 items)

### 4. Network Optimization
- Critical resource preloading (<link rel="preload">)
- Image optimization checklist (WebP, AVIF, srcset, lazy loading)
- Font loading strategy (font-display: swap, preconnect)
- API response caching headers
- CDN configuration checklist

### 5. Prioritized Fix List
Rank all issues by: Impact (1-10) × Effort (1-10) = Priority Score

| Fix | Impact | Effort | Priority | Est. LCP improvement |
|-----|--------|--------|----------|---------------------|

### 6. Monitoring Setup
How to track these metrics in production (web-vitals + analytics).`,
    category: 'coding',
    tags: ['performance', 'optimization', 'web-vitals', 'react', 'bundle'],
    difficulty: 'intermediate',
    useCase: 'Use when users are complaining about slow page loads or when Lighthouse scores need improvement.',
    authorUsername: 'builderai',
    likes: 201,
    saves: 145,
    copies: 512,
    views: 2800,
    trendScore: 201*2 + 145*3 + 512 + 2800*0.2,
    trendingScore: 201*2 + 145*3 + 512 + 2800*0.2,
    trending: false,
    featured: true,
    agentReady: false,
    builderTool: true,
    modelCompatibility: ['Claude', 'ChatGPT', 'Gemini'],
    estimatedTime: '10 min',
    outputType: 'Report',
    whyTrending: 'Performance directly impacts conversion rates. This audit prompt gives teams a prioritized, measurable fix list.',
    bestFor: ['Claude', 'ChatGPT'],
    author: 'builderai',
    uses: 512,
    estimatedTokens: 800,
    model: 'claude-3-5-sonnet',
    createdAt: '2024-10-05',
  },
]
