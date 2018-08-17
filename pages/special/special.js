var app = getApp()
console.log(app);
Page({
  data: {
    classname:'nav',
    classname2: 'changname2',
    list: [],
    add:[12,34,5,8]
  },

 
  onLoad: function () {

   this.changname();

    wx.getStorage({
      key: 'key',
      success: function (res) {
        let tt = 0; 
        for(var i=0; i<res.data.length;i++){
          tt+=res.data[i].count;
        }
        const gg = tt.toString();
        wx.setTabBarBadge({
          index: 2,
          text: gg
        })
      }
    })
   
  },

  changname(){
    var that=this;
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/25223/api/v1/list/',
      success: function(res){
        that.setData({
          classname: 'nav',
          classname2: 'changname2',
          list:res.data.data
        })
      }
    })
  },
  changname2(){
    var that = this;
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/25223/api/v1/list/',
      success: function (res) {
        that.setData({
          classname2: 'nav',
          classname: 'changname',
          list: res.data.data
        })
      }
    })
  },
  // 滑动触底事件
  onReachBottom: function () {
    wx.showToast({
      title: '没有更多数据了！',
      icon: 'success',
      duration: 2000
    })
  },

  addspecial(e){
    console.log(e);
    let id=e.currentTarget.id;
        app.addelement(id);

    wx.getStorage({
      key: 'key',
      success: function (res) {
        let tt = 0;
        for (var i = 0; i < res.data.length; i++) {
          tt += res.data[i].count;
        }
        const gg = tt.toString();
        wx.setTabBarBadge({
          index: 2,
          text: gg
        })
      }
    })
    
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })

  }
})
