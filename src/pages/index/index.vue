<script setup lang="ts">
// import { useRequest } from 'alova'
// import { getHomeBannerAPI } from '@/services/api/home'

// const { data: bannerList, send: getBanner } = useRequest(getHomeBannerAPI)
// getBanner()
const router = useRouter()
function onTabClick(index: number) {
  switch (index) {
    case 1:
      router.push({ path: '/pages/demo/pinia' })
      break
    case 2:
      router.push({ path: '/pages/demo/mp-weixin-share' })
      break
  }
}
</script>
<template>
  <view class="viewport">
    <fui-list bottomBorder title="Demo">
      <fui-list-cell :bottomBorder="false" :highlight="false" arrow @click="onTabClick(1)">
        pinia + 持久化
      </fui-list-cell>
      <fui-list-cell :bottomBorder="false" :highlight="false" arrow @click="onTabClick(2)">
        微信分享
      </fui-list-cell>
    </fui-list>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f7;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
