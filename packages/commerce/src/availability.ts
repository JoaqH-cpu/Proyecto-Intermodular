import type { Availability } from "./types";
import { storeConfig } from "./store-config";

/**
 * Calcula la disponibilidad de un producto a partir de su stock.
 * Unica fuente de verdad: tienda y panel usan esta funcion, nunca su propio "if".
 */
export function getAvailability(
  storeQty: number,
  warehouseQty: number,
  threshold: number = storeConfig.lowStockThreshold
): Availability {
  if (storeQty > threshold) {
    return "available_today";
  }
  if (storeQty > 0) {
    return "low_stock";
  }
  if (warehouseQty > 0) {
    return "available_soon";
  }
  return "sold_out";
}
