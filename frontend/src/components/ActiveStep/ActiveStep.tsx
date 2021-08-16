import React from 'react'
import { useForm } from 'react-hook-form'
import { ActiveStepProps } from './types'

export const ActiveStep = ({ stepInfo }: ActiveStepProps) => {
  const form = useForm()
  const { handleSubmit } = form

  const onSubmit = (data: any) => {
    console.log({ data })
    // save data?
    // goto next step?
  }

  const {
    component: Cmp,
    options,
  } = stepInfo

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Cmp options={options} form={form} />
    </form>
  )
}
