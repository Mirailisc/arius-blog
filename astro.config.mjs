// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import path from 'path'
import { fileURLToPath } from 'url'

import sentry from '@sentry/astro'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.arius.cloud',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    sentry({
      dsn: 'https://55913ddacc8875b1bbc31aca0493c063@o4508484759453696.ingest.us.sentry.io/4509169237295104',
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sourceMapsUploadOptions: {
        project: 'arius-blog',
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  vite: {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
})
