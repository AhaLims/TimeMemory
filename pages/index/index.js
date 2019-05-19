//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    button1Src : "../../imgs/index-button.png",
    button2Src: "../../imgs/index-capsule-jar.png" ,
    longitude: 0, // 经度
    latitude: 0, //纬度
    markers: [],

  },
  onLoad:function(option){
  },
  onShow: function () {
    let that = this;
    // 获取定位，并把位置标示出来
    app.getLocationInfo(function (locationInfo) {
      that.setData({
        markers: [],
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude
      });
      //app.showLoading('正在加载');
      let data = {
        'gisX': that.data.longitude,
        'gisY': that.data.latitude
      };
      //that.loadData(data); // 加载周边设备信息
    }),
      // 动态设置map的宽和高
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            //map_width: res.windowWidth,
            //map_height: res.windowHeight - 44,
            controls: [{
              id: 0,
              iconPath: '../../imgs/index-position.png',
              position: {
                left: res.windowWidth * 0.5 - 80,
                top: res.windowHeight * 0.65,
                width: 161,
                height: 161
              },
              clickable: true
            }]
          })
        }
      });
  },


 

})

