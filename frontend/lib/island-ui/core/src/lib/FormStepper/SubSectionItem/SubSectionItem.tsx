import React, { FC } from 'react'

import { Icon } from '../../Icon/Icon'
import { Text } from '../../Text/Text'
import { Box } from '../../Box/Box'
import { SectionNumberColumn } from '../SectionNumberColumn/SectionNumberColumn'
import * as styles from './SubSectionItem.treat'
import { Link } from '../../Link/Link'

interface SubSectionItemProps {
  currentState: 'active' | 'previous' | 'next'
  showIcon?: boolean
  href?: string
  children: React.ReactNode
}

export const SubSectionItem: FC<SubSectionItemProps> = ({
  currentState,
  showIcon = false,
  children,
  href,
}) => {
  const renderChildren = () => (
    <Box className={styles.name}>
      <Text
        as="span"
        lineHeight="lg"
        fontWeight={currentState === 'active' ? 'semiBold' : 'light'}
      >
        {children}
      </Text>
    </Box>
  )

  return (
    <Box
      display="flex"
      alignItems="center"
      marginTop={[0, 0, 1]}
      component="li"
    >
      <SectionNumberColumn type="subSection">
        {showIcon && (
          <span className={styles.bullet}>
            <span className={styles.icon}>
              <Icon type="bullet" color="purple200" width="8" height="8" />
            </span>
          </span>
        )}
      </SectionNumberColumn>
      {href && currentState !== 'active' ? (
        <Link href={href} underline="small" underlineVisibility="hover">
          {renderChildren()}
        </Link>
      ) : (
        renderChildren()
      )}
    </Box>
  )
}
