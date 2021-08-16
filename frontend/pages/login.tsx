import type { NextPage } from 'next'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { createLoginStore } from '../lib/loginStore'

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
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("username", { required: true })} />

        {errors.username && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
