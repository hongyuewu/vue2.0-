<template>
    <div class="r-cont">
        <div>
            <h2>注册</h2>
            <dl>
            	<dt>用户名：</dt>
            	<dd><input type="text" :class="{'inputerro':!info.userName.status}" v-model="info.userName.cont" placeholder="请输入用户名密码" /></dd>
            </dl>
            <dl>
            	<dt>密码：</dt>
                <dd><input type="password" :class="{'inputerro':!info.passWord.status}" v-model="info.passWord.cont" placeholder="请输入6位密码" /></dd>
            </dl>
            <dl>
                <dt>手机号：</dt>
                <dd><input type="number" :class="{'inputerro':!info.mobile.status}"  v-model="info.mobile.cont" placeholder="请输入手机号" /></dd>
                
            </dl>
            <dl>
                <dt>邮箱：</dt>
                <dd><input type="emil" :class="{'inputerro':!info.emil.status}" v-model="info.emil.cont" placeholder="请输入邮箱" /></dd>
                
            </dl>
       
        <a href="javascript:;" class="btn" @click="validateFn()">立即注册</a>
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
            .inputerro{
                background-color: #ddd;

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
import validate from '../validate'
import {mapActions} from 'vuex'
import myData from '../data/aboutme';
Vue.use(validate);
export default{
    name:"register",
    data(){
        return {
            info:{
                userName:{
                    cont:"",
                    type:'required',
                    reg:'',
                    status:true
                },
                passWord:{
                    cont:"",
                    type:"required",
                    reg:"",
                    status:true
                },
                mobile:{
                    cont:"",
                    type:'required',
                    reg:"mobile",
                    status:true
                },
                emil:{
                    cont:"",
                    type:"required",
                    reg:"emil",
                    status:true
                }
            },
            inputType:true           
        }
    },
    created(){
        this.$http.get("http://g.cn").then(function(data){
            console.log(data.bodyText)
        },function(err){

        });
    },
    methods:{
        
        validateFn(){
            let validateType=true
            for(let i in this.info){
                if(!this.validate(this.info[i].cont,this.info[i].type,this.info[i].reg)){
                    this.info[i].status=false
                    return false;
                }else{
                    this.info[i].status=true
                }
            }
            if(validateType){
                this.$router.push('/');
                this.rigisterInfo(this.info);
            }
        },
        ...mapActions([     
           // 映射 this.setType() 为 this.$store.dispatch('setType')
          'rigisterInfo'
        ]),
    }
    
}
</script>