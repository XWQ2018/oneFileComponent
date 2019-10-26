<!--
 * @Description: 单文件组件
 * @Author: xwq
 * @Date: 2019-05-27 17:45:58
 * @LastEditTime: 2019-10-26 11:48:23
 -->
<template>
    <div class="page">
        <h1>单文件组件111</h1>
        <img src="./public/img/dialogIcon.png" alt="dialog" />
        <test />
    </div>
</template>
<script>
import "amfe-flexible/index.js";
import test from "./components/test";
export default {
    components: {
        test
    },
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style lang='less' scoped>
.page {
    img {
        width: 100px;
    }
}
</style>

