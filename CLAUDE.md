# CLAUDE.md · ClavaPalos (Proyecto Intermodular 2º DAW)

Contexto para asistentes de IA. Léelo entero antes de tocar nada, y después `docs/` en orden (01 → 07), `docs/decisiones.md` y `docs/pendientes.md`.

## Qué es

Tienda online de la ferretería **ClavaPalos S.L.** (Puerto de Mazarrón, empresa tipo con datos ficticios) y panel para su dueño. Proyecto académico de un equipo de tres: lo que se genere con IA lo tiene que entender y poder explicar la persona que lo sube, y se declara en la memoria.

- **Tienda:** el cliente busca, ve si hay stock en la tienda hoy, compra desde el móvil con recogida en tienda (por defecto, gratis) o envío a domicilio, y paga (Stripe en modo test).
- **Panel:** el dueño, poco digitalizado, ve entrar pedidos, cambia su estado y da de alta productos desde el móvil o una tablet. **Sencillez antes que funcionalidades.**

## Arquitectura (detalle en `docs/04-arquitectura.md`)

Monorepo pnpm:
- `apps/backend`: Medusa v2. Configuración con scripts repetibles; nada a mano en el admin.
- `apps/storefront` y `apps/panel`: Next.js 16 (App Router), TypeScript estricto. Sistema de estilos: ver `docs/pendientes.md`.
- `packages/commerce` (`@clavapalos/commerce`): contrato de datos y adaptadores `mock` y `medusa`. **Las pantallas solo conocen las interfaces, nunca el adaptador.** Se elige con `DATA_SOURCE=mock|medusa`.
- `config/`: datos de la tienda (`store.json`) y tokens de diseño (`theme.css`).

## Reglas

### Negocio
- Precios PVP con IVA incluido, en céntimos.
- Entrega: recogida en tienda (gratis, por defecto) o envío a domicilio (tarifa fija de `config/store.json`). Productos `solo_recogida` no admiten envío.
- Stock en dos ubicaciones: Tienda y Almacén. "Para recoger hoy" solo si hay stock en la tienda.
- Estados del pedido: Nuevo → Preparando → Listo para recoger → Entregado, o Enviado (con nº de seguimiento) → Entregado.

### Técnica
- **No escribas de memoria la API de Medusa v2 ni la de Next.js 16.** Consulta la documentación oficial actual (Next: `node_modules/next/dist/docs/`) y cita la página en el commit.
- Versiones fijadas sin `^`.
- Scripts del backend idempotentes: ejecutarlos dos veces no duplica nada.
- Secretos solo en variables de entorno. `.env.example` con todos los nombres comentados.
- Operaciones de escritura del contrato: `{ ok: true, data }` o `{ ok: false, error }` con códigos propios.

### Contenido
- Datos de muestra creíbles y genéricos ("Taladro percutor 750 W"); nada de marcas reales ni fichas inventadas.
- Imágenes solo con licencia libre y crédito en `data/imagenes/CREDITOS.md`.
- Sin reseñas, testimonios ni cifras inventadas.

### Diseño (detalle en `docs/02-guia-diseno.md`)
- Mobile-first real (390 px) con composición propia en escritorio (1440 px). Panel también a 820 px.
- Accesibilidad: HTML semántico, foco visible, contraste AA, áreas táctiles de 48 px.
- Colores y tipografías solo desde `config/theme.css`.

## Cómo trabajar
- Interfaz, documentación, comentarios y mensajes de commit en español; nombres del código y de archivos en inglés (Conventional Commits con ámbito: `feat(storefront): añade ...`).
- Por tickets (`docs/07-tickets.md`), una rama por ticket, pull request a `main`. Nunca push directo a `main`.
- Al terminar: `pnpm lint` y `pnpm typecheck` en verde, y docs actualizados.
- Lo no decidido no se inventa: hueco + entrada en `docs/pendientes.md`.
