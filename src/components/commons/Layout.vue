<template>
    <el-container>
        <el-header></el-header>
        <el-container>
            <el-aside width="200px"></el-aside>
            <el-container class="loading-area">
                <el-main>
                    <keep-alive>
                        <router-view v-if="this.$route.meta.isAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!this.$route.meta.isAlive"></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
// import adminHeader from './Header.vue';
// import adminAslide from './Aslide.vue';
import adminCrumbs from './Crumbs.vue';

export default {
    components: {
        // adminHeader,
        // adminAslide,
        adminCrumbs
    }
}
</script>

<style lang="less" scoped>
.el-container {
    width: 100%;
    height: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-header {
    padding: 0!important;
}
.el-aside {
    // background-color: #D3DCE6;
    width: auto!important;
    color: #333;
    text-align: left;
    overflow: hidden;
    // line-height: 200px;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
