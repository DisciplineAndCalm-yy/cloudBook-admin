<template>
    <div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/layout/showClass' }">分类列表</el-breadcrumb-item>  
                <el-breadcrumb-item>分类详情</el-breadcrumb-item>  
            </el-breadcrumb>
        </div>
        <template>
            <el-table :data="bookData" stripe style="width: 100%">
                <el-table-column prop="index" label="编号" width="100">
                </el-table-column>
                <el-table-column prop="title" label="书籍名" width="120">
                </el-table-column>
                <el-table-column prop="scope" label="封面" width="150">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img-icon">
                    </template>
                </el-table-column>
                <el-table-column prop="author" label="作者" width="100">
                </el-table-column>
                <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="editBook">编辑</el-button>
                        <el-button size="mini" type='primary' @click="lookBook">查看信息</el-button>
                        <el-button size="mini" type="danger" @click="deleteBook(scope.row._id)">删除</el-button>
                    </template>
                </el-table-column>  
            </el-table>
            <el-pagination
                background
                :page-size="5"
                @current-change="changerPage"
                layout="prev, pager, next"
                :total="count">
            </el-pagination>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bookData: [],
                page: 1,
                count: 0,
                categoryId: ''
            }
        },
        methods: {
            getData() {
                let typeId = this.$route.query.id
                this.categoryId = typeId
                this.$axios.get(`/category/${typeId}/books`, { pn: this.page, size: 5}).then(res => {
                    console.log(res)
                    this.count = res.count
                    if(res.code == 200) {
                        this.bookData = res.data.books
                    }
                })
            },
            changerPage(page) {
                this.page = page
                this.getData()
            },
            editBook() {},
            lookBook() {},
            deleteBook(id) {
                this.$axios.delete(`category/${this.categoryId}/book/${id}`).then(res => {
                    this.$message.success(res.msg)
                    this.getData()
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
.img-icon {
    width: 80px;
    height: 80px;
    line-height: 80;
}
</style>