# 🚀 Portfolio Premium — Instrucciones

## Estructura del proyecto

```
portfolio/
├── index.html          ← Página principal
├── css/
│   ├── main.css        ← Estilos del sitio
│   └── admin.css       ← Estilos del panel admin
├── js/
│   ├── main.js         ← Lógica del sitio
│   └── admin.js        ← Panel de administración
└── README.md
```

## Cómo usar

1. **Abrí** `index.html` en tu navegador (Chrome recomendado)
2. **Hacé click** en el botón ⚙ (abajo a la derecha)
3. **Ingresá** la contraseña: `admin123`
4. **Editá** todo desde el panel

## Panel de administración

| Tab | Qué podés editar |
|-----|-----------------|
| 📝 Contenido | Textos, nombre, descripción, redes sociales, footer |
| 🎨 Diseño | Colores, fuentes, bordes, modo claro/oscuro |
| 🖼 Media | Foto de perfil, foto "sobre mí", logo, imágenes proyectos |
| 📦 Secciones | Activar/ocultar secciones, reordenar, servicios, clientes, timeline |
| 💼 Proyectos | Agregar, editar y eliminar proyectos y testimonios |
| 🚀 SEO | Título, meta descripción, keywords, Open Graph, Google Analytics |

## Cambiar contraseña

Abrí `js/admin.js` y buscá la línea:
```javascript
const ADMIN_PASSWORD = 'admin123';
```
Cambiá `admin123` por tu contraseña.

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub
2. Subí todos los archivos
3. Andá a Settings → Pages → Branch: main → Save
4. Tu portfolio estará en: `https://tuusuario.github.io/nombre-repo`

## Publicar en Netlify (más fácil)

1. Andá a [netlify.com](https://netlify.com)
2. Arrastrá la carpeta `portfolio` al panel
3. ¡Listo! Te da una URL gratis

## Tips

- **Autosave**: Los cambios se guardan automáticamente en el navegador cada 2 segundos
- **Export/Import**: Exportá tu config como JSON para hacer backup o compartir entre computadoras
- **Imágenes**: Se guardan como base64 en el navegador (localStorage). Para sitios en producción, subí las imágenes a un servidor
- **Contraseña por defecto**: `admin123`

## Personalización avanzada

Para cambiar los colores del tema directamente:
- Abrí `css/main.css`
- Modificá las variables en `:root { ... }`

Para agregar nuevas secciones:
- Añadí el HTML en `index.html`
- Registrala en el array `secs` dentro de `buildSectionsTab()` en `admin.js`
