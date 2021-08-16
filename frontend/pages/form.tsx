import Head from "next/head";
import {
  Box,
  Text,
  Input,
  FormStepper,
  DatePicker,
  GridContainer,
  GridRow,
  GridColumn,
  Divider,
} from "@island.is/island-ui/core";

export default function Home() {
  return (
    <Box background="purple100" paddingTop={15}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridContainer>
        <GridRow>
          <GridColumn span={["12/12", "12/12", "3/12"]} order={[1, 1, 2]}>
            <Box marginTop={10} paddingLeft={2}>
              <FormStepper
                theme="purple"
                sections={[
                  {
                    name: "Gagnaöflun",
                  },
                  {
                    name: "Yfirlit",
                    children: [
                      {
                        type: "SUB_SECTION",
                        name: "Sub section #1",
                      },
                      {
                        type: "SUB_SECTION",
                        name: "Sub section #2",
                      },
                    ],
                  },
                  {
                    name: "Viðbótarupplýsingar",
                  },
                  {
                    name: "Réttindi",
                  },
                ]}
                activeSection={1}
              />
            </Box>
          </GridColumn>
          <GridColumn span={["12/12", "12/12", "9/12"]} order={[2, 2, 1]}>
            <Box
              paddingY={10}
              paddingX={[4, 4, 12]}
              background="white"
              borderRadius="large"
            >
              <Text variant="h2" marginBottom={5}>
                Yfirlit til grundvallar réttinda
              </Text>
              <Text variant="h3">Persónuupplýsingar</Text>
              <Text marginBottom={3}>Gögn sótt úr Þjóðskrá</Text>
              <GridRow>
                <GridColumn span="6/12" paddingBottom={3}>
                  <Input
                    label="Kennitala"
                    disabled
                    placeholder="haha"
                    value="170694-1119"
                  />
                </GridColumn>
                <GridColumn span="6/12" paddingBottom={3}>
                  <Input label="Nafn" disabled value="Guðrún Jónsdóttir" />
                </GridColumn>
                <GridColumn span="6/12" paddingBottom={3}>
                  <Input label="Heimilisfang" disabled value="Lindargata 3" />
                </GridColumn>
                <GridColumn span="6/12" paddingBottom={3}>
                  <Input label="Staður" disabled value="Reykjavík" />
                </GridColumn>
                <GridColumn span="6/12" paddingBottom={3}>
                  <Input label="Póstnúmer" disabled value="101" />
                </GridColumn>
                <GridColumn span="6/12" paddingBottom={3}>
                  <Input
                    label="Tölvupóstur"
                    type="email"
                    value="gj@island.is"
                  />
                </GridColumn>
                <GridColumn span="6/12" marginBottom={3}>
                  <Input label="Sími" type="tel" value="4265500" />
                </GridColumn>
              </GridRow>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Box>
  );
}
