// Nota: El error indica que no se encuentra el módulo "contentlayer/source-files".
// Asegúrate de tener instalado el paquete 'contentlayer' y que la ruta sea correcta.
// Si usas TypeScript, puede que necesites instalar los tipos de Contentlayer o agregar una declaración de módulo personalizada.
// Asegúrate de tener instalado el paquete 'contentlayer' y 'contentlayer/source-files' ejecutando:
// npm install contentlayer contentlayer/source-files

import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Servicio = defineDocumentType(() => ({
  name: 'Servicio',
  filePathPattern: `servicios/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    areaServed: { type: 'string', required: false },
    hasOfferCatalog: { type: 'boolean', required: false },
    faq: { type: 'list', of: { type: 'string' }, required: false },
    schema: { type: 'json', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (doc: any) => `/servicios/${doc.slug}` },
  },
}));

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    category: { type: 'string', required: false },
    schema: { type: 'json', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: doc => `/blog/${doc.slug}` },
  },
}));

const Legal = defineDocumentType(() => ({
  name: 'Legal',
  filePathPattern: `legal/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: doc => `/legal/${doc.slug}` },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Servicio, Blog, Legal],
});
