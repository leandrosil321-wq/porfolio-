/* ============================================================
   PORTFOLIO PREMIUM — admin.js
   Visual Editor Panel — Full Mini CMS
   Password: admin123 (cambiable en config)
   ============================================================ */

'use strict';

const ADMIN_PASSWORD = 'admin123';

/* ─── Default config ────────────────────────────────────────── */
const DEFAULT_CONFIG = {
  seo: {
    title: 'Tu Nombre — Portfolio Profesional',
    desc: 'Comunicador Social, Community Manager, Fotógrafo y Diseñador. Portfolio profesional.',
    keywords: 'comunicación, community manager, fotografía, diseño, política'
  },
  content: {
    'hero-name': 'Tu Nombre',
    'hero-subtitle': 'Comunicador Social',
    'hero-desc': 'Especialista en comunicación digital, imagen y estrategia política e institucional.',
    'hero-cta1': 'Ver proyectos',
    'hero-cta2': 'Contactar',
    'about-text': 'Soy comunicador social con especialización en estrategia de contenidos, community management y producción audiovisual. Me apasiona traducir ideas complejas en mensajes que conectan con la gente. Trabajo en la intersección del diseño, la fotografía y la comunicación política para construir marcas y campañas que perduran.',
    'about-stat1-num': '+5', 'about-stat1-label': 'Años exp.',
    'about-stat2-num': '+30', 'about-stat2-label': 'Proyectos',
    'about-stat3-num': '+10', 'about-stat3-label': 'Clientes',
    'contact-email': 'tunombre@email.com',
    'contact-phone': '+54 911 0000-0000',
    'contact-location': 'Entre Ríos, Argentina',
    'whatsapp-link': '5491100000000',
    'instagram-link': 'https://instagram.com/tunombre',
    'linkedin-link': 'https://linkedin.com/in/tunombre',
    'footer-name': 'Tu Nombre',
    'footer-copy': '© 2025 · Todos los derechos reservados'
  },
  typedWords: ['Comunicador Social', 'Community Manager', 'Diseñador Visual', 'Fotógrafo', 'Estratega Político'],
  colors: {
    '--accent': '#7c6cfc',
    '--accent-light': '#a99bff',
    '--accent-dark': '#5340e8',
    '--gold': '#f0c060',
    '--bg-primary': '#080810',
    '--bg-secondary': '#0f0f1a'
  },
  fontDisplay: "'Syne', sans-serif",
  fontBody: "'Outfit', sans-serif",
  radius: 20,
  sections: {
    'hero': true, 'about': true, 'services': true, 'projects': true,
    'experience': true, 'testimonials': true, 'clients': true, 'contact': true
  },
  skills: ['Comunicación Digital', 'Community Management', 'Fotografía', 'Diseño Gráfico', 'Video & Edición', 'Comunicación Política', 'Redes Sociales', 'Estrategia de Contenidos', 'Adobe Suite', 'Capcut'],
  services: [
    { icon: '📡', title: 'Community Management', desc: 'Gestión estratégica de redes sociales, planificación editorial y crecimiento de comunidades digitales.' },
    { icon: '🎥', title: 'Video & Fotografía', desc: 'Producción, edición y dirección de contenido audiovisual para marcas, eventos y campañas.' },
    { icon: '🎨', title: 'Diseño Gráfico', desc: 'Identidad visual, piezas gráficas, infografías y material para campañas digitales e impresas.' },
    { icon: '🏛️', title: 'Comunicación Política', desc: 'Estrategia de imagen, vocería, gestión de crisis y comunicación institucional para actores públicos.' },
    { icon: '📸', title: 'Fotografía Profesional', desc: 'Sesiones de retrato, eventos, productos y fotografía editorial con post-producción incluida.' },
    { icon: '📊', title: 'Estrategia Digital', desc: 'Análisis de audiencias, planificación de campañas y métricas para maximizar el alcance e impacto.' }
  ],
  projects: [
    { id: 1, title: 'Campaña Municipal 2023', desc: 'Estrategia integral de comunicación, producción de contenidos y gestión de redes para candidatura local. Incremento del 40% en la intención de voto entre el público joven.', tags: ['Política', 'Redes', 'Estrategia'], category: 'politica', emoji: '🏛️', color: '#1a0e2e' },
    { id: 2, title: 'Marca Gastronómica', desc: 'Crecimiento del 300% en seguidores orgánicos y aumento de reservas mediante contenido estratégico y reels virales.', tags: ['Community', 'Video', 'Diseño'], category: 'community', emoji: '🍽️', color: '#0e1e2e' },
    { id: 3, title: 'Documental Institucional', desc: 'Dirección y edición de documental corporativo para ONG de impacto social en la región. Seleccionado en festival nacional.', tags: ['Video', 'Dirección'], category: 'video', emoji: '🎬', color: '#2e1a0e' },
    { id: 4, title: 'Identidad Visual Completa', desc: 'Rediseño completo de identidad visual y sesión fotográfica para estudio de arquitectura. Incluye manual de marca.', tags: ['Diseño', 'Fotografía'], category: 'diseño', emoji: '🎨', color: '#0e2e1a' },
    { id: 5, title: 'Municipio Digital', desc: 'Modernización de la comunicación institucional de un municipio: web, redes sociales y materiales de prensa.', tags: ['Institucional', 'Web', 'Redes'], category: 'politica', emoji: '🌐', color: '#2e0e1a' },
    { id: 6, title: 'Reels Virales — Moda', desc: 'Producción de serie de reels para marca de moda local con más de 500k reproducciones y colaboración con influencers.', tags: ['Video', 'Redes', 'Moda'], category: 'video', emoji: '✨', color: '#1a1e0e' }
  ],
  testimonials: [
    { name: 'María González', role: 'Directora de Marketing, Empresa XYZ', text: 'Trabajar con este profesional transformó completamente nuestra presencia digital. Los resultados superaron todas las expectativas en tiempo récord.', avatar: '👩‍💼' },
    { name: 'Carlos Rodríguez', role: 'Candidato Municipal', text: 'Su manejo de la comunicación política fue clave para nuestra campaña. Supo transmitir nuestro mensaje con autenticidad y llegar al público correcto.', avatar: '👨‍💼' },
    { name: 'Ana Martínez', role: 'Dueña, Restaurante La Esquina', text: 'Gracias a su trabajo en redes sociales, mi restaurante triplicó las reservas en tres meses. El contenido que crea es simplemente espectacular.', avatar: '👩‍🍳' },
    { name: 'Javier López', role: 'CEO, Startup Tecnológica', text: 'Profesional al 100%. Entregó el video corporativo antes del plazo y con una calidad que no esperábamos. Volvería a contratarlo sin dudar.', avatar: '👨‍💻' }
  ],
  clients: [
    { name: 'CLIENTE A' }, { name: 'BRAND CO' }, { name: 'MEDIA LAB' },
    { name: 'GOV INST' }, { name: 'FOTO STUDIO' }, { name: 'DIGITAL MX' }
  ],
  timeline: [
    { date: '2023 — Presente', title: 'Comunicador & Consultor Digital', company: 'Freelance — Entre Ríos, Argentina' },
    { date: '2021 — 2023', title: 'Community Manager Senior', company: 'Agencia CreativeHub' },
    { date: '2019 — 2021', title: 'Diseñador & Fotógrafo', company: 'Estudio Visual Pro' },
    { date: '2017 — 2019', title: 'Comunicador Institucional', company: 'Municipalidad de Paraná' }
  ]
};

