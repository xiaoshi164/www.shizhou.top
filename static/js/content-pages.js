const siteData = window.siteData || { posts: [] };
const posts = Array.isArray(siteData.posts) ? siteData.posts : [];
const syncTime = document.getElementById("sync-time");
const yearMark = document.getElementById("year-mark");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderFooterMeta() {
  if (!syncTime || !yearMark) {
    return;
  }

  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  syncTime.textContent = `最后更新 ${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  yearMark.textContent = String(now.getFullYear());
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

function formatDisplayDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function getRelatedPosts(post) {
  const related = new Set(post.relatedSlugs || []);
  return posts.filter((item) => related.has(item.slug));
}

function renderResponsiveImage(src, alt, className = "") {
  if (!src) {
    return "";
  }

  return `<div class="${escapeHtml(className)}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt || "Project visual")}" loading="lazy"></div>`;
}

function renderArchiveVisual(post) {
  const visual = post.cover || (Array.isArray(post.gallery) ? post.gallery[0]?.src : "");
  if (!visual) {
    return "";
  }

  const alt = post.coverAlt || (Array.isArray(post.gallery) ? post.gallery[0]?.alt : "") || post.title;
  return `
    <div class="archive-card-media">
      <img src="${escapeHtml(visual)}" alt="${escapeHtml(alt)}" loading="lazy">
      <div class="archive-card-media-overlay">
        <span class="archive-card-media-chip">${escapeHtml(post.category)}</span>
        <span class="archive-card-media-chip subtle">${escapeHtml(post.status)}</span>
      </div>
    </div>
  `;
}

function renderGallerySection(article) {
  if (!Array.isArray(article.gallery) || !article.gallery.length) {
    return "";
  }

  return `
    <section class="article-gallery-section">
      <div class="article-gallery-head">
        <span class="panel-tag">图片</span>
        <h2>项目图片</h2>
        <p>这里展示和项目相关的图片资料。</p>
      </div>
      <div class="article-gallery">
        ${article.gallery.map((item) => `
          <figure class="gallery-card">
            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || article.title)}" loading="lazy">
            ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArchivePage() {
  const filterRoot = document.getElementById("archive-filters");
  const gridRoot = document.getElementById("archive-grid");
  const statsRoot = document.getElementById("archive-stats");
  const topicRoot = document.getElementById("topic-cloud");

  if (!filterRoot || !gridRoot || !statsRoot || !topicRoot) {
    return;
  }

  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  let activeCategory = "All";

  function renderStats() {
    const totalRead = posts.reduce((sum, post) => {
      const match = String(post.readTime).match(/\d+/);
      return sum + Number(match ? match[0] : 0);
    }, 0);
    const latest = posts[0];

    statsRoot.innerHTML = `
      <article class="stat-card">
        <span class="panel-tag">项目数量</span>
        <strong>${posts.length}</strong>
        <p>当前归档中的项目数量。</p>
      </article>
      <article class="stat-card">
        <span class="panel-tag">阅读时间</span>
        <strong>${totalRead} 分钟</strong>
        <p>看完全部项目的大致时间。</p>
      </article>
      <article class="stat-card">
        <span class="panel-tag">最新项目</span>
        <strong>${escapeHtml(latest ? latest.title : "暂无")}</strong>
        <p>最新显示的项目。</p>
      </article>
    `;
  }

  function renderTopics() {
    topicRoot.innerHTML = [...new Set(posts.map((post) => post.category))].map((category) => `
      <span class="topic-pill">${escapeHtml(category)}</span>
    `).join("");
  }

  function renderFilters() {
    filterRoot.innerHTML = categories.map((category) => `
      <button class="filter-chip${category === activeCategory ? " is-active" : ""}" type="button" data-category="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `).join("");

    filterRoot.querySelectorAll(".filter-chip").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        renderFilters();
        renderArchiveCards();
      });
    });
  }

  function renderArchiveCards() {
    const filteredPosts = activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

    if (!filteredPosts.length) {
      gridRoot.innerHTML = `
        <article class="archive-card empty-state">
          <span class="panel-tag">暂无内容</span>
          <h3>这个分类下还没有项目。</h3>
          <p>可以切换其他分类看看。</p>
        </article>
      `;
      return;
    }

    gridRoot.innerHTML = filteredPosts.map((post) => {
      const image = renderArchiveVisual(post);

      return `
      <article class="archive-card">
        ${image}
        <div class="archive-card-body">
          <div class="archive-card-head">
            <span class="feed-badge">${escapeHtml(post.badge)}</span>
            <span class="feed-status">${escapeHtml(post.status)}</span>
          </div>
          <div>
            <p class="eyebrow">${escapeHtml(post.category)} / ${escapeHtml(post.orbit)}</p>
            <h3 class="archive-card-title">${escapeHtml(post.title)}</h3>
          </div>
          <p class="archive-card-summary">${escapeHtml(post.summary)}</p>
          <div class="archive-card-footer">
            <span class="feed-meta">${escapeHtml(formatDisplayDate(post.date))} / ${escapeHtml(post.readTime)}</span>
            <a class="feed-link" href="article.html?slug=${encodeURIComponent(post.slug)}">查看详情</a>
          </div>
        </div>
      </article>
    `;
    }).join("");
  }

  renderStats();
  renderTopics();
  renderFilters();
  renderArchiveCards();
}

