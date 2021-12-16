const baseUrl = 'https://yili-music-1479251-1308655658.ap-shanghai.run.tcloudbase.com'



export const get = (uri: string) => {
    wx.showLoading({
      title: '加载中'
    })
    
    return new Promise<any>((resolve, reject)=>{
      wx.request({
        url: baseUrl + uri,
        method: 'GET',
        success: (res)=>{
          resolve(res.data)
        },
        fail: reject,
        complete: ()=>{
          wx.hideLoading()
        }
      })
    })
}
