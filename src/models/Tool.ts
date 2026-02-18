import { pascalCase } from 'change-case'
import type { Tag } from './Tag'
import { capitalize } from '@/utils/misc'

export namespace Tool {
  export const name = (key: string) => {
    switch (key) {
      case 'vue':
        return 'Vue 3'
      case 'html':
      case 'scss':
        return key.toUpperCase()
      case 'webgl':
        return 'WebGL'
      case 'node':
      case 'pixi':
        return capitalize(key) + 'JS'
      default:
        return capitalize(key)
    }
  }

  export const tag = (code: string, color?: string): Tag => {
    const _parts = code.match(/^([\w#+]+)(\{(\d)\})?$/)!
    const key = _parts[1]!
    const priority = Number(_parts[3]!)

    return {
      name: Tool.name(key),
      type: 'tool',
      color,
      priority,
    }
  }
}
