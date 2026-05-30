export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(n)
}

export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str
  return str.slice(0, maxLen) + '...'
}

export function relativeTime(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  return `${Math.floor(days / 30)}mo ago`
}

export function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / 200)
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 9)
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text)
}

export function trendingColor(score: number): string {
  if (score >= 90) return 'text-rose-400'
  if (score >= 75) return 'text-amber-400'
  if (score >= 60) return 'text-violet-400'
  return 'text-text-secondary'
}

export function stepColor(step: string): string {
  const map: Record<string, string> = {
    '0': 'step-0',
    '0.5': 'step-05',
    '1': 'step-1',
    '2': 'step-2',
  }
  return map[step] ?? 'step-1'
}

export function workflowStatusColor(status: string): string {
  const map: Record<string, string> = {
    idle: 'text-text-muted',
    running: 'text-amber-400',
    done: 'text-emerald-400',
    error: 'text-rose-400',
    skipped: 'text-text-muted',
  }
  return map[status] ?? 'text-text-muted'
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
