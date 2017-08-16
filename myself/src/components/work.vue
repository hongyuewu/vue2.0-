<template>
    <div class='cont'>
        <h2>工作经历</h2>
        <dl v-for="(item, index) in dataList">
        	<dt><em></em>{{item.name}}</dt>
            <dd class="times">{{item.worktime}}</dd>
        	<dd>
        	    <p><span v-html="item.info"></span></p>
        	</dd>
        </dl>
        <p class="green-text" @click="childCall('我是子元素的值')">其他</p>
        <img :src='img' />
    </div>    
</template>
<style scoped type="text/css">
    .cont dl{
        margin-bottom: 10px;
    }
     .cont dl dt{
        line-height: 20px;
        padding: 5px 0;
     }
    .cont dl dt em{
        border-right: 3px solid #42B983; 
        margin-right: 3px; 
    }
    .cont dl .times{
        color: #555;
        font-size: 14px
    }
    .cont dl p{
        line-height: 26px;
        word-wrap: break-word
    }
    .green-text{
        color: #42B983
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
                img:require('../assets/logo.png')
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