module.exports = {
    // http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
    devServer:{
        proxy:{
            "/api":{
                target:"http://api9.wochu.cn",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}