import React from 'react'
import * as styles from './SkeletonLoader.treat'
import { Stack, StackProps } from '../Stack/Stack'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/types'

export interface SkeletonLoaderProps {
  /**
   * Define a fixed width, default skeleton loader will fill remaining space
   */
  width?: string | number
  /**
   * Define a fixed height, default skeleton loader will fill remaining space
   */
  height?: string | number
  /**
   * Adds multiple lines of skeleton loader, usefull for mimicking block of text
   */
  repeat?: number
  /**
   * Define a space between each skeleton loader
   */
  space?: StackProps['space']
  /**
   * Define the border radius of the loader
   */
  borderRadius?: BoxProps['borderRadius']
  /**
   * Change the display style of the loader
   */
  display?: BoxProps['display']
}
/**
 * Animated content placeholder to manage user expectations
 */
export const SkeletonLoader = ({
  width,
  height,
  repeat = 1,
  space = 0,
  borderRadius,
  display = 'inlineBlock',
}: SkeletonLoaderProps) => {
  if (repeat === 1) {
    return (
      <Box
        borderRadius={borderRadius}
        display={display}
        position="relative"
        overflow="hidden"
        width="full"
        background="purple100"
        className={styles.loader}
        style={{
          ...(height && { height }),
          ...(width && { width }),
        }}
      />
    )
  }
  return (
    <Stack space={space}>
      {[...Array(repeat)].map((_key, index) => (
        <Box
          key={index}
          borderRadius={borderRadius}
          display={display}
          position="relative"
          overflow="hidden"
          width="full"
          background="purple100"
          className={styles.loader}
          style={{
            ...(height && { height }),
            ...(width && { width }),
          }}
        />
      ))}
    </Stack>
  )
}
