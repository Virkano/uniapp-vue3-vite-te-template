<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BasicButton from '@/components/BasicButton/index.vue';
import Navbar from '@/components/Navbar/index.vue';

const router = useRouter();
const jumpDetail = () => {
    router.push('/pagesB/detail/index?page=1&limit=20');
};
const params = ref();

onMounted(() => {
    params.value = router.route.value.query;
});
</script>
<template>
    <view>
        <Navbar title="Test2" />
        <view class="center"> Test2 </view>
        <view class="center">参数信息： {{ params }} </view>
        <view class="center">
            <BasicButton @click="jumpDetail">Detail → </BasicButton>
        </view>
    </view>
</template>
<style scoped></style>
