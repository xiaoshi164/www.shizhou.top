globalThis.window = globalThis.window || {};
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
        "taskapi-go-rest",
        "walkbyfaith-feature-breakdown"
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
      cover: "static/images/projects/walkbyfaith-cover.png",
      coverAlt: "WalkByFaith 小程序组件图标封面",
      gallery: [
        {
          src: "static/images/projects/walkbyfaith-cover.png",
          alt: "WalkByFaith 组件入口图标",
          caption: "来自项目 image 目录，至少说明这个小程序已经整理了组件入口视觉资源。"
        },
        {
          src: "static/images/projects/walkbyfaith-detail-api.png",
          alt: "WalkByFaith API 图标",
          caption: "项目内 API 图标资源，可作为详情页的辅助视觉，不再只剩文字。"
        }
      ],
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
        "walkbyfaith-feature-breakdown",
        "d-drive-project-deck-refresh",
        "taskapi-go-rest"
      ]
    },
    {
      slug: "walkbyfaith-feature-breakdown",
      badge: "Feature Breakdown",
      status: "Deep Dive",
      category: "Mini Program",
      title: "WalkByFaith 继续细拆：主页、我的页、自定义 tabBar 已经够你写成一条完整案例",
      excerpt: "这次不只说它存在，而是把能确认的页面结构、组件依赖和移动端价值拆开讲。",
      meta: "2026.04 / 6 min read",
      date: "2026-04-18",
      readTime: "6 min read",
      orbit: "Orbit W2",
      linkLabel: "Read Detail",
      summary: "WalkByFaith 不该只停留在“有个微信小程序目录”这种级别。现在能确认的证据已经足够把它写成一条更完整的案例：项目配置了主页与我的页、自定义 tabBar、weui-miniprogram 组件，并且 project.config.json 也说明它就是一个实际的小程序工程。",
      cover: "static/images/projects/walkbyfaith-cover.png",
      coverAlt: "WalkByFaith 深化详情封面",
      gallery: [
        {
          src: "static/images/projects/walkbyfaith-cover.png",
          alt: "WalkByFaith 首页组件图",
          caption: "封面直接取自项目 image 目录，至少不是我凭空画出来的假图。"
        },
        {
          src: "static/images/projects/walkbyfaith-detail-api.png",
          alt: "WalkByFaith API 图标资源",
          caption: "API 图标能让详情页先有真实视觉锚点，后面再补正式页面截图。"
        }
      ],
      deck: [
        "不是只有 app.json，而是明确看到了页面入口和组件依赖。",
        "custom tabBar 说明它不是只用默认壳子糊出来的。",
        "这类项目最适合继续补截图和流程图，作品感提升会非常直接。"
      ],
      sections: [
        {
          title: "已经确认到的页面骨架",
          paragraphs: [
            "app.json 里直接列出了 pages/home_page/index 和 pages/my_page/index，说明至少存在首页和我的页两条主路径。",
            "tabBar 配置为 custom: true，并把“主页”和“我的”作为底部入口，这种结构已经很适合写成移动端产品案例。"
          ]
        },
        {
          title: "组件依赖说明了什么",
          paragraphs: [
            "当前 usingComponents 里可见 mp-dialog、mp-actionSheet、mp-icon，同时 useExtendedLib 开启了 weui。",
            "这至少说明它不是只停在页面骨架，而是已经开始接组件能力和交互层。"
          ]
        },
        {
          title: "为什么它值得被深化",
          paragraphs: [
            "因为它是少数天然适合手机端叙事的真实项目。你的网站现在正往 H5 优先走，这个项目放进去会非常顺。",
            "后面只要再补两三张页面截图和关键交互说明，它就能从“目录证明”升级成真正能打的作品卡。"
          ]
        }
      ],
      callout: "能确认到页面入口、组件依赖和 tabBar 的小程序，已经不该只被一句话带过。",
      keypoints: [
        "home_page + my_page",
        "custom tabBar",
        "weui + dialog + actionsheet"
      ],
      relatedSlugs: [
        "walkbyfaith-mini-program",
        "d-drive-project-deck-refresh",
        "taskapi-runtime-breakdown"
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
      cover: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><rect width='1200' height='760' fill='%2307111f'/><rect x='56' y='56' width='1088' height='648' rx='28' fill='%230c2036' stroke='%235ceeff' stroke-opacity='.35'/><text x='92' y='150' fill='%235ceeff' font-size='40' font-family='monospace'>TASKAPI / GO BACKEND</text><text x='92' y='230' fill='%23e7fbff' font-size='28' font-family='monospace'>go run ./cmd/server</text><text x='92' y='290' fill='%238cff8a' font-size='24' font-family='monospace'>GET /ping</text><text x='92' y='338' fill='%238cff8a' font-size='24' font-family='monospace'>GET /api/v1/tasks</text><text x='92' y='386' fill='%23ff9c54' font-size='24' font-family='monospace'>GET /debug/pprof</text><text x='92' y='490' fill='%239ab5c5' font-size='22' font-family='monospace'>gin-gonic/gin + spf13/viper + graceful shutdown</text></svg>",
      coverAlt: "TaskAPI 终端风工程封面",
      gallery: [
        {
          src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><rect width='1200' height='760' fill='%2307111f'/><rect x='56' y='56' width='1088' height='648' rx='28' fill='%230c2036' stroke='%235ceeff' stroke-opacity='.35'/><text x='92' y='150' fill='%235ceeff' font-size='40' font-family='monospace'>TASKAPI / GO BACKEND</text><text x='92' y='230' fill='%23e7fbff' font-size='28' font-family='monospace'>go run ./cmd/server</text><text x='92' y='290' fill='%238cff8a' font-size='24' font-family='monospace'>GET /ping</text><text x='92' y='338' fill='%238cff8a' font-size='24' font-family='monospace'>GET /api/v1/tasks</text><text x='92' y='386' fill='%23ff9c54' font-size='24' font-family='monospace'>GET /debug/pprof</text><text x='92' y='490' fill='%239ab5c5' font-size='22' font-family='monospace'>gin-gonic/gin + spf13/viper + graceful shutdown</text></svg>",
          alt: "TaskAPI 工程能力封面",
          caption: "这张不是项目截图，而是根据 README 已确认的信息做的代码风封面，用来解决后端项目没图的问题。"
        }
      ],
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
        "taskapi-runtime-breakdown",
        "d-drive-project-deck-refresh",
        "walkbyfaith-mini-program"
      ]
    },
    {
      slug: "taskapi-runtime-breakdown",
      badge: "Engineering Detail",
      status: "Deep Dive",
      category: "Backend",
      title: "TaskAPI 继续细拆：运行方式、接口习惯和工程信号已经足够当后端案例",
      excerpt: "go.mod、README 和运行命令都清楚，已经不只是“有个 Go 项目”这么简单。",
      meta: "2026.04 / 6 min read",
      date: "2026-04-18",
      readTime: "6 min read",
      orbit: "Orbit G2",
      linkLabel: "Read Detail",
      summary: "TaskAPI 目前已经具备很完整的对外描述基础：go.mod 明确是 Go 1.21，依赖 Gin 与 Viper；README 直接写出 go run ./cmd/server、/ping、/api/v1/tasks 和 /debug/pprof。这种项目完全可以从“接口项目”继续深化为“后端工程案例”。",
      cover: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><rect width='1200' height='760' fill='%2307111f'/><rect x='56' y='56' width='1088' height='648' rx='28' fill='%230c2036' stroke='%235ceeff' stroke-opacity='.35'/><text x='92' y='150' fill='%235ceeff' font-size='40' font-family='monospace'>TASKAPI / RUNTIME DETAIL</text><text x='92' y='230' fill='%23e7fbff' font-size='28' font-family='monospace'>Go 1.21</text><text x='92' y='286' fill='%238cff8a' font-size='24' font-family='monospace'>gin-gonic/gin</text><text x='92' y='334' fill='%238cff8a' font-size='24' font-family='monospace'>spf13/viper</text><text x='92' y='414' fill='%23ff9c54' font-size='24' font-family='monospace'>/api/v1/tasks  /debug/pprof</text></svg>",
      coverAlt: "TaskAPI 运行细节封面",
      gallery: [
        {
          src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><rect width='1200' height='760' fill='%2307111f'/><rect x='56' y='56' width='1088' height='648' rx='28' fill='%230c2036' stroke='%235ceeff' stroke-opacity='.35'/><text x='92' y='150' fill='%235ceeff' font-size='40' font-family='monospace'>TASKAPI / RUNTIME DETAIL</text><text x='92' y='230' fill='%23e7fbff' font-size='28' font-family='monospace'>Go 1.21</text><text x='92' y='286' fill='%238cff8a' font-size='24' font-family='monospace'>gin-gonic/gin</text><text x='92' y='334' fill='%238cff8a' font-size='24' font-family='monospace'>spf13/viper</text><text x='92' y='414' fill='%23ff9c54' font-size='24' font-family='monospace'>/api/v1/tasks  /debug/pprof</text></svg>",
          alt: "TaskAPI README 信息封面",
          caption: "没现成截图，就先把 README 里已经核实的运行信息视觉化。至少这比一块空白文字墙强。"
        }
      ],
      deck: [
        "运行命令、接口前缀、调试入口都清楚。",
        "Go 1.21 + Gin + Viper 的组合已经能说明工程方向。",
        "只要继续补几段请求/响应示例，这条案例就很完整了。"
      ],
      sections: [
        {
          title: "运行与依赖已经足够清楚",
          paragraphs: [
            "README 明确写出 go mod tidy 与 go run ./cmd/server，说明项目不是一个只给你看源码但不告诉你怎么跑的死仓库。",
            "go.mod 也已经确认 module taskapi、go 1.21，并依赖 gin-gonic/gin 与 spf13/viper，这些都能直接写进详情页。"
          ]
        },
        {
          title: "接口层为什么值得单独讲",
          paragraphs: [
            "健康检查 /ping、任务接口前缀 /api/v1/tasks、调试入口 /debug/pprof 都已经在 README 明示。",
            "这意味着你后面只需要再加几段典型请求示例，就能把它从“项目说明”升级成“接口作品展示”。"
          ]
        },
        {
          title: "它和首页内容怎么配合",
          paragraphs: [
            "首页仍然只负责告诉访客：你做过一个 Go + Gin 的任务管理 API。",
            "真正体现含金量的运行说明、接口习惯和工程信号，就应该沉到这一层详情页里。"
          ]
        }
      ],
      callout: "能把怎么跑、怎么测、接口在哪说清楚的后端项目，已经比大多数空话站点强一截。",
      keypoints: [
        "go run ./cmd/server",
        "/api/v1/tasks + /debug/pprof",
        "Go 1.21 + Gin + Viper"
      ],
      relatedSlugs: [
        "taskapi-go-rest",
        "walkbyfaith-feature-breakdown",
        "d-drive-project-deck-refresh"
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
        "java-and-framework-labs",
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
        "taskapi-runtime-breakdown",
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
      status: "Deep Dive",
      title: "WalkByFaith 页面结构拆解",
      excerpt: "主页、我的页、自定义 tabBar、weui 组件依赖都已确认，已经够写成完整移动端案例。",
      meta: "WeChat / Mini Program / Detail",
      linkLabel: "查看详情",
      href: "article.html?slug=walkbyfaith-feature-breakdown"
    },
    {
      badge: "Backend API",
      status: "Deep Dive",
      title: "TaskAPI 运行与接口拆解",
      excerpt: "Go 1.21、Gin、Viper、/api/v1/tasks、/debug/pprof 都已确认，适合当作后端工程案例。",
      meta: "Go / Gin / API / Detail",
      linkLabel: "查看详情",
      href: "article.html?slug=taskapi-runtime-breakdown"
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
      excerpt: "TestAlipay 已确认 app、test、kmqy 多模块与支付宝/微信 SDK 依赖；InterestingChange 先保持实验分类。",
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
      badge: "Deep Dive",
      status: "Added",
      title: "WalkByFaith 和 TaskAPI 现在不只“存在”，已经补成两条更像案例的详情入口。",
      excerpt: "一个往移动端页面结构走，一个往后端工程细节走，首页的项目卡也顺手更像作品集。",
      meta: "Note 02",
      linkLabel: "打开项目",
      href: "archive.html"
    },
    {
      badge: "Next",
      status: "Queue",
      title: "后面继续补 Android / Java / Cocos 细节页，但继续维持诚实分层。",
      excerpt: "先把证据最足的项目做深，再回头补实验和学习样例，不然全站容易重新变回泛泛而谈。",
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
      title: "开始把证据最足的项目深化成案例",
      description: "先把 WalkByFaith 和 TaskAPI 深化，继续把目录证明升级成真正能点开的项目内容。"
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
      path: "/article?slug=walkbyfaith-feature-breakdown",
      description: "补强后的移动端项目详情入口，专门承接 WalkByFaith 的页面结构与组件信息。"
    },
    {
      method: "DETAIL",
      path: "/article?slug=taskapi-runtime-breakdown",
      description: "补强后的后端项目详情入口，专门承接 TaskAPI 的运行与接口说明。"
    }
  ]
};
