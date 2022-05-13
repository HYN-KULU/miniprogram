// PackA/pages/content/Scene2/Scene2_2/Scene2_2.js
const db=wx.cloud.database();
Page({
  /**
   * Page initial data
   */
  data: {
    openid:'',
    gamelog:{},
    showPopupButton: [ false, false, false ],
    showChoiceButton: [ false, false, false ], 
    hideNextButton: false,
    showPopupText: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    showBG: true,
    article: [
      {
        id: 0, name: 'logo和海报设计',
        ImageList: [
          '/source/4.jpg',
          '/source/3.jpg',
          '/source/4.jpg',
          '/source/3.jpg',
          'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/16.png?sign=0d075d71e37a4eaee02c1638b5f3cf2b&t=1652438528',
        ],
        content: [
          '哈哈，和六篇推送相比，这logo和海报设计不就是小菜一碟嘛，只需要画两个图就好啦，为什么还要专门分开为一组任务呢？（主人公说）——小舞，你可低估了这个岗位的重要性！可先别放松太早咯！（宣导）——宣导邪魅的笑容再次出现，让我顿时对这项任务充满了未知的恐惧 / 瑟瑟发抖.jpg （主人公内心）——logo是一个活动的标识符，成稿会被反复用到所有的宣传品中，包括各推送、海报、实体......可一定要好好雕琢！——还有海报，海报是一个活动最直观、流传最广的宣传品，它给人的视觉冲击力可以直接调动大家参与的热情！当然，一份高质量的海报，更需要将关键信息准确传达，同时这些文字信息的融入不能破坏整体审美和和谐，小舞，这对你是一个难得的锻炼机会！（宣导）——这......听上去好难啊，我该怎么入手呢？（主人公说）——不急，我们先从logo开始吧！——我们一般是先从很多种可能性出发，推出多个初稿，再和大家一起商讨，选出有优化空间的几个，再继续修改，选优，最后择出最符合活动风格又最好看的一个！（宣导）——啊，那这不会选择困难症的咩？（主人公说）',
          '我又犯选择困难症啦！点击查看初稿logo选项们，选择最喜欢的两个进入改进稿阶段吧，记得我们这次舞会的主题是Enigma幻境，要能融合活动风格哦！',
          '在接下来一次宣传组会议上，我们最后决定出了作为logo底稿的图案，我也在大家的建议下一次次改进优化底稿，最后呈现出了所有同学们都看到的logo终稿版本！（主人公内心）',
          '第一part的logo算是顺利完成啦！接下来是海报咯！当然，我依旧陷于选择困难中无法自拔......（主人公内心）',
          '最后经过层层改进，绝美海报终稿就顺利出炉啦——虽然设计的过程既烧脑又肝，但看着自己的作品展示在学院楼、宿舍楼，还有分发到各个寝室，吸引了一大波来报名参加舞会的小伙伴，我的内心充满了成就感！（主人公内心）'
        ]
      },
    ],
    pop: [
      { title: 'logo初稿', showTextNum: 0,
        options: [
          { id: 1, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/1.png?sign=bd44639fec081b669d769a5747509289&t=1652426454', hide: true },
          { id: 2, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/2.png?sign=2c8162bd316de76cecb3aec381f3186d&t=1652426616', hide: true },
          { id: 3, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/3.png?sign=ac99af906ca91a83524d7fed7e465dd4&t=1652426749', hide: true },
          { id: 4, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/4.png?sign=4acf8df9c04e3ebb287f67f302959824&t=1652426757', hide: true },
          { id: 5, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/5.png?sign=0bfd9ad11de08b1e968a719b5406c8da&t=1652426765', hide: true },
          { id: 6, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/6.png?sign=40fbfac87d6d7fb861e170d5204b8ddb&t=1652426773', hide: true },
        ]
      },
      { title: '点击查看logo的优化过程吧（点一下换一张图）', showTextNum: 0,
        options: [
          { id: 1, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/7.png?sign=79136277f0f34e09a2f926d5124dff9e&t=1652438059', hide: true },
          { id: 2, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/8.png?sign=bbe943dc8f2c69bdc2a5539bae36e7fb&t=1652438070', hide: true },
          { id: 3, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/9.png?sign=f54759521fe58e37c0ab0f74537d7fe2&t=1652438079', hide: true }
        ]
      },
      { title: '点击查看海报初稿，快帮我选择你最喜欢的海报版本吧！', showTextNum: 0,
        options: [
          { id: 1, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/10.png?sign=c836dd40d03841a21fe0303d47dc1a63&t=1652438101', hide: true },
          { id: 2, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/11.png?sign=2e5eb13e06b7a0d2f82ddc2ea6ecd797&t=1652438112', hide: true },
          { id: 3, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/12.png?sign=7c34f3e0c4950039a96a42459124145c&t=1652438122', hide: true },
          { id: 4, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/13.png?sign=b3d4bff565909bec8b7fedd10be86a42&t=1652438145', hide: true },
          { id: 5, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/14.png?sign=9122b6641aec74d16595f9ca3db7a282&t=1652438131', hide: true },
          { id: 6, url: 'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_2/15.png?sign=3b49bc86c61db5e7f194171bb4563485&t=1652438158', hide: true },
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
  var gamelog=this.data.gamelog
  gamelog.Arttack.advocacyGroup.logoPoster=true
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
          this.nextScene(0);
        }
        else if (this.data.current.Par.Now==2) {
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1]
          });
          this.nextScene(1);
        }
        else if (this.data.current.Par.Now==3) {
          this.setData({
            'current.Par.Now': this.data.current.Par.Now+1,
            'current.Cnt': 0,
            backgroundImage: this.data.article[0].ImageList[this.data.current.Par.Now+1],
            showBG: false
          });
          this.nextScene(2);
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

showImg(e){
  let sec=e.target.dataset.sec,id=e.target.dataset.id;
  let tmp='pop['+sec+'].options['+id+'].hide';
  this.setData({
    [tmp]: false
  })
},

showImg2(){
  if (this.data.pop[1].showTextNum>=2) return;
  this.setData({
    'pop[1].showTextNum': this.data.pop[1].showTextNum+1
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