/* ─── State ─────────────────────────────────────────────────── */
let cfg = {};
let autosaveTimer = null;
let confirmCallback = null;

/* ─── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', initAdmin);

function initAdmin() {
  cfg = mergeDeep(DEFAULT_CONFIG, window.PF?.getConfig() || {});

  buildAdminUI();
  initLock();
  initTrigger();
  initTabs();
  initTabContent();
  initFooterActions();
  initDragSections();
  initConfirmDialog();
}

/* ─── Merge helper ──────────────────────────────────────────── */
function mergeDeep(target, source) {
  const out = Object.assign({}, target);
  Object.keys(source).forEach(k => {
    if (source[k] && typeof source[k] === 'object' && !Array.isArray(source[k])) {
      out[k] = mergeDeep(target[k] || {}, source[k]);
    } else if (source[k] !== undefined && source[k] !== null && source[k] !== '') {
      out[k] = source[k];
    }
  });
  return out;
}

/* ─── Build Admin HTML ──────────────────────────────────────── */
function buildAdminUI() {
  if (document.getElementById('admin-panel')) return;

  document.body.insertAdjacentHTML('beforeend', `
    <!-- Cursor -->
    <div id="cursor-dot"></div>
    <div id="cursor-ring"></div>

    <!-- Scroll progress -->
    <div id="scroll-progress"></div>

    <!-- Admin trigger -->
    <button id="admin-trigger" title="Panel de administración">⚙</button>

    <!-- Lock screen -->
    <div id="admin-lock">
      <div class="lock-box">
        <div class="lock-icon">🔐</div>
        <div class="lock-title">Área Administrador</div>
        <div class="lock-sub">Ingresá tu contraseña para acceder al panel de edición</div>
        <input type="password" class="lock-input" id="lock-input" placeholder="••••••••" autocomplete="off">
        <div class="lock-error" id="lock-error">Contraseña incorrecta. Intentá de nuevo.</div>
        <button class="btn btn-primary" style="width:100%" onclick="checkPassword()">Acceder →</button>
        <div class="lock-hint">Contraseña por defecto: admin123</div>
      </div>
    </div>

    <!-- Admin overlay -->
    <div id="admin-overlay"></div>

    <!-- Admin panel -->
    <div id="admin-panel">
      <div class="admin-header">
        <div class="admin-header-title">⚙ Panel <span>Admin</span></div>
        <button class="admin-close" onclick="togglePanel(false)">✕</button>
      </div>

      <div class="admin-tabs">
        <button class="admin-tab active" data-tab="content">
          <span class="tab-icon">📝</span>Contenido
        </button>
        <button class="admin-tab" data-tab="design">
          <span class="tab-icon">🎨</span>Diseño
        </button>
        <button class="admin-tab" data-tab="media">
          <span class="tab-icon">🖼</span>Media
        </button>
        <button class="admin-tab" data-tab="sections">
          <span class="tab-icon">📦</span>Secciones
        </button>
        <button class="admin-tab" data-tab="projects">
          <span class="tab-icon">💼</span>Proyectos
        </button>
        <button class="admin-tab" data-tab="seo">
          <span class="tab-icon">🚀</span>SEO
        </button>
      </div>

      <div class="admin-body" id="admin-body">
        <!-- Content tab -->
        <div class="tab-pane active" id="tab-content">
          ${buildContentTab()}
        </div>
        <!-- Design tab -->
        <div class="tab-pane" id="tab-design">
          ${buildDesignTab()}
        </div>
        <!-- Media tab -->
        <div class="tab-pane" id="tab-media">
          ${buildMediaTab()}
        </div>
        <!-- Sections tab -->
        <div class="tab-pane" id="tab-sections">
          ${buildSectionsTab()}
        </div>
        <!-- Projects tab -->
        <div class="tab-pane" id="tab-projects">
          ${buildProjectsTab()}
        </div>
        <!-- SEO tab -->
        <div class="tab-pane" id="tab-seo">
          ${buildSEOTab()}
        </div>
      </div>

      <div class="autosave-indicator">
        <div class="autosave-dot" id="autosave-dot"></div>
        <span id="autosave-text">Cambios sin guardar</span>
      </div>

      <div class="admin-footer">
        <button class="admin-footer-btn btn-save" onclick="saveAll()">💾 Guardar</button>
        <button class="admin-footer-btn btn-reset" onclick="confirmReset()">↺ Reset</button>
        <button class="admin-footer-btn btn-export" onclick="exportConfig()">↓ Export</button>
        <button class="admin-footer-btn btn-import" onclick="triggerImport()">↑ Import</button>
        <input type="file" id="import-input" accept=".json" style="display:none" onchange="importConfig(event)">
      </div>
    </div>

    <!-- Confirm dialog -->
    <div id="confirm-dialog">
      <div class="confirm-box">
        <div class="confirm-icon" id="confirm-icon">⚠️</div>
        <div class="confirm-title" id="confirm-title">¿Estás seguro?</div>
        <div class="confirm-msg" id="confirm-msg">Esta acción no se puede deshacer.</div>
        <div class="confirm-btns">
          <button class="confirm-cancel" onclick="closeConfirm()">Cancelar</button>
          <button class="confirm-ok" onclick="runConfirm()">Confirmar</button>
        </div>
      </div>
    </div>
  `);
}

