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
import { DatePickerController, InputController, RadioController } from '@cmp'

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
          <RadioController 
            id="currentEmploymentStatus"
            largeButtons={false}
            split="1/1"
            control={form.control} 
            options={[
              {label:"Ég er nemi", value:"student"},
              {label:"Ég er án atvinnu", value:"unemployed"},
              {label:"Ég er í hlutastarfi", value:"partTimeJob"},
              {label:"Ég er í tilfallandi vinnu", value:"incidentalJob"},
              {label:"Ég er í eigin atvinnurekstri", value:"independant"},
              {label:"Ég er í fæðingarorlofi", value:"parentalLeave"},
            ]}
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
        <RadioController 
            id="remainingVacation"
            largeButtons={false}
            split="1/2"
            control={form.control} 
            options={[
              {label:"Já, ég á ótekið orlof við starfslok", value:"hasRemainingVacation"},
              {label:"Nei, ég á ekkert ótekið orlof við starfsloku", value:"noRemainingVacation"},
            ]}
          />
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
