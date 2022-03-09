// components/navigator/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: 0,
    height: 0,
    back: false
  },

  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached() {
      this.calculateTopAndHeight();
      this.handlePageStack();
    }
  },
  methods: {
    handlePageStack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        this.setData({
          back: true
        })
      }
    },
    calculateTopAndHeight() {
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect()    
    this.setData({
      top: menuButtonInfo.top,
      height: menuButtonInfo.height,
    })
    },
    goBack() {
      wx.navigateBack()
    }
  }
})
