import { post } from "./request"

type LoginRequest = {
  username: string,
  password: string
}


export const login = (loginRequest: LoginRequest) => {
  return post('/login', loginRequest);
}