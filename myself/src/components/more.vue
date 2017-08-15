<template>
    <div>
        <div class='cont'>
            <h2>个人技能</h2>
            <dl>
                <dd>
                    <p>1.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    <p>2.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    <p>3.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    <p>4.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
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