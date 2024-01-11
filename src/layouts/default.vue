<template>
  <view class="default-layout">
    <slot />
  </view>
</template>
<style lang="scss">
page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f7f7f7;
}

.default-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
