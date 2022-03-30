import { get, post } from "./request"

type LoginRequest = {
  username: string,
  password: string
}


export const login = (loginRequest: LoginRequest) => {
  return post('/login', loginRequest);
}

export const getUserInfo = () => {
  return cloudGet('/users/me')
}