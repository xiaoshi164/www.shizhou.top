# www.shizhou.top

`www.shizhou.top` 当前是一个以个人表达为核心的静态站点仓库。

首页 [`index.html`](./index.html) 已重构为科幻风格的个人博客首页，围绕「内容输出 + 项目展示 + 后续 API 接入」设计；仓库中同时保留了一组旧的模板型内页，便于后续继续替换或二次改造。

## 项目定位

- 个人博客 / 个人品牌展示站
- 纯静态实现，无构建步骤、无后端依赖
- 首页优先完成视觉与信息架构，后续可继续接入内容 API
- 支持直接部署到任意静态托管平台

## 当前状态

- 首页使用独立样式 [`static/css/scifi-blog.css`](./static/css/scifi-blog.css)
- 首页交互与本地数据渲染位于 [`static/js/scifi-blog.js`](./static/js/scifi-blog.js)
- 首页内容模块已经按数据结构组织，便于未来替换为真实接口
- 其余页面仍保留原始模板结构，可作为后续重构基础

## 页面说明

- `index.html`：当前主入口，科幻风格个人博客首页
- `about-us.html`：关于页模板
- `services.html` / `services-details.html`：服务列表与详情模板
- `portfolio.html` / `portfolio-detaills.html`：作品集页面模板
- `blog.html` / `blog-detail.html`：博客列表与详情模板
- `contact-us.html`：联系页模板
- `说明.htm`：模板源文件附带的历史说明页，非站点正式内容

## 目录结构

```text
.
├─ index.html
├─ about-us.html
├─ services.html
├─ services-details.html
├─ portfolio.html
├─ portfolio-detaills.html
├─ blog.html
├─ blog-detail.html
├─ contact-us.html
├─ README.md
├─ 说明.htm
└─ static
   ├─ css
   ├─ js
   ├─ font
   ├─ image
   └─ picture
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

- 将旧模板内页统一改造成与首页一致的视觉语言
- 为博客、项目、时间线接入真实 API 或 CMS
- 增加文章详情、归档页、标签页、订阅模块
- 清理旧模板遗留素材与历史说明文件