/* ─── Tab content builders ──────────────────────────────────── */
function buildContentTab() {
  const c = cfg.content || {};
  return `
    <div class="admin-section">
      <div class="admin-section-title">Hero</div>
      ${field('Nombre / Título', 'hero-name', c['hero-name'], 'input')}
      ${field('Subtítulo fijo', 'hero-subtitle', c['hero-subtitle'], 'input')}
      ${field('Palabras animadas (separadas por coma)', 'typed-words', (cfg.typedWords||[]).join(', '), 'input')}
      ${field('Descripción', 'hero-desc', c['hero-desc'], 'textarea')}
      ${field('Botón 1', 'hero-cta1', c['hero-cta1'], 'input')}
      ${field('Botón 2', 'hero-cta2', c['hero-cta2'], 'input')}
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Sobre mí</div>
      ${field('Texto biográfico', 'about-text', c['about-text'], 'textarea')}
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem">
        ${field('Nro 1', 'about-stat1-num', c['about-stat1-num'], 'input')}
        ${field('Nro 2', 'about-stat2-num', c['about-stat2-num'], 'input')}
        ${field('Nro 3', 'about-stat3-num', c['about-stat3-num'], 'input')}
        ${field('Label 1', 'about-stat1-label', c['about-stat1-label'], 'input')}
        ${field('Label 2', 'about-stat2-label', c['about-stat2-label'], 'input')}
        ${field('Label 3', 'about-stat3-label', c['about-stat3-label'], 'input')}
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Skills</div>
      ${field('Skills (separadas por coma)', 'skills-field', (cfg.skills||[]).join(', '), 'input')}
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Contacto & Redes</div>
      ${field('Email', 'contact-email', c['contact-email'], 'input')}
      ${field('Teléfono', 'contact-phone', c['contact-phone'], 'input')}
      ${field('Ubicación', 'contact-location', c['contact-location'], 'input')}
      ${field('WhatsApp (solo números)', 'whatsapp-link', c['whatsapp-link'], 'input')}
      ${field('Instagram URL', 'instagram-link', c['instagram-link'], 'input')}
      ${field('LinkedIn URL', 'linkedin-link', c['linkedin-link'], 'input')}
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Footer</div>
      ${field('Nombre en footer', 'footer-name', c['footer-name'], 'input')}
      ${field('Texto de copyright', 'footer-copy', c['footer-copy'], 'input')}
    </div>
  `;
}

function buildDesignTab() {
  const colors = cfg.colors || {};
  return `
    <div class="admin-section">
      <div class="admin-section-title">Modo</div>
      <div class="toggle-row">
        <span class="toggle-label">Modo claro / oscuro</span>
        <label class="toggle">
          <input type="checkbox" id="toggle-theme" ${document.documentElement.getAttribute('data-theme')==='light'?'checked':''} onchange="toggleThemeAdmin(this.checked)">
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Colores principales</div>
      <div class="color-row">
        ${colorField('Acento', '--accent', colors['--accent']||'#7c6cfc')}
        ${colorField('Acento claro', '--accent-light', colors['--accent-light']||'#a99bff')}
        ${colorField('Dorado', '--gold', colors['--gold']||'#f0c060')}
        ${colorField('Fondo', '--bg-primary', colors['--bg-primary']||'#080810')}
        ${colorField('Fondo 2', '--bg-secondary', colors['--bg-secondary']||'#0f0f1a')}
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Tipografía</div>
      <div class="admin-label">Fuente de títulos</div>
      <div class="font-grid" id="font-display-grid">
        ${['Syne','Playfair Display','Space Grotesk','DM Serif Display','Raleway'].map(f=>`
          <div class="font-option ${cfg.fontDisplay?.includes(f)?'selected':''}" data-font="${f}" data-target="display"
               onclick="selectFont(this,'display')" style="font-family:'${f}',sans-serif">${f}</div>
        `).join('')}
      </div>
      <div class="admin-label" style="margin-top:0.75rem">Fuente de cuerpo</div>
      <div class="font-grid" id="font-body-grid">
        ${['Outfit','DM Sans','Inter','Nunito','Manrope'].map(f=>`
          <div class="font-option ${cfg.fontBody?.includes(f)?'selected':''}" data-font="${f}" data-target="body"
               onclick="selectFont(this,'body')" style="font-family:'${f}',sans-serif">${f}</div>
        `).join('')}
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Bordes y espaciado</div>
      <div class="admin-label">Radio de bordes (${cfg.radius||20}px)</div>
      <div class="range-wrap">
        <input type="range" class="admin-range" id="radius-range" min="0" max="36" value="${cfg.radius||20}"
               oninput="updateRadius(this.value)">
        <span class="range-val" id="radius-val">${cfg.radius||20}px</span>
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Preview responsivo</div>
      <div class="responsive-bar">
        <button class="resp-btn active" onclick="previewResponsive('desktop',this)">🖥 Desktop</button>
        <button class="resp-btn" onclick="previewResponsive('tablet',this)">📱 Tablet</button>
        <button class="resp-btn" onclick="previewResponsive('mobile',this)">📱 Mobile</button>
      </div>
      <div style="font-size:0.75rem;color:#5a5875">
        Usa las DevTools del navegador (F12 → ícono de dispositivo) para ver la vista en distintos tamaños.
      </div>
    </div>
  `;
}

