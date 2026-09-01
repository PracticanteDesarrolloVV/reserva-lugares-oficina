require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const logger = require('./config/logger');
const notFoundHandler = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Parseo de body JSON
app.use(express.json());

// Seguridad global
app.use(helmet());
app.use(cors({ origin: process.env.ORIGENES_PERMITIDOS.split(',') }));

// Log de cada request HTTP, canalizado a winston
app.use(morgan('combined', { stream: { write: (msg) => logger.info(msg.trim()) } }));

// Health check
app.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

// Rutas de negocio se registran aquí (src/routes/) conforme se vayan agregando

// Manejo de ruta no encontrada y de errores centralizado (siempre al final)
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  logger.info(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
