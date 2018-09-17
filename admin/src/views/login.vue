<template>
    <div class="container">
        <h1 class="title">欢迎来到云上书城的后台操作系统</h1>
        <div class="box">
            <h2 class="box-title">请登录</h2>
            <el-form class="form">
                <el-form-item label='用户名'>
                    <el-input v-model="formData.username" placeholder='请输入用户名'></el-input>
                </el-form-item>
                <el-form-item label='密码'>
                    <el-input v-model="formData.password" type="password" placeholder='请输入密码'></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="handleLogin" :loading='isLoading' type='primary' class="btn">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      isLoading: false
    };
  },
  methods: {
      handleLogin() {
          this.isLoading = true
          this.$axios.post('/login', this.formData).then(res => {
              console.log(res)
              if(res.code == 200) {
                  this.$message.success('登录成功')
                  setTimeout(() => {
                      this.$router.push('/layout/index')
                  }, 1000)
              } else {
                  this.$message.error('登录失败')
              }
              this.isLoading = false
          }).catch(err => {
              this.isLoading = false,
              this.$message.error('登录失败')
          })
      }
  }
};
</script>

<style scoped lang='scss'>
.container {
  min-height: 100vh;
  background: #545c64;
  overflow: hidden;

  .title {
    margin-top: 80px;
    text-align: center;
    color: #fff;
    font-weight: 400;
  }

  .box {
    width: 400px;
    height: 300px;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    padding: 40px;
    background: #f1f1f1;
    margin: 60px auto 0;

    .box-title{
        text-align: center;
        color: #333;
        font-weight: 400;
    }

    .form{
        margin-top: 20px;
    }

    .btn{
        width: 100%;
        box-sizing: border-box
    }
  }
}
</style>