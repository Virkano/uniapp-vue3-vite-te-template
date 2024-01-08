<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BasicButton from '@/components/BasicButton/index.vue';

const router = useRouter();
const jumpTest2 = () => {
    router.push('/pagesA/list/test2/index?id=256');
};
const params = ref();

onMounted(() => {
    params.value = router.route.value.query;
});
</script>
<template>
    <view class="center"> Test1 </view>
    <view class="center">参数信息： {{ params }} </view>
    <view class="center">
        <BasicButton @click="jumpTest2">Test2 → </BasicButton>
    </view>
</template>
<style scoped></style>
