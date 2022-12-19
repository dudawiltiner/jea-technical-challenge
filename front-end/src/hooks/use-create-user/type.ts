export interface UserInput {
  name: string
  username: string
  password: string
}

export interface User {
  id: number
  username: string
}

export interface ResponseUser {
  createUser: User
}
