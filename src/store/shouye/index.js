import axios from "axios";
export default {
    namespaced:true,
    state: {
        lunbodata: [],
        navdata:[],
        homegoods:[],
        detailgoods:[]
    },
    mutations: {
       getLunbo(state,data){
            state.lunbodata = data;
       } ,
       getNav(state,data){
            state.navdata = data;
       } ,
       gethomeGoods(state,goods){
            state.homegoods = goods;     
       }
    },
    actions: {
        getLunbo({commit},cb=function(){}) {
            axios.get("http://39.106.67.233:100/getSmallGoodsTypeList", {
                params: {
                    obj: {
                        whereObj: {
                            goodsTypeName: "首页轮播"
                        },
                        sortObj: {
                            addTime: 1
                        }
                    }
                }
            }).then(({data}) => {
                // console.log(data.smallGoodsTypeList)
                commit("getLunbo",data.smallGoodsTypeList)
                cb();
            })
        },
        getNavlist({commit}) {
            axios.get("http://39.106.67.233:100/getSmallGoodsTypeList", {
                params: {
                    obj: {
                        whereObj: {
                            goodsTypeName: "首页导航"
                        },
                        sortObj: {
                            addTime: 1
                        }
                    }
                }
            }).then(({data}) => {
                // console.log(data.smallGoodsTypeList)
                commit("getNav",data.smallGoodsTypeList)
            })
        },
        gethomeGoods({commit},cb=function(){}){
            axios.get("api/api/app/acts?version=20.0.0&source=H").then(({data})=>{
                // console.log(data.data.acts)
                commit("gethomeGoods",data.data.acts)
                cb();
            })
        },
        // getdetailGoods({commit}){
        //     axios.get("api/api/app/goods/goods/detail?goodsGuid=0558fee7-83d0-42f3-a9a0-f49780b79161").then((data)=>{
        //         console.log(data)
        //         // commit("gethomeGoods",data.data.acts)
                
        //     })
        // }
    }

}
