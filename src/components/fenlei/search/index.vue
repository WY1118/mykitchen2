<template>
    <div>
        <header>
            <div class="search-view">
                <div class="back" @click="backOne">
                    <img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628" alt="">
                </div>
                <div class="search-ctl">
                    <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="">
                    <input type="search" class="search-key" id="search-key">
                </div>
                <div class="search-btn">搜索</div>
            </div>
        </header>
        <nav id="wrapper" class="wrapper">
            <div id="scroller" class="scroller" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <div class="hot-search">
                    <p>热门搜索</p>
                    <ul>
                        <li>牛排</li>
                        <li>豆腐</li>
                        <li>年货</li>
                        <li>火锅</li>
                        <li>羊肉</li>
                        <li>特供蔬菜</li>
                        <li>冷冻</li>
                    </ul>
                </div>
                <div class="search-his">
                    <p>搜索历史</p>
                    <ul></ul>
                    <div class="clean-his">清空搜索记录</div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        backOne(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
header {
    position: absolute;
    width: 100%;
    height: .88rem;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
    background: #fff;
}
.search-view {
    width: 7.1rem;
    height: .58rem;
    margin: .15rem .2rem;
    line-height: .58rem;
    font-size: .3rem;
    color: #333;
}
.back {
    height: 100%;
    width: .8rem;
    float: left;
}
.back img {
    width: .58rem;
}
.search-ctl {
    width: 5.5rem;
    height: .58rem;
    background: #f1f2f6;
    border-radius: .28rem;
    float: left;
}
.search-ctl img {
    width: .58rem;
    height: .58rem;
    float: left;
}
.search-key {
    width: 4.64rem;
    height: .58rem;
    padding: 0;
    float: left;
    background: #f1f2f6;
    border: 0;
}
input {
    font-family: 微软雅黑;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    box-shadow: none;
    outline: none;
}
.search-btn {
    height: 100%;
    width: .8rem;
    float: right;
    text-align: right;
}
.wrapper {
    position: absolute;
    top: .88rem;
    bottom: 0;
    width: 100%;
    padding: 0 .2rem;
    overflow: hidden;
    background: #fff;
}
.scroller {
    width: 7.5rem;
    height:7.1rem;
    padding-bottom: .4rem;
}
.hot-search{
    width: 100%;
    height:2.36rem
}
.hot-search p, .search-his p {
    font-size: .3rem;
    color: #333;
    margin-top: .2rem;
}
.hot-search ul {
    background: #f4f5f7;
    width: 100%;
    height: 1.96m;
    display: block;
    font-size: .26rem;
    color: #666;
}
ul {
    list-style: none outside none;
}

.hot-search ul li {
    background: #fff;
    width: auto;
    line-height: .5rem;
    margin: .2rem;
    padding: .04rem .2rem;
    float: left;
}
.clean-his {
    width: 100%;
    margin: .2rem 0 .4rem;
    font-size: .24rem;
    color: #999;
    text-align: center;
}
</style>
