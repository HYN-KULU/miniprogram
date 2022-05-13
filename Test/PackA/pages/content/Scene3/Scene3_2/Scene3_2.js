// PackA/pages/content/Scene3/Scene3_2/Scene3_2.js
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
        id: 0, name: 'Dresscode拍摄',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg'
        ],
        content: [
          'dresscode是什么啊......我选这个锅可能只是因为这是唯一一个没看懂题目的任务哈哈哈！当然参考了往年的dresscode推送，我大概明白这是舞会着装指导的意思（主人公内心）——哇小舞，你果然是DNA里的，专找帅哥美女，啊不节目组人！这一下子就选到dresscode了！（节目导）——所以dresscode是要干啥嘞？（主人公说）——说正经话啦，就是着装指导，引导大家提前准备好符合舞会要求的服装，比如帅哥的西装和美女的裙子（当然反过来也是没问题的哈哈），我们要通过一篇专门的dresscode推送，展示实例舞会服装的照片（节目导）——所以我是要......找帅哥美女给他们拍照咯，这事我喜欢！（主人公说）——当然，在dresscode拍摄这个关卡中，任务还是不少的呢！（主人公内心）',
          'Dresscode to do list',
          'dresscode当天天气有点凉，我在一旁拿着道具跟拍都冻得瑟瑟发抖，真是太辛苦模特们啦！最后成品不负我们的努力，快来欣赏一波吧！（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '排列一个合理的任务先后顺序吧~',
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=1){
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
      top = rect.height - 40
    } else if (top < 0) {
      // 顶部边界控制：控制克隆项拖拽结束时不会出class=habitlist节点的顶部边界
      top = 0
    }
    this.setData({
      top: top,
    })
    var target = parseInt(top / 40)
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
      { name: "同模特,摄影,场务确定拍摄时间地点", icon: "" },
      { name: "沟通服装要求", icon: "" },
      { name: "联系传媒部摄影，拍摄道具租借", icon: "" },
      { name: "审核模特选取的服装", icon: "" },
      { name: "联系宣传组制作dresscode推送", icon: "" },
      { name: "拍摄地点选取踩点", icon: "" },
      { name: "联系同意上镜的模特", icon: "" },
      { name: "美美开拍", icon: "" },
      { name: "后期修图，成片整理", icon: "" }
    ]
    var tar = [
      { name: "联系同意上镜的模特", icon: "" },
      { name: "沟通服装要求", icon: "" },
      { name: "审核模特选取的服装", icon: "" },
      { name: "联系传媒部摄影，拍摄道具租借", icon: "" },
      { name: "拍摄地点选取踩点", icon: "" },
      { name: "同模特,摄影,场务确定拍摄时间地点", icon: "" },
      { name: "美美开拍", icon: "" },
      { name: "后期修图，成片整理", icon: "" },
      { name: "联系宣传组制作dresscode推送", icon: "" }
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