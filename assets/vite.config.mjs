import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['css/app.scss', 'js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'path/to/dist/'
    }
});
