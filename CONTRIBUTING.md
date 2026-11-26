# Cómo trabajamos

## Flujo de una tarea

1. Coge un issue del tablero asignado a ti y muévelo a **En curso**.
2. Actualiza `main` y crea tu rama:
   ```
   git switch main
   git pull
   git switch -c feat/t5-ficha-producto
   ```
3. Commits pequeños mientras trabajas.
4. Sube la rama y abre un **pull request** a `main`. Rellena la plantilla y enlaza el issue (`Cierra #12`).
5. Pide revisión a otro integrante. Se corrige lo que diga y, con su aprobación y la CI en verde, se fusiona con **Squash and merge**.
6. Borra la rama y mueve el issue a **Hecho**.

## Ramas

| Prefijo | Para |
| --- | --- |
| `feat/` | Algo nuevo |
| `fix/` | Arreglar un fallo |
| `docs/` | Solo documentación |
| `chore/` | Configuración, dependencias |

Formato: `prefijo/t<número>-descripcion-corta`.

## Commits

Conventional Commits con el ámbito de la app. El tipo (`feat`, `fix`…) y el ámbito se quedan como están; la descripción va en español, en presente:

```
feat(storefront): añade la ficha de producto con disponibilidad
fix(backend): evita categorías duplicadas al reimportar
feat(panel): botones de estado del pedido
docs: añade al contrato las operaciones del carrito
chore: sube next a 16.4.7
```

Ámbitos: `backend`, `storefront`, `panel`, `commerce`, `config`, `data`, `ci`.

## Revisión

- Quien revisa lo prueba en local, no solo lee el código.
- Comentarios concretos: qué falla y cómo arreglarlo.
- `packages/commerce` y `config/store.json` los usa todo el mundo: cualquier cambio ahí lo revisan los tres.

## Reglas que no se rompen

- Nada de push directo a `main`.
- Nada de secretos en el repo: solo `.env.example` con nombres y comentarios.
- Las pantallas solo hablan con `@clavapalos/commerce`. Nunca con Medusa directamente.
- Colores, tipografías y espacios solo desde `config/theme.css`.
- Lo que no está decidido no se inventa: se apunta en `docs/pendientes.md`. Lo decidido va a `docs/decisiones.md`.
- **Cada uno tiene que poder explicar todo lo que sube.** Si usas IA, revisa y entiende el código, y apúntalo para la declaración de la memoria (apartado 7.2).

## Idioma

Interfaz, documentación, comentarios del código y mensajes de commit en español. Nombres del código (tipos, funciones, variables) y de archivos en inglés.
