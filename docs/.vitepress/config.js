const nav = [
  { text: "开始使用", link: "/started/01.简介.html", activeMatch: "/started/01.简介.html"},
  { text: "Api", link: "/started/apiDocs/01.通用.html", activeMatch: "/started/apiDocs/"},
  { text: "Ned", link: "https://www.wangez.site/"},
  {
    text: "GitHub", link: "https://github.com/wangenze267/debugging-tools"},
];

module.exports = {
  lang: 'en-US',
  title: "Debugging tools",
  titleTemplate: "A convenient interface debugging tool",
  description: "A convenient interface debugging tool",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/tool.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    logo: './tool.png',
    siteTitle: 'Debugging tools',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    sidebar: {
      '/started/':[
        {
          text: '开始',
          items: [
            {text: '简介', link: '/started/01.简介.html'},
            {text: '快速上手', link: '/started/02.快速上手.html'}
          ],
        },
        {
          text: 'Api',
          items: [
            {text: '通用', link: '/started/apiDocs/01.通用.html'},
            {text: '文件', link: '/started/apiDocs/02.文件.html'},
            {text: '数据', link: '/started/apiDocs/03.数据.html'},
            {text: '格式转换', link: '/started/apiDocs/04.格式转换.html'}
          ]
        }
      ],
    },
    nav,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ned",
    },
  },
};
