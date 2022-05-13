// pages/content/Scene1/Scene1_1/Scene1_1.js
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
        id: 0, name: '资金筹备',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
        ],
        content: [
          '哇，资金筹备是啥呀，那我岂不成文艺部金主爸爸了？我自告奋勇地接下这个任务，为这个当“爸爸”的好机会而沾沾自喜（主人公内心）——嘿小舞，可别高兴太早哦！资金筹备这事一向是大型活动中最繁琐的一环，万万不能出差错！（后勤导）——是！......可是，这个岗位到底有什么工作呀？（主人公说）——好啦，那先给你讲一下我们本次舞会的资金来源（后勤导）',
          '来看看我们的资金来源吧：\n学院和校友资金支持\n校外企业赞助\n我的私房钱\n参与者门票费用',
          '啊......这么多来源，我都要一一对接吗？（主人公说）——是......也不完全是！我们一项项来吧！首先是学院和校友的资金支持，这个对接工作主要由部长们完成，我们就不用参与啦！接着是赞助......（后勤导）——赞助？......隔壁的联络部外联组，不是有负责拉赞助的小伙伴吗？直接让他们帮忙联系不就好了嘛？（主人公说）——但是你依旧要参与到这个沟通的过程呀，舞会谈赞助可是一项跨部门合作的工作，我们要和外联的小伙伴们保持密切联系的！——这样的合作，是为了在赞助商的宣传需求和舞会的资金需求之间找到一个平衡点！（后勤导）——好玄乎啊...比如说呢？（主人公说）',
          '同学啊，我们想在你们舞会的大厅里面放一个摊位发放我们的宣传资料，你看可以吗？',
          '体会过谈赞助的周折，接下来我就要开始着手收门票钱啦！真是说起来轻松做起来爆炸，我很快就见识到这个“金主爸爸”位置实际上是一个苦差事——一轮报名结束后，我乐滋滋地接管过上一届舞会收门票的微信账号，因为我可以拥有大半同学的puq浏览权限啦！可这才高兴没多久，头大的工作就来了（主人公内心）',
          '舞会门票收费标准\n一轮报名早鸟价 98r\n转发puq集赞满66 88r\n现场节目表演 68r\n舞蹈教学志愿者 free\n现场场务志愿者 free',
          'hello小舞，我和我npy都集赞超过99啦！还有，我报名了在舞会上唱歌歌哦哦~我们一起要交多少耶？',
          '156元',
          '两百多位参与者逐一添加微信，通过小窗私聊缴费，还要在excel里汇总每个人的缴费情况......——而且，不是所有人都有留意罅隙的好习惯的！这也就说明经常会出现消息没有回的情况——再加之我可从来没想过会有这么多的人数，往往会在某些时间回复特别特别多的消息，而其它的时候则要苦苦等待大家的回复......小舞要崩溃啦呜呜呜！（主人公内心）——小舞你真的辛苦啦！统计这么多信息准确无误真是不容易呢！你真是我们的舞会运转小金库的，扛扛顶梁柱！！！（后勤导）——后勤组会议上，大家赞赏的眼神成了我这周高强度工作后最大的快乐！虽然这些繁琐的后勤工作并不会直接展现在享受舞会的人们眼前，但却是我们一起把美好的想法付诸实践的底层支持呀！熬点夜，破点防，也值得了！（主人公内心)'
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
      Par: { Now: 0, Cap: 8 }, 
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