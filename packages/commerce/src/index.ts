// Punto de entrada único para tienda y panel. Las pantallas importan solo de aquí.
// Los tipos e interfaces del contrato (T1) se añaden en este paquete.
export { getDataSource, type DataSource } from "./data-source";
export { storeConfig, type StoreConfig } from "./store-config";

export { getDemoCatalog, type Product } from './demo-catalog';
