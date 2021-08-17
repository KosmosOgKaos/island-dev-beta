import React from 'react'
import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridRow,
  Text,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import { ActiveStepComponentProps } from '../ActiveStep'
import { DatePickerController, RadioController, SelectController } from '@cmp'

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
          split="1/1"
          control={form.control}
          options={[
            { label: 'Fullt starf óskast', value: 'fullt_starf' },
            { label: 'Hlutastarf óskast', value: 'hlutastarf' },
          ]}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <SelectController
          id="veldu_svaedi"
          name="veldu_svaedi"
          label="Ég vil líka vinna á"
          rules={{
            required: 'Vinsamlegast veldu svæði',
          }}
          options={selectOptions}
          control={form.control}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <DatePickerController
          control={form.control}
          id="start_date"
          locale="is"
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
        <RadioController
          id="workability"
          largeButtons={false}
          split="1/1"
          control={form.control}
          options={[
            { label: 'Almennt vinnufær', value: 'Almennt vinnufær' },
            { label: 'Skert vinnufærni', value: 'Skert vinnufærni' },
            { label: 'Er með örorkumat', value: 'Er með örorkumat' },
          ]}
        />
      </GridColumn>
    </GridRow>
  </Box>
)
