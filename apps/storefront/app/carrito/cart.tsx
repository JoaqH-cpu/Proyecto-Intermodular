"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import type { Product } from "@clavapalos/commerce";

const CART_KEY = "clavapalos-demo-cart";
const money = (value: number) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value / 100);
type CartItems = Record<string, number>;
function subscribe(callback: () => void) { window.addEventListener("storage", callback); window.addEventListener("cart-update", callback); return () => { window.removeEventListener("storage", callback); window.removeEventListener("cart-update", callback); }; }
function readCart() { return localStorage.getItem(CART_KEY) || "{}"; }

export function Cart({ products }: { products: Product[] }) {
  const stored = useSyncExternalStore(subscribe, readCart, () => "{}");
  const [delivery, setDelivery] = useState("pickup");
  const [failure, setFailure] = useState(false);
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);
  let items: CartItems = {};
  try {
    const parsed = JSON.parse(stored);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      for (const product of products) {
        const quantity = parsed[product.id];
        if (Number.isInteger(quantity) && quantity > 0 && product.storeStock + product.warehouseStock > 0) items[product.id] = Math.min(quantity, product.storeStock + product.warehouseStock, 50);
      }
    }
  } catch { items = {}; }
  const lines = products.filter((product) => items[product.id] > 0);
  const pickupOnly = lines.some((product) => product.pickupOnly);
  const total = lines.reduce((sum, product) => sum + product.price * items[product.id], 0);
  function change(id: string, amount: number) {
    const next = { ...items };
    if (amount <= 0) delete next[id]; else next[id] = amount;
    localStorage.setItem(CART_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("cart-update"));
    if (products.some((product) => next[product.id] && product.pickupOnly)) setDelivery("pickup");
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pickupOnly && delivery === "delivery") { setError("Hay productos disponibles solo con recogida en tienda."); return; }
    if (failure) { setError("El pago simulado ha fallado. Desmarca la opción de fallo y vuelve a intentarlo; tus datos se conservan."); return; }
    localStorage.removeItem(CART_KEY);
    window.dispatchEvent(new Event("cart-update")); setError(""); setCompleted(true);
  }
  if (completed) return <section role="status"><h2>Pedido de prueba confirmado</h2><p>La compra se ha simulado en este navegador. No se ha enviado ningún pedido ni se ha efectuado ningún pago.</p><Link href="/">Volver a la tienda</Link></section>;
  if (!lines.length) return <section><p>Tu carrito está vacío.</p><Link href="/">Ver productos</Link></section>;
  return <><p className="demo-notice">Simulación: no introduzcas datos reales ni datos de tarjeta. No se efectúa ningún pago.</p><section aria-labelledby="cart-heading"><h2 id="cart-heading">Tu carrito</h2><ul className="cart-lines">{lines.map((product) => <li key={product.id}><div><strong>{product.name}</strong><p>{money(product.price)} · {product.pickupOnly ? "Solo recogida en tienda" : "Recogida o envío"}</p></div><label>Cantidad <select value={items[product.id]} onChange={(e) => change(product.id, Number(e.target.value))}>{Array.from({ length: Math.min(product.storeStock + product.warehouseStock, 50) }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label><button type="button" onClick={() => change(product.id, 0)}>Eliminar</button></li>)}</ul><p className="price">Productos: {money(total)} <span>IVA incluido</span></p></section>
  <section><h2>Finalizar compra simulada</h2><form onSubmit={submit} className="checkout-form"><fieldset><legend>Entrega</legend><label><input type="radio" name="delivery" value="pickup" checked={delivery === "pickup"} onChange={() => setDelivery("pickup")} /> Recogida en tienda (gratis)</label><label><input type="radio" name="delivery" value="delivery" checked={delivery === "delivery"} onChange={() => setDelivery("delivery")} disabled={pickupOnly} /> Envío a domicilio (tarifa pendiente)</label>{pickupOnly && <p>El envío no está disponible porque hay productos de solo recogida.</p>}</fieldset><label>Nombre de prueba <input name="name" required autoComplete="off" /></label><label>Correo de prueba <input name="email" type="email" required autoComplete="off" /></label>{delivery === "delivery" && <label>Dirección de prueba <input name="address" required autoComplete="off" /></label>}<p>Productos: {money(total)}. {delivery === "pickup" ? "Recogida gratuita." : "La tarifa de envío está pendiente de definir y no se suma en esta simulación."}</p><label><input type="checkbox" checked={failure} onChange={(e) => setFailure(e.target.checked)} /> Simular fallo de pago</label>{error && <p role="alert">{error}</p>}<button type="submit">Confirmar compra de prueba</button></form></section></>;
}

