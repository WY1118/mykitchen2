import Vue from 'vue'
import axios from 'axios'
export default {
    state: {
        topGoodsList : []
    },
    mutations: {
        SET_TOP_GOODS(state,topGoodsList){
            state.topGoodsList = topGoodsList;
        }
    },
    actions: {
        getGoodsList({commit}){
            axios.get("http://127.0.0.1/getAllGoodsList").then(({data})=>{
                if(data){
                    if(data.ok === 1){
                        commit("SET_TOP_GOODS",data.goodsList)
                    }
                }
            })
        }

    }
}
