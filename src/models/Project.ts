import { snakeCase } from 'change-case'
import { type AspectRatio } from '../types'

export interface Project {
  name: string
  type: Project.Type
  images: string[]
  aspectRatio: AspectRatio
  colors: Project.Colors
  preview?: string
  tags?: string[]
  description?: string
}
export namespace Project {
  export enum Type {
    APP_DEV = 'app-dev',
    BRANDING = 'branding',
    GAME_DEV = 'game-dev',
    ILLUSTRATION = 'illustration',
    WEB_DEV = 'web-dev',
  }

  export interface Colors {
    background: string
  }

  export const key = (project: Project) => {
    return snakeCase(project.name)
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

  export const aspectRatioValue = (aspectRatio: AspectRatio): number => {
    switch (aspectRatio) {
      case '1:1':
        return 1
      case '3:4':
        return 3 / 4
      case '4:3':
        return 4 / 3
    }
  }

  export const tags = (project: Project): string[] => {
    return [project.name, typeName(project.type)]
  }
}
