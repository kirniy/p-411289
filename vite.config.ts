import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  plugins: [
    react(),
    mode === 'development' && [
      componentTagger({
        prefix: process.env.VERSION === 'v1' ? 'v1-' : 'v2-'
      }),
    ],
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@v1": path.resolve(__dirname, "./src/versions/v1"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        v1: path.resolve(__dirname, 'src/versions/v1/index.html')
      },
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query'
          ],
          'ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
            // Add other UI component imports
          ]
        }
      }
    }
  }
}));
