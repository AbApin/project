const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  proxy: {
    '/campaigns': {
      target: 'http://localhost:8081/campaigns/',
      ws: true,
      changeOrigin: true,
    },
  },
});
