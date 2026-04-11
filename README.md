# www.shizhou.top

`www.shizhou.top` 当前是一个以个人表达为核心的静态站点仓库。

首页 [`index.html`](./index.html) 已重构为科幻风格的个人博客首页，围绕「内容输出 + 项目展示 + 后续 API 接入」设计。当前仓库还包含与首页同一视觉语言的归档页 [`archive.html`](./archive.html) 和内容详情页 [`article.html`](./article.html)，三者共用同一套静态数据源与样式协议。

## 项目定位

- 个人博客 / 个人品牌展示站
- 纯静态实现，无构建步骤、无后端依赖
- 首页优先完成视觉与信息架构，后续可继续接入内容 API
- 支持直接部署到任意静态托管平台

## 当前状态

- 首页使用独立样式 [`static/css/scifi-blog.css`](./static/css/scifi-blog.css)
- 内容页扩展样式位于 [`static/css/content-pages.css`](./static/css/content-pages.css)
- 首页交互与本地数据渲染位于 [`static/js/scifi-blog.js`](./static/js/scifi-blog.js)
- 共享内容数据位于 [`static/js/content-data.js`](./static/js/content-data.js)
- 归档页与详情页逻辑位于 [`static/js/content-pages.js`](./static/js/content-pages.js)
- 首页内容模块已经按数据结构组织，便于未来替换为真实接口
- 已补归档页与详情页，首页到内容阅读链路已经打通

## 页面说明

- `index.html`：当前主入口，科幻风格个人博客首页
- `archive.html`：内容归档页，负责主题筛选与内容索引
- `article.html`：内容详情页，负责完整正文阅读与相关文章跳转

## 目录结构

```text
.
├─ archive.html
├─ article.html
├─ index.html
├─ README.md
└─ static
   ├─ css
   │  ├─ content-pages.css
   │  └─ scifi-blog.css
   ├─ js
   │  ├─ content-data.js
   │  ├─ content-pages.js
   │  └─ scifi-blog.js
   └─ font
```

## 本地预览

这是一个纯静态项目，直接打开 `index.html` 即可查看。

如果你希望用本地 HTTP 服务预览，推荐在仓库根目录执行：

```bash
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 首页设计要点

- 中文内容表达 + 英文界面标记
- 深空控制台风格视觉系统
- 首页由 Hero、Signal、Feed、Stack、Timeline、API Dock 等模块组成
- 归档页负责筛选与索引，详情页负责正文阅读与相关文章串联
- 内容、项目、短讯和时间线都通过本地 JavaScript 对象渲染
- 后续可平滑切换到 `/api/posts`、`/api/projects`、`/api/timeline` 等接口

## 部署建议

可直接部署到以下静态托管平台：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- 任意 Nginx / 宝塔静态站点环境

## 后续可继续完善

- 为博客、项目、时间线接入真实 API 或 CMS
- 在归档页上继续扩展标签、搜索、分页与年份维度
- 为详情页补目录高亮、上一篇/下一篇和项目详情模板
