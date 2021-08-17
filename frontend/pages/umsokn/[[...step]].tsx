import type { NextPage } from 'next'
import { createLoginStore } from '../../lib/loginStore'
import { useRouter } from 'next/router'
import { ActiveStep } from 'src/components/ActiveStep'
import { getFormStep } from 'src/components/formSteps'
import { useEffect } from 'react'
import { FormLayout } from '@cmp'
import { Box, Text } from '@island.is/island-ui/core'

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

  // username is the ssn
  const { username: ssn } = getUser()

  // TODO: get existing data:
  const formData = {
    ssn: '1706941119',
    name: 'Guðrún Jónsdóttir',
    address: 'Lindargata 3',
    city: 'Reykjavík',
    postNumber: '101',
    email: 'gj@island.is',
    phoneNumber: '4265500',
  }

  const stepInfo = activeStep ? getFormStep(activeStep) : null

  return (
    <FormLayout activeState={stepInfo?.id}>
      <Box>
        {activeStep ? (
          <ActiveStep stepInfo={stepInfo} formData={formData} />
        ) : (
          <Box>sorry no umsokn on this url try something else</Box>
        )}
      </Box>
    </FormLayout>
  )
}

export default Umsokn
