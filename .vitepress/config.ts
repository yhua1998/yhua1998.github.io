import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yhua's awesome",
  description: "note site",
  cleanUrls:true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/interview/alibaba' }
    ],

    sidebar: [
      {
        text: 'Interview',
        link: '/interview/',
        items: [
          {
            text: 'Alibaba',
            link: '/interview/alibaba'
          }
        ]
      },
      {
        text: 'Javascript',
        items: []
      },
      {
        text: 'React',
        items: []
      },
      {
        text: 'Algorithm',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yhua1998' }
    ]
  }
})
