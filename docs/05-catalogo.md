# 05 · Catálogo de muestra

El catálogo vive en `data/catalogo.csv` y lo importa el script `import-catalog` del backend (T4). El adaptador mock (T2) usa los mismos datos.

## Formato de `data/catalogo.csv`

| Columna | Formato |
| --- | --- |
| `sku` | Único. `CP-0001`… |
| `titulo` | Nombre genérico ("Taladro percutor 750 W") |
| `familia`, `subfamilia` | Texto. Se convierten en categorías de Medusa |
| `precio_eur` | PVP con IVA incluido, punto decimal |
| `stock_tienda`, `stock_almacen` | Unidades enteras |
| `solo_recogida` | `si` / `no` (pesados o voluminosos: no se envían) |
| `destacado` | `si` / `no` (aparece en la portada) |
| `peso_g` | Gramos |
| `imagen` | Nombre del archivo en `data/imagenes/` |
| `descripcion` | Una o dos frases útiles. Entre comillas si lleva comas |

## Imágenes

Solo con licencia libre (Pexels, Unsplash) o propias, con su crédito en `data/imagenes/CREDITOS.md` (archivo, autor, URL, licencia). Nada de fotos de fabricantes ni de otras tiendas. Responsable: Rafa.

## Objetivo

150-250 productos genéricos de ferretería, creíbles, en 8-12 familias. Propuesta de familias (a cerrar en S1):

| Familia | Ejemplos de subfamilias |
| --- | --- |
| Herramientas | Martillos, destornilladores, llaves, alicates, medición |
| Herramienta eléctrica | Taladros, amoladoras, lijadoras, sierras |
| Tornillería y fijación | Tornillos, tacos, clavos, bridas |
| Fontanería | Grifos, sifones, llaves de paso, accesorios |
| Electricidad | Cable, regletas, bombillas, linternas, pilas |
| Pintura | Pinturas, rodillos y brochas, cintas, disolventes |
| Construcción | Cementos y yesos, morteros, herramienta de albañil |
| Jardín | Riego, herramienta de jardín |
| Climatización | Ventiladores, calefacción |
| Hogar | Cerraduras, candados, escaleras, organización |

## Reglas

- Nombres genéricos ("Taladro percutor 750 W"). Nada de marcas reales ni fichas técnicas inventadas de una marca.
- Precios PVP creíbles con IVA incluido.
- Algunos productos pesados como `solo_recogida` (sacos, escaleras grandes).
- Algunos con stock solo en almacén y alguno agotado, para enseñar todos los estados.
- Destacados de temporada para la portada.
