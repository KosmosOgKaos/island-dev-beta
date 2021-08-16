---
inject: true
to: src/components/index.ts
prepend: true
skip_if: { <%= name %> }
---
export { <%= name %> } from './<%= name %>'
