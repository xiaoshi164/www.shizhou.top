const siteData = window.siteData || {};

const contentMap = {
  posts: (siteData.posts || []).map((post) => ({
    badge: post.badge,
    status: post.status,
    title: post.title,
    excerpt: post.excerpt,
    meta: post.meta,
    linkLabel: post.linkLabel,
    href: `article.html?slug=${encodeURIComponent(post.slug)}`
  })),
  projects: siteData.projects || [],
  notes: siteData.notes || []
};

const timelineItems = siteData.timelineItems || [];
const apiBlueprint = siteData.apiBlueprint || [];

const feedGrid = document.getElementById("feed-grid");
const tabs = document.querySelectorAll(".feed-tab");
const timelineList = document.getElementById("timeline-list");
const apiList = document.getElementById("api-list");
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

function renderFeed(type) {
  const items = contentMap[type] || [];

  feedGrid.innerHTML = items.map((item) => `
    <article class="feed-card">
      <div class="feed-card-top">
        <span class="feed-badge">${escapeHtml(item.badge)}</span>
        <span class="feed-status">${escapeHtml(item.status)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.excerpt)}</p>
      <div class="feed-footer">
        <span class="feed-meta">${escapeHtml(item.meta)}</span>
        <a class="feed-link" href="${escapeHtml(item.href || "archive.html")}">${escapeHtml(item.linkLabel)}</a>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  timelineList.innerHTML = timelineItems.map((item) => `
    <article class="timeline-item">
      <div class="timeline-date">${escapeHtml(item.date)}</div>
      <div class="timeline-body">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderApiList() {
  apiList.innerHTML = apiBlueprint.map((item) => `
    <div class="api-item">
      <div class="api-topline">
        <span class="api-method">${escapeHtml(item.method)}</span>
        <span class="api-path">${escapeHtml(item.path)}</span>
      </div>
      <p>${escapeHtml(item.description)}</p>
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
