import { getDataSource, storeConfig } from "@clavapalos/commerce";

// Página provisional de T0: comprueba que la app arranca y lee el paquete compartido.
export default function Home() {
  return (
    <main>
      <h1>
        {storeConfig.name} · Tienda
      </h1>
      <p>{storeConfig.locality}</p>
      <p>Datos: {getDataSource()}</p>
    </main>
  );
}
