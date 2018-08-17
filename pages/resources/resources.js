// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    elecount:[],
    tt:0,
    lett:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取数据
    
    var that=this;
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/25223/api/v1/list/',
      success: function (res) {

        console.log(res.data.data);

        var ig=res.data.data.length;
        
        wx.getStorage({
          key: 'key',
          success: (res)=> {
            console.log(res.data)
            
            for (var i = 0; i < res.data.length; i++) {
              that.data.tt += res.data[i].count;
            }
            console.log(that.data.tt);


            for (var i = 0; i < ig; i++) {
              that.data.elecount[i] = parseInt(Math.random(100) * that.data.tt);
            }

            that.setData({
              elecount: that.data.elecount
            })

            console.log(that.data.elecount);
           
           


          }
        })
        
       
        that.setData({
          list: res.data.data
        })

      }
    })
   
    for (var i = 0; i < that.data.elecount.length;i++){
      console.log(that.data.elecount[i]);
    }

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