# Decisiones

Formato: fecha · decisión · quién. Lo que se decide en `pendientes.md` pasa aquí.

- 2026-11-12 · Proyecto: tienda online de la ferretería ClavaPalos S.L. (Puerto de Mazarrón) con backend Medusa, sin Shopify · Equipo
- 2026-11-19 · Referencia funcional: el ecommerce de Ariden Labs para una ferretería de la zona (Medusa v2 + Next.js, tienda + panel + capa de datos compartida). Se usa como especificación; el código de este repo se escribe desde cero y se declara en la memoria (1.1 y 7.2) · Joaq
- 2026-11-19 · Reparto: Joaq backend, contrato de datos, pago y despliegue; Rafa diseño y panel; Elliot tienda y tests end-to-end · Joaq
- 2026-11-19 · Planificación en 5 sprints de dos semanas (23 nov – 21 feb), proyecto cerrado antes de la FCT (1 mar 2027) · Joaq
- 2026-11-19 · Monorepo pnpm con `apps/backend`, `apps/storefront`, `apps/panel` y `packages/commerce` · Joaq
- 2026-11-20 · El repo arranca solo con documentación; el código se escribe desde cero a partir de T0 · Joaq
- 2026-11-19 · Flujo de trabajo: issue por ticket, una rama por ticket, pull request con revisión de otro integrante, `main` protegida, CI con lint, typecheck y build · Joaq
- 2026-11-22 · Versiones fijadas en T0: Node 24, pnpm 12.21.0, Medusa 2.23.0, Next.js 16.4.6, React 19.3.1, TypeScript 5.9.3 (no 7: Medusa sigue en la serie 5/6), ESLint 9.39.5 (el que usa `create-next-app`), PostgreSQL 17 y Redis 7 · Joaq
- 2026-11-22 · pnpm en monorepo con el hoisting que pide Medusa (`publicHoistPattern` en `pnpm-workspace.yaml`) y scripts de instalación permitidos solo a una lista (`allowBuilds`) · Joaq
- 2026-11-26 · Idioma: mensajes de commit y comentarios del código en español (antes en inglés). Los nombres del código y de archivos siguen en inglés. Los commits anteriores se quedan como están · Joaq (pendiente de OK de Rafa y Elliot)
