import { useQuery } from 'react-query'
import { gql, GraphQLClient } from "graphql-request";
import { ResponseLogin } from './type';

const client = new GraphQLClient('http://localhost:3001/graphql')

async function fetchLogin(username: string, password: string): Promise<ResponseLogin> {
  if( username && password) {
    const mutation = gql`
      mutation($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
          username, 
          token
        }
      }
    `;

    const variables = {
      username,
      password
    }    

    const data = await client.request(mutation, variables)
    return data;
  }

  return { loginUser: {username: '', token: ''} } 
}

export function useLogin(username: string, password: string) {
  const { data, isLoading, error } = useQuery(
    ['login', username, password],
    () => fetchLogin(username, password),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  )

  return {
    data,
    isLoading,
    error
  }
}
