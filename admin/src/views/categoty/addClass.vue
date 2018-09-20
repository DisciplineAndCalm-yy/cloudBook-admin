<template>
    <div>
        <el-form>
            <el-form-item label="分类图标" size="small">
                <upload v-model="formData.icon" class="upload"></upload>
            </el-form-item>
            <el-form-item label="分类名称" size="small">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click='handleAdd'>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import upload from '@/components/test-upload'

    export default {
        data() {
            return {
                formData: {
                    icon: '',
                    title: ''
                }
            }
        },
        components: {
            upload
        },
        methods: {
            handleAdd() {
                this.$axios.post('/category', this.formData).then(res => {
                    if(res.code == 200){
                        this.$message({
                            type: 'success',
                            message: '添加成功！',        
                        })
                        this.$router.push('/layout/showClass')
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '添加失败！'
                    })
                })
            }
        }
    }
</script>

<style scoped>
.upload {
    float: left;
}
</style>