// pages/sousuo/sousuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    wx.getLocation({
      type: 'gcj02',
      altitude:true,
      success:(res)=>{
        const { latitude, longitude}=res;
        this.setData({
          markers: [{
            iconPath: "/image/location.png",
            id: 0,
            latitude,
            longitude,
            width: 50,
            height: 50
          }],
          latitude,
          longitude
        })
      }
    })
  },

  markertap(e){
    console.log(e);
    const marker = this.data.markers.filter(marker=>marker.id===e.markerId)
    if(marker){
      wx.openLocation({
        latitude: marker[0].latitude,
        longitude: marker[0].longitude,
        name:'武侯区',
        address:'力宝大厦',
        scale: 28
      })
    }
  },
  callphone(){
    wx.makePhoneCall({
      phoneNumber: '1008611' 
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})