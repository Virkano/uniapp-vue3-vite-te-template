import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [
    {
      name: 'Home',
      path: 'pages/index/index',
      style: {
        // "navigationBarTitleText": "首页"
        navigationStyle: 'custom',
        // enablePullDownRefresh: true,
      },
      meta: {
        ignoreAuth: false,
        tabBar: true,
      },
    },
    {
      name: 'About',
      path: 'pages/about/index',
      style: {
        navigationBarTitleText: '关于',
      },
      meta: {
        ignoreAuth: false,
        tabBar: true,
      },
    },
    {
      name: 'Login',
      path: 'pages/login/index',
      style: {
        navigationBarTitleText: '登录',
      },
      meta: {
        ignoreAuth: false,
      },
    },
    {
      name: 'NotFound',
      path: 'pages/notFound/404',
      style: {
        navigationBarTitleText: 'Not Found',
      },
      meta: {
        ignoreAuth: false,
      },
    },
  ],
  subPackages: [
    {
      root: 'subModules1',
      pages: [
        {
          path: 'index',
          style: {
            navigationBarTitleText: 'test1',
          },
          meta: {
            ignoreAuth: false,
          },
        },
        {
          name: 'pinia',
          path: 'demo/pinia',
          style: {
            navigationBarTitleText: 'pinia + 持久化',
          },
          meta: {
            ignoreAuth: false,
          },
        },
        {
          name: 'weixin-share',
          path: 'demo/mp-weixin-share',
          style: {
            navigationBarTitleText: '微信分享',
          },
          meta: {
            ignoreAuth: false,
          },
        },
        {
          name: 'page-main',
          path: 'demo/main',
          style: {
            navigationBarTitleText: '页面测试',
            navigationStyle: 'custom',
          },
          meta: {
            ignoreAuth: false,
          },
        },
      ],
    },
  ],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F2F2F2',
    backgroundColor: '#F2F2F2',
    navigationStyle: 'default',
    renderingMode: 'seperated',
    pageOrientation: 'portrait',
  },
  tabBar: {
    color: '#474747',
    selectedColor: '#9BC6FC',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/tabBar/home.png',
        selectedIconPath: 'static/images/tabBar/selectedHome.png',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: 'static/images/tabBar/about.png',
        selectedIconPath: 'static/images/tabBar/selectedAbout.png',
      },
    ],
  },
  easycom: {
    autoscan: true,
    custom: {
      '^u-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue',
      'fly-(.*)': '@/components/fly-$1/fly-$1.vue',
    },
  },
})
