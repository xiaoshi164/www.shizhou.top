window.siteData = {
  posts: [
    {
      slug: "d-drive-project-deck-refresh",
      badge: "Site Refresh",
      status: "Live",
      category: "Projects",
      title: "把首页改成 H5 节奏，同时把 D 盘真实项目塞回站里",
      excerpt: "这次不是再修视觉小毛病，而是直接承认旧首页不适合手机，也没有把 D 盘项目内容真正接进来。",
      meta: "2026.04 / 6 min read",
      date: "2026-04-18",
      readTime: "6 min read",
      orbit: "Orbit M1",
      linkLabel: "Read Detail",
      summary: "旧首页的问题有两个：一是桌面感太重，H5 上读起来不顺；二是 D 盘真实项目没进入主内容层。现在这一版先按移动端阅读路径重排，再把 WalkByFaith、TaskAPI、cocos_plane、TestAlipay、InterestingChange、langchai4j/demo1、nest 与 OpenTGX 等真实目录整理进数据源。",
      deck: [
        "H5 首页先讲清楚内容，不先炫结构。",
        "真实项目目录比抽象文案重要得多。",
        "以后新增项目，直接往结构化数据里补。"
      ],
      sections: [
        {
          title: "为什么旧首页不适合 H5",
          paragraphs: [
            "旧版首页在桌面看还行，到了手机上就像把一张海报硬压进窄屏里：模块太横向、信息密度不均、重要内容埋得太深。",
            "移动端首页最怕的是读者划了半天还没看到你到底做过什么。那不是高级，是信息组织失职。"
          ]
        },
        {
          title: "这次真正接进来的 D 盘内容",
          paragraphs: [
            "当前已经确认并写进站点的数据源包括：/mnt/d/Project WeChat/WalkByFaith、/mnt/d/Project Go/taskapi、/mnt/d/Project Cocos/Plane/cocos_plane、/mnt/d/Project Android/TestAlipay、/mnt/d/Project Android/InterestingChange、/mnt/d/Project Java/langchai4j/demo1、/mnt/d/Project Java/nest、/mnt/d/Project Cocos/OpenTGX/OpenTGX，以及站点仓库本身。",
            "其中 OpenTGX 明确写着“A fullstack game development solution using typescript”，更适合老实标成框架实验；Java 和 Android 里也有演示性质项目，所以展示时会分为真实作品、工程实验、学习样例，而不是统统吹成成品。"
          ]
        },
        {
          title: "首页应该承担什么",
          paragraphs: [
            "首页最重要的是三件事：快速说明你是谁、你最近在做什么、有哪些代表项目值得点进去。剩下的深内容交给归档页和详情页。",
            "所以这版把首屏、项目卡片、目录来源、下一步计划重新排成单列流程，手机上读起来才像 H5，不像桌面截图。"
          ]
        }
      ],
      callout: "移动端首页别装高冷，先把项目亮出来。",
      keypoints: [
        "H5 优先重排",
        "接入 D 盘真实项目",
        "首页回归项目分发职责"
      ],
      relatedSlugs: [
        "walkbyfaith-mini-program",
        "taskapi-go-rest"
      ]
    },
    {
      slug: "walkbyfaith-mini-program",
      badge: "WeChat Project",
      status: "Build",
      category: "Mini Program",
      title: "WalkByFaith：一个已经长出真实页面结构的微信小程序",
      excerpt: "项目内有主页、我的页、自定义 tabBar，并接了 weui-miniprogram，不是空目录。",
      meta: "2026.04 / 5 min read",
      date: "2026-04-18",
      readTime: "5 min read",
      orbit: "Orbit W1",
      linkLabel: "Read Detail",
      summary: "WalkByFaith 位于 /mnt/d/Project WeChat/WalkByFaith，已经具备 app.js、app.json、自定义 tabBar 和 pages 结构。它很适合放在首页前排，因为这是明显面向移动端体验的真实项目。",
      deck: [
        "有页面结构，能说明项目不是空壳。",
        "自定义 tabBar 说明做过界面层设计。",
        "放在 H5 首页也合理，因为用户一眼就懂。"
      ],
      sections: [
        {
          title: "项目里实际看到了什么",
          paragraphs: [
            "目录里可以确认到 app.js、app.json、app.wxss、custom-tab-bar 和 pages 结构，不是只有一个 README 的假项目。",
            "app.json 里已配置主页与我的页，并声明使用 weui-miniprogram 组件。"
          ]
        },
        {
          title: "为什么它值得放首页",
          paragraphs: [
            "因为它天然适合移动端语境。用户看到微信小程序项目，会立刻明白这是实际在做的产品形态，而不是抽象概念。",
            "而且它和现在网站的 H5 改版方向也一致：都在强调手机端阅读与交互。"
          ]
        },
        {
          title: "后面还可以怎么补",
          paragraphs: [
            "下一步可以继续把页面截图、功能流程和具体模块拆出来，做成单独项目详情页。",
            "这样它就不只是首页一张卡，而是一条完整案例。"
          ]
        }
      ],
      callout: "有真实页面结构的小程序，比一百句‘我关注用户体验’都更有说服力。",
      keypoints: [
        "主页 + 我的页",
        "自定义 tabBar",
        "weui-miniprogram"
      ],
      relatedSlugs: [
        "d-drive-project-deck-refresh",
        "taskapi-go-rest"
      ]
    },
    {
      slug: "taskapi-go-rest",
      badge: "Backend API",
      status: "Ready",
      category: "Backend",
      title: "TaskAPI：Go + Gin 的任务管理接口，不是玩具文案",
      excerpt: "README、go.mod 和 internal 目录都在，带 pprof、优雅关停和测试，工程味道够明显。",
      meta: "2026.04 / 5 min read",
      date: "2026-04-18",
      readTime: "5 min read",
      orbit: "Orbit G1",
      linkLabel: "Read Detail",
      summary: "TaskAPI 位于 /mnt/d/Project Go/taskapi。README 已明确写出 Gin 路由、中间件、并发安全内存存储、pprof、优雅关停与单元测试，这种项目就该放进站里撑住“你真的做过工程”的部分。",
      deck: [
        "README 直接写清楚能力边界。",
        "有 internal 分层和测试文件，不是只搭了个 hello world。",
        "适合当作后端能力展示入口。"
      ],
      sections: [
        {
          title: "为什么这个项目值得展示",
          paragraphs: [
            "因为它不仅有接口描述，还有 internal/config、handler、service、store 等目录和测试文件，说明结构是认真搭过的。",
            "再加上 pprof 和优雅关停，这已经不是只会起一个端口的练手项目。"
          ]
        },
        {
          title: "首页该怎么讲它",
          paragraphs: [
            "首页不用把所有接口细节都讲完，只要明确它是一个 Go + Gin 的任务管理 API，并强调工程特性。",
            "更详细的 API 示例、请求路径和测试习惯，放归档或详情页就够了。"
          ]
        },
        {
          title: "它对整站有什么意义",
          paragraphs: [
            "这类项目能补足站点过去太偏视觉和抽象叙事的问题。",
            "有了它，首页不再只是“我会做界面”，而是能顺手证明你也会搭接口和维护结构。"
          ]
        }
      ],
      callout: "工程项目要讲结构和验证，不要只讲梦想。",
      keypoints: [
        "Gin REST API",
        "pprof + 优雅关停",
        "internal 分层 + 测试"
      ],
      relatedSlugs: [
        "d-drive-project-deck-refresh",
        "walkbyfaith-mini-program"
      ]
    },
    {
      slug: "cocos-plane-and-android-labs",
      badge: "Game + Android",
      status: "Build",
      category: "Experiments",
      title: "cocos_plane 和 Android 支付实验，适合放进“工程实验”层",
      excerpt: "Cocos 飞机大战复刻和 Android 多模块支付实验，至少比空泛的“技术热爱”强太多。",
      meta: "2026.04 / 4 min read",
      date: "2026-04-18",
      readTime: "4 min read",
      orbit: "Orbit X2",
      linkLabel: "Read Detail",
      summary: "除了站点、小程序和 Go API，这次还确认了 /mnt/d/Project Cocos/Plane/cocos_plane、/mnt/d/Project Android/TestAlipay 与 /mnt/d/Project Android/InterestingChange 这类实验项目。它们未必需要放首页第一屏，但非常适合进入归档页，形成更完整的项目层次。",
      deck: [
        "实验项目不用硬吹成正式产品。",
        "但只要是真做过的，就比模板句子值钱。",
        "放对位置，整站内容层次会更稳。"
      ],
      sections: [
        {
          title: "cocos_plane 有什么可说的",
          paragraphs: [
            "README 已明确写着“cocos 复刻小程序飞机大战”，定位清晰，适合归为游戏/交互实验。",
            "这类项目对外展示时不需要装成熟商业案例，老老实实说是复刻与实验，反而更可信。"
          ]
        },
        {
          title: "Android 目录为什么也该进站",
          paragraphs: [
            "TestAlipay 目录里可见 app、kmqy、test 多模块和 gradle 配置，至少说明你做过 Android 集成和工程实验。",
            "InterestingChange 当前可确认有 demo 模块和 Gradle 构建配置，适合先标成 Android 练习/实验项目，别硬吹成完整产品。"
          ]
        },
        {
          title: "展示时怎么分层",
          paragraphs: [
            "首页前排放更容易理解的项目，比如小程序、站点和 API。",
            "Cocos 和 Android 实验更适合进归档层，作为“我还做过这些”的第二梯队。"
          ]
        }
      ],
      callout: "实验项目不是边角料，放对地方就是你技术广度的证据。",
      keypoints: [
        "Cocos 飞机大战复刻",
        "Android 多模块实验",
        "放入工程实验层"
      ],
      relatedSlugs: [
        "d-drive-project-deck-refresh",
        "taskapi-go-rest"
      ]
    },
    {
      slug: "java-and-framework-labs",
      badge: "Java + Framework",
      status: "Queued",
      category: "Learning Labs",
      title: "langchai4j、nest、OpenTGX：这些先老实归到学习样例和框架实验",
      excerpt: "Spring Boot、MongoDB、JWT、langchain4j 和 Cocos TypeScript 方案都能确认存在，但目前更适合诚实地标成练习/框架实验。",
      meta: "2026.04 / 5 min read",
      date: "2026-04-18",
      readTime: "5 min read",
      orbit: "Orbit J3",
      linkLabel: "Read Detail",
      summary: "这轮又补查了 /mnt/d/Project Java/langchai4j/demo1、/mnt/d/Project Java/nest 和 /mnt/d/Project Cocos/OpenTGX/OpenTGX。能确认它们确实有 Maven / Spring Boot / TypeScript Cocos 工程结构，但就现有证据来看，更适合被当作学习样例或框架实验，而不是直接包装成上线产品。",
      deck: [
        "能确认存在工程结构，但别乱拔高。",
        "Spring Boot + MongoDB + JWT 已经说明技术探索方向。",
        "OpenTGX 明确是 fullstack game development solution，更像框架实验。"
      ],
      sections: [
        {
          title: "langchai4j/demo1 目前能确认什么",
          paragraphs: [
            "pom.xml 显示它是 Spring Boot 4.0.3 + Java 21 项目，并引入了 langchain4j、MySQL、Redis、JPA、MongoDB 等依赖。",
            "这说明它至少是一个朝 AI / 数据 / 后端整合方向尝试的 Java 工程，不该继续在站里隐身。"
          ]
        },
        {
          title: "nest 为什么先归为学习样例",
          paragraphs: [
            "nest 的 pom.xml 能确认 Spring Boot Web、MongoDB 和 JWT 依赖，target 目录里也已经有打包产物。",
            "但 README 目前只写了一个标题，缺少足够的项目说明，所以展示时更适合先老实说成练习样例。"
          ]
        },
        {
          title: "OpenTGX 为什么不该直接算成你的成品",
          paragraphs: [
            "OpenTGX 的 package.json 自己就写着“A fullstack game development solution using typescript”。这更像框架/方案实验。",
            "所以我把它放到学习样例与框架实验层，既把 D 盘内容补进来了，也避免把可能带有第三方来源的东西硬说成个人成品。"
          ]
        }
      ],
      callout: "有些东西值得展示，但不值得吹过头。诚实分类，比乱包装强。",
      keypoints: [
        "langchain4j + Java 21",
        "Spring Boot + MongoDB + JWT",
        "Cocos TypeScript 框架实验"
      ],
      relatedSlugs: [
        "d-drive-project-deck-refresh",
        "cocos-plane-and-android-labs"
      ]
    }
  ],
  projects: [
    {
      badge: "Personal Site",
      status: "Live",
      title: "www.shizhou.top 首页 H5 改版",
      excerpt: "把桌面味太重的首页改成移动端优先结构，同时重新接入 D 盘真实项目，不再空转。",
      meta: "Static Site / H5 / Ongoing",
      linkLabel: "查看归档",
      href: "archive.html"
    },
    {
      badge: "WeChat Mini Program",
      status: "Build",
      title: "WalkByFaith 微信小程序",
      excerpt: "目录内确认有主页、我的页、自定义 tabBar 与 weui-miniprogram 依赖，适合放在首页前排展示。",
      meta: "WeChat / Mini Program / weui",
      linkLabel: "查看详情",
      href: "article.html?slug=walkbyfaith-mini-program"
    },
    {
      badge: "Backend API",
      status: "Ready",
      title: "TaskAPI 任务管理接口",
      excerpt: "Go + Gin REST API，带 pprof、优雅关停和测试文件，能清楚体现工程结构。",
      meta: "Go / Gin / REST API",
      linkLabel: "查看详情",
      href: "article.html?slug=taskapi-go-rest"
    },
    {
      badge: "Game Experiment",
      status: "Build",
      title: "cocos_plane 飞机大战复刻",
      excerpt: "Cocos 项目，README 直接说明是飞机大战复刻，适合归到工程实验层。",
      meta: "Cocos / Mini Game / Experiment",
      linkLabel: "查看详情",
      href: "article.html?slug=cocos-plane-and-android-labs"
    },
    {
      badge: "Android Lab",
      status: "Scan",
      title: "TestAlipay + InterestingChange",
      excerpt: "Android 实验目录已确认有多模块与 demo 工程结构，先按实验层展示，别乱包装。",
      meta: "Android / Gradle / Lab",
      linkLabel: "查看详情",
      href: "article.html?slug=cocos-plane-and-android-labs"
    },
    {
      badge: "Java / Framework Labs",
      status: "Queued",
      title: "langchai4j / nest / OpenTGX",
      excerpt: "Spring Boot、MongoDB、JWT、langchain4j 和 Cocos TypeScript 方案都已确认存在，先作为学习样例和框架实验归档。",
      meta: "Java / Spring Boot / TS / Cocos",
      linkLabel: "查看详情",
      href: "article.html?slug=java-and-framework-labs"
    }
  ],
  notes: [
    {
      badge: "Fix Note",
      status: "Done",
      title: "旧首页的问题不是不够酷，而是手机上难读，项目也没进来。",
      excerpt: "这次直接把结构改成 H5 优先，再把真实项目替换掉空泛叙事，终于像个人站了。",
      meta: "Note 01",
      linkLabel: "看详情",
      href: "article.html?slug=d-drive-project-deck-refresh"
    },
    {
      badge: "D: Drive",
      status: "Scan",
      title: "已确认的真实来源扩展到 WalkByFaith、taskapi、cocos_plane、TestAlipay、InterestingChange、langchai4j、nest、OpenTGX。",
      excerpt: "这些目录都实际存在，并且能看到关键文件结构。只是分类会更老实，不会全都硬说成成品。",
      meta: "Note 02",
      linkLabel: "打开项目",
      href: "archive.html"
    },
    {
      badge: "Next",
      status: "Queue",
      title: "后面继续补 Java / Android / Cocos 细节页，但继续维持诚实分层。",
      excerpt: "先把确认过的内容上线，证据不足的部分老实放到学习样例或框架实验层，省得吹过头。",
      meta: "Note 03",
      linkLabel: "打开归档",
      href: "archive.html"
    }
  ],
  timelineItems: [
    {
      date: "PHASE 01",
      title: "承认旧首页不适合 H5",
      description: "先把桌面导向的排版思路停掉，改成移动端优先的信息节奏。"
    },
    {
      date: "PHASE 02",
      title: "把 D 盘真实项目抽出来",
      description: "确认 WalkByFaith、TaskAPI、cocos_plane、TestAlipay、InterestingChange、langchai4j、nest 与 OpenTGX 等目录后，再写站点内容，避免继续空转。"
    },
    {
      date: "PHASE 03",
      title: "首页只负责分发，深内容下沉归档",
      description: "把项目卡片放前面，把细节说明留给归档页和详情页，手机阅读路径更清晰。"
    }
  ],
  apiBlueprint: [
    {
      method: "VIEW",
      path: "/project-deck",
      description: "首页先展示真实项目卡片，默认以项目流为主，而不是文章流。"
    },
    {
      method: "OPEN",
      path: "/archive",
      description: "归档页继续承接长文说明和项目分层，负责把内容展开。"
    },
    {
      method: "DETAIL",
      path: "/article?slug=...",
      description: "详情页负责项目/文章的完整描述，首页不再硬塞长段说明。"
    },
    {
      method: "QUEUE",
      path: "/next-sync/java-android",
      description: "Java、Android 与框架实验目录已进入待补充队列，后面继续扩内容。"
    }
  ]
};
