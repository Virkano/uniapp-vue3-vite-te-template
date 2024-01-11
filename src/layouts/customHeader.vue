<script setup lang="ts">
import useNavbarWeixin from '@/hooks/app/useNavbarWeixin'
const { pages, isTabbar, safeAreaInsets } = useNavbarWeixin()
</script>
<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view class="fly-navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <!-- 1/3，多于1个页面，用返回图标 -->
      <navigator v-if="pages.length > 1" open-type="navigateBack" class="left-icon">
        <view class="i-carbon-chevron-left text-current"></view>
      </navigator>
      <!-- 2/3，只有1个页面，如果不是tabbar，需要首页图标 -->
      <!-- 这种情况一般出现在用户直接打开分享出去的详情页面，或者使用redirectTo等API -->
      <navigator
        v-else-if="!isTabbar"
        open-type="switchTab"
        url="/pages/index/index"
        class="left-icon"
      >
        <view class="i-carbon-home text-current"></view>
      </navigator>
      <!-- 3/3，如果当前页就是tabbar页，不用去首页，也就是什么图标都不需要 -->
      <view class="title">上海敬博</view>
    </view>
    <!-- #endif -->
    <slot />
  </view>
</template>
