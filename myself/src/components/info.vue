<template>
    <div>  
            
        <div class="cont" :class="{'hide':$store.getters.type.status==false}">
            <p><span>姓名：</span>{{$store.getters.name}}</p>
            <p><span>年龄：</span>{{$store.getters.age}}</p>
            <p><span>手机：</span>{{$store.getters.phone}}</p>
            <p><span>邮箱：</span>{{$store.getters.emil}}</p>
        </div>        
        <work ref="val" :height='10'></work>
        <p v-show="childText">{{childText}}</p>
        <p @click="parentCall">点击 </p>
    </div>
</template>

<script type="text/javascript">
    import work from './work';    
    export default({
        name:'header',
        data (){
            return {
                msg:"父组件的值",
                childType:false,
                childText:""
            }
        },
        components: {work},
        methods:{
            parentCall(){
                this.$refs.val.workVal(this.msg)
            },
            parentVal(child){
                if(child){
                    this.childType=true;
                    this.childText=child;
                }
            }           
        },
        mounted(){
            console.log($(this.el))
        }
    })
</script>
<style type="text/css"  scoped>
    .hide{
        display: none;
    }    
</style>