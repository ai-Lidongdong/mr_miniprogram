let serverPath = 'https://curtain-api.jimohu.com/'
export function post(request_type, url, body) {
  console.log('----her--->s')
    var promise =  new Promise((resolve,reject) => {
        wx.request({
              url: serverPath + url,    // 拼接完整的 url
              data: body,
              method: request_type,
              header: {
                token: wx.getStorageSync("token")
              },
              success(res) {
                  console.log(url, res.data)
                  resolve(res.data)  // 把返回的数据传出去
              },
              fail(ret) {
                reject(ret)   // 把错误信息传出去
              }
            })
    })
    return promise
}