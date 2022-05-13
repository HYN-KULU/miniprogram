// pages/content/index/index.js
import * as echarts from '../../../component/ec-canvas/echarts.js';
function initPerhourChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      show: true,
      trigger: 'item',
      triggerOn: 'click',
      formatter: function (params) {
        // console.log(params)
        let pages=getCurrentPages();;
        let currentPage = pages[pages.length - 1];
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
        data: [
        { id: 1, name: '引子', intro: '',
          children: [
            { id: 2, name: '加入后勤组·乍至', intro: '', 
              children: [
                { id: 3, name: '资金筹备', intro: ''},
                { id: 4, name: '场地定档', intro: '',
                  children: [
                    { id: 7, name: '隐藏剧情', intro: ''}
                  ]
                },
                { id: 5, name: '茶歇预定', intro: ''},
                { id: 6, name: '设备租借', intro: ''}
              ]
            },
            { id: 8, name: '加入宣传组·乍至', intro: '', 
              children: [
                { id: 9, name: '六次推送制作', intro: ''},
                { id: 10, name: 'logo和海报设计', intro: ''},
                { id: 11, name: 'MV拍摄', intro: ''},
                { id: 12, name: '实体宣传品设计', intro: ''}
              ]
            },
            { id: 13, name: '加入节目组·乍至', intro: '这是B', 
              children: [
                { id: 14, name: '舞蹈教学', intro: ''},
                { id: 15, name: 'Dresscode拍摄', intro: ''},
                { id: 16, name: '舞伴匹配', intro: ''},
                { id: 17, name: '现场节目', intro: ''}
              ]
            },
          ]
        }],

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
})