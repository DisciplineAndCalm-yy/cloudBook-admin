<template>
    <div class="users">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/layout/users' }">用户列表</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/layout/details' }">个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="username" label="用户名" width="180"></el-table-column>
            <el-table-column prop="nickname" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="createdTime" label="注册日期" width="180">
            </el-table-column>
            <el-table-column prop="desc" label="个性签名">
            </el-table-column>
            <el-table-column prop="avatar" label="头像">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" class="avatar">
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" type='primary' @click="handleLook">查看信息</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
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
            this.$axios.get('/user', { pn: this.page, size: 5}).then(res => {
                console.log(res);
                if(res.code == 200){
                    this.count = res.count
                    this.tableData = res.data
                }
            })
        },
        handleLook() {
            this.Router.push('/layout/details')
        },
        handleDelete(id) {
            this.$confirm('此操作将永久删除一位管理员, 是否继续?', '警告', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'}).then(() => {
                this.$axios.post('/user/delete', {userIds: [id]}).then(res => {
                    if(res.code == 200){
                        this.tableData = res.data
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getData()
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        changerPage(page) {
            this.page = page
            this.getData()
        }
    },
    created() {
        this.getData()
    }
};
</script>

<style scoped>
.avatar{
    width: 80px;
    height: 80px;
}
</style>