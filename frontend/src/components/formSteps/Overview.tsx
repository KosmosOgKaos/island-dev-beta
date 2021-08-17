import React from 'react'
import {
  Box,
  Text,
  Input,
  GridRow,
  GridColumn,
} from '@island.is/island-ui/core'
import { ActiveStepComponentProps } from '../ActiveStep'
import { InputController } from '@cmp'

export const Overview = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Yfirlit til grundvallar réttinda
    </Text>
    <Text variant="h3">Persónuupplýsingar</Text>
    <Text marginBottom={3}>Gögn sótt úr Þjóðskrá</Text>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="ssn"
          id="ssn"
          label="Kennitala"
          placeholder="Kennitala"
          disabled
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="name"
          id="name"
          label="Nafn"
          disabled
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="address"
          id="address"
          label="Heimilisfang"
          disabled
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="city"
          id="city"
          label="Staður"
          disabled
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          type="text"
          control={form.control}
          name="postNumber"
          id="postNumber"
          label="Póstnúmer"
          disabled
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
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
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          control={form.control}
          name="phoneNumber"
          id="phoneNumber"
          label="Sími"
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
  </Box>
)
