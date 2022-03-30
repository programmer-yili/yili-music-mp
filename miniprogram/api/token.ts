import {cloudPost} from './request'

export const createToken = () => {
  return cloudPost('/tokens/mp', {})
}