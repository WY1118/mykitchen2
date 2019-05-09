export default{
    path:"/menu",
        component:()=>import("@/views/mine/menu"),
        name:"menu",
        meta: {
            tabBarFlag: true
        },
    children:[
        {
            path:"pay",
            name:"pay",
            component:()=>import("@/components/pay"),
            meta:{
                tabBarFlag:false
            },
        },
        {
            path:"shop",
            name:"shop",
            component:()=>import("@/components/shop"),
            meta:{
                tabBarFlag:false
            },
        },
        {
            path:"evaluate",
            name:"evaluate",
            components:()=>import("@/components/evaluate"),
            meta:{
                tabBarFlag:false

            }
        },
        {
            path:"/menu",
            redirect: "mine"
        }


    ]
}