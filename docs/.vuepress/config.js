module.exports = {
    base:'/GULU-program/',
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
          {text: '主页', link: '/'},
          {text: '文档', link: 'https://www.vuepress.cn/guide/getting-started.html'},
          {text: '我的GitHub', link: 'https://github.com/kinderzyc?tab=repositories'},
        ],
        sidebar: [
          {
            title: '入门',
            children: [
              '/install/',
              '/get-started/',
            ]
          },
          {
            title: '组件',
            children:[
                '/components/button',
                '/components/grid',
                '/components/input',
                '/components/layout',
                '/components/popover',
                '/components/tabs',
                '/components/toast'
            ]
        }
        ]
      }
  }