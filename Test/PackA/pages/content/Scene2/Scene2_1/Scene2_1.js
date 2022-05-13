// PackA/pages/content/Scene2/Scene2_1/Scene2_1.js
const db=wx.cloud.database();
Page({
  /**
   * Page initial data
   */
  data: {
    openid:'',
    gamelog:{},
    showPopupButton: false,
    showChoiceButton: false, 
    hideNextButton: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '六次推送制作',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg'
        ],
        content: [
          '哇，怎么要做六篇推送这么多呀！！我这该不会成肝帝了？组里伙伴纷纷向我投来敬佩的目光，宣导也欣慰而赞赏地点点头，喜气洋洋的党团活动室更是以乐景衬哀情（主人公内心）——awa这么多推送任务，我要从何下手呀？（主人公说话）——当然，这六篇不是让你一次做完，而是按照一定的顺序和ddl来赶！众所周知，推送是一个活动对外展示的直接窗口，而每篇推送都要紧跟每个工作组工作进度的关键节点，来推进我们整个活动！（宣传导）——啊啊啊，我还是好晕啊，所以我具体要怎么做呀？啥时候要交稿呀？（主人公说话）——别急小舞，等策划组给出整体时间线，我们再细细研究（宣传导）',
          '嗨，刚刚导演组开完会啦，小舞你快来看看时间线里面对应的推送发布节点！（宣传导）拖动选项来配对推送和对应内容吧~',
          '哈，终于理请要干的活啦！还真是任重而道远，小舞小舞你要加油肝呀！当然，以后看大家开始掷骰子了，也要机灵些呜呜......不然这锅都得落到自己头上啦（主人公内心）——但转念一想，既然来参与活动筹备了，多干点活不是能学到更多东西吗，不过，我到现在还不会用pr呢，会不会拖大家的后腿呀，我无助地望向宣导...（主人公内心）——推送这事，看似只是自己做好设计排版就完工了，但其实要时刻和其他工作组伙伴保持密切联系，还要接受大家“挑剔”的美工评价和时刻可能“回炉重造”，以确保信息准确传达和高质量审美的双赢，还真是不容易呢！小舞你加油~（宣导）——呜呜呜，但是宣导大人，我以前还没做过推送，也不会用pr，我能不能胜任这样的要求呀......（主人公说）——怕啥，大家都是从零开始学的呀！对啦，这周末有传媒部的pr培训workshop，记得去向大佬们取经！学学好了再开工！（宣导）——啊...？是这样呀，既然能白嫖其他部门的教程，不去就亏了呀，我内心打起了小算盘：那我必是早早去workshop抢前排，那啥资料的当然是藏在收藏夹百刷不厌，顺便还能结识传媒强强的小伙伴，以后遇到困难了还有大腿抱，我真是小机灵鬼！（主人公内心）',
          ////////////////
          '小舞呀，你在wksp上还可以和传媒的同学混个脸熟，以后除了推送工作，宣传组的其他锅儿也会和他们多多合作的哦！（宣导）——是的咩！那有什么合作的工作呀！我可好奇啦，可以剧透咩？（主人公说）——还记得倒计时推送的内容要求吗？到时候我们会推出Enigma幻境舞会绝美MV，等到拍摄档期了，你来参与MV工作就知道啦！（宣导）——哇，拍MV耶，也是我从来没有做过的新鲜事！我可一定要来看热闹......啊不是认真打工！（主人公说）——嘿，先把推送的工作做好，后面其他活随时欢迎来参加（宣导）——于是，我漫长的pr摸索和推送烧脑之旅就开始了（主人公内心）',
          /////////////////
          '嘿小舞，你又开小差啦。不过没关系，这次组会就开到这里，记得下周开会我们就要开始讨论修改你做的推送啦，不许咕咕！（宣导）——是...一定！一定不咕咕！于是，我漫长的pr摸索和推送烧脑之旅就开始了（主人公内心）',
          '呜呜呜，我要崩溃啦！这推送怎么这么难搞呀！（主人公内心）——一篇推送三个ddl，初稿，改进搞，终稿，每个ddl之后部长和导演组还提一堆要改的地方，呜呜呜...呜呜呜...我是不是太菜了哇......（主人公内心）——这个渐变色混得太杂了......色调调亮些呗现在的背景色看起来好阴森qaq......（其他人）——啊这个字体能换个吗，还有那个字的颜色大小,这样让人没有读下去的欲望......你要让这些关键信息看上去很清晰美观才能传达到位啊......（其他人）——害，我又要remake啦！我正看着部门微信群自闭着呢，忽然被小窗戳戳了，于是赶紧逃离出去（主人公内心）——小舞......你没丧气吧？（宣导）——没，没有，只是我觉得自己花了那么多心思做出来一稿，一发到群里却被大家各种批评......我觉得我太菜了，我达不到大家的期望，呜呜......（主人公语言）——啊不是的，我们不是存心想刁难你！千万别这样想！（宣导）——大家都相信你能做的更好才会想方设法给你提优化的建议呀！我们共同的目标，不都是为了让这篇推送美美出炉吗？（宣导）——嗯...嗯...我再改，再改！宣导放心，我不摆烂！（主人公语言）——虽然看大家的意见，推送初稿是要被迫重修了，可这又何尝不是一个让自己ps技能蜕变的过程呢？（主人公内心）',
          '小舞你快看，你做的推送发出来啦！（宣导）——我一听宣导提醒就兴奋起来了，赶紧扔下数学作业去刷puq，果然，puq被舞会的推送霸屏了！（主人公内心）——真的炒鸡激动的有木有！看到自己精心打磨的一份推送被身边很多很多的好朋友转发，附带上夸夸的文案，还有对舞会的期待......这一刻，觉得自己所有的努力都值得了！（主人公内心）',
          '“小舞太棒啦，推送好好看！这个必须给转！”\n“看到这美美的推送，谁不期待即将到来的舞会呢！”\n“与你相约Enigma幻境，狠狠期待一波！”\n... ...',
          '就这样，我的推送工作顺利完成啦！这一路上学到了很多，不但学会了熟练玩转pr，更站在一个推送工具人的视角，体验到这场大型活动筹备的不易（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '点击查看各推送内容要求',
      options: [
        { id: 1, title: '11.28-启动&第一轮报名推送' },
        { id: 2, title: '1.26-着装指导推送' },
        { id: 3, title: '2.8-舞蹈培训指南推送' },
        { id: 4, title: '2.9-第二轮报名推送' },
        { id: 5, title: '2.25-倒计时推送' },
        { id: 6, title: '（未定）-回顾推送' },
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
      Par: { Now: 0, Cap: 8 }, 
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
  var gamelog=this.data.gamelog
  gamelog.Arttack.advocacyGroup.notification=true
  db.collection("GameLog").where({_openid:this.data.openid}).update({
    data: {
     gamelog:gamelog
    },
    success:res=>{
      console.log(res.data)
      this.setData({ showBackButton: false });
    }
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
    this.setData({
      hideNextButton:true
    })
    wx.cloud.callFunction({   name: 'getOpenid',   complete: res => {    console.log("云函数获得的openid：",res.result.openId); var openid=res.result.openId;
    this.setData({
      openid:openid
    })
    db.collection("GameLog").where({_openid:openid}).get({
      success:res=>{
        this.setData({
          gamelog: res.data[0].gamelog
        })
        this.onPrintWordbyWord();
        var len=0;
        for (var i=0;i<this.data.article[0].content.length;i++){
          len+=this.data.article[0].content[i].length;
        }
        this.setData({
          'progress.tot': len
        })
        var list = [
          { name: "整理节目组的dresscode美图，明确着装要求！开放舞伴匹配小程序！", icon: "" },
          { name: "奠定宣传风格！开放报名渠道！是否成功的通知形式！缴费渠道！", icon: "" },
          { name: "开放二轮报名渠道！重申成功通知和缴费渠道！开放主持人报名！", icon: "" },
          { name: "介绍舞会选用舞种！整理节目组的舞蹈教学视频！预告线下舞培！", icon: "" },
          { name: "舞会回顾视频发布！工作人员致谢！美美下班！", icon: "" },
          { name: "舞会MV发布！整理后勤组的场地、茶歇信息！入场流程和注意事项！", icon: "" }
        ]
        var tar = [
          { name: "奠定宣传风格！开放报名渠道！是否成功的通知形式！缴费渠道！", icon: "" },
          { name: "整理节目组的dresscode美图，明确着装要求！开放舞伴匹配小程序！", icon: "" },
          { name: "介绍舞会选用舞种！整理节目组的舞蹈教学视频！预告线下舞培！", icon: "" },
          { name: "开放二轮报名渠道！重申成功通知和缴费渠道！开放主持人报名！", icon: "" },
          { name: "舞会MV发布！整理后勤组的场地、茶歇信息！入场流程和注意事项！", icon: "" },
          { name: "舞会回顾视频发布！工作人员致谢！美美下班！", icon: "" }
        ]
        this.setData({
          habitList: list,
          targetList: tar
        })
      }
    })
  }})
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