import Head from 'next/head'
import {
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Button,
  Stack,
  Text,
} from '@island.is/island-ui/core'

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
      <GridContainer>
        <GridRow align="center">
          <GridColumn span={['12/12', '12/12', '6/12']} order={[1, 1, 1]}>
            <Box
              marginTop={12}
              border="standard"
              paddingY={0}
              paddingX={0}
              background="white"
              borderRadius="large"
            >
              {children}
              <Box background="blue100" paddingBottom={6}>
                <GridRow align="center" marginBottom={4}>
                  <Text variant="h5" color="blue600" marginTop={4}>
                    Fleiri leiðir
                  </Text>
                </GridRow>

                <GridRow>
                  <GridColumn
                    span={['12/12', '12/12', '12/12', '12/12', '4/6']}
                    offset="1/6"
                  >
                    <Stack space={2}>
                      <Button
                        colorScheme="negative"
                        iconType="filled"
                        onBlur={function noRefCheck() {}}
                        onClick={function noRefCheck() {}}
                        onFocus={function noRefCheck() {}}
                        preTextIconType="filled"
                        fluid
                        size="small"
                        type="button"
                        variant="primary"
                      >
                        Auðkenni-appið
                      </Button>
                      <Button
                        colorScheme="negative"
                        iconType="filled"
                        onBlur={function noRefCheck() {}}
                        onClick={function noRefCheck() {}}
                        onFocus={function noRefCheck() {}}
                        preTextIconType="filled"
                        size="small"
                        fluid
                        type="button"
                        variant="primary"
                      >
                        Skilríki á korti
                      </Button>
                    </Stack>
                  </GridColumn>
                </GridRow>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Box>
  )
}
