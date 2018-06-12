//home.js
Page({
  data: {
    isEdit: true,
    isChooseAll: true,
    priceTotal: '0.00',
    proList: {}
  },
  onLoad: function (options) {
      var _this = this;       
      wx.getStorage({
        key: 'cartTotal',
        success: function (res) {
          let oData = res.data;
          for(let i=0;i<oData.length;i++) {
            oData[i].isChoose = true;
          }
          // console.log(oData)
          _this.setData({
            proList: oData
          });
          _this.chooseFn();
        }
      })  
  },
  //返回商品详情页
  gotoProdetail1: function(ev){
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
  //编辑;
  edit: function () {  
    let _this = this;
    let len = this.data.proList.length;
    
    if (this.data.isEdit) {
      //由编辑->完成
      for (let i = 0; i < len; i++) {
        this.data.proList[i].isChoose = false;
      }
      this.setData({
        isEdit: !_this.data.isEdit,
        isChooseAll: false,
        proList: _this.data.proList
      })     

    } else {
      //由完成->编辑
      for (let i = 0; i < len; i++) {
        this.data.proList[i].isChoose = true;
      }
      this.setData({
        isEdit: !_this.data.isEdit,
        isChooseAll: true,
        proList: _this.data.proList
      })      
    }
    this.chooseFn();
    
    
  },
  //去结算-删除；
  gotoAccount: function () {
    if(this.data.isEdit) {
      //去结算；
      console.log('去结算');
      
    } else {
      //删除;
      console.log('删除');

      let len = this.data.proList.length;
      console.log(this.data.proList);
      for (let i = len-1; i >=0; i--) {
        if (this.data.proList[i].isChoose == true) {
          this.data.proList.splice(i,1);

        }
      }
      wx.setStorageSync('cartTotal', this.data.proList)
      this.setData({
        proList: this.data.proList
      })
      
    }
  },
  //选择公用函数；--> 处理单选-多选切换以及同时的数据处理;
  chooseFn: function() {   
    let len = this.data.proList.length;    
    let isChooseAll = true;
    let total = 0;

    for(let i=0;i<len;i++) {
      if(this.data.proList[i].isChoose == false) {
        isChooseAll = false;        
      } else {
        total += this.data.proList[i].proPrice * this.data.proList[i].proBuyNumber;        
      }      
    }
   
    this.setData({
      isChooseAll: isChooseAll,
      priceTotal: parseFloat(''+total).toFixed(2)
    })
  },

  //全选;
  chooseAll: function () {
    let len = this.data.proList.length;
    let isCooseAll = this.data.isChooseAll;    

    if ( !isCooseAll ) {      
      for (let i = 0; i < len; i++) {
        this.data.proList[i].isChoose = true;
      }      

    } else {      
      for (let i = 0; i < len; i++) {
        this.data.proList[i].isChoose = false;
      }      
    }

    this.data.isChooseAll = !isCooseAll;
    this.setData({
      isChooseAll: this.data.isChooseAll,
      proList: this.data.proList
    })    
    this.chooseFn();
  },
  //单选；
  proIconTap: function(ev) {
    let ind = ev.currentTarget.dataset.ind;
    let bool = this.data.proList[ind].isChoose;
    this.data.proList[ind].isChoose = !bool;   

    this.setData({
      proList: this.data.proList
    })
    this.chooseFn();
  },
  //购买数量++
  proNumberPlus: function (ev) {
    let ind = ev.currentTarget.dataset.ind;
    let i = this.data.proList[ind].proBuyNumber;
    if (i < 10) {
      this.data.proList[ind].proBuyNumber++;
    }

    this.setData({
      proList: this.data.proList
    })
    this.chooseFn();
  },
  //购买数量--
  proNumberMinus: function (ev) {
    let ind = ev.currentTarget.dataset.ind;
    let i = this.data.proList[ind].proBuyNumber;
    if (i > 1) {
      this.data.proList[ind].proBuyNumber--;
    }
    this.setData({
      proList: this.data.proList
    })
    this.chooseFn();
  },
})
