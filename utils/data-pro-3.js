//所有数据；
function myData() {
  var data = {
    "list":[
      {
        "proId": "003-001",
        "proImgUrl": "/images/pro/pro-3/1/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-3/1/banner-1.jpg",
          "/images/pro/pro-3/1/banner-2.jpg",
          "/images/pro/pro-3/1/banner-3.jpg"
        ],
        "proName": "鼠标-1",
        "proPrice": 100,
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
            "name": "无线",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      },
      {
        "proId": "003-002",
        "proImgUrl": "/images/pro/pro-3/2/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-3/2/banner-1.jpg",
          "/images/pro/pro-3/2/banner-2.jpg",
          "/images/pro/pro-3/2/banner-3.jpg"
        ],
        "proName": "鼠标-2",
        "proPrice": 120,
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
            "name": "无线",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      },
      {
        "proId": "003-003",
        "proImgUrl": "/images/pro/pro-3/3/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-3/3/banner-1.jpg",
          "/images/pro/pro-3/3/banner-2.jpg",
          "/images/pro/pro-3/3/banner-3.jpg"
        ],
        "proName": "鼠标-3",
        "proPrice": 150,
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
            "name": "无线",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      }
      ,
      {
        "proId": "003-004",
        "proImgUrl": "/images/pro/pro-3/4/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-3/4/banner-1.jpg",
          "/images/pro/pro-3/4/banner-2.jpg",
          "/images/pro/pro-3/4/banner-3.jpg"
        ],
        "proName": "鼠标-4",
        "proPrice": 180,
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
            "name": "无线",
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