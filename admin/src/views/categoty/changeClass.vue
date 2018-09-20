<template>
    <div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/layout/showClass' }">分类列表</el-breadcrumb-item>  
                <el-breadcrumb-item>修改分类</el-breadcrumb-item>  
            </el-breadcrumb>
        </div>
        <el-form>
            <el-form-item label="分类图片">
                <template>
                    <upload class="upload" v-model="formData.icon"></upload>
                </template>
            </el-form-item>
            <el-form-item label="分类名称">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="分类编号">
                <el-input v-model="formData.index"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleClick">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import upload from '@/components/test-upload'

    export default {
        components: {
            upload
        },
        data() {
            return {
                formData: {
                    index: '',
                    icon: '',
                    title: ''
                },
                typeId: '',
                tableData: []
            }
        },
        methods: {
            getData() {
                let typeId = this.$route.query.id
                // console.log(typeId)
                this.typeId = typeId
                this.$axios.get('/category').then(res => {
                    this.tableData = res.data
                })
            },
            // initData() {
            //     this.catalogId = {
            //         ...this.$store.state.catalogId
            //     }
            // },
            handleClick() {
                this.$axios.put(`/category/${this.typeId}`, this.formData).then(res => {
                    if(res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '修改成功！'
                        })
                        this.$router.push('/layout/showClass')
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '修改失败！'
                    })
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
.upload {
    float: left;
}
</style>