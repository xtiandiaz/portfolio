import data from '@/assets/json/projects.json'
import { Project, type ProjectItem } from '@/models/Project'
import { shiftLightness } from '@/utils/color'
import { snakeCase } from 'change-case'

export class ProjectRepo {
  readonly projects: Project[]
  private static _instance: ProjectRepo

  constructor() {
    this.projects = data.map((p) => {
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
        aspectRatio: p['aspectRatio']!.replace(':', '/'),
      } as Project
    })
  }

  static get instance(): ProjectRepo {
    if (!ProjectRepo._instance) {
      ProjectRepo._instance = new ProjectRepo()
    }
    return ProjectRepo._instance!
  }

  get items(): ProjectItem[] {
    return this.projects as ProjectItem[]
  }
}
