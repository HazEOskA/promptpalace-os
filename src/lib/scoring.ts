export function calcTrendScore(likes: number, saves: number, copies: number, views: number): number {
  return likes * 2 + saves * 3 + copies + views * 0.2
}

export type TrendLabel = 'VIRAL' | 'HOT' | 'RISING' | 'STEADY'

export function getTrendLabel(score: number): TrendLabel {
  if (score >= 2000) return 'VIRAL'
  if (score >= 800) return 'HOT'
  if (score >= 300) return 'RISING'
  return 'STEADY'
}

export function getTrendColor(label: TrendLabel): string {
  const colors: Record<TrendLabel, string> = {
    VIRAL: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    HOT: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    RISING: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
    STEADY: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
  }
  return colors[label]
}

// Sort an array of items by trendScore descending (items must have trendScore field)
export function sortByTrend<T extends { trendScore?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => (b.trendScore ?? 0) - (a.trendScore ?? 0))
}
