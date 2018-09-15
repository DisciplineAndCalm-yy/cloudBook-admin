<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">云上书城管理</h1>
        </div>
        <div class="nav">

        </div>
        <div class="main ml-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.layout{
    .ml-200{
        margin-left: 200px;
    }
    .title{
        text-align: center;
        font-weight: 400;
        line-height: 60px;
        height: 60px;
        border-bottom: 1px solid #f1f1f1;
    }
    .nav{
        width: 200px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background: #e8e8e8;
    }
}
</style>