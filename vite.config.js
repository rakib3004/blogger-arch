import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
const BASE_URL = process.env.REACT_APP_BASE_URL;
export default defineConfig({
  server: {
    proxy: {
      // '/api/v1': 'http://192.168.1.113:3000',
      // '/api/v1': 'https://nice-pink-hen-cap.cyclic.app',

      '/api/v1': 'https://blogger-mint.onrender.com',

    },
  },
  plugins: [react()],
});
