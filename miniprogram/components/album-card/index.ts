// components/album-card/index.ts
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'isolated'
  },
  properties: {
    item: {
      type: Object,
      value: () => {
        return null
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab() {
      wx.navigateTo({
        url: '/pages/playlist/detail?id=11'
      })
    }
  }
})
