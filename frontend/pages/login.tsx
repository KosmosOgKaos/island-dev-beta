import type { NextPage } from 'next'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { createLoginStore } from '../lib/loginStore'
import { Button as Btn, Stack, Header, Text, GridRow } from "@island.is/island-ui/core"
import { LoginLayout } from '@cmp'
import kennitala from 'kennitala'
import { useEffect } from 'react'
import router from 'next/router'
import { InputController } from '@cmp'


const MUTATION_LOGIN = gql`
  mutation ($input: LoginDto!) {
    login (input: $input) {
      token
      username
    }
  }
`

const Login: NextPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [ mutation, { data } ] = useMutation(MUTATION_LOGIN)
  const { login, isLoggedIn } = createLoginStore()
  
  const onSubmit = (data: { username: string }) => {
    mutation({
      variables: {
        input: {
          username: data.username
        }
      }
    })
  }

  useEffect(() => {
    if(isLoggedIn()) {
      router.push('/umsokn')
    }
  })
  if (data?.login?.token) {
    login(data.login)
    return null
  }

  return (
    <LoginLayout>
      <div>
        <GridRow align="center">
          <Header />
        </GridRow>
        <Stack space={3}>
        <GridRow align="center">
          <Text variant="h1" as="h1" marginBottom={0}>Skráðu þig inn</Text>
        </GridRow>
        <GridRow align="center">
          <Text variant="h4" as="h4" marginBottom={2}>á Ísland.is</Text>
        </GridRow>
        </Stack>

        <GridRow align="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputController 
              id="login-username-input" 
              name="username" 
              label="Kennitala" 
              autoFocus 
              control={control}
              backgroundColor="blue"
              
              rules={{
                validate: ((value) => {
                    return kennitala.isPerson(value)
                })
              }}>
            </InputController>
            
            <GridRow align="center" marginTop={2}>
              <Btn type="submit">Auðkenna</Btn>
            </GridRow>
          </form>
        </GridRow>
      </div>
    </LoginLayout>
  )
}

export default Login
