import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import NextLink from "next/link";
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
  GridRow,
  Logo,
  Link,
  Menu,
  ResponsiveSpace,
  Input,
} from "@island.is/island-ui/core";
import React, { useRef } from "react";

const marginLeft = [1, 1, 1, 2] as ResponsiveSpace;

const QUERY_ENTRIES = gql`
  query {
    getEntries {
      id
      title
      type
    }
  }
`;

interface Entry {
  id: number;
  title: string;
  type: string;
}

interface MegaMenuLink {
  href: string;
  text: string;
  sub?: [string];
}

const Home: NextPage = () => {
  const searchInput = useRef<HTMLInputElement>();
  const { loading, error, data } = useQuery(QUERY_ENTRIES);
  const entries = data?.getEntries || [];

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
                      display={["none", "none", "none", "block"]}
                    >
                      <Input
                        name="input"
                        backgroundColor="blue"
                        size="sm"
                        placeholder="Leitaðu á Ísland.is"
                      />
                    </Box>
                    <Hidden below="lg">
                      <Box marginLeft={marginLeft}>
                        <Button variant="utility" icon="person" as="span">
                          Mínar síður
                        </Button>
                      </Box>
                    </Hidden>
                    <Box
                      marginLeft={marginLeft}
                      display={["none", "none", "none", "block"]}
                    >
                      <Button variant="utility">EN</Button>
                    </Box>
                    <Box marginLeft={marginLeft}>
                      <Menu
                        mainTitle="Flokkar"
                        asideBottomTitle="Aðrir opinberir vefir"
                        asideTopLinks={[
                          {
                            text: "Stafrænt Ísland",
                            href: "https://island.is/s/stafraent-island",
                          },
                          {
                            text: "Þjónusta Ísland.is",
                            href: "https://island.is/s/stafraent-island/thjonustur",
                          },
                          {
                            text: "Opinberir aðilar",
                            href: "https://island.is/stofnanir",
                          },
                        ]}
                        mainLinks={[
                          {
                            href: "https://island.is/flokkur/akstur-og-bifreidar",
                            text: "Akstur og bifreiðar",
                          },
                          {
                            href: "https://island.is/flokkur/atvinnurekstur-og-sjalfstaett-starfandi",
                            text: "Atvinnurekstur og sjálfstætt starfandi",
                          },
                          {
                            href: "https://island.is/flokkur/domstolar-og-rettarfar",
                            text: "Dómstólar og réttarfar",
                          },
                          {
                            href: "https://island.is/flokkur/fjarmal-og-skattar",
                            text: "Fjármál og skattar",
                          },
                          {
                            href: "https://island.is/flokkur/fjolskylda-og-velferd",
                            text: "Fjölskylda og velferð",
                          },
                          {
                            href: "https://island.is/flokkur/heilbrigdismal",
                            text: "Heilbrigðismál",
                          },
                          {
                            href: "https://island.is/flokkur/husnaedismal",
                            text: "Húsnæðismál",
                          },
                          {
                            href: "https://island.is/flokkur/idnadur",
                            text: "Iðnaður",
                          },
                          {
                            href: "https://island.is/flokkur/innflytjendamal",
                            text: "Innflytjendamál",
                          },
                          {
                            href: "https://island.is/flokkur/launthegi-rettindi-og-lifeyrir",
                            text: "Launþegi, réttindi og lífeyrir",
                          },
                          {
                            href: "https://island.is/flokkur/malefni-fatlads-folks",
                            text: "Málefni fatlaðs fólks",
                          },
                          {
                            href: "https://island.is/flokkur/menntun",
                            text: "Menntun",
                          },
                          {
                            href: "https://island.is/flokkur/neytendamal",
                            text: "Neytendamál",
                          },
                          {
                            href: "https://island.is/flokkur/samfelag-og-rettindi",
                            text: "Samfélag og réttindi",
                          },
                          {
                            href: "https://island.is/flokkur/samgongur",
                            text: "Samgöngur",
                          },
                          {
                            href: "https://island.is/flokkur/umhverfismal",
                            text: "Umhverfismál",
                          },
                          {
                            href: "https://island.is/flokkur/vegabref-ferdalog-og-buseta-erlendis",
                            text: "Vegabréf, ferðalög og búseta erlendis",
                          },
                          {
                            href: "https://island.is/flokkur/thjonusta-island-is",
                            text: "Þjónusta Ísland.is",
                          },
                        ]}
                        asideBottomLinks={[
                          {
                            text: "Mínar síður",
                            href: "https://minarsidur.island.is/",
                          },
                          {
                            text: "Heilsuvera",
                            href: "https://www.heilsuvera.is/",
                          },
                          {
                            text: "Opinber nýsköpun",
                            href: "https://opinbernyskopun.island.is/",
                          },
                          {
                            text: "Samráðsgátt",
                            href: "https://samradsgatt.island.is/",
                          },
                          {
                            text: "Mannanöfn",
                            href: "https://island.is/mannanofn/",
                          },
                          {
                            text: "Undirskriftarlistar",
                            href: "http://vefur.island.is/undirskriftalistar",
                          },
                          {
                            text: "Algengar spurningar",
                            href: "https://island.is/stafraent-island/algengar-spurningar/",
                          },
                          {
                            text: "Opnir reikningar ríkisins",
                            href: "http://www.opnirreikningar.is/",
                          },
                          {
                            text: "Tekjusagan",
                            href: "https://tekjusagan.is/",
                          },
                        ]}
                        baseId="Menu"
                        myPagesText="Texti"
                        renderDisclosure={(
                          disclosureDefault,
                          { onClick, ...disclosureProps }
                        ) => {
                          return (
                            <Box display="flex">
                              <Box
                                marginRight={1}
                                display={["block", "block", "block", "none"]}
                              >
                                <Button
                                  {...disclosureProps}
                                  variant="utility"
                                  icon="search"
                                  onClick={(e) => {
                                    onClick(e);
                                    setTimeout(() => {
                                      if (searchInput.current) {
                                        searchInput.current.focus();
                                      }
                                    }, 100);
                                  }}
                                />
                              </Box>
                              {disclosureDefault}
                            </Box>
                          );
                        }}
                        renderLogo={(logo, closeModal) => (
                          <a
                            onClick={() => {
                              closeModal();
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
                          );
                        }}
                        renderMyPagesButton={() => {
                          return (
                            <Button variant="utility" icon="person" as="span">
                              Mínar síður
                            </Button>
                          );
                        }}
                        renderLanguageSwitch={() => (
                          <Button variant="utility">EN</Button>
                        )}
                        renderSearch={() => (
                          <Input
                            name="input"
                            backgroundColor="blue"
                            size="sm"
                            placeholder="Leitaðu á Ísland.is"
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
      <Footer showTagLinks showMiddleLinks />
    </Page>
  );
};

export default Home;
