import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  options = {
    backgroundColor: '#2c343c',

    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Counters',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'C-1' },
          { value: 310, name: 'C-2' },
          { value: 274, name: 'C-3' },
          { value: 235, name: 'C-4' },
          { value: 400, name: 'C-5' }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  Lineoptions = {
    title: {
      text: '库存量变化',
      subtext: '纯属虚构',
      x: "center"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 次'
      }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
      }
    ]
  };
  chartOptions = {
    title: {
      text: '库存金额变化',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: "{b}月{a}:{c}"
    },
    grid: {

      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }
}
