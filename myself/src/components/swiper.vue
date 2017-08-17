<template>
    <div class="swiper-wrap" @mouseover="autoPlayStop" @mouseout="autoPlayStart(0)">
        <p>
        	<img  :src="sildeArr[nowIndex]" >       
        </p>
        <p class="sli-page">
        	<span @click="goto(prev)">&lt;</span>
        	<span v-for="(item,index) in sildeArr" :style="{'color': nowIndex == index ? active : unActive}" @click="goto(index)">{{index+1}}</span>
        	<span @click="goto(next)">&gt;</span>
        </p>
    </div>
</template>
<script>

export default({
	name:'swiper',
	props:{
		height:Number, 
		sildeArr:{
			type:Array,
			default:[]
		},
		unActive:{//索引默认颜色
			type:String,
			default: '#f5f5f5',
		},
		active:{//索引选中颜色
			default: '#ccc',
		},
		autoPlaytime:{
			type:Number,
			default:3000
		}

	},
	data(){
		return {
			nowIndex:0,
			autoPlaytype:true
		}
	},
	computed:{
		prev(){
			if(this.nowIndex==0){
				return this.sildeArr.length-1
			}else{
				return this.nowIndex-1
			}
			// nowIndex--;
		},
		next(){
			if(this.nowIndex==this.sildeArr.length-1){
				return 0
			}else{
				return this.nowIndex+1
			}
		}
	},
	methods:{
		goto(index){
			this.nowIndex=index
		},
		autoPlayStop(){
			let _this=this;
			clearInterval(_this.autoPlaytype)
		},
		autoPlayStart(i){
			let _this=this;
			_this.autoPlaytype=setInterval(()=>{
				_this.goto(_this.next)
			},_this.autoPlaytime)
			
		}
	},
	mounted(){
		this.autoPlayStart();
	}
})
</script>	
<style lang="scss" type="text/css" scoped>
	img{
		width: 100%;
	}
	span{
		width: 24px;
		height: 24px;
		margin-right: 20px;
		border-radius: 50%;
		line-height: 24px;
		text-align: center;
		display: inline-block;
		background-color: #333;
		font-size: 16px;
		color: #fff

	}
	.swiper-wrap{
		position: relative;
		.sli-page{
			position: absolute;
			bottom: 10px;
			left: 0;
			right: 0
		}
	}
	

</style>