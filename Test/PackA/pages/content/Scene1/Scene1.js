// pages/content/Scene1/Scene1.js
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
    backgroundImage: '/source/3.jpg',
    article: [
      {
        id: 0, name: '乍至',
        ImageList: [
          '/source/3.jpg'
        ],
        content: [
          'Hi小舞，你来后勤组帮忙了呀！（后勤导）——这可太好了！后勤组人手可是最缺的了！（后勤导）——刚刚来到后勤组的我就听到了后勤导热情的呼唤（主人公内心）——嘿后勤导！我....（主人公说话）——打完招呼的我一时语塞，紧张的情绪涌上心头（主人公内心）——我...我需要...需要做些什么嘛？（主人公说话）——我低着头，这是第一次策划活动啊！怎么想都会无从下手吧，是这样的对吧（主人公内心）——哈哈哈哈没必要那么紧张的（后勤导）——我感受到后勤导的手在我的肩膀上重重地锤了两下——既然能进入后勤组，一定要对自己有自信呀！在后勤组生存，最需要的就是脸皮呀嘿嘿，不然你怎么argue......（后勤导）——或许自信这个东西本来就是会感染的吧，副导的自信笑容也多少借由他的拳头传递到我的心中——好啦！——来看看后勤组的任务清单，看看先做些啥吧！' 
        ]
      },
    ],
    pop: {
      title: '看看先做些啥吧',
      options: [
        { id: 0, text: '资金筹备', url: '/PackA/pages/content/Scene1/Scene1_1/Scene1_1' },
        { id: 1, text: '场地定档', url: '/PackA/pages/content/Scene1/Scene1_2/Scene1_2' },
        { id: 2, text: '茶歇预定', url: '/PackA/pages/content/Scene1/Scene1_3/Scene1_3' },
        { id: 3, text: '采购租借', url: '/PackA/pages/content/Scene1/Scene1_4/Scene1_4' }
      ]
    },
    progress: {
      cur: 0,
      tot: 1,
      num: 0.0
    },
    current: {
      Str: '',
      ID: { Now: 0, Cap: 0 },
      Par: { Now: 0, Cap: 0 }, 
      Cnt: 0
    },
  },

nextScene(){ // 乍至
  var gamelog=this.data.gamelog
  console.log(gamelog)
  console.log(this.data.gamelog.Arttack.rearServiceGroup.arrival)
  gamelog.Arttack.rearServiceGroup.arrival=true
  db.collection("GameLog").where({_openid:this.data.openid}).update({
    data: {
     gamelog:gamelog
    },
    success:res=>{
      console.log(res.data)
      this.setData({
        showChoiceButton: true
      })
      console.log(this.data.showChoiceButton)
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        }
        else if (tmpID<this.data.current.ID.Cap){
          this.setData({
            'current.ID.Now': tmpID+1,
            'current.Cnt': 0,
            'current.Par': { Now: 0, Cap: this.data.article[tmpID+1].content.length-1 },
            hideNextButton: false
          })
        }
        else this.nextScene();
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