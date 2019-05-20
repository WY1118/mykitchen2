<template>
    <section class="tarde-box">
        <div class="tarde-info">
            <span>换购</span>
            <div class="tarde-main">
                满79元，可换购养乐多，还差79.00元
            </div>
            <div class="tarde-now">
                立即换购 &gt;
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name : "tradeIn"
}
</script>
<style scoped lang="scss">
.tarde-box{
    height:.98rem;
    width:100%;
    background:#fff;
    border-bottom:.02rem solid #e6e6e6;
    margin:.1rem 0 .08rem 0;
    .tarde-info{
        width: 100%;
        color: #333;
        font-size: .3rem;
        line-height: .9rem;
        padding: 0 .18rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*font-family: "微软雅黑";*/
        >span{
            color: #f96d16;
            padding: .04rem .1rem;
            border: 1px solid #f96d16;
            border-radius: .1rem;
            vertical-align: initial;
            margin-right: .2rem;
            font-size: .26rem;
        }
        .tarde-main{
            color: #000;
            font-size: .26rem;
            line-height: .3rem;
            border: 0;
            width: 4.3rem;
            display: inline-block;
            word-wrap: break-word;
            white-space: normal;
            vertical-align: middle;
            padding: .04rem .1rem;
        }
        .tarde-now{
            float: right;
            color: #f86c15;
            font-size: .3rem;
            border: 0;
        }
    }
}
</style>