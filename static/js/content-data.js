window.siteData = {
  posts: [
    {
      slug: "walkbyfaith-feature-breakdown",
      badge: "WeChat Project",
      status: "Verified",
      category: "Mini Program",
      title: "WalkByFaith 微信小程序结构整理",
      excerpt: "已确认主页、我的页、自定义 tabBar 与 weui-miniprogram 组件接入，是一条证据最完整的移动端项目线。",
      meta: "2026.04 / 5 min read",
      date: "2026-04-18",
      readTime: "5 min read",
      orbit: "Orbit W2",
      linkLabel: "Read Detail",
      summary: "WalkByFaith 位于 /mnt/d/Project WeChat/WalkByFaith。当前已确认 app.js、app.json、project.config.json、custom-tab-bar 与 pages 目录，能明确说明这是一个真实的小程序工程，而不是空目录。",
      cover: "/static/images/projects/walkbyfaith-cover.png",
      coverAlt: "WalkByFaith 项目目录中的真实图标素材",
      gallery: [
        {
          src: "/static/images/projects/walkbyfaith-detail-api.png",
          alt: "WalkByFaith 项目中的 API 图标素材",
          caption: "真实素材：来自 WalkByFaith 项目目录。"
        }
      ],
      deck: [
        "主页 + 我的页结构已确认。",
        "custom tabBar 说明做过界面层设计。",
        "适合作为首页前排的移动端项目入口。"
      ],
      sections: [
        {
          title: "已确认的工程结构",
          paragraphs: [
            "项目目录中可确认 app.js、app.json、app.wxss、custom-tab-bar 与 pages 结构。",
            "app.json 已声明主页与我的页，并接入 weui-miniprogram 组件能力。"
          ]
        },
        {
          title: "为什么值得放首页",
          paragraphs: [
            "这是天然适合移动端展示的真实项目，用户看到后能立刻理解项目形态。",
            "相比抽象描述，真实的小程序工程结构更能直接说明做过什么。"
          ]
        },
        {
          title: "当前展示策略",
          paragraphs: [
            "首页只保留简短卡片与入口，详情页再展开页面结构和组件信息。",
            "后续如果补到真实页面截图，可以继续增强这条项目案例。"
          ]
        }
      ],
      callout: "有真实页面结构的小程序，本身就是最有说服力的项目证据。",
      keypoints: [
        "主页 + 我的页",
        "custom tabBar",
        "weui-miniprogram"
      ],
      relatedSlugs: [
        "taskapi-runtime-breakdown",
        "cocos-plane-and-android-labs"
      ]
    },
    {
      slug: "taskapi-runtime-breakdown",
      badge: "Backend API",
      status: "Verified",
      category: "Backend",
      title: "TaskAPI Go 接口项目整理",
      excerpt: "README、go.mod、运行命令、接口前缀与 pprof 调试入口都已确认，适合当作后端工程案例。",
      meta: "2026.04 / 6 min read",
      date: "2026-04-18",
      readTime: "6 min read",
      orbit: "Orbit G2",
      linkLabel: "Read Detail",
      summary: "TaskAPI 位于 /mnt/d/Project Go/taskapi。当前已确认 Go 1.21、Gin、Viper、/ping、/api/v1/tasks 与 /debug/pprof，说明这不是只起一个端口的练手项目，而是具备基础工程结构的后端项目。",
      cover: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 1000'><rect width='1600' height='1000' fill='%230a0f18'/><rect x='44' y='44' width='1512' height='912' rx='40' fill='%230d1320' stroke='%23273958'/><text x='120' y='152' fill='%23f5f7fb' font-size='44' font-family='Arial, sans-serif'>TaskAPI runtime breakdown</text><rect x='118' y='230' width='540' height='596' rx='34' fill='%230f182a'/><text x='166' y='314' fill='%239da3b0' font-size='30' font-family='Courier New, monospace'>$ go run ./cmd/server</text><text x='166' y='392' fill='%234cd6b8' font-size='30' font-family='Courier New, monospace'>listen :8080</text><text x='166' y='470' fill='%236f7cff' font-size='30' font-family='Courier New, monospace'>/ping</text><text x='166' y='530' fill='%236f7cff' font-size='30' font-family='Courier New, monospace'>/api/v1/tasks</text><text x='166' y='590' fill='%23ffb86c' font-size='30' font-family='Courier New, monospace'>/debug/pprof</text><rect x='736' y='230' width='700' height='596' rx='34' fill='%23091319' stroke='%231c5b63'/><rect x='804' y='304' width='566' height='82' rx='24' fill='%23141f33'/><text x='858' y='356' fill='%23f5f7fb' font-size='30' font-family='Arial, sans-serif'>Go 1.21</text><rect x='804' y='430' width='566' height='82' rx='24' fill='%23141f33'/><text x='858' y='482' fill='%23f5f7fb' font-size='30' font-family='Arial, sans-serif'>Gin + Viper</text><rect x='804' y='556' width='566' height='82' rx='24' fill='%23141f33'/><text x='858' y='608' fill='%23f5f7fb' font-size='30' font-family='Arial, sans-serif'>graceful shutdown</text><text x='120' y='896' fill='%239da3b0' font-size='30' font-family='Arial, sans-serif'>生成视觉：项目内无截图，明确用运行结构图表达后端工程信号</text></svg>",
      coverAlt: "TaskAPI 运行结构的生成视觉：命令、接口和工程特征面板",
      gallery: [
        {
          src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><rect width='1200' height='760' fill='%230a0f18'/><rect x='56' y='56' width='1088' height='648' rx='34' fill='%230f1726' stroke='%23283556'/><text x='102' y='132' fill='%23f5f7fb' font-size='36' font-family='Arial, sans-serif'>TaskAPI routes</text><text x='104' y='252' fill='%234cd6b8' font-size='30' font-family='Courier New, monospace'>GET    /ping</text><text x='104' y='326' fill='%236f7cff' font-size='30' font-family='Courier New, monospace'>GET    /api/v1/tasks</text><text x='104' y='400' fill='%236f7cff' font-size='30' font-family='Courier New, monospace'>POST   /api/v1/tasks</text><text x='104' y='474' fill='%236f7cff' font-size='30' font-family='Courier New, monospace'>PUT    /api/v1/tasks/:id</text><text x='104' y='548' fill='%236f7cff' font-size='30' font-family='Courier New, monospace'>DELETE /api/v1/tasks/:id</text><text x='104' y='638' fill='%23ffb86c' font-size='28' font-family='Courier New, monospace'>/debug/pprof available</text></svg>",
          alt: "TaskAPI 路由清单的生成视觉",
          caption: "生成视觉：项目无真实界面图，明确按接口信息可视化处理。"
        }
      ],
      deck: [
        "Go 1.21 + Gin + Viper 已确认。",
        "接口前缀与调试入口已确认。",
        "适合作为后端工程案例入口。"
      ],
      sections: [
        {
          title: "已确认的运行信息",
          paragraphs: [
            "README 中可见 go run ./cmd/server，说明项目提供了明确运行方式。",
            "go.mod 已确认 module taskapi、go 1.21，并依赖 gin-gonic/gin 与 spf13/viper。"
          ]
        },
        {
          title: "接口层证据",
          paragraphs: [
            "README 已明示 /ping、/api/v1/tasks 与 /debug/pprof。",
            "这类项目信息足以支撑一条后端工程型详情页，而不只是简单目录介绍。"
          ]
        },
        {
          title: "展示策略",
          paragraphs: [
            "首页只讲清它是什么，详情页再承接运行方式、接口习惯与工程信号。",
            "如果后续补到更多接口示例，可以继续增强这条案例。"
          ]
        }
      ],
      callout: "能把怎么跑、接口在哪、调试入口怎么进说清楚的后端项目，已经比空泛描述强很多。",
      keypoints: [
        "go run ./cmd/server",
        "/api/v1/tasks",
        "/debug/pprof"
      ],
      relatedSlugs: [
        "walkbyfaith-feature-breakdown",
        "java-and-framework-labs"
      ]
    },
    {
      slug: "cocos-plane-and-android-labs",
      badge: "Experiments",
      status: "Verified",
      category: "Experiments",
      title: "cocos_plane 与 Android 工程实验整理",
      excerpt: "Cocos 飞机大战复刻与 Android 多模块实验都已确认存在，适合归到工程实验层，而不是硬包装成成品。",
      meta: "2026.04 / 4 min read",
      date: "2026-04-18",
      readTime: "4 min read",
      orbit: "Orbit X2",
      linkLabel: "Read Detail",
      summary: "当前已确认 /mnt/d/Project Cocos/Plane/cocos_plane、/mnt/d/Project Android/TestAlipay 与 /mnt/d/Project Android/InterestingChange。它们更适合在站内归类为实验项目，用来展示技术广度与工程尝试。",
      cover: "/static/images/projects/cocos-plane-cover.png",
      coverAlt: "cocos_plane 项目的真实游戏实验画面",
      gallery: [
        {
          src: "/static/images/projects/cocos-plane-detail-gameover.png",
          alt: "cocos_plane 项目的真实游戏结束界面",
          caption: "真实素材：来自 cocos_plane 项目。"
        },
        {
          src: "/static/images/projects/testalipay-cover.png",
          alt: "TestAlipay 项目的真实应用图标素材",
          caption: "真实素材：TestAlipay 当前能确认到的主要视觉证据。"
        }
      ],
      deck: [
        "实验项目不硬吹成商业产品。",
        "Cocos 与 Android 方向都已确认。",
        "适合作为第二梯队项目展示。"
      ],
      sections: [
        {
          title: "Cocos 部分",
          paragraphs: [
            "README 已明确写出 cocos_plane 是飞机大战复刻，项目定位清楚。",
            "这类项目更适合被诚实归类为游戏/交互实验。"
          ]
        },
        {
          title: "Android 部分",
          paragraphs: [
            "TestAlipay 目录中可见 app、kmqy、test 多模块与 Gradle 配置。",
            "InterestingChange 当前可确认有 demo 模块与构建配置，适合暂时归为工程实验。"
          ]
        },
        {
          title: "展示策略",
          paragraphs: [
            "首页前排优先放更容易理解的小程序与 API。",
            "这类实验项目则进入归档层，补足整站项目谱系。"
          ]
        }
      ],
      callout: "实验项目放对位置，就是技术广度的证据。",
      keypoints: [
        "Cocos 飞机大战复刻",
        "Android 多模块实验",
        "工程实验层"
      ],
      relatedSlugs: [
        "walkbyfaith-feature-breakdown",
        "java-and-framework-labs"
      ]
    },
    {
      slug: "java-and-framework-labs",
      badge: "Learning Labs",
      status: "Verified",
      category: "Learning Labs",
      title: "langchai4j、nest、OpenTGX 学习样例与框架实验整理",
      excerpt: "Java Spring Boot、MongoDB、JWT、langchain4j 与 Cocos TypeScript 方案都已确认存在，但目前更适合诚实归为学习样例与框架实验。",
      meta: "2026.04 / 5 min read",
      date: "2026-04-18",
      readTime: "5 min read",
      orbit: "Orbit J3",
      linkLabel: "Read Detail",
      summary: "这轮已补查 /mnt/d/Project Java/langchai4j/demo1、/mnt/d/Project Java/nest 与 /mnt/d/Project Cocos/OpenTGX/OpenTGX。能确认它们有 Maven / Spring Boot / TypeScript Cocos 工程结构，但当前更适合老实归为学习样例和框架实验。",
      cover: "/static/images/projects/opentgx-cover.png",
      coverAlt: "OpenTGX 项目中的真实 logo 素材",
      gallery: [
        {
          src: "/static/images/projects/opentgx-detail-logo.png",
          alt: "OpenTGX 项目的真实文字 logo 素材",
          caption: "真实素材：当前能确认的视觉主要来自 OpenTGX。"
        }
      ],
      deck: [
        "工程结构已确认，但不乱拔高。",
        "Spring Boot / MongoDB / JWT / langchain4j 方向明确。",
        "OpenTGX 更适合归类为框架实验。"
      ],
      sections: [
        {
          title: "langchai4j/demo1",
          paragraphs: [
            "pom.xml 显示它是 Spring Boot + Java 21 工程，并引入了 langchain4j、MySQL、Redis、JPA、MongoDB 等依赖。",
            "这说明它至少是一个朝 AI / 数据 / 后端整合方向尝试的 Java 项目。"
          ]
        },
        {
          title: "nest",
          paragraphs: [
            "pom.xml 可确认 Spring Boot Web、MongoDB 与 JWT 依赖，target 中也已出现打包产物。",
            "但 README 说明不足，因此更适合先归类为学习样例。"
          ]
        },
        {
          title: "OpenTGX",
          paragraphs: [
            "package.json 明确写着 TypeScript 全栈游戏开发方案，更像框架/方案实验。",
            "因此站内展示时会避免把它直接包装成个人上线成品。"
          ]
        }
      ],
      callout: "值得展示的内容，也要按证据强弱诚实分类。",
      keypoints: [
        "langchain4j + Java 21",
        "Spring Boot + MongoDB + JWT",
        "TypeScript Cocos 框架实验"
      ],
      relatedSlugs: [
        "taskapi-runtime-breakdown",
        "cocos-plane-and-android-labs"
      ]
    }
  ],
  projects: [
    {
      badge: "WeChat Mini Program",
      status: "Verified",
      title: "WalkByFaith 微信小程序",
      excerpt: "主页、我的页、自定义 tabBar 与 weui 组件接入都已确认，是证据最完整的移动端项目。",
      meta: "WeChat / Mini Program",
      linkLabel: "查看详情",
      href: "article.html?slug=walkbyfaith-feature-breakdown",
      cover: "/static/images/projects/walkbyfaith-cover.png",
      coverAlt: "WalkByFaith 项目目录中的真实图标素材"
    },
    {
      badge: "Backend API",
      status: "Verified",
      title: "TaskAPI Go 接口项目",
      excerpt: "Go 1.21、Gin、Viper、/api/v1/tasks 与 /debug/pprof 都已确认，适合当作后端工程案例。",
      meta: "Go / Gin / API",
      linkLabel: "查看详情",
      href: "article.html?slug=taskapi-runtime-breakdown",
      cover: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 1000'><rect width='1600' height='1000' fill='%230b0f18'/><rect x='42' y='42' width='1516' height='916' rx='40' fill='%230d1320' stroke='%23273958'/><rect x='110' y='110' width='1380' height='110' rx='28' fill='%23111b2d'/><text x='150' y='180' fill='%236f7cff' font-size='42' font-family='Arial, sans-serif'>taskapi / gin / viper / pprof</text><rect x='110' y='270' width='640' height='560' rx='34' fill='%23091319' stroke='%231c5b63'/><text x='154' y='348' fill='%234cd6b8' font-size='34' font-family='Courier New, monospace'>GET /ping</text><text x='154' y='412' fill='%23ecf1ff' font-size='28' font-family='Courier New, monospace'>{ status: &quot;ok&quot; }</text><text x='154' y='520' fill='%234cd6b8' font-size='34' font-family='Courier New, monospace'>GET /api/v1/tasks</text><text x='154' y='584' fill='%23ecf1ff' font-size='28' font-family='Courier New, monospace'>[]</text><text x='154' y='692' fill='%23ffb86c' font-size='34' font-family='Courier New, monospace'>/debug/pprof</text><rect x='820' y='270' width='670' height='560' rx='34' fill='%23101727' stroke='%23283857'/><rect x='888' y='340' width='220' height='92' rx='24' fill='%23172034'/><text x='932' y='396' fill='%23f5f7fb' font-size='32' font-family='Arial, sans-serif'>Router</text><rect x='1140' y='340' width='220' height='92' rx='24' fill='%23172034'/><text x='1186' y='396' fill='%23f5f7fb' font-size='32' font-family='Arial, sans-serif'>Store</text><rect x='1014' y='500' width='220' height='92' rx='24' fill='%23172034'/><text x='1062' y='556' fill='%23f5f7fb' font-size='32' font-family='Arial, sans-serif'>Service</text><path d='M1108 432 L1108 500' stroke='%236f7cff' stroke-width='8' stroke-linecap='round'/><path d='M1140 546 L1234 546' stroke='%236f7cff' stroke-width='8' stroke-linecap='round'/><text x='110' y='900' fill='%239da3b0' font-size='30' font-family='Arial, sans-serif'>生成视觉：项目本体无截图，明确用 API 控制台示意图承接后端项目卡</text></svg>",
      coverAlt: "TaskAPI 的生成视觉：Go + Gin 后端接口控制台示意图"
    },
    {
      badge: "Game Experiment",
      status: "Verified",
      title: "cocos_plane 游戏实验",
      excerpt: "Cocos 飞机大战复刻项目已确认，适合归到工程实验层。",
      meta: "Cocos / Mini Game / Experiment",
      linkLabel: "查看详情",
      href: "article.html?slug=cocos-plane-and-android-labs",
      cover: "/static/images/projects/cocos-plane-cover.png",
      coverAlt: "cocos_plane 项目的真实游戏实验画面"
    },
    {
      badge: "Android Lab",
      status: "Verified",
      title: "TestAlipay / InterestingChange",
      excerpt: "已确认多模块 Gradle 工程与 demo 结构，先归入 Android 工程实验。",
      meta: "Android / Gradle / Lab",
      linkLabel: "查看详情",
      href: "article.html?slug=cocos-plane-and-android-labs",
      cover: "/static/images/projects/testalipay-cover.png",
      coverAlt: "TestAlipay 项目的真实应用图标素材"
    },
    {
      badge: "Java / Framework Labs",
      status: "Verified",
      title: "langchai4j / nest / OpenTGX",
      excerpt: "Java 后端、AI 依赖与 TypeScript Cocos 框架方案都已确认存在，先诚实归类为学习样例与框架实验。",
      meta: "Java / Spring Boot / TS / Cocos",
      linkLabel: "查看详情",
      href: "article.html?slug=java-and-framework-labs",
      cover: "/static/images/projects/opentgx-cover.png",
      coverAlt: "OpenTGX 项目中的真实 logo 素材"
    }
  ],
  notes: [
    {
      badge: "Project Note",
      status: "Verified",
      title: "首页内容已改成项目优先",
      excerpt: "现在首页优先展示真实项目卡片，不再混入站点改版过程叙述。",
      meta: "Note 01",
      linkLabel: "打开归档",
      href: "archive.html"
    },
    {
      badge: "Project Note",
      status: "Verified",
      title: "所有详情页都改为项目整理方向",
      excerpt: "保留小程序、后端、实验与学习样例四个方向，不再写聊天口吻内容。",
      meta: "Note 02",
      linkLabel: "查看项目",
      href: "archive.html"
    },
    {
      badge: "Project Note",
      status: "Verified",
      title: "学习样例与框架实验已单独标注",
      excerpt: "归属不确定或证据较弱的内容，统一按学习样例/框架实验展示，避免误导。",
      meta: "Note 03",
      linkLabel: "打开归档",
      href: "archive.html"
    }
  ],
  timelineItems: [
    {
      date: "STEP 01",
      title: "筛出证据最强的项目",
      description: "优先展示 WalkByFaith、TaskAPI、cocos_plane、TestAlipay 这批已经读过关键文件的目录。"
    },
    {
      date: "STEP 02",
      title: "按真实项目 / 工程实验 / 学习样例分层",
      description: "避免把框架实验或说明不足的目录硬包装成上线产品。"
    },
    {
      date: "STEP 03",
      title: "把首页和归档统一成项目入口",
      description: "首页负责项目卡片，归档负责完整整理，详情页负责展开证据。"
    }
  ],
  apiBlueprint: [
    {
      method: "OPEN",
      path: "/archive",
      description: "进入归档页，按分类查看已整理的真实项目。"
    },
    {
      method: "DETAIL",
      path: "/article?slug=walkbyfaith-feature-breakdown",
      description: "查看 WalkByFaith 小程序结构整理。"
    },
    {
      method: "DETAIL",
      path: "/article?slug=taskapi-runtime-breakdown",
      description: "查看 TaskAPI 后端工程整理。"
    },
    {
      method: "DETAIL",
      path: "/article?slug=cocos-plane-and-android-labs",
      description: "查看 Cocos 与 Android 工程实验整理。"
    }
  ]
};
