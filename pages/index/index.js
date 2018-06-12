//index.js
var dataPro1 = require('../../utils/data-pro-1.js')
var dataPro2 = require('../../utils/data-pro-2.js')
var dataPro3 = require('../../utils/data-pro-3.js')

Page({
  data: {
    bannerImgObjs: [],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList1: [],//电脑-2个
    proList2: [],//键盘-3个
    proList3: [] //鼠标-4个
  },
  onLoad: function (options) {
   
    let bannerImgObjs = [dataPro1.searchmydata('001-001'), dataPro2.searchmydata('002-001'), dataPro3.searchmydata('003-001')];
    console.log(bannerImgObjs)
      let proList1 = dataPro1.myData().list.slice(0, 2);
      let proList2 = dataPro2.myData().list.slice(0, 3);
      let proList3 = dataPro3.myData().list.slice(0, 4);

      this.setData({
        bannerImgObjs: bannerImgObjs,
        proList1: proList1,
        proList2: proList2,
        proList3: proList3,
      })
   
  },
  gotoProList1: function () {
    wx.navigateTo({
      url: '/pages/prolist/prolist?pro=pro-1'
    })
  },
  gotoProdetail1: function (ev) {    
    wx.navigateTo({
      url: '/pages/prodetail/prodetail?pro=pro-1&proid='+ev.currentTarget.dataset.proid
    })
  },
  gotoProList2: function () {
    wx.navigateTo({
      url: '/pages/prolist/prolist?pro=pro-2'
    })
  },
  gotoProdetail2: function (ev) {
    wx.navigateTo({
      url: '/pages/prodetail/prodetail?pro=pro-2&proid=' + ev.currentTarget.dataset.proid
    })
  },
  gotoProList3: function () {
    wx.navigateTo({
      url: '/pages/prolist/prolist?pro=pro-3'
    })
  },
  gotoProdetail3: function (ev) {
    wx.navigateTo({
      url: '/pages/prodetail/prodetail?pro=pro-3&proid=' + ev.currentTarget.dataset.proid
    })
  },

 
})
