import { getToken } from "./utils/auth";

// app.ts
App({
  globalData: {},
  _isLoginPage() {
    const currentPages = getCurrentPages()
    console.log(currentPages)
    return false;
  },
  onShow() {
  
    if (!getToken()) {
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }
  },
})