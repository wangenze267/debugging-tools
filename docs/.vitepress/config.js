const { getChildren } = require("./utils/autoSidebar");
const getDirectory = (ele) => getChildren("./docs", ele);
const nav = [
    { text: "快速开始", link: "/started/", activeMatch: "/started/"},
  { text: "Ned", link: "https://www.wangez.site/"},
  {
    text: "GitHub", link: "https://github.com/wangenze267/debugging-tools"},
];
const sidebar = {};
nav.forEach(({ text, link }) => {
    console.log(text,link)
  if (!link) return; // const link = item.text;
  link = link.split("/")[1];
  sidebar[`/${link}`] = [{ text, items: getDirectory(link) }]; // sidebar.push({text,items:getDirectory(link.replaceAll('/',""))})
});

module.exports = {
  title: "Debugging tools",
  description: "",
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
    sidebar,
    nav,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ned",
    },
  },
};
