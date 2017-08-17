<template>
    <div class="r-cont">
        <div>
            <h2>注册</h2>
            <dl>
            	<dt>用户名：</dt>
            	<dd><input type="text" v-model="info.userName" placeholder="请输入用户名密码" /></dd>
            </dl>
            <dl>
            	<dt>密码：</dt>
                <dd><input type="password" v-model="info.passWord" placeholder="请输入6位密码" /></dd>
            </dl>
            <dl>
                <dt>再次输入密码：</dt>
                <dd><input type="password" v-model="info.passWordAgin" placeholder="请再次输入6位密码" /></dd>
            </dl>
            <dl>
                <dt>手机号：</dt>
                <dd><input type="number" v-tel v-model="info.tel" placeholder="请输入手机号" /></dd>
                
            </dl>
       
        <a href="javascript:;" class="btn" @click="registerFn">立即注册</a>
         </div>
    </div>
</template>
<style lang="scss" type="text/css" scoped="scoped">

.r-cont{
    padding: 15px 20px;
    height: 100%;
    box-sizing: border-box;
    background-color: #F1B796;
    h2{
        color:#fff;
        height:80px;
        line-height:80px
    }
    dl{
        overflow: hidden;
        padding: 10px 0;
        font-size: 14px;
        color: #fff;
        dt{
            float: left;
            width: 100px;
            text-align: right;
            line-height: 35px;

        }
        dd{
            display: block;
            input{
                height: 31px;
                padding: 0 10px;
                border: 0 none;
            }
        }
    }
    a {
        color: #777;
        width: 90%;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        border-radius: 5px;
        display: inline-block;
        text-decoration: none;
        box-sizing: border-box;
    }
    .btn{
        display: inline-block;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        border-radius: 3px;
        margin: 50px 0;
        box-shadow: 0 0 5px 2px #DCDCDC;
    }

   
}

	
</style>
<script type="text/javascript">
import Vue from 'vue'
import directives from '../directive';
Vue.directive('tel', directives.tel);
import {mapActions} from 'vuex'
import myData from '../data/aboutme';
export default{
    name:"register",
    data(){
        return {
            info:{
                userName:'',
                passWord:'',
                passWordAgin:'',
                tel:''
            }           
        }
    },
    created(){
        this.$http.get("http://g.cn").then(function(data){
            console.log(data.bodyText)
        },function(err){

        });
    },
    methods:{
        registerFn(){
            this.$router.push('/');
            this.rigisterInfo(this.info);
        },
        ...mapActions([     
           // 映射 this.setType() 为 this.$store.dispatch('setType')
          'rigisterInfo'
        ])
    }
    
}
</script>