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
  resolve: {
    alias: [{
      find: "@",
      replacement: pathResolve('src')
    }]
  }
})
