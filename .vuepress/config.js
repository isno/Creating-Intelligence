import { viteBundler, defaultTheme, defineUserConfig } from 'vuepress';
import { containerPlugin } from '@vuepress/plugin-container'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { readingTimePlugin } from 'vuepress-plugin-reading-time2'

export default defineUserConfig({
	title: '人工智能的第一性原理',
  bundler: viteBundler(),
  plugins: [
    mdEnhancePlugin({
      // 启用脚注
      footnote: true,
      katex: true,
      sub: true,
    }),
    containerPlugin({
        type: 'center'
    }),
    containerPlugin({
        type: 'right'
    }),
    readingTimePlugin({
    // your options
    }),
],
  theme: defaultTheme({
    
  	navbar: [{
                text: '首页',
                link: '/'
            },{
                text: '作者',
                link: 'https://github.com/isno'
            },
            {
                text: '《深入高可用系统原理与设计》',
                link: 'https://www.thebyte.com.cn'
            },

  			{
                text: '讨论',
                link: 'https://github.com/isno/Creating-Intelligence/discussions'
            },
            {
                text: 'GitHub仓库',
                link: 'https://github.com/isno/Creating-Intelligence'
            }
            ],
             sidebar: [
            	'/intro.md',
                {
                    text: '第一章：计算的进化',
                    link: "/chapter-01/preface.md",
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/chapter-01/all-things-are-number.md',
                        '/chapter-01/logic.md',
                        '/chapter-01/axiomatic-system.md',
                        '/chapter-01/the-dream-of-Leibniz.md',
                        '/chapter-01/revival-of-mathematical-logic.md',
                        '/chapter-01/axiomatic-crisis.md',
                        '/chapter-01/conclusion.md',
                    ]
                }
            ]
  }),
})