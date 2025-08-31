# Duartec Instalaciones Informáticas

Proyecto web moderno para Duartec (Burgos, España) basado en Next.js 14+, TypeScript, Tailwind CSS y shadcn/ui.

## Estructura principal

- **Contenido en MDX** bajo `content/` (servicios, blog, etc.)
- **Rutas** en `app/` (estáticas y dinámicas)
- **Componentes** en `components/`
- **SEO** con next-seo y datos estructurados JSON-LD
- **Chatbot** integrado (API streaming + RAG)
- **i18n** preparado (ES por defecto, EN futuro)
- **Accesibilidad** y cumplimiento GDPR/LOPDGDD

## Edición de contenido

- Edita los archivos `.mdx` en `content/servicios/` para modificar servicios.
- Añade nuevos servicios creando un nuevo archivo `.mdx` siguiendo el esquema de los existentes.
- FAQs: Añade o edita bloques FAQ en cada MDX de servicio.
- Blog: Añade artículos en `content/blog/`.

## Configuración de variables de entorno

Crea un archivo `.env.local` con:

```
OPENAI_API_KEY=tu_clave
NEXT_PUBLIC_SITE_URL=https://tudominio.com
GTM_ID=[opcional]
RECAPTCHA_SITE_KEY=[opcional]
RECAPTCHA_SECRET_KEY=[opcional]
```

## Scripts principales

- `pnpm dev` — desarrollo
- `pnpm build` — build producción
- `pnpm lint` — linting
- `pnpm test` — tests

## Cómo mantener FAQs

Edita la sección FAQ en cada archivo MDX de servicio. El chatbot usará estas FAQs como contexto.

## Añadir un nuevo servicio

1. Crea un archivo MDX en `content/servicios/`.
2. Añade los campos: título, descripción, beneficios, proceso, garantías, FAQs.
3. Añade datos estructurados (schema.org) en el frontmatter.

## Contacto y soporte

Para dudas, contacta con el equipo de desarrollo o consulta la documentación interna.
