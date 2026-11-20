# 04 · Arquitectura

## Piezas

```
 Tienda (apps/storefront)        Panel (apps/panel)
          \                        /
           \   Server Components  /
            v    y Server Actions v
     Contrato de datos (packages/commerce)
       ├─ adaptador mock     (DATA_SOURCE=mock)
       └─ adaptador medusa   (DATA_SOURCE=medusa)
                     |
                     v  SDK de Medusa, solo en servidor
          Backend Medusa v2 (apps/backend)
             ├─ PostgreSQL 17
             ├─ Redis 7
             └─ Stripe (modo test)
```

- Las pantallas **solo importan de `@clavapalos/commerce`**. No saben si hay mock o Medusa detrás.
- Nada del navegador llama al backend directamente (salvo el componente de pago de Stripe si lo exige).
- Datos de la tienda (nombre, dirección, horario, tarifas) en `config/store.json`, no en el código.

## Versiones

Se fijan en T0 con la última estable de cada una (sin `^`). Referencia a 19 de noviembre de 2026:

| Pieza | Versión |
| --- | --- |
| Node.js / pnpm | 24 LTS / 12.6 |
| Medusa | 2.22 |
| Next.js / React | 16.4 / 19.3 |
| TypeScript | 5.9 |
| PostgreSQL / Redis | 17 / 7 (Docker) |

## Backend

Scripts repetibles (idempotentes):

- `setup` (T3): región España en EUR con IVA incluido, canal de venta y clave publicable, ubicaciones Tienda y Almacén, opciones de entrega (recogida gratis y envío con tarifa fija), usuario del panel.
- `import-catalog` (T4): lee `data/catalogo.csv` y las imágenes y crea o actualiza productos, familias (categorías), precios y stock por ubicación. Reimportar no duplica.

Rutas propias:

- `GET /store/stock-levels` (T8): la Store API solo da el stock total; esta ruta lo da por ubicación (tienda y almacén).

## Estados del pedido

Propuesta a validar en T10 con la documentación de Medusa:

| Panel | En Medusa |
| --- | --- |
| Nuevo | Pedido creado, sin preparar |
| Preparando | Metadato del pedido (Medusa no tiene este paso) |
| Listo para recoger | Fulfillment creado desde la Tienda (opción de recogida) |
| Enviado | Fulfillment + envío con número de seguimiento |
| Entregado | Fulfillment marcado como entregado |

## Pago

El checkout se divide en `initiatePayment` (abre la sesión de pago) y `confirmPayment` (cierra el carrito y crea el pedido). En mock se simulan pago correcto y fallido. En T11 se conecta Stripe en modo test.

## Despliegue (T12)

Cada app con su `Dockerfile`, construido **desde la raíz del repo** (si no, el monorepo no encuentra `packages/commerce`). Tienda y panel protegidos con contraseña y `noindex` mientras sea una demo. Dónde se despliega: `pendientes.md`.
