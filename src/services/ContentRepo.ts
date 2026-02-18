import data from '@/assets/json/content.json'
import { Project, type ProjectItem } from '@/models/Project'
import type { Skills } from '@/models/Skills'
import { Tool } from '@/models/Tool'
import { shiftLightness } from '@/utils/color'
import { snakeCase } from 'change-case'

export class ContentRepo {
  readonly projects: Project[]
  readonly skills: Skills
  private static _instance: ContentRepo

  constructor() {
    this.projects = data.projects
      .filter((p) => p.enabled ?? true)
      .map((p) => {
        const name = p.name
        const category = p.category as Project.Category
        const color = p.color
        const palette: Project.Palette = {
          default: color,
          darker: shiftLightness(color, -0.25),
          darkest: shiftLightness(color, -0.75),
          lighter: shiftLightness(color, 0.25),
        }

        return {
          id: snakeCase(name),
          tags: Project.tags(name, category, p.tools, palette),
          palette,
          ...p,
        } as Project
      })

    this.skills = {
      langs: data.skills.langs.map((l) => Tool.tag(l)),
      tools: data.skills.tools.map((t) => Tool.tag(t)),
    }
  }

  static get instance(): ContentRepo {
    if (!ContentRepo._instance) {
      ContentRepo._instance = new ContentRepo()
    }
    return ContentRepo._instance!
  }

  get items(): ProjectItem[] {
    return this.projects as ProjectItem[]
  }
}
