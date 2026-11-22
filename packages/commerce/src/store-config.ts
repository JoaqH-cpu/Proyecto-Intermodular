import storeJson from "../../../config/store.json";

/** Datos de la tienda que no cambian con el catálogo. Fuente única: config/store.json. */
export interface StoreConfig {
  name: string;
  legalName: string;
  locality: string;
  currency: "EUR";
  /** Por debajo de esta cantidad, la disponibilidad se muestra como "pocas unidades". */
  lowStockThreshold: number;
}

export const storeConfig: StoreConfig = storeJson as StoreConfig;
