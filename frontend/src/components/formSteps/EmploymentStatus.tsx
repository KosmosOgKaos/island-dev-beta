import React from 'react'
import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridColumns,
  GridRow,
  ResponsiveProp,
  Text,
} from '@island.is/island-ui/core'
import { ActiveStepComponentProps } from '../ActiveStep'
import {
  DatePickerController,
  InputController,
  RadioController,
  SelectController,
} from '@cmp'

const gridSpacing = [
  '12/12',
  '6/12',
  '12/12',
  '6/12',
] as ResponsiveProp<GridColumns>

const percentageOptions = Array.from({ length: 101 })
  .map((x, i) => ({
    label: `${i.toString()}%`,
    value: `${i.toString()}%`,
  }))
  .reverse()

export const EmploymentStatus = ({
  options,
  form,
}: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Staða á vinnumarkaði
    </Text>
    <Text variant="h4" marginBottom={3}>
      Vinsamlegast merktu við núverandi stöðu á vinnumarkaði
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={3}>
        <RadioController
          id="currentEmploymentStatus"
          name="currentEmploymentStatus"
          largeButtons={false}
          split="1/1"
          control={form.control}
          options={[
            { label: 'Ég er nemi', value: 'student' },
            { label: 'Ég er án atvinnu', value: 'unemployed' },
            { label: 'Ég er í hlutastarfi', value: 'partTimeJob' },
            { label: 'Ég er í tilfallandi vinnu', value: 'incidentalJob' },
            { label: 'Ég er í eigin atvinnurekstri', value: 'independant' },
            { label: 'Ég er í fæðingarorlofi', value: 'faedingarorlof' },
          ]}
          // rules={{
          //   required: 'Vinsamlegast veldu hnappinn sem á við um þig',
          // }}
        />
      </GridColumn>
    </GridRow>
    <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
      <Divider />
    </GridColumn>
    <Text variant="h3" marginBottom={3}>
      Síðasti vinnuveitandi
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="company_name"
          name="company_name"
          label="Nafn fyrirtækis"
          placeholder="Sláðu inn nafn fyrirtækis"
          control={form.control}
          required
          // rules={{
          //   required: 'Vinsamlegast sláðu inn nafn fyrirtækis',
          // }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="employment_percentage"
          name="employment_percentage"
          label="Starfshlutfall"
          placeholder="Veldu 0-100%"
          options={percentageOptions}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="contact"
          name="contact"
          label="Nafn tengiliðs"
          placeholder="Sláðu inn nafn tengiliðs"
          control={form.control}
          required
          // rules={{
          //   required: 'Vinsamlegast sláðu inn nafn tengiliðs',
          // }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="contact_email"
          name="contact_email"
          label="Netfang tengiliðs"
          placeholder="Sláðu inn netfang tengiliðs"
          control={form.control}
          required
          type="email"
          // rules={{
          //   pattern: {
          //     value: /\S+@\S+\.\S+/,
          //     message: 'Netfang þarf að vera gilt',
          //   },
          // }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <DatePickerController
          size="sm"
          label="Hætti í starfi"
          locale="is"
          id="dateQuitJob"
          placeholder="Veldu dagsetningu"
          control={form.control}
          required
          // rules={{
          //   required: 'Vinsamlegast veldu dagsetningu',
          // }}
        />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn span="12/12" paddingBottom={3}>
        <RadioController
          id="remainingVacation"
          largeButtons
          backgroundColor="white"
          split="1/2"
          control={form.control}
          options={[
            {
              label: 'Já',
              subLabel: 'Ég á ótekið orlof við starfslok',
              value: 'hasRemainingVacation',
            },
            {
              label: 'Nei',
              subLabel: 'Ég á ekkert ótekið orlof við starfsloku',
              value: 'noRemainingVacation',
            },
          ]}
          // rules={{
          //   required: 'Vinsamlegast veldu annan hnappinn',
          // }}
        />
      </GridColumn>
    </GridRow>

    <Box paddingBottom={3} paddingTop={2}>
      <Text variant="small">
        Upplýsingar verða sendar á atvinnuveitanda til staðfestingar
      </Text>
    </Box>
    <Box paddingBottom={4}>
      <Divider />
    </Box>

    <Text variant="h3" marginBottom={3}>
      Meðaltekjur þínar síðustu 12 mánuði
    </Text>
    <Text marginBottom={3}>Samkvæmt opinberum skrám</Text>

    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="tekjur_a_manudi"
          name="tekjur_a_manudi"
          label="Mánaðarlegar tekjur"
          placeholder="Sláðu inn mánaðarlegar tekjur"
          control={form.control}
          currency
          required
          rules={{
            required: 'Vinsamlegast sláðu inn mánaðarlegar tekjur',
          }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="capital_income"
          name="capital_income"
          label="Fjármagnstekjur"
          placeholder="Sláðu inn fjármagnstekjur"
          control={form.control}
          currency
          required
          // rules={{
          //   required: 'Vinsamlegast sláðu inn fjármagnstekjur',
          // }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="pension_payment"
          name="pension_payment"
          label="Lífeyrissjóðsgreiðslur"
          placeholder="Sláðu inn lífeyrissjóðsgreiðslur"
          control={form.control}
          currency
          required
          // rules={{
          //   required: 'Vinsamlegast sláðu inn lífeyrissjóðsgreiðslur',
          // }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          id="greidslur_tryggingastofnun"
          name="greidslur_tryggingastofnun"
          label="Tryggingastofnun"
          placeholder="0 kr"
          control={form.control}
          currency
          required
          // rules={{
          //   required: 'Vinsamlegast sláðu inn tekjur frá tryggingastofnun',
          // }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <Button variant="text" as="span">
          Bæta við tekjum
        </Button>
      </GridColumn>
    </GridRow>
  </Box>
)
