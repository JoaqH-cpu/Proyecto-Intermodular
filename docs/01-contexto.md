# 01 · Contexto

## La empresa

**Ferretería ClavaPalos S.L.**, Puerto de Mazarrón (Murcia). Empresa tipo con datos ficticios para el Proyecto Intermodular (visto bueno de Juanda pendiente: `pendientes.md`).

- Ferretería de barrio con 150-300 referencias: herramientas, fontanería, electricidad, pintura, construcción, jardín, climatización.
- Clientes: vecinos y, en verano, gente de la costa. Particulares que reparan o reforman, y algún profesional.
- No tiene nada digitalizado. Quiere vender online siendo dueña de su tienda (nada de Shopify ni plataformas cerradas).

## Qué ganamos frente a una gran superficie o Amazon

La tienda física con su stock real: lo pides y lo recoges hoy, o te lo enviamos. La web es una extensión del mostrador. No se compite en amplitud de catálogo.

## Usuarios

| Usuario | Situación | Qué necesita |
| --- | --- | --- |
| Cliente | Móvil, a menudo en la calle a pleno sol. Busca algo concreto | Saber en 3 segundos si lo tienen hoy, cuánto cuesta y si puede recogerlo |
| Dueño | Mostrador, de pie, móvil o tablet. Poco digitalizado | Ver pedidos nuevos, prepararlos y dar de alta productos sin ayuda |

## Qué se entrega

1. **Tienda:** buscador, familias, ficha con disponibilidad por ubicación, carrito, checkout de una página (recogida por defecto o envío), pago con Stripe en modo test, confirmación. Páginas de la tienda y legales.
2. **Panel:** login, inicio con lo pendiente y las ventas, pedidos y sus estados, productos, alta rápida con foto, stock, clientes.
3. **Backend Medusa v2** configurado por scripts, con catálogo importado y despliegue con HTTPS.

**Momento de la defensa:** compramos desde el móvil con recogida en tienda y el pedido entra al momento en el panel, donde lo marcamos como Listo para recoger.

## Fuera de alcance

Precios para profesionales, cuentas de cliente, devoluciones, transportista real, correo transaccional, avisos por WhatsApp, multidioma. Van como mejoras en la memoria (6.3).

## Referencia

El alcance y la arquitectura siguen un ecommerce real hecho por Ariden Labs para una ferretería de la zona (noviembre de 2026). Se usa como especificación; el código de este repo es nuestro y se escribe desde cero.
