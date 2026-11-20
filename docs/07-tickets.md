# 07 · Tickets y sprints

Cada ticket es un issue en GitHub con su responsable. Plan completo, con el reparto y el calendario dibujado, en el doc de equipo "Briefing, planning y reparto".

## Sprints

| Sprint | Fechas | Al terminar se puede enseñar |
| --- | --- | --- |
| S0 · Base | 23 nov – 6 dic | Repo con las tres apps arrancando, contrato aprobado, dirección visual elegida |
| S1 · Catálogo | 7 – 20 dic | Tienda navegable con mock; backend con catálogo importado |
| — Navidad | 21 dic – 7 ene | Colchón |
| S2 · Compra | 8 – 24 ene | Compra completa con mock; panel con pedidos; tienda leyendo de Medusa |
| S3 · Real | 25 ene – 7 feb | Compra en la tienda → aparece en el panel; Stripe en test; desplegado con HTTPS |
| S4 · Cierre | 8 – 21 feb | Tests end-to-end, memoria completa, ensayo de la defensa |

Fechas de entrega de prácticas y defensa: por confirmar con Juanda.

## Tickets

| # | Ticket | Responsable | Sprint | Hecho cuando |
| --- | --- | --- | --- | --- |
| T0 | Repo, monorepo, Docker Compose, Medusa y las dos apps arrancando, lint y typecheck | Joaq | S0 | `pnpm dev` levanta todo en los tres portátiles |
| T1 | Contrato de datos: tipos e interfaces de tienda y panel | Joaq (con Elliot y Rafa) | S0 | Aprobado por los tres en `06-contrato.md` |
| D1 | Identidad: 2-3 direcciones visuales, logo, tokens en `theme.css` | Rafa | S0 | El equipo elige una |
| D2 | Mockups de tienda (390 y 1440 px) y panel (390, 820 y 1440 px) | Rafa | S0-S1 | Pantallas clave dibujadas antes de programarlas |
| T2 | Adaptador mock de tienda y panel con catálogo de ejemplo | Joaq | S1 | Tienda y panel pintan sin backend |
| T3 | Script `setup` del backend | Joaq | S1 | Ejecutarlo dos veces no duplica nada |
| T4 | Catálogo CSV + fotos con créditos + script `import-catalog` | Joaq (script), Rafa (fotos) | S1 | Reimportar no duplica nada |
| D3 | Componentes base: precio, disponibilidad, tarjeta de producto, cabecera, pie, botones, iconos | Rafa | S1 | Los usan tienda y panel |
| T5 | Tienda: portada, familias, búsqueda y ficha | Elliot | S1 | Revisado a 390 y 1440 px con mock |
| T6 | Tienda: carrito, checkout, confirmación | Elliot | S2 | Compra completa con mock |
| T7 | Panel: login, inicio, pedidos, detalle y estados | Rafa | S2 | Flujo de pedido completo con mock |
| T8 | Adaptador Medusa de la tienda + `/store/stock-levels` | Joaq | S2 | La tienda funciona con `DATA_SOURCE=medusa` |
| T9 | Panel: productos, alta rápida con foto, stock y clientes | Rafa | S2-S3 | Alta de un producto en menos de un minuto |
| T10 | Adaptador Medusa del panel + estados sobre Medusa | Joaq | S3 | Compra en la tienda → aparece en el panel |
| T11 | Stripe en modo test | Joaq | S3 | Pago de prueba correcto, y fallido con reintento |
| T12 | Dockerfiles, despliegue, contraseña y `noindex` | Joaq | S3 | Tienda, panel y API con HTTPS |
| T13 | Páginas de tienda (horario, cómo llegar, recogida) y legales | Elliot | S3 | Textos provisionales marcados |
| T14 | Revisión de accesibilidad | Rafa | S3 | Checklist de la guía de diseño en verde |
| T15 | Tests end-to-end (recogida, envío, pedido en el panel) | Elliot | S4 | Pasan contra la versión desplegada |

Si Rafa va justo con el panel, T9 pasa a Elliot.

## Memoria (P2 y P3)

| Persona | Apartados |
| --- | --- |
| Joaq | 3.4 tecnologías y viabilidad, 3.5.2 E/R, 3.5.4 despliegue, 3.8 seguridad, 8.2 instalación |
| Rafa | 3.5 prototipos y guía de estilo, 3.8 accesibilidad, 3.1 metodología |
| Elliot | 3.5.1 casos de uso, 3.7 plan de pruebas, 8.2 manual de usuario |
