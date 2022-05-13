// index.js
// 获取应用实例
const app = getApp()
const db=wx.cloud.database();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({   name: 'getOpenid',   complete: res => {    console.log("云函数获得的openid：",res.result.openId); var openid=res.result.openId;
    db.collection("GameLog").where({_openid:openid}).get({
      success:res=>{
        console.log(res.data.length)
        if(res.data.length==0)
        {
          db.collection("GameLog").add({
            data:{
              gamelog:{
                Arttack:{ // 文艺部存档
                  rearServiceGroup:{ // 后勤组
                    arrival:false, // 乍至
                    hideLevel:false, // 隐藏关卡
                    state:false, // 后勤组是否通关
                    fund:false, // 资金筹备
                    place:false, // 场地定档
                    teabreak:false, // 茶歇预定
                    spendRent:false // 采购租借
                  },
                  advocacyGroup:{ // 宣传组
                    arrival:false, // 乍至
                    state:false, // 宣传组是否通关
                    notification:false, // 推送制作
                    logoPoster:false, // logo和海报设计
                    mvFilming:false, // MV拍摄
                    propagandaItem:false // 实体宣传品设计
                  },
                  programGroup:{ // 节目组
                    arrival:false, // 乍至
                    state:false, // 节目组是否通关
                    dance:false, // 舞蹈教学
                    dresscode:false, // dresscode拍摄
                    partner:false, // 舞伴匹配
                    programs:false // 现场节目
                  }
                }
              }
            }
          })
        }
      }
    })




  }})}
})
