import { viteBundler, defaultTheme, defineUserConfig } from 'vuepress';
import { containerPlugin } from '@vuepress/plugin-container'

export default defineUserConfig({
	title: '创造智慧 - AI 系统的原理与实现',
  bundler: viteBundler(),
   plugins: [
     containerPlugin({
            type: 'center'
        }),
        containerPlugin({
            type: 'right'
        }),
   ],
  theme: defaultTheme({
    
  	navbar: [{
                text: '首页',
                link: '/'
            },{
                text: '作者',
                link: '/author.md'
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
              '/Appendix-1.md',
            	'/intro.md',
              '/chapter-01/computability.md',
              '/chapter-01/Turing-machine.md',
              '/chapter-01/Dartmouth-Conference.md',
              '/chapter-01/M-P.md',
              '/chapter-01/Perceptron.md',
              '/chapter-03/Ex-Prodigy.md'
            ]
  }),
})