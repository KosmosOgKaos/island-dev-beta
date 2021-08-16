
interface UserInfo {
  username: string | null,
  token: string | null,
}

interface LoginStore {
  login: (info: UserInfo) => void
  isLoggedIn: () => boolean
  getUser: () => UserInfo
}

export const createLoginStore = (key: string = 'user'): LoginStore => {
  const store = typeof window !== 'undefined' ? window.sessionStorage : null

  const login = (info: UserInfo) => {
    if (store) {
      store.setItem(key, JSON.stringify(info))
    }
  }

  const getUser = (): UserInfo => {
    try {
      if (!store) {
        throw new Error()
      }
      return JSON.parse(store.getItem(key) || '') as UserInfo
    } catch (e) {
      return { username: null, token: null }
    }
  }

  const isLoggedIn = () => getUser().token !== null

  return {
    login,
    isLoggedIn,
    getUser,
  }
}
