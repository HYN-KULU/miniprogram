// PackA/pages/content/Scene2/Scene2_3/Scene2_3.js
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
    showPopupText: false,
    showBackButton: true,
    backgroundImage: '/source/4.jpg',
    article: [
      {
        id: 0, name: 'MV拍摄',
        ImageList: [
          '/source/4.jpg',
          'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_3/1.png?sign=aecc0c6c3055d3e92b3694691afefac7&t=1652441223',
          'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_3/2.png?sign=8c03e343caeed698307e6b82b2530c3f&t=1652441247',
          'https://636c-cloud1-4gl4jj9w3cb8d273-1311875883.tcb.qcloud.la/Image/Scene2/Scene2_3/3.png?sign=5abd8097ae7130a569a3d69991808338&t=1652441255',
          '/source/3.jpg'
        ],
        content: [
          '拍MV耶，听上去就超级好玩！我毫不犹豫地选择了这项工作，压抑不住心中对mv这神秘的东西的期待（主人公内心）——小舞，我听说你平时看电影看的不少，也总是些影评，mv不就是微电影嘛，看来这活对你来说不在话下（宣导）——呃......不不，我的豆瓣号该不会被你发现了吧，这波可是社大死了......可，可是看电影是一回事，我以前从来没有试过自己拍微电影呀，要怎么入手呀？（主人公说）——你想想看，以下哪些步骤是我们制作这个宣传片要做的？（宣导）',
          '原来拍一个几分钟的宣传片要花费那么多心思，呜呜呜我不能知难而退！（主人公内心）——而且这项浩大的工程，光文艺部是搞不定的，我们要联系传媒部小伙伴们一起合作拍摄！（宣导）——那......我该怎么去抱到他们的大腿呀，大家都这么忙，也都有自己部门的工作要做......（主人公说）——这个部际联络的工作你不用担心，我们让部长们帮忙就好啦！不过提到这个合作，我倒是有点担心沟通的问题......（宣导）',
          '嗯？会有啥问题？（主人公说）——就是我们对宣传片的构思和脚本一般都是自己写好，然后拿给传媒的伙伴帮忙拍摄，但这可能会出现双方对接的不顺畅，大家的想法出现分歧，这样就可能会影响拍摄的效果了......',
          '但是，如果我们联系好了一起讨论风格，一起构思剧情，一起写台本，不就好了嘛？——让部际合作不只是部长之间打个招呼才开始的事，而是从活动筹备就开始贯穿全程，这些沟通的问题不就迎刃而解了吗？（宣导）——好，好主意！我这就去找我认识的传媒部伙伴们讨论讨论这个MV的事~（主人公说）',
          '除了思路和台本和沟通，要想把这奇妙的思路落实为成片，还需要进行各方面的努力呢！——完成这个任务后，各种有趣的花絮细节还萦绕在我脑海中，比如拍摄场地清场时，厚着脸皮去“哀求”东下院活动室自习的同学到别处卷，为了某个角度的灯光效果不惜展示矫健身姿花式举灯，为了营造风洞效果而滑稽扇书本......——当然主演克服寒冬的考验美美上镜，摄影和场务的四处奔忙，这些共同的努力，都助力了绝美mv的横空出世！——当然，最后看到公众号播出我们的作品，puq刷屏转发，还有现场的循环播放......这些瞬间都让我觉得，值了！（主人公内心）'
        ]
      },
    ],
    pop: {
      title: '点击选项勾选你认为拍MV要经历的步骤吧',
      options: [
        { id: 0, title: '联系主演的帅哥美女', text:'', choose: true },
        { id: 1, title: '根据活动风格构思剧情', text:'', choose: true },
        { id: 2, title: '联系传媒部同学摄影', text:'', choose: true },
        { id: 3, title: '把豆瓣影评设为私密', text:'', choose: true },
        { id: 4, title: '拍摄地点踩点协调', text:'', choose: true },
        { id: 5, title: '撰写分镜脚本', text:'', choose: true },
        { id: 6, title: '拍摄服装审核', text:'', choose: true },
        { id: 7, title: '现场拍摄和后期剪辑', text:'', choose: true },
        { id: 8, title: '拍摄道具租借', text:'', choose: true }
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
  var gamelog=this.data.gamelog
  gamelog.Arttack.advocacyGroup.mvFilming=true
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

onShowText(e){
  this.setData({ 
    showPopupText: true,
    'pop.showTextNum': e.target.dataset.index
  })
},

onShowRight(e){
  let id=e.target.dataset.id;
  let tmp='pop.options['+id+'].choose';
  this.setData({
    [tmp]: !this.data.pop.options[id].choose
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