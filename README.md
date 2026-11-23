# ClavaPalos · Tienda online y panel de gestión

Proyecto Intermodular de 2º DAW (curso 2026-2027), IES D. Antonio Hellín Costa, Puerto de Mazarrón.

Tienda online de **Ferretería ClavaPalos S.L.** (empresa tipo, datos ficticios) y panel sencillo para su dueño. El cliente compra desde el móvil con **recogida en tienda** o **envío a domicilio** y paga; el dueño ve entrar el pedido en su panel y lo prepara.

Toma como referencia funcional un ecommerce real desarrollado por Ariden Labs para una ferretería de la zona. El código de este repo lo escribe el equipo desde cero.

> **Estado:** T0 hecho. Las tres apps arrancan con páginas provisionales; el contrato de datos llega con T1.

## Equipo

| Persona | GitHub | Parte |
| --- | --- | --- |
| Joaq | @JoaqH-cpu | Backend (Medusa), contrato de datos, pago y despliegue |
| Rafa | @RateClase | Diseño (identidad, tokens, componentes) y panel del dueño |
| Elliot | @Elliot2901 | Tienda (frontend) y tests end-to-end |

Profesor responsable: Juan David Gutiérrez Marín.

## Stack

| Pieza | Versión |
| --- | --- |
| Node.js / pnpm | 24 LTS / 12.21.0 |
| Medusa | 2.23.0 |
| Next.js / React | 16.4.6 / 19.3.1 |
| TypeScript / ESLint | 5.9.3 / 9.39.5 |
| PostgreSQL / Redis | 17 / 7 (Docker) |

Estructura:

```
apps/
  backend/      Medusa v2: Store API, Admin API, admin de Medusa      :9000
  storefront/   Next.js: la tienda                                     :3000
  panel/        Next.js: el panel del dueño                            :3001
packages/
  commerce/     Contrato de datos + adaptadores mock y Medusa
config/         Datos de la tienda y tokens de diseño
data/           Catálogo de muestra (CSV) e imágenes con créditos
docs/           Contexto, arquitectura, contrato, tickets, decisiones
```

## Arrancar en local

Necesitas **Node.js 24**, **pnpm 12.21.0** (`npm install -g pnpm@12.21.0`) y **Docker Desktop** abierto.

```
pnpm install
pnpm db:up
```

Copia los `.env.example` (en PowerShell, `copy` en vez de `cp`):

```
cp apps/backend/.env.example apps/backend/.env
cp apps/storefront/.env.example apps/storefront/.env.local
cp apps/panel/.env.example apps/panel/.env.local
```

La primera vez, crea las tablas y un usuario para el admin de Medusa:

```
pnpm db:migrate
pnpm user:create -e tu@correo.com -p una-contraseña
```

Y arranca todo:

```
pnpm dev
```

| App | URL |
| --- | --- |
| Tienda | http://localhost:3000 |
| Panel | http://localhost:3001 |
| Backend (Store/Admin API) | http://localhost:9000 |
| Admin de Medusa | http://localhost:9000/app |

Antes de abrir un pull request: `pnpm lint`, `pnpm typecheck` y `pnpm build` en verde (la CI hace lo mismo).

## Empezar

1. Lee `docs/` en orden (01 → 07).
2. Mira tus tickets en `docs/07-tickets.md` y en el tablero de GitHub.
3. Sigue `CONTRIBUTING.md` para ramas, commits y pull requests.

## Documentación

| Archivo | Contenido |
| --- | --- |
| `docs/01-contexto.md` | La empresa, el cliente y qué se entrega |
| `docs/02-guia-diseno.md` | Tono, color, qué evitar, checklist por pantalla |
| `docs/03-flujos.md` | Recorridos del cliente y del dueño, pantalla a pantalla |
| `docs/04-arquitectura.md` | Apps, capa de datos, estados del pedido |
| `docs/05-catalogo.md` | Catálogo de muestra y formato del CSV |
| `docs/06-contrato.md` | Contrato de datos entre pantallas y backend (borrador para T1) |
| `docs/07-tickets.md` | Tickets, responsables y sprints |
| `docs/decisiones.md` | Decisiones tomadas |
| `docs/pendientes.md` | Lo que falta decidir |
| `CONTRIBUTING.md` | Cómo trabajamos con Git y GitHub |
| `CLAUDE.md` | Contexto para asistentes de IA |

## Prototipo T5

La tienda incluye una portada, familias, búsqueda, filtros y ficha con un catálogo de ejemplo provisional en `packages/commerce/src/demo-catalog.ts`. Los precios y existencias son de prueba. El catálogo debe sustituirse por el contrato T1 y el adaptador mock T2 cuando estén disponibles; las imágenes, el diseño definitivo y los componentes compartidos dependen de T4, D1, D2 y D3. La cesta y la compra pertenecen a T6. La interfaz muestra un aviso si se selecciona Medusa, cuyo adaptador aún no está implementado.
