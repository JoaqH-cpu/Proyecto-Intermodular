# 06 · Contrato de datos

**Estado: borrador para T1.** Se revisa entre los tres en el sprint 0. Una vez aprobado, solo cambia con el OK de los tres. El código vive en `packages/commerce/src/`.

## Convenciones

- Importes en céntimos, `currencyCode: "EUR"`, IVA incluido.
- Fechas en ISO 8601.
- Escrituras: `{ ok: true, data }` o `{ ok: false, error }` con códigos propios (`types.ts`). El texto para el usuario lo pone la interfaz.
- Lecturas: el dato, o `null` si no existe. Un fallo técnico (backend caído) lanza excepción y lo recoge el `error.tsx` de la app.
- Identificadores opacos: las pantallas no los interpretan.
- El carrito y la sesión del panel viven en cookies que gestiona el adaptador: las operaciones no reciben `cartId` ni token.

## Disponibilidad

Con el umbral de poco stock de `config/store.json` (3 por defecto):

| Estado | Condición | Texto en la tienda |
| --- | --- | --- |
| `available_today` | tienda > umbral | Para recoger hoy |
| `low_stock` | 0 < tienda ≤ umbral | Quedan N, para recoger hoy |
| `available_soon` | tienda = 0 y almacén > 0 | Disponible en 24-48 h |
| `sold_out` | tienda + almacén = 0 | Agotado |

## Tienda · `StorefrontData` (Elliot la usa, Joaq la implementa)

| Operación | Devuelve |
| --- | --- |
| `getStoreInfo()` | Nombre, dirección, teléfonos, horario |
| `listFamilies()`, `getFamily(handle)` | Familias con subfamilias y nº de productos |
| `listProducts(query)` | Página de productos: familia, subfamilia, búsqueda, "solo para recoger hoy", orden, página |
| `listFeatured(limit)` | Destacados |
| `getProduct(handle)` | Ficha: precio, imágenes, descripción, disponibilidad por ubicación, solo recogida |
| `getCart()` | Carrito o `null` |
| `addToCart(productId, qty)`, `updateCartLine(lineId, qty)`, `removeCartLine(lineId)` | `Result<Cart>` |
| `listDeliveryOptions()`, `setDeliveryOption(id)` | Recogida y envío (envío bloqueado si hay productos de solo recogida) |
| `initiatePayment(details)` | `Result<PaymentSession>` |
| `confirmPayment(sessionId)` | `Result<Order>` (si falla, el carrito sigue vivo) |
| `getOrder(id)` | Pedido hecho desde esta sesión |

## Panel · `PanelData` (Rafa la usa, Joaq la implementa)

| Operación | Devuelve |
| --- | --- |
| `login(email, password)`, `logout()`, `getCurrentUser()` | Sesión |
| `listOrders(query)`, `getOrder(id)` | Pedidos por estado y fecha, detalle con stock de cada línea |
| `updateOrderStatus(id, status, tracking?)` | `Result<PanelOrder>`; cambios no permitidos → `invalid_transition` |
| `listOrdersSince(date)` | Pedidos nuevos para el aviso |
| `listProducts(query)`, `getProduct(id)` | Productos con stock por ubicación |
| `updateProduct(id, patch)` | Precio, título, familia, activo, solo recogida |
| `setStock(id, location, qty)` | Fija las unidades de una ubicación |
| `createProduct(input)` | Alta rápida con foto |
| `listStockAlerts()` | Agotados y con poco stock |

Transiciones de estado permitidas:

- Recogida: `new → preparing → ready_for_pickup → delivered`
- Envío: `new → preparing → shipped (con nº de seguimiento) → delivered`

## Pendiente de cerrar en T1

- [ ] Tipos exactos de `Product`, `Cart`, `Order` y `PanelOrder`
- [ ] Filtros y paginación del panel
- [ ] Qué devuelve exactamente `PaymentSession` para Stripe
