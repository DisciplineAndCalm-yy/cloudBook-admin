<template>
    <div class="main">
        <div class="box">
            <div>
                <span>用户名：</span>
                <el-input class="iform" v-model="formData.username" placeholder="请输入用户名"></el-input>
            </div>
            <div>
                <span>密码：&nbsp&nbsp&nbsp</span>
                <el-input class="iform" v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
            </div>
            <div>
                <span>昵称：&nbsp&nbsp&nbsp</span>
                <el-input class="iform" v-model="formData.nickname" placeholder="请输入昵称"></el-input>
            </div>
            <div>
                <span>邮箱：&nbsp&nbsp&nbsp</span>
                <el-input class="iform" v-model="formData.email" placeholder="请输入邮箱"></el-input>
            </div>
            <div class="foot">
                <span>个性签名：</span>
                <el-input class="desc" type="textarea" v-model="formData.desc" placeholder="请输入个性签名"></el-input>
            </div>
            <div class="avatar-box">
                <span>头像：</span>
                <el-upload
                    class="avatar-uploader"
                    action="https://upload-zi.qiniup.com"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </div>
        <el-button class="btn" type="primary" @click="handleAdd">添加管理员</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        nickname: "",
        password: "",
        email: "",
        desc: ""
      },
      imgUrl: ""
    };
  },
  methods: {
    handleAdd() {
      this.$axios
        .post("/user", this.formData)
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            setTimeout(() => {
              this.$message({
                type: "success",
                message: "添加管理员成功！"
              });
            }, 1000);
          } else {
            console.log(1111111111111);
            this.$message({
              type: "info",
              message: "添加失败！"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    imageUrl() {},
    handleAvatarSuccess() {},
    beforeAvatarUpload() {}
  }
};
</script>

<style scoped lang='scss'>
.main {
  display: flex;
  flex-direction: column;
  .box {
    margin: 30px auto 0;
    .iform {
      margin: 30px auto 0;
      width: 300px;
      height: 50px;
    }
    .desc {
      margin-top: 10px;
      width: 300px;
    }
  }
  .btn {
    margin: 50px auto 0;
    width: 200px;
  }
}
.foot {
  display: flex;
  span {
    margin-top: 25px;
  }
}
.avatar-box {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  span{
      margin-top: 50px;
  }
  .avatar-uploader{
      margin-left: 70px;
  }
  .avatar-uploader .el-upload {
    margin-top: 20px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
}
</style>