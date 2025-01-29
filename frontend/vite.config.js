import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//development
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:4000',
//         changeOrigin: true,
//       },
//     },
//   },
// });

//production
export default defineConfig({
  plugins: [react()],
});