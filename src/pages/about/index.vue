<script lang="ts" setup>
import BasicButton from '@/components/BasicButton/index.vue'
import { useAuthStore } from '@/state/modules/auth'

onLoad(() => {
  console.log('about load')
})
const authStore = useAuthStore()
const isLogin = ref(false)
const router = useRouter()
onShow(() => {
  isLogin.value = authStore.isLogin
})
const handleJump = (url: string) => {
  router.push(url)
}

// 登出
const handleLoginOut = () => {
  authStore.loginOut().then(() => {
    isLogin.value = false
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
    <view class="cell"
      ><BasicButton @click="handleJump('/pages/log/index?id=4345&title=log&word=关键词')"
        >log</BasicButton
      ></view
    >
    <view class="cell" v-if="isLogin"><BasicButton @click="handleLoginOut">登出</BasicButton></view>
    <view class="cell" v-else>
      <BasicButton @click="handleJump('/pages/login/index')"> 登入 </BasicButton>
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
