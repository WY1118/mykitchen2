<template>
    <section class="no-login clear">
        <div class="no-login-hidden"></div>
        <div class="no-login-info">
            <a href="">登录</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "unLogin"
    }
</script>

<style scoped lang="scss">
    .no-login{
        width:100%;
        min-height:2.7rem;
        .no-login-hidden{
            height:2.7rem;
            width:100%;
        }
        .no-login-info{
            width:100%;
            height:1.32rem;
            a{
                margin-top: .48rem;
                width: 2.4rem;
                line-height:.6rem;
                left: 50%;
                margin-left: -1.2rem;
                color: #f67d30;
                text-decoration: none;
                font-size: .3rem;
                border: .02rem solid #f67d30;
                text-align: center;
                display: inline-block;
                position: relative;
            }
        }
    }
</style>