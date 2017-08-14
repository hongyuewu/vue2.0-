<template>
    <div>
        <nav>
           <router-link :to="{path:'/heade/info'}">我的信息</router-link>
           <router-link :to="{path:'/heade/more'}">更多</router-link>
        </nav>        
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
	export default({
	    name:'header',
	    created (){
	        this.$router.push('/heade/info');
	    }
	})
</script>
<style type="text/css" scoped>
    
    nav {
        display: flex;
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
    .cont{
        padding: 10px;
    }
    
</style>