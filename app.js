//app.js
App({
  count: 0,
  addnum: [],
  addelement(id){
    console.log(id);
    const numlength=this.addnum.filter(item=>id===item.id).length;
    console.log(numlength);

    if (numlength) {
      
      const newcart = this.addnum.map(item => {
        if (item.id === id) {
          return {
            id,
            count: item.count + 1
          }
        } else {
          return item;
        }
      })
      this.addnum=newcart;
    } else {
      this.addnum.push({
        id,
        count: 1
      })
    }
    wx.setStorage({
      key: "key",
      data: this.addnum
    })
  }
})