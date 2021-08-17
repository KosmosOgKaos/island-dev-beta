import React from 'react'
import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridRow,
  Text,
  GridColumns,
  ResponsiveProp,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import lifeyrir from '../../static/lifeyrir.json'
import lifeyrir2 from '../../static/lifeyrir2.json'
import education from '../../static/education.json'
import { InputController, SelectController } from '@cmp'
import { ActiveStepComponentProps } from '../ActiveStep'

const lifeyrir2Options = lifeyrir2.map((x) => ({
  label: x,
  value: x,
}))

const lifeyrirOptions = lifeyrir.map((x) => ({
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

const thekkingOptions = [
  {
    label: 'Engin',
    value: 'Engin',
  },
  {
    label: 'Sæmileg',
    value: 'Sæmileg',
  },
  {
    label: 'Góð',
    value: 'Góð',
  },
  {
    label: 'Mjög góð',
    value: 'Mjög góð',
  },
]

const tolvuthekkingOptions = [
  {
    label: 'Stýrikerfi',
    value: 'Stýrikerfi',
  },
  {
    label: 'Forritunarmál',
    value: 'Forritunarmál',
  },
  {
    label: 'Gagnagrunnar',
    value: 'Gagnagrunnar',
  },
  {
    label: 'Tölvari',
    value: 'Tölvari',
  },
  {
    label: 'Vefumsjón',
    value: 'Vefumsjón',
  },
]

const tungumalOptions = [
  {
    label: 'Danska',
    value: 'Danska',
  },
  {
    label: 'Þýska',
    value: 'Þýska',
  },
  {
    label: 'Franska',
    value: 'Franska',
  },
]

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

const AddLine = () => (
  <GridRow>
    <GridColumn span={gridSpacing} paddingBottom={3}>
      <Button variant="text" as="span">
        Bæta við línu
      </Button>
    </GridColumn>
  </GridRow>
)

export const Rights = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={2}>
      Þín réttindi
    </Text>

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Bankaupplýsingar, lífeyrissjóður og stéttarfélag
    </Text>

    <GridRow>
      <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={3}>
        <InputController
          id="banki"
          name="banki"
          control={form.control}
          required
          label="Banki"
          rules={{
            pattern: {
              value: /^\d{3,4}$/,
              message: 'Banki þarf að vera 3-4 tölustafir',
            },
          }}
        />
      </GridColumn>
      <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={3}>
        <InputController
          id="hofudbok"
          name="hofudbok"
          control={form.control}
          required
          label="Höfuðb."
          rules={{
            pattern: {
              value: /^\d{2}$/,
              message: 'Höfuðbók þarf að vera 2 tölustafir',
            },
          }}
        />
      </GridColumn>
      <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={3}>
        <InputController
          id="reikningsnumer"
          name="reikningsnumer"
          control={form.control}
          required
          label="Reikningsnúmer"
          rules={{
            pattern: {
              value: /^\d{1,6}$/,
              message: 'Reikningsnúmer þarf að vera allt að 6 tölustafir',
            },
          }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={['12/12', '12/12', '6/12']} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="lifeyrissjodur"
          name="lifeyrissjodur"
          label="Lífeyrissjóður"
          placeholder="Veldu lífeyrissjóð"
          options={lifeyrir2Options}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={['12/12', '12/12', '6/12']} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="vidbotarlifeyrissparnadur"
          name="vidbotarlifeyrissparnadur"
          label="Viðbótarlífeyrissparnaður"
          placeholder="Veldu viðbótarlífeyrissparnað"
          options={lifeyrirOptions}
        />
      </GridColumn>
    </GridRow>
  </Box>
)
