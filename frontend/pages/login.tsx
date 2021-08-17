import type { NextPage } from 'next'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { createLoginStore } from '../lib/loginStore'
import { Box, Button as Btn, Stack, Input, Header } from "@island.is/island-ui/core";
import { useState } from 'react';


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
    console.log('hasErrors checking')
    return checkSocialNumber(data.username)
  }

  function checkSocialNumber(username) {
    console.log(username)
 
    const kennitala = require('kennitala')
    return kennitala.isValid(username) || false
  }


  if (data?.login?.token) {
    login({
      username: data.login.username,
      token: data.login.token,
    })

    window.location.href = '/'

    return null
  }

  return (
    <div>
      <Header />
      <h1 className="title">Innskráning</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <p>Stimplaðu inn kennitölu til þess að skrá þig inn.</p>
        <Input name='username' label="Kennitala" defaultValue="" required {...register("username")} hasError={!hasErrors} />
        {/* <input {...register("username", { required: true, validate: username => checkSocialNumber(username) })} /> */}
        {/* <Input name='username' label="Kennitala" required {...register("username")} hasError={checkSocialNumber()}  /> */}
        {/* // , { required: true, minLength: 10, maxLength: 10, pattern: /^-?[0-9]\d*\.?\d*$/ })} /> */}

        {/* <p>{!(username => checkSocialNumber(username)) && <span>Kennitala er ekki gild</span>}</p> */}
        
        <Btn type="submit">Audkenna</Btn>
      </form>
    </div>
  )
}

export default Login
