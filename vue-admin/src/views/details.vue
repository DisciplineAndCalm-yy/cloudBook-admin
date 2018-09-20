<template>
    <div>
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
                    <el-button size="mini" type='primary' @click="handleChange">编辑信息</el-button>
                </template>
            </el-table-column>   
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            tableData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/user').then(res => {
                if(res.code == 200){
                    this.tableData = res.data
                }
            })
        },
        handleChange() {
        },
    },
    created() {
        this.getData()
    }
    }
</script>

<style scoped>
.avatar{
    width: 80px;
    height: 80px;
}
</style>