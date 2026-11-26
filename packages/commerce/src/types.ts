/**
 * Importe con IVA incluido, en centimos
 * Ejemplo: 12,50€ -> { amount: 1250 , currencyCode: "EUR" }
 *
 * Guardamos en centimos por exactitud a la hora de tratar decimales.
 * Objeto -> Cantidad & tipoMoneda = EUR.
 */


export interface Money {
  amount: number;
  currencyCode: "EUR";
}

/**
 * Por qué puede fallar una operacion de escritura
 * El texto que ve el usuario  lo pone cada pantalla segun el código
 */

export type CommerceError=
  | "invalid_input" //Valor no valido, cantidad negativa, titulo vacio...etc
  | "not_found" //No encontrado (producto, linea o pedido no existente)
  | "out_of_stock" //Fuera de stock, sin unidades
  | "shipping_not_allowed" //envio no disponible, solo recogida
  | "empty_cart" //Carrito vacio, ningun producto seleccionado
  | "payment_failed" //Pago rechazado
  | "invalid_credentials" //email o contraseñas incorrectos
  | "unauthorized" //sin sesion o caducada
  | "invalid_transition";





/**
 * Resultado de una operacion de escritura.
 * Comprueba 'ok' antes de usar 'data': TypeScript no te deja hacerlo al revés
 */

export type Result<T> =
  | { ok: true; data: T}
  | { ok: false; error: CommerceError };

