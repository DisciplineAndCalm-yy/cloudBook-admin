<template>
    <div>
        <el-table :data="tableData" stripe style="width: 500">
            <el-table-column label="轮播图头图" width="120">
                <template slot-scope="scope">
                    <img :src="scope.row.img" class="img">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="轮播图标题" width="120">
            </el-table-column>
            <el-table-column prop="book" label="图书头图">
                <template slot-scope="scope">
                    <img :src="scope.row.book.img" class="img">
                </template>
            </el-table-column>
            <el-table-column prop="book.title" label="图书">
            </el-table-column>
            <el-table-column prop="address" label="图书操作">
            <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="handleEdit(scope.row._id)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.row._id)">删除</el-button>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                count: 0,
                page: 1
            }
        },
        methods: {
            getData() {
                this.$axios.get('/swiper', { pn: this.page, size:5 }).then(res => {
                    console.log(res)
                    this.tableData = res.data
                    this.count = res.count
                })
            },
            changerPage(page) {
                this.page = page
                this.getData()
            },
            handleEdit() {},
            handleDel(id) {
                this.$axios.post('/swiper/delete', {ids: [id]}).then(res => {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                    }
                })
                this.getData()
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
.img{
    width: 80px;
    height: 100px;
}
</style>