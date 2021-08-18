import { useApplicationUpdater } from 'lib/applicationData'
import { useRouter } from 'next/router'
import { Box, Button } from '@island.is/island-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ActiveStepProps } from './types'

export const ActiveStep = ({
  stepInfo,
  applicationId,
  formData,
}: ActiveStepProps) => {
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
      .catch((e) => {
        console.log(e)
        alert('error came ups')
      })
  }

  const { component: Cmp, options } = stepInfo

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingTop={10} paddingX={[4, 4, 12]}>
        <Cmp options={options} form={form} />
      </Box>

      <Box
        paddingY={5}
        paddingX={[4, 4, 12]}
        borderTopWidth="standard"
        borderStyle="solid"
        borderColor="purple100"
        display="flex"
        flexDirection="row"
        justifyContent={stepInfo.prev ? 'spaceBetween' : 'flexEnd'}
      >
        {!(stepInfo.prev || stepInfo.next) && (
          <Button type="submit" icon="arrowForward">
            Mínar síður
          </Button>
        )}
        {stepInfo.prev && (
          <Button
            variant="ghost"
            onClick={() => {
              router.push(`/umsokn/${stepInfo.prev}`)
            }}
          >
            Til baka
          </Button>
        )}
        {stepInfo.next && (
          <Button type="submit" icon="arrowForward">
            Halda áfram
          </Button>
        )}
      </Box>
    </form>
  )
}
