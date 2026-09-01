const logger = require('../config/logger');

// Middleware de manejo de errores centralizado. Va al final de app.js, después de las rutas.
// Nunca expone el stack trace en la respuesta HTTP al cliente.
const errorHandler = (err, req, res, next) => {
  logger.error('Error no controlado', err);

  res.status(err.status || 500).json({
    success: false,
    error: {
      code: err.code || 'INTERNAL_ERROR',
      message: 'Ocurrió un error al procesar la solicitud.',
    },
  });
};

module.exports = errorHandler;
