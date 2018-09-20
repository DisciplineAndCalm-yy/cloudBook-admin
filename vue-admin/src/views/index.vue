<template>
    <div>
        <h3>首页</h3>
        <div class="block" v-if="showGrade">
            <span class="demonstration">您对此系统打几分</span>
            <el-rate v-model="value" @click="handleClick"></el-rate>
        </div>
        <!-- <el-rate class="icon"
            v-model="value"
            :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
            void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: null,
                showGrade: true
            }
        },
        methods: {
            handleClick() {
                this.showGrade = false
                this.$message({
                    type: 'success',
                    message: '感谢您的反馈！'
                })
            }
        }
    }
</script>

<style scoped>
.icon {
    width: 500px;
    height: 50px;
}
</style>