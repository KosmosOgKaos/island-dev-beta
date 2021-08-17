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
import { ActiveStepComponentProps } from '../ActiveStep'
import { DatePickerController, InputController } from '@cmp'

export const EmploymentStatus = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Staða á vinnumarkaði
    </Text>
    <Text variant="h4" marginBottom={3}>
      Vinsamlegast merktu við núverandi stöðu á vinnumarkaði
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={3}>
        {/* <Inline space={3}> */}
          <RadioButton id="student" label="Ég er nemi"  />
          <RadioButton id="unemployed" label="Ég er án atvinnu" />
          <RadioButton id="partTimeJob" label="Ég er í hlutastarfi" />
          <RadioButton id="incidentalJob" label="Ég er í tilfallandi vinnu" />
          <RadioButton id="independant" label="Ég er í eigin atvinnurekstri" />
          <RadioButton id="parentalLeave" label="Ég er í fæðingarorlofi" />
        {/* </Inline> */}
      </GridColumn>
    </GridRow>
    <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
      <Divider />
    </GridColumn>
    <Text variant="h3" marginBottom={3}>
      Síðasti vinnuveitandi
    </Text>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="company_name"
          name="company_name"
          label="Nafn fyrirtækis"
          placeholder="Sláðu inn nafn fyrirtækis"
          control={form.control}
          required
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="employment_percentage"
          name="employment_percentage"
          label="Starfshlutfall"
          placeholder="Sláðu inn starfshlutfall"
          control={form.control}
          required
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="contact"
          name="contact"
          label="Nafn tengiliðs"
          placeholder="Sláðu inn nafn tengiliðs"
          control={form.control}
          required
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="contact_email"
          name="contact_email"
          label="Netfang tengiliðs"
          placeholder="Sláðu inn netfang tengiliðs"
          control={form.control}
          required
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <DatePicker label="Hætti í starfi" placeholderText="Veldu dagsetningu"/>
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn span="12/12" paddingBottom={3}>
        <Inline space={3}>
          <RadioButton id="remainingVacation" label="Já, ég á ótekið orlof við starfslok" />
          <RadioButton id="noRemainingVacation" label="Nei, ég á ekkert ótekið orlof við starfslok" />
        </Inline>
      </GridColumn>
    </GridRow>
    
    <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
      <Text variant="small" marginBottom={2}>Upplýsingar verða sendar á atvinnuveitanda til staðfestingar</Text>
      <Divider />
    </GridColumn>
    
    <Text variant="h3" marginBottom={3}>
      Meðaltekjur þínar síðustu 12 mánuði
    </Text>
    <Text variant="small" marginBottom={3}>
      Samkvæmt opinberum skrám
    </Text>

    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="monthly_revenue"
          name="monthly_revenue"
          label="Mánaðarlegar tekjur"
          placeholder="Sláðu inn mánaðarlegar tekjur"
          control={form.control}
          required
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="capital_income"
          name="capital_income"
          label="Fjármagnstekjur"
          placeholder="Sláðu inn fjármagnstekjur"
          control={form.control}
          required
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="pension_payment"
          name="pension_payment"
          label="Lífeyrissjóðsgreiðslur"
          placeholder="Sláðu inn lífeyrissjóðsgreiðslur"
          control={form.control}
          required
        />
      </GridColumn>
      <GridColumn span="6/12" paddingBottom={3}>
        <InputController
          id="insurance_institution"
          name="insurance_institution"
          label="Tryggingastofnun"
          placeholder="0 kr"
          control={form.control}
          required
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <DatePickerController size="sm" label="Hætti í starfi" id="dateQuitJob" placeholder="Veldu dagsetningu" control={form.control}  />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="6/12" paddingBottom={3}>
        <Button variant="text" as="span">
          Bæta við tekjum
        </Button>
      </GridColumn>
      <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
        <Divider />
      </GridColumn>
    </GridRow>
  </Box>
)
