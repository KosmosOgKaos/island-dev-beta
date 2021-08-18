import React from 'react'
import {
  Box,
  Text,
  GridRow,
  GridColumn,
  ResponsiveProp,
  GridColumns,
  Divider,
} from '@island.is/island-ui/core'
import { ActiveStepComponentProps } from '../ActiveStep'
import { InputController } from '@cmp'

const gridSpacing = [
  '12/12',
  '6/12',
  '12/12',
  '6/12',
] as ResponsiveProp<GridColumns>

const Divide = () => (
  <GridRow>
    <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
      <div style={{ height: 1 }}>
        <Divider />
      </div>
    </GridColumn>
  </GridRow>
)

export const Overview = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Persónuupplýsingar
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          type="text"
          format="######-####"
          control={form.control}
          name="ssn"
          id="ssn"
          label="Kennitala"
          placeholder="Kennitala"
          disabled
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="name"
          id="name"
          label="Nafn"
          disabled
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="address"
          id="address"
          label="Heimilisfang"
          disabled
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="city"
          id="city"
          label="Staður"
          disabled
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="postNumber"
          id="postNumber"
          label="Póstnúmer"
          disabled
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          name="email"
          id="email"
          label="Tölvupóstur"
          type="email"
          rules={{
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Netfang þarf að vera gilt',
            },
          }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          name="phoneNumber"
          id="phoneNumber"
          label="Sími"
          format="### ####"
          disabled
          type="tel"
          rules={{
            pattern: {
              value: /^\d{7}$/,
              message: 'Símanúmer þarf að vera 7 tölustafir',
            },
          }}
        />
      </GridColumn>
    </GridRow>

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Börn á framfærslu
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          name="children[0].name"
          id="barn_nafn_1"
          label="Nafn barns"
          disabled
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          format="######-####"
          name="children[0].ssn"
          id="barn_kennitala_1"
          label="Kennitala barns"
          disabled
        />
      </GridColumn>
    </GridRow>
  </Box>
)
