# 03 · Flujos

## Cliente (móvil primero)

| Pantalla | Qué tiene que enseñar |
| --- | --- |
| Portada | Buscador, familias, destacados de temporada, la tienda (dirección, horario, recogida) |
| Familia / búsqueda | Listado denso, filtros básicos ("solo para recoger hoy", orden), precio y disponibilidad |
| Ficha | Precio con IVA, "Para recoger hoy" / "En 24-48 h" / "Quedan N" / "Agotado", "Solo recogida en tienda" si aplica, añadir al carrito |
| Carrito | Líneas, cantidades, total, aviso si hay productos de solo recogida |
| Checkout | Datos, recogida en tienda (por defecto) o envío, pago |
| Confirmación | Número de pedido y qué pasa ahora ("Te avisamos cuando esté listo") |

Estados a contemplar: producto agotado, poco stock, carrito vacío, pago fallido y reintento sin perder lo escrito.

## Dueño (tablet o móvil)

| Pantalla | Qué tiene que enseñar |
| --- | --- |
| Login | Un formulario |
| Inicio | Lo pendiente (nuevos, preparando, listos sin recoger, por reponer) y ventas de hoy. Un pedido nuevo aparece solo y avisa |
| Pedidos | Pestañas por estado, periodo y buscador |
| Detalle | Qué preparar y de dónde sale (tienda o almacén), cliente, entrega, botones para avanzar estado |
| Productos | Buscar, cambiar precio y stock, activar o desactivar |
| Alta rápida | Foto con la cámara, nombre, precio, stock, familia. Publicado en menos de un minuto |
| Clientes | Quién compra, cuánto y qué |

## Momento de la defensa

1. Panel abierto en una tablet o portátil.
2. Desde un móvil, compra de un producto con recogida en tienda.
3. El pedido entra en el panel con aviso.
4. Se marca como "Preparando" y luego "Listo para recoger".

Requiere el backend real (`DATA_SOURCE=medusa`). Plan B: con `mock`, cada lado por separado.
