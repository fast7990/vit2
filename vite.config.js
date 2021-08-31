import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

const root = process.cwd();
function pathResolve(dir) {
  return resolve(__dirname, '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root,
  server: {
    port: 8081,
    // proxy: {
    //     '/api': {
    //         target: '',
    //         changeOrigin: true
    //     }
    // },
    // https:true,//开启http2
    open: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: [{
      find: "@",
      replacement: pathResolve('src')
    }]
  }
})
