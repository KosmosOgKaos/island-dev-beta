import type { NextPage } from 'next'
import { createLoginStore } from '../../lib/loginStore'
import { useRouter } from 'next/router'
import { Application } from 'src/components/Application'
import { ActiveStep } from 'src/components/ActiveStep'
import { StepOverview } from 'src/components/StepOverview'
import { FormStepKey, getFormStep } from 'src/components/formSteps'
import { useEffect } from 'react'
import { FormLayout } from '@cmp'

const Umsokn: NextPage = () => {
  const { isLoggedIn, getUser } = createLoginStore()

  const router = useRouter()
  const { step } = router.query
  const activeStep = (typeof step === 'string' ? step : null) as FormStepKey

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login')
    }
  })

  // username is the ssn
  const { username: ssn } = getUser()

  // TODO: get existing data:
  // const { data } = getDataSomething()

  const stepInfo = activeStep !== null ? getFormStep(activeStep) : null

  return (
    <FormLayout activeState={1}>
      <h1>Umsókn um atvinnuleysisbætur</h1>

      <Application>
        <div>
          {/* Aðal svæðið */}
          {stepInfo ? (
            <ActiveStep stepInfo={stepInfo} />
          ) : (
            <div>sorry no umsokn on this url try something else</div>
          )}
        </div>

        <div>
          {/* Hægra megin */}
          <StepOverview />
        </div>
      </Application>
    </FormLayout>
  )
}

export default Umsokn
