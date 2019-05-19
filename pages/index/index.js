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
})
