import React from 'react'
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  Stack,
} from '@island.is/island-ui/core'
import { ActiveStepComponentProps } from '../ActiveStep'

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
  } = form.getValues()

  return (
    <Box>
      <Text variant="h2" marginBottom={5}>
        Yfirlit og senda umsókn
      </Text>
      <Accordion dividerOnTop={false}>
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
                  Núverandi staða á vinnumarkaði: {currentEmploymentStatus}
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
            </Stack>
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr3"
          label="Atvinnuupplýsingar"
          visibleContent="Framtíðaróskir og vinnufærni"
        >
          <Box background="blue100" padding={3}>
            bla2
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr4"
          label="Menntun og ferilskrá"
          visibleContent="Námsferill, starfsferill, ökuréttindi og fleira"
        >
          <Box background="blue100" padding={3}>
            bla3
          </Box>
        </AccordionItem>

        <AccordionItem
          id="nr5"
          label="Þín réttindi"
          visibleContent="Áætlaðar tekjur á mánuði, bankaupplýsingar og fleira"
        >
          <Box background="blue100" padding={3}>
            bla4
          </Box>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
