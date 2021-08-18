import { gql, useApolloClient, useQuery } from '@apollo/client'
import { AuthUser } from 'gen/types/graphql-types'
import {
  UseApplicationDataResult,
  UseApplicationUpdater,
} from './applicationData.type'

const MUTATION_APPLICATION_UPDATE = gql`
  mutation ($id: Int!, $data: UpdateApplicationDTO!) {
    updateApplication(id: $id, data: $data) {
      data
    }
  }
`

const QUERY_APPLICATION_GET = gql`
  query ($owner: String!) {
    getApplicationByNationalId(owner: $owner) {
      completed
      data
      id
      owner
    }
  }
`

export const useApplicationUpdater = (applicationId): UseApplicationUpdater => {
  const client = useApolloClient()

  return (formData) => {
    console.log('Should be mutating to save formData', formData)
    return client
      .mutate({
        mutation: MUTATION_APPLICATION_UPDATE,
        variables: {
          id: applicationId,
          data: {
            completed: false,
            data: JSON.stringify(formData),
          },
        },
      })
      .catch((e) => {
        console.log(e)
        return false
      })
      .then((xx) => {
        console.log(xx)
        return true
      })
  }
}

export const useApplicationData = (user: AuthUser) => {
  const { loading, error, data } = useQuery(QUERY_APPLICATION_GET, {
    fetchPolicy: 'network-only',
    variables: {
      owner: user.username,
    },
  })

  if (typeof window === 'undefined') {
    return {
      loading: false,
      error: null,
      data: null,
    }
  }

  let formData
  try {
    formData = JSON.parse(data?.getApplicationByNationalId?.data)
  } catch (e) {
    formData = {}
  }

  return {
    loading,
    error,
    data: data?.getApplicationByNationalId
      ? {
          id: data.getApplicationByNationalId.id,
          formData,
        }
      : null,
  } as UseApplicationDataResult
}
