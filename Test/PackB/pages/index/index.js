// pages/content/index/index.js
import * as echarts from '../../../component/ec-canvas/echarts.js';
function initPerhourChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  var pages=getCurrentPages();;
  var currentPage = pages[pages.length - 1];
  let gamelog=currentPage.data.gamelog
  console.log(gamelog)
 
  console.log(gamelog.Arttack.rearServiceGroup)
  var ArttackChildren=[]
  if (gamelog.Arttack.rearServiceGroup.arrival==true)
  {
    var rearServiceGroupChildren={id:2,name:'加入后勤组·乍至',intro:'',
      children:[]                              
    }
    if(gamelog.Arttack.rearServiceGroup.fund==true)
      {
        rearServiceGroupChildren.children.push({ id: 3, name: '资金筹备', intro: ''})
      }
    if(gamelog.Arttack.rearServiceGroup.place==true)
        if(gamelog.Arttack.rearServiceGroup.hideLevel==true)  
           {
                rearServiceGroupChildren.children.push(  { id: 4, name: '场地定档', intro: '',children:[ { id: 7, name: '隐藏剧情', intro: ''}]
              },)
           }
        else{
          rearServiceGroupChildren.children.push( { id: 4, name: '场地定档', intro: ''})
        }
    if(gamelog.Arttack.rearServiceGroup.teabreak==true)
        {
          rearServiceGroupChildren.children.push({ id: 5, name: '茶歇预定', intro: ''})
        }
   if(gamelog.Arttack.rearServiceGroup.spendRent==true)
      {
        rearServiceGroupChildren.children.push(  { id: 6, name: '采购租借', intro: ''})
      }
    ArttackChildren.push(rearServiceGroupChildren)
  }
  if (gamelog.Arttack.advocacyGroup.arrival==true)
  {
    var advocacyGroupChildren={id: 8, name: '加入宣传组·乍至', intro: '',
      children:[]                              
    }
    if(gamelog.Arttack.advocacyGroup.notification==true)
      {
        advocacyGroupChildren.children.push(  { id: 9, name: '六次推送制作', intro: ''})
      }
    if(gamelog.Arttack.advocacyGroup.logoPoster==true)
      {
        advocacyGroupChildren.children.push({ id: 10, name: 'logo和海报设计', intro: ''})
      }
    if(gamelog.Arttack.advocacyGroup.mvFilming==true)
      {
        advocacyGroupChildren.children.push( { id: 11, name: 'MV拍摄', intro: ''})
      }
    if(gamelog.Arttack.advocacyGroup.propagandaItem==true)
    {
      advocacyGroupChildren.children.push({ id: 12, name: '实体宣传品设计', intro: ''})
    }
    ArttackChildren.push(advocacyGroupChildren)
  }
  if (gamelog.Arttack.programGroup.arrival==true)
  {
    var programGroupChildren={ id: 13, name: '加入节目组·乍至', intro: '这是B',
    children:[]                              
    }
    if (gamelog.Arttack.programGroup.dance==true)
      {
        programGroupChildren.children.push({ id: 14, name: '舞蹈教学', intro: ''})
      }
    if (gamelog.Arttack.programGroup.dresscode==true)
      {
        programGroupChildren.children.push( { id: 15, name: 'Dresscode拍摄', intro: ''})
      }
    if (gamelog.Arttack.programGroup.partner==true)
      {
        programGroupChildren.children.push({ id: 16, name: '舞伴匹配', intro: ''})
      }
    if (gamelog.Arttack.programGroup.programs==true)
      {
        programGroupChildren.children.push({ id: 17, name: '现场节目', intro: ''})
      }
    ArttackChildren.push(programGroupChildren)
  }
  var trydata=[
    { id: 1, name: '引子', intro: '',
      children: ArttackChildren
    }]
  console.log(trydata)
  var option = {
    tooltip: {
      show: true,
      trigger: 'item',
      triggerOn: 'click',
      formatter: function (params) {
        // console.log(params)
        let pages=getCurrentPages();;
        let currentPage = pages[pages.length - 1];
        console.log(currentPage.data)
        currentPage.setData({
          'display': params.data.id-1
        })
        return '点击下方链接跳转'
      },
      position: function (pos, params, dom, rect, size) {
        // console.log(pos)
        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
        var obj = { top: pos[1]+3, right: size.viewSize[0]-pos[0]+8 };
        if (params.data.id == 1) {
          obj = { top: pos[1]+3, left: pos[0]+8 };
        }
        return obj;
      }
    },
    series: [{
        type: 'tree',
        data:trydata ,

        top: '5%', left: '5%', bottom: '5%', right: '5%',
        symbolSize: 8,

        edgeShape: 'polyline', // 直线
        // orient: 'vertical', //竖着

        label: { position: 'left', verticalAlign: 'bottom', align: 'left', fontSize: 12 },
        leaves: {
          label: { position: 'right', verticalAlign: 'bottom', align: 'right', fontSize: 10 }
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义echats
    EChart: {
      onInit: initPerhourChart
    },
    display: -1,
  },
  onLoad(options) {
    console.log(JSON.parse(options.gamelog))
    this.setData({
      gamelog:JSON.parse(options.gamelog)
    })
   } 
})