import axios from './http';

export default {
  // 今日各区申办数量
  getArea: () => {
    return axios.get('/dog-business/count/today/init/0');
  },

  // 今日统计数据
  getStatistics: () => {
    return axios.get('/dog-business/count/today/init');
  },

  // Top5
  getTop5: () => {
    return axios.get('/dog-business/count/onlineBid/init1?type=0');
  },

  // 内涵芯片注射总数
  getChip: () => {
    return axios.get('/dog-business/count/onlineBid/init3?type=3');
  },

  // 养犬人年龄分布
  getAge: () => {
    return axios.get('/dog-business/count/onlineBid/init2?type=0');
  },

  // 今日
  getDataToday: () => {
    return axios.get('/dog-business/count/onlineBid/init3?type=0');
  },

  // 本月
  getDataMonth: () => {
    return axios.get('/dog-business/count/onlineBid/init3?type=1');
  },

  // 总数
  getDataTotal: () => {
    return axios.get('/dog-business/count/onlineBid/init3?type=3');
  },
};
