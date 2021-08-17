import React from 'react'
import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridRow,
  Inline,
  RadioButton,
  Text,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import { ActiveStepComponentProps } from '../ActiveStep'
import { InputController, SelectController, DatePickerController } from '@cmp'

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
        <Inline space={3}>
          <RadioButton id="fullt_starf" label="Full starf óskast" />
          <RadioButton id="hlutastarf" label="Hlutastarf óskast" />
        </Inline>
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <SelectController
          control={form.control}
          id="veldu_svaedi"
          name="veldu_svaedi"
          label="Ég vil líka vinna á"
          rules={{
            required: 'Vinsamlegast veldu svæði',
          }}
          options={selectOptions}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <DatePickerController
          control={form.control}
          id="start_date"
          name="start_date"
          size="sm"
          label="Ég get byrjað"
          placeholder="Veldu dagsetningu"
          required
          rules={{
            required: 'Vinsamlegast veldu dagsetningu',
          }}
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
        <SelectController
          control={form.control}
          id="oskastarf_1"
          name="oskastarf_1"
          label="Óskastarf 1"
          placeholder="Veldu tegund starfs"
          options={jobsOptions}
          rules={{
            required: 'Vinsamlegast veldu óskastarf 1',
          }}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <SelectController
          control={form.control}
          id="oskastarf_2"
          name="oskastarf_2"
          label="Óskastarf 2"
          placeholder="Veldu tegund starfs"
          options={jobsOptions}
          rules={{
            required: 'Vinsamlegast veldu óskastarf 2',
          }}
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
