import echarts from 'echarts';

export const px2hd = (px) => {
  if (window.px2hd) return window.px2hd(px);

  if (!px) return 0;

  const ONE_REM =
    parseInt(document.documentElement.style.fontSize || '100', 10) || 100;
  const SCALE = ONE_REM / 100;

  return Number((px * SCALE).toFixed(1));
};

export function getBarPrimaryOption() {
  const axisLabelColor = '#878C96';
  const axisSplitLineColor = '#E8E8E8';

  const data = [
    { value: 35509, name: '贵宾' },
    { value: 10094, name: '金毛' },
    { value: 8723, name: '比熊' },
    { value: 8485, name: '博美' },
    { value: 7963, name: '柯基' },
  ];

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
      padding: px2hd(10),
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
          color: '#333',
          fontSize: px2hd(30),
        },
        data: data.map((item) => item.name),
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
          color: '#1BABFF',
          fontSize: px2hd(30),
          fontWeight: 'bolder',
        },
        data: data.map((item) => item.value),
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
        data: data,
      },
    ],
  };
}

export function getPieOption() {
  const data = [
    { value: 335, name: '10-19岁' },
    { value: 310, name: '20-29岁' },
    { value: 234, name: '30-39岁' },
    { value: 135, name: '40-49岁' },
    { value: 1548, name: '50-59岁' },
    { value: 1548, name: '60-69岁' },
    { value: 1548, name: '≥70岁' },
  ];

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
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      padding: px2hd(10),
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
        name: '访问来源',
        type: 'pie',
        center: ['68%', '50%'],
        radius: ['52%', '67%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
}

export function getBarOption() {
  const axisLabelColor = '#878C96';
  const axisSplitLineColor = '#E8E8E8';
  return {
    grid: {
      top: px2hd(80),
      right: px2hd(40),
      bottom: px2hd(40),
      left: px2hd(40),
      containLabel: true,
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}',
      padding: px2hd(10),
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
      },
      data: [
        '宝安',
        '龙岗',
        '坪山',
        '福田',
        '南山',
        '龙华',
        '盐田',
        '罗湖',
        '大鹏',
        '光明',
      ],
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
        data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10],
      },
    ],
  };
}
