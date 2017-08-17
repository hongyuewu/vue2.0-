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
<style lang="scss" scoped type="text/css">
    $border_three:3px solid #42B983;
    $m_r_3:3px;
    $fontSize:14px;
    $color:#555;
    .cont{
        dl{
            margin-bottom:10px;
            dt{
                line-height:20px;
                padding:5px 0;
                em{
                    border-right:$border_three;
                    margin-right:$m_r_3
                }
            }
            .times{
                color: $color;
                font-size: $fontSize
            }
            p{
                line-height: 26px;
                word-wrap: break-word
            }
        }
        .green-text{
            color: #42B983
        }
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