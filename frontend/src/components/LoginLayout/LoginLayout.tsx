import Head from 'next/head'
import {
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Header,
} from '@island.is/island-ui/core'
import CSS from 'csstype'

export interface FormLayoutProps {
  children?: React.ReactNode
}


export const LoginLayout = ({ children }) => {
  return (
    <Box
      background="purple100"
      display="flex"
      flexDirection="column"
      height="full"
    >
      <Head>
        <title>Innskráning - Umsókn um atvinnuleysisbætur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridContainer className="center">
        <GridRow align="center">
          <GridColumn span={['12/12', '12/12', '6/12']} order={[1, 1, 1]}>
            <Box
              paddingY={8}
              paddingX={8}
              background="white"
              borderRadius="large"
            >
              {children}
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Box>
  )
}
