//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    button1Src : "../../imgs/index-button.png",
    button2Src: "../../imgs/index-capsule-jar.png" 
  },
  onLoad:function(option){
    var that = this;
    that.setData(
      {
        longitude: 113,
        latitude: 23,
        makers:[ 
          {
            id : 0,
            iconPath: "../../imgs/index-capsule-icon-map.png",
            //其他人的capsule信息 这里先随便填...????
            longitude: 114,
            latitude: 23,
            width: 30,
            height: 30
          }
        ]//等会要换成获取到的用户的位置
      }
    )
  }
})