function buildMediaTab() {
  return `
    <div class="admin-section">
      <div class="admin-section-title">Foto del Hero</div>
      <div class="upload-zone" id="upload-hero" onclick="triggerUpload('hero-photo')">
        <div class="upload-icon">👤</div>
        <div class="upload-text">Arrastrá o <strong>hacé click</strong> para subir tu foto de perfil</div>
        <div style="font-size:0.7rem;color:#5a5875;margin-top:0.3rem">JPG, PNG, WEBP — máx 5MB</div>
      </div>
      <input type="file" id="upload-hero-photo" accept="image/*" style="display:none" onchange="handleUpload('hero-photo',this)">
      <div class="upload-preview" id="preview-hero"></div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Foto "Sobre mí"</div>
      <div class="upload-zone" id="upload-about" onclick="triggerUpload('about-photo')">
        <div class="upload-icon">🖼</div>
        <div class="upload-text">Arrastrá o <strong>hacé click</strong> para subir</div>
      </div>
      <input type="file" id="upload-about-photo" accept="image/*" style="display:none" onchange="handleUpload('about-photo',this)">
      <div class="upload-preview" id="preview-about"></div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Logo / Marca</div>
      <div class="upload-zone" onclick="triggerUpload('logo')">
        <div class="upload-icon">✦</div>
        <div class="upload-text">Subir logo (PNG transparente recomendado)</div>
      </div>
      <input type="file" id="upload-logo" accept="image/*" style="display:none" onchange="handleUpload('logo',this)">
      <div class="upload-preview" id="preview-logo"></div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Imágenes de proyectos</div>
      <div class="upload-zone" onclick="triggerUpload('project-imgs')">
        <div class="upload-icon">📁</div>
        <div class="upload-text">Subir múltiples imágenes para proyectos</div>
        <div style="font-size:0.7rem;color:#5a5875;margin-top:0.3rem">Se guardan como base64 en tu configuración</div>
      </div>
      <input type="file" id="upload-project-imgs" accept="image/*" multiple style="display:none" onchange="handleMultiUpload(this)">
      <div class="upload-preview" id="preview-projects"></div>
    </div>
  `;
}

