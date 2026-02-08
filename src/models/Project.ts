import type { Tag } from './Tag'
import * as Color from '../utils/color'

export interface ProjectItem {
  id: string
  name: string
  type: Project.Type
  aspectRatio: string
  palette: Project.Palette
  tags: Tag[]
  preview?: string
  options?: Partial<Project.Options>
}

export interface Project extends ProjectItem {
  images?: Project.Image[]
  description?: string
  link?: string
}

export namespace Project {
  export enum Type {
    APP_DEV = 'app-dev',
    BRANDING = 'branding',
    GAME_DEV = 'game-dev',
    ILLUSTRATION = 'illustration',
    WEB_DEV = 'web-dev',
  }

  export interface Options {
    invertsColors: boolean
  }

  export interface Palette {
    default: string
    darker: string
    darkest: string
    lighter: string
  }

  export interface Image {
    size: { w: number; h: number }
    alt?: string
    name?: string
  }

  export const typeName = (type: Type) => {
    switch (type) {
      case Type.APP_DEV:
        return 'App Dev.'
      case Type.BRANDING:
        return 'Branding'
      case Type.GAME_DEV:
        return 'Game Dev.'
      case Type.ILLUSTRATION:
        return 'Illustration'
      case Type.WEB_DEV:
        return 'Web Dev'
    }
  }

  export const tags = (name: string, type: Type, color: string): Tag[] => {
    return [
      {
        label: name,
        backgroundColor: Color.setOpacity(color, 0.8),
        priority: 1,
      },
      {
        label: typeName(type),
        backgroundColor: Color.setOpacity(color, 0.4),
        priority: 0,
      },
    ]
  }
}
