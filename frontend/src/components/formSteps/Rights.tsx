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
  Table as T,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import lifeyrir from '../../static/lifeyrir.json'
import lifeyrir2 from '../../static/lifeyrir2.json'
import education from '../../static/education.json'
import stettarfelog from '../../static/stettarfelog.json'
import { InputController, SelectController, DatePickerController } from '@cmp'
import { ActiveStepComponentProps } from '../ActiveStep'
import { RadioController } from '../RadioController'
import { unemploymentCalculator } from 'lib/calculate'
import { format, getMonth, getYear } from 'date-fns'
import { is } from 'date-fns/locale'
import { useWatch } from 'react-hook-form'

const lifeyrir2Options = lifeyrir2.map((x) => ({
  label: x,
  value: x,
}))

const lifeyrirOptions = lifeyrir.map((x) => ({
  label: x,
  value: x,
}))

const stettarfelogOptions = stettarfelog.map((x) => ({
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
      <GridColumn
        span={['12/12', '12/12', '12/12', '4/12', '4/12']}
        paddingBottom={3}
      >
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
      <GridColumn
        span={['12/12', '12/12', '12/12', '4/12', '2/12']}
        paddingBottom={3}
      >
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
      <GridColumn
        span={['12/12', '12/12', '12/12', '4/12', '6/12']}
        paddingBottom={3}
      >
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
      <GridColumn span={gridSpacing} paddingBottom={3}>
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
      <GridColumn
        span={['12/12', '12/12', '12/12', '12/12', '6/12']}
        paddingBottom={3}
      >
        <SelectController
          control={form.control}
          id="vidbotarlifeyrissparnadur"
          name="vidbotarlifeyrissparnadur"
          label="Viðbótarlífeyrissparnaður"
          placeholder="Veldu viðbótarlífeyrissparnað"
          options={lifeyrirOptions}
        />
      </GridColumn>
      <GridColumn
        span={['12/12', '12/12', '12/12', '12/12', '6/12']}
        paddingBottom={3}
      >
        <Box
          display="flex"
          height="full"
          alignItems="center"
          paddingTop={[0, 0, 0, 0, 2]}
        >
          <RadioController
            control={form.control}
            id="vidbotarlifeyrissparnadur_hlutfall"
            name="vidbotarlifeyrissparnadur_hlutfall"
            split={'1/4'}
            largeButtons={false}
            options={[
              {
                label: '1%',
                value: '1%',
              },
              {
                label: '2%',
                value: '2%',
              },
              {
                label: '3%',
                value: '3%',
              },
              {
                label: '4%',
                value: '4%',
              },
            ]}
          />
        </Box>
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="stettarfelag"
          name="Stéttarfélag"
          label="Stéttarfélag"
          placeholder="Veldu stéttarfélag"
          options={stettarfelogOptions}
        />
      </GridColumn>
    </GridRow>
    <Divide />
    <Text variant="h3" marginBottom={3}>
      Persónuafsláttur
    </Text>
    <RadioController
      control={form.control}
      id="nyta_personuafslatt"
      name="nyta_personuafslatt"
      split={'1/2'}
      largeButtons={false}
      rules={{
        required: 'Hér þarf að svara já eða nei',
      }}
      options={[
        {
          label: 'Já, Vinnumálastofnun nýti persónuafslátt minn',
          value: 'Já',
        },
        {
          label: 'Nei, Vinnumálastofnun nýti ekki persónuafslátt minn',
          value: 'Nei',
        },
      ]}
    />
    <Divide />
    <Text variant="h3" marginBottom={3}>
      Upphaf bótagreiðslna
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <DatePickerController
          control={form.control}
          size="sm"
          locale="is"
          id="upphafsdagsetning_botagreidslna"
          name="upphafsdagsetning_botagreidslna"
          label="Óska eftir að greiðslur hefjist"
          placeholder="Veldu dagsetningu"
        />
      </GridColumn>
    </GridRow>
    <Divide />
    <Text variant="h3" marginBottom={3}>
      Áætlaðar tekjur á mánuði
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={6}>
        <TableRows form={form} />
      </GridColumn>
    </GridRow>
  </Box>
)

const TableRows = ({ form }) => {
  const { getTable } = unemploymentCalculator({
    hlutfallPersAfsl: 0,
  })
  const { upphafsdagsetning_botagreidslna: startDate } = useWatch({
    defaultValue: form.getValues().upphafsdagsetning_botagreidslna,
    control: form.control,
  })

  if (!startDate) {
    return null
  }

  return (
    <>
      <T.Table>
        <T.Row>
          <T.HeadData>Ár</T.HeadData>
          <T.HeadData>Mánuður</T.HeadData>
          <T.HeadData>Bóttarréttur</T.HeadData>
          <T.HeadData>Heildarlaun</T.HeadData>
          <T.HeadData>Lífeyrisgreiðsla</T.HeadData>
          <T.HeadData>Staðgreiðsla</T.HeadData>
          <T.HeadData>Útborguð laun</T.HeadData>
        </T.Row>
        <T.Body>
          {getTable(new Date(startDate)).map((row, i) => {
            return (
              <T.Row key={i}>
                <T.Data>{getYear(row.monthStart)}</T.Data>
                <T.Data>
                  {format(row.monthStart, 'MMMM', { locale: is })}
                </T.Data>
                <T.Data>{`${row.botarettur * 100}%`}</T.Data>
                <T.Data>
                  {row.heildarlaun.toLocaleString('De-de', {
                    maximumFractionDigits: 0,
                  })}
                </T.Data>
                <T.Data>-</T.Data>
                <T.Data>-</T.Data>
                <T.Data>-</T.Data>
              </T.Row>
            )
          })}
        </T.Body>
        <T.Foot></T.Foot>
      </T.Table>
    </>
  )
}
