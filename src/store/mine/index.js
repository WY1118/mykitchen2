import axios from "axios";
export default{
    namespaced: true,
    state:{
        arr:[]
    },
    mutations: {
        getBuying(state,data){
            state.arr = data;
        }
    },
    getters: {
        
    },
    actions:{
        getGbuying({commit}){
            axios
            .get(
              "api/client/v1/groupBuy/HotSaleList?parameters=%7B%22pageSize%22%3A5%2C%22pageIndex%22%3A1%7D"
            )
            .then(({data}) => {
             console.log(111,data);
            //    this.arr.push(data.data);
            //    console.log(this.arr.data)
            commit("getBuying",data.data)
            });
        }
    }
}