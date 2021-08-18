import { style } from 'treat'
import { themeUtils } from '@island.is/island-ui/theme'

export const sidebarWrapper = style({
  top: 80,
  maxWidth: '230px',
  minWidth: '230px',
  ...themeUtils.responsiveStyle({
    lg: {
      minWidth: '318px',
      maxWidth: '318px',
    },
  }),
})

export const sticky = style({
  position: 'sticky',
  alignSelf: 'flex-start',
})

export const loginForm = style({
  width: '66%',
  maxWidth: '400px',
  minWidth: '210px',
})
