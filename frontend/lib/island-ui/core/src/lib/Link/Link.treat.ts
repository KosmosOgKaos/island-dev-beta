import { style, styleMap } from 'treat'
import { theme } from '@island.is/island-ui/theme'

export const link = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
  },
})

export const pointer = style({
  cursor: 'pointer',
})

const mediumBoxShadow = `inset 0 -2px 0 0 currentColor`
const smallBoxShadow = `inset 0 -1px 0 0 currentColor`

const underline = {
  textDecoration: 'none',
  boxShadow: 'none',
  transition: 'color .2s, box-shadow .2s',
}

export const underlines = styleMap({
  normal: {
    ...underline,
    paddingBottom: 4,
  },
  small: {
    ...underline,
    paddingBottom: 1,
  },
})

export const underlineVisibilities = styleMap({
  always: {
    selectors: {
      [`&${underlines.normal}`]: {
        boxShadow: mediumBoxShadow,
      },
      [`&${underlines.small}`]: {
        boxShadow: smallBoxShadow,
      },
    },
  },
  hover: {
    selectors: {
      [`&${underlines.normal}:hover`]: {
        boxShadow: mediumBoxShadow,
      },
      [`&${underlines.small}:hover`]: {
        boxShadow: smallBoxShadow,
      },
    },
  },
})

export const colors = styleMap({
  blue400: {
    color: theme.color.blue400,
    ':hover': {
      color: theme.color.blueberry400,
    },
  },
  blue600: {
    color: theme.color.blue600,
    ':hover': {
      color: theme.color.blueberry600,
    },
  },
  white: {
    color: theme.color.white,
    ':hover': {
      color: theme.color.white,
    },
  },
})
