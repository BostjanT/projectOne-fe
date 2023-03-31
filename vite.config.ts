import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // CLIENT SETUP
    host: '127.0.0.1',
    port: 5173,

    // API SETUP
    proxy: {
      '/api': {
        target: {
          host: '127.0.0.1',
          port: 3000,
        },
        changeOrigin: true,
      },
    },
  },
});
