// pages/prodetail/prodetail.js
Page({  
  data: {    
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    
    hidePopupBool: true, //是否隐藏popup；    
    proInfo: {},    //产品信息；
    cartTotal: [],   //加入购物车信息；
    cartLen: 0
  },
  onLoad: function (options) {
    let _this = this;
    // 获取单个产品信息；
    if (options.pro&&options.proid) {
      let myData = require('../../utils/data-' + options.pro + '.js')
      
      this.data.proInfo = myData.searchmydata(options.proid);
      this.setData({
        proInfo: _this.data.proInfo
      })
      // console.log(this.data.proInfo)
    }
    //获取购物车信息；
    wx.getStorage({
      key: 'cartTotal',
      success: function (res) {        
        let carTotal = res.data;        
        _this.setData({
          carTotal: carTotal,
          cartLen: carTotal.length
        })
        console.log(_this.data.carTotal.length)
      }
    })  
  },
  //去‘购物车’页面
  gotoCart: function () {
    wx.reLaunch({
      url: "/pages/cart/cart"
    });
  },
  //点击'加入购物车'
  addCart: function (ev) {    
    if (ev.currentTarget.dataset.flag == 'out') {
      this.showPopup();

    } else if (ev.currentTarget.dataset.flag == 'in') {
       this.data.cartTotal.push(this.data.proInfo);
       try {
         wx.setStorageSync('cartTotal', this.data.cartTotal)
         
         this.setData({
           cartTotal: this.data.cartTotal,
           cartLen: this.data.cartTotal.length,
           hidePopupBool: true
         })
         console.log(this.data.cartTotal)
         wx.showToast({
           title: '加入购物车成功！',
           icon: 'success',
           duration: 2000
         })

       } catch (e) {         
         wx.showToast({
           title: '加入购物车失败，请重新加入！',
           icon: 'warn',
           duration: 2000
         })
       }
       
    }
  },
  //点击‘立即购买’
  buyCart: function (ev) {
    console.log('立即购买');
    console.log(this.data.carTotal.length)
  },
  //显示popup；
  showPopup: function () {
    this.setData({
      hidePopupBool: false
    })
  },
  //隐藏popup；
  hidePopup: function () {
    this.setData({
      hidePopupBool: true
    })
  },
  //产品颜色选择
  proColorChoose: function(ev){
    let _this = this;
    let _len = _this.data.proInfo.proColor.length;
    for(let i=0;i<_len;i++) {
      if (_this.data.proInfo.proColor[i].name == ev.currentTarget.dataset.name) {
        _this.data.proInfo.proColor[i].isActive = true;
      } else {
        _this.data.proInfo.proColor[i].isActive = false;
      }
    }
   
    this.setData({
      proInfo: _this.data.proInfo
    })
  },
  //产品规格选择
  proSizeChoose: function (ev) {
    let _this = this;
    let _len = _this.data.proInfo.proSize.length;
    for (let i = 0; i < _len; i++) {
      if (_this.data.proInfo.proSize[i].name == ev.currentTarget.dataset.name) {
        _this.data.proInfo.proSize[i].isActive = true;
      } else {
        _this.data.proInfo.proSize[i].isActive = false;
      }
    }

    this.setData({
      proInfo: _this.data.proInfo
    })
  },
  //购买数量++
  buyNumberPlus: function () {
    let i = this.data.proInfo.proBuyNumber;
    if (i < 10) { 
      this.data.proInfo.proBuyNumber ++;
    }

    this.setData({
      proInfo: this.data.proInfo
    })
  },
  //购买数量--
  buyNumberMinus: function () {

    let i = this.data.proInfo.proBuyNumber;
    if(i>1){ 
      this.data.proInfo.proBuyNumber--;
    }
    this.setData({
      proInfo: this.data.proInfo
    })
  },
 
})