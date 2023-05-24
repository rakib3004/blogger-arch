import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
const BASE_URL = process.env.REACT_APP_BASE_URL;
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': 'http://192.168.1.113:3000',

      // '/api/v1': 'https://blogger-mint.onrender.com',

    },
  },
  plugins: [react()],
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });