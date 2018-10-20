<template>
    <div class="container">
        <div class="header">

        </div>
        <div class="nav">
          <ul>
            <li><router-link :to="{name: 'home1'}">首页</router-link></li>
            <li><router-link :to="{name: '详情1'}">详情</router-link></li>
            <li><router-link :to="{name: 'login1'}">登录</router-link></li>
          </ul>
        </div>
        <div class="main-content">
            我是页面主体
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.header {
    height: 100px;
    padding-left: 200px;
    background: #0ff;
    text-align: center;
}

.nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    width: 200px;
    background: skyblue;
}

.nav li{
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 200px;
}

.nav a{
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
}

.main-content {
    height: 500px;
    padding-left: 200px;
    color: aliceblue;
    background: #000;
}
</style>
