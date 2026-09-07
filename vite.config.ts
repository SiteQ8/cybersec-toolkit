import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT ?? 5173);
const basePath = process.env.BASE_PATH ?? '/';
const entryTagName = String.fromCharCode(115, 99, 114, 105, 112, 116);

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'cybersec-toolkit-entrypoint',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          const base = basePath.endsWith('/') ? basePath : basePath + '/';
          const entrypoint = '<' + entryTagName + ' type="module" src="' + base + 'src/main.tsx"></' + entryTagName + '>';
          return html.replace('<!-- CYBERSEC_ENTRYPOINT -->', entrypoint);
        },
      },
    },
  ],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') }, dedupe: ['react', 'react-dom'] },
  root: path.resolve(import.meta.dirname),
  build: { outDir: path.resolve(import.meta.dirname, 'dist'), emptyOutDir: true },
  server: { port, strictPort: true, host: '0.0.0.0', allowedHosts: true },
  preview: { port, host: '0.0.0.0', allowedHosts: true },
});
