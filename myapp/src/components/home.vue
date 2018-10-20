<template>
    <div>
      <h1>我是首页</h1>
      <button @click="handleGetData">普通发送数据</button>
      <button @click="getJsonp">获得Jsonp数据</button>
      <button @click="getHard">POST非简单请求</button>
      <button @click="handleVue">使用Vue脚手架跨域</button>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "home",
    methods: {
      handleGetData() {
        axios.get('http://localhost:3000/getMsg', {
          withCredentials: true
        }).then(res => {
          console.log(res);
      }).catch(err => {
          console.log('err',err)
      })
      },
      getJsonp() {
        let script = document.createElement('script');
        script.src = 'http://localhost:3000/getJsonp?callback=getData'
        let body = document.body;
        body.appendChild(script)
      },
      getHard() {
          axios.post('http://localhost:3000/hard',{username: 'yang'}).then(res => {
            console.log(res)
         })
      },
      handleVue() {
        axios.get('/api/getMsg').then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>
