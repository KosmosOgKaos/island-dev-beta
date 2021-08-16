import { Education } from './Education'
import { DataConsent } from './DataConsent'
import type { ID, Step } from 'src/components/ActiveStep'

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
]

export const getFormStep = (key: ID) => {
  return formSteps.find(({ id }) => id === key)
}
