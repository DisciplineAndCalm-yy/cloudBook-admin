<template>
    <div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/layout/showClass' }">分类列表</el-breadcrumb-item>  
            </el-breadcrumb>
        </div>
        <template>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="index" label="编号" width="100">
                </el-table-column>
                <el-table-column prop="title" label="分类名" width="120">
                </el-table-column>
                <el-table-column prop="scope" label="分类图" width="160">
                    <template slot-scope="scope">
                        <img :src="scope.row.icon" class="img-icon">
                    </template>
                </el-table-column>
                <el-table-column prop="books.length" label="数量" width="60">
                </el-table-column>
                <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleEdit(scope.row._id)">编辑</el-button>
                    <el-button size="mini" type='primary' @click="handleLook(scope.row._id)">查看信息</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>  
            </el-table>
            <el-pagination
                background
                :page-size="10"
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
                tableData: [],
                page: 1,
                count: 0
            }
        },
        methods: {
            getData() {
                this.$axios.get('/category', { pn: this.page, size: 10}).then(res => {
                    console.log(res)
                    this.tableData = res.data,
                    this.count = res.count
                })
            },
            handleLook(typeId) {
                this.$router.push(`/layout/bookCatelog?id=${typeId}`)
            },
            handleDelete(id) {
                this.$axios.delete(`/category/${id}`).then(res => {
                    if(res.code == 200) {
                        this.tableData = res.data
                        this.$message({
                            type: 'success',
                            message: '删除成功！'
                        });
                        this.getData()
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '删除失败!'
                    })
                })
            },
            handleEdit(id) {
                this.$router.push(`/layout/changeClass?id=${id}`)
            },
            changerPage(page) {
                this.page = page;
                this.getData();
            }
        },
        created() {
            this.getData();
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