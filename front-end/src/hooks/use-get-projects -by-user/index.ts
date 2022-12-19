import { useQuery } from 'react-query'
import { gql, GraphQLClient } from "graphql-request";
import { ResponseGetProjects } from './type';

const client = new GraphQLClient('http://localhost:3001/graphql')

async function fetchGetProjectsByUser(username: string, show: string,  token: string): Promise<ResponseGetProjects> {  
  if(show === 'myprojects') {
    const query = gql`
      {
        projectsByUser {
          id,
          title,
          zip_code,
          cost,
          deadline,
          username,
          done,
          city
        }
      }
    `;

    const requestHeaders = {
      authorization:`Bearer ${token}`,
      username
    }    

    const data = await client.request(query, {}, requestHeaders)
    return data;
  }

  return { projectsByUser: [] }
}

export function useGetProjectsByUser(username: string, show: string, token: string) {
  const { data, isLoading, error } = useQuery(
    ['projects-by-user', username, show],
    () => fetchGetProjectsByUser(username, show, token),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}
