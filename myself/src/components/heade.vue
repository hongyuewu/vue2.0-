<template>
    <div>
        <swiper :sildeArr="img" unActive="#888" active="#fff" ></swiper>  
        <nav>
           <router-link :to="{path:'/heade/info'}">我的信息</router-link>
           <router-link :to="{path:'/heade/more'}">更多</router-link>
        </nav>        
        <router-view></router-view>
    </div>
</template>


<script type="text/javascript">

    import swiper from './swiper'
    import dataImg from '../data/aboutme'; 
	export default({
	    name:'header',
        data(){
            return{
                img:[]
            }
        },
	    created (){
	        this.$router.push('/heade/info');
            this.$router.push('info');
            this.$http.get('http://img.cn').then((data)=>{
                let dataImg=JSON.parse(data.bodyText);
                this.img=dataImg.img
            });
	    },
        components: {swiper}
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