// pages/content/Scene1/Scene1_2/Scene1_2_1/Scene1_2_1.js

//排序组件未加


Page({

  /**
   * Page initial data
   */
  data: {
    showPopupButton: false,
    showChoiceButton: false, 
    hideNextButton: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '隐藏剧情',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/3.jpg'
        ],
        content: [
          '糟了小舞，出大事情！！！（后勤导）——啊...啥，啥事这么急呀后勤导？（主人公说）——距离舞会开始还有四天，这个场地要寄了！（后勤导）——我，我，我没听懂，之前不是已经谈的好好的吗，合同签了，定金付了...（主人公说）——我真心态都崩了，那个离谱的场地经管人，刚刚开始坐地起价！他说租借他的场地办大型活动要提前过申报流程，要么给他提交这个申报的结果，要么就要把场地费用抬到八万！但是他说的这个所谓“流程”至少要走两个星期！我都不知道怎么办了！——这么看来要保住这个场地只有两条路了：延迟舞会时间或者乖乖交上八万，可行吗？（后勤导）——呜呜，我听出来这是反问句了......（主人公说）——推迟时间，这个影响多大啊，我们几个月前宣传都说好是这天了，而且换了时间就很可能和参与者和日程冲突，这多为难啊；然后这个比原合同加高一倍多的抬价，我们的预算怎么可能付得起......太不合理了！（后勤导）——那我们，还能怎么办呀，在这种时候出岔子是从来没有遇到过的呢，我又焦虑，又无助，心里是一团乱麻（主人公内心）——那我们，只有第三条路了，另找新的场地（后勤导）——啊这，来得及吗，只有四天，重新看场地签合同写策划还来得及吗......（主人公说）——有什么办不到的？你别忘了，我们不是孤零零地在战斗（后勤导）——很快，我就从后勤导口中得知，在这种紧急情况下，有经验的学长学姐们是我们最坚强的后盾，支持着我们小心翼翼地探出每一步，让舞会化险为夷......（主人公内心）',
          '临危受命的我已经在着手寻找新的场地，为了帮助自己在最短时间内搜集到尽可能多的可供选项，我需要将选择一个舞会场地要考虑因素按照权重排序，再一一电话微信联系场地方，试探租借的可能性',
          '在学长学姐提供资源的帮助下，我们是费尽周折地定下了一个满意的新选择，在四天内光速走完看场地签合同改策划的流线——当然，与毁约的原场地方argue退款赔偿的艰巨任务，也离不开他们的火力全开的推进——真是想想就紧张，万一在这一关键节点，不够淡定，不够高效，或者是没有学长姐的支持，我们几个月筹备舞会的心血就......真是不敢想啦......（主人公内心）' 
        ]
      },
    ],
    pop: {
      title: '哪些因素是要重点考虑的呢?',
      options: []
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
    targetList: [],
    habitList: [],
    kelong: {
      name: '',
      icon: ''
    },
    startTop: 0, //拖拽开始时克隆项距离class=habitlist节点顶部边界的值
    top: 0,
    selectedIndex: -1, //被选择拖拽的项的index
    backupList: [], //用于备份数据
    showkelong: false, //是否显示克隆项
  },

nextScene(){
  this.setData({
    showChoiceButton: true
  })
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=1){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        }
        else if (this.data.current.Par.Now==1){
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
      top = rect.height - 60
    } else if (top < 0) {
      // 顶部边界控制：控制克隆项拖拽结束时不会出class=habitlist节点的顶部边界
      top = 0
    }
    this.setData({
      top: top,
    })
    var target = parseInt(top / 60)
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
    console.log(habitList,this.data.targetList,habitList==this.data.targetList);
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
      { name: "地理位置（市区中心？靠近公共交通？）", icon: "" },
      { name: "价格", icon: "" },
      { name: "附加服务（大巴接送？灯光音响？舞台设置？停车场）", icon: "" }, 
      { name: "可用面积", icon: "" }
    ]
    var tar = [
      { name: "价格", icon: "" },
      { name: "地理位置（市区中心？靠近公共交通？）", icon: "" },
      { name: "可用面积", icon: "" },
      { name: "附加服务（大巴接送？灯光音响？舞台设置？停车场）", icon: "" }
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