function buildSectionsTab() {
  const secs = [
    { id:'hero', name:'Hero', icon:'🏠' },
    { id:'about', name:'Sobre mí', icon:'👤' },
    { id:'services', name:'Servicios', icon:'⚡' },
    { id:'projects', name:'Proyectos', icon:'💼' },
    { id:'experience', name:'Experiencia', icon:'📅' },
    { id:'testimonials', name:'Testimonios', icon:'💬' },
    { id:'clients', name:'Clientes', icon:'🤝' },
    { id:'contact', name:'Contacto', icon:'✉' }
  ];
  const saved = cfg.sections || {};
  return `
    <div class="admin-section">
      <div class="admin-section-title">Visibilidad y orden</div>
      <div style="font-size:0.75rem;color:#5a5875;margin-bottom:0.75rem">Arrastrá para reordenar · Ojo para mostrar/ocultar</div>
      <div class="sections-list" id="sections-list">
        ${secs.map(s => `
          <div class="section-item" draggable="true" data-section-id="${s.id}">
            <span class="drag-handle">⠿</span>
            <span class="section-item-icon">${s.icon}</span>
            <span class="section-item-name">${s.name}</span>
            <button class="section-vis-btn ${saved[s.id]!==false?'visible':''}"
                    onclick="toggleSectionVis('${s.id}',this)"
                    title="${saved[s.id]!==false?'Visible':'Oculta'}">
              ${saved[s.id]!==false?'👁':'🚫'}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Clientes (carrusel)</div>
      <div id="clients-admin-list">
        ${(cfg.clients||[]).map((c,i)=>`
          <div class="admin-field" style="display:flex;gap:0.4rem;align-items:center">
            <input class="admin-input" style="flex:1" value="${c.name}" placeholder="Nombre cliente" 
                   oninput="updateClient(${i},'name',this.value)">
            <button class="project-action-btn delete" onclick="confirmDeleteClient(${i})">🗑</button>
          </div>
        `).join('')}
      </div>
      <button class="admin-add-btn" style="margin-top:0.5rem" onclick="addClient()">+ Agregar cliente</button>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Experiencia / Timeline</div>
      <div id="timeline-admin-list">
        ${(cfg.timeline||[]).map((t,i)=>`
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:0.75rem;margin-bottom:0.5rem">
            ${field('Período', `tl-date-${i}`, t.date, 'input', `oninput="updateTimeline(${i},'date',this.value)"`)}
            ${field('Cargo/Rol', `tl-title-${i}`, t.title, 'input', `oninput="updateTimeline(${i},'title',this.value)"`)}
            ${field('Empresa/Lugar', `tl-company-${i}`, t.company, 'input', `oninput="updateTimeline(${i},'company',this.value)"`)}
            <button class="project-action-btn delete" onclick="confirmDeleteTimeline(${i})" style="margin-top:0.4rem">🗑 Eliminar</button>
          </div>
        `).join('')}
      </div>
      <button class="admin-add-btn" onclick="addTimelineItem()">+ Agregar entrada</button>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Servicios</div>
      <div id="services-admin-list">
        ${(cfg.services||[]).map((s,i)=>`
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:0.75rem;margin-bottom:0.5rem">
            <div style="display:grid;grid-template-columns:60px 1fr;gap:0.5rem">
              ${field('Emoji', `sv-icon-${i}`, s.icon, 'input', `oninput="updateService(${i},'icon',this.value)"`)}
              ${field('Título', `sv-title-${i}`, s.title, 'input', `oninput="updateService(${i},'title',this.value)"`)}
            </div>
            ${field('Descripción', `sv-desc-${i}`, s.desc, 'textarea', `oninput="updateService(${i},'desc',this.value)"`)}
            <button class="project-action-btn delete" onclick="confirmDeleteService(${i})">🗑 Eliminar</button>
          </div>
        `).join('')}
      </div>
      <button class="admin-add-btn" onclick="addService()">+ Agregar servicio</button>
    </div>
  `;
}

function buildProjectsTab() {
  return `
    <div class="admin-section">
      <div class="admin-section-title">Proyectos</div>
      <div class="projects-admin-list" id="projects-admin-list">
        ${(cfg.projects||[]).map((p,i) => buildProjectAdminItem(p, i)).join('')}
      </div>
      <button class="admin-add-btn" style="margin-top:0.75rem" onclick="addProject()">+ Agregar proyecto</button>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Testimonios</div>
      <div id="testimonials-admin-list">
        ${(cfg.testimonials||[]).map((t,i)=>`
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:0.75rem;margin-bottom:0.5rem">
            ${field('Nombre', `testi-name-${i}`, t.name, 'input', `oninput="updateTestimonial(${i},'name',this.value)"`)}
            ${field('Cargo/Empresa', `testi-role-${i}`, t.role, 'input', `oninput="updateTestimonial(${i},'role',this.value)"`)}
            ${field('Texto', `testi-text-${i}`, t.text, 'textarea', `oninput="updateTestimonial(${i},'text',this.value)"`)}
            ${field('Avatar (emoji)', `testi-avatar-${i}`, t.avatar, 'input', `oninput="updateTestimonial(${i},'avatar',this.value)"`)}
            <button class="project-action-btn delete" onclick="confirmDeleteTestimonial(${i})">🗑 Eliminar</button>
          </div>
        `).join('')}
      </div>
      <button class="admin-add-btn" onclick="addTestimonial()">+ Agregar testimonio</button>
    </div>
  `;
}

function buildProjectAdminItem(p, i) {
  const cats = ['community','diseño','video','politica','fotografia','otro'];
  return `
    <div class="project-admin-item" id="project-admin-${i}">
      <div class="project-admin-header" onclick="toggleProjectAdmin(${i})">
        <div class="project-admin-thumb">${p.image?`<img src="${p.image}">`:(p.emoji||'📁')}</div>
        <div class="project-admin-title">${p.title||'Proyecto sin título'}</div>
        <div class="project-admin-actions">
          <button class="project-action-btn delete" onclick="event.stopPropagation();confirmDeleteProject(${i})">🗑</button>
          <button class="project-action-btn" onclick="event.stopPropagation();toggleProjectAdmin(${i})">▾</button>
        </div>
      </div>
      <div class="project-admin-body" id="project-body-${i}">
        ${field('Título', `proj-title-${i}`, p.title, 'input', `oninput="updateProject(${i},'title',this.value)"`)}
        ${field('Descripción', `proj-desc-${i}`, p.desc, 'textarea', `oninput="updateProject(${i},'desc',this.value)"`)}
        ${field('Tags (separadas por coma)', `proj-tags-${i}`, (p.tags||[]).join(', '), 'input', `oninput="updateProject(${i},'tags',this.value.split(',').map(t=>t.trim()))"`)}
        <div class="admin-field">
          <label class="admin-label">Categoría</label>
          <select class="admin-select" onchange="updateProject(${i},'category',this.value)">
            ${cats.map(c=>`<option value="${c}" ${p.category===c?'selected':''}>${c}</option>`).join('')}
          </select>
        </div>
        ${field('Emoji (si no hay imagen)', `proj-emoji-${i}`, p.emoji||'📁', 'input', `oninput="updateProject(${i},'emoji',this.value)"`)}
        ${field('Link del proyecto (URL)', `proj-link-${i}`, p.link||'', 'input', `oninput="updateProject(${i},'link',this.value)"`)}
      </div>
    </div>
  `;
}

function buildSEOTab() {
  const s = cfg.seo || {};
  return `
    <div class="admin-section">
      <div class="admin-section-title">SEO & Meta Tags</div>
      ${field('Título de la página', 'seo-title', s.title, 'input')}
      ${field('Meta descripción', 'seo-desc', s.desc, 'textarea')}
      ${field('Palabras clave', 'seo-keywords', s.keywords, 'input')}
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Open Graph (redes sociales)</div>
      ${field('OG Título', 'og-title', s.ogTitle||s.title||'', 'input')}
      ${field('OG Descripción', 'og-desc', s.ogDesc||s.desc||'', 'textarea')}
      ${field('URL del sitio', 'og-url', s.url||'', 'input')}
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Google Analytics</div>
      ${field('ID de medición (G-XXXXXXXXXX)', 'ga-id', s.gaId||'', 'input')}
      <div style="font-size:0.75rem;color:#5a5875">Se inyectará automáticamente al guardar.</div>
    </div>
  `;
}

/* ─── Field helper ──────────────────────────────────────────── */
function field(label, id, val, type='input', extra='') {
  if (type === 'textarea') {
    return `<div class="admin-field"><label class="admin-label">${label}</label>
      <textarea class="admin-textarea" id="f-${id}" ${extra}>${val||''}</textarea></div>`;
  }
  return `<div class="admin-field"><label class="admin-label">${label}</label>
    <input type="text" class="admin-input" id="f-${id}" value="${(val||'').toString().replace(/"/g,'&quot;')}" ${extra}></div>`;
}

function colorField(label, varName, val) {
  const inputId = 'ci-' + varName.replace('--','');
  return `
    <div class="color-field">
      <label>${label}</label>
      <div class="color-swatch-wrap" onclick="document.getElementById('${inputId}').click()">
        <div class="color-swatch" style="background:${val}" id="cs-${varName.replace('--','')}"></div>
        <input class="color-hex" value="${val}" readonly>
        <input type="color" id="${inputId}" value="${val}" 
               oninput="updateColor('${varName}',this.value)">
      </div>
    </div>
  `;
}

/* ─── Lock ──────────────────────────────────────────────────── */
function initLock() {
  const input = document.getElementById('lock-input');
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });
}

