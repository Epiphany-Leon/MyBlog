import { defineConfig } from 'vitepress'
// import type { ThemeConfig } from 'your-theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "少辞心斋",
  description: "Project for Blog",
  lastUpdated: true,
  ignoreDeadLinks: true,
  base: '/MyBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/ink.png',
    siteTitle: '少辞心斋',
    nav: [
      { text: 'Home', link: '/' },
      {text: 'About', link: 'https://epiphany-leon.github.io/site_lih/'},
      { 
        text: 'Blog', 
        items: [
          { text: '年度总结', link: '/年度总结'},
          { text: '记录', link: '/记录'},
          { text: '看世界', link: '/看世界'},
          { text: '书影音', link: '/书影音'}
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    docFooter: { prev: '上一篇', next: '下一篇' },

    lastUpdatedText: 'Last Updated',

    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: '年度总结', link: '/年度总结' },
          { text: '记录', link: '/记录' },
          { text: '看世界', link: '/看世界' },
          { text: '书影音', link: '/书影音' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Epiphany-Leon/MyBlog' },
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"><path d="M 19 6 C 9.625 6 2 12.503906 2 20.5 C 2 24.769531 4.058594 28.609375 7.816406 31.390625 L 5.179688 39.304688 L 13.425781 34.199219 C 15.714844 34.917969 18.507813 35.171875 21.203125 34.875 C 23.390625 39.109375 28.332031 42 34 42 C 35.722656 42 37.316406 41.675781 38.796875 41.234375 L 45.644531 45.066406 L 43.734375 38.515625 C 46.3125 36.375 48 33.394531 48 30 C 48 23.789063 42.597656 18.835938 35.75 18.105469 C 34.40625 11.152344 27.367188 6 19 6 Z M 13 14 C 14.101563 14 15 14.898438 15 16 C 15 17.101563 14.101563 18 13 18 C 11.898438 18 11 17.101563 11 16 C 11 14.898438 11.898438 14 13 14 Z M 25 14 C 26.101563 14 27 14.898438 27 16 C 27 17.101563 26.101563 18 25 18 C 23.898438 18 23 17.101563 23 16 C 23 14.898438 23.898438 14 25 14 Z M 34 20 C 40.746094 20 46 24.535156 46 30 C 46 32.957031 44.492188 35.550781 42.003906 37.394531 L 41.445313 37.8125 L 42.355469 40.933594 L 39.105469 39.109375 L 38.683594 39.25 C 37.285156 39.71875 35.6875 40 34 40 C 27.253906 40 22 35.464844 22 30 C 22 24.535156 27.253906 20 34 20 Z M 29.5 26 C 28.699219 26 28 26.699219 28 27.5 C 28 28.300781 28.699219 29 29.5 29 C 30.300781 29 31 28.300781 31 27.5 C 31 26.699219 30.300781 26 29.5 26 Z M 38.5 26 C 37.699219 26 37 26.699219 37 27.5 C 37 28.300781 37.699219 29 38.5 29 C 39.300781 29 40 28.300781 40 27.5 C 40 26.699219 39.300781 26 38.5 26 Z"></path> </svg>'}, link: 'http://mp.weixin.qq.com/mp/homepage?__biz=MzkxNjMxODc3Nw==&hid=1&sn=29646593c02cb16fe5b7f61b9180fb49&scene=18#wechat_redirect', ariaLabel: 'cool link'}
    ]
  }
})
