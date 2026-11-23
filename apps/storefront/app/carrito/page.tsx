import Link from "next/link";
import { getDataSource, getDemoCatalog } from "@clavapalos/commerce";
import { Cart } from "./cart";

export default function CartPage() {
  const isMock = getDataSource() === "mock";
  return <main className="wrap"><p><Link href="/">← Volver a la tienda</Link></p><h1>Carrito y compra de prueba</h1>{isMock ? <Cart products={[...getDemoCatalog()]} /> : <p>La compra con catálogo real aún no está disponible.</p>}</main>;
}
