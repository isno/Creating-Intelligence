import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { commentPlugin } from '@vuepress/plugin-comment'
import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'

export default defineUserConfig({
  title: '人工智能的第一性原理',
  bundler: viteBundler(),
  plugins: [
    markdownExtPlugin({
      footnote: true,
    }),
    markdownMathPlugin({
      type: 'katex',
    }),
    markdownStylizePlugin({
      // 兼容文中 :::center / :::right 写法
      align: true,
      sub: true,
    }),
    readingTimePlugin(),
    // 注册 CommentService，避免自定义 Layout 渲染未知组件打断页面切换
    commentPlugin({
      provider: 'None',
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '作者',
        link: 'https://github.com/isno',
      },
      {
        text: '《深入高可用系统原理与设计》',
        link: 'https://www.thebyte.com.cn',
      },
      {
        text: '讨论',
        link: 'https://github.com/isno/Creating-Intelligence/discussions',
      },
      {
        text: 'GitHub仓库',
        link: 'https://github.com/isno/Creating-Intelligence',
      },
    ],
    // VuePress 2 侧边栏 object.link 需使用最终路由路径（.html）
    sidebar: [
      '/intro.html',
      {
        text: '第一章：计算的进化',
        link: '/chapter-01/preface.html',
        collapsible: false,
        children: [
          '/chapter-01/all-things-are-number.html',
          '/chapter-01/logic.html',
          '/chapter-01/axiomatic-system.html',
          '/chapter-01/the-dream-of-Leibniz.html',
          '/chapter-01/revival-of-mathematical-logic.html',
          '/chapter-01/axiomatic-crisis.html',
          '/chapter-01/conclusion.html',
        ],
      },
    ],
  }),
})
