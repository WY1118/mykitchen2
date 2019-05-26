module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://tg.wochu.cn",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}