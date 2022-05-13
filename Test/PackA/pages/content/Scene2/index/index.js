// pages/content/Scene1/index/index.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigateUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callFunction({   name: 'getOpenid',   complete: res => {    console.log("云函数获得的openid：",res.result.openId); var openid=res.result.openId;
    db.collection("GameLog").where({_openid:openid}).get({
      success:res=>{
        console.log(res.data[0].gamelog)
        this.setData({
          navigateUrl:'../../../../../PackB/pages/index/index?gamelog='+JSON.stringify(res.data[0].gamelog)
        })
        console.log(this.data.navigateUrl)
      }
    })
  }})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})