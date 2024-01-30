<script setup lang="ts">
// import { onPullDownRefresh } from '@dcloudio/uni-app'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 发现原生下拉刷新效果并不好，在微信里面只有顶部导航栏下拉才生效，页面区域下拉不生效，体验不好，结合自定义下拉刷新效果很好
// 需在pages.json中结合enablePullDownRefresh: true, 使用
// onPullDownRefresh(() => {
//   setTimeout(function fn() {
//     console.log('refresh - onPullDownRefresh')
//     // 关闭动画
//     uni.stopPullDownRefresh()
//   }, 1000)
// })

// 当前下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherRefresh = async () => {
  // 开始动画
  isTriggered.value = true
  setTimeout(function fn() {
    console.log('refresh - onRefresherRefresh')
    // 关闭动画
    isTriggered.value = false
  }, 1000)
}

// 头部navbar ref
const navbar = ref(null)

//距离顶部高度
const scrollTop = ref<number>(0)

//滚动触发事件
const onScroll = (event: any) => {
  if (event.detail.scrollTop > 100) {
    // 修改背景色
    scrollTop.value = 100
  } else {
    scrollTop.value = event.detail.scrollTop
  }
}

// 滚动到底部触发
const onScrollToLower = () => {
  console.log('----------触底了---------')
}
</script>
<template>
  <view class="w-full h-auto">
    <view
      ref="navbar"
      class="fixed top-0 left-0 z-2 w-full h-44px flex items-center justify-between bg-transparent"
      :style="{
        paddingTop: safeAreaInsets?.top + 'px',
        background: `rgba(255, 255, 255, ${scrollTop})`,
      }"
    >
      <image class="ml-12px w-36px h-36px" src="@/static/logo.png" />
      <view class="text-#333">首页</view>
      <view class="mr-12px w-36px"></view>
    </view>
    <scroll-view
      class="bg-#F5F6FA"
      enable-back-to-top
      scroll-y
      refresher-enabled
      @scrolltolower="onScrollToLower"
      @refresherrefresh="onRefresherRefresh"
      :refresher-triggered="isTriggered"
      @scroll="onScroll($event)"
      style="height: 100vh"
    >
      <image class="relative top-0 left-0 w-full h-232px" src="@/static/images/home-bg.png" />
      <view class="w-full h-1000px relative top-[-180px] left-0"> </view>
    </scroll-view>
  </view>
</template>
