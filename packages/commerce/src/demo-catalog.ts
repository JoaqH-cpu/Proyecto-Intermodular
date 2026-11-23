/** Datos provisionales de T5. T1/T2 sustituirán este contrato y catálogo de ejemplo. */
export interface Product {
  id: string;
  name: string;
  family: string;
  price: number;
  description: string;
  storeStock: number;
  warehouseStock: number;
  pickupOnly: boolean;
}

const products: Product[] = [
  { id: 'martillo', name: 'Martillo de uña', family: 'Herramientas', price: 1290, description: 'Martillo de uso general para clavar y retirar clavos.', storeStock: 6, warehouseStock: 2, pickupOnly: false },
  { id: 'destornilladores', name: 'Juego de destornilladores', family: 'Herramientas', price: 1590, description: 'Juego para trabajos habituales de montaje y reparación.', storeStock: 2, warehouseStock: 3, pickupOnly: false },
  { id: 'taladro', name: 'Taladro percutor 750 W', family: 'Herramienta eléctrica', price: 5990, description: 'Taladro percutor para trabajos de bricolaje.', storeStock: 0, warehouseStock: 4, pickupOnly: false },
  { id: 'rodillo', name: 'Rodillo de pintura', family: 'Pintura', price: 650, description: 'Rodillo para pintar paredes y techos.', storeStock: 8, warehouseStock: 6, pickupOnly: false },
  { id: 'grifo', name: 'Grifo de jardín', family: 'Fontanería', price: 890, description: 'Grifo para una toma de agua exterior.', storeStock: 0, warehouseStock: 0, pickupOnly: false },
  { id: 'cemento', name: 'Saco de cemento', family: 'Construcción', price: 725, description: 'Cemento para trabajos de construcción y reparación.', storeStock: 3, warehouseStock: 5, pickupOnly: true },
  { id: 'bombilla', name: 'Bombilla LED', family: 'Electricidad', price: 490, description: 'Bombilla para iluminación doméstica.', storeStock: 12, warehouseStock: 5, pickupOnly: false },
  { id: 'manguera', name: 'Manguera de jardín', family: 'Jardín', price: 1990, description: 'Manguera para tareas de riego.', storeStock: 5, warehouseStock: 2, pickupOnly: false },
];

export function getDemoCatalog(): readonly Product[] {
  return products;
}
