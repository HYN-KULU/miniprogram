// PackA/pages/content/Scene2/Scene2_4/Scene2_4.js
Page({

  /**
   * Page initial data
   */
  data: {
    showPopupButton: [ false, false, false ],
    showChoiceButton: [ false, false, false ], 
    hideNextButton: false,
    showPopupText: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '实体宣传品设计',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/3.jpg',
        ],
        content: [
          '实体宣传品......这和其他任务中的平面设计有什么区别呀？（主人公说）——好问题！实体宣传品的范围就很广啦，你想想，你平时逛街看到的指示牌、霓虹灯、还有手办，这些不都算是，实体的，宣传品吗？——这些实体的宣传品，是为了在现场的各种细节上渗透我们这个活动的审美风格，让大家在发现它们的存在时有惊喜的感觉~这样会更有沉浸感和体验感（宣传导）——哦，我懂......噢不......还是没明白，那我要做的这个，实体宣传品设计，是要设计些啥呀？（主人公内心）——不急不急，这我们一一盘点，再开工哈！',
          '实体宣传品的需求list',
          '这些任务都不轻松呀！那先从灯牌做起吧——我光设计了底稿还不够，还得在后勤伙计们对接灯牌定制商家后，根据他们的灯管可选颜色和实体结构限制来修改底稿......果然，实体宣传品的出品流程就是和平面设计不一样呢！',
          '当然，接下来少不了各种精致的其他宣品出炉......',
          '打造实体宣传品的任务就这样完成咯！“为了在现场的各种细节上渗透我们这个活动的审美风格，让大家在发现它们的存在时有惊喜的感觉~这样会更有沉浸感和体验感”，宣导的话还时时萦绕在我耳边——或许，正是这种对呈现效果反复雕琢的态度，成就了学生会一个又一个精彩的活动吧！（主人公内心）'
        ]
      },
    ],
    pop: [
      { title: '点击发现实体灯效', showTextNum: 0,
        options: [
          { id: 1, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_4/1.png?sign=04b0688f4fecd13dad8bc160db35a9c3&t=1652443146', hide: true },
          { id: 2, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/2.png?sign=2c8162bd316de76cecb3aec381f3186d&t=1652426616', hide: true }
        ]
      },
      { title: '精致的其他宣品', showTextNum: 0,
        options: [
          { id: 1, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_4/2.png?sign=ffa0954b21fbd034042ae339c2bf7087&t=1652442704', hide: true },
          { id: 2, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_4/3.png?sign=88a1560c267ce54efc81fd3c31038c43&t=1652442766', hide: true },
          { id: 3, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_4/4.png?sign=c4618a578803ace103162c36867972f9&t=1652442774', hide: true },
          { id: 4, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_4/5.png?sign=6ae8757b6dd5c4976e046d874b4ac68f&t=1652442797', hide: true },
          { id: 5, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_4/6.png?sign=92c08459b52a6b0102f707c9c9fe9de4&t=1652442806', hide: true },
        ]
      },
      { title: '小舞你想让哪些实体宣传品诞生呢？', showTextNum: 0,
        options: [
          { id: 1, title: 'hold起全场打卡点氛围的霓虹灯牌', choose: true },
          { id: 2, title: '入场发放的便携又精致的纪念品', choose: true },
          { id: 3, title: '大厅外指引入场的易拉宝指示牌', choose: true },
          { id: 4, title: '让工作人员(玩梗)好好干活的标识臂章', choose: true },
        ]
      },
    ],
    progress: {
      cur: 0,
      tot: 1,
      num: 0.0
    },
    current: {
      Str: '',
      ID: { Now: 0, Cap: 0 },
      Par: { Now: 0, Cap: 4 }, 
      Cnt: 0
    },
  },

nextScene(id){
  let tmp='showChoiceButton['+id+']';
  this.setData({
    [tmp]: true
  });
},

backScene(){
  this.setData({ showBackButton: false });
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=1&&this.data.current.Par.Now!=2&&this.data.current.Par.Now!=3){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        } 
        else if (this.data.current.Par.Now==1) {
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1]
          });
          this.nextScene(2);
        }
        else if (this.data.current.Par.Now==2) {
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1]
          });
          this.nextScene(0);
        }
        else if (this.data.current.Par.Now==3) {
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1]
          });
          this.nextScene(1);
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

onShowRight(e){
  let id=e.target.dataset.id;
  let tmp='pop[2].options['+id+'].choose';
  this.setData({
    [tmp]: !this.data.pop[2].options[id].choose
  })
},

showImg(e){
  let sec=e.target.dataset.sec,id=e.target.dataset.id;
  let tmp='pop['+sec+'].options['+id+'].hide';
  this.setData({
    [tmp]: false
  })
},

showImg2(){
  if (this.data.pop[0].showTextNum>=1) return;
  this.setData({
    'pop[0].showTextNum': this.data.pop[0].showTextNum+1
  })
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

showPopup(e) {
  let id=e.target.dataset.id;
  let tmp='showPopupButton['+id+']';
  this.setData({ [tmp]: true });
},

onPopupClose(e) {
  let id=e.target.dataset.id;
  let tmp1='showPopupButton['+id+']';
  let tmp2='showChoiceButton['+id+']';
  this.setData({ 
    [tmp1]: false,
    [tmp2]: false
  });
  this.onPrintWordbyWord();
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