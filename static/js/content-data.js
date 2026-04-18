window.siteData = {
  posts: [
    {
      slug: "project-index-from-d-drive",
      badge: "Project Index",
      status: "Live",
      category: "Projects",
      title: "把 D 盘项目目录整理成个人网站内容，而不是继续堆空文案",
      excerpt: "这次不是再修一层视觉，而是直接从 D 盘的 Project 目录里抽真实项目，整理成可以展示在个人站点里的内容。",
      meta: "2026.04 / 7 min read",
      date: "2026-04-18",
      readTime: "7 min read",
      orbit: "Orbit D1",
      linkLabel: "Read Protocol",
      summary: "网站之前的问题不是完全没字，而是缺少来自真实项目目录的内容输入。通过盘点 D 盘里的 Project Android、Go、Vue、WeChat、Cocos、ESP32-S3 等目录，可以把个人站点从模板展示页拉回到真正的项目归档页。",
      deck: [
        "真实项目比抽象口号更能定义个人主页。",
        "先区分自己的项目、实验项目和第三方仓库，别乱吹。",
        "网站内容的核心不是编文案，而是整理已有产出。"
      ],
      sections: [
        {
          title: "为什么之前的网站看起来像空的",
          paragraphs: [
            "问题不在于页面上一点字都没有，而在于那些内容没有真正来自你的项目目录。它们更像一套漂亮但抽象的站点语气，缺少“你到底做过什么”的证据。",
            "一旦首页和归档页没有接住真实项目，站点就会显得像模板演示页：气氛有了，人物没进场。"
          ]
        },
        {
          title: "这次实际从 D 盘里抽到了什么",
          paragraphs: [
            "当前已经确认的可用内容包括：www.shizhou.top 个人站点本身、WalkByFaith 微信小程序、Go 的 TaskAPI、Cocos 的 cocos_plane 飞机大战，以及 OpenTGX 这类游戏框架实验。",
            "另外还有 Android 集成实验、Java 的 Spring Boot / LangChain4j 后端练习、ESP32-S3 方向的硬件实验目录，但其中一部分混有第三方开源仓库或模板项目，展示时要老实标注成学习来源或实验样本。"
          ]
        },
        {
          title: "站点内容应该怎么组织",
          paragraphs: [
            "首页适合放正在做的代表项目和短讯；归档页适合放更完整的项目说明、技术栈、阶段状态和后续路线。这样内容才有层次，不会所有东西都挤成一个发光公告板。",
            "真正可持续的做法，是继续把 D 盘项目按“个人作品 / 工程实验 / 学习样例”三类整理进数据源。这样以后每次做完一个东西，都能顺手塞进站里，而不是再临时编故事。"
          ]
        }
      ],
      callout: "个人站点要有内容感，靠的不是会发光的标题，而是你真的做过什么。",
      keypoints: [
        "从 D 盘项目目录提炼内容",
        "区分个人项目与第三方样例",
        "让网站变成真实项目归档"
      ],
      relatedSlugs: [
        "control-room-architecture",
        "ai-workflow-unified-rail"
      ]
    },
    {
      slug: "control-room-architecture",
      badge: "Product Log",
      status: "Live",
      category: "Product",
      title: "把个人博客改造成一套可扩展的内容控制台",
      excerpt: "首页不再只是展示信息，而是承担内容分发、项目曝光和后续接口扩展的中控功能。",
      meta: "2026.04 / 6 min read",
      date: "2026-04-11",
      readTime: "6 min read",
      orbit: "Orbit A1",
      linkLabel: "Read Protocol",
      summary: "这篇记录聚焦于首页重构背后的产品判断：为什么个人站点不该继续沿用企业官网的模板语言，以及如何从信息架构层先搭出一套可以承载长期内容输出的控制台。",
      deck: [
        "首页承担的是分发功能，不是堆砌说明书。",
        "界面必须为未来的文章、项目和状态流预留数据入口。",
        "视觉世界观要服务于秩序，而不是抢走内容的注意力。"
      ],
      sections: [
        {
          title: "为什么先拆掉模板感",
          paragraphs: [
            "旧模板的问题不在于它丑，而在于它默认假设你在做一家业务型公司官网。模块顺序、语言口吻、视觉重心都服务于“卖服务”而不是“持续输出”。",
            "当站点的真实目标是记录观点、公开实验、积累长期项目时，这种结构会让首页看起来像一个无法更新的展示壳。它没有给内容留出节奏，也没有让读者快速理解你最近在做什么。"
          ]
        },
        {
          title: "首页应该先像一个控制台",
          paragraphs: [
            "新的首页把信息拆成英雄区、信号板、内容流、协议栈、航迹和 API Dock。每个区域都不是孤立的视觉卡片，而是后续真实系统的占位符。",
            "这样做的结果是，页面现在虽然还是纯静态，但已经天然具备迁移路径。文章可以接 `/api/posts`，项目可以接 `/api/projects`，而状态面板可以接个人动态或自动化输出。"
          ]
        },
        {
          title: "下一步怎么扩成内容系统",
          paragraphs: [
            "先补归档页和详情页，把首页里最重要的内容流接出去，形成真实的浏览路径。只有当“首页 -> 归档 -> 详情”这条主链打通，站点才算开始具备内容站点的骨架。",
            "后续再考虑标签、搜索、订阅和后台来源。顺序不能反。没有稳固的前台结构，后端接得再快，也只是把数据倒进模板。"
          ]
        }
      ],
      callout: "个人站点最重要的不是首页多炫，而是它是否为长期更新提供了稳定接口。",
      keypoints: [
        "用内容分发逻辑替代模板展示逻辑",
        "把页面模块设计成未来 API 的容器",
        "先完成浏览链路，再补后台来源"
      ],
      relatedSlugs: [
        "css-deep-space-panels",
        "ai-workflow-unified-rail"
      ]
    },
    {
      slug: "css-deep-space-panels",
      badge: "Frontend Lab",
      status: "Build",
      category: "Design System",
      title: "用纯 CSS 建出深空面板，而不是堆一层模板感组件",
      excerpt: "利用网格背景、氛围光、霓虹描边和玻璃面板，把未来感建立在结构与节奏上。",
      meta: "2026.04 / Visual System",
      date: "2026-04-10",
      readTime: "8 min read",
      orbit: "Orbit B3",
      linkLabel: "Open Lab",
      summary: "这篇文章拆解首页视觉语言的底层做法。重点不是“加了多少特效”，而是怎样用纯 CSS 建立一致的控制台语气，并确保移动端也不会塌掉。",
      deck: [
        "视觉统一来自变量、结构和层级，而不是随机发光。",
        "氛围感应该用背景、边界和节奏叠出来。",
        "移动端优先要求每个模块都能单列成立。"
      ],
      sections: [
        {
          title: "未来感不是效果库",
          paragraphs: [
            "很多所谓赛博风页面只是换了几层霓虹色，然后继续复用普通营销组件。这种做法的问题是视觉元素在说未来，但结构还是旧时代模板。",
            "我更关心的是让布局、标题比例、信息卡片和留白都先拥有一种“控制台秩序”，然后才让光感和渐变进场。"
          ]
        },
        {
          title: "CSS 变量承担了设计系统的角色",
          paragraphs: [
            "当前首页把背景、面板、描边、文本、强调色和半径都收敛进一组变量。这样新页面只要沿用变量和核心面板组件，就能自然继承视觉语言。",
            "这也是为什么归档页和详情页可以直接建立在同一套样式基础上，而不必从零做第二套视觉。"
          ]
        },
        {
          title: "移动端的关键是降噪",
          paragraphs: [
            "在桌面端，信息可以并排组织成舰桥结构；到了移动端，必须允许它们顺序落成单列，同时保留层次而不显得拥挤。",
            "如果一个未来感页面只在桌面看起来合理，那说明它只是海报，不是界面。"
          ]
        }
      ],
      callout: "真正的视觉语言应该能扩站，而不是只能撑一个首页截图。",
      keypoints: [
        "变量优先，特效其次",
        "组件节奏比单个卡片更重要",
        "移动端必须保留信息层级"
      ],
      relatedSlugs: [
        "control-room-architecture",
        "ai-workflow-unified-rail"
      ]
    },
    {
      slug: "ai-workflow-unified-rail",
      badge: "AI Workflow",
      status: "Sync",
      category: "Workflow",
      title: "如何让写作、编码和实验记录进入同一条工作流",
      excerpt: "把碎片想法沉淀成日志、项目与时间线，让个人站点持续输出而不是一次性装修。",
      meta: "2026.04 / Workflow",
      date: "2026-04-09",
      readTime: "7 min read",
      orbit: "Orbit C2",
      linkLabel: "Trace Signal",
      summary: "当内容、代码和实验分散在不同地方时，个人站点通常会变成一个落灰的名片页。更合理的做法，是把三者都收束到一条可发布、可回看、可归档的工作流上。",
      deck: [
        "输出节奏比一次性装修更关键。",
        "内容对象就是未来接口契约。",
        "每次实验都应该留下可检索的轨迹。"
      ],
      sections: [
        {
          title: "为什么很多个人站点更像废弃机库",
          paragraphs: [
            "问题通常不是没有想法，而是没有稳定的记录路径。文章放在笔记里，代码散在仓库里，实验结论停留在聊天窗口，最后首页没有任何东西可以持续更新。",
            "结果就是个人站点只能反复重做首页，却没有办法真正积累。"
          ]
        },
        {
          title: "把输出统一成数据对象",
          paragraphs: [
            "一旦你开始用统一字段描述文章、项目、短讯和时间线，站点的前端就不再依赖手工拷贝。它只是一个渲染层。",
            "这让 AI、脚本、CMS 或你自己的发布流程都能接进来，因为每个入口最终都在生成同一种结构化内容。"
          ]
        },
        {
          title: "从静态开始并不保守",
          paragraphs: [
            "静态版本的价值在于先把界面、结构和叙事打稳。只要字段合理，后面无论接 API 还是自动化生成，都可以平滑替换。",
            "所以第一阶段最重要的不是立即上复杂后端，而是把能长期运行的内容轨道先铺出来。"
          ]
        }
      ],
      callout: "能持续更新的个人站点，核心不是 CMS，而是你有没有定义清楚内容如何进入它。",
      keypoints: [
        "统一内容结构",
        "缩短从想法到发布的路径",
        "让每次实验都进入归档系统"
      ],
      relatedSlugs: [
        "control-room-architecture",
        "css-deep-space-panels"
      ]
    }
  ],
  projects: [
    {
      badge: "Personal Site",
      status: "Live",
      title: "www.shizhou.top 个人站点",
      excerpt: "当前在持续把 D 盘里的真实项目、实验记录和开发轨迹整理进站点，而不是继续摆一层会发光的空壳。",
      meta: "Vue / Static Site / Ongoing",
      linkLabel: "查看归档",
      href: "archive.html"
    },
    {
      badge: "WeChat Mini Program",
      status: "Build",
      title: "WalkByFaith 微信小程序",
      excerpt: "一个带自定义 tabBar 的微信小程序项目，当前已具备主页与我的页面结构，使用 weui-miniprogram 组件体系。",
      meta: "WeChat / Mini Program / weui",
      linkLabel: "查看归档",
      href: "archive.html"
    },
    {
      badge: "Backend API",
      status: "Ready",
      title: "TaskAPI 任务管理接口",
      excerpt: "Go + Gin 的任务管理 REST API，包含路由、中间件、内存存储、pprof、优雅关停和单元测试，属于能拿来展示工程习惯的项目。",
      meta: "Go / Gin / REST API",
      linkLabel: "查看归档",
      href: "archive.html"
    }
  ],
  notes: [
    {
      badge: "Project Signal",
      status: "Scan",
      title: "D 盘里不是没内容，是项目素材一直没被整理进网站。",
      excerpt: "Project Android、Go、Vue、WeChat、Cocos、ESP32-S3 这些目录本来就是现成材料，之前站里缺的是提炼，不是字数。",
      meta: "Note 01",
      linkLabel: "打开归档",
      href: "archive.html"
    },
    {
      badge: "Project Signal",
      status: "Scan",
      title: "WalkByFaith、TaskAPI、cocos_plane 这类项目，才是站点该展示的真实内容。",
      excerpt: "比起继续写抽象概念文案，把你已经做过的项目讲清楚，网站立刻就像个人主页，不像模板试衣间。",
      meta: "Note 02",
      linkLabel: "查看结构",
      href: "archive.html"
    },
    {
      badge: "Project Signal",
      status: "Scan",
      title: "ESP32 和 Unity 目录里混有第三方或模板内容，不能一股脑都算成你的成果。",
      excerpt: "真实展示比乱吹靠谱。该写你做的，第三方仓库和教程模板就老老实实标成学习/实验来源。",
      meta: "Note 03",
      linkLabel: "打开归档",
      href: "archive.html"
    }
  ],
  timelineItems: [
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
      title: "打通归档页与详情页",
      description: "从首页延伸出稳定浏览链路，让内容系统不再停留在单页展示。"
    }
  ],
  apiBlueprint: [
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
  ]
};
