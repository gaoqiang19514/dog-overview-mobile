import axios from './http';

export default {
  // 今日各区申办数量
  getArea: () => {
    return axios.post('/dog-business/count/today/init/0');
  },

  // 今日统计数据
  getStatistics: () => {
    return axios.post('/dog-business/count/today/init');
  },

  // Top5
  getStatistics: () => {
    return axios.post('/dog-business/count/onlineBid/init1?type=0');
  },

  // 内涵芯片注射总数
  getStatistics: () => {
    return axios.post('/dog-business/count/onlineBid/init3?type=3');
  },

  // 养犬人年龄分布
  getStatistics: () => {
    return axios.post('/dog-business/count/onlineBid/init2?type=0');
  },
};
