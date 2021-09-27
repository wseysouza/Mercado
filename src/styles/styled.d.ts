import 'styled-components';
import { globalTheme } from '@styles/theme'

export type Theme = typeof globalTheme

declare module 'styled-components' {
  export interface DefaulTheme extends Theme {}
}
