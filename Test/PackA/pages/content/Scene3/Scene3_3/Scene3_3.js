// PackA/pages/content/Scene3/Scene3_3/Scene3_3.js
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
        id: 0, name: '舞伴匹配',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/3.jpg',
          '/source/4.jpg'
        ],
        content: [
          '舞伴匹配...？我是要帮忙给所有报名来舞会的小伙伴配舞伴吗？这听上去很社牛！（主人公说）——在这个岗位干活，社牛是必须的，同时设计匹配机制也是一个很烧脑的环节！小舞，这对你是不小的挑战呢！（节目导）——我还从来没想到过，原来舞伴匹配是我们要帮助报名者做的......我还以为大家都自带舞伴了呢......那这个机制要怎么设计呀？（主人公说）——怎么入手呢，我们分类来看好了：自带舞伴的报名者是一部分，另一部分的报名者中，能通过社牛自己找到舞伴的，我们也不用担心。还有不少希望来舞会玩耍，但又苦于邀请不到舞伴的同学，就需要我们设计一种渠道，来帮助他们解决难题。对此，你有什么思路吗？（节目导）——嗯......有没有可能做一个配对的平台把没有舞伴的报名者聚在一起，让大家在这里互相邀请呢？如果想体验盲盒，甚至能开个随机配对模式嘻嘻...（主人公说）——真是小机灵鬼！小舞，这个重任就交给你啦！（节目导）——啊慢着......搭建平台，这，这事是我有能力做得出来的吗？（主人公内心）',
          '又是一天的通宵，又是一天清晨的微光，我顶着黑眼圈合上了电脑。——混混沌沌的脑子里依稀记得组会上节目导信任的眼神，还有会后蹦出来的那个灵感：做一个舞伴匹配的微信小程序呗！让大家在小程序这个平台上，轻轻点击便能邀请到舞伴，这个配对难题不就迎刃而解了？——然而说起来容易做起来难，为了钻研小程序制作，我可是焚膏继晷废寝忘食，苦苦修仙三个月，终于迎来了发布的日子......（主人公内心）',
          /////////////////////
          'kulu的小程序页面简化版，展示修改个人信息和两个用户互相发邀请的流程',
          /////////////////////
          '舞伴匹配小程序这个大坎算是迈过去了，随之而来的问题是，匹配好的舞伴现场如何相互确认？创意满满的节目导又给我提了一个方案：扑克牌配对（主人公内心）',
          '扑克牌配对规则,小程序中用户分类\n（不包括报名时自带舞伴的用户）\n①通过小程序已邀请舞伴的——②通过小程序未邀请舞伴但在报名问卷中同意随机配对的——③通过小程序未邀请舞伴且在报名问卷中不同意随机配对的（在此类别下包含文艺部成员, 其他工作人员和参加表演但不参加舞会的同学）——对于这三类同学，按照什么规则发放扑克牌比较合理呢？',
          '舞伴匹配这个浩大的工程终于完成咯！我揉揉黑眼圈，心想自己的爆肝成果能帮助到不少小伙伴找到与他们在舞会上邂逅的舞伴，心里美滋滋的！（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '怎么发扑克牌比较合理呢？',
      options: [],
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
      Par: { Now: 0, Cap: 5 }, 
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=4){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        } 
        else if (this.data.current.Par.Now==4) {
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
  this.setData({ 
    showPopupButton: false,
    showChoiceButton: false
  });
  this.onPrintWordbyWord();
},

