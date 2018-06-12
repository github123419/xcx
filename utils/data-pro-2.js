//所有数据；
function myData() {
  var data = {
    "list": [
      {
        "proId": "002-001",
        "proImgUrl": "/images/pro/pro-2/1/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-2/1/banner-1.jpg",
          "/images/pro/pro-2/1/banner-2.jpg",
          "/images/pro/pro-2/1/banner-3.jpg"
        ],
        "proName": "键盘-1",
        "proPrice": 56,
        "proBuyNumber": 1,
        "proColor": [
          {
            "name": "白色",
            "isActive": true
          },
          {
            "name": "褐色",
            "isActive": false
          },
          {
            "name": "黑色",
            "isActive": false
          }
        ],
        "proSize": [
          {
            "name": "正常",
            "isActive": true
          },
          {
            "name": "迷你",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      },
      {
        "proId": "002-002",
        "proImgUrl": "/images/pro/pro-2/2/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-2/2/banner-1.jpg",
          "/images/pro/pro-2/2/banner-2.jpg",
          "/images/pro/pro-2/2/banner-3.jpg"
        ],
        "proName": "键盘-2",
        "proPrice": 60,
        "proBuyNumber": 1,
        "proColor": [
          {
            "name": "白色",
            "isActive": true
          },
          {
            "name": "褐色",
            "isActive": false
          },
          {
            "name": "黑色",
            "isActive": false
          }
        ],
        "proSize": [
          {
            "name": "正常",
            "isActive": true
          },
          {
            "name": "迷你",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      },
      {
        "proId": "002-003",
        "proImgUrl": "/images/pro/pro-2/3/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-2/3/banner-1.jpg",
          "/images/pro/pro-2/3/banner-2.jpg",
          "/images/pro/pro-2/3/banner-3.jpg"
        ],
        "proName": "键盘-3",
        "proPrice": 66,
        "proBuyNumber": 1,
        "proColor": [
          {
            "name": "白色",
            "isActive": true
          },
          {
            "name": "褐色",
            "isActive": false
          },
          {
            "name": "黑色",
            "isActive": false
          }
        ],
        "proSize": [
          {
            "name": "正常",
            "isActive": true
          },
          {
            "name": "迷你",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      }
    ]
  }

  return data;
}
//单条数据；
var my_data = myData()
function searchmydata(id) {
  var result;
  for (let i = 0; i < my_data.list.length; i++) {
    if (my_data.list[i].proId == id) {
      result = my_data.list[i];
    }
  }
  return result || {};
}

//导出；
module.exports = {
  myData: myData,
  searchmydata: searchmydata
}