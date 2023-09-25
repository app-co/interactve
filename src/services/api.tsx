import axios, { AxiosInstance } from 'axios'

type SignOut = () => void

type APIInstaceProps = AxiosInstance & {
  registerIntercepTokenManager: (signOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: 'http://localhost:3333',
}) as APIInstaceProps

api.interceptors.response.use(
  (sucess) => {
    return sucess
  },
  (error) => {
    const message = error?.response

    if (message) {
      const err = {
        status: message.status,
        message: message.data.message,
      }
      return Promise.reject(err)
    } else {
      return Promise.reject(error)
    }
  },
)

export { api }
