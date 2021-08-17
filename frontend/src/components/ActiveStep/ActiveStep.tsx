import { Button } from '@island.is/island-ui/core'
import { useApplicationUpdater } from 'lib/applicationData'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ActiveStepProps } from './types'

export const ActiveStep = ({ stepInfo, applicationId, formData }: ActiveStepProps) => {
  const form = useForm({ defaultValues: formData })
  const { handleSubmit } = form
  const router = useRouter()

  const updateApplication = useApplicationUpdater(applicationId)

  const onSubmit = async (data: any) => {
    updateApplication(data)
      .then(() => {
        if (stepInfo.next) {
          router.push(`/umsokn/${stepInfo.next}`)
        }
      })
      .catch(e => {
        console.log(e)
        alert('error came ups')
      })
  }

  const { component: Cmp, options } = stepInfo

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Cmp options={options} form={form} />

      <Button type="submit">Áfram</Button>
    </form>
  )
}
