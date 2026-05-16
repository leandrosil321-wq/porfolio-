/* ============================================================
   PORTFOLIO PREMIUM — main.js
   Animations · Nav · Typed · Modal · Scroll · Theme
   ============================================================ */

'use strict';

/* ─── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initTheme();
  initTyped();
  initScrollAnimations();
  initScrollProgress();
  initProjectFilters();
  initProjectModal();
  initTestimonials();
  initContactForm();
  initSmoothScroll();
  applyStoredConfig();
});

/* ─── Loader ────────────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1900);
  document.body.style.overflow = 'hidden';
}

/* ─── Custom Cursor ─────────────────────────────────────────── */
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring || window.innerWidth < 768) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, [role="button"], .project-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ─── Navigation ────────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-links a, #mobile-nav a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    updateActiveLink();
  }, { passive: true });

  // Hamburger
  hamburger?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    navOverlay.classList.toggle('show', isOpen);
  });

  navOverlay?.addEventListener('click', closeMobileNav);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

  function closeMobileNav() {
    mobileNav?.classList.remove('open');
    hamburger?.classList.remove('open');
    navOverlay?.classList.remove('show');
  }

  // Active link on scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
}

/* ─── Theme ─────────────────────────────────────────────────── */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('pf-theme') || 'dark';
  applyTheme(stored);
  btn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('pf-theme', next);
  });
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ─── Typed Effect ──────────────────────────────────────────── */
function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const cfg = getConfig();
  const words = cfg.typedWords || ['Comunicador Social', 'Community Manager', 'Diseñador Visual', 'Fotógrafo', 'Estratega Político'];
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const word = words[wordIdx];
    el.textContent = deleting ? word.slice(0, charIdx--) : word.slice(0, charIdx++);
    let delay = deleting ? 50 : 100;
    if (!deleting && charIdx > word.length) { delay = 1800; deleting = true; }
    else if (deleting && charIdx < 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; charIdx = 0; delay = 300; }
    setTimeout(type, delay);
  }
  type();
}

/* ─── Scroll Animations ─────────────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

/* ─── Scroll Progress ───────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ─── Project Filters ───────────────────────────────────────── */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        card.style.animation = match ? 'fadeUp 0.4s ease both' : '';
      });
    });
  });
}

