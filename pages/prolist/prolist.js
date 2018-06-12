// pages/prolist/prolist.js
Page({
  data: {
    proList1: []
  },
  onLoad: function (options) {
    console.log(options)
    if (options.pro){      
      let myData = require('../../utils/data-' + options.pro +'.js')
      let _this = this;
      this.data.proList1 = myData.myData().list;
      this.setData({        
        proList1: _this.data.proList1
      })
      console.log(this.data.proList1)
    }
    
  },
  gotoProdetail1: function (ev) {
    let proid = ev.currentTarget.dataset.proid;
    let proN = proid.split('-')[0];
    let pro = 'pro-1';
    switch (proN) {
      case '001':
        pro = 'pro-1';
        break;
      case '002':
        pro = 'pro-2';
        break;
      case '003':
        pro = 'pro-3';
        break;
      default:
        pro = 'pro-1';
    }
    wx.navigateTo({
      url: '/pages/prodetail/prodetail?pro=' + pro + '&proid=' + proid
    })
  },
  selectFn: function () {
    console.log('你点击了筛选按钮！');
  },
  getMore: function(){
    console.log('你点击了获取更多！');
  }
})