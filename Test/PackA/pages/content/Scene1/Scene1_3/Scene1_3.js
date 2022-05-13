// pages/content/Scene1/Scene1_3/Scene1_3.js
const db=wx.cloud.database();
Page({

  /**
   * Page initial data
   */
  data: {
    openid:'',
    gamelog:{},
    showPopupButton: false,
    showChoiceButton: false, 
    hideNextButton: false,
    showPopupText: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '茶歇预订',
        ImageList: [
          '/source/4.jpg',
          '/source/Scene1_3_0.png',
          '/source/Scene1_3_1.png',
          '/source/Scene1_3_2.png',
          '/source/Scene1_3_3.png',
          '/source/Scene1_3_4.png',
          '/source/Scene1_3_5.png',
          '/source/Scene1_3_6.png',
          '/source/Scene1_3_7.png',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
        ],
        content: [
          '茶歇工位是不是有得好东西吃......这个活我喜欢！选择了茶歇预订工作的我心里偷着乐呢，幸好这好位置没有被别的小伙伴抢掉！（主人公内心）——选茶歇可是挺重要的！你想想，舞会傍晚就开始了，持续到大晚上的，美味的茶歇能防止吃货们饿坏咯！（后勤导）——那，那我要怎么找到好吃又划算的茶歇商家呀？（主人公说）——记住，在后勤组，货比三家和脸皮够厚永远是生存诀窍（后勤导）——在后勤导的精妙指点之下，我开启了纠结（和不要脸）的谈茶歇之旅（主人公内心）',
          '手抓饼',
          '寿司卷',
          '抹茶慕斯',
          '泡芙',
          '提拉米苏',
          '鲜虾球',
          '小蛋糕',
          '小汉堡',
          '当然咯，光看着馋可不是干活的好态度，实际上茶歇牵涉到的问题是需要慎重考虑的，除了价格......——货比三家后，我选出了最满意的一个茶歇供应商，要签订茶歇合同了！签合同可是严肃的事情，我要为此列一个checklist来确保合同上的信息准确无误（主人公内心）',
          '哪些选项是审核茶歇合同的必check点呢？\n价格数额（那还用说）\n食品质量和份数\n是否配备服务人员在现场处理食品\n供应商食品安全相关执照\n我喜欢的泡芙是什么风味的\n',
          '供应的时间地点\n是否配套餐具、垃圾桶、开水壶等配件\n是否对场地有供水供电要求\n责任明细',
          '经历了反复周旋压价和细致的核对，这家茶歇就愉快地定下来啦！茶歇工作相比其他三项有趣味很多，也是提升舞会参与者体验的重要元素！——收到供应商微信发来的电子合同，我已经在想象着舞会当天大家排队抢茶歇的盛况咯！（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '哇好诱人，喜欢吃哪样？啊不......都想吃！那哪样是我能抢到的qwq...?',
      options: [
        { id: 0, title: '手抓饼', text: '祝你能吃到！' },
        { id: 1, title: '寿司卷', text: '祝你能吃到！' },
        { id: 2, title: '抹茶慕斯', text: '祝你能吃到！' },
        { id: 3, title: '泡芙', text: '祝你能吃到！' },
        { id: 4, title: '提拉米苏', text: '祝你能吃到！' },
        { id: 5, title: '鲜虾球', text: '祝你能吃到！' },
        { id: 6, title: '小蛋糕', text: '祝你能吃到！' },
        { id: 7, title: '小汉堡', text: '祝你能吃到！' },
      ],
      showTextNum: 0,
    },
    progress: {
      cur: 0,
      tot: 1,
      num: 0.0
    },
    current: {
      Str: '',
      ID: { Now: 0, Cap: 0 },
      Par: { Now: 0, Cap: 12 }, 
      Cnt: 0
    },
  },

nextScene(){
  this.setData({
    showChoiceButton: true
  });
},

backScene(){
  var gamelog=this.data.gamelog
  gamelog.Arttack.rearServiceGroup.teabreak=true
  db.collection("GameLog").where({_openid:this.data.openid}).update({
    data: {
     gamelog:gamelog
    },
    success:res=>{
      console.log(res.data)
      this.setData({ showBackButton: false });
    }
  })
},

onPrintWordbyWord(){
  this.setData({
    'current.Str': '',
    hideNextButton: true
  })
  if (this.data.current.Par.Now<=this.data.current.Par.Cap){
    const Handler=setInterval(()=>{
      const tmpID=this.data.current.ID.Now;
      var tmpPar=this.data.current.Par.Now,tmpCnt=this.data.current.Cnt;
      var tmpChar=this.data.article[tmpID].content[tmpPar][tmpCnt];
      this.setData({
        'current.Str': this.data.current.Str+tmpChar,
        'current.Cnt': tmpCnt+1,
        'progress.cur': this.data.progress.cur+1,
        'progress.num': (this.data.progress.cur/this.data.progress.tot).toFixed(2)*100
      });
      tmpCnt=tmpCnt+1;
      if (tmpCnt>=this.data.article[tmpID].content[tmpPar].length){
        clearInterval(Handler);
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=8){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        } 
        else if (this.data.current.Par.Now==8) {
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1]
          });
          this.nextScene();
        }
        else if (tmpID<this.data.current.ID.Cap){
          this.setData({
            'current.ID.Now': tmpID+1,
            'current.Cnt': 0,
            'current.Par': { Now: 0, Cap: this.data.article[tmpID+1].content.length-1 },
            hideNextButton: false
          })
        }
        else this.backScene();
      }
      tmpChar=this.data.article[tmpID].content[tmpPar][tmpCnt];
      if (tmpChar=='—'){
        clearInterval(Handler);
        this.setData({
          'current.Cnt': tmpCnt+2,
          hideNextButton: false
        });
      }
    },60);
  }
  return;
},

onShowText(e){
  this.setData({ 
    showPopupText: true,
    'pop.showTextNum': e.target.dataset.index
  })
},

onPopupTextClose(){
  this.setData({ 
    showPopupText: false,
    showPopupButton: false,
    showChoiceButton: false
  });
  this.onPrintWordbyWord();
},

showPopup() {
  this.setData({ showPopupButton: true });
},

onPopupClose() {
  this.setData({ showPopupButton: false });
},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.setData({
      hideNextButton:true
    })
    wx.cloud.callFunction({   name: 'getOpenid',   complete: res => {    console.log("云函数获得的openid：",res.result.openId); var openid=res.result.openId;
    this.setData({
      openid:openid
    })
    db.collection("GameLog").where({_openid:openid}).get({
      success:res=>{
        this.setData({
          gamelog: res.data[0].gamelog
        })
        this.onPrintWordbyWord();
        var len=0;
        for (var i=0;i<this.data.article[0].content.length;i++){
        len+=this.data.article[0].content[i].length;
        }
         this.setData({
         'progress.tot': len
         })
      }
    })
  }})
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})