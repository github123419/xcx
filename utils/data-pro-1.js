//所有数据；
function myData() {
  var data = {
    "list": [
      {
        "proId": "001-001",
        "proImgUrl": "/images/pro/pro-1/1/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-1/1/banner-1.jpg",
          "/images/pro/pro-1/1/banner-2.jpg"
        ],
        "proName": "电脑-1",
        "proPrice": 5600,
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
            "name": "I5",
            "isActive": true
          },
          {
            "name": "I7",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      },
      {
        "proId": "001-002",
        "proImgUrl": "/images/pro/pro-1/2/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-1/2/banner-1.jpg",
          "/images/pro/pro-1/2/banner-2.jpg"
        ],
        "proName": "电脑-2",
        "proPrice": 6000,
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
            "name": "I5",
            "isActive": true
          },
          {
            "name": "I7",
            "isActive": false
          }
        ],
        "proDetail": "此处省略n个字..."
      },
      {
        "proId": "001-003",
        "proImgUrl": "/images/pro/pro-1/3/thumbnail.jpg",
        "proImgBannerUrls": [
          "/images/pro/pro-1/3/banner-1.jpg",
          "/images/pro/pro-1/3/banner-2.jpg"
        ],
        "proName": "电脑-3",
        "proPrice": 6600,
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
            "name": "I5",
            "isActive": true
          },
          {
            "name": "I7",
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