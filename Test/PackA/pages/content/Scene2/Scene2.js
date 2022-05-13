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
          'Hi小舞，你来宣传组帮忙了呀！哈哈哈哈，肝到秃宣组欢迎你！（宣传导）——刚刚进入宣传组就见到了可爱的宣导，和在微信聊天框研究骰子的宣组小伙伴们，骰子在宣组有什么神秘的作用吗？（主人公内心）——halo，我...我需要...需要做些什么嘛？（主人公说话）——只见宣导邪魅一笑，一声号令之下，全组伙伴齐齐点下微信的骰子，随后，在一片欢呼雀跃下，大家的目光齐齐投向了我。qwq我还什么都不知道呢怎么能这么对待我呢，所以宣组到底要干什么啊？（主人公内心）——宣组要干的活就是制作宣传品嘛。舞会的宣传周期长，活动受众广，又作为文艺部招牌活动，需要高质量推出多种宣品，wkld一向是不小的！所以我们要合理分工——用骰子比大小来分锅可是文艺部宣组的传统，这回大家都是六点，看来这回是你点数最小了，嘿嘿嘿...所以，小舞你先选锅吧！（宣传导）' 
        ]
      },
    ],
    pop: {
      title: '看看先做些啥吧',
      options: [
        { id: 0, text: '六次推送制作', url: '/PackA/pages/content/Scene2/Scene2_1/Scene2_1' },
        { id: 1, text: 'logo和海报设计', url: '/PackA/pages/content/Scene2/Scene2_2/Scene2_2' },
        { id: 2, text: 'MV拍摄', url: '/PackA/pages/content/Scene2/Scene2_3/Scene2_3' },
        { id: 3, text: '实体宣传品设计', url: '/PackA/pages/content/Scene2/Scene2_4/Scene2_4' }
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