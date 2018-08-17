

var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconPath: "../../image/home.png",
    urlnave: ["../../Componets/nave/one", "../../Componets/nave2/two",     "../../Componets/nave3/three", "../../Componets/nave4/four", "../../Componets/nave5/five", "../../Componets/nave6/six", "../../Componets/nave7/seven", "../../Componets/nave8/eight"],
    list:[],
  },
 
 loadelist(){
   var that=this;
  wx.request({
    url: 'http://rap2api.taobao.org/app/mock/25223/api/v1/xiaochengxu/',
    success: function(res) {
      var ele=res.data.data;
   
      for(var i=0;i<ele.length;i++){
        ele[i]['urlnave'] = that.data.urlnave[i]
      }
     
      that.setData({
        list: ele
      })
    }
  });
 }, 
 
  onLoad: function () {
    this.loadelist();
  },
  
})