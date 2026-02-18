export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function capitalize(str: string): string {
  return str.substring(0, 1).toUpperCase() + str.substring(1)
}
