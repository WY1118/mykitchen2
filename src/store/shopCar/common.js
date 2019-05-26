import axios from 'axios'
export default {
    getData(url,methods,datas){
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: methods,
            params: datas
        }).then((res) => {
            resolve(res)
        }).catch(function (error) {
            reject(error)
            console.log(error);
        })
    })
}}