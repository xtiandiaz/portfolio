import convert from 'color-convert'
import { clamp } from './misc'

export function shiftLightness(hex: string, by: number): string {
  by = clamp(by, -1, 1)
  const hsl = convert.hex.hsl(hex)
  hsl[2] = clamp(hsl[2] * (1 + by), 0, 100)

  return `#${convert.hsl.hex(hsl)}`
}

export function setOpacity(hex: string, opacity: number): string {
  opacity = Math.round(clamp(opacity, 0, 1) * 255)
  const rgb = convert.hex.rgb(hex)

  return `#${convert.rgb.hex(rgb)}${opacity.toString(16)}`
}