window.checkPassword = function() {
  const val = document.getElementById('lock-input').value;
  const err = document.getElementById('lock-error');
  if (val === ADMIN_PASSWORD) {
    document.getElementById('admin-lock').classList.remove('show');
    openPanel();
  } else {
    err.classList.add('show');
    document.getElementById('lock-input').value = '';
    setTimeout(() => err.classList.remove('show'), 2500);
  }
};

/* ─── Trigger & Panel ───────────────────────────────────────── */
function initTrigger() {
  document.getElementById('admin-trigger')?.addEventListener('click', () => {
    const panel = document.getElementById('admin-panel');
    if (panel.classList.contains('open')) { togglePanel(false); }
    else { document.getElementById('admin-lock').classList.add('show'); }
  });
  document.getElementById('admin-overlay')?.addEventListener('click', () => togglePanel(false));
}

function openPanel() {
  togglePanel(true);
}

window.togglePanel = function(open) {
  const panel = document.getElementById('admin-panel');
  const overlay = document.getElementById('admin-overlay');
  const trigger = document.getElementById('admin-trigger');
  panel.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  trigger.classList.toggle('panel-open', open);
};

/* ─── Tabs ──────────────────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
    });
  });
}

/* ─── Tab content init (after DOM) ─────────────────────────── */
function initTabContent() {
  // Live update content fields
  document.querySelectorAll('.admin-input, .admin-textarea').forEach(input => {
    input.addEventListener('input', scheduleAutosave);
  });

  // Drag & drop on upload zones
  document.querySelectorAll('.upload-zone').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const files = e.dataTransfer.files;
      if (files.length) handleFileList(files, zone.id);
    });
  });
}

/* ─── Section visibility ────────────────────────────────────── */
window.toggleSectionVis = function(id, btn) {
  if (!cfg.sections) cfg.sections = {};
  const current = cfg.sections[id] !== false;
  cfg.sections[id] = !current;
  btn.textContent = cfg.sections[id] ? '👁' : '🚫';
  btn.classList.toggle('visible', cfg.sections[id]);
  window.PF?.applySectionVisibility(cfg.sections);
  scheduleAutosave();
};

/* ─── Drag reorder sections ─────────────────────────────────── */
function initDragSections() {
  const list = document.getElementById('sections-list');
  if (!list) return;
  let dragSrc = null;

  list.addEventListener('dragstart', e => {
    dragSrc = e.target.closest('.section-item');
    dragSrc?.classList.add('dragging');
  });
  list.addEventListener('dragover', e => {
    e.preventDefault();
    const target = e.target.closest('.section-item');
    if (target && target !== dragSrc) {
      target.classList.add('drag-over');
    }
  });
  list.addEventListener('dragleave', e => {
    e.target.closest('.section-item')?.classList.remove('drag-over');
  });
  list.addEventListener('drop', e => {
    e.preventDefault();
    const target = e.target.closest('.section-item');
    if (target && dragSrc && target !== dragSrc) {
      target.classList.remove('drag-over');
      const allItems = [...list.querySelectorAll('.section-item')];
      const fromIdx = allItems.indexOf(dragSrc);
      const toIdx = allItems.indexOf(target);
      if (fromIdx < toIdx) list.insertBefore(dragSrc, target.nextSibling);
      else list.insertBefore(dragSrc, target);
      reorderSections();
    }
  });
  list.addEventListener('dragend', () => {
    dragSrc?.classList.remove('dragging');
    list.querySelectorAll('.section-item').forEach(i => i.classList.remove('drag-over'));
  });
}

function reorderSections() {
  const items = document.querySelectorAll('#sections-list .section-item');
  const mainContent = document.querySelector('main') || document.body;
  items.forEach(item => {
    const id = item.dataset.sectionId;
    const sec = document.getElementById(id);
    if (sec) mainContent.appendChild(sec);
  });
}

/* ─── Color update ──────────────────────────────────────────── */
window.updateColor = function(varName, val) {
  if (!cfg.colors) cfg.colors = {};
  cfg.colors[varName] = val;
  document.documentElement.style.setProperty(varName, val);
  // Update swatch
  const swatchId = 'cs-' + varName.replace('--', '');
  const swatch = document.getElementById(swatchId);
  if (swatch) swatch.style.background = val;
  const hexInput = swatch?.nextElementSibling;
  if (hexInput) hexInput.value = val;
  scheduleAutosave();
};

/* ─── Font ──────────────────────────────────────────────────── */
window.selectFont = function(el, target) {
  const fontName = el.dataset.font;
  el.closest('.font-grid').querySelectorAll('.font-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const val = `'${fontName}', sans-serif`;
  if (target === 'display') {
    cfg.fontDisplay = val;
    document.documentElement.style.setProperty('--font-display', val);
  } else {
    cfg.fontBody = val;
    document.documentElement.style.setProperty('--font-body', val);
  }
  scheduleAutosave();
};

/* ─── Radius ────────────────────────────────────────────────── */
window.updateRadius = function(val) {
  cfg.radius = parseInt(val);
  document.getElementById('radius-val').textContent = val + 'px';
  document.documentElement.style.setProperty('--radius-lg', val + 'px');
  document.documentElement.style.setProperty('--radius-xl', (parseInt(val)+8) + 'px');
  scheduleAutosave();
};

/* ─── Theme toggle (inside panel) ──────────────────────────── */
window.toggleThemeAdmin = function(checked) {
  const theme = checked ? 'light' : 'dark';
  window.applyTheme?.(theme) || document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('pf-theme', theme);
};

/* ─── Preview responsive ────────────────────────────────────── */
window.previewResponsive = function(mode, btn) {
  document.querySelectorAll('.resp-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Just show info — real preview is via DevTools
  const msg = { desktop:'Vista desktop activa', tablet:'Redimensioná el navegador a ~768px', mobile:'Redimensioná el navegador a ~375px' };
  alert(msg[mode]);
};

/* ─── Upload ────────────────────────────────────────────────── */
window.triggerUpload = function(type) {
  document.getElementById('upload-' + type)?.click();
};

window.handleUpload = function(type, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const dataUrl = e.target.result;
    if (!cfg.images) cfg.images = {};
    cfg.images[type] = dataUrl;
    applyImage(type, dataUrl);
    showPreview(type, dataUrl);
    scheduleAutosave();
  };
  reader.readAsDataURL(file);
};

window.handleMultiUpload = function(input) {
  const files = [...input.files];
  if (!cfg.images) cfg.images = {};
  if (!cfg.images.projectImages) cfg.images.projectImages = [];
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      cfg.images.projectImages.push(e.target.result);
      showPreview('projects', e.target.result, true);
    };
    reader.readAsDataURL(file);
  });
  scheduleAutosave();
};

