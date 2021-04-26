export const px2hd = (px) => {
  if (window.px2hd) return window.px2hd(px);

  if (!px) return 0;

  const ONE_REM =
    parseInt(document.documentElement.style.fontSize || '100', 10) || 100;
  const SCALE = ONE_REM / 100;

  return Number((px * SCALE).toFixed(1));
};

export function getBarOption() {
  return {
    xAxis: {
      axisLabel: {
        fontSize: px2hd(22),
      },
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {
      axisLabel: {
        fontSize: px2hd(22),
      },
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
}

export function getPieOption() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      textStyle: {
        fontSize: px2hd(22),
      },
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };
}
