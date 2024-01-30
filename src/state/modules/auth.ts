import { defineStore } from 'pinia'
import { getCache, removeCache, setCache } from '@/utils/cache'
import { TOKEN_KEY } from '@/enums/cacheEnum'
import { logout } from '@/services/api/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string | undefined>(undefined)

    const getToken = (token: string) => {
      return token
    }
    function isLogin() {
      return !!token.value
    }
    function getAuthorization() {
      return token.value ? { authorization: `Bearer ${token.value}` } : {}
    }
    function initToken() {
      token.value = getCache<string>(TOKEN_KEY) || undefined
    }
    function setToken(state: string | undefined) {
      token.value = state
    }
    async function loginOut(): Promise<any> {
      setToken(undefined)
      const res = await logout()
      return Promise.resolve(res)
    }
    return {
      token,
      getToken,
      isLogin,
      getAuthorization,
      initToken,
      setToken,
      loginOut,
    }
  },
  {
    persist: true,
  }
)
