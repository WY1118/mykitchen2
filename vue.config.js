module.exports = {
    // http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
    devServer:{
        proxy:{
            "/api":{
<<<<<<< HEAD
                target:"http://tg.wochu.cn",
=======
                target:"http://api9.wochu.cn",
>>>>>>> dfdc5f52016d31742d51cddbfd7817d5c235e842
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}