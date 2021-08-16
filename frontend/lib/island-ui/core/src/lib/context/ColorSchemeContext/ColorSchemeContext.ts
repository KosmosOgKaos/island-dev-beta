import { createContext } from 'react'

export type ColorSchemes = 'blue' | 'purple' | 'red' | 'white' | null

export interface ColorSchemeProps {
  colorScheme: ColorSchemes
}

export const ColorSchemeContext = createContext<ColorSchemeProps>({
  colorScheme: null,
})
