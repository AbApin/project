const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  proxy: {
    '/app': {
      target: 'http://localhost:5000/app/',
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
