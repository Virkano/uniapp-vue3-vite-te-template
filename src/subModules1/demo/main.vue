<template>
  <view>
    <view class="bg-green" :style="{ height: statusBarHeight + 'px' }"></view>
    <view class="bg-yellow" :style="{ height: navigationBarHeight + 'px' }"></view>

    <view class="bg-red" :style="{ height: safeHeight - navigationBarHeight + 'px' }"></view>

    <view class="bg-black" :style="{ height: bottomSafeHeight + 'px' }"></view>
  </view>
</template>

<script setup lang="ts">
// 状态栏高度
const { statusBarHeight, safeArea, screenHeight } = uni.getWindowInfo()
// console.log(`output->statusBarHeight`, statusBarHeight)

// 导航栏高度
let navigationBarHeight
// 判断是否为 App 或 H5 平台
if (!['app', 'h5'].includes(uni.getSystemInfoSync().platform)) {
  navigationBarHeight = 0 // 在这里执行其他平台的替代逻辑或设置默认值
} else {
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  navigationBarHeight = menuButtonInfo.height + (menuButtonInfo.top - statusBarHeight) * 2
}
// console.log(`output->navigationBarHeight`, navigationBarHeight)

// 内容高度
const safeHeight = safeArea?.height
// console.log(`output->safeHeight`, safeHeight)

// 底部安全距离
const bottomSafeHeight = screenHeight - safeArea?.height - statusBarHeight
// console.log(`output->bottomSafeHeight`, bottomSafeHeight)
</script>
