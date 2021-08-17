import type { NextPage } from 'next'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { createLoginStore } from '../lib/loginStore'
import { Button as Btn, Stack, Input, Header, Text, GridRow } from "@island.is/island-ui/core"
import { LoginLayout } from '@cmp'
import kennitala from 'kennitala'
import { useEffect } from 'react'
import router from 'next/router'


const MUTATION_LOGIN = gql`
  mutation ($input: LoginDto!) {
    login (input: $input) {
      token
      username
    }
  }
`

const Login: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [ mutation, { data } ] = useMutation(MUTATION_LOGIN)
  const { login } = createLoginStore()
  
  const onSubmit = (data: { username: string }) => {
    mutation({
      variables: {
        input: {
          username: data.username
        }
      }
    })
  }

  const hasErrors = (data: { username: string }) => {
    return checkSocialNumber(data.username)
  }

  function checkSocialNumber(username) {
    return kennitala.isPerson(username)
  }


  if (data?.login?.token) {
    login({
      username: data.login.username,
      token: data.login.token,
    })

    useEffect(() => {
      router.push('/')
    })

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
          <Text variant="h4" as="h4" marginBottom={2}>á mínar síður Ísland.is</Text>
        </GridRow>
        </Stack>

        <GridRow align="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text marginBottom={2}>Stimplaðu inn kennitölu til þess að skrá þig inn.</Text>
            <Input name='username' label="Kennitala" defaultValue="" required {...register("username")} hasError={!hasErrors} />
            
            <GridRow align="center" marginTop={2}>
              <Btn type="submit">Audkenna</Btn>
            </GridRow>
          </form>
        </GridRow>
      </div>
    </LoginLayout>
  )
}

export default Login
