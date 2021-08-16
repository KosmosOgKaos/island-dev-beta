import React, {
  useContext,
  useState,
  ReactNode,
  forwardRef,
  FC,
  useEffect,
  useCallback,
} from 'react'
import cn from 'classnames'
import AnimateHeight from 'react-animate-height'

import { Box } from '../../Box/Box'
import { Column } from '../../Column/Column'
import { Columns } from '../../Columns/Columns'
import { AllOrNone } from '../../private/AllOrNone'
import { useVirtualTouchable } from '../../private/touchable/useVirtualTouchable'
import { hideFocusRingsClassName } from '../../private/hideFocusRings/hideFocusRings'
import { Overlay } from '../../private/Overlay/Overlay'
import { Text } from '../../Text/Text'
import { TextVariants } from '../../Text/Text.treat'
import { AccordionContext } from '../../Accordion/Accordion'
import { Icon } from '../../IconRC/Icon'
import * as styles from './AccordionItem.treat'
import { Colors } from '@island.is/island-ui/theme'

type IconVariantTypes = 'default' | 'small' | 'sidebar'

export type AccordionItemLabelTags = 'p' | 'h2' | 'h3' | 'h4' | 'h5'

export type AccordionItemBaseProps = {
  id: string
  label: ReactNode
  labelVariant?: TextVariants
  labelUse?: AccordionItemLabelTags
  labelColor?: Colors
  iconVariant?: IconVariantTypes
  visibleContent?: ReactNode
  children: ReactNode
  startExpanded?: boolean
  onClick?: () => void
  onBlur?: () => void
  onFocus?: () => void
}

export type AccordionItemStateProps = AllOrNone<{
  expanded?: boolean
  onToggle: (expanded: boolean) => void
}>

export type AccordionItemProps = AccordionItemBaseProps &
  AccordionItemStateProps

export const AccordionItem = forwardRef<HTMLButtonElement, AccordionItemProps>(
  (
    {
      id,
      label,
      labelVariant = 'h4',
      labelUse = 'h3',
      labelColor = 'currentColor',
      iconVariant = 'default',
      visibleContent,
      expanded: expandedProp,
      onToggle,
      children,
      startExpanded,
      onClick,
      onBlur,
      onFocus,
    },
    forwardedRef,
  ) => {
    const { toggledId, setToggledId } = useContext(AccordionContext)
    const [expandedFallback, setExpandedFallback] = useState(false)
    let expanded = expandedProp ?? expandedFallback
    const [height, setHeight] = useState(expanded ? 'auto' : 0)

    if (toggledId && toggledId !== id && expanded) {
      expanded = false

      if (height !== 0) {
        setHeight(0)
      }
    }

    const handleOpen = () => {
      const newValue = !expanded
      if (typeof setToggledId === 'function' && newValue) {
        setToggledId(id)
      }

      setHeight(newValue ? 'auto' : 0)

      if (expandedProp === undefined) {
        setExpandedFallback(newValue)
      }

      if (typeof onToggle === 'function') {
        onToggle(newValue)
      }
    }

    const handleClose = () => {
      expanded = false
      setHeight(0)

      if (expandedProp === undefined) {
        setExpandedFallback(false)
      }

      if (typeof onToggle === 'function') {
        onToggle(false)
      }
    }

    const onHandleOpen = useCallback(handleOpen, [])

    useEffect(() => {
      if (startExpanded) {
        onHandleOpen()
      } else {
        handleClose()
      }
    }, [onHandleOpen, startExpanded])

    return (
      <Box>
        <Box position="relative" display="flex">
          <Box
            ref={forwardedRef}
            component="button"
            type="button"
            cursor="pointer"
            className={[styles.button, useVirtualTouchable()]}
            outline="none"
            width="full"
            textAlign="left"
            aria-controls={id}
            aria-expanded={expanded}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick ? onClick : handleOpen}
          >
            <Columns space={2} alignY="center">
              <Column>
                <Box
                  height="full"
                  width="full"
                  display="flex"
                  alignItems="center"
                >
                  <Text variant={labelVariant} as={labelUse} color={labelColor}>
                    {label}
                  </Text>
                </Box>
                {visibleContent && (
                  <Box paddingTop={2}>
                    <Text>{visibleContent}</Text>
                  </Box>
                )}
              </Column>
              <Column width="content">
                <div
                  className={cn(
                    styles.plusIconWrap,
                    styles.iconWrapVariants[iconVariant],
                  )}
                >
                  <div
                    className={cn(styles.icon, styles.removeIcon, {
                      [styles.showRemoveIcon]: expanded,
                    })}
                  >
                    <Icon
                      icon="remove"
                      size={iconVariant === 'default' ? 'large' : 'small'}
                      color="currentColor"
                    />
                  </div>
                  <div
                    className={cn(styles.icon, styles.addIcon, {
                      [styles.hideAddIcon]: expanded,
                    })}
                  >
                    <Icon
                      icon="add"
                      size={iconVariant === 'default' ? 'large' : 'small'}
                      color="currentColor"
                    />
                  </div>
                </div>
              </Column>
            </Columns>
          </Box>
          <Overlay className={[styles.focusRing, hideFocusRingsClassName]} />
        </Box>
        <AnimateHeight duration={300} height={height}>
          <Box id={id} paddingTop={2}>
            {children}
          </Box>
        </AnimateHeight>
      </Box>
    )
  },
)

export const AccordionCard: FC<AccordionItemBaseProps> = (props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <Box
      height="full"
      background="white"
      borderRadius="large"
      className={cn(styles.card, { [styles.focused]: isFocused })}
      padding={[2, 2, 4]}
    >
      <AccordionItem {...props} onFocus={handleFocus} onBlur={handleBlur}>
        {props.children}
      </AccordionItem>
    </Box>
  )
}

export const SidebarAccordion: FC<
  Omit<AccordionItemBaseProps, 'labelVariant' | 'iconVariant'>
> = (props) => {
  return (
    <AccordionItem {...props} labelVariant="default" iconVariant="sidebar">
      {props.children}
    </AccordionItem>
  )
}
