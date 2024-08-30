import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

const host = process.env.TAURI_DEV_HOST

export default defineConfig({
    plugins: [sveltekit()],
    /**
     * Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
     * 
     * 1. prevent vite from obscuring rust errors
     */
    clearScreen: false,
    /**
     * 2. tauri expects a fixed port, fail if that port is not available
     */
    server: {
        port: 5173,
        strictPort: true,
        host: host || false,
        hmr: host
            ? {
                protocol: "ws",
                host,
                port: 5173
            }
            : undefined,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ["**/src-tauri/**"],
        }
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
})
