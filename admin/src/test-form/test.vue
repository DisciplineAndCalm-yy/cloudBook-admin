<template>
    <div>
        <h1>上传图片测试页</h1>
        <!-- <h2>传统表单上传</h2>
        <div>
            <form action="https://upload-z1.qiniup.com" 
                method="post" enctype="multipart/form-data">
                <input type="file" name="file">
                <br>
                <input type="text" name="token" v-model="token">
                <br>
                <button>提交</button>
            </form>
        </div> -->


        <!-- <h2>ajax 上传</h2>
        <div>
            <input type="file" @change="handleFile">
            <img :src="imgData">
        </div> -->


        <!-- <upload @success="uploadImg"></upload>
        <div style="border: 1px solid #e8e8e8">
            <img :src="imgUrl" >
        </div> -->


        <checkbox></checkbox>
    </div>
</template>

<script>
    import axios from 'axios'

    import upload from '@/components/test-upload'
    import checkbox from '@/components/checkbox'

    export default {
        name: 'index',
        components: {
            upload,
            checkbox
        },
        data() {
            return {
                token: '',
                imgData: '',
                imgUrl: ''
            }
        },
        methods: {
            getToken() {
                axios.get('http://upload.yaojunrong.com/getToken').then(res => {
                    console.log(res);
                    this.token = res.data.data
                })
            },

            handleFile(event) {
                console.log(event)
                let file = event.target.files[0];

                let formData = new FormData();
                formData.append('file', file, file.name);
                formData.append('token', this.token);

                axios.post('https://upload-z1.qiniup.com', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        // 'Content-Type': 'application/json'
                    }
                }).then(res => {
                    this.imgData = res.data.url
                })
            },
            uploadImg(url) {
                this.imgUrl = url
            }
        },
        created() {
            this.getToken()
        }
    }
</script>

<style scoped>

</style>