function renderArticlePage() {
  const articleRoot = document.getElementById("article-root");
  const relatedRoot = document.getElementById("related-grid");

  if (!articleRoot || !relatedRoot) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const article = posts.find((post) => post.slug === slug) || posts[0];

  if (!article) {
    articleRoot.innerHTML = `
      <article class="section article-panel empty-state">
        <span class="panel-tag">未找到</span>
        <h2>没有找到对应项目。</h2>
        <p>请返回归档页重新选择。</p>
      </article>
    `;
    relatedRoot.innerHTML = "";
    return;
  }

  document.title = `${article.title} // Shizhou`;

  articleRoot.innerHTML = `
    <div class="article-main">
      <article class="section article-panel reveal">
        <div class="detail-meta">
          <span>${escapeHtml(article.badge)}</span>
          <span>${escapeHtml(formatDisplayDate(article.date))}</span>
          <span>${escapeHtml(article.readTime)}</span>
        </div>
        <p class="eyebrow">${escapeHtml(article.category)} / ${escapeHtml(article.orbit)}</p>
        <h1>${escapeHtml(article.title)}</h1>
        <p class="archive-intro">${escapeHtml(article.summary)}</p>
        ${renderResponsiveImage(article.cover, article.coverAlt || article.title, "article-hero-media")}
        <div class="article-deck">
          ${article.deck.map((item) => `<div class="article-deck-item">${escapeHtml(item)}</div>`).join("")}
        </div>
      </article>

      <article class="section article-panel reveal">
        <div class="article-body">
          ${article.sections.map((section) => `
            <section class="article-section">
              <h2>${escapeHtml(section.title)}</h2>
              ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
            </section>
          `).join("")}
        </div>
      </article>

      ${renderGallerySection(article)}

      <article class="article-callout reveal">
        <span class="panel-tag">项目说明</span>
        <p>${escapeHtml(article.callout)}</p>
      </article>
    </div>

    <aside class="article-aside reveal">
      <div class="aside-group">
        <span class="panel-tag">目录</span>
        <ol class="article-outline">
          ${article.sections.map((section) => `<li>${escapeHtml(section.title)}</li>`).join("")}
        </ol>
      </div>
      <div class="aside-group">
        <span class="panel-tag">要点</span>
        <div class="article-tags">
          ${article.keypoints.map((point) => `<span class="tag-chip">${escapeHtml(point)}</span>`).join("")}
        </div>
      </div>
      <div class="aside-group">
        <span class="panel-tag">跳转</span>
        <a class="mini-link" href="archive.html">返回归档</a>
        <a class="mini-link" href="index.html#project-deck">回到首页</a>
      </div>
    </aside>
  `;

  const relatedPosts = getRelatedPosts(article);
  relatedRoot.innerHTML = relatedPosts.map((post) => `
    <article class="mini-card reveal">
      ${renderResponsiveImage(post.cover, post.coverAlt || post.title, "mini-card-media")}
      <span class="panel-tag">${escapeHtml(post.category)}</span>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(post.excerpt)}</p>
      <a class="feed-link" href="article.html?slug=${encodeURIComponent(post.slug)}">查看详情</a>
    </article>
  `).join("");
}

renderArchivePage();
renderArticlePage();
bindReveal();
renderFooterMeta();
