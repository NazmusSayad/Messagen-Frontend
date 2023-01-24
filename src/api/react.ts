import ReactApi from 'use-react-api'

export const baseURL = 'http://localhost:8000'
export // const baseURL = 'https://messagen.onrender.com'

const reactApi = ReactApi({
  baseURL,
  withCredentials: true,
  headers: {
    token: 'Smile',
    socketid: 'hello',
  },
})

export default reactApi
export const { useApi, useApiOnce, createSuspenseApi } = reactApi

export const updateJwtToken = (jwt) => {
  reactApi.instance.defaults.headers.token = jwt
}

export const updateSocketId = (sid) => {
  reactApi.instance.defaults.headers.socketid = sid
}
