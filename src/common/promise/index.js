export default {   
    fetchData (url, methods, datas) {
        return new Promise((resolve, reject) => {
          axios({
              url: url,
              method: methods,
              data: datas
            }).then((res) => {
              resolve(res)
            }).catch(function (error) {
              reject(error)
              // console.log(error);
            })
        })
    }
}