import { getDataSource, storeConfig } from "@clavapalos/commerce";

export default function Home() {
  return (
    <>
      <header className="panel-header">
        <h1>{storeConfig.name}</h1>
        <span>Panel de gestión</span>
      </header>

      <main className="dashboard">

        <section className="dashboard-heading">
          <h2>Inicio</h2>
          <p>Resumen de tu ferretería</p>
        </section>

        <section className="stats-grid">

          <article className="stat-card">
            <h3>Pedidos pendientes</h3>
            <strong>8</strong>
          </article>

          <article className="stat-card">
            <h3>Listos para recoger</h3>
            <strong>4</strong>
          </article>

          <article className="stat-card">
            <h3>Productos con poco stock</h3>
            <strong>3</strong>
          </article>

        </section>

        <section className="section-card">
          <h2>Estados de pedidos</h2>

          <div className="status-list">
            <span className="status status-info">
              Nuevo pedido
            </span>

            <span className="status status-warning">
              En preparación
            </span>

            <span className="status status-success">
              Listo para recoger
            </span>

            <span className="status status-error">
              Cancelado
            </span>
          </div>
        </section>

        <section className="section-card">
          <h2>Acciones rápidas</h2>

          <div className="actions">
            <button type="button" className="btn-primary">
              Ver pedidos
            </button>

            <button type="button" className="btn-secondary">
              Añadir producto
            </button>
          </div>
        </section>

        <footer className="panel-footer">
          <p>Prototipo visual · Datos ficticios</p>
          <p>Origen de datos: {getDataSource()}</p>
        </footer>

      </main>
    </>
  );
}