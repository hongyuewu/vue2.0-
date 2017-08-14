<template>
  <div id="app">
    <router-view ></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app',
  created (){
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cont{
        padding: 10px;
        text-align: left;
        background-color: #fff;
        border-bottom: 5px solid #f5f5f5;       
    }
.cont>h2{
    font-size: 16px;
    line-height: 40px;
    color: #42B983;
    border-bottom: 1px solid #aaa;
}
.cont>p{
    height: 35px;
    line-height: 40px;
    word-wrap: break-word
}

    
</style>
