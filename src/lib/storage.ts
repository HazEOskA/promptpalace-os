const KEYS = {
  saved: 'pp_saved_ids',
  liked: 'pp_liked_ids',
  submitted: 'pp_submitted_prompts',
  workflows: 'pp_workflows',
} as const

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or unavailable — fail silently
  }
}

export function getSavedIds(): string[] { return read<string[]>(KEYS.saved, []) }
export function savePrompt(id: string): void {
  const ids = getSavedIds()
  if (!ids.includes(id)) write(KEYS.saved, [...ids, id])
}
export function unsavePrompt(id: string): void {
  write(KEYS.saved, getSavedIds().filter(i => i !== id))
}
export function isPromptSaved(id: string): boolean { return getSavedIds().includes(id) }

export function getLikedIds(): string[] { return read<string[]>(KEYS.liked, []) }
export function likePrompt(id: string): void {
  const ids = getLikedIds()
  if (!ids.includes(id)) write(KEYS.liked, [...ids, id])
}
export function unlikePrompt(id: string): void {
  write(KEYS.liked, getLikedIds().filter(i => i !== id))
}
export function isPromptLiked(id: string): boolean { return getLikedIds().includes(id) }

// Generic for workflows/submissions
export function getWorkflows<T>(): T[] { return read<T[]>(KEYS.workflows, []) }
export function saveWorkflow<T extends { id: string }>(workflow: T): void {
  const existing = getWorkflows<T>()
  const idx = existing.findIndex(w => w.id === workflow.id)
  if (idx >= 0) existing[idx] = workflow
  else existing.push(workflow)
  write(KEYS.workflows, existing)
}
export function deleteWorkflow(id: string): void {
  write(KEYS.workflows, getWorkflows<{id: string}>().filter(w => w.id !== id))
}
