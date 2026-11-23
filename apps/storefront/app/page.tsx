import { Suspense } from "react";
import Link from "next/link";
import { getDataSource, getDemoCatalog, storeConfig, type Product } from "@clavapalos/commerce";

type Search = { [key: string]: string | string[] | undefined };
const value = (v: string | string[] | undefined) => typeof v === "string" ? v : "";
const price = (amount: number) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(amount / 100);
const url = (key: string, text: string) => `/?${new URLSearchParams({ [key]: text })}`;

function availability(product: Product) {
  if (product.storeStock > 0 && product.storeStock <= storeConfig.lowStockThreshold) return `Quedan ${product.storeStock}, para recoger hoy`;
  if (product.storeStock > 0) return "Para recoger hoy";
  if (product.warehouseStock > 0) return "Disponible en 24-48 h";
  return "Agotado";
}

function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <div className="product-placeholder" aria-hidden="true">Sin imagen</div>
    <p className="muted">{product.family}</p>
    <h3><Link href={url("producto", product.id)}>{product.name}</Link></h3>
    <p className="price">{price(product.price)} <span>IVA incluido</span></p>
    <p className="availability">{availability(product)}</p>
    {product.pickupOnly && <p>Solo recogida en tienda</p>}
    <Link className="text-link" href={url("producto", product.id)}>Ver producto <span aria-hidden="true">→</span></Link>
  </article>;
}

export default function Home({ searchParams }: { searchParams: Promise<Search> }) {
  return <Suspense fallback={<main className="wrap">Cargando catálogo…</main>}><Catalog searchParams={searchParams} /></Suspense>;
}

async function Catalog({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const query = value(params.q).trim();
  const family = value(params.familia);
  const productId = value(params.producto);
  const onlyToday = value(params.hoy) === "1";
  const order = value(params.orden);
  const isMock = getDataSource() === "mock";
  const products = isMock ? getDemoCatalog() : [];
  const families = [...new Set(products.map((product) => product.family))].sort((a, b) => a.localeCompare(b, "es"));
  const product = products.find((item) => item.id === productId);
  const filtered = products.filter((item) => (!family || item.family === family) && (!query || `${item.name} ${item.family}`.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es"))) && (!onlyToday || item.storeStock > 0)).sort((a, b) => order === "precio-asc" ? a.price - b.price : order === "precio-desc" ? b.price - a.price : a.name.localeCompare(b.name, "es"));
  const isListing = !!(query || family || onlyToday || order);
  return <>
    <header className="site-header"><div className="wrap header-inner">
      <Link className="brand" href="/">{storeConfig.name}<span>Ferretería · {storeConfig.locality}</span></Link>
      <form action="/" className="search" role="search"><label className="sr-only" htmlFor="search">Buscar productos</label><input id="search" name="q" defaultValue={query} placeholder="¿Qué estás buscando?" /><button type="submit">Buscar</button></form>
    </div></header>
    <div className="demo-notice">Catálogo de ejemplo: precios y disponibilidad de prueba.</div>
    <main className="wrap">
      {!isMock ? <section><h1>Catálogo no disponible</h1><p>La conexión con el catálogo real todavía está pendiente.</p></section> : productId ? product ? <section className="detail"><div><Link href="/">← Volver al catálogo</Link><div className="detail-image">Sin imagen</div></div><div><p className="muted">{product.family}</p><h1>{product.name}</h1><p className="price detail-price">{price(product.price)} <span>IVA incluido</span></p><p className="availability">{availability(product)}</p><p>En tienda: {product.storeStock} · En almacén: {product.warehouseStock}</p><p>{product.pickupOnly ? "Solo recogida en tienda" : "Recogida en tienda o envío a domicilio"}</p><h2>Descripción</h2><p>{product.description}</p><p className="muted">La compra y el carrito estarán disponibles en una próxima fase.</p></div></section> : <section><h1>Producto no encontrado</h1><Link href="/">Volver al catálogo</Link></section> : <>
      {!isListing && <section className="intro"><p>{storeConfig.locality}</p><h1>Tu ferretería, también online</h1><p>Encuentra herramientas y productos para tus proyectos.</p><a className="button" href="#catalogo">Ver productos</a></section>}
      <section aria-labelledby="families"><h2 id="families">Busca por familia</h2><nav aria-label="Familias de productos" className="families">{families.map((item) => <Link key={item} href={url("familia", item)} aria-current={family === item ? "page" : undefined}>{item} <span aria-hidden="true">→</span></Link>)}</nav></section>
      <section id="catalogo"><div className="section-heading"><div><h2>{family || (query ? `Resultados para «${query}»` : isListing ? "Productos" : "Productos de ejemplo")}</h2><p className="muted">{filtered.length} {filtered.length === 1 ? "producto" : "productos"}</p></div>{isListing && <Link href="/">Ver todo</Link>}</div>
      <form className="filters" action="/">{query && <input type="hidden" name="q" value={query} />}{family && <input type="hidden" name="familia" value={family} />}<label className="check"><input type="checkbox" name="hoy" value="1" defaultChecked={onlyToday} /> Solo para recoger hoy</label><label>Ordenar <select name="orden" defaultValue={order}><option value="">Nombre</option><option value="precio-asc">Precio: menor a mayor</option><option value="precio-desc">Precio: mayor a menor</option></select></label><button type="submit">Aplicar</button></form>
      {filtered.length ? <div className="product-grid">{filtered.map((item) => <ProductCard key={item.id} product={item} />)}</div> : <p>No hemos encontrado productos. Prueba otra búsqueda o quita los filtros.</p>}</section>
      </>}
    </main><footer><div className="wrap"><strong>{storeConfig.name}</strong><p>{storeConfig.locality}</p><p>Recogida en tienda · Información y horarios pendientes de confirmar.</p></div></footer>
  </>;
}

