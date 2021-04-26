import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@alitajs/hd'],
  hd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
