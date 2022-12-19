import { useQuery } from 'react-query'
import { gql, GraphQLClient } from 'graphql-request'
import { ProjectInput, ResponseCreateProject } from './type'

const client = new GraphQLClient('http://localhost:3001/graphql')

export async function fetchUpdateProject(
  dataInput: ProjectInput,
  id: number,
  username: string,
  done: boolean,
  token: string
): Promise<ResponseCreateProject> {
  if (dataInput?.zip_code !== '' && dataInput?.title !== '') {
    const query = gql`
      mutation ($id: String!, $data: UpdateProjectWithHeaderInput!) {
        updateProject(id: $id, data: $data) {
          id
          title
          deadline
          username
          city
        }
      }
    `

    const variables = {
      id,
      data: { ...dataInput, done }
    }

    const requestHeaders = {
      authorization: `Bearer ${token}`,
      username
    }

    const data = await client.request(query, variables, requestHeaders)
    return data
  }

  return {
    updateProject: {
      id: 0,
      title: '',
      zip_code: '',
      deadline: '',
      city: '',
      done: false,
      cost: 0,
      username: ''
    }
  }
}

export function useUpdateProject(
  dataInput: ProjectInput,
  id: number,
  done: boolean,
  username: string,
  token: string
) {
  const { data, isLoading, error } = useQuery(
    ['update-project', dataInput],
    () => fetchUpdateProject(dataInput, id, username, done, token),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}
