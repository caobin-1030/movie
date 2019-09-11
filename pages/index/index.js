import send from '../../send/send.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getmore: true,
    region: ["0", "银川市", "0"],
    getmeg: [],
    pageadd: 0,
    pagecount: 10,
    allcount: ''
  },
  navto(e) {
    let _id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "../movie/one?id="+_id
    })
  },

  change1(e) {
    this.setData({
      region: e.detail.value,
      pageadd: 0,
      pagecount: 10
    })
    this.getmessage()
  },
  getmessage() {
    let st = this.data.region[1]
    let _st = st.substring(0, 2)
    // console.log(_st)
    send({
      url: 'in_theaters?',
      data: {
        city: _st,
        count: this.data.pagecount,
        start: this.data.pageadd
      }
    }).then(res => {
      // console.log(res.data)
      this.setData({
        getmeg: res.data.subjects,
        allcount: res.data.total
      })

    })
  },
  onReachBottom: function() {
    this.setData({
      getmore: true
    })
    if (this.data.pagecount < this.data.allcount) {
      this.setData({
        pageadd: this.data.pageadd++,
        pagecount: this.data.pagecount += 10
      })
      this.getmessage()
    } else {
      this.setData({
        getmore: false
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getmessage()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})