<template>
    <div class="container">
        <h1 class="title">欢迎来到云上书城的后台操作系统</h1>

        <!-- <h1 id="h1" ref="title">hello world</h1> -->

        <div class="box">
            <h2 class="box-title">请登录</h2>
            <el-form class="form" ref="form" :rules="rules" :model="formData">
                <el-form-item label='用户名' prop="username">
                    <el-input v-model="formData.username" placeholder='请输入用户名'></el-input>
                </el-form-item>
                <el-form-item label='密码' prop="password" @keyup.enter.native="handleLogin">
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
    
    const validateUsername = (rule, value, callback) => {
        if(!value) {
            callback(new Error('必须输入合法用户名'))
        } else {
            callback
        }
    }

    const validatePassword = (rule, value, callback) => {
        if(value && value.length >= 5) {
            callback
        } else {
            callback(new Error('请输入合法的密码'))
        }
    }

    return {
      formData: {
        username: "",
        password: ""
      },
      avatar: '',
      nickname: '',
      rules: {
          username: [{validator: validateUsername,  trigger: 'blur'}],
          password: [{validator: validatePassword,  trigger: 'blur'}]
      },
      isLoading: false
    };
  },
//   created() {//vue 实例准备好的时候，new Vue()此时已经完成
//     this.$nextTick(() => {
//         let h1 = this.$refs.title
//         console.log(h1);
//     })

//     let template = {
//         template: '<h1>我是组件内容</h1>'
//     }
//   },
//   mounted() {
//       let h1 = this.$refs.title
//       console.log(h1)
//   },
  methods: {
      handleLogin(id) {
          this.isLoading = true
          this.$axios.post('/login', this.formData).then(res => {
              console.log(res)
              if(res.code == 200) {
                  this.$message.success('登录成功')
                  this.$store.commit('CHANGE_USERINFO', res.data)
                  this.avatar = res.data.avatar
                  this.nickname = res.data.nickname
                  setTimeout(() => {
                      this.$router.push(`/layout?id=${this.avatar}&&nickname=${this.nickname}`)
                  }, 1000)
              } else {
                  this.$message.error('登录失败')
              }
              this.isLoading = false
          }).catch(err => {
              this.isLoading = false,
              this.$message.error('登录失败')
          })
      },
      validateLogin() {
          console.log(1232131241242)
          this.$refs['form'].validate((valid) => {
            if (valid) {
                this.handleLogin();
            } else {
              return false;
            }
        });
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