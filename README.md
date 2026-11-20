# ClavaPalos · Tienda online y panel de gestión

Proyecto Intermodular de 2º DAW (curso 2026-2027), IES D. Antonio Hellín Costa, Puerto de Mazarrón.

Tienda online de **Ferretería ClavaPalos S.L.** (empresa tipo, datos ficticios) y panel sencillo para su dueño. El cliente compra desde el móvil con **recogida en tienda** o **envío a domicilio** y paga; el dueño ve entrar el pedido en su panel y lo prepara.

Toma como referencia funcional un ecommerce real desarrollado por Ariden Labs para una ferretería de la zona. El código de este repo lo escribe el equipo desde cero.

> **Estado:** solo documentación. El código empieza con el ticket T0 (sprint 0, desde el 23 de noviembre).

## Equipo

| Persona | GitHub | Parte |
| --- | --- | --- |
| Joaq | @JoaqH-cpu | Backend (Medusa), contrato de datos, pago y despliegue |
| Rafa | @RafeClase | Diseño (identidad, tokens, componentes) y panel del dueño |
| Elliot | @Elliot2901 | Tienda (frontend) y tests end-to-end |

Profesor responsable: Juan David Gutiérrez Marín.

## Stack previsto

Monorepo **pnpm** · **Medusa v2** (backend) · **Next.js** con App Router (tienda y panel) · **TypeScript** estricto · **PostgreSQL** y **Redis** en Docker. Versiones exactas: se fijan en T0.

Estructura prevista:

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
