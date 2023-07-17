import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yhua's awesome",
  description: "note site",
  cleanUrls: true,
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
          },
          {
            text: 'Byte Dance',
            link: '/interview/byte'
          }
        ]
      },
      {
        text: 'Golang',
        link: '/golang/',
        items: [
          {
            text: 'Effective',
            link: '/golang/effective'
          }
        ]
      },
      {
        text: 'JS && CSS && HTML',
        items: [
          {
            text:'CSS',
            link: '/css/'
          }
        ]
      },
      {
        text: 'Typescript',
        link: '/typescript/',
        items: []
      },
      {
        text: 'React',
        link: '/react/'
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
