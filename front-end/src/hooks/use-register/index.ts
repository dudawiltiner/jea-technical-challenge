import { useQuery } from 'react-query'
import { request, gql } from "graphql-request";
import { RegisterUser } from './type';

async function fetchRegister(username: string, password: string): Promise<RegisterUser> {
  if( username && password) {
    const QUERY = gql`
      mutation createUser(username: ${username}, password: ${password}) {
        username, 
        token
      }
    `;

    return request(process.env.APP_ENDPOINT || '', QUERY);
  }

  return {id: 0, username: '', name: '', password: ''}
}

export function useRegister(username: string, password: string) {
  const { data, isLoading, error } = useQuery(
    ['register', username, password],
    () => fetchRegister(username, password),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  )

  return {
    data,
    isLoading,
    error
  }
}