/* ─── Project Modal ─────────────────────────────────────────── */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const backdrop = modal?.querySelector('.modal-backdrop');
  const closeBtn = modal?.querySelector('.modal-close');

  document.querySelectorAll('.project-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.modal;
      openModal(id);
    });
  });

  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(id) {
  const cfg = getConfig();
  const project = (cfg.projects || []).find(p => p.id == id);
  if (!project) return;
  const modal = document.getElementById('project-modal');
  modal.querySelector('#modal-title').textContent = project.title || '';
  modal.querySelector('#modal-desc').textContent = project.desc || '';
  const img = modal.querySelector('#modal-img');
  if (project.image) { img.src = project.image; img.style.display = ''; }
  else img.style.display = 'none';
  const link = modal.querySelector('#modal-link');
  if (project.link) { link.href = project.link; link.style.display = ''; }
  else link.style.display = 'none';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Testimonials Slider ───────────────────────────────────── */
function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testi-dot');
  if (!track) return;
  let current = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const total = Math.ceil(cards.length / 2);

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, total - 1));
    const cardW = cards[0]?.offsetWidth + 24 || 0;
    track.style.transform = `translateX(-${current * cardW * 2}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  goTo(0);

  // Auto-advance
  let autoTimer = setInterval(() => goTo((current + 1) % total), 5000);
  track.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => goTo((current + 1) % total), 5000);
  });
}

/* ─── Contact Form ──────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      const msg = document.getElementById('form-success');
      if (msg) { msg.style.display = 'block'; setTimeout(() => msg.style.display = 'none', 4000); }
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
    }, 1200);
  });
}

/* ─── Smooth Scroll ─────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─── Config helpers ────────────────────────────────────────── */
function getConfig() {
  try { return JSON.parse(localStorage.getItem('pf-config') || '{}'); }
  catch { return {}; }
}
function saveConfig(cfg) {
  localStorage.setItem('pf-config', JSON.stringify(cfg));
}

/* ─── Apply stored config to DOM ────────────────────────────── */
function applyStoredConfig() {
  const cfg = getConfig();

  // Colors
  if (cfg.colors) {
    Object.entries(cfg.colors).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }
  // Font
  if (cfg.fontBody) {
    document.documentElement.style.setProperty('--font-body', cfg.fontBody);
  }
  if (cfg.fontDisplay) {
    document.documentElement.style.setProperty('--font-display', cfg.fontDisplay);
  }
  // Border radius
  if (cfg.radius) {
    document.documentElement.style.setProperty('--radius-lg', cfg.radius + 'px');
    document.documentElement.style.setProperty('--radius-xl', (parseInt(cfg.radius) + 8) + 'px');
  }
  // Text content
  if (cfg.content) applyContent(cfg.content);
  // Section visibility
  if (cfg.sections) applySectionVisibility(cfg.sections);
  // Projects
  if (cfg.projects) renderProjects(cfg.projects);
  // Testimonials
  if (cfg.testimonials) renderTestimonials(cfg.testimonials);
  // Clients
  if (cfg.clients) renderClients(cfg.clients);
  // Services
  if (cfg.services) renderServices(cfg.services);
  // Skills
  if (cfg.skills) renderSkills(cfg.skills);
  // Timeline
  if (cfg.timeline) renderTimeline(cfg.timeline);
  // SEO
  if (cfg.seo) applySEO(cfg.seo);
}

function applyContent(content) {
  const map = {
    'hero-name': '#hero-name',
    'hero-subtitle': '#hero-subtitle',
    'hero-desc': '#hero-desc',
    'hero-cta1': '#hero-cta1',
    'hero-cta2': '#hero-cta2',
    'about-text': '#about-text',
    'about-stat1-num': '#about-stat1-num',
    'about-stat1-label': '#about-stat1-label',
    'about-stat2-num': '#about-stat2-num',
    'about-stat2-label': '#about-stat2-label',
    'about-stat3-num': '#about-stat3-num',
    'about-stat3-label': '#about-stat3-label',
    'contact-email': '#contact-email',
    'contact-phone': '#contact-phone',
    'contact-location': '#contact-location',
    'footer-name': '#footer-name',
    'footer-copy': '#footer-copy',
    'whatsapp-link': null,
    'instagram-link': null,
    'linkedin-link': null,
  };
  Object.entries(content).forEach(([key, val]) => {
    if (map[key] && map[key]) {
      const el = document.querySelector(map[key]);
      if (el) el.textContent = val;
    }
  });
  // Links
  if (content['whatsapp-link']) {
    document.querySelector('#whatsapp-btn')?.setAttribute('href', 'https://wa.me/' + content['whatsapp-link'].replace(/\D/g,''));
  }
  if (content['instagram-link']) {
    document.querySelector('#instagram-link')?.setAttribute('href', content['instagram-link']);
  }
  if (content['linkedin-link']) {
    document.querySelector('#linkedin-link')?.setAttribute('href', content['linkedin-link']);
  }
}

function applySectionVisibility(sections) {
  Object.entries(sections).forEach(([id, visible]) => {
    const el = document.getElementById(id);
    if (el) el.style.display = visible ? '' : 'none';
    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navLink) navLink.parentElement.style.display = visible ? '' : 'none';
  });
}

function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.modal = p.id;
    card.dataset.category = p.category || 'all';
    card.innerHTML = `
      <div class="project-thumb">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
          : `<div class="project-thumb-placeholder" style="background:${p.color||'var(--bg-tertiary)'}">
               <span>${p.emoji||'📁'}</span>
             </div>`
        }
        <div class="project-overlay-btn">
          <button class="btn btn-primary" style="font-size:0.75rem">Ver proyecto</button>
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${(p.tags||[]).map(t=>`<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title||'Proyecto'}</h3>
        <p class="project-desc">${p.desc||''}</p>
      </div>
    `;
    grid.appendChild(card);
  });
  // Re-init modal listeners
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });
}

function renderTestimonials(testimonials) {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;
  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.avatar||'👤'}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
  const dotsWrap = document.querySelector('.testimonials-nav');
  if (dotsWrap) {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < Math.ceil(testimonials.length / 2); i++) {
      const d = document.createElement('button');
      d.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dotsWrap.appendChild(d);
    }
  }
  initTestimonials();
}

function renderClients(clients) {
  const track = document.querySelector('.clients-track');
  if (!track) return;
  const html = clients.map(c =>
    `<div class="client-logo">${c.image ? `<img src="${c.image}" alt="${c.name}">` : c.name}</div>`
  ).join('');
  track.innerHTML = html + html; // duplicate for infinite loop
}

function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services.map(s => `
    <div class="service-card glass-card" data-reveal>
      <div class="service-icon">${s.icon||'✦'}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
    </div>
  `).join('');
}

function renderSkills(skills) {
  const wrap = document.getElementById('skills-pills');
  if (!wrap) return;
  wrap.innerHTML = skills.map(s => `<span class="skill-pill">${s}</span>`).join('');
}

function renderTimeline(items) {
  const wrap = document.getElementById('timeline');
  if (!wrap) return;
  wrap.innerHTML = items.map(item => `
    <div class="timeline-item" data-reveal>
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-company">${item.company}</div>
    </div>
  `).join('');
}

function applySEO(seo) {
  if (seo.title) document.title = seo.title;
  if (seo.desc) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = seo.desc;
  }
  if (seo.keywords) {
    let meta = document.querySelector('meta[name="keywords"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'keywords'; document.head.appendChild(meta); }
    meta.content = seo.keywords;
  }
}

// Expose helpers for admin
window.PF = { getConfig, saveConfig, applyStoredConfig, applyContent, renderProjects, renderServices, renderSkills, renderTimeline, renderClients, renderTestimonials, applySectionVisibility, applySEO };
