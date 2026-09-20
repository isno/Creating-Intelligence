import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/layout.vue'

export default defineClientConfig({
  enhance({ router }) {
    // 动态导入页面 chunk 失败时，强制整页进入目标路由，避免 SPA 空白
    router.onError((error, to) => {
      const message = error?.message || String(error)
      if (
        message.includes('Failed to fetch dynamically imported module') ||
        message.includes('Importing a module script failed') ||
        message.includes('Unable to preload CSS')
      ) {
        const target = to?.fullPath || window.location.pathname
        window.location.assign(target)
      }
    })

    if (typeof window !== 'undefined') {
      window.addEventListener('vite:preloadError', (event) => {
        event.preventDefault()
        window.location.reload()
      })
    }
  },
  layouts: {
    Layout,
  },
})
