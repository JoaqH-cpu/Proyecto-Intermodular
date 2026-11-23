"use client";

import { useState } from "react";

const CART_KEY = "clavapalos-demo-cart";
export function AddToCart({ id, available }: { id: string; available: number }) {
  const [message, setMessage] = useState("");
  function add() {
    let cart: Record<string, number> = {};
    try { cart = JSON.parse(localStorage.getItem(CART_KEY) || "{}"); } catch { cart = {}; }
    const current = Number.isInteger(cart[id]) && cart[id] > 0 ? cart[id] : 0;
    if (current >= Math.min(available, 50)) { setMessage("No hay más unidades de prueba disponibles."); return; }
    cart[id] = current + 1;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    setMessage("Añadido al carrito de prueba.");
  }
  return <div><button type="button" onClick={add} disabled={available <= 0}>Añadir al carrito</button><p role="status">{message}</p></div>;
}

