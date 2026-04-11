const contentMap = {
  posts: [
    {
      badge: "Product Log",
      status: "Live",
      title: "把个人博客改造成一套可扩展的内容控制台",
      excerpt: "首页不再只是展示信息，而是承担内容分发、项目曝光和后续接口扩展的中控功能。",
      meta: "2026.04 / 6 min read",
      linkLabel: "Read Protocol"
    },
    {
      badge: "Frontend Lab",
      status: "Build",
      title: "用纯 CSS 建出深空面板，而不是堆一层模板感组件",
      excerpt: "利用网格背景、氛围光、霓虹描边和玻璃面板，把未来感建立在结构与节奏上。",
      meta: "2026.04 / Visual System",
      linkLabel: "Open Lab"
    },
    {
      badge: "AI Workflow",
      status: "Sync",
      title: "如何让写作、编码和实验记录进入同一条工作流",
      excerpt: "把碎片想法沉淀成日志、项目与时间线，让个人站点持续输出而不是一次性装修。",
      meta: "2026.04 / Workflow",
      linkLabel: "Trace Signal"
    }
  ],
  projects: [
    {
      badge: "Project Core",
      status: "Stable",
      title: "Neural Archive",
      excerpt: "当前主页项目，本地静态渲染，后续可切换为文章 API、项目 API 和状态 API 驱动。",
      meta: "Static Front / Ready for API",
      linkLabel: "Inspect Node"
    },
    {
      badge: "Interface Study",
      status: "Draft",
      title: "Control Panel UI Kit",
      excerpt: "为后续文章详情、归档页和项目详情页准备统一的控制台式卡片和信息层级。",
      meta: "Design System / In Progress",
      linkLabel: "View Layer"
    },
    {
      badge: "Automation",
      status: "Queued",
      title: "Content Pipeline",
      excerpt: "计划接入 CMS 或自建接口，将日志、短讯、时间线统一转为可部署的数据源。",
      meta: "CMS / API / Cache",
      linkLabel: "Queue Route"
    }
  ],
  notes: [
    {
      badge: "Short Signal",
      status: "Ping",
      title: "现在的首页已经可以当个人名片，不必再像公司官网。",
      excerpt: "视觉和文案都转向个人表达，进入站点后就能知道你在研究什么、输出什么。",
      meta: "Note 01",
      linkLabel: "Keep Reading"
    },
    {
      badge: "Short Signal",
      status: "Ping",
      title: "本地对象就是未来 API 的字段契约。",
      excerpt: "只要返回数据结构相同，渲染层几乎不用改，迁移成本会很低。",
      meta: "Note 02",
      linkLabel: "Review Schema"
    },
    {
      badge: "Short Signal",
      status: "Ping",
      title: "科幻感来自世界观和秩序，不只是发光效果。",
      excerpt: "如果信息架构混乱，再多特效也会像模板站。这一版先把秩序搭起来。",
      meta: "Note 03",
      linkLabel: "Open Insight"
    }
  ]
};

const timelineItems = [
  {
    date: "PHASE 01",
    title: "替换旧模板叙事",
    description: "移除企业服务型首页逻辑，把信息焦点切到个人内容输出、项目轨迹和工作流上。"
  },
  {
    date: "PHASE 02",
    title: "建立静态数据渲染层",
    description: "文章、项目、短讯、时间线全部通过 JavaScript 数据对象渲染，方便后续切 API。"
  },
  {
    date: "PHASE 03",
    title: "预留真实接口对接位",
    description: "页面结构已为 `/posts`、`/projects`、`/timeline` 等接口模式预留对应模块。"
  }
];

const apiBlueprint = [
  {
    method: "GET",
    path: "/api/posts",
    description: "返回文章列表，用于驱动首页日志区与后续归档页。"
  },
  {
    method: "GET",
    path: "/api/projects",
    description: "返回项目卡片、状态标签和链接信息，替换当前本地项目对象。"
  },
  {
    method: "GET",
    path: "/api/timeline",
    description: "返回个人更新航迹，可作为 changelog、roadmap 或最近动作流。"
  },
  {
    method: "GET",
    path: "/api/profile/status",
    description: "返回当前状态、关注主题和可联系入口，驱动英雄区控制台。"
  }
];

const feedGrid = document.getElementById("feed-grid");
const tabs = document.querySelectorAll(".feed-tab");
const timelineList = document.getElementById("timeline-list");
const apiList = document.getElementById("api-list");
const syncTime = document.getElementById("sync-time");
const yearMark = document.getElementById("year-mark");

function renderFeed(type) {
  const items = contentMap[type] || [];

  feedGrid.innerHTML = items.map((item) => `
    <article class="feed-card">
      <div class="feed-card-top">
        <span class="feed-badge">${item.badge}</span>
        <span class="feed-status">${item.status}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <div class="feed-footer">
        <span class="feed-meta">${item.meta}</span>
        <span class="feed-link">${item.linkLabel}</span>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  timelineList.innerHTML = timelineItems.map((item) => `
    <article class="timeline-item">
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

function renderApiList() {
  apiList.innerHTML = apiBlueprint.map((item) => `
    <div class="api-item">
      <div class="api-topline">
        <span class="api-method">${item.method}</span>
        <span class="api-path">${item.path}</span>
      </div>
      <p>${item.description}</p>
    </div>
  `).join("");
}

function bindTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((button) => button.classList.remove("is-active"));
      tab.classList.add("is-active");
      renderFeed(tab.dataset.feed);
    });
  });
}

function bindReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
}

function renderFooterMeta() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  syncTime.textContent = `LAST SYNC ${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  yearMark.textContent = String(now.getFullYear());
}

renderFeed("posts");
renderTimeline();
renderApiList();
bindTabs();
bindReveal();
renderFooterMeta();
