<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">云书后台管理
                <div class="icon" @click="handleChance">
                    <p class="icon-font">{{this.nickname}}</p>
                    <img :src="avatar" class="icon-img">
                </div>
            </h1>
            <div class="sibar" v-if="showchance">
                    <span class="chance" @click="changeUser">修改信息</span>
                    <br>
                    <span class="chance" @click="loginOut">退出登录</span>
            </div>
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
                    <el-submenu index="1-2">
                        <template slot="title">用户管理</template>
                        <el-menu-item index="/layout/addAdmin">添加管理员</el-menu-item>
                        <el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>
                        <el-menu-item index="/layout/users">用户列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-3">
                        <template slot="title">分类管理</template>
                        <el-menu-item index="/layout/addClass">添加分类</el-menu-item>
                        <el-menu-item index="/layout/showClass">分类列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-4">
                        <template slot="title">图书管理</template>
                        <el-menu-item index="/layout/addBook">添加图书</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2" disabled>
                    <i class="el-icon-menu"></i>
                    <span slot="title">查看操作</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">警告</span>
                </el-menu-item>
                <el-menu-item index="/layout/test">
                    <i class="el-icon-setting"></i>
                    <span slot="title">测试用例</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main ml-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatar: '',
            nickname: '',
            showchance: false
        }
    },
    methods: {
        getData() {
            this.avatar = this.$route.query.id;
            this.nickname = this.$route.query.nickname;
        },
        handleChance() {
            this.showchance = !this.showchance;
        },
        changeUser() {
            this.$router.push('/layout/userEdit')
        },
        loginOut() {
            this.$axios.get('/logout').then(res => {
                if(res.code == 200){
                    this.$message({
                        type: 'success',
                        message: '退出登录成功！'
                    })
                    this.$router.push('/login')
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '退出登录失败！'
                })
            })
        }
    },
    created() {
        this.getData()
    }
};
</script>

<style scoped lang='scss'>
.layout {
  .ml-200 {
    margin-left: 200px;
  }
  .header{
      background: #e9e9e9;
      .icon{
          margin-top: 10px;
          width: 60px;  
          height: 60px;
          float: right;
          .icon-font{
              width: 50px;
              height: 10px;
              line-height: 10px;
              font-size: 18px;
              color: #545c64;
          }
          .icon-img{
              width: 40px;
              height: 40px;
          }
      }
      .sibar{
          position: absolute;
          right: 0;
          z-index: 998;
          padding-top: 10px;
          width: 70px;
          height: 50px;
          font-size: 16px;
          background: #e9e9e9;
          cursor: pointer;
          .chance{
              padding-bottom: 10px;
          }
      }
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
 
    /deep/ {
        border-right: none;
    }
  }
}
</style>