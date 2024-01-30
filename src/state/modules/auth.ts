import { defineStore } from 'pinia'
import { logout } from '@/services/api/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref()
    function getAuthorization() {
      return token.value ? { authorization: `Bearer ${token.value}` } : {}
    }
    function setToken(state: string) {
      token.value = state
    }
    async function loginOut(): Promise<any> {
      try {
        const res = await logout()
        token.value = undefined
        return Promise.resolve(res)
      } catch (error) {
        console.log(error)
      }
    }
    return {
      token,
      getAuthorization,
      setToken,
      loginOut,
    }
  },
  {
    persist: true,
  }
)
