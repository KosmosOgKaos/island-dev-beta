import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  GridColumn,
  GridRow,
  Inline,
  RadioButton,
  Text,
  GridColumns,
  ResponsiveProp,
  Icon,
  Input,
  InputFileUpload,
} from '@island.is/island-ui/core'
import jobs from '../../static/jobs.json'
import haskolagrada from '../../static/haskolagrada.json'
import education from '../../static/education.json'
import { ActiveStepComponentProps } from '../ActiveStep'
import { CheckboxController, InputController, SelectController } from '@cmp'

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

export const Education = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={5}>
      Menntun og ferilskrá
    </Text>
    <Text variant="h3">Námsferill</Text>
    <Text marginBottom={3}>Gögn sótt úr Mínar síður</Text>

    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          id="nam_profgrada"
          name="nam_profgrada"
          label="Nám/Prófgraða"
          placeholder="Veldu nám/prófgráðu"
          options={educationOptions}
          control={form.control}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          id="haskolagrada"
          name="haskolagrada"
          label="Háskólagráða"
          placeholder="Veldu nám/prófgráðu"
          options={haskolagradaOptions}
          control={form.control}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          id="nam_hofst"
          name="nam_hofst"
          label="Nám hófst"
          placeholder="Ár"
          options={yearsOptions}
          control={form.control}
          rules={{
            required: 'Vinsamlegast veldu ár',
          }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={6}>
        <SelectController
          control={form.control}
          id="nam_lauk"
          name="nam_lauk"
          label="Námi lauk"
          placeholder="Ár"
          options={yearsOptions}
          rules={{
            required: 'Vinsamlegast veldu ár',
          }}
        />
      </GridColumn>
    </GridRow>
    <Text variant="h3" marginBottom={3}>
      Önnur menntun
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="annad_nam_profgrada_1"
          name="annad_nam_profgrada_1"
          label="Nám/Prófgraða"
          placeholder="Veldu nám/prófgráðu"
          options={educationOptions}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="annad_nam_hofst_1"
          name="annad_nam_hofst_1"
          label="Nám hófst"
          placeholder="Ár"
          options={yearsOptions}
          rules={{
            required: 'Vinsamlegast veldu ár',
          }}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="annad_nam_lauk_1"
          name="annad_nam_lauk_1"
          label="Námi lauk"
          placeholder="Ár"
          options={yearsOptions}
          rules={{
            required: 'Vinsamlegast veldu ár',
          }}
        />
      </GridColumn>
    </GridRow>

    <AddLine />

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Starfsferill
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="nam_profgrada"
          name="nam_profgrada"
          label="Nám/Prófgraða"
          placeholder="Veldu nám/prófgráðu"
          options={educationOptions}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="nam_hofst"
          name="nam_hofst"
          label="Nám hófst"
          placeholder="Ár"
          options={yearsOptions}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="nam_lauk"
          name="nam_lauk"
          label="Námi lauk"
          placeholder="Ár"
          options={yearsOptions}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="nam_profgrada"
          name="nam_profgrada"
          label="Nám/Prófgraða"
          placeholder="Veldu nám/prófgráðu"
          options={educationOptions}
        />
      </GridColumn>
    </GridRow>

    <AddLine />

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Ökuréttindi
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={1}>
        <Inline space={3}>
          <CheckboxController
            id="drivingLicenseB"
            label="B réttindi"
            labelVariant="default"
            control={form.control}
          />
          <Icon type="filled" icon="car" />
        </Inline>
      </GridColumn>
    </GridRow>

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Önnur hæfni
    </Text>
    <GridRow>
      <GridColumn span="12/12" paddingBottom={1}>
        <InputController
          id="onnur_haefni"
          name="onnur_haefni"
          placeholder="Önnur færni og áhugamál (þáttaka í félagsstarfi og annað)"
          control={form.control}
          textarea
        />
      </GridColumn>
    </GridRow>

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Tölvuþekking
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <Input
          size="sm"
          name="ritvinnsla"
          label="Heiti"
          value="Ritvinnsla (Word)"
          disabled
          placeholder="Ritvinnsla (Word)"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="ritvinnsla_thekking"
          name="ritvinnsla_thekking"
          label="Þekking"
          placeholder="Veldu þekkingu"
          options={thekkingOptions}
          required
          rules={{
            required: 'Vinsamlegast veldu þekkingu',
          }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <Input
          size="sm"
          name="toflureiknir"
          label="Heiti"
          value="Töflureiknir (Excel)"
          disabled
          placeholder="Töflureiknir (Excel)"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="toflureiknir_thekking"
          name="toflureiknir_thekking"
          label="Þekking"
          placeholder="Veldu þekkingu"
          options={thekkingOptions}
          required
          rules={{
            required: 'Vinsamlegast veldu þekkingu',
          }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="tolvuthekking_1"
          name="tolvuthekking_1"
          label="Heiti"
          options={tolvuthekkingOptions}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="tolvuthekking_1_thekking"
          name="tolvuthekking_1_thekking"
          label="Þekking"
          placeholder="Veldu þekkingu"
          options={thekkingOptions}
        />
      </GridColumn>
    </GridRow>

    <AddLine />

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Tungumálakunnátta
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <Input
          size="sm"
          name="islenska"
          label="Heiti"
          value="Íslenska"
          disabled
          placeholder="Íslenska"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="islenska_thekking"
          name="islenska_thekking"
          label="Þekking"
          placeholder="Veldu þekkingu"
          options={thekkingOptions}
          required
          rules={{
            required: 'Vinsamlegast veldu þekkingu',
          }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <Input
          size="sm"
          name="enska"
          label="Heiti"
          value="Enska"
          disabled
          placeholder="Enska"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="enska_thekking"
          name="enska_thekking"
          label="Þekking"
          placeholder="Veldu þekkingu"
          options={thekkingOptions}
          required
          rules={{
            required: 'Vinsamlegast veldu þekkingu',
          }}
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="tungumal_1"
          name="tungumal_1"
          label="Heiti"
          placeholder="Annað"
          options={tungumalOptions}
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <SelectController
          control={form.control}
          id="tungumal_1_thekking"
          name="tungumal_1_thekking"
          label="Þekking"
          placeholder="Veldu þekkingu"
          options={thekkingOptions}
        />
      </GridColumn>
    </GridRow>

    <AddLine />

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Umsagnaraðilar / Meðmælendur
    </Text>
    <GridRow>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          id="umsagnaradili_1_heiti"
          name="umsagnaradili_1_heiti"
          label="Heiti umsagnaraðila"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          name="umsagnaradili_1_stada"
          id="umsagnaradili_1_stada"
          label="Staða umsagnaraðila"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          name="umsagnaradili_1_vinnustadur"
          id="umsagnaradili_1_vinnustadur"
          label="Vinnustaður"
        />
      </GridColumn>
      <GridColumn span={gridSpacing} paddingBottom={3}>
        <InputController
          control={form.control}
          name="umsagnaradili_1_simi"
          id="umsagnaradili_1_simi"
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

    <AddLine />

    <Divide />

    <Text variant="h3" marginBottom={3}>
      Meðfylgjandi skjöl
    </Text>
    <Box marginBottom={6}>
      <InputFileUpload
        fileList={[]}
        header="Ferilskrá, Kynningarbréf, Meðmælabréf, Prófskírteini, Annað"
        description="Tekið er við skjölum með endingu: .pdf, .docx, .rtf"
        buttonLabel="Velja skjöl til að hlaða upp"
        onChange={() => {
          console.log('changed')
        }}
        onRemove={() => {
          console.log('removed')
        }}
        // errorMessage={state.length > 0 ? error : undefined}
      />
    </Box>
  </Box>
)
