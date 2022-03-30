import artist from "../../api/artist"
import playlist from "../../api/playlist"

// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendedPlaylists: [],
    recommendedAritsts: [],
    specialPlaylists: [],
    ablums: [],
    musicList: [
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'},
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'},
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'},
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.loadRecommendedPlaylists()
    this.loadRecommendedAritsts()
    this.loadSpecialPlaylists()
  },
  gotoPlaylist(e) {
    const {id} = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/playlist/detail?id=${id}`
    })
  },
  loadRecommendedPlaylists() {
    const searchFilter = {
      recommended: true
    }
    playlist.search(searchFilter).then(res=>{
      this.setData({
        recommendedPlaylists: res.content
      })
    })
  },
  loadRecommendedAritsts() {
    const searchFilter = {
      recommended: true,
      sortBy: 'recommendFactor'
    }

    artist.search(searchFilter).then(res=>{
      this.setData({
        recommendedAritsts: res.content
      })
    })
  },

  loadSpecialPlaylists() {
    const searchFilter = {
      special: true
    }
    playlist.search(searchFilter).then(res=>{
      this.setData({
        specialPlaylists: res.content
      })
    })

  }




  
})