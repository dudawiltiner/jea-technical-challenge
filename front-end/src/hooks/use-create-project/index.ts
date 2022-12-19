import { useQuery } from 'react-query'
import { gql, GraphQLClient } from "graphql-request";
import { ProjectInput, ResponseCreateProject } from './type';

const client = new GraphQLClient('http://localhost:3001/graphql')


async function fetchCreateProject(dataInput: ProjectInput, username: string, token: string): Promise<ResponseCreateProject> { 
  if( dataInput?.zip_code !== '' && dataInput?.title !== '' ) { 
    const query = gql`
    mutation($data: CreateProjectWithHeaderInput!) {
      createProject(data: $data) {
        id,
        title,
        deadline,
        username,
        city
      }
    }
    `;

    const variables = {
      data: dataInput
    }  

    const requestHeaders = {
      authorization:`Bearer ${token}`,
      username
    }    

    const data = await client.request(query, variables, requestHeaders)
    return data;
  }

  return { createProject: {id: 0, title: '', zip_code: '', deadline: '', city: '', done: false, cost: 0, username: ''} }
}

export function useCreateProject(dataInput: ProjectInput, username: string, token: string) {
  const { data, isLoading, error } = useQuery(
    ['create-project', dataInput],
    () => fetchCreateProject(dataInput, username, token),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}
