import { AuthUser } from "../../types/graphql-types"

export interface LoginStore {
  login: (info: AuthUser) => void
  isLoggedIn: () => boolean
  getUser: () => AuthUser
}

export const NO_USER: AuthUser = {
  username: null,
  token: null,
  roles: [],
}

export const createLoginStore = (key: string = 'user'): LoginStore => {
  const store = typeof window !== 'undefined' ? window.sessionStorage : null

  const login = (info: AuthUser) => {
    if (store) {
      store.setItem(key, JSON.stringify(info))
    }
  }

  const getUser = (): AuthUser => {
    try {
      if (!store) {
        throw new Error()
      }
      return JSON.parse(store.getItem(key) || '') as AuthUser
    } catch (e) {
      return NO_USER
    }
  }

  const isLoggedIn = () => getUser().token !== null

  return {
    login,
    isLoggedIn,
    getUser,
  }
}
