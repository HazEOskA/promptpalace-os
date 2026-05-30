import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/index'
import { cn } from '../lib/utils'

interface FormData {
  title: string
  description: string
  content: string
  category: string
  tags: string
  difficulty: string
  modelCompatibility: string
  useCase: string
}

const INITIAL_FORM: FormData = {
  title: '',
  description: '',
  content: '',
  category: '',
  tags: '',
  difficulty: '',
  modelCompatibility: '',
  useCase: '',
}

const DIFFICULTY_OPTIONS = [
  { value: 'beginner',     label: '◉ Beginner' },
  { value: 'intermediate', label: '◈ Intermediate' },
  { value: 'advanced',     label: '◆ Advanced' },
]

export default function SubmitPromptPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {}
    if (!form.title.trim())       errs.title = 'Title is required'
    if (!form.description.trim()) errs.description = 'Description is required'
    if (!form.content.trim())     errs.content = 'Prompt content is required'
    if (!form.category)           errs.category = 'Please select a category'
    if (!form.difficulty)         errs.difficulty = 'Please select a difficulty'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const submission = {
      id: `sub-${Date.now()}`,
      ...form,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      modelCompatibility: form.modelCompatibility.split(',').map(m => m.trim()).filter(Boolean),
      submittedAt: new Date().toISOString(),
      status: 'pending',
    }

    try {
      const existing = JSON.parse(localStorage.getItem('pp_submitted_prompts') ?? '[]')
      localStorage.setItem('pp_submitted_prompts', JSON.stringify([...existing, submission]))
    } catch {
      // Storage unavailable — fail silently
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-emerald-500/30 bg-emerald-500/10"
          >
            ✓
          </div>
          <h1 className="text-2xl font-display font-black text-text-primary mb-3">Prompt Submitted!</h1>
          <p className="text-sm font-body text-text-secondary leading-relaxed max-w-sm mb-2">
            Your prompt has been submitted and will be reviewed before appearing in the library.
          </p>
          <p className="text-xs font-mono text-text-muted mb-8">
            All submitted prompts are reviewed before appearing in the library.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => { setForm(INITIAL_FORM); setSubmitted(false) }}
              className="pp-btn-secondary min-h-[42px] text-sm"
            >
              Submit Another
            </button>
            <Link to="/trending" className="pp-btn-primary min-h-[42px] text-sm">
              Browse Prompts →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">

      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl mb-8 p-7 sm:p-9 grid-bg border border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, transparent 60%)' }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-violet-400">⊹</span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Contribute</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black text-text-primary mb-2">
            Submit a <span className="text-gradient-violet">Prompt</span>
          </h1>
          <p className="text-sm text-text-secondary font-body leading-relaxed">
            Share your best prompts with the community. All submissions are reviewed before going live.
          </p>
        </div>
      </section>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div>
          <label className="pp-label block mb-1.5">
            Title <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={form.title}
            onChange={e => handleChange('title', e.target.value)}
            placeholder="e.g. Full-Stack Architecture Reviewer"
            className={cn('pp-input w-full min-h-[44px]', errors.title && 'border-rose-500/50 focus:border-rose-500')}
          />
          {errors.title && <p className="mt-1 text-xs font-mono text-rose-400">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="pp-label block mb-1.5">
            Description <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={form.description}
            onChange={e => handleChange('description', e.target.value)}
            placeholder="One sentence explaining what this prompt does"
            className={cn('pp-input w-full min-h-[44px]', errors.description && 'border-rose-500/50')}
          />
          {errors.description && <p className="mt-1 text-xs font-mono text-rose-400">{errors.description}</p>}
        </div>

        {/* Prompt content */}
        <div>
          <label className="pp-label block mb-1.5">
            Prompt Content <span className="text-rose-400">*</span>
          </label>
          <textarea
            value={form.content}
            onChange={e => handleChange('content', e.target.value)}
            placeholder="Paste your full prompt here…"
            rows={10}
            className={cn(
              'pp-input w-full font-mono text-xs leading-relaxed resize-y min-h-[200px]',
              errors.content && 'border-rose-500/50'
            )}
          />
          {errors.content && <p className="mt-1 text-xs font-mono text-rose-400">{errors.content}</p>}
          {form.content && (
            <p className="mt-1 text-[11px] font-mono text-text-muted">
              ~{Math.round(form.content.split(/\s+/).length * 1.3)} tokens
            </p>
          )}
        </div>

        {/* Category + Difficulty */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="pp-label block mb-1.5">
              Category <span className="text-rose-400">*</span>
            </label>
            <select
              value={form.category}
              onChange={e => handleChange('category', e.target.value)}
              className={cn(
                'pp-input w-full min-h-[44px] bg-bg-elevated appearance-none',
                errors.category && 'border-rose-500/50'
              )}
            >
              <option value="">Select…</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
            {errors.category && <p className="mt-1 text-xs font-mono text-rose-400">{errors.category}</p>}
          </div>

          <div>
            <label className="pp-label block mb-1.5">
              Difficulty <span className="text-rose-400">*</span>
            </label>
            <select
              value={form.difficulty}
              onChange={e => handleChange('difficulty', e.target.value)}
              className={cn(
                'pp-input w-full min-h-[44px] bg-bg-elevated appearance-none',
                errors.difficulty && 'border-rose-500/50'
              )}
            >
              <option value="">Select…</option>
              {DIFFICULTY_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {errors.difficulty && <p className="mt-1 text-xs font-mono text-rose-400">{errors.difficulty}</p>}
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="pp-label block mb-1.5">Tags</label>
          <input
            type="text"
            value={form.tags}
            onChange={e => handleChange('tags', e.target.value)}
            placeholder="react, typescript, architecture (comma-separated)"
            className="pp-input w-full min-h-[44px]"
          />
          <p className="mt-1 text-[11px] font-mono text-text-muted">Separate tags with commas</p>
        </div>

        {/* Model compatibility */}
        <div>
          <label className="pp-label block mb-1.5">Model Compatibility</label>
          <input
            type="text"
            value={form.modelCompatibility}
            onChange={e => handleChange('modelCompatibility', e.target.value)}
            placeholder="Claude 3.5, GPT-4o, Gemini (comma-separated)"
            className="pp-input w-full min-h-[44px]"
          />
        </div>

        {/* Use case */}
        <div>
          <label className="pp-label block mb-1.5">Use Case</label>
          <textarea
            value={form.useCase}
            onChange={e => handleChange('useCase', e.target.value)}
            placeholder="Who should use this prompt and when? (optional)"
            rows={3}
            className="pp-input w-full text-sm resize-none"
          />
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl bg-bg-elevated border border-border px-4 py-3">
          <p className="text-xs font-mono text-text-muted leading-relaxed">
            ◈ All submitted prompts are reviewed before appearing in the library. By submitting, you confirm this is original content or properly attributed.
          </p>
        </div>

        {/* Submit */}
        <button type="submit" className="w-full pp-btn-primary min-h-[48px] text-base">
          Submit Prompt →
        </button>
      </form>
    </div>
  )
}
