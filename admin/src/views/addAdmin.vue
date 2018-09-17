<template>
    <div class="main">
        <div class="box">
            <div>
                <span>用户名：</span>
                <el-input class="iform" v-model="formData.username" placeholder="请输入用户名"></el-input>
            </div>
            <div>
                <span>密码：</span>
                <el-input class="iform" v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
            </div>
            <div>
                <span>确认密码：</span>
                <el-input class="iform" v-model="checkPassword" type="password" placeholder="请输入密码"></el-input>
            </div>
            <div>
                <span>昵称：</span>
                <el-input class="iform" v-model="formData.nickname" placeholder="请输入昵称"></el-input>
            </div>
            <div>
                <span>邮箱：</span>
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
                    action="https://upload-z1.qiniup.com"
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
import axios from 'axios'
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
      checkPassword: "",
      imgUrl: "",
      token: ""
    };
  },
  methods: {
    handleAdd() {
      if(this.formData.password == this.checkPassword){
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
            this.$message({
              type: "info",
              message: "添加失败！"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        this.$message({
          type: "info",
          message: "两次输入的密码不一样，请重新输入"
        })
      }
    },
    imageUrl() {
      this.imageUrl = imageUrl
    },
    handleAvatarSuccess(res, file) {
      this.imgUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if(!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if(!isLt2M) {
        this.$message.erro('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    getToken() {
      axios.get('http://upload.yaojunrong.com/getToken').then(res => {
        console.log(res);
        this.token = res.data.data
      })
    }
  },
  created() {
    this.getToken()
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