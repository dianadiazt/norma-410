# 📘 Norma 410 – Documentación Técnica EPMMOP

Repositorio oficial de documentación del proyecto **Norma 410**, desarrollado para la **Empresa Pública Metropolitana de Movilidad y Obras Públicas (EPMMOP)**.

Este sitio utiliza **VitePress** para la generación de documentación estática y se despliega automáticamente en **GitHub Pages** mediante **GitHub Actions**.

---

## 🌐 Sitio publicado

🔗 https://dianadiazt.github.io/norma-410/

---

## 🛠️ Tecnologías utilizadas

- ⚡ **VitePress**
- 🟢 **Node.js 20**
- 📄 **Markdown**
- 🤖 **GitHub Actions**
- 🌍 **GitHub Pages**

---

## 📁 Estructura del proyecto

```text
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.js
│   │   └── dist/              # Build generado (usado para Pages)
│   ├── index.md
│   └── procedimiento_normativo.md
├── .github/
│   └── workflows/
│       └── deploy.yml         # Workflow de despliegue
├── package.json
└── README.md
```

## LEVANTAR EL PROYECTO

```text
CD docs-norma410

npm run docs:dev
