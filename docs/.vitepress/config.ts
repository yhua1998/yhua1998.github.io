import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YHUA's",
  description: "基础是进阶的前提",
  cleanUrls:true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   // { text: 'Home', link: '/' },
    //   // { text: 'Notes', link: '/markdown-examples' }
    // ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yhua1998' }
    ]
  }
})
