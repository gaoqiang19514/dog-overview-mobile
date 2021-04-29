export const px2hd = (px) => {
  if (window.px2hd) return window.px2hd(px);

  if (!px) return 0;

  const ONE_REM =
    parseInt(document.documentElement.style.fontSize || '100', 10) || 100;
  const SCALE = ONE_REM / 100;

  return Number((px * SCALE).toFixed(1));
};

/**
 * 砍掉关键字列表
 * @param {String} str
 * @param {Array} keyList
 * @return {String}
 */
export function cutKeyword(str, keyList) {
  try {
    keyList = keyList.sort((curr, next) => next.length - curr.length);
    for (const key of keyList) {
      if (str.indexOf(key) > -1) {
        return str.replace(key, '');
      }
    }
  } catch (err) {
    return str;
  }

  return str;
}

/**
 * 将数据按照sample进行排序
 * @param {String} data
 * @param {String} data[0].name
 * @return {Object}
 */
export function areaSort(data = []) {
  // 顺序
  const sample = [
    '福田',
    '罗湖',
    '盐田',
    '南山',
    '宝安',
    '龙岗',
    '龙华',
    '坪山',
    '光明',
    '大鹏',
  ];

  return sample.map((areaName) => {
    const obj = data.find((item) => item.name === areaName);

    if (obj) {
      return obj;
    }

    return {
      name: areaName,
    };
  });
}
