<template>
    <div>        
        <div class="cont" :class="{'hide':$store.getters.type.status==false}">
            <p><span>姓名：</span>{{$store.getters.name}}</p>
            <p><span>年龄：</span>{{$store.getters.age}}</p>
            <p><span>手机：</span>{{$store.getters.phone}}</p>
        </div>        
        <work ref="val" :height='10'></work>
        <p @click="parentCall">点击 </p>
    </div>
</template>

<script type="text/javascript">
    import work from './work'
    
    export default({
        name:'header',
        data (){
            return {
                msg:"父组件的值"
            }
        },
        created (){
            this.$router.push('info');
        },
        components: {work},
        methods:{
            parentCall(){
                this.$refs.val.workVal(this.msg)
            },
            parentVal(child){
                alert(child)
            }
           
        }
    })
</script>
<style type="text/css"  scoped>
    .hide{
        display: none;
    }
    nav {
        display: flex;
        border-bottom: 5px solid #f5f5f5;
    }
    nav a{
        flex: 1;
        text-align: center;
        line-height: 40px;
        height: 40px;
        background-color:#cdcdcd ;
        color: #fff;
        text-decoration: none;
        border-right:1px solid #ddd ;
        box-sizing: border-box;
    }
    nav a:last-child{
        border-left:0 none
    } 
    .active{
        color: #000;
        background-color:#fff ;
    }
    
    
</style>