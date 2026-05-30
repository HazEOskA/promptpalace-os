import { SKILLS, type Skill } from '../data/skills'

export class SkillRegistry {
  private skills: Map<string, Skill>
  private activeIds: Set<string>

  constructor() {
    this.skills = new Map(SKILLS.map(s => [s.id, { ...s }]))
    this.activeIds = new Set(SKILLS.filter(s => s.active).map(s => s.id))
  }

  getAll(): Skill[] {
    return Array.from(this.skills.values())
  }

  getActive(): Skill[] {
    return Array.from(this.skills.values()).filter(s => this.activeIds.has(s.id))
  }

  toggle(id: string): void {
    const skill = this.skills.get(id)
    if (!skill) return
    if (this.activeIds.has(id)) {
      this.activeIds.delete(id)
      this.skills.set(id, { ...skill, active: false })
    } else {
      this.activeIds.add(id)
      this.skills.set(id, { ...skill, active: true })
    }
  }

  isActive(id: string): boolean {
    return this.activeIds.has(id)
  }

  getByCategory(category: Skill['category']): Skill[] {
    return this.getAll().filter(s => s.category === category)
  }

  buildSystemPrompt(): string {
    const active = this.getActive()
    if (active.length === 0) return 'No skills activated.'

    return `# Active Skills

${active
  .map(
    s => `## ${s.icon} ${s.name}
Model: ${s.model}
Capabilities: ${s.capabilities.join(', ')}
Power Level: ${s.powerLevel}/5`
  )
  .join('\n\n')}

Execute with these skills active. Route requests to the appropriate skill based on content type.`
  }
}
