<template>
    <div>
        <el-form :model="formData">
            <el-form-item label="图书网址">
                <el-input v-model="formData.url"></el-input>
            </el-form-item>
            <el-form-item label="图书作者">
                <el-input v-model="formData.author"></el-input>
            </el-form-item>
            <el-form-item label="图书头图">
                <el-switch
                    v-model="isUpload"
                    active-text="手动上传"
                    inactive-text="头图网址">
                </el-switch>
                <el-input v-model="formData.img" v-if="!isUpload"></el-input>
                <upload v-model="formData.img" v-else></upload>
            </el-form-item>
            <el-form-item label="图书分类">
                <el-select v-model="formData.typeId">
                    <el-option v-for="(item, index) in categoryData"
                        :key="index" :label="item.title" :value="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-button @click="handleSubmit">提交</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    url: '',
                    author: '',
                    img: '',
                    typeId: ''
                },
                categoryData: [],
                isUpload: false
            }
        },
        methods: {
            async getCategoryData() {
               const res = await this.$axios.get('/category')
               this.categoryData = res.data
            },
            handleSubmit() {
                this.$axios.post('/book', this.formData).then(res => {
                    this.$message.success(res.msg)
                    this.$router.push('/layout/showClass')
                })
            }
        },
        created() {
            this.getCategoryData()
        }
    }
</script>

<style scoped>

</style>