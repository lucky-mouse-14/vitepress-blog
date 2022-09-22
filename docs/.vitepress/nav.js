export default [
  { text: '首页', link: '/' },
  {
    text: '前端日记',
    items: [
      {
        items: [
          { text: 'Vue2', link: '/front/vue2/' },
          { text: 'Vue3', link: '/front/vue3/' },
        ],
      },
      {
        items: [
          { text: 'React', link: '/front/react/' }
        ],
      },
      {
        items: [
          { text: 'Flutter', link: '/front/flutter/' }
        ],
      },
      {
        items: [
          { text: 'uni-app', link: '/front/uni-app/' },
          { text: 'Taro', link: '/front/taro/' }
        ]
      },
      {
        items: [
          { text: 'Three.js', link: '/front/threejs/' }
        ]
      }
    ]
  },
  {
    text: '后端日记',
    items: [
      {
        items: [
          { text: 'Node', link: '/back/node/' },
          { text: 'Koa', link: '/back/koa/' },
        ]
      },
      {
        items: [
          { text: 'Java', link: '/back/java/' },
        ]
      },
      {
        items: [
          { text: 'Node', link: '/back/python/' },
        ]
      }
    ]
  },
  { text: '📘 学习', link: '/learns/Kettle下载与安装' },
  { text: '💼 开箱即用', link: '/uses/' },
  { text: '📁 实战项目', link: '/cases/' },
  { text: 'ℹ️ 关于', link: '/about/' },
]