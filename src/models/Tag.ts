export interface Tag {
  name: string
  type: 'attribute' | 'identity' | 'tool'
  color?: string
  priority?: number
}
