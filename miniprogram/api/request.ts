import { getToken, removeToken, setToken } from "../utils/auth"

const baseUrl = 'http://localhost:8080'


export const get = (uri: string) => {
    wx.showLoading({
      title: '加载中'
    })
    
    return new Promise<any>((resolve, reject)=>{
      wx.request({
        url: baseUrl + uri,
        method: 'GET',
        success: (res)=>{
          if(res.statusCode === 401) {
            removeToken()
            const currentPages = getCurrentPages()
            const currentRoute = currentPages[currentPages.length - 1].route
            if (currentRoute !== 'pages/login/index') {
              wx.navigateTo({
                url: `/pages/login/index`
              })
            }
            wx.showToast({
              title: '用户未登录',
              icon: 'error'
            })
          }
          resolve(res.data)
        },
        fail: reject,
        complete: ()=>{
          wx.hideLoading()
        }
      })
    })
}

export const post = (uri: string, data: object) => {
  wx.showLoading({
    title: '加载中'
  })
  
  return new Promise<any>((resolve, reject)=>{
    wx.request({
      url: baseUrl + uri,
      method: 'POST',
      data,
      success: (res)=>{
        if(res.statusCode === 401) {
          removeToken()
          const currentPages = getCurrentPages()
          const currentRoute = currentPages[currentPages.length - 1].route
          if (currentRoute !== 'pages/login/index') {
            wx.navigateTo({
              url: `/pages/login/index`
            })
          }
          wx.showToast({
            title: '用户未登录',
            icon: 'error'
          })
        }

        _handleToken(res.header)

        resolve(res.data)
      },
      fail: reject,
      complete: ()=>{
        wx.hideLoading()
      }
    })
  })
}


const _handleToken = (header: any) => {
  const token = header['Authorization'] || null
  if (token && getToken() !== token) {
    setToken(token)

    wx.navigateBack()

  }
}