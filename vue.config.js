module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://www.haomua.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}