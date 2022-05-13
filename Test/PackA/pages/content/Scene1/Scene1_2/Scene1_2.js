// pages/content/Scene1/Scene1_2/Scene1_2.js
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
    showPopupAnswer: false,
    showPopupText: false,
    showPopupSubText: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: '场地定档',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
        ],
        content: [ 
          '舞会场地，那可是高大上的配置！我来接这个活，可不就可以获得美美场地的第一手消息嘛，是不是还能提前去现场一饱眼福？真是想想就兴奋！（主人公内心）——租场地嘛....！不错，挺有信心的嘛，上来就给自己挑了个最难的任务...（后勤导）——诶！！！！——我那颗像小恐龙一样乱撞的心瞬间停止了下来，四周静得可怕，静得我迫不及待想往地上扔根针，体会一下针掉在地上都能听得见的安静到底怎样的安静——原来这居然是最难的任务嘛？我现在换....（主人公内心）——既然选择了谈场地的任务，一定要对自己有自信呀！干这活，最需要的就是脸皮呀嘿嘿，不然你怎么argue......——而且，还要时刻记住我们的预算是有限的！要在价格和规格之间找到最佳的平衡！（后勤导）——argue...argue？我立刻开始脑补各种和场地负责人大叔对线压价谈条件的画面，母胎社恐的我能胜任这样的工作吗？——没想到，这些对线画面竟然在后面的工作中成为现实......（主人公内心）',
          '小同学，你看我们这个场地，地理位置多好，就在黄浦江边，这面积也三百多平了，怎么也得四万起步',
          '最后，经过反反复复的试探和周旋，这个场地的合同价被我成功压到三万五——这省下来的每一分钱都是宝贝呀！在有限的资金支持之下，既想保证活动质量，又要考虑预算天花板，害，这后勤组的工作属实不易（主人公内心）'
        ]
      },
    ],
    pop: { 
      title: '该如何回答呢？',
      options: [
        { id: 0, title: '四万？！我们所有预算加起来就五万出头，就租个场地给你四万？不行！三万！', text1: '哪有这么不讲理的，要不是看你们是学生，我这场地租给那些公司办年会可是八万起步呢，三万给你一天我们可亏大本了，你到底想不想订这个场地？不然你们的档期我给别人了',
          subOpts: [
            {id: 0, title: '我不干了，走人！', text: '谈崩了伙计，重开吧！'},
            {id: 1, title: '当然想啊，三万怎么就亏了，我看这里平时也没什么人来租嘛，白放一天亏一天，三万租给我们一天就赚一天', text: '怎么没人租了？！跟你们说啊，本来你们活动那天的档期还有一家企业想来租了场地办活动的，我看在你们来看了场地这么多次挺有诚意的才给你们保留，看来我还是给他们吧！（谈崩了伙计，重开吧！）'}
          ]
        },
        { id: 1, title: '是是是您说的都对，那就四万啦', text1: '就这么愉快的决定啦！', text2: '好家伙，谈价格不看预算的吗！我们的赞助门票加起来真的就五万出头，场地支出四万，那茶歇、现场装饰品、纪念品奖品这些加起来，还够用吗？重开吧伙计！' },
        { id: 2, title: 'qwq叔叔，我们还是学生，办一个活动资金有限，这个价格我们大概率支付不起。如果这样的话，我们可能只得换一个价格在可承受范围内的场地了', text1: '同学别急，我们可以继续协商的嘛，也不是说这一下子把你们卡死了，我们也明白你们预算有限',
          subOpts: [
            {id: 0, title: '嗯嗯是的谢谢理解，我们大概能承受的上限就是三万五啦，您觉得可以接受吗？', text: '不错呀小舞，你这话术水平得到了提升！'},
            {id: 1, title: '明白就好，既然明白为什么不开价三万五呢？！', text: '谈崩了伙计，重开吧！'}
          ]
        }
      ],
      showTextNum: 0,
      showSubTextNum: 0,
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
  var gamelog=this.data.gamelog
  gamelog.Arttack.rearServiceGroup.place=true
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
        if (this.data.current.Par.Now<this.data.current.Par.Cap&&this.data.current.Par.Now!=0){
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            hideNextButton: false
          });
        } 
        else if (this.data.current.Par.Now==0) {
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

onShowAnswer(e){
  this.setData({ 
    showPopupAnswer: true,
    'pop.showTextNum': e.target.dataset.index
  })
},

onShowText(){
  this.setData({ 
    showPopupText: true
  })
},

onShowSubText(e){
  this.setData({
    showPopupSubText: true,
    'pop.showSubTextNum': e.target.dataset.index
  })
},

onPopupAnswerClose(){
  this.setData({ 
    showPopupAnswer: false
  });
},

onPopupTextClose(){
  this.setData({ 
    showPopupText: false
  });
},

onPopupSubTextClose(){
  this.setData({ 
    showPopupSubText: false,
  });
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