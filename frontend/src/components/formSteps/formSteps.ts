import { Education } from './Education'
import { Overview } from './Overview'
import { DataConsent } from './DataConsent'
import { EmploymentInfo } from './EmploymentInfo'
import { EmploymentStatus } from './EmploymentStatus'
import { Rights } from './Rights'
import type { ID, Step } from 'src/components/ActiveStep'
import { FormStepperSection } from '@island.is/island-ui/core'

export const formSteps: Step[] = [
  {
    id: 'gagnaoflun',
    title: 'Gagnaöflun',
    options: {},
    next: 'stada-a-vinnumarkadi',
    component: DataConsent,
  },
  {
    id: 'yfirlit',
    title: 'Yfirlit',
    options: {},
    next: 'menntun',
    component: Overview,
  },
  {
    id: 'stada-a-vinnumarkadi',
    title: 'Staða á vinnumarkaði',
    options: {},
    next: 'menntun-og-ferilskra',
    component: EmploymentStatus,
  },
  {
    id: 'menntun-og-ferilskra',
    title: 'Menntun og ferilskrá',
    options: {},
    component: Education,
  },
  {
    id: 'atvinnuupplysingar',
    title: 'Atvinnuupplýsingar',
    options: {},
    next: 'menntun-og-ferilskra',
    component: EmploymentInfo,
  },
  {
    id: 'rettindi',
    title: 'Þín réttindi',
    options: {},
    next: 'menntun',
    component: Rights,
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
