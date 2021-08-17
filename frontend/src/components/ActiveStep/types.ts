import { UseFormReturn } from "react-hook-form";

export type Options = any
export type ID = string

export interface Step {
  id: ID
  title: string
  options: {}
  component: ({ options, form }: ActiveStepComponentProps) => JSX.Element
  next?: string
}

export interface ActiveStepProps {
  stepInfo: Step
  formData: {}
  applicationId: number
}

export interface ActiveStepComponentProps {
  options: any
  form: UseFormReturn
}
