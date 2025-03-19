import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/vitest.setup.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
} as UserConfig);
