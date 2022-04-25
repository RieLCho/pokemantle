import { defineNuxtConfig } from 'nuxt'
import fluentPlugin from 'rollup-plugin-fluent-vue'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000'
    }
  },
  vite: {
    plugins: [fluentPlugin()],
    server: {
      hmr: {
        protocol: 'ws', // TODO: parse from env var
        port: 50443,
        clientPort: 50443,
      },
    },
  }
})