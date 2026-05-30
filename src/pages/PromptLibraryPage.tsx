import { useState, useMemo } from 'react'
import { PROMPTS, CATEGORIES, type PromptCategory, type Prompt } from '../data/prompts'
import { formatNumber, cn } from '../lib/utils'
import { exportPrompt } from '../lib/export'

export default function PromptLibraryPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<PromptCategory | 'all'>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return PROMPTS.filter(p => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchesCat = activeCategory === 'all' || p.category === activeCategory
      return matchesSearch && matchesCat
    })
  }, [search, activeCategory])

  const handleCopy = (p: Prompt) => {
    navigator.clipboard.writeText(p.content).catch(() => {})
    setCopiedId(p.id)
    setTimeout(() => setCopiedId(null), 1800)
  }

  const difficultyColor: Record<string, string> = {
    beginner: 'pp-badge-emerald',
    intermediate: 'pp-badge-amber',
    advanced: 'pp-badge-rose',
  }

  return (
    <div className="max-w-6xl mx-auto space-y-5 animate-slide-up">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <h2 className="pp-section-title text-xl">Prompt Library</h2>
          <p className="text-xs font-mono text-text-muted mt-0.5">{PROMPTS.length} production prompts · Click to expand</p>
        </div>
        <div className="pp-badge-violet text-xs">{filtered.length} results</div>
      </div>

      {/* Search + filters */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Search prompts, tags, categories..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="pp-input"
        />
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeCategory === 'all'
                ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                : 'bg-bg-elevated border border-border text-text-muted hover:text-text-secondary'
            )}
          >
            All ({PROMPTS.length})
          </button>
          {CATEGORIES.map(cat => {
            const count = PROMPTS.filter(p => p.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                  activeCategory === cat.id
                    ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                    : 'bg-bg-elevated border border-border text-text-muted hover:text-text-secondary'
                )}
              >
                {cat.label} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Prompt list */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted font-mono text-sm">
            No prompts found. Try a different search.
          </div>
        )}
        {filtered.map(p => (
          <div
            key={p.id}
            className="pp-card border border-border hover:border-border-strong transition-all duration-200"
          >
            {/* Prompt header */}
            <div
              className="flex items-start gap-4 cursor-pointer"
              onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="pp-badge-violet">{p.category}</span>
                  <span className={difficultyColor[p.difficulty]}>{p.difficulty}</span>
                  {p.trending && (
                    <span className="pp-badge-rose">🔥 trending</span>
                  )}
                </div>
                <h3 className="text-sm font-display font-semibold text-text-primary leading-tight">{p.title}</h3>
                <p className="text-xs text-text-secondary mt-1 font-body leading-relaxed line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] font-mono text-text-muted">
                  <span>↑ {formatNumber(p.uses)}</span>
                  <span>★ {formatNumber(p.saves)}</span>
                  <span className="pp-badge-cyan">{p.model}</span>
                  <span>~{p.estimatedTokens} tokens</span>
                  <span>@{p.author}</span>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5">
                <span className="text-text-muted text-xs font-mono">{expandedId === p.id ? '▲' : '▼'}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  onClick={() => setSearch(tag)}
                  className="text-[10px] font-mono bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted hover:text-violet-400 hover:border-violet-500/30 cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Expanded prompt content */}
            {expandedId === p.id && (
              <div className="mt-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="pp-label">PROMPT CONTENT</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(p)}
                      className={cn(
                        'text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-150',
                        copiedId === p.id
                          ? 'border-emerald-500/50 text-emerald-400 bg-emerald-900/20'
                          : 'border-border hover:border-violet-500/50 text-text-muted hover:text-violet-400'
                      )}
                    >
                      {copiedId === p.id ? '✓ Copied!' : '⎘ Copy'}
                    </button>
                    <button
                      onClick={() => exportPrompt(p)}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border border-border hover:border-cyan-500/50 text-text-muted hover:text-cyan-400 transition-all duration-150"
                    >
                      ↓ Export .md
                    </button>
                  </div>
                </div>
                <pre className="bg-bg-base border border-border rounded-lg p-4 text-[11px] font-mono text-text-secondary leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {p.content}
                </pre>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-2 mt-4 pt-3 border-t border-border">
              <button
                onClick={() => handleCopy(p)}
                className={cn(
                  'flex-1 sm:flex-none pp-btn-primary text-xs py-2',
                  copiedId === p.id && 'bg-emerald-600 hover:bg-emerald-600'
                )}
              >
                {copiedId === p.id ? '✓ Copied!' : '⎘ Copy Prompt'}
              </button>
              <button
                onClick={() => exportPrompt(p)}
                className="pp-btn-secondary text-xs py-2"
              >
                ↓ Export
              </button>
              <button
                onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                className="pp-btn-secondary text-xs py-2"
              >
                {expandedId === p.id ? 'Collapse' : 'Expand'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
