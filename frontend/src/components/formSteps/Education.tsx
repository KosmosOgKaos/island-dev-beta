import React from 'react'
import {
  Box,
  Button,
  DatePicker,
  Divider,
  GridColumn,
  GridRow,
  Inline,
  RadioButton,
  Text,
  Select,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import haskolagrada from '../../static/haskolagrada.json'
import education from '../../static/education.json'
import { ActiveStepComponentProps } from '../ActiveStep'

const haskolagradaOptions = haskolagrada.map((x) => ({
  label: x,
  value: x,
}))

const educationOptions = education.map((x) => ({
  label: x,
  value: x,
}))

const jobsOptions = jobs.map((x) => ({
  label: x,
  value: x,
}))

const yearsOptions = Array.from({ length: 100 }).map((x, i) => ({
  label: (1921 + i).toString(),
  value: (1921 + i).toString(),
}))

export const Education = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Menntun og ferilskrá
    </Text>
    <Text variant="h3">Persónuupplýsingar</Text>
    <Text marginBottom={3}>Gögn sótt úr Mínar síður</Text>
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
        <Select
          size="sm"
          name="nam_profgrada"
          label="Nám/Prófgraða"
          placeholder="Veldu nám/prófgráðu"
          options={educationOptions}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <Select
          size="sm"
          name="haskolagrada"
          label="Háskólagráða"
          placeholder="Veldu nám/prófgráðu"
          options={haskolagradaOptions}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <Select
          size="sm"
          name="nam_hofst"
          label="Nám hófst"
          placeholder="Ár"
          defaultValue={yearsOptions[50]}
          options={yearsOptions}
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <Select
          size="sm"
          name="nam_lauk"
          label="Námi lauk"
          placeholder="Ár"
          defaultValue={yearsOptions[50]}
          options={yearsOptions}
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
        <Button
          colorScheme="default"
          iconType="filled"
          icon="download"
          preTextIconType="filled"
          size="default"
          type="button"
          variant="text"
        >
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
