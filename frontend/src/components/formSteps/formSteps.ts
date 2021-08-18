import { Education } from './Education'
import { Overview } from './Overview'
import { DataConsent } from './DataConsent'
import { Summary } from './Summary'
import { EmploymentInfo } from './EmploymentInfo'
import { EmploymentStatus } from './EmploymentStatus'
import { Rights } from './Rights'
import type { ID, Step } from 'src/components/ActiveStep'
import { FormStepperSection } from '@island.is/island-ui/core'
import { FinalView } from './FinalView'

export const formSteps: Step[] = [
  {
    id: 'gagnaoflun',
    title: 'Gagnaöflun',
    options: {},
    next: 'yfirlit',
    component: DataConsent,
  },
  {
    id: 'yfirlit',
    title: 'Persónuupplysingar',
    options: {},
    prev: 'gagnaoflun',
    next: 'stada-a-vinnumarkadi',
    component: Overview,
  },
  {
    id: 'stada-a-vinnumarkadi',
    title: 'Staða á vinnumarkaði',
    options: {},
    prev: 'yfirlit',
    next: 'atvinnuupplysingar',
    component: EmploymentStatus,
  },
  {
    id: 'atvinnuupplysingar',
    title: 'Atvinnuupplýsingar',
    options: {},
    prev: 'stada-a-vinnumarkadi',
    next: 'menntun-og-ferilskra',
    component: EmploymentInfo,
  },
  {
    id: 'menntun-og-ferilskra',
    title: 'Menntun og ferilskrá',
    options: {},
    prev: 'atvinnuupplysingar',
    next: 'rettindi',
    component: Education,
  },
  {
    id: 'rettindi',
    title: 'Þín réttindi',
    options: {},
    prev: 'menntun-og-ferilskra',
    next: 'senda-umsokn',
    component: Rights,
  },
  {
    id: 'senda-umsokn',
    title: 'Yfirlit og senda umsókn',
    options: {},
    prev: 'rettindi',
    next: 'umsokn-mottekin',
    component: Summary,
  },
  {
    id: 'umsokn-mottekin',
    title: 'Umsókn móttekin',
    options: {},
    prev: 'senda-umsokn',
    component: FinalView,
  },
]

export const getFormStep = (key: ID) => {
  return formSteps.find(({ id }) => id === key)
}

export const getFormStepIndex = (key: ID) => {
  return formSteps.indexOf(getFormStep(key))
}

// eventually reduce or something based on parent/child
export const formStepSections: FormStepperSection[] = formSteps.map(
  (step: Step) => {
    return {
      name: step.title,
      children: [],
    }
  },
)
