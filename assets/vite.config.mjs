import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        js: 'js/main.js',
        scss: 'scss/main.scss',
      },
      output: {
        entryFileNames: chunk => 'js/main.js',
        assetFileNames: assetInfo => {
          const name = assetInfo?.name || assetInfo?.info?.sourceFilename || '';
          if (name.endsWith('.css')) {
            return 'css/main.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'fonts/*', dest: 'fonts' },
        { src: 'images/*', dest: 'images' },
      ],
    }),
  ],
});
