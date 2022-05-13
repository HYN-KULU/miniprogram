// PackA/pages/content/Scene3/Scene3_1/Scene3_1.js
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
        id: 0, name: '舞蹈教学',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg'
        ],
        content: [
          '舞会舞会，那现场最重要的环节当然是——跳舞啦！不过小舞我虽然平时喜欢对着镜子跳一跳，但是要真是说起在舞会上和大家一起跳，却是一脸迷茫了......（主人公内心）——节目导，舞蹈教学位是干什么的啊，我我我没学过舞会的舞蹈，能教大家吗？（主人公说）——你这么机灵，学会几支舞不是小菜一碟嘛？哈哈开个玩笑，先别急，我们慢慢解释这个位置的工作，它远不止于你刚刚所认为的，直接手把手教会身边的同学呢！（节目导）——别卖关子嘛，有啥有啥？（主人公说）——首先啦，我们肯定是要选择舞种，而且要考虑到大多数参与者都没有舞蹈基础，参加舞蹈教学的时间有限，这个选舞就要综合考虑到难度、趣味性和观赏性。当然，还要考虑舞会场地规模的限制，还有组织舞蹈秩序的难度......——只有选出了几支符合上面所有要求的舞蹈，我们才能开始考虑实际的教学问题哦！（节目导）——所以呀，这次节目组会议后，我们就开始了一波大海捞针之视频网站的刷，来遴选符合期望的舞蹈（主人公内心）',
          '我们现在找到四支舞啦，但是由于舞会时长限制只能最终选出三支作为集体舞，综合前面节目导的提示，我们会选哪三支呢？\n选舞就要综合考虑到难度、趣味性和观赏性。当然，还要考虑舞会场地规模的限制，还有组织舞蹈秩序的难度......（先贴链接，等我录屏截个片段）',
          '经过一番纠结，我们选定了这三支舞作为面向所有参与者的舞蹈（放前三视频的一张截图）接下来就是......怎么教会大家啦！（主人公内心）——我们的舞蹈教学要通过多种渠道开展，前期的线上教学视频和线下教学都是必要的！但是我们也知道不少同学不一定会及时参加这些线上线下的培训，所以现场手把手指导占了我们教学工作的大部分——小舞你觉得，如何高效地完成这大规模的舞蹈教学呢？（节目导）——总不能只有我们节目组几个人吧，恐怕很难hold住全场......所以，我们是不是要先“以先学带动后学”呀，就是先征集一些有舞蹈基础的大佬一起学学好了，再把教学任务平均分配下去（主人公说）——你这个思路是对的，确实应该“以先学带动后学”！所以专找帅哥美女aka节目组的星探功能就要上线咯...我们要着手联系身边这些优秀的同学，邀请他们加入我们舞蹈教学的工作，组成美美领舞团（节目导）',
          '我们已经联系好领舞团的伙伴们啦，为了学舞教舞有序高效，接下来要做的事情得列个list，排列一个合理的任务先后顺序吧~',
          '一系列舞蹈教学工作有条不紊地完成咯！我长舒一口气......——这个岗位上，不但学会了几支好看的舞蹈，还结识了领舞团的帅哥美女们，这就是节目组吗，爱了爱了！（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '该如何回答呢？',
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
      Par: { Now: 0, Cap: 4 }, 
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
      { name: "预约领舞团排练场地", icon: "" },
      { name: "公布选取舞蹈和相关资料", icon: "" },
      { name: "组织线下舞培", icon: "" },
      { name: "审核前期排练成果", icon: "" },
      { name: "录制线上舞蹈教学视频", icon: "" },
      { name: "发布线下舞培推送", icon: "" },
      { name: "领舞团确定排练时间地点", icon: "" },
      { name: "舞会场地踩点预排练", icon: "" },
      { name: "领舞团确定线下舞培时间地点", icon: "" },
      { name: "现场舞蹈教学", icon: "" },
      { name: "预约线下舞培场地", icon: "" },
    ]
    var tar = [
      { name: "公布选取舞蹈和相关资料", icon: "" },
      { name: "领舞团确定排练时间地点", icon: "" },
      { name: "预约领舞团排练场地", icon: "" },
      { name: "审核前期排练成果", icon: "" },
      { name: "录制线上舞蹈教学视频", icon: "" },
      { name: "领舞团确定线下舞培时间地点", icon: "" },
      { name: "预约线下舞培场地", icon: "" },
      { name: "发布线下舞培推送", icon: "" },
      { name: "组织线下舞培", icon: "" },
      { name: "舞会场地踩点预排练", icon: "" },
      { name: "现场舞蹈教学", icon: "" },
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