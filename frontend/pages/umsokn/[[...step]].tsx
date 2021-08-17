import type { NextPage } from 'next'
import { createLoginStore } from '../../lib/loginStore'
import { useRouter } from 'next/router'
import { ActiveStep } from 'src/components/ActiveStep'
import { getFormStep } from 'src/components/formSteps'
import { useEffect } from 'react'
import { FormLayout } from '@cmp'
import { Box, Text } from '@island.is/island-ui/core'
import { useApplicationData } from 'lib/applicationData/'

const Umsokn: NextPage = () => {
  const { isLoggedIn, getUser } = createLoginStore()

  const router = useRouter()
  const { step } = router.query
  const activeStep = Array.isArray(step) ? step[0] : null

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login')
    }
  })

  const {
    data,
    loading,
    error
  } = useApplicationData(getUser())

  const stepInfo = activeStep ? getFormStep(activeStep) : null

  useEffect(() => {
    if (!activeStep) {
      router.push('/umsokn/gagnaoflun')
    }
  })

  return (
    <FormLayout activeState={stepInfo?.id}>
      <Text variant='h2'>Umsókn um atvinnuleysisbætur</Text>

      {loading && (
        <Text variant="h2">LOADING</Text>
      )}
      {error && (
        <Text variant="h2">ERROR {error.toString()}</Text>
      )}

      {data && (
        <Box>
          {activeStep ? (
            <ActiveStep
              stepInfo={stepInfo}
              applicationId={data.id}
              formData={data.formData}
            />
          ) : (
            <Box>
              sorry no umsokn on this url try something else
            </Box>
          )}
        </Box>
      )}
    </FormLayout>
  )
}

export default Umsokn
