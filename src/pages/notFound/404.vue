<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'

const go = ref<string>('')
const router = useRouter()
const redirect = ref<string>('')
onLoad((query) => {
  go.value = query?.go || ''
  redirect.value = query?.redirect || ''
})

/**
 * 返回首页
 */
const backHome = () => {
  router.pushTab(redirect.value)
}
</script>

<template>
  <view class="w-screen flex flex-col items-center pt-320rpx">
    <image class="w-360rpx" mode="widthFix" src="/static/svg/weep.svg" />
    <view class="mb-40rpx">
      <text>{{ go }} 页面找不到了~</text>
    </view>
    <button @click="backHome">返回首页</button>
  </view>
</template>
