import { UseFormReturn } from "react-hook-form";

export type Options = any

export interface Step {
  title: string
  options: {}
  component: ({ options, form }: ActiveStepComponentProps) => JSX.Element
}

export interface ActiveStepProps {
  stepInfo: Step
}

export interface ActiveStepComponentProps {
  options: any
  form: UseFormReturn
}
