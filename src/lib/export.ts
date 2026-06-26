import type { Prompt } from '../data/prompts'
import type { Workflow } from '../data/workflows'

export function exportPromptAsMarkdown(prompt: Prompt): string {
  return `# ${prompt.title}

> ${prompt.description}

**Category:** ${prompt.category}  
**Difficulty:** ${prompt.difficulty}  
**Model:** ${prompt.model}  
**Est. Tokens:** ~${prompt.estimatedTokens}  
**Tags:** ${prompt.tags.join(', ')}

---

## Prompt

\`\`\`
${prompt.content}
\`\`\`

---

*Exported from Agentic City OS — ${new Date().toLocaleDateString()}*
`
}

export function exportWorkflowAsMarkdown(workflow: Workflow): string {
  const steps = workflow.steps
    .map((s, i) => `### Step ${i + 1}: ${s.label}\n\n${s.description}\n\n**Type:** \`${s.type}\`  \n**Duration:** ~${s.duration}s`)
    .join('\n\n---\n\n')

  return `# Workflow: ${workflow.name}

> ${workflow.description}

**Category:** ${workflow.category}  
**Steps:** ${workflow.steps.length}  
**Tags:** ${workflow.tags.join(', ')}

---

## Execution Steps

${steps}

---

*Exported from Agentic City OS — ${new Date().toLocaleDateString()}*
`
}

export function downloadFile(content: string, filename: string, mimeType = 'text/markdown'): void {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function exportPrompt(prompt: Prompt): void {
  const content = exportPromptAsMarkdown(prompt)
  const filename = `${prompt.title.toLowerCase().replace(/\s+/g, '-')}.md`
  downloadFile(content, filename)
}

export function exportWorkflow(workflow: Workflow): void {
  const content = exportWorkflowAsMarkdown(workflow)
  const filename = `workflow-${workflow.name.toLowerCase().replace(/\s+/g, '-')}.md`
  downloadFile(content, filename)
}

export function exportContextSnapshot(messages: string[]): void {
  const content = `# Context Snapshot — ${new Date().toLocaleString()}

## Last ${messages.length} Messages

${messages.map((m, i) => `### Message ${i + 1}\n\n${m}`).join('\n\n---\n\n')}

---

*Agentic City OS Context Recovery Export*
`
  downloadFile(content, `context-snapshot-${Date.now()}.md`)
}
