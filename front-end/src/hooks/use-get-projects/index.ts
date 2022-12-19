import { useQuery } from 'react-query'
import { gql, GraphQLClient } from 'graphql-request'
import { ResponseGetProjects } from './type'

const client = new GraphQLClient('http://localhost:3001/graphql')

async function fetchGetProjects(
  show: string,
  token: string
): Promise<ResponseGetProjects> {
  if (show === 'allprojects') {
    const query = gql`
      {
        projects {
          id
          title
          zip_code
          cost
          deadline
          username
          done
          city
        }
      }
    `

    const requestHeaders = {
      authorization: `Bearer ${token}`
    }

    const data = await client.request(query, {}, requestHeaders)
    return data
  }

  return { projects: [] }
}

export function useGetProjects(show: string, token: string) {
  const { data, isLoading, error } = useQuery(
    ['projects', show],
    () => fetchGetProjects(show, token),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}
