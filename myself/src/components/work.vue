<template>
    <div class='cont'>
        <h2>经历</h2>
        <dl v-for="(item, index) in dataList">
        	<dt>{{item.name}}</dt>
        	<dd>
        	    <p>工作内容</p>
        	    <p><span v-html="item.info"></span></p>
        	</dd>
        </dl>
        <p @click="childCall('我是子元素的值')">点击</p>
        <img :src="'../assets/'+img" />
        <img src="../assets/logo.png"/>
    </div>    
</template>
<style scoped type="text/css">
    .cont dl{
        margin-bottom: 10px;
    }
    .cont dl p{
        line-height: 26px;
        word-wrap: break-word
    }
</style>
<script type="text/javascript">
    import {list} from './../data';
	export default({
	    props:{
	        height:Number,
	        weight:Number
	    },
	    name:'work',
	    data(){
            return {
                dataList:list,
                img:"logo.png"
            }
        },
        methods:{
            workVal(par){
                alert(par)
            },
            childCall(child){
                this.$parent.parentVal(child)
            }
        }
	})
</script>