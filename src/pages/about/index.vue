<script lang="ts" setup>
import { useAuthStore } from '@/state/modules/auth'

onLoad(() => {
  console.log('about load')
})
const authStore = useAuthStore()
const isLogin = ref(false)
const router = useRouter()
onShow(() => {
  isLogin.value = authStore.isLogin()
})
const handleJump = (url: string) => {
  router.push(url)
}

// 登出
const handleLoginOut = () => {
  authStore.loginOut().then(() => {
    isLogin.value = false
    console.log(isLogin.value)
    console.log(authStore.token)
  })
}
</script>

<template>
  <view class="container">
    <view class="head-wrap">
      <view class="avatar">
        <image class="img" src="/static/images/avatar.png" />
      </view>
      <view class="desc">{{ isLogin ? '测试' : '未登入' }}</view>
    </view>
    <view class="cell"> </view>
    <view class="cell" v-if="isLogin">
      <button @click="handleLoginOut">登出</button>
    </view>
    <view class="cell" v-else>
      <button @click="handleJump('/pages/login/index')">登入</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  padding: 96rpx 24rpx;

  .head-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 120rpx;
      height: 120rpx;
      padding: 6rpx;
      overflow: hidden;
      border: 2rpx solid #d1d5db;
      border-radius: 120rpx;

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      font-size: 28rpx;
      line-height: 120rpx;
    }
  }

  .cell {
    margin-top: 60rpx;
    text-align: center;
  }
}
</style>
