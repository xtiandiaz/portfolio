import data from '@/assets/json/content.json'
import { Project, type ProjectItem } from '@/models/Project'
import type { Skills } from '@/models/Skills'
import { shiftLightness } from '@/utils/color'
import { snakeCase } from 'change-case'

export class ContentRepo {
  readonly projects: Project[]
  readonly skills: Skills
  private static _instance: ContentRepo

  constructor() {
    this.projects = data.projects
      .filter((p) => p['enabled'] ?? true)
      .map((p) => {
        const name = p['name']
        const type = p['type'] as Project.Type
        const color = p['color']!
        const darkerColor = shiftLightness(color, -0.25)

        return {
          id: snakeCase(name),
          tags: Project.tags(name, type, darkerColor),
          palette: {
            default: color,
            darker: darkerColor,
            darkest: shiftLightness(color, -0.75),
            lighter: shiftLightness(color, 0.25),
          },
          ...p,
        } as Project
      })

    this.skills = data.skills
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
