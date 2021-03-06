import React, { useRef } from 'react'
import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import cn from 'classnames'
import NextLink from 'next/link'
import {
  Page,
  Hidden,
  Footer,
  GridContainer,
  Box,
  Button,
  Column,
  Columns,
  FocusableBox,
  GridColumn,
  Text,
  GridRow,
  Logo,
  Link,
  Menu,
  ResponsiveSpace,
  Input,
  Breadcrumbs,
  Stack,
  Hyphen,
} from '@island.is/island-ui/core'

import * as styles from '../treat/index.treat'

const marginLeft = [1, 1, 1, 2] as ResponsiveSpace

const QUERY_ENTRIES = gql`
  query {
    getEntries {
      id
      title
      type
    }
  }
`

interface Entry {
  id: number
  title: string
  type: string
}

interface MegaMenuLink {
  href: string
  text: string
  sub?: [string]
}

const Home: NextPage = () => {
  const searchInput = useRef<HTMLInputElement>()
  const { loading, error, data } = useQuery(QUERY_ENTRIES)
  const entries = data?.getEntries || []

  return (
    <Page component="div">
      <header>
        <GridContainer>
          <GridRow>
            <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
              <Columns alignY="center" space={2}>
                <Column width="content">
                  <FocusableBox href="https://island.is">
                    <Hidden above="md">
                      <Logo id="header-logo-icon" width={40} iconOnly />
                    </Hidden>
                    <Hidden below="lg">
                      <Logo id="header-logo" width={160} />
                    </Hidden>
                  </FocusableBox>
                </Column>
                <Column>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flexEnd"
                    width="full"
                  >
                    <Box
                      role="search"
                      display={['none', 'none', 'none', 'block']}
                    >
                      <Input
                        name="input"
                        backgroundColor="blue"
                        size="sm"
                        placeholder="Leita??u ?? ??sland.is"
                      />
                    </Box>
                    <Hidden below="lg">
                      <Box marginLeft={marginLeft}>
                        <Button variant="utility" icon="person" as="span">
                          M??nar s????ur
                        </Button>
                      </Box>
                    </Hidden>
                    <Box
                      marginLeft={marginLeft}
                      display={['none', 'none', 'none', 'block']}
                    >
                      <Button variant="utility">EN</Button>
                    </Box>
                    <Box marginLeft={marginLeft}>
                      <Menu
                        mainTitle="Flokkar"
                        asideBottomTitle="A??rir opinberir vefir"
                        asideTopLinks={[
                          {
                            text: 'Stafr??nt ??sland',
                            href: 'https://island.is/s/stafraent-island',
                          },
                          {
                            text: '??j??nusta ??sland.is',
                            href: 'https://island.is/s/stafraent-island/thjonustur',
                          },
                          {
                            text: 'Opinberir a??ilar',
                            href: 'https://island.is/stofnanir',
                          },
                        ]}
                        mainLinks={[
                          {
                            href: 'https://island.is/flokkur/akstur-og-bifreidar',
                            text: 'Akstur og bifrei??ar',
                          },
                          {
                            href: 'https://island.is/flokkur/atvinnurekstur-og-sjalfstaett-starfandi',
                            text: 'Atvinnurekstur og sj??lfst??tt starfandi',
                          },
                          {
                            href: 'https://island.is/flokkur/domstolar-og-rettarfar',
                            text: 'D??mst??lar og r??ttarfar',
                          },
                          {
                            href: 'https://island.is/flokkur/fjarmal-og-skattar',
                            text: 'Fj??rm??l og skattar',
                          },
                          {
                            href: 'https://island.is/flokkur/fjolskylda-og-velferd',
                            text: 'Fj??lskylda og velfer??',
                          },
                          {
                            href: 'https://island.is/flokkur/heilbrigdismal',
                            text: 'Heilbrig??ism??l',
                          },
                          {
                            href: 'https://island.is/flokkur/husnaedismal',
                            text: 'H??sn????ism??l',
                          },
                          {
                            href: 'https://island.is/flokkur/idnadur',
                            text: 'I??na??ur',
                          },
                          {
                            href: 'https://island.is/flokkur/innflytjendamal',
                            text: 'Innflytjendam??l',
                          },
                          {
                            href: 'https://island.is/flokkur/launthegi-rettindi-og-lifeyrir',
                            text: 'Laun??egi, r??ttindi og l??feyrir',
                          },
                          {
                            href: 'https://island.is/flokkur/malefni-fatlads-folks',
                            text: 'M??lefni fatla??s f??lks',
                          },
                          {
                            href: 'https://island.is/flokkur/menntun',
                            text: 'Menntun',
                          },
                          {
                            href: 'https://island.is/flokkur/neytendamal',
                            text: 'Neytendam??l',
                          },
                          {
                            href: 'https://island.is/flokkur/samfelag-og-rettindi',
                            text: 'Samf??lag og r??ttindi',
                          },
                          {
                            href: 'https://island.is/flokkur/samgongur',
                            text: 'Samg??ngur',
                          },
                          {
                            href: 'https://island.is/flokkur/umhverfismal',
                            text: 'Umhverfism??l',
                          },
                          {
                            href: 'https://island.is/flokkur/vegabref-ferdalog-og-buseta-erlendis',
                            text: 'Vegabr??f, fer??al??g og b??seta erlendis',
                          },
                          {
                            href: 'https://island.is/flokkur/thjonusta-island-is',
                            text: '??j??nusta ??sland.is',
                          },
                        ]}
                        asideBottomLinks={[
                          {
                            text: 'M??nar s????ur',
                            href: 'https://minarsidur.island.is/',
                          },
                          {
                            text: 'Heilsuvera',
                            href: 'https://www.heilsuvera.is/',
                          },
                          {
                            text: 'Opinber n??sk??pun',
                            href: 'https://opinbernyskopun.island.is/',
                          },
                          {
                            text: 'Samr????sg??tt',
                            href: 'https://samradsgatt.island.is/',
                          },
                          {
                            text: 'Mannan??fn',
                            href: 'https://island.is/mannanofn/',
                          },
                          {
                            text: 'Undirskriftarlistar',
                            href: 'http://vefur.island.is/undirskriftalistar',
                          },
                          {
                            text: 'Algengar spurningar',
                            href: 'https://island.is/stafraent-island/algengar-spurningar/',
                          },
                          {
                            text: 'Opnir reikningar r??kisins',
                            href: 'http://www.opnirreikningar.is/',
                          },
                          {
                            text: 'Tekjusagan',
                            href: 'https://tekjusagan.is/',
                          },
                        ]}
                        baseId="Menu"
                        myPagesText="Texti"
                        renderDisclosure={(
                          disclosureDefault,
                          { onClick, ...disclosureProps },
                        ) => {
                          return (
                            <Box display="flex">
                              <Box
                                marginRight={1}
                                display={['block', 'block', 'block', 'none']}
                              >
                                <Button
                                  {...disclosureProps}
                                  variant="utility"
                                  icon="search"
                                  onClick={(e) => {
                                    onClick(e)
                                    setTimeout(() => {
                                      if (searchInput.current) {
                                        searchInput.current.focus()
                                      }
                                    }, 100)
                                  }}
                                />
                              </Box>
                              {disclosureDefault}
                            </Box>
                          )
                        }}
                        renderLogo={(logo, closeModal) => (
                          <a
                            onClick={() => {
                              closeModal()
                            }}
                          >
                            <span>{logo}</span>
                          </a>
                        )}
                        menuButton={
                          <Button variant="utility" icon="menu">
                            Valmynd
                          </Button>
                        }
                        renderLink={({ className, text, href }, closeModal) => {
                          return (
                            <Link href={href} onClick={closeModal}>
                              <span className={className}>{text}</span>
                            </Link>
                          )
                        }}
                        renderMyPagesButton={() => {
                          return (
                            <Button variant="utility" icon="person" as="span">
                              M??nar s????ur
                            </Button>
                          )
                        }}
                        renderLanguageSwitch={() => (
                          <Button variant="utility">EN</Button>
                        )}
                        renderSearch={() => (
                          <Input
                            name="input"
                            backgroundColor="blue"
                            size="sm"
                            placeholder="Leita??u ?? ??sland.is"
                          />
                        )}
                      />
                    </Box>
                  </Box>
                </Column>
              </Columns>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </header>
      <Box>
        <GridContainer position="none">
          <Box
            display="flex"
            flexDirection="row"
            paddingY={[3, 3, 6]}
            height="full"
            position="relative"
          >
            <Box
              printHidden
              className={cn(styles.sidebarWrapper, {
                [styles.sticky]: true,
              })}
              display={['none', 'none', 'block']}
            >
              <Box
                background="purple100"
                borderRadius="large"
                padding={[3, 3, 4]}
                display="flex"
                alignItems="center"
              >
                <Box
                  display="block"
                  style={{ flex: '0 0 64px' }}
                  marginRight={3}
                >
                  <Box
                    component="img"
                    alt=""
                    src="https://island.is/assets/skjaldarmerki.svg"
                    width="full"
                  />
                </Box>
                <Box>
                  <Text variant="eyebrow" color="purple600">
                    Vinnum??lastofnun
                  </Text>
                  <Text variant="h3" as="h3" color="purple600" lineHeight="sm">
                    <Hyphen locale="is">Vinnum??lastofnun</Hyphen>
                  </Text>
                </Box>
              </Box>
            </Box>
            <GridContainer id="main-content">
              <GridRow>
                <GridColumn
                  offset={['0', '0', '0', '0', '1/9']}
                  span={['9/9', '9/9', '9/9', '9/9', '7/9']}
                >
                  <Box paddingLeft={[0, 0, 6, 6, 0]}>
                    <Box
                      paddingBottom={[2, 2, 4]}
                      display={['none', 'none', 'block']}
                      printHidden
                    >
                      <Breadcrumbs
                        items={[
                          {
                            title: '??sland.is',
                            href: 'https://island.is',
                          },
                          {
                            title: 'Laun??egi, r??ttindi og l??feyrir',
                            href: 'https://island.is/flokkur/launthegi-rettindi-og-lifeyrir',
                          },
                          {
                            isTag: true,
                            title: 'Atvinnuleysi og starfslok',
                            href: 'https://island.is/flokkur/launthegi-rettindi-og-lifeyrir#atvinnuleysi',
                          },
                        ]}
                        renderLink={(link, { typename, slug, href }) => {
                          return (
                            <NextLink href={href} passHref>
                              {link}
                            </NextLink>
                          )
                        }}
                      />
                    </Box>
                    <Stack space={3}>
                      <Text variant="h1" as="h1">
                        Atvinnuleysisb??tur
                      </Text>
                      <Box display="block" printHidden>
                        <Box
                          width="full"
                          background="blue100"
                          display="flex"
                          justifyContent="spaceBetween"
                          borderRadius="large"
                          paddingY={4}
                          paddingX={[3, 3, 3, 3, 4]}
                          alignItems={['flexStart', 'center']}
                          flexDirection={['column', 'row']}
                        >
                          <Box marginRight={[0, 2]} marginBottom={[3, 0]}>
                            <Text variant="h3" color="blue600">
                              Ums??kn um atvinnuleysisb??tur
                            </Text>
                          </Box>
                          <Link href="/login" skipTab>
                            <Button icon="open" iconType="outline" nowrap>
                              S??kja um
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                      <Text>
                        ??eir sem eru atvinnulausir geta skr???? sig ??
                        atvinnuleysisskr?? hj?? vinnumi??lunum Vinnum??lastofnunar
                        og ??tt r??tt ?? atvinnuleysisb??tum. ??eir f?? jafnframt
                        r????gj??f og a??sto?? vi?? atvinnuleit.
                      </Text>
                      <Text variant="h2" as="h2">
                        Hvernig s??ki ??g um?
                      </Text>
                      <Text>
                        Ums??knarferli um atvinnuleysisb??tur er ?? tveimur
                        skrefum. Fyrst skr??ir ums??kjandi nau??synlegar
                        uppl??singar um sig. S????an ??arf ums??kjandi a?? kynna s??r
                        mikilv??gar uppl??singar og sta??festa ums??knina.
                      </Text>
                      <Text>
                        Grei??slur atvinnuleysisb??ta taka ?? fyrsta lagi mi?? af
                        ??eim degi sem ums??kjandi sta??festir og sendir ums??kn.
                        ??egar ums??kjandi hefur loki?? vi?? a?? s??kja um, birtist
                        listi yfir ??au g??gn sem ??urfa a?? berast til
                        Vinnum??lastofnunar. ??v?? fyrr sem ums??kjandi skilar ??llum
                        g??gnum, ??v?? fyrr er unnt a?? afgrei??a ums??knina.
                      </Text>
                      <Text variant="h2" as="h2">
                        Skilyr??i atvinnuleysisb??ta
                      </Text>
                      <Text>
                        S??tt er um atvinnuleysisb??tur hj?? ??j??nustuskrifstofum
                        Vinnum??lastofnunar sem starfa ?? ??llum landshlutum.
                        Ums??kjandi um atvinnuleysisb??tur skr??ir sig jafnframt ??
                        atvinnuleit.
                      </Text>
                      <Text>
                        Atvinnuleysisb??tur eru greiddar ??t m??na??arlega af
                        Grei??slustofu atvinnuleysistrygginga.
                      </Text>
                    </Stack>
                  </Box>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </Box>
        </GridContainer>
      </Box>
      <Footer showTagLinks showMiddleLinks />
    </Page>
  )
}

export default Home
