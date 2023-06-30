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
        text: 'Javascript',
        items: []
      },
      {
        text: 'Typescript',
        link: '/typescript/',
        items: []
      },
      {
        text: 'React',
        link: '/react/',
        items: [{
          text: 'Pure',
          link: '/react/pure'
        }]
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
