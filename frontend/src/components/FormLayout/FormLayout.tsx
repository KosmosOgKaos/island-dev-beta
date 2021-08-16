import Head from 'next/head'
import {
  Box,
  FormStepper,
  GridContainer,
  GridRow,
  GridColumn,
  Header,
} from '@island.is/island-ui/core'

export interface FormLayoutProps {
  children?: React.ReactNode
  activeState?: number
}

export const FormLayout = ({ children, activeState }) => {
  return (
    <Box
      background="purple100"
      display="flex"
      flexDirection="column"
      height="full"
    >
      <Box background="white" marginBottom={5}>
        <GridContainer>
          <Header
            authenticated
            userName="Guðrún Jónsdóttir"
            language="EN"
            info={{
              title: 'Vinnumálastofnun',
              description: 'Umsókn um atvinnuleysisbætur',
            }}
            userAsDropdown={true}
          />
        </GridContainer>
      </Box>
      <Head>
        <title>Umsókn um atvinnuleysisbætur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '3/12']} order={[1, 1, 2]}>
            <Box marginTop={10} paddingLeft={2}>
              <FormStepper
                sections={[
                  {
                    name: 'Gagnaöflun',
                  },
                  {
                    name: 'Yfirlit',
                    children: [
                      {
                        type: 'SUB_SECTION',
                        name: 'Sub section #1',
                      },
                      {
                        type: 'SUB_SECTION',
                        name: 'Sub section #2',
                      },
                    ],
                  },
                  {
                    name: 'Viðbótarupplýsingar',
                  },
                  {
                    name: 'Réttindi',
                  },
                ]}
                activeSection={activeState}
              />
            </Box>
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '9/12']} order={[2, 2, 1]}>
            <Box
              paddingY={10}
              paddingX={[4, 4, 12]}
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
