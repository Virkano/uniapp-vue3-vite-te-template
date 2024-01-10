<script lang="ts" setup>
import BasicButton from '@/components/BasicButton/index.vue'

const router = useRouter()
const jumpList1 = () => {
  router.push({ path: '/pagesA/list/test1/index', query: { key: 'word', page: '1', limit: '15' } })
}
</script>

<template>
  <view class="container"> 页面构建中... </view>
  <view class="f-c-c">
    <BasicButton @click="jumpList1">List1 → </BasicButton>
  </view>
</template>

<style lang="scss" scoped>
.container {
  padding: 128rpx 0;
  text-align: center;
}
</style>
