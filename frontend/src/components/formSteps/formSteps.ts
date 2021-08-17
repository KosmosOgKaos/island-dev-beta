import { Education } from './Education'
import { Overview } from './Overview'
import { DataConsent } from './DataConsent'
import type { ID, Step } from 'src/components/ActiveStep'
import { FormStepperSection } from '@island.is/island-ui/core'

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
    title: 'Yfirlit',
    options: {},
    next: 'menntun',
    component: Overview,
  },
  {
    id: 'menntun',
    title: 'Menntun',
    options: {},
    component: Education,
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
  }
)
