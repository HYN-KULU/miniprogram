// pages/content/Scene3/Scene3.js
// pages/content/Scene2/Scene2.js
Page({

  /**
   * Page initial data
   */
  data: {
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
          'Hi小舞，你来节目组帮忙了呀！（节目导）——嘿嘿，悄悄对你说，节目组全称就是：专找帅哥美女aka节目组！（节目导）——哇，帅哥美女！这是我喜欢的！看来这下没来错地方！我心中一阵狂喜（主人公内心）——可是......帅哥美女会喜欢我吗......我不由得心中惆怅。但一下子更被扑面而来的迷茫裹挟了，所以节目组到底是要干什么呢？（主人公内心）——哈哈，就知道你还一脸懵！我们要干的活，顾名思义就是找节目呗！节目往哪找，那当然是......帅哥美女！——好啦好啦，说正经话，舞会和一般的文艺晚会不一样，我们最大头的节目当然是集体的舞蹈啦，当然现场的各种形式节目也少不了，所以是wkld和乐趣并存（节目导）——言归正传，小舞，你想先做什么？（节目导）' 
        ]
      },
    ],
    pop: {
      title: '看看先做些啥吧',
      options: [
        { id: 0, text: '舞蹈教学', url: '/PackA/pages/content/Scene3/Scene3_1/Scene3_1' },
        { id: 1, text: 'Dresscode拍摄', url: '/PackA/pages/content/Scene3/Scene3_1/Scene3_2' },
        { id: 2, text: '舞伴匹配', url: '/PackA/pages/content/Scene3/Scene3_1/Scene3_3' },
        { id: 3, text: '现场节目', url: '/PackA/pages/content/Scene3/Scene3_1/Scene3_4' }
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