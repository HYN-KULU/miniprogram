// pages/content/Scene1/Scene1_4/Scene1_4.js
Page({

  /**
   * Page initial data
   */
  data: {
    showPopupButton: false,
    showChoiceButton: false, 
    hideNextButton: false,
    showPopupText: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '采购租借',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg'
        ],
        content: [
          '我相信这一定不是你第一个任务的选择吧！是吧被我猜中了！“采购租借”这个词，听上去是四个任务中最不高大上和最没有挑战性的了，但确是必不可少的一环（后勤导）——啊......怎么说？是很简单吗，那我可以快快做完（主人公说）——可没有你想象中的那么简单！这其实是个很繁琐的过程，几乎可以和统计门票的暴躁程度相提并论了。而且它的关键在于，各种现场布置的装饰品，和节目的道具，还有你想得到想不到的细节物件，都要归到这个任务里面（后勤导）——细......细啊，我听得心里忐忑，所有既然有那么多采购和租借的需求，我该从何下手呢（主人公内心）——这些租购，都要跟着策划组提的需求走，当然，更要时时和其他组的伙伴们保持密切联系，来让租购需求的对接少些argue（后勤导）——很快，我就明白这个锅的“繁琐”和“沟通”之难在哪里了（主人公内心）——很快，宣传组和节目组使唤我去要东西的诏令纷纷而来下',
          '来自宣传和节目的租购需求list\n现场抽奖奖品-宣传\n乐队的音响架子鼓-节目\n入场纪念品-宣传\n指示牌易拉宝-宣传\n打卡墙灯牌定制-宣传\n电钢琴-节目\n... ...未完待续的长长一串list... ...',
          '当然，除了来自特定的小组的要求，还有各种零零散散的，数也数不清......比如大衣架，隔离带、货拉拉......看着预算的账单一行行的被填满，我已经可以料想到舞会结束后漫长报销的头秃（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '该如何回答呢？',
      options: [
        { id: 0, title: '可以可以，要是比合同上再给多点赞助就莫得问题！', text: '嘿伙计，哪有这么坦率的嘛！再说，谈定价格后，原则上不能再抬价啦！' },
        { id: 1, title: '没问题，叔叔你们要多大地儿，我们给你们留位置就好啦！', text: '嘿伙计，我们在考虑是否满足赞助商某些要求时，也要考虑要求带来的隐患或是我们不想要的影响！看看C项多聪明，提到了拥堵这个问题！再说，你参加舞会的时候，希望舞厅里摆着一堆广告吗？' },
        { id: 2, title: '呜呜不好意思吖，考虑到场地大厅内是半封闭空间，而且人数较多，设置摊位可能会导致排队拥堵，有安全隐患，您看在入口附近给您设置摊位可以吗？', text: '真是小机灵鬼，相比之下这确实是个较优答复~当然，还要向场地方了解清楚，入口附近是否属于我们租借当天可以自由使用的空间。如果是公共区域，是否这样答复就要三思了！' }
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
      Par: { Now: 0, Cap: 2 }, 
      Cnt: 0
    },
  },

nextScene(){
  this.setData({
    showChoiceButton: true
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=3){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        } 
        else if (this.data.current.Par.Now==3) {
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