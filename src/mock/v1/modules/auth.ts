import { defineMock } from '@alova/mock'
import { createMock } from '@/mock/utils'
import { join, sampleSize } from 'lodash-es'
import { ResultEnum } from '@/enums/httpEnum'

const createRandomToken = (len = 36 * 6) => {
  const token = join(
    sampleSize('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-', len),
    ''
  )
  return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.${token}`
}

export const authMocks = defineMock({
  // 登录
  '[POST]/api/v1/login': (params) => {
    const { email, password } = params.data
    if (email === 'uni-app@test.com' && (password === 'Vue3_Ts_Vite' || password === '123456')) {
      const token = createRandomToken()
      return createMock({ data: { token } })
    }
    return createMock({ data: [], code: ResultEnum.FAIL, msg: '邮箱或密码错误' })
  },
})

export const logoutMocks = defineMock({
  // 登录
  '[POST]/api/v1/logout': (params) => {
    console.log(params)
    return createMock({ data: true, code: ResultEnum.SUCCESS, msg: '退出成功' })
  },
})
