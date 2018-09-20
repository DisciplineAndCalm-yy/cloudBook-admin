<template>
    <div>
        <div class="content">
            <div class="container">
                <label class="btn-wrap">
                    <input type="file" name="file"
                     accept="image/png, image/jpg, image/jpeg"
                     @change="up" id="file-input">
                    <img :src="currentValue" v-if="currentValue">
                    <i class="el-icon-plus" v-else></i>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: {
            value: {
                type: [String]
            }
        },
        data() {
            return {
                token: '',
                currentValue: this.value
            }
        },
        methods: {
            up($event) {
                console.log($event)
                var file = $event.target.files[0];
                var form = new FormData();
                form.append('file', file);
                form.append('token', this.token);
                axios.post("https://upload-z1.qiniup.com", form, {
                    headers: {"Content-Type": "multipart/form-data"}
                }).then(res => {
                    this.$emit('input', res.data.url)
                })
            },
            getToken() {
                axios.get("http://upload.yaojunrong.com/getToken").then(res => {
                    console.log(res);
                    this.token = res.data.data
                })
            }
        },
        created() {
            this.getToken();
        },
        watch: {
            value(val) {
                this.currentValue = val
            }
        }
    }
</script>

<style scoped>
  .item-img {
    text-align: center;
  }
  #file-input {
    display: none;
  }
  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 4px;
    border: 1px dashed #bbb;
    margin: 20px 0 0 80px;
  }
  #btn-wrap img {
    z-index: 998;
    height: 150px;
    width: 150px;
  }
  .el-icon-plus {
    font-size: 60px;
    color: #2d3a4b;
    font-weight: 400;
  }
</style>