function handleFileList(files, zoneId) {
  const typeMap = { 'upload-hero':'hero-photo','upload-about':'about-photo' };
  const type = typeMap[zoneId];
  if (type && files[0]) {
    const reader = new FileReader();
    reader.onload = e => { applyImage(type, e.target.result); showPreview(type, e.target.result); };
    reader.readAsDataURL(files[0]);
  }
}

function applyImage(type, dataUrl) {
  if (type === 'hero-photo') {
    const el = document.getElementById('hero-avatar-img');
    if (el) { el.src = dataUrl; el.style.display = ''; }
    document.getElementById('hero-avatar-placeholder')?.style && (document.getElementById('hero-avatar-placeholder').style.display = 'none');
  }
  if (type === 'about-photo') {
    const el = document.getElementById('about-img');
    if (el) { el.src = dataUrl; el.style.display = ''; }
    document.getElementById('about-img-placeholder')?.style && (document.getElementById('about-img-placeholder').style.display = 'none');
  }
}

function showPreview(type, src, append=false) {
  const container = document.getElementById(`preview-${type.replace('-photo','').replace('-imgs','s')}`);
  if (!container) return;
  if (!append) container.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'preview-thumb';
  div.innerHTML = `<img src="${src}"><button class="preview-remove" onclick="this.parentElement.remove()">✕</button>`;
  container.appendChild(div);
}

/* ─── Projects CRUD ─────────────────────────────────────────── */
window.toggleProjectAdmin = function(i) {
  document.getElementById(`project-body-${i}`)?.classList.toggle('open');
};

window.updateProject = function(i, key, val) {
  if (!cfg.projects[i]) return;
  cfg.projects[i][key] = val;
  // Update panel title
  if (key === 'title') {
    const titleEl = document.querySelector(`#project-admin-${i} .project-admin-title`);
    if (titleEl) titleEl.textContent = val;
  }
  window.PF?.renderProjects(cfg.projects);
  scheduleAutosave();
};

window.addProject = function() {
  const newId = Date.now();
  cfg.projects.push({ id: newId, title: 'Nuevo proyecto', desc: '', tags: [], category: 'otro', emoji: '📁' });
  refreshProjectsList();
  window.PF?.renderProjects(cfg.projects);
  scheduleAutosave();
};

window.confirmDeleteProject = function(i) {
  showConfirm('Eliminar proyecto', `¿Eliminar "${cfg.projects[i]?.title}"?`, () => {
    cfg.projects.splice(i, 1);
    refreshProjectsList();
    window.PF?.renderProjects(cfg.projects);
    scheduleAutosave();
  });
};

function refreshProjectsList() {
  const list = document.getElementById('projects-admin-list');
  if (list) list.innerHTML = cfg.projects.map((p,i) => buildProjectAdminItem(p,i)).join('');
}

/* ─── Testimonials CRUD ─────────────────────────────────────── */
window.updateTestimonial = function(i, key, val) {
  if (cfg.testimonials[i]) cfg.testimonials[i][key] = val;
  window.PF?.renderTestimonials(cfg.testimonials);
  scheduleAutosave();
};
window.addTestimonial = function() {
  cfg.testimonials.push({ name: 'Nombre', role: 'Cargo', text: 'Excelente profesional...', avatar: '👤' });
  document.getElementById('tab-projects').innerHTML = buildProjectsTab();
  window.PF?.renderTestimonials(cfg.testimonials);
  scheduleAutosave();
};
window.confirmDeleteTestimonial = function(i) {
  showConfirm('Eliminar testimonio', `¿Eliminar este testimonio?`, () => {
    cfg.testimonials.splice(i, 1);
    document.getElementById('tab-projects').innerHTML = buildProjectsTab();
    window.PF?.renderTestimonials(cfg.testimonials);
    scheduleAutosave();
  });
};

/* ─── Clients CRUD ──────────────────────────────────────────── */
window.updateClient = function(i, key, val) {
  if (cfg.clients[i]) cfg.clients[i][key] = val;
  window.PF?.renderClients(cfg.clients);
  scheduleAutosave();
};
window.addClient = function() {
  cfg.clients.push({ name: 'CLIENTE' });
  document.getElementById('tab-sections').innerHTML = buildSectionsTab();
  initDragSections();
  window.PF?.renderClients(cfg.clients);
  scheduleAutosave();
};
window.confirmDeleteClient = function(i) {
  showConfirm('Eliminar cliente', '¿Eliminar este cliente?', () => {
    cfg.clients.splice(i, 1);
    document.getElementById('tab-sections').innerHTML = buildSectionsTab();
    initDragSections();
    window.PF?.renderClients(cfg.clients);
    scheduleAutosave();
  });
};

/* ─── Services CRUD ─────────────────────────────────────────── */
window.updateService = function(i, key, val) {
  if (cfg.services[i]) cfg.services[i][key] = val;
  window.PF?.renderServices(cfg.services);
  scheduleAutosave();
};
window.addService = function() {
  cfg.services.push({ icon: '✦', title: 'Nuevo servicio', desc: 'Descripción del servicio.' });
  document.getElementById('tab-sections').innerHTML = buildSectionsTab();
  initDragSections();
  window.PF?.renderServices(cfg.services);
  scheduleAutosave();
};
window.confirmDeleteService = function(i) {
  showConfirm('Eliminar servicio', '¿Eliminar este servicio?', () => {
    cfg.services.splice(i, 1);
    document.getElementById('tab-sections').innerHTML = buildSectionsTab();
    initDragSections();
    window.PF?.renderServices(cfg.services);
    scheduleAutosave();
  });
};

