# Reserva de Lugares de Oficina

Aplicación web para reservar lugares de trabajo en la oficina. Permite ver si ya tienes un lugar apartado, consultarlo en un mapa de solo lectura, o elegir fecha y lugar disponible para hacer una nueva reserva.

## Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Ant Design](https://ant.design/) (UI + tokens de tema)
- [react-router-dom](https://reactrouter.com/) (ruteo)
- [dayjs](https://day.js.org/) (manejo de fechas)

## Estructura del proyecto

```
src/
├── api/                  # Servicios simulados (datos dummy), contrato fijo del proyecto
│   ├── seats-api.js
│   └── reservations-api.js
├── components/
│   └── SeatMap.jsx       # Mapa de lugares reutilizable (modo lectura y modo selección)
├── pages/
│   ├── Inicio.jsx        # Resumen de la reserva activa
│   └── ReservarLugar.jsx # Selección de fecha y lugar
├── App.jsx               # Layout general y rutas
└── main.jsx              # Punto de entrada + ConfigProvider (tema)
```

## Cómo correr el proyecto en local

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/PracticanteDesarrolloVV/reserva-lugares-oficina.git
cd reserva-lugares-oficina

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abre `http://localhost:5173` en el navegador.

### Otros scripts disponibles

- `npm run build` — genera la versión de producción.
- `npm run preview` — sirve localmente el build de producción.
- `npm run lint` — corre ESLint sobre el proyecto.

## Contrato de datos

Los endpoints simulados en `src/api/` respetan el siguiente contrato (no debe modificarse en futuras actividades del proyecto):

- `GET /api/seats?date=YYYY-MM-DD` — grid completo de lugares con su estado para esa fecha.
- `GET /api/reservations/me` — reservas activas del usuario autenticado.
- `POST /api/reservations` — body `{ seatId, date }`, crea una reserva.
- `PUT /api/reservations/:id` — body `{ seatId, date }`, reprograma una reserva existente.
- `DELETE /api/reservations/:id` — cancela una reserva.

**Forma de un lugar:**
```json
{ "id": 2, "code": "A2", "row": 1, "column": 2, "status": "disponible" }
```

**Forma de una reserva:**
```json
{ "id": 10, "seatId": 2, "seatCode": "A2", "date": "2026-09-01", "userEmail": "..." }
```

## Responsable

PracticanteDesarrolloVV (practicantedes@verdevalle.com)
