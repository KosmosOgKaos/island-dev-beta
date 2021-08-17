import { Education } from './Education'
import { DataConsent } from './DataConsent'
import { EmploymentInfo } from './EmploymentInfo'
import type { ID, Step } from 'src/components/ActiveStep'
import { FormStepperSection } from '@island.is/island-ui/core'

export const formSteps: Step[] = [
  {
    id: 'gagnaoflun',
    title: 'Gagnaöflun',
    options: {},
    next: 'education',
    component: DataConsent,
  },

  {
    id: 'education',
    title: 'Menntun',
    options: {},
    component: Education,
  },

  {
    id: 'atvinnuupplysingar',
    title: 'Atvinnuupplýsingar',
    options: {},
    next: 'education',
    component: EmploymentInfo,
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
