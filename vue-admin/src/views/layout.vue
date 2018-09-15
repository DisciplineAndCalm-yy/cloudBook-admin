<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">云上书城管理</h1>
        </div>
        <div class="nav">
            <el-menu  :router="true" background-color='#545c64' text-color='#f1f1f1' class="">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>管理操作</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/layout/index">首页</el-menu-item>
                        <el-menu-item index="/login">登录页</el-menu-item>
                        <el-menu-item index="/layout/users">用户列表</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <el-menu-item index="1-3">修改信息</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">用户管理</template>
                        <el-menu-item index="/layout/addAdmin">添加管理员</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">查看操作</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">警告</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">删库跑路</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main ml-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.layout {
  .ml-200 {
    margin-left: 200px;
  }
  .title {
    text-align: center;
    font-weight: 400;
    line-height: 60px;
    height: 60px;
    border-bottom: 1px solid #f1f1f1;
  }
  .nav {
    width: 200px;
    padding-top: 30px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: #545c64;
    overflow: hidden;
    border-right: 1px solid #f1f1f1;
  }
}
</style>