/* ─── Timeline CRUD ─────────────────────────────────────────── */
window.updateTimeline = function(i, key, val) {
  if (cfg.timeline[i]) cfg.timeline[i][key] = val;
  window.PF?.renderTimeline(cfg.timeline);
  scheduleAutosave();
};
window.addTimelineItem = function() {
  cfg.timeline.unshift({ date: 'Año — Presente', title: 'Nuevo cargo', company: 'Empresa o lugar' });
  document.getElementById('tab-sections').innerHTML = buildSectionsTab();
  initDragSections();
  window.PF?.renderTimeline(cfg.timeline);
  scheduleAutosave();
};
window.confirmDeleteTimeline = function(i) {
  showConfirm('Eliminar entrada', '¿Eliminar esta entrada del timeline?', () => {
    cfg.timeline.splice(i, 1);
    document.getElementById('tab-sections').innerHTML = buildSectionsTab();
    initDragSections();
    window.PF?.renderTimeline(cfg.timeline);
    scheduleAutosave();
  });
};

/* ─── Collect & Save ────────────────────────────────────────── */
function collectFormData() {
  // Content
  if (!cfg.content) cfg.content = {};
  const contentKeys = ['hero-name','hero-subtitle','hero-desc','hero-cta1','hero-cta2',
    'about-text','about-stat1-num','about-stat1-label','about-stat2-num','about-stat2-label',
    'about-stat3-num','about-stat3-label','contact-email','contact-phone','contact-location',
    'whatsapp-link','instagram-link','linkedin-link','footer-name','footer-copy'];
  contentKeys.forEach(k => {
    const el = document.getElementById('f-' + k);
    if (el) cfg.content[k] = el.value;
  });
  // Typed words
  const typedEl = document.getElementById('f-typed-words');
  if (typedEl) cfg.typedWords = typedEl.value.split(',').map(w => w.trim()).filter(Boolean);
  // Skills
  const skillsEl = document.getElementById('f-skills-field');
  if (skillsEl) cfg.skills = skillsEl.value.split(',').map(s => s.trim()).filter(Boolean);
  // SEO
  if (!cfg.seo) cfg.seo = {};
  const seoKeys = ['title:seo-title','desc:seo-desc','keywords:seo-keywords','ogTitle:og-title','ogDesc:og-desc','url:og-url','gaId:ga-id'];
  seoKeys.forEach(entry => {
    const [key, id] = entry.split(':');
    const el = document.getElementById('f-' + id);
    if (el) cfg.seo[key] = el.value;
  });
}

window.saveAll = function() {
  collectFormData();
  window.PF?.saveConfig(cfg);
  window.PF?.applyContent(cfg.content);
  window.PF?.renderSkills(cfg.skills);
  window.PF?.applySEO(cfg.seo);
  markSaved();
  showToast('✓ Cambios guardados');
};

/* ─── Autosave ──────────────────────────────────────────────── */
function scheduleAutosave() {
  clearTimeout(autosaveTimer);
  document.getElementById('autosave-text').textContent = 'Cambios pendientes...';
  document.getElementById('autosave-dot').classList.remove('saved');
  autosaveTimer = setTimeout(() => {
    collectFormData();
    window.PF?.saveConfig(cfg);
    markSaved();
  }, 2000);
}

function markSaved() {
  const dot = document.getElementById('autosave-dot');
  const text = document.getElementById('autosave-text');
  dot.classList.add('saved');
  text.textContent = 'Guardado automáticamente';
  setTimeout(() => { text.textContent = 'Auto-guardado activo'; }, 2500);
}

/* ─── Reset ─────────────────────────────────────────────────── */
window.confirmReset = function() {
  showConfirm('Restablecer todo', '¿Restaurar la configuración por defecto? Perderás todos los cambios.', () => {
    localStorage.removeItem('pf-config');
    location.reload();
  });
};

/* ─── Export / Import ───────────────────────────────────────── */
window.exportConfig = function() {
  collectFormData();
  const blob = new Blob([JSON.stringify(cfg, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'portfolio-config.json';
  a.click();
  showToast('✓ Configuración exportada');
};

window.triggerImport = function() { document.getElementById('import-input')?.click(); };

window.importConfig = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      cfg = JSON.parse(ev.target.result);
      window.PF?.saveConfig(cfg);
      location.reload();
    } catch { showToast('✗ Archivo JSON inválido', 'error'); }
  };
  reader.readAsText(file);
};

/* ─── Confirm dialog ────────────────────────────────────────── */
function initConfirmDialog() {}

function showConfirm(title, msg, onConfirm) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').textContent = msg;
  document.getElementById('confirm-dialog').classList.add('show');
  confirmCallback = onConfirm;
}
window.closeConfirm = function() {
  document.getElementById('confirm-dialog').classList.remove('show');
  confirmCallback = null;
};
window.runConfirm = function() {
  confirmCallback?.();
  closeConfirm();
};

/* ─── Toast ─────────────────────────────────────────────────── */
function showToast(msg, type='success') {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', bottom:'5rem', right:'2rem', zIndex:'9999',
    background: type==='success' ? 'linear-gradient(135deg,#7c6cfc,#5340e8)' : '#c94f3d',
    color:'#fff', padding:'0.75rem 1.25rem', borderRadius:'10px',
    fontSize:'0.85rem', fontWeight:'600', boxShadow:'0 8px 32px rgba(0,0,0,0.3)',
    animation:'fadeUp 0.3s ease', fontFamily:'Outfit,sans-serif'
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

/* ─── Footer actions init ───────────────────────────────────── */
function initFooterActions() {}
