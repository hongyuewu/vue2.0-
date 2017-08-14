<template>
  <div class="hello">
      <img src="../assets/why.jpg"/>
      <div>
        <div class="p-b-10"><span>用户名：</span><input v-model="form.name" type="text" /></div>
        <div class="p-b-10"><span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input type="password" v-model='form.password' /></div>
        <a href="javascript:;" @click="submitFn">登录</a>
        <a href="javascript:;" @click="registerFn">注册</a>
        <!--<router-link :to="{path:'/heade'}">登录</router-link>-->
      </div>
      <p @click="setType"><span class="btn">{{$store.getters.type.swichText}}info</span></p>
      <!--<p @click="cli">34454</p>-->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
        form:{
            name:this.$store.getters.more.name,
            password:this.$store.getters.more.password
        }
    }  
  },
  created (){
//  this.openNew();
    var s=[]
    for(var i=0;i<=1;i++){
        var num=Math.floor(Math.random()*10+1);
        if(s.length<10){
            if(s.indexOf(num)<=-1){
                s.push(num);                                
            }
            i=0;
        } 
    }
  },
   methods: {
//     openNew(){
//        var _this=this;
//        setTimeout(function(){
//          _this.$router.push('info'); 
//        },5000) 
//     },
        submitFn(){
             this.$router.push({ path: '/heade' })
             this.submitFnX(this.form);
        },
        registerFn(){
            this.$router.push({ path: '/register' })
        },
    ...mapActions([     
       // 映射 this.setType() 为 this.$store.dispatch('setType')
      'setType',
      'submitFnX'
    ]),
    handleClick(){
        this.$toast('Hello world!')
    }
  },
  directives:{
      alerts:{
          inserted(el){
              var _el=el;
              _el.onclick=function(){
                  alert(34343)
              }
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> h1,
h2 {
    font-weight: normal;
}

div {
    padding: 80px 0;
}

img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

p {
    text-align: center;
    margin-top:30px ;
}

a {
    color: #42b983;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #42b983;
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;
}
input{
    width: 150px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border:1px solid #ddd
}
.btn{
    display: inline-block;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.p-b-10{
    padding: 0;
    padding-bottom: 10px;
}

</style>