dragStart(e) {
  // console.log("拖拽开始", e);
  var i = e.currentTarget.dataset.index // 当前拖拽项的索引index
  // 把当前拖拽项的内容复制给kelong
  var kelong = this.data.habitList[i]
  // console.log("拖拽开始i=",i,"kelong=",kelong);
  var query = wx.createSelectorQuery(); // 创建节点查询器 quer
  //选择class=habitlist的节点，获取节点位置信息的查询请求
  query.select('.habitlist').boundingClientRect((rect) => {
  var top = e.changedTouches[0].clientY - rect.top - 30
   var startTop = top;
    this.setData({
      kelong: kelong,
      selectedIndex:i,
      showkelong: true,
      top:top,
      startTop:startTop
    })
  }).exec();
},
// 拖拽移动
dragMove(e) {
  // console.log("拖拽移动", e);
  var query = wx.createSelectorQuery();
  var top =this.data.top
  query.select('.habitlist').boundingClientRect((rect) => {
   top = e.changedTouches[0].clientY - rect.top - 30
    if (top < 0) {
      // 顶部边界控制：控制克隆项不会拖拽出class=habitlist节点的顶部边界
     top = 0
    }
    this.setData({
      top:top
    })
  }).exec();
},
// 拖拽结束
dragEnd(e) {
  // console.log("拖拽结束", e);
  var i = e.currentTarget.dataset.index
  var query = wx.createSelectorQuery();
  var kelong = this.data.kelong
  var habitList = this.data.habitList
  query.select('.habitlist').boundingClientRect((rect) => {
    var top = e.changedTouches[0].clientY - rect.top - 30
    if (top > rect.height) {
      // 底部边界控制：控制克隆项拖拽结束时不会出class=habitlist节点的底部边界
      top = rect.height - 150
    } else if (top < 0) {
      // 顶部边界控制：控制克隆项拖拽结束时不会出class=habitlist节点的顶部边界
      top = 0
    }
    this.setData({
      top: top,
    })
    var target = parseInt(top / 150)
    var list = []  //用于备份数据
    if (this.data.startTop > top) {
      //  往上方位置拖拽
      for (var k = 0; k <= i - target; k++) {
        //  备份插入位置target开始的下方数据，除了拖拽数据项
        if (habitList[target + k].name != kelong.name) {
          list.push(habitList[target + k])
        }
      }
      // console.log("往上拖拽 list=======", list);
      if (list.lenghth != 0) {
        habitList[target] = kelong
        for (var m = target + 1, n = 0; n < list.length; m++, n++) {
          habitList[m] = list[n]
        }
      }
    } else {
      // 往下边位置拖拽
      for (var k = 1; k <= target - i; k++) {
        //  备份插入位置target开始的上方数据，除了拖拽数据项
        if (habitList[i + k].name != kelong.name) {
          list.push(habitList[i + k])
        }
      }
      // console.log("往下拖拽 list=======", list);
      if (list.length != 0) {
        habitList[target] = kelong
        for (var m = i, n = 0; n < list.length; m++, n++) {
          habitList[m] = list[n]
        }
      }
    }
    this.setData({
      habitList: habitList,
      selectedIndex:-1,
      showkelong: false
    })
    // console.log(habitList,this.data.targetList,habitList==this.data.targetList);
    let flag=true;
    for (let i=0;i<this.data.habitList.length;i++){
      if (this.data.habitList[i].name!=this.data.targetList[i].name) flag=false;
    }
    if (flag) this.onPopupClose();
  }).exec();
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
    var list = [
      { name: "通过小舞使得两人互加微信，可通过彼此的暗号在舞会现场相见，同时小程序内邀请函页面的编号对应扑克牌类型花色和点数，入场时按照该花色和点数分发扑克牌，可帮助两位互相确认", icon: "" },
      { name: "只会在舞会当天拿到随机一张扑克牌作为纪念品", icon: "" },
      { name: "通过小舞使得两人互加微信，可通过彼此的暗号在舞会现场相见，同时小程序内邀请函页面的编号对应扑克牌类型花色和点数，入场时按照该花色和点数分发扑克牌，可帮助两位互相确认", icon: "" }
    ]
    var tar = [
      { name: "通过小舞使得两人互加微信，可通过彼此的暗号在舞会现场相见，同时小程序内邀请函页面的编号对应扑克牌类型花色和点数，入场时按照该花色和点数分发扑克牌，可帮助两位互相确认", icon: "" },
      { name: "通过小舞使得两人互加微信，可通过彼此的暗号在舞会现场相见，同时小程序内邀请函页面的编号对应扑克牌类型花色和点数，入场时按照该花色和点数分发扑克牌，可帮助两位互相确认", icon: "" },
      { name: "只会在舞会当天拿到随机一张扑克牌作为纪念品", icon: "" }
    ]
    this.setData({
      habitList: list,
      targetList: tar
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