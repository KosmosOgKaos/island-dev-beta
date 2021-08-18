import React from 'react'
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  Stack,
} from '@island.is/island-ui/core'
import { ActiveStepComponentProps } from '../ActiveStep'
import { EstimatedIncomeTable } from '../EstimatedIncomeTable'

const currentEmploymentStatusLabels = {
  student: 'Nemi',
  unemployed: 'Án atvinnu',
  partTimeJob: 'Í hlutastarfi',
  incidentalJob: 'Í tilfallandi vinnu',
  independant: 'Í eigin atvinnurekstri',
  faedingarorlof: 'Í fæðingarorlofi',
}

export const Summary = ({ options, form }: ActiveStepComponentProps) => {
  const {
    company_name,
    employment_percentage,
    contact,
    contact_email,
    nam_profgrada,
    haskolagrada,
    nam_hofst,
    nam_lauk,
    annad_nam_profgrada_1,
    annad_nam_hofst_1,
    annad_nam_lauk_1,
    ritvinnsla_thekking,
    toflureiknir_thekking,
    islenska_thekking,
    enska_thekking,
    umsagnaradili_1_heiti,
    umsagnaradili_1_stada,
    umsagnaradili_1_vinnustadur,
    umsagnaradili_1_simi,
    jobPercentageWish,
    veldu_svaedi,
    start_date,
    oskastarf_1,
    oskastarf_2,
    workability,
    banki,
    hofudbok,
    reikningsnumer,
    lifeyrissjodur,
    vidbotarlifeyrissparnadur,
    vidbotarlifeyrissparnadur_hlutfall,
    stettarfelag,
    nyta_personuafslatt,
    upphafsdagsetning_botagreidslna,
    ssn,
    name,
    address,
    postNumber,
    email,
    phoneNumber,
    city,
    dateQuitJob,
    remainingVacation,
    currentEmploymentStatus,
    tekjur_a_manudi,
    capital_income,
    pension_payment,
    greidslur_tryggingastofnun,
    onnur_haefni,
    atvinnurekandi,
    starfsheiti,
    haetti_i_starfi_dags,
    hof_starf_dags,
  } = form.getValues()

  return (
    <Box paddingBottom={6}>
      <Text variant="h2" marginBottom={5}>
        Yfirlit og senda umsókn
      </Text>
      <Accordion dividerOnBottom={false} dividerOnTop={false}>
        <AccordionItem
          id="nr1"
          label="Almennar upplýsingar"
          visibleContent="Þínar almennu upplýsingar"
        >
          <Box background="blue100" padding={3}>
            <Stack space={3}>
              <Stack space={1}>
                <Text variant="h4">Persónuupplýsingar</Text>
                <Text>Nafn: {name}</Text>
                <Text>Kennitala: {ssn}</Text>
                <Text>Heimilisfang: {address}</Text>
                <Text>Staður: {city}</Text>
                <Text>Póstnúmer: {postNumber}</Text>
                <Text>Tölvupóstur: {email}</Text>
                <Text>Sími: {phoneNumber}</Text>
              </Stack>

              <Stack space={1}>
                <Text variant="h4">Börn á framfærslu</Text>
                <Text>Nafn barns: Dóra Katrín Dóruson</Text>
                <Text>Kennitala barns: 123123-1234</Text>
              </Stack>
            </Stack>
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr2"
          label="Staða á vinnumarkaði"
          visibleContent="Staða atvinnu og meðaltekjur"
        >
          <Box background="blue100" padding={3}>
            <Stack space={3}>
              <Stack space={1}>
                <Text variant="h4">Staða</Text>
                <Text>
                  Núverandi staða á vinnumarkaði:{' '}
                  {currentEmploymentStatusLabels[currentEmploymentStatus]}
                </Text>
              </Stack>

              <Stack space={1}>
                <Text variant="h4">Síðasti vinnuveitandi</Text>
                <Text>Nafn fyrirtækis: {company_name}</Text>
                <Text>Starfshlutfall: {employment_percentage}</Text>
                <Text>Nafn tengiliðs: {contact}</Text>
                <Text>Netfang tengiliðs: {contact_email}</Text>
                <Text>Síðasti dagur í starfi: {dateQuitJob}</Text>
                <Text>
                  Ótekið orlof við starfslok:{' '}
                  {remainingVacation === 'noRemainingVacation' ? 'Nei' : 'Já'}
                </Text>
              </Stack>

              <Stack space={1}>
                <Text variant="h4">Meðaltekjur þínar síðustu 12 mánuði</Text>
                <Text>Nafn fyrirtækis: {company_name}</Text>
                <Text>Mánaðarlegar tekjur: {tekjur_a_manudi}</Text>
                <Text>Fjármagnstekjur: {capital_income}</Text>
                <Text>Lífeyrissjóðsgreiðslur: {pension_payment}</Text>
                <Text>Tryggingastofnun: {greidslur_tryggingastofnun}</Text>
              </Stack>
            </Stack>
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr3"
          label="Atvinnuupplýsingar"
          visibleContent="Framtíðaróskir og vinnufærni"
        >
          <Box background="blue100" padding={3}>
            <Stack space={3}>
              <Stack space={1}>
                <Text variant="h4">Framtíðaróskir</Text>
                <Text>
                  Starfshlutfall:
                  {jobPercentageWish === 'fullt_starf'
                    ? 'Fullt starf'
                    : 'Hlutastarf'}
                </Text>
                <Text>Svæði sem ég vil líka vinna á: {veldu_svaedi}</Text>
                <Text>Ég get hafið störf dags.: {start_date}</Text>
                <Text>Óskastarf 1: {oskastarf_1}</Text>
                <Text>Óskastarf 2: {oskastarf_2}</Text>
                <Text>Vinnufærni: {workability}</Text>
              </Stack>
            </Stack>
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr4"
          label="Menntun og ferilskrá"
          visibleContent="Námsferill, starfsferill, ökuréttindi og fleira"
        >
          <Box background="blue100" padding={3}>
            <Stack space={3}>
              <Stack space={1}>
                <Text variant="h4">Námsferill</Text>
                <Text>Nám/Prófgraða: {nam_profgrada}</Text>
                <Text>Háskólagráða: {haskolagrada}</Text>
                <Text>Nám hófst: {nam_hofst}</Text>
                <Text>Nám lauk: {nam_lauk}</Text>
              </Stack>

              <Stack space={1}>
                <Text variant="h4">Starfsferill</Text>
                <Text>Atvinnurekandi: {atvinnurekandi}</Text>
                <Text>Hóf störf: {hof_starf_dags}</Text>
                <Text>Hætti í starfi: {haetti_i_starfi_dags}</Text>
                <Text>Starfsheiti: {starfsheiti}</Text>
              </Stack>

              <Stack space={1}>
                <Text variant="h4">Annað</Text>
                <Text>Önnur hæfni: {onnur_haefni}</Text>
              </Stack>
            </Stack>
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr5"
          label="Þín réttindi"
          visibleContent="Áætlaðar tekjur á mánuði, bankaupplýsingar og fleira"
        >
          <Box background="blue100" padding={3}>
            <Stack space={3}>
              <Stack space={1}>
                <Text variant="h4">
                  Bankaupplýsingar, lífeyrissjóður og stéttarfélag
                </Text>
                <Text>Banki: {banki}</Text>
                <Text>Höfuðbók: {hofudbok}</Text>
                <Text>Reikningsnumer: {reikningsnumer}</Text>
                <Text>Lífeyrissjóður: {lifeyrissjodur}</Text>
                <Text>
                  Viðbótarlífeyrissparnaður: {vidbotarlifeyrissparnadur}
                </Text>
                <Text>
                  Hlutfall af viðbótarlífeyrissp.:{' '}
                  {vidbotarlifeyrissparnadur_hlutfall}
                </Text>
                <Text>Stéttarfélag: {stettarfelag}</Text>
              </Stack>

              <Stack space={1}>
                <Text variant="h4">Annað</Text>
                <Text>Nýta persónuafslátt: {nyta_personuafslatt}</Text>
                <Text>
                  Upphaf bótagreiðslna: {upphafsdagsetning_botagreidslna}
                </Text>
              </Stack>
              <EstimatedIncomeTable form={form} />
            </Stack>
          </Box>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
