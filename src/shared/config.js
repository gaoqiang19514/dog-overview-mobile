import * as echarts from 'echarts';

import { px2hd } from '@/shared/utils';

const tooltipPadding = [px2hd(5), px2hd(15), px2hd(5), px2hd(15)];

export function getBarPrimaryOption(data) {
  const axisLabelColor = '#878C96';
  const axisSplitLineColor = '#E8E8E8';

  return {
    grid: {
      top: px2hd(40),
      right: px2hd(40),
      bottom: px2hd(40),
      left: px2hd(40),
      containLabel: true,
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}',
      padding: tooltipPadding,
      textStyle: {
        fontSize: px2hd(24),
      },
    },
    xAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: axisSplitLineColor,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: [
      {
        axisLine: {
          show: false,
          lineStyle: {
            color: axisSplitLineColor,
          },
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: axisSplitLineColor,
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          verticalAlign: 'bottom',
          align: 'left',
          padding: [0, 0, px2hd(20), px2hd(-5)],
          inside: true,
          color: (value, index) => {
            let color = '#1BABFF';

            if (index === 0) {
              color = '#F87F00';
            }

            return color;
          },
          fontSize: px2hd(30),
        },
        inverse: true,
        data: data.map((item, index) => `0${index + 1} ${item.name}`),
      },
      {
        axisLine: {
          show: false,
          lineStyle: {
            color: axisSplitLineColor,
          },
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: axisSplitLineColor,
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          verticalAlign: 'bottom',
          align: 'right',
          padding: [0, 0, px2hd(20), px2hd(-5)],
          inside: true,
          color: (value, index) => {
            let color = '#1BABFF';

            if (index === 0) {
              color = '#F87F00';
            }

            return color;
          },
          fontSize: px2hd(30),
          fontWeight: 'bolder',
        },
        data: data.map((item) => {
          return {
            value: item.value,
          };
        }),
      },
    ],
    series: [
      {
        name: '数量',
        type: 'bar',
        barWidth: px2hd(24),
        itemStyle: {
          color: '#1BABFF',
        },
        showBackground: true,
        backgroundStyle: {
          borderColor: '#EAEFF7',
        },
        data: data.map((item, index) => {
          let color = '#1BABFF';

          if (index === 0) {
            color = '#F87F00';
          }

          return {
            value: item.value,
            itemStyle: {
              color,
            },
          };
        }),
      },
    ],
  };
}

export function getPieOption(data) {
  return {
    color: [
      '#F8C642',
      '#F88842',
      '#F75E3F',
      '#EE4E78',
      '#4942F8',
      '#1B78FF',
      '#1BABFF',
    ],

    tooltip: {
      trigger: 'item',
      formatter: '{b} <br/>{a}: {c} ({d}%)',
      padding: tooltipPadding,
      textStyle: {
        fontSize: px2hd(24),
      },
    },
    legend: {
      orient: 'vertical',
      left: px2hd(40),
      top: 'middle',
      itemWidth: px2hd(22),
      itemHeight: px2hd(22),
      itemGap: px2hd(25),
      icon: 'circle',
      textStyle: {
        padding: [0, 0, 0, px2hd(15)],
        color: '#878C96',
        fontSize: px2hd(26),
      },
      data: data.map((item) => item.name),
    },
    series: [
      {
        name: '数量',
        type: 'pie',
        center: ['70%', '50%'],
        radius: ['52%', '67%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        itemStyle: {
          borderRadius: px2hd(10),
          borderColor: '#fff',
          borderWidth: px2hd(10),
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
}

export function getBarOption(data) {
  const axisLabelColor = '#878C96';
  const axisSplitLineColor = '#E8E8E8';

  return {
    grid: {
      top: px2hd(60),
      right: px2hd(40),
      bottom: px2hd(40),
      left: px2hd(40),
      containLabel: true,
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}',
      padding: tooltipPadding,
      textStyle: {
        fontSize: px2hd(24),
      },
    },
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: axisSplitLineColor,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: axisLabelColor,
        fontSize: px2hd(22),
        formatter: (value) => {
          const arr = value.split('');
          return arr.reduce((str, char) => `${str}${char}\n`, '');
        },
      },
      data: data.map((item) => item.name),
    },
    yAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: axisSplitLineColor,
        },
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: axisSplitLineColor,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: axisLabelColor,
        fontSize: px2hd(22),
      },
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        barWidth: px2hd(24),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#6CC9FF',
            },
            {
              offset: 1,
              color: '#1BABFF',
            },
          ]),
        },
        data: data.map((item) => item.value),
      },
    ],
  };
}
