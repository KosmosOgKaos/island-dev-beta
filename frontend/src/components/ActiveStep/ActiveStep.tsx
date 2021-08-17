import { Button } from '@island.is/island-ui/core'
import router, { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ActiveStepProps } from './types'

export const ActiveStep = ({ stepInfo, formData }: ActiveStepProps) => {
  const form = useForm({ defaultValues: formData })
  const { handleSubmit } = form
  const router = useRouter()

  const onSubmit = (data: any) => {
    console.log(data)
    // save data?
    // goto next step?

    if (stepInfo.next) {
      //router.push(`/umsokn/${stepInfo.next}`)
    }
  }

  const { component: Cmp, options } = stepInfo

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Cmp options={options} form={form} />

      <Button type="submit">Áfram</Button>
    </form>
  )
}
