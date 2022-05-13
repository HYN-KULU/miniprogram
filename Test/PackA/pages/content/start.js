// pages/content/content.js
Page({

  /**
   * Page initial data
   */
  data: {
    showPopupButton: false,
    showChoiceButton: false, 
    hideNextButton: false,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '引子',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg'
        ],
        content: [
          '我叫小舞， 是一位大一文艺部成员——马上就要到文艺部传统的冬季舞会了，今年策划舞会的重担也终于从学长学姐身上落到了我们的肩头——几乎没有策划经历的我面对即将到来的任务属实紧张，不知道会有什么样的挑战，而自己的能力是否又真的足以应对——但激动的心情也同样难以抑制，大学生活本不该就只有纯粹的学业，此般新奇的挑战本就应该是“玫瑰色”的大学生活该拥有的事物吧......',
          '“我们今天的例会就到这里，各位可以仔细地思考一下，根据自己的兴趣爱好来加入到不同活动组中吧！”（部长画外音）——呜......总算结束了，没想到只是一个活动前的部门大会就如此高强度，确定好了整体的分组明细，明确了每个活动组的具体分工，甚至大家都有了点自己的想法，看来我也要努力了！——让我来看看今天的会议记录，唔分组情况是后勤组、宣传组、节目组，职责明细......——后勤组要负责准备活动需要的各类资源，这大概是需要与其他人沟通的任务吧，虽然天天都特别喜欢和同学们吹水，但真正意义上的“沟通”经历还真的没有过呢——宣传组是各类美工项目吧，我倒是喜欢画画不过那也就只是涂鸦罢了，再加之推送、MV更是之前完全没有碰过的东西呢——节目组的话负责拍摄教学视频吧，还有领舞团、线下舞培、现场节目等等，哦还要负责舞伴匹配机制的设计！！哇这......我的水平真的可以胜任嘛——这么看起来其实导演组也确实不容易啊唉，而我呢，也不知道我到底能胜任哪个活动组的任务，不多想啦，按照内心兴趣做出选择吧！！' 
        ]
      },
    ],
    pop: {
      title: '按照内心兴趣做出选择吧',
      options: [
        { id: 0, text: '加入后勤组吧！', url: '/PackA/pages/content/Scene1/Scene1' },
        { id: 1, text: '投奔宣传组吧！', url: '/PackA/pages/content/Scene2/Scene2' },
        { id: 2, text: '那就去节目组吧！', url: '/PackA/pages/content/Scene3/Scene3' } 
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
      Par: { Now: 0, Cap: 1 }, 
      Cnt: 0
    },
  },

nextScene(){
  this.setData({
    showChoiceButton: true
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
    this.onPrintWordbyWord();
    var len=0;
    for (var i=0;i<this.data.article[0].content.length;i++){
      len+=this.data.article[0].content[i].length;
    }
    this.setData({
      'progress.tot': len
    })
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