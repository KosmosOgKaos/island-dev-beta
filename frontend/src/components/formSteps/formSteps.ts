import { SomeView } from './SomeView'
import { SomeOtherView } from './SomeOtherView'
import type { Step } from 'src/components/ActiveStep'

export const formSteps: { [key: string]: Step } = {
  gagnaoflun: {
    title: 'Gagnaöflun',
    options: {},
    component: SomeOtherView,
  },

  menntun: {
    title: 'Menntun',
    options: {},
    component: SomeView,
  },
  // more steps
}

export const getFormStep = (key: FormStepKey) => {
  return formSteps[key] ?? null
}

export type FormStepKey = keyof typeof formSteps
