<template>
  <view class="viewport">
    <view class="m-10 text-center">
      <view class="text-green">微信分享页</view>
      <view class="text-green-500">请在微信小程序中体验，或者开发者工具</view>
      <view>1) 默认是不激活”发送给朋友“和”分享到朋友圈“的，如下图</view>
      <image src="/static/images/wx-share-before.png" mode="widthFix" />
      <view>2) 增加了onShareAppMessage和onShareTimeline后，就可以微信分享了，如下图</view>
      <image src="/static/images/wx-share-after.png" mode="widthFix" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
/** 激活“分享给好友” */
onShareAppMessage((options: Page.ShareAppMessageOption): Page.CustomShareContent => {
  console.log('options:', options)
  return {
    title: '自定义分享标题',
    path: '/pages/index/index?id=xxx',
    imageUrl:
      'https://foruda.gitee.com/avatar/1677025373622650302/4895123_virkano_1605153009.png!avatar200',
  }
})
/** 激活“分享到朋友圈”， 注意：需要先激活“分享给好友” */
onShareTimeline((): Page.ShareTimelineContent => {
  return {
    title: '自定义分享标题',
    query: 'a=1&b=2',
  }
})
</script>

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
