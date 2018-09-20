<template>
    <div>
        <h2>修改个人信息</h2>
        <el-form :model="formData" size="small" label-position="left" label-width="100px" class="wrap">
            <el-form-item label="头像">
                <upload v-model="formData.avatar" style="float: left"></upload>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input v-model="formData.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="primary" @click="handleClick">保存更改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import upload from '@/components/test-upload'
    import Axios from 'axios';

    export default {
        components: {
            upload
        },
        data() {
            return {
                formData: {
                    username: '',
                    nickname: '',
                    email: '',
                    avatar: '',
                    desc: ''
                }
            }
        },
        methods: {
            initData() {
                this.formData = {
                    ...this.$store.state.userinfo
                }
            },
            handleClick() {
                this.$axios.put('/user/userInfo', this.formData).then(res => {
                    if(res.code == 200) {
                        let userinfo = res.data
                        this.$store.commit('CHANGE_USERINFO', userinfo)
                        this.initData()
                        this.$message.success(res.msg)
                    }
                })
            }
        },
        created() {
            this.initData()
        }
    }
</script>

<style scoped>
.wrap {
    width: 500px;
    margin-top: 20px;
}
</style>