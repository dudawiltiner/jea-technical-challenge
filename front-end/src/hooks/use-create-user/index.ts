import { useQuery } from 'react-query'
import { gql, GraphQLClient } from 'graphql-request'
import { ResponseUser, UserInput } from './type'

const client = new GraphQLClient('http://localhost:3001/graphql')

async function fetchCreateUser(dataInput: UserInput): Promise<ResponseUser> {
  if (
    dataInput?.name !== '' &&
    dataInput?.username !== '' &&
    dataInput?.password !== ''
  ) {
    const query = gql`
      mutation ($data: CreateUserInput!) {
        createUser(data: $data) {
          id
          username
        }
      }
    `

    const variables = {
      data: dataInput
    }

    const data = await client.request(query, variables)
    return data
  }

  return { createUser: { id: 0, username: '' } }
}

export function useCreateUser(dataInput: UserInput) {
  const { data, isLoading, error } = useQuery(
    ['create-user', dataInput],
    () => fetchCreateUser(dataInput),
    { retry: 1 }
  )

  return {
    data,
    isLoading,
    error
  }
}
