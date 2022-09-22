// 因为导航栏和侧边栏的代码较多，所以抽离出来
import myNav from './nav'
import mySideBar from './sidebar'

module.exports = {
  title: "Lucky Mouse's blog", // 网站标题
  description: 'vitepress blog', // 网站描述，会生成 <meta> 标签
  author: 'Lucky Mouse', // 作者
  base: '/blog/', // 根目录， 如果计划部署到 xxx.github.io/blog/，那么应该设置为 '/blog/'
  markdown: {
    linNumbers: true, // 显示代码行数
  },
  search: true,
  lastUpdated: true, // 以git提交的时间为更新时间
  themeConfig: {
    siteTitle: 'Lucky Mouse Blog',
    nav: myNav, // 导航栏配置
    sidebar: mySideBar, // 侧边栏配置
    author: 'Lucky Mouse',
    lastUpdatedText: '上次更新时间', // 最后更新时间文本
    logo: '/logo.jpg', // 导航栏左侧头像
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }, // 上下篇文本
    footer: {
      copyright: 'Copyright @ 2022-present Lucky-Mouse'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucky-mouse-14' }
    ], // 信息栏展示社交信息 
  }
}