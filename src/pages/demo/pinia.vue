<template>
  <view class="viewport">
    <view class="text-center">Count: {{ countStore.count }}</view>
    <view class="f-c-c text-blue-500">
      <button @click="countStore.decrement">-1</button>
      <button @click="countStore.increment">+1</button>
      <button @click="countStore.reset">重置</button>
    </view>
    <view class="text-center">请观察小程序的store，可以看到是可以正常设置的</view>
  </view>
</template>

<script setup lang="ts">
import { useCountStore } from '@/state/modules/count'

const countStore = useCountStore()
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
</style>
