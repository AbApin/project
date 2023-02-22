const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  proxy: {
    '/campaigns': {
      target: 'http://localhost:8081/app/',
      ws: true,
      changeOrigin: true,
    },
    '/api': {
      target: 'http://localhost:5000/app/api/',
      ws: true,
      changeOrigin: true,
    },
  },
});
