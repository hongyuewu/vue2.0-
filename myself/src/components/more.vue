<template>
    <div>
        <div class='cont'>
            <h2>个人技能</h2>
            <dl>
                <dd>
                    <p>1.精通HTML5、CSS3及JavaScrip核心技术如面向对象、闭包、ajax、json、原型链等。</p>
                    <p>2.熟练掌握Vue、jquery、zepto等主流js开发框架。了解react</p>
                    <p>3.熟练使用webpack打包编译工具及使用gulp对代码进行构建</p>
                    <p>4.有使用vue2.0+vue全家桶+es6进行组件式开发小型项目经验。</p>
                    <p>5.熟练运用Photoshop、HBuilder、Sublime text、firebug等常用网页设计制作软件</p>
                    <p>6.使用mock.js模拟数据</p>
                </dd>
            </dl>
        </div>
    	
    </div>
</template>

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
    .cont dl{
        margin-bottom: 10px;
    }
    .cont dl p{
        line-height: 26px;
        word-wrap: break-word
    }
</style>