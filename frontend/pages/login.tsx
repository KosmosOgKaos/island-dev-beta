import type { NextPage } from 'next'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { createLoginStore } from '../lib/loginStore'
import {
  Button as Btn,
  Stack,
  Header,
  Text,
  GridRow,
  GridColumn,
  Box,
} from '@island.is/island-ui/core'
import { LoginLayout } from '@cmp'
import kennitala from 'kennitala'
import React, { useEffect } from 'react'
import router from 'next/router'
import { InputController } from '@cmp'
import cn from 'classnames'
import * as styles from '../treat/index.treat'

const MUTATION_LOGIN = gql`
  mutation ($input: LoginDto!) {
    login(input: $input) {
      token
      username
    }
  }
`

const Login: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [mutation, { data }] = useMutation(MUTATION_LOGIN)
  const { login, isLoggedIn } = createLoginStore()

  const onSubmit = (data: { username: string }) => {
    mutation({
      variables: {
        input: {
          username: data.username,
        },
      },
    })
  }

  useEffect(() => {
    if (isLoggedIn()) {
      router.push('/umsokn')
    }
  })
  if (data?.login?.token) {
    login(data.login)
    return null
  }

  return (
    <LoginLayout>
      <Box>
        <GridRow align="center">
          <Header />
        </GridRow>
        <GridRow align="center" marginBottom={0}>
          <Text variant="h1" as="h1" marginBottom={0}>
            Skráðu þig inn
          </Text>
        </GridRow>
        <Stack space={4}>
          <GridRow align="center">
            <Text marginBottom={2}>á Ísland.is</Text>
          </GridRow>
          <GridRow align="center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn(styles.loginForm)}
            >
              <Stack space={2}>
                <GridColumn span="12/12">
                  <InputController
                    id="login-username-input"
                    name="username"
                    label="Kennitala"
                    autoFocus
                    size="md"
                    control={control}
                    backgroundColor="blue"
                    defaultValue=""
                    rules={{
                      validate: (value) => {
                        return kennitala.isPerson(value)
                      },
                    }}
                  ></InputController>
                </GridColumn>

                <GridRow align="center" marginTop={2} marginBottom={8}>
                  <Btn type="submit">Auðkenna</Btn>
                </GridRow>
              </Stack>
            </form>
          </GridRow>
        </Stack>
      </Box>
    </LoginLayout>
  )
}

export default Login
