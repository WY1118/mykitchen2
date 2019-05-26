import Vue from 'vue'
import axios from 'axios'
export default {
    state: {
        topGoodsList : []
    },
    mutations: {
        SET_TOP_GOODS_LIST(state,topGoodsList){
            state.topGoodsList = topGoodsList;
        }
    },
    actions: {
        getTopGoods({commit},cb=function(){}){
            axios.get("http://39.106.67.233:100/getGoodsLists",{
                params:{
                    obj:{
                        whereObj:{
                            smallGoodsTypeName : "大大的推荐"
                        },
                        sortObj :{
                            orderBy : 1
                        }
                    }
                }
            }).then(({data})=>{
                if(data){
                    commit("SET_TOP_GOODS_LIST",data.goodsList);
                    cb();

                }
            })
        }
    }
}
