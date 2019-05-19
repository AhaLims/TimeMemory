const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getLoc() {
  var canGetLoc = false;//这里是用来后面返回参数的
  var latitude = 0
  var longitude = 0
  wx.getLocation({
    type: 'wgs84',
    success(res) {
      latitude = res.latitude
      longitude = res.longitude
      //const latitude = res.latitude
      //const longitude = res.longitude
      // const speed = res.speed
      // const accuracy = res.accuracy
      console.log('当前位置为', res)
      canGetLoc = true
      return { canGetLoc, latitude, longitude };
    },
    fail(res) {
      //const latitude = 0
      //const longitude = 0 //emmmm这么写有问题吧
      console.log('当前无法定位')//后面再改
      return { canGetLoc, latitude, longitude };//如果没办法定位....怎么知道出bug了....?
    },
  })

}

module.exports = {
  formatTime: formatTime,
  getLoc : getLoc
}
