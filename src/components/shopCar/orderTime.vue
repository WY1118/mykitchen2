<template>
    <!--头部配送时间组件-->
    <div @click="$emit('update:isDeliveryTime',!isDeliveryTime)">
        <div class="un-look"></div>
        <section class="order-time-box">
            <div class="oreder-time-title">
                <img :src="titleImg" alt="">
                <span>配送时间:&nbsp;</span>
                <div class="title-time">4/26周五&nbsp;08:00-11:30</div>
                <div class="title-gochange" >去修改 &gt;</div>
            </div>
        </section>
    </div>

</template>
<script>
export default {
    name : "orderTime",
    data(){
        return {
            titleImg : "img/time-icon.png"
        }
    },
    props:["isDeliveryTime"]

}
</script>
<style scoped lang="scss">

    .un-look::after{
        /*占位符*/
        height:.9rem;
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
    }
.order-time-box{
    display: flex;
    align-items: center;
    height:1.08rem;
    width:100%;
    background:#fff;
    /*font-family: "微软雅黑";*/
    .oreder-time-title{
        height:.34rem;
        display:flex;
        font-size: .28rem;
        >img{
            margin:0 .32rem 0 .46rem;
        }
        .title-time{
            font-size:.3rem;
            color:#f86c15;
            font-weight: bold;
        }
        .title-gochange{
            color:#f86c15;
            margin-left:.56rem;
            font-size:.3rem;
        }
    }
}
</style>