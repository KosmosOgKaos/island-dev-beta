import React from 'react'
import {
  Box,
  Button,
  DatePicker,
  Divider,
  FormStepper,
  GridColumn,
  GridContainer,
  GridRow,
  Inline,
  Input,
  RadioButton,
  Select,
  Text,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import { ActiveStepComponentProps } from '../ActiveStep'
import { RadioController } from '@cmp'

const selectOptions = [
  {
    label: 'Reykjavík',
    value: 'Reykjavík',
  },
  {
    label: 'Keflavík',
    value: 'Keflavík',
  },
  {
    label: 'Akureyri',
    value: 'Akureyri',
  },
]

const jobsOptions = jobs.map((x) => ({
  label: x,
  value: x,
}))

export const EmploymentInfo = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Almennar upplýsingar
    </Text>
    <Text variant="h3" marginBottom={3}>
      Framtíðaróskir
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={3}>
        <RadioController 
          id="jobPercentageWish"
          largeButtons={false}
          split="1/2"
          control={form.control} 
          options={[
            {label:"Fullt starf óskast", value:"fullt_starf"},
            {label:"Hlutastarf óskast", value:"hlutastarf"},
          ]}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <Select
          size="sm"
          name="veldu_svaedi"
          label="Ég vil líka vinna á"
          options={selectOptions}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <DatePicker
          size="sm"
          label="Ég get byrjað"
          placeholderText="Veldu dagsetningu"
        />
      </GridColumn>
      <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
        <Divider />
      </GridColumn>
    </GridRow>
    <Text variant="h3" marginBottom={3}>
      Óskir um starf
    </Text>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <Select
          size="sm"
          name="oskastarf_1"
          label="Óskastarf 1"
          placeholder="Veldu tegund starfs"
          options={jobsOptions}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <Select
          size="sm"
          name="oskastarf_2"
          label="Óskastarf 2"
          placeholder="Veldu tegund starfs"
          options={jobsOptions}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <Button variant="text" as="span">
          Bæta við línu
        </Button>
      </GridColumn>
      <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
        <Divider />
      </GridColumn>
    </GridRow>
    <Text variant="h3" marginBottom={3}>
      Vinnufærni
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={6}>
        <Inline space={3}>
          <RadioButton id="almennt_vinnufaer" label="Almennt vinnufær" />
          <RadioButton id="skert_vinufaerni" label="Skert vinnufærni" />
          <RadioButton id="er_med_ororkumat" label="Er með örorkumat" />
        </Inline>
      </GridColumn>
    </GridRow>
  </Box>
)
