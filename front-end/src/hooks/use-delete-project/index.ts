import { useQuery } from 'react-query'
import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient('http://localhost:3001/graphql')

export async function fetchDeleteProject(id: string, token: string): Promise<Boolean> { 
    const query = gql`
    mutation($id: String!) {
      deleteProject(id: $id)
    }
    `;

    const variables = {
      id
    }  

    const requestHeaders = {
      authorization:`Bearer ${token}`,
    }    

    const data = await client.request(query, variables, requestHeaders)
    return data;

}

export function useDeleteProject(id: string, token: string) {
  const { data, isLoading, error } = useQuery(
    ['delete-project', id],
    () => fetchDeleteProject(id, token),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}
