import type { NextPage } from 'next'
import { createLoginStore } from '../../lib/loginStore'
import { useRouter } from 'next/router'
import { Application } from 'src/components/Application'
import { ActiveStep } from 'src/components/ActiveStep'
import { getFormStep } from 'src/components/formSteps'
import { useEffect } from 'react'
import { FormLayout } from '@cmp'
import { Box, Text } from '@island.is/island-ui/core'

const Umsokn: NextPage = () => {
  const { isLoggedIn, getUser } = createLoginStore()

  const router = useRouter()
  const { step } = router.query
  const activeStep = (Array.isArray(step) ? step[0] : null) as FormStepKey|null

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login')
    }
  })

  // username is the ssn
  const { username: ssn } = getUser()

  // TODO: get existing data:
  const formData = {}

  const stepInfo = activeStep ? getFormStep(activeStep) : null

  console.log({ stepInfo, activeStep })

  return (
    <FormLayout activeState={1}>
      <Text variant='h2'>Umsókn um atvinnuleysisbætur</Text>

      <Box>
        {activeStep ? (
          <ActiveStep stepInfo={stepInfo} formData={formData} />
        ) : (
          <Box>
            sorry no umsokn on this url try something else
          </Box>
        )}
      </Box>
    </FormLayout>
  )
}

export default Umsokn
