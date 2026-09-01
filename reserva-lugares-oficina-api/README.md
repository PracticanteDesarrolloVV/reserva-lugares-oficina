# reserva-lugares-oficina-api

API de reserva de lugares de oficina. Datos simulados en memoria (arreglos en JavaScript) — sin base de datos, sin archivos, sin caché. Todo se reinicia al reiniciar el servidor.

## Requisitos

- Node.js LTS vigente

## Configuración

1. Copiar `.env.example` a `.env` y ajustar valores si es necesario.
2. Instalar dependencias:
   ```
   npm install
   ```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor con recarga automática (nodemon) |
| `npm start` | Levanta el servidor en modo normal |

## Estructura

```
src/
├── config/       # Configuración: logger (winston), variables de entorno
├── middlewares/  # CORS, validación/sanitización, manejo de errores
├── controllers/  # Lógica que maneja la solicitud HTTP (req, res)
├── routes/       # Definición de endpoints
├── services/     # Lógica de negocio pura
├── models/       # Estructura de los datos en memoria
└── app.js        # Inicializa servidor, middlewares y rutas
```

## Seguridad configurada

- `helmet` — cabeceras HTTP de seguridad, aplicado globalmente.
- `cors` — lista blanca de orígenes permitidos vía `ORIGENES_PERMITIDOS` (.env).
- `express-validator` — disponible para validar/sanitizar `body`/`query`/`params` en cada ruta (se usa al agregar endpoints).
- `morgan` + `winston` — log de requests y de errores de aplicación.
- Manejo de errores centralizado — nunca expone el stack trace al cliente.

## Formato estándar de respuesta

- Éxito: `{ success: true, data: {...} }`
- Error: `{ success: false, error: { code, message } }`

## Endpoints

- `GET /health` — estado básico del servicio.
