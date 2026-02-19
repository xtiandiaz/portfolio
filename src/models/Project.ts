import type { Tag } from './Tag'
import { Tool } from './Tool'
import * as Color from '../utils/color'

export interface ProjectItem {
  id: string
  name: string
  category: Project.Category
  aspectRatio: string
  palette: Project.Palette
  tags: Tag[]
  preview?: string
  link?: string
  // options?: Partial<Project.Options>
}

export interface Project extends ProjectItem {
  tools: string[]
  pieces?: string[]
  link?: string
  description?: string
  date?: string
}

export namespace Project {
  export enum Category {
    APP_DEV = 'app-dev',
    BRANDING = 'branding',
    GAME_ART = 'game-art',
    GAME_DEV = 'game-dev',
    ILLUSTRATION = 'illustration',
    WEB_DEV = 'web-dev',
  }

  // export interface Options {
  //   invertsColors: boolean
  // }

  export interface Palette {
    default: string
    darker: string
    darkest: string
    lighter: string
  }

  export const categoryName = (type: Category) => {
    switch (type) {
      case Category.APP_DEV:
        return 'App Dev.'
      case Category.BRANDING:
        return 'Branding'
      case Category.GAME_ART:
        return 'Game Art'
      case Category.GAME_DEV:
        return 'Game Dev.'
      case Category.ILLUSTRATION:
        return 'Illustration'
      case Category.WEB_DEV:
        return 'Web Dev'
    }
  }

  export const tags = (name: string, type: Category, tools: string[], colors: Palette): Tag[] => {
    return [
      {
        name: name,
        type: 'identity',
        color: Color.setOpacity(colors.darker, 0.75),
        priority: 1,
      },
      {
        name: categoryName(type),
        type: 'attribute',
      },
      ...tools.map((key) => Tool.tag(key)),
    ] as Tag[]
